import React, { Component } from 'react';

class EditContactForm extends Component {
  state = {
    contact: {
      contact_id: 0,
      name: '',
      generalNote: '',
      pastMeetings: [],
    },
    saveButtonEnabled: false,
  };

  componentDidMount = () => {
    this.setState({
      contact: this.props.contact[0],
    });
  };

  checkIfAllInputsHaveValue = () => {
    const requiredInputs = ['name'];
    return requiredInputs.every((requiredInput) => {
      return this.state.contact[requiredInput];
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveContact(this.state.contact);
    this.props.closeForm();
  };

  handleChange = (event) => {
    const contactFieldName = event.target.name;
    const contactFieldValue = event.target.value;
    this.setState(
      {
        contact: {
          ...this.state.contact,
          [contactFieldName]: contactFieldValue,
        },
      },
      () =>
        this.setState({
          saveButtonEnabled: this.checkIfAllInputsHaveValue(),
        }),
    );
  };

  handleCloseClick = (event) => {
    event.preventDefault();
    this.props.closeForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button
          onClick={this.handleCloseClick}
          type="button"
        >
          Close
        </button>
        <input
          name="name"
          className="form-input border-box"
          data-testid="edit-contact-name"
          type="text"
          onChange={this.handleChange}
          placeholder="Contact Name"
          value={this.state.contact.name}
        />
        <input
          name="generalNote"
          className="form-input border-box"
          data-testid="edit-contact-note"
          type="text"
          onChange={this.handleChange}
          placeholder="General Note"
          value={this.state.contact.generalNote}
        />
        <button
          data-testid="edit-contact-save-button"
          disabled={!this.state.saveButtonEnabled}
        >
          Save
        </button>
      </form>
    );
  }
}

export default EditContactForm;
