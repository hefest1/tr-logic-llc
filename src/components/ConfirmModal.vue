<template>
    <div class="confirm-modal">
        <div class="confirm-modal__body">
            <h3>{{title}}</h3>
            <button
                type="button"
                class="confirm-modal__close"
                v-on:click="$emit('close')"
            >&times;</button>
            <hr/>
            <p>{{question}}</p>
            <hr/>
            <button type="button" class="confirm-modal__btns" v-on:click="$emit('confirm')">{{confirmText}}</button>
            <button type="button" class="confirm-modal__btns" v-on:click="$emit('cancel')">{{cancelText}}</button>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['title', 'question', 'confirmText', 'cancelText']
    }
</script>

<style>
    .confirm-modal{
        position: fixed;
        background: rgba(0,0,0,.8);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow-y: scroll;
        transition: .5s;
    }
    .confirm-modal__body{
        background: white;
        border-radius: 5px;
        width: auto;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        position: relative;
        box-sizing: border-box;
    }
    .confirm-modal__close{
        position: absolute;
        top: 38px;
        right: 30px;
    }
    .confirm-modal__btns{
        margin: 10px 30px;
        cursor: pointer;
    }
</style>