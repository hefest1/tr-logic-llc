<template>
    <div class="details">
        <div v-if="contactDetails">
            <h2>Details of {{contactDetails.title}}</h2>
            <button class="details__undo" type="button" v-on:click="cancelLastChange">Cancel last change</button>
            <FieldItem
                v-for="(data, idx) in contactDetails.fields" :key="data.name + '_' + idx"
                v-bind:name="data.name"
                v-bind:value="data.value"
                v-bind:idx="idx"
                v-bind:contactIdx="contactDetails.idx"
            />
            <FieldForm 
                @submit-field="addFieldSubmit"
                submitText="Add field"
                purpose="add"
            />
        </div>
        <div v-else>
            Contanct is not available
            <br/>
            <router-link to="/">Contacts list</router-link>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import FieldForm from '@/components/FieldForm';
import FieldItem from '@/components/FieldItem';
export default {
    computed: {
        contactDetails() {
            return this.$store.getters.contactDetails(this.$route.query.id);
        }
    },
    methods: {
        ...mapActions(['addField', 'cancelLastChange']),
        addFieldSubmit(name, value) {
            this.addField({contactIdx: this.contactDetails.idx, name, value});
        },
    },
    components: {
        FieldForm,
        FieldItem,
    }
}
</script>

<style scoped>
    .details{
        width: 600px;
    }
    .details__undo{
        margin: 0 0 20px;
    }
</style>