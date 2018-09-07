<template>
    <panel-item :field="field">
        <template slot="value">
            <span class="rounded-full uppercase px-2 py-1 text-xs font-bold"
                  :style="{ backgroundColor: backgroundColor(), color: textColor() }"
            >{{ field.value }}</span>
        </template>
    </panel-item>

</template>

<script>
    import colors from '../mixins/colors';
    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        mixins: [colors]
    }
</script>
