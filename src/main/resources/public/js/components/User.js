class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      onClick: this.swtichCollapse
    }, this.props.user.name, " ", this.props.user.surname), this.state.collapsed ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Gender: ", this.props.user.gender), /*#__PURE__*/React.createElement("div", null, "birthday: ", this.props.user.birthday)), /*#__PURE__*/React.createElement("div", null, "Home Address: ", this.props.user.homeAddress), /*#__PURE__*/React.createElement("div", null, "Work Address: ", this.props.user.workAddress)) : null);
  }
}
