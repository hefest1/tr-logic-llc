<template>
    <form @submit.prevent="onSubmit" v-bind:class="{['add-form']: purpose === 'add', ['edit-form']: purpose === 'edit'}">
        <input placeholder="name" type="text" name="name" v-model="name" />
        <span>:</span>
        <input placeholder="value" type="text" name="value" v-model="value" />
        <button type="submit" >{{submitText}}</button>
    </form>
</template>

<script>
export default {
    props: ['submitText', 'initialName', 'initialValue', 'purpose'],
    data() {
        return {
            name: this.initialName || '',
            value: this.initialValue || '',
        }
    },
    methods: {
        onSubmit() {
            if (!this.name.trim().length || !this.value.trim().length) return;
            this.$emit('submit-field', this.name, this.value);
            this.name = '';
            this.value = '';
        }
    }
}
</script>

<style scoped>
    .add-form, .edit-form{
        display: flex;
        justify-content: space-around;
    }
    .add-form{
        margin-top: 20px;
    }

    .add-form span, .edit-form span{
        padding: 0 20px;
    }
    .add-form span{
        line-height: 30px;
    }
    .add-form input, .edit-form input{
        height: 30px;
        width: 160px;
        box-sizing: border-box;
    }
    .edit-form input{
        height: 22px;
    }
    .add-form button, .edit-form button {
        height: 30px;
        cursor: pointer;
    }
    .edit-form button {
        height: 22px;
    }

    @media screen and (max-width: 500px) and (min-width: 320px) {
        .edit-form{
            margin-bottom: 15px;
        }
        .add-form, .edit-form{
            display: block;
        }
        .add-form input, .edit-form input{
            width: 100%;
            margin-bottom: 15px;
        }
        .add-form span{
            display: none;
        }
        .edit-form span{
            margin-bottom: 15px;
            display: block;
        }
    }
</style>