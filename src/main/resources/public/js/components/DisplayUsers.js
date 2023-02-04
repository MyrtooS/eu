class DisplayUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.renderUser = this.renderUser.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id){

          $.post({
                        url: "/delete/" +id ,
                        type: "POST",
                        contentType: 'application/json',
                        dataType: 'json'
                    })
          alert("User Deleted");

          $.getJSON("/user", this.handleResponse);
    }

  renderUser() {

//     var delete_user = this.deleteUser
    /*
      name
      surname
      gender
      birthday
      workAddress
      homeAddress
    */

    return this.state.users.map((u, i) => {
//
//    map((u, i)=> (
//       <User user={u} />
//    )


      return /*#__PURE__*/React.createElement("span", null, React.createElement(User, {
        user: u
            }), React.createElement("button",{onClick :()=> this.deleteUser(u.id)}, "Delete User"));
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
