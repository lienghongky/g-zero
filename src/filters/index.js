
/**
 * getImageUrl
 * @param {String} string
 */
export function fileUrl(path) {
        try {
            var image = require( `@/assets/${path}`)
            return image
        }catch (e){
            console.log(e)
            return ''
        }
    
  }