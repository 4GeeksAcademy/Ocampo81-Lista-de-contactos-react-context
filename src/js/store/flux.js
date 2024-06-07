const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/Ocampo81/contacts")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ contacts: data.contacts });
                    })
                    .catch(error => console.error("Error fetching contacts:", error));
            },

            // Add new contact
            addContact: async (contact) => {
                try {
                    let response = await fetch("https://playground.4geeks.com/contact/agendas/Ocampo81/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        getActions().getContacts();
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            // Edit existing contact
            editContact: async (contact, id) => {
                try {
                    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Ocampo81/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        getActions().getContacts();
                    }
                } catch (error) {
                    console.error("Error editing contact:", error);
                }
            },

            // Delete contact
            deleteContact: async (id) => {
                try {
                    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Ocampo81/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        getActions().getContacts();
                    } else {
                        console.error("Error deleting contact:", response.status);
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;
