<template>
    <div class="field">
        <div v-if="showEdit" class="field__edit" >
            <FieldForm 
                @submit-field="saveFieldEdit"
                :initialName=name
                :initialValue=value 
                submitText="Update"
                purpose="edit"
            />
            <button v-on:click="toggleCancelEditModal" type="button">Cancel</button>
        </div>

        <div v-else class="field__data">
            <span>{{name}}</span>
            <span> : </span>
            <span>{{value}}</span>
            <button v-on:click="toggleEdit" type="button">edit</button>
            <button v-on:click="openConfirm" type="button">delete</button>
        </div>

        <ConfirmModal 
            v-if="cancelEditModal"
            question="Cancel field edit?"
            title="Cancel"
            confirmText="Yes"
            cancelText="No"
            @close="toggleCancelEditModal"
            @cancel="toggleCancelEditModal"
            @confirm="cancelFieldEdit"
        />

        <ConfirmModal 
            v-if="showModal"
            v-bind:question="modalQuestion"
            title="Delete field"
            confirmText="Delete"
            cancelText="Cancel"
            @close="closeConfirm"
            @cancel="closeConfirm"
            @confirm="confirmDelete"
        />
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import ConfirmModal from '@/components/ConfirmModal';
import FieldForm from '@/components/FieldForm';

export default {
    props: ['name', 'value', 'idx', 'contactIdx'],
    data() {
        return {
            showEdit: false,
            cancelEditModal: false,
            deleteFieldIdx: undefined,
            showModal: false,
            defaultQuestion: 'Do you want to delete this field?',
            modalQuestion: 'Do you want to delete this field?',
        }
    },
    methods: {
        ...mapActions(['deleteField', 'editField']),
        openConfirm() {
            this.showModal = true;
            this.deleteFieldIdx = this.idx;
            this.modalQuestion = `Do you want to delete ${this.name} field?`;
        },
        closeConfirm() {
            this.showModal = false;
            this.modalQuestion = this.defaultQuestion;
            this.deleteFieldIdx = undefined;
        },
        confirmDelete() {
            this.deleteField({contactIdx: this.contactIdx, fieldIdx: this.deleteFieldIdx});
            this.closeConfirm();
        },
        toggleEdit() {
            this.showEdit = !this.showEdit;
        },
        toggleCancelEditModal() {
            this.cancelEditModal = !this.cancelEditModal;
        },
        cancelFieldEdit() {
            this.showEdit = false;
            this.toggleCancelEditModal();
        },
        saveFieldEdit(newName, newValue) {
            this.editField({contactIdx: this.contactIdx, fieldIdx: this.idx, newName, newValue});
            this.showEdit = false;
        }
    },
    components: {
        ConfirmModal,
        FieldForm,
    }
}
</script>

<style scoped>
    .field__data{ 
        padding: 10px 0;
        border-bottom: 1px solid gray;
    }
    .field__edit{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid gray;
        padding: 10px 0;
        align-items: center;
    }
    .field:first-child .field__data{
        border-top: 1px solid gray;
    }
    .field button {
        margin: 0 10px;
    }
    @media screen and (max-width: 500px) and (min-width: 320px) {
        .field__edit{
            display: block;
        }
    }
</style>