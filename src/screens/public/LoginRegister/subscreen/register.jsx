import React from "react";
import loginImg from "../../../../assets/logo.svg";
import * as bt from 'react-bootstrap'
import './style.scss'

export class Register extends React.Component {


  render() {
    return (
      <bt.Container>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Crear cuenta</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <bt.Row>
            <div className="form-group">
              <bt.Col lg={4}>
              <label htmlFor="username">Usuario</label>
              </bt.Col>
              <bt.Col lg={8}>
              <input type="text" name="username" placeholder="Usuario" />
              </bt.Col>
            </div>
          </bt.Row>
          <bt.Row>
            <div className="form-group">
              <bt.Col lg={4}>
              <label htmlFor="email">Email</label>
              </bt.Col>
              <bt.Col lg={8}>
              <input type="text" name="email" placeholder="email" />
              </bt.Col>
            </div>
            </bt.Row>
          <bt.Row>
            <div className="form-group">
            <bt.Col lg={4}>
              <label htmlFor="password">Contaseña</label>
              </bt.Col>
              <bt.Col lg={8}>
              <input type="text" name="password" placeholder="Contaseña" />
              </bt.Col>
            </div>
            </bt.Row>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
          Crear cuenta
          </button>
        </div>
      </div>
      </bt.Container>
    );
  }
}
