<template>
    <div class="contacts">
		<h1 class="contacts__title">Contacts</h1>
        <ul v-if="contacts.length">
            <Item 
                v-for="(data, idx) in contacts" :key="data.title + '_' + idx"
                v-bind:data="data"
                v-bind:id="idx"
                @confirm-delete="openConfirm"
            />
        </ul>
        <p v-else>Contacts list empty</p>
        <button 
            class="contacts__add-btn" 
            type="button"
            v-on:click="addContact"    
        >
            Add contact
        </button>
        <ConfirmModal 
            v-if="showModal"
            v-bind:question="modalQuestion"
            title="Delete contact"
            confirmText="Delete"
            cancelText="Cancel"
            @close="closeConfirm"
            @cancel="closeConfirm"
            @confirm="confirmDelete"
        />
    </div>
</template>

<script>
import ConfirmModal from '@/components/ConfirmModal';
import Item from '@/components/Item';
import {mapActions} from 'vuex';
export default {
    props: ['list'],
    computed: {
        contacts() {
            return this.$store.getters.allContacts;
        }
    },
    data() {
        return {
            showModal: false,
            modalQuestion: 'Do you want to delete this contact?',
            defaultQuestion: 'Do you want to delete this contact?',
            deleteContactId: undefined,
        }
    },
    components: {
        Item,
        ConfirmModal,
    },
    methods: {
        ...mapActions(['addContact', 'deleteContact']),
        closeConfirm() {
            this.showModal = false;
            this.modalQuestion = this.defaultQuestion;
            this.deleteContactId = undefined;
        },
        openConfirm(contactName, id) {
            this.showModal = true;
            this.deleteContactId = id;
            this.modalQuestion = `Do you want to delete ${contactName}?`;
        },
		confirmDelete() {
            this.deleteContact(this.deleteContactId);
            this.closeConfirm();
        },
    }
}
</script>

<style scoped>
    .contacts{
        padding: 20px;
        width: 600px;
    }
    .contacts ul {
        padding: 0;
    }
    .contacts__add-btn{
        padding: 10px;
        background: #007700;
        border: 3px solid #00bb00;
        margin: 20px;
        color: white;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s;
    }
    .contacts__add-btn:hover{
        border-color: #00dd00;
        background: #009900;

    }
</style>