class DisplayUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.renderUser = this.renderUser.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }
  renderUser() {
    /*
      name
      surname
      gender
      birthday
      workAddress
      homeAddress
    */

    this.state.users.map(function (u, i) {
      // <User user={u} />
      return /*#__PURE__*/React.createElement(User, {
        user: u
      });
    });
  }
  handleResponse(data) {
    this.setState({
      users: data
    });
  }
  componentDidMount() {
    $.getJSON("/user", this.handleResponse);
  }
  render() {
    /*
    <div>
       {this.renderUser()}
    </div>
    */
    return /*#__PURE__*/React.createElement("div", null, this.renderUser());
  }
}
