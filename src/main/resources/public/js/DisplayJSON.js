class DisplayJSON extends React.Component {

  state = {};
  componentDidMount() {
    var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    xhr.open("GET", "https://localhost:8080/user", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          this.setState({
            json_obj
          });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }
  render() {
    return React.createElement("div", null,React.createElement("img", {
      src: this.state.json_obj ? this.state.json_obj[0].url : 'loading...'
    }));
  }
}
ReactDOM.render(React.createElement(Welcome, null), document.getElementById('root'));