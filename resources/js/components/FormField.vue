<template>
    <DefaultField :field="currentField" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <SelectControl
                :id="field.attribute"
                :dusk="field.attribute"
                v-model:selected="value"
                @change="handleChange"
                class="w-full"
                :select-classes="{ 'form-input-border-error': hasError }"
                :options="currentField.options"
                :disabled="currentlyIsReadonly"
            >
                <option value="" selected disabled>
                    {{__('Choose an option')}}
                </option>

                <option
                        v-for="option in currentField.options"
                        :value="option.value"
                        :selected="option.value == value"
                >
                    {{ option.label }}
                </option>
            </SelectControl>

            <p v-if="hasError" class="help-text error-text mt-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </DefaultField>
</template>

<script>
    import { FormField, HandlesValidationErrors } from 'laravel-nova'

    export default {
        mixins: [HandlesValidationErrors, FormField],
        props: ['resourceName', 'resourceId', 'field'],

        methods: {
            /*
             * Set the initial, internal value for the field.
             */
            setInitialValue() {
                this.value = this.field.value || ''
            },

            /**
             * Provide a function that fills a passed FormData object with the
             * field's internal value attribute. Here we are forcing there to be a
             * value sent to the server instead of the default behavior of
             * `this.value || ''` to avoid loose-comparison issues if the keys
             * are truthy or falsey
             */
            fill(formData) {
                formData.append(this.field.attribute, this.value)
            },
        },
    }
</script>
