Nova.booting((Vue, router) => {
    Vue.component('index-badge', require('./components/IndexField'));
    Vue.component('detail-badge', require('./components/DetailField'));
    Vue.component('form-badge', require('./components/FormField'));
})
