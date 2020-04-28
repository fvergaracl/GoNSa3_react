import React, {} from 'react';
import './LoginRegisterScreen.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './subscreen/login'
import {Register} from './subscreen/register'


class LoginRegisterScreen extends React.Component {


  constructor(props) {
    super(props);
  
    
    if (this.props.match.params.type === 'login'){
      this.state = {
        isLogginActive: true
      };
    }else {
      this.state = {
        isLogginActive: false
      };
    }
    
  }

  componentDidMount() {
    //Add .right by default
    console.log('this.props.match.params.type')
    console.log(this.props.match.params.type)
    if (this.props.match.params.type === 'login'){
      this.rightSide.classList.add("right");
    }else {
      this.rightSide.classList.add("left");
    }
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Crear cuenta" : "Ingresar";
    const currentActive = isLogginActive ? "Ingresar" : "Crear cuenta";
    return (
      
      <div className="Applogin">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
}

export default LoginRegisterScreen;


