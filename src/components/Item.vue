<template>
    <li class="contacts__item">
        <router-link v-bind:to="'/details?id=' + id" class="contacts__item-link">
            <span class="contacts__item-title">
                {{data.title}}
            </span>
        </router-link>
        <button v-on:click="$emit('confirm-delete', data.title, id)" class="contacts__item-del">&times;</button>
    </li>
</template>

<script>
export default {
    props: ['data', 'id'],
}
</script>

<style scoped>
    .contacts__item{
        padding: 10px 0;
        border-bottom: 1px solid #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
    .contacts__item-link{
        text-decoration: none;
        color: inherit;
        transition: .5s;
    }
    .contacts__item-link:hover{
        color: violet;
    }
    .contacts__item-title{
        line-height: 16px;
    }
    .contacts__item-del{
        font-size: 30px;
        color: #cc0000;
        border: none;
        background: none;
        transition: .5s;
        cursor: pointer;
        padding: 5px;
        height: auto;
        line-height: 20px;
    }
    .contacts__item-del:hover{
        color: #ee0000;
    }
</style>