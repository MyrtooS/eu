class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      gender: "",
      birthday: "",
      workAddress: "",
      homeAddress: ""
    };
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.setField = this.setField.bind(this);
  }
  reset() {
    this.setState({
      name: "",
      surname: "",
      gender: "",
      birthday: "",
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
      birthday: this.state.birthday,
      workAddress: this.state.workAddress,
      homeAddress: this.state.homeAddress
    };
    $.post("/create", u);
  }
  setField(field, value) {
    var newState = {};
    newState[field] = value;
    this.setState(newState);
    this.reset();
  }
  render() {
    const e = React.createElement;

    /*
    <div>
     <form onSubmit={this.submit}>
       <br />
       <label>
         <span>Name: </span>
         <input type="text" onChange={function(e){this.setField("name", e.target.value)}} value={this.state.name} />
       </label>
       <br />
       <label>
         <span>Surname: </span>
         <input type="text" onChange={function(e){this.setField("surname", e.target.value)}} value={this.state.surname} />
       </label>
        <label>
         <span>Date: </span>
         <input type="date" onChange={function(e){this.setField("birthday", e.target.value)}} value={this.state.birthday} />
       </label>
        <br />
       <label>
         <span>Gender: </span>
         <select onChange={function(e){this.setField("gender", e.target.value)}} value={this.state.gender}>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
       </label>
       <br />
       <label>
         <span>Home Address: </span>
         <input type="text" onChange={function(e){this.setField("workAddress", e.target.value)}} value={this.state.workAddress} />
       </label>
       <br />
       <label>
         <span>Work Address: </span>
         <input type="text" onChange={function(e){this.setField("homeAddress", e.target.value)}} value={this.state.homeAddress} />
       </label>
       <br />
        <input type="submit" value="Submit" />
     </form>
    </div>
      */

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.submit
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Name: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: function (e) {
        this.setField("name", e.target.value);
      },
      value: this.state.name
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Surname: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: function (e) {
        this.setField("surname", e.target.value);
      },
      value: this.state.surname
    })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Date: "), /*#__PURE__*/React.createElement("input", {
      type: "date",
      onChange: function (e) {
        this.setField("birthday", e.target.value);
      },
      value: this.state.birthday
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Gender: "), /*#__PURE__*/React.createElement("select", {
      onChange: function (e) {
        this.setField("gender", e.target.value);
      },
      value: this.state.gender
    }, /*#__PURE__*/React.createElement("option", {
      value: "male"
    }, "Male"), /*#__PURE__*/React.createElement("option", {
      value: "female"
    }, "Female"), /*#__PURE__*/React.createElement("option", {
      value: "other"
    }, "Other"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Home Address: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: function (e) {
        this.setField("workAddress", e.target.value);
      },
      value: this.state.workAddress
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Work Address: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: function (e) {
        this.setField("homeAddress", e.target.value);
      },
      value: this.state.homeAddress
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Submit"
    })));
  }
}
