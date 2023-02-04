class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.swtichCollapse = this.swtichCollapse.bind(this);
  }
  swtichCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }



  render() {

    /*

    <div>
     <div onClick={this.swtichCollapse}>{this.props.user.name} {this.props.user.surname}</div>
     {this.state.collapsed?(
       <div>
         <div>
           <div>Gender: {this.props.user.gender}</div>
           <div>birthday: {this.props.user.birthday}</div>
         </div>
         <div>Home Address: {this.props.user.homeAddress}</div>
         <div>Work Address: {this.props.user.workAddress}</div>

       </div>

     ):null}
    </div>
  
    */


    const e = React.createElement;
    return React.createElement("div", null, React.createElement("span", {
      onClick: this.swtichCollapse
    }, "Name: "+ this.props.user.name, " ", "Surname: " + this.props.user.surname),
    this.state.collapsed ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/
    React.createElement("span", null, " Gender: ", this.props.user.gender),
    /*#__PURE__*/React.createElement("span", null, ", Birthday: ", this.props.user.birthdate)),
    /*#__PURE__*/React.createElement("span", null, ", Home Address: ", this.props.user.address.homeAddress),
    /*#__PURE__*/React.createElement("span", null, ", Work Address: ", this.props.user.address.workAddress)) : null);
  }
}
