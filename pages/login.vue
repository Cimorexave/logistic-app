<script lang="ts" setup>
const loignFields: Array<{id: number, label: string, type: string, isSelect: boolean, selectOptions?: Array<unknown>}> = [
    {
        id: 0,
        label: 'label',
        type: 'text',
        isSelect: false,
    },
    {
        id: 0,
        label: 'label',
        type: 'text',
        isSelect: false,
    },
    {
        id: 0,
        label: 'label',
        type: 'checkbox',
        isSelect: false,
    },
    {
        id: 0,
        label: 'label',
        type: 'date',
        isSelect: false,
    },
    {
        id: 0,
        label: 'label',
        type: 'text',
        isSelect: false,
        selectOptions: ['option']
    },
]
</script>
<template>
    <div>
        <!-- use looping on fields  -->
        <!-- use translator  -->
        <div v-for="field in loignFields" :key="field.id + '_field-item_' + Math.ceil(Math.random()*10)">
            <label :for="field.label">{{ field.label }}</label>
            <input :id="field.label" :type="field.type">
        </div>
    </div>
</template>