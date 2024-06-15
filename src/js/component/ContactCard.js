import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ContactCard = ({ contact, onDelete }) => {
	const [showModal, setShowModal] = useState(false);

	const handleDelete = () => {
		setShowModal(true);
	};

	const handleConfirmDelete = () => {
		onDelete(contact.id);
		setShowModal(false);
	};

	return (
		<div className="card mb-3">
			<div className="card-body">
				<div className="row">
					<div className="col-2">
						<img src="https://via.placeholder.com/150" className="img-fluid rounded-circle" alt="Profile" />
					</div>
					<div className="col-10">
						<h5 className="card-title">{contact.name}</h5>
						<p className="card-text"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
						<p className="card-text"><i className="fas fa-phone"></i> {contact.phone}</p>
						<p className="card-text"><i className="fas fa-envelope"></i> {contact.email}</p>
						<Link to={`/EditContact/${contact.id}`}>
							<button className="btn btn-primary me-2">Edit</button>
						</Link>
						<button className="btn btn-danger" onClick={handleDelete}>Delete</button>
					</div>
				</div>
			</div>
			<Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleConfirmDelete} />
		</div>
	);
};

ContactCard.propTypes = {
	contact: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ContactCard;
