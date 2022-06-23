<template>
    <PanelItem :index="index" :field="field" :field-name="field.name">
        <template #value>
            <span class="rounded-full uppercase px-2 py-1 text-xs font-bold whitespace-no-wrap"
                  :class="badgeExtraClasses"
                  :style="{ backgroundColor: backgroundColor(), color: textColor() }"
            >{{ __(displayValue()) }}</span>
        </template>
    </PanelItem>
</template>

<script>
    import colors from '../mixins/colors';
    import display from '../mixins/display';
    export default {
        props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
        mixins: [colors, display],
    }
</script>
