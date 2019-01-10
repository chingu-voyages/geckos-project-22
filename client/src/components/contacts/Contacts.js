import React, { Component } from 'react';
import ContactsList from "./ContactsList"
import AddContactForm from './AddContactForm';

class Contacts extends Component {
	state = {
		showAddContactForm: false,
		contacts: [
			{
				contact_id: 1,
				name: "Andy",
				generalNote: "met him at python conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1346707029307,
						note: "at christmas"
					},
					{
						meeting_id: 2,
						timestamp: 1446707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1516707029307,
						note: "at a party"
					},
				]
			},
			{
				contact_id: 2,
				name: "Kim",
				generalNote: "met her at javascript conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1246707029307,
						note: "at a party"
					},
					{
						meeting_id: 2,
						timestamp: 1346707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1536707029307,
						note: "at a conference"
					},
				]
			},
		]
	}

	toggleShowAddContactForm = () => {
		this.setState({
			showAddContactForm: !this.state.showAddContactForm
		})
	}

	/*
		go to the last contact and increase the id by 1 to get a new id for the new contact
		or if there is no contact, return 1 as the new id
	*/
	createNewContactId = () => (
		this.state.contacts
			? this.state.contacts[this.state.contacts.length - 1].contact_id + 1
			: 1
	)

	addContact = ({ name, generalNote }) => {
		const newContact = {
			contact_id: this.createNewContactId(),
			name,
			generalNote,
			pastMeetings: []
		};
		this.setState({
			contacts: [...this.state.contacts, newContact]
		})
	}

	render() {
		return (
			<main>
				<h1>Contacts</h1>
				{
					!this.state.showAddContactForm
						? <button onClick={this.toggleShowAddContactForm}>Add New Contact</button> : null
				}
				{
					this.state.showAddContactForm
						? <AddContactForm addContact={this.addContact} closeForm={this.toggleShowAddContactForm} />
						: null
				}
				<ContactsList contacts={this.state.contacts} />
			</main>
		);
	}
}

export default Contacts;
