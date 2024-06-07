import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { AddContact } from "./views/AddContact";
import { EditContact } from "./views/EditContact";
import injectContext from "./store/appContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AddContact" element={<AddContact />} />
                    <Route path="/EditContact/:name/:email/:phone/:address/:id" element={<EditContact />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

