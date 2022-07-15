import zCarousel from './index.vue'
zCarousel.install = (app:any) => {
    app.component(zCarousel.name, zCarousel)
}

export default zCarousel;

