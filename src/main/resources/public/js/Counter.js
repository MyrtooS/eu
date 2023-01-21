

class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        x: 3
    }
    this.increseX = this.increseX.bind(this)

  }

  componentDidMount(){
    //console.log("dsadsa")
    this.increseX()
    setInterval(this.increseX, 1000)

  }

  increseX(){
    this.setState({
        x: this.state.x + 1
    })
  }

  render() {

    const e = React.createElement;
    return(e("button", { onClick: this.increseX}, "Test Clock: "+this.state.x))
  }
}