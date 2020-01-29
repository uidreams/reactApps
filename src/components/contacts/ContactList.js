import React, { Component } from "react";

class ContactList extends Component {
	constructor() {
		super();
		this.state = {
			contacts: [
				{ id: 1, name: "Kumaraswamy", technology: "React JS" },
				{ id: 2, name: "Abhay", technology: "Javascript" },
				{ id: 3, name: "Arjun", technology: "CSS" },
				{ id: 4, name: "Jyothi", technology: "HTML" }
			],
			search: ""
		};
	}
	updateSearch(e) {
		this.setState({
			search: e.target.value
		});
	}
	render() {
		let filteredContacts = this.state.contacts.filter(contact => {
			return contact.name.indexOf(this.state.search) !== -1;
		});
		return (
			<div>
				<div>
					<h2 className="blue-text">Contacts</h2>
					<input
						type="text"
						onChange={this.updateSearch.bind(this)}
                        value={this.state.search}
                        placeholder="Search contact"
					/>
					<br />
					<ul>
						{filteredContacts.map(contact => {
							return <li key={contact.id}>{contact.name}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default ContactList;
