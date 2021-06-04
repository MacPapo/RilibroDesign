import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <div>
        <>
          <span open fullWidth maxWidth="sm">
            <div title="Confirm User Data" />
            <ul>
              <li>
                <span primary="First Name" secondary={firstName} />
              </li>
              <li>
                <span primary="Last Name" secondary={lastName} />
              </li>
              <li>
                <sapn primary="Email" secondary={email} />
              </li>
              <li>
                <span primary="Occupation" secondary={occupation} />
              </li>
              <li>
                <span primary="City" secondary={city} />
              </li>
              <li>
                <span primary="Bio" secondary={bio} />
              </li>
            </ul>
            <br />

            <button onClick={this.back}>Back</button>

            <button onClick={this.continue}>Confirm & Continue</button>
          </span>
        </>
      </div>
    );
  }
}

export default Confirm;
