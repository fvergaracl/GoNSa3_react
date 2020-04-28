import React from "react";
import loginImg from "../../../../assets/logo.svg";
import * as bt from 'react-bootstrap'
import './style.scss'

export class Login extends React.Component {


  render() {
    return (
        <bt.Container>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Entrar</div>
        <div className="content">
          <div className="image">
            <img className="logoclass" src={loginImg} />
          </div>
          <div className="form">
              <bt.Row>
            <div className="form-group">
                <bt.Col lg={4}>
                    <label htmlFor="username">Usuario</label>
                </bt.Col>
                <bt.Col lg={8}>
                    <input type="text" name="username" placeholder="usuario" />
                </bt.Col>
              
            </div>
            </bt.Row>
            <bt.Row>
            <div className="form-group">
                <bt.Col lg={4}>
              <label htmlFor="password">Contraseña</label>
              </bt.Col>
              <bt.Col lg={4}>
              <input type="password" name="password" placeholder="Contraseña" />
              </bt.Col>
            </div>
            </bt.Row>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Entrar
          </button>
        </div>
      </div>
      </bt.Container>
    );
  }
}
