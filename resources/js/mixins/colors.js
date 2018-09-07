export default {
    methods: {
        backgroundColor: function () {
            let value = this.field.colorMap[this.field.value];

            if (value.hasOwnProperty('background')) {
                return value.background;
            }

            return value;
        },
        textColor: function () {
            let value = this.field.colorMap[this.field.value];

            if (value.hasOwnProperty('color')) {
                return value.color;
            }

            let color = value;

            //if only first half of color is defined, repeat it
            if (color.length < 5) {
                color += color.slice(1);
            }

            color = (color.replace('#', '0x')) > (0xffffff / 2) ? '#333' : '#fff';

            return color;
        }
    }
}