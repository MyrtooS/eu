class Button extends React.Component {

    constructor(props){
      super(props)

    this.MyForm = this.MyForm.bind(this)
    }

    MyForm() {
      return React.createElement("form", null, React.createElement("label", null, "Enter your name:",React.createElement("input", {
        type: "text"
      })));
    }

    render() {
      const e = React.createElement;
       return(e("div", null, e("a", {href: "/user" },e("button", null, "Display Users"))));
    }
      return e("div", null, e("form", null,e("button", { onClick: myForm }));
    }
}

