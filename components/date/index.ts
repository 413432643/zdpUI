import ZDate from './index.vue'
ZDate.install = (app:any) => {
    app.component(ZDate.name, ZDate)
}

export default ZDate;