import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <div className="mb-4 d-flex">
                <Link className="ms-auto" to="/AddContact">
                    <button className="btn btn-success">Add contact</button>
                </Link>
            </div>
            <ul className="list-unstyled">
                {store.contacts && store.contacts.map((contact, index) => (
                    <ContactCard key={index} contact={contact} onDelete={actions.deleteContact} />
                ))}
            </ul>
        </div>
    );
};
