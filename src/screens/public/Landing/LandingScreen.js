import React from 'react';
import './LandingScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {token_is_valid} from '../../../helpers/index'


class LandingScreen extends React.Component {




  async componentDidMount(){
    let check = await token_is_valid()
    console.log(check, '<--- check')
  }
  
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-masthead">
            <div className="container">
              <h1 className="gonsa3titulo"> GoNSa3 </h1>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  
                  
                </ul>
                <a className="nav-link text-white p-2 font-weight-bold" href="/auth/login">Ingresar</a> 
                <a className="nav-link text-white p-2 font-weight-bold" href={true}>    &nbsp;&nbsp;&nbsp;</a> 
                <a className="nav-link text-white p-2 font-weight-bold" href="/auth/register">Registrarse</a>
              </div>
            </div>
          </nav>
          {/* nav bar ends */}
          <div className="jumbotron jumbotron-odi-hero bg-primary">
            <div className="jumbotron-overlay ">
              <div className="container jumbotron-padding  text-center">
                <h1 className="display-4">El conocimiento esta a una búsqueda de distancia</h1>
                <p>
                  <a href={true} className="btn btn-lg btn-success btn-circle my-4 mr-3">Empecemos!</a>
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-5" id="about">
            <h1 className="text-center py-4">Texto 1</h1>
            <div className="row text-center mt-5">
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="py-3 text-center"> <i className="fas fa-rocket card-img-top fa-4x text-primary" aria-hidden="true" /></div>
                    <div className="card-body">
                      <h4 className="card-title">Texto 2</h4>
                      <p className="card-text"> Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="py-3 text-center"><i className="fas fa-feather card-img-top fa-4x text-primary" aria-hidden="true" /></div>
                    <div className="card-body">
                      <h4 className="card-title">Texto 4</h4>
                      <p className="card-text">Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5 Texto 5</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="py-3 text-center"><i className="fa fa-tablet card-img-top fa-4x text-primary" aria-hidden="true" /></div>
                    <div className="card-body">
                      <h4 className="card-title">Texto 6 </h4>
                      <p className="card-text">Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 Texto 7 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="py-3 text-center"><i className="fas fa-charging-station card-img-top fa-4x text-primary" aria-hidden="true" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Texto 8</h4>
                      <p className="card-text">Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 Texto 9 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5  text-center">
            <p className="pt-5 pb-2 h4 text-monospace">Texto 10</p>
            <div className="row">
              <div className="mx-auto" style={{width: '800px'}}>
                <p className="text-center"> Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11 Texto 11</p>
              </div>
            </div>
          </div>

          {/* features start */}
          <div className="container mt-5 ">
            <p className="py-4 h3 text-center"></p>
            <div className="row">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="media">
                      <div className="mr-4" style={{height: '64px', width: '64px'}}>
                        <i className="fa fa-rocket card-img-top fa-4x text-primary" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <h4 className="mt-0 tex-dark"> Texto 12</h4>
                        <p className=" text-secondary"> Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13 Texto 13</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="media">
                      <div className="mr-4" style={{height: '64px', width: '64px'}}>
                        <i className="fa fa-leaf card-img-top fa-4x text-primary" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <h4 className="mt-0 tex-dark"> Texto 14</h4>
                        <p className=" text-secondary"> Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15 Texto 15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="media">
                      <div className="mr-4" style={{height: '64px', width: '64px'}}>
                        <i className="fa fa-tablet card-img-top fa-4x text-primary" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <h4 className="mt-0 tex-dark"> Texto 16</h4>
                        <p className=" text-secondary"> Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17 Texto 17</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="media">
                      <div className="mr-4" style={{height: '64px', width: '64px'}}>
                        <i className="fa fa-cogs card-img-top fa-4x text-primary" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <h4 className="mt-0 tex-dark"> Texto 18</h4>
                        <p className=" text-secondary"> Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19 Texto 19</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* features end */}
          {/* blog post start */}    
          <div className="container mt-5">
            <h3 className="pt-4 d-inline latest-news">Texto 20 (Posible blog relacionado con articulos)</h3>
            <a href className="btn btn-outline-primary btn-circle d-inline float-right">View all</a>
            {/*  <p class="h5 text-center text-muted">Awesome featured templates</p> */}
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="images/jelly-pro-3.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title mb-3 text-dark">
                      <a href={true} className="text-decoration-none text-dark font-weight-bold">
                        Texto 21
                      </a>
                    </h4>
                    <p className="card-text">Texto 22 Texto 22 Texto 22 Texto 22 Texto 22 Texto 22 Texto 22 Texto 22 </p>
                  </div>
                  <div className="card-footer text-muted border-0 bg-white">
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="images/jelly-pro-2.jpeg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title mb-3 text-dark">
                      <a href={true} className="text-decoration-none text-dark font-weight-bold">
                      Texto 23
                      </a>
                    </h4>
                    <p className="card-text">Texto 24 Texto 24 Texto 24 Texto 24 Texto 24 Texto 24 Texto 24 Texto 24 </p>
                  </div>
                  <div className="card-footer text-muted border-0 bg-white">
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="images/jelly-pro-1.jpeg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title mb-3 text-dark">
                      <a href={true} className="text-decoration-none text-dark font-weight-bold">
                      Texto 25
                      </a>
                    </h4>
                    <p className="card-text">Texto 26 Texto 26 Texto 26 Texto 26 Texto 26 Texto 26 Texto 26 Texto 26 </p>
                  </div>
                  <div className="card-footer text-muted border-0 bg-white">
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* blog post end */}
          {/* footer start */}
          <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-3">
                  <h3>GoNSa3</h3>
                  <small className="d-block text-muted">2018-2020</small>
                  
                </div>
                {/*end of col*/}
                <div className="col-12 col-md-9">
                  <div className="row no-gutters">
                    <div className="col-6 col-lg-3">
                      
                    </div>
                    {/*end of col*/}
                    <div className="col-6 col-lg-3">
                      
                    </div>
                    {/*end of col*/}
                    <div className="col-6 col-lg-3">
                      
                    </div>
                    {/*end of col*/}
                    <div className="col-6 col-lg-3">
                      <h5>Nosotros</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href={true} className="text-muted">Equipo</a>
                        </li>
                        <li>
                          <a href={true} className="text-muted">Terminos y condiciones</a>
                        </li>
                        <li>
                          <a href={true} className="text-muted">Tera.cl</a>
                        </li>
                        
                      </ul>
                    </div>
                    {/*end of col*/}
                  </div>
                  {/*end of row*/}
                </div>
                {/*end of col*/}
              </div>
              {/*end of row*/}
            </div>
            {/*end of container*/}
          </footer>
          {/* footer end */}
        </div>
      );
  }
}

export default LandingScreen;


