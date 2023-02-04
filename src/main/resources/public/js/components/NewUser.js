class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      gender: "",
      birthdate: "",
      workAddress: "",
      homeAddress: ""
    };
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.setName = this.setName.bind(this);
    this.setSurname = this.setSurname.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setBirthdate = this.setBirthdate.bind(this);
    this.setWorkAddress = this.setWorkAddress.bind(this);
    this.setHomeAddress = this.setHomeAddress.bind(this);
  }
  reset() {
    this.setState({
      name: "",
      surname: "",
      gender: "",
      birthdate: "",
      workAddress: "",
      homeAddress: ""

    });
  }
  submit(e) {
    e.preventDefault();
    var u = {
      name: this.state.name,
      surname: this.state.surname,
      gender: this.state.gender,
      birthdate: this.state.birthdate,
      address: {workAddress: this.state.workAddress,
                homeAddress: this.state.homeAddress
      }


    };
    alert("User Inserted");
    $.post({
                  url: "/create",
                  type: "POST",
                  contentType: 'application/json',
                  dataType: 'json',
                  data: JSON.stringify(u)
              })

    this.setState({
        name: "",
        surname: "",
        gender : "",
        birthdate : "",
        workAddress : "",
        homeAddress : ""
    })


  }
  setName(e) {
    this.setState({
      name: e.target.value
    });
  }
  setSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }
  setGender(e) {
    this.setState({
      gender: e.target.value
    });
  }
  setBirthdate(e) {
    this.setState({
      birthdate: e.target.value
    });
  }
  setWorkAddress(e) {
    this.setState({
      workAddress: e.target.value
    });
  }
  setHomeAddress(e) {
    this.setState({
      homeAddress: e.target.value
    });
  }
  render() {
    const e = React.createElement;

    /*
    <div>
     <form onSubmit={this.submit}>
       <br />
       <label>
         <span>Name: </span>
         <input type="text" onChange={this.setName} value={this.state.name} />
       </label>
       <br />
       <label>
         <span>Surname: </span>
         <input type="text" onChange={this.setSurname} value={this.state.surname} />
       </label>
        <label>
         <span>Date: </span>
         <input type="date" onChange={this.setBirthday} value={this.state.birthday} />
       </label>
        <br />
       <label>
         <span>Gender: </span>
         <select onChange={this.setGender} value={this.state.gender}>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
       </label>
       <br />
       <label>
         <span>Home Address: </span>
         <input type="text" onChange={this.setHomeAddress} value={this.state.workAddress} />
       </label>
       <br />
       <label>
         <span>Work Address: </span>
         <input type="text" onChange={this.setWorkAddress} value={this.state.homeAddress} />
       </label>
       <br />
        <input type="submit" value="Submit" />
     </form>
    </div>
      */

    return React.createElement("div", null, React.createElement("form", {
      onSubmit: this.submit
    }, React.createElement("br", null), React.createElement("label", null, React.createElement("span", null, "Name: "), React.createElement("input", {
      type: "text",
      onChange: this.setName,
      value: this.state.name
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Surname: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: this.setSurname,
      value: this.state.surname
    })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Date: "), /*#__PURE__*/React.createElement("input", {
      type: "date",
      onChange: this.setBirthdate,
      value: this.state.birthdate
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Gender: "), /*#__PURE__*/React.createElement("select", {
      onChange: this.setGender,
      value: this.state.gender
    }, /*#__PURE__*/React.createElement("option", {
      value: "M"
    }, "Male"), /*#__PURE__*/React.createElement("option", {
      value: "F"
    }, "Female"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Home Address: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: this.setHomeAddress,
      value: this.state.homeAddress
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Work Address: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: this.setWorkAddress,
      value: this.state.workAddress
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Submit"
    })));


  }
}
