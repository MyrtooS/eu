class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  goHome() {
    this.props.switch("home");
  }
  goCreate() {
    this.props.switch("create");
  }
  goDisplay() {
    this.props.switch("display");
  }
  render() {
    const e = React.createElement;
    /*
    <div class="header">
       <div class="navigation">
         <div class="nav_button" onClick={this.goHome}>Home</div>
         <div class="nav_button" onClick={this.goDisplay}>Display</div>
         <div class="nav_button" onClick={this.goCreate}>Create</div>
       </div>
     </div>
    */
    return /*#__PURE__*/React.createElement("div", {
      class: "header"
    }, /*#__PURE__*/React.createElement("div", {
      class: "navigation"
    }, /*#__PURE__*/React.createElement("div", {
      class: "nav_button",
      onClick: this.goHome
    }, "Home"), /*#__PURE__*/React.createElement("div", {
      class: "nav_button",
      onClick: this.goDisplay
    }, "Display"), /*#__PURE__*/React.createElement("div", {
      class: "nav_button",
      onClick: this.goCreate
    }, "Create")));
  }
}
