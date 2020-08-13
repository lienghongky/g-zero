<template>
<div @click="lockBot" class="robot z-200">
    <lottie :path="avatar" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="100" :width="100" />
</div>
</template>

<script>
import {
    isDevice
} from '@/utils/devices'
import {
    mapGetters
} from 'vuex'

export default {
    components: {

    },
    data() {
        return {
            isMoving: true,
            position: {
                x: 0,
                y: 0
            },
            superRect: {
                width: 0,
                height: 0
            },
            inset: {
                top: 10,
                left: 20,
                right: 100,
                bottom: 100
            },
            offset: {
                top: 60,
                left: 40,
                right: 200,
                bottom: 200
            },
            reduis: isDevice('mobile') ? 50 : 200
        }
    },
    computed: {
        ...mapGetters({
            moveable: 'Bot/moveable',
            avatar: 'Bot/avatar',
            storePosition: 'Bot/position'
        }),
        rect() {
            return {
                width: this.$el.clientWidth,
                height: this.$el.clientHeight
            }
        },
        insetOffset() {
            return {
                top: this.offset.top,
                left: this.offset.left,
                right: this.superRect.width - this.offset.right,
                bottom: this.superRect.height - this.offset.bottom
            }
        },
        translatedPosition() {
            var x = this.position.x - this.rect.width / 2,
                y = this.position.y - this.rect.height / 2

            var preTranslate = this.limitBound(x, y),
                r = this.reduis

            this.$emit('onEnterOffsetArea', {
                top: preTranslate.y < this.insetOffset.top,
                left: preTranslate.x < this.insetOffset.left,
                right: preTranslate.x > this.insetOffset.right,
                bottom: preTranslate.y > this.insetOffset.bottom
            })

            /// archor with degre  
            var deg = 320 // Math.floor(Math.random() * 360);
            var tx = this.superRect.width / 2 - this.position.x,
                ty = this.superRect.height / 2 - this.position.y
            if (preTranslate.x < this.insetOffset.left ||
                preTranslate.x > this.insetOffset.right ||
                preTranslate.y < this.insetOffset.top ||
                preTranslate.y > this.insetOffset.bottom) {
                if (tx > 0 && ty > 0) deg = 45 //Math.floor(Math.random() * 90);
                else if (tx < 0 && ty > 0) {
                    deg = 135;
                    r = this.reduis * 1.5;
                } //Math.floor(Math.random() * 90)+90;
                else if (tx < 0 && ty < 0) deg = 200 //Math.floor(Math.random() * 90)+180;
                else if (tx > 0 && ty < 0) deg = 315 //Math.floor(Math.random() * 90)+270;
            }

            /*
            if(preTranslate.y < this.offset.top) { deg = 45;r = this.reduis * 1.2 }
            else if (preTranslate.y > this.superRect.height - this.offset.bottom){deg = 340;r = this.reduis * 1.2}
            else if (preTranslate.x > this.superRect.width - this.offset.right){deg = 145;r = this.reduis * 1.2}
            else{deg = 320;r = this.reduis}
            */

            var dx = Math.cos(deg * Math.PI / 180) * r,
                dy = Math.sin(deg * Math.PI / 180) * r
            x = x + dx
            y = y + dy

            return this.limitBound(x, y)
        }
    },
    mounted() {
        document.addEventListener('copy', (e) => {
            var text = window.getSelection().toString().replace(/[\n\r]+/g, '');
            this.$store.dispatch('Bot/setBot',{messages:text})
            this.copyToClipboard(text);
        });
        document.addEventListener('mouseover', (e) => {
            // console.log('over',e)
        });
        document.addEventListener('mousemove', (e) => {
            this.position = {
                x: e.clientX,
                y: e.clientY
            }
            var win = window,
                doc = document,
                docElem = doc.documentElement,
                body = doc.getElementsByTagName('body')[0],
                width = win.innerWidth || docElem.clientWidth || body.clientWidth,
                height = win.innerHeight || docElem.clientHeight || body.clientHeight;
            this.superRect = {
                width,
                height
            }
            if (this.moveable) {
                this.move()
            }

        });
        document.addEventListener('mouseleave', (e) => {
            // console.log('leave')
        });
        document.addEventListener('mouseenter', (e) => {
            //  console.log('enter')
        })

        this.position = this.storePosition
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0],
            width = win.innerWidth || docElem.clientWidth || body.clientWidth,
            height = win.innerHeight || docElem.clientHeight || body.clientHeight;
        this.superRect = {
            width,
            height
        }
        this.move()
    },
    methods: {
        emitMoveEvent() {
            this.$emit('onBotMove', {
                botPosition: this.translatedPosition,
                clientPosition: this.position,
                botRect: this.rect,
                superRect: this.superRect,
                inset: this.inset,
                offset: this.offset,
                insetOffset: this.insetOffset
            })
            this.$store.dispatch('Bot/setBotElement', {
                botPosition: this.translatedPosition,
                clientPosition: this.position,
                botRect: this.rect,
                superRect: this.superRect,
                inset: this.inset,
                offset: this.offset,
                insetOffset: this.insetOffset
            })
        },
        move() {
            // console.log(JSON.stringify(this.position))
            this.emitMoveEvent()
            this.$el.setAttribute('style', `left:${this.translatedPosition.x}px;top:${this.translatedPosition.y}px;`);
        },
        moveOnce : (function () {
                var executed = false;
                return function () {
                    if (!executed) {
                        executed = true;
                        
                    }
                };
            })(),

        limitBound(x, y) {
            // Limit off Viewport case
            x = Math.min(x, this.superRect.width - this.inset.right)
            x = Math.max(x, this.inset.left)

            y = Math.min(y, this.superRect.height - this.inset.bottom)
            y = Math.max(y, this.inset.top)
            return {
                x: x,
                y: y
            }
        },
        lockBot() {
            this.$store.dispatch('Bot/setBot',{messages:"Tap on me to unlock me! please!"})
            this.$store.dispatch('Bot/setBotMoveable', !this.moveable)
        },
        copyToClipboard(text) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed";
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("cut");
                } catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    return false;
                } finally {
                    document.body.removeChild(textarea);
                }
        }
    },
    watch: {
        storePosition: function (newVal) {
            // console.log(JSON.stringify(newVal));

        }
    }
}
</script>

<style scoped>
.robot {
    position: absolute;
    left: 50%;
    top: 50%;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
    /* animation: cursorAnim 5s infinite alternate;  */
}

@keyframes cursorAnim {
    from {
        transform: translateY(10px)
    }

    to {
        transform: translateY(0px);
    }
}
</style>
