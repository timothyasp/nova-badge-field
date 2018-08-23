<template>
    <span class="rounded-full uppercase px-2 py-1 text-xs font-bold"
          :style="{ backgroundColor: field.colorMap[field.value], color: textColor(field.colorMap[field.value]) }"
    >{{ field.value }}</span>
</template>

<script>
    export default {
        props: ['resourceName', 'field'],
        methods: {
            textColor: function (color) {
                //if only first half of color is defined, repeat it
                if (color.length < 5) {
                    color += color.slice(1);
                }

                return (color.replace('#', '0x')) > (0xffffff / 2) ? '#333' : '#fff';
            }
        }
    }
</script>
