export default {
    methods: {
        displayValue: function () {
            if (this.field.useLabel) {
                let result = _.find(this.field.options, {value: this.field.value})
                if (result.label !== undefined) {
                    return result.label;
                }
            }
            return  this.field.value;
        },
    }
}
