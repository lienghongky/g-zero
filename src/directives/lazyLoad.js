export default {
    inserted: (el, binding, vndoe) => {
      function loadImage() {
        const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
        );
        if (imageElement) {
          imageElement.addEventListener("load", () => {
            vndoe.elm.removeChild(vndoe.elm.children[0])
          });
          imageElement.addEventListener("error", (e) => {
            console.log('el',e,vndoe,el.children)
            //vndoe.elm.removeChild(vndoe.elm.children[1])
          });
          imageElement.src = imageElement.dataset.url;
        }
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        const options = {
          root: null,
          threshold: "0"
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
  };