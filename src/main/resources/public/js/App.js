const root = ReactDOM.createRoot(document.getElementById('root'));
const e = React.createElement;



class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home" //home, create, display
    };

    this.switch = this.switch.bind(this);
  }
  switch(url) {
    this.setState({
      page: url
    });
  }
  render() {
    /*
    <div>
      <Header switch={this.switch} />
      {this.state.page=="home"?<HomePage />:null}
      {this.state.page=="create"?<NewUser />:null}
      {this.state.page=="display"?<DisplayUsers />:null}
    </div>
    */
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      switch: this.switch
    }), this.state.page == "home" ? /*#__PURE__*/React.createElement(HomePage, null) : null, this.state.page == "create" ? /*#__PURE__*/React.createElement(NewUser, null) : null, this.state.page == "display" ? /*#__PURE__*/React.createElement(DisplayUsers, null) : null);
  }
}



root.render(e(MainPage));
