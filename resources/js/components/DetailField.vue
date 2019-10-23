<template>
    <panel-item :field="field">
        <template slot="value">
            <span class="rounded-full uppercase px-2 py-1 text-xs font-bold whitespace-no-wrap"
                  :style="{ backgroundColor: backgroundColor(), color: textColor() }"
            >{{ __(displayValue()) }}</span>
        </template>
    </panel-item>

</template>

<script>
    import colors from '../mixins/colors';
    import display from '../mixins/display';
    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        mixins: [colors, display]
    }
</script>
