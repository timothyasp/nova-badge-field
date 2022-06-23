import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import SelectField from '../../vendor/laravel/nova/resources/js/fields/Form/SelectField'

Nova.booting((app, router, store) => {
    app.component('index-badge', IndexField);
    app.component('detail-badge', DetailField);
    app.component('form-badge', SelectField);
})
