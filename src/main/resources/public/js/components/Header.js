class Header extends React.Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this)
    this.goCreate = this.goCreate.bind(this)
    this.goDisplay = this.goDisplay.bind(this)
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
/*

<ul>
  <li><a href="#" onClick={"this.goHome"}>Home</a></li>
  <li><a href="#" onClick={"this.goDisplay"}>Display</a></li>
  <li><a href="#" onClick={"goCreate"}>Create</a></li>
</ul>


*/


  return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {

    onClick: this.goHome
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {

    onClick: this.goDisplay
  }, "Display")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {

    onClick: this.goCreate
  }, "Create")));
  }
}
