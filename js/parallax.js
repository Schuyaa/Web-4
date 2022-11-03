window.addEventListener('scroll', e =>{
    document.body.style.cssText = `--scrolltop: ${this.scrollY}px`
})