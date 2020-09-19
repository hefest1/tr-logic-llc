export default {
    actions: {
        addContact(ctx) {
            ctx.commit('addContact');
        },
        deleteContact(ctx, id) {
            ctx.commit('deleteContact', id)
        },
        addField(ctx, payload) {
            ctx.commit('addField', payload);
        },
        deleteField(ctx, payload) {
            ctx.commit('deleteField', payload);
        },
        editField(ctx, payload) {
            ctx.commit('editField', payload);
        },
        cancelLastChange(ctx) {
            ctx.commit('cancelLastChange');
        }
    },
    mutations: {
        addContact(state) {
            const newContact = {
                title: `New Contact ${state.contacts.length + 1}`,
                idx: state.contacts.length,
                fields: [],
            };
            state.contacts.push(newContact);
        },
        deleteContact(state, id) {
            state.contacts = state.contacts.filter((c, idx) => idx !== id);
        },
        addField(state, payload) {
            const {contactIdx, name, value} = payload;
            state.lastChange = {
                changeType: 'add',
                data: {
                    from: null,
                    to: {name, value},
                    contactIdx: contactIdx
                }
            };
            state.contacts[contactIdx].fields.push({name, value});
        },
        deleteField(state, payload) {
            const {contactIdx, fieldIdx} = payload;
            state.lastChange = {
                changeType: 'delete',
                data: {
                    from: {
                        name: state.contacts[contactIdx].fields[fieldIdx].name, 
                        value: state.contacts[contactIdx].fields[fieldIdx].value
                    },
                    to: null,
                    contactIdx, 
                    fieldIdx
                }
            };
            state.contacts[contactIdx].fields.splice(fieldIdx, 1);
        },
        editField(state, payload) {
            const {newName, newValue, contactIdx, fieldIdx} = payload;
            state.lastChange = {
                changeType: 'edit',
                data: {
                    from: {
                        name: state.contacts[contactIdx].fields[fieldIdx].name, 
                        value: state.contacts[contactIdx].fields[fieldIdx].value
                    },
                    to: {
                        name: newName, 
                        value: newValue
                    },
                    contactIdx, 
                    fieldIdx
                }
            };
            state.contacts[contactIdx].fields[fieldIdx].name = newName;
            state.contacts[contactIdx].fields[fieldIdx].value = newValue;
        },
        cancelLastChange(state) {
            if (state.lastChange === null) return;
            switch (state.lastChange.changeType) {
                case 'delete': {
                    const {contactIdx, fieldIdx, from} = state.lastChange.data;
                    state.contacts[contactIdx].fields.splice(fieldIdx, 0, from);
                    break;
                }
                case 'add': {
                    const {contactIdx, fieldIdx} = state.lastChange.data;
                    state.contacts[contactIdx].fields.splice(-1, 1);
                    break;
                }
                case 'edit': {
                    const {contactIdx, fieldIdx, from} = state.lastChange.data;
                    state.contacts[contactIdx].fields[fieldIdx].name = from.name;
                    state.contacts[contactIdx].fields[fieldIdx].value = from.value;
                    break;
                }
            }
            state.lastChange = null;
        }
    },
    state: {
        contacts: [],
        lastChange: null,
    },
    getters: {
        allContacts(state) {
            return state.contacts;
        },
        contactDetails(state) {
            return idx => state.contacts[idx];
        },
        lastChange(state) {
            return state.lastChange;
        }
    },
};