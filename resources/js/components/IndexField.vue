<template>
    <span class="rounded-full uppercase px-2 py-1 text-xs font-bold"
          :style="{ backgroundColor: backgroundColor(), color: textColor() }"
    >{{ field.value }}</span>
</template>

<script>
    import colors from '../mixins/colors';

    export default {
        props: ['resourceName', 'field'],
        mixins: [colors]
    }
</script>
