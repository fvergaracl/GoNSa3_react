import React, {} from 'react';
import './NotFoundScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class NotFoundScreen extends React.Component {

    render(){
        return(
            <div className="error-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="error-text">
                                <h1 className="error">Error 404</h1>
                                <div className="im-sheep">
                                    <div className="top">
                                        <div className="body"></div>
                                        <div className="head">
                                            <div className="im-eye one"></div>
                                            <div className="im-eye two"></div>
                                            <div className="im-ear one"></div>
                                            <div className="im-ear two"></div>
                                        </div>
                                    </div>
                                    <div className="im-legs">
                                        <div className="im-leg"></div>
                                        <div className="im-leg"></div>
                                        <div className="im-leg"></div>
                                        <div className="im-leg"></div>
                                    </div>
                                </div>
                                <h4>Oh :(. lo siento esta página no está disponible </h4>
                                <p>Lo siento, pero la página que busca no existe, ha sido eliminada o su nombre ha sido cambiado.</p>
                                <a href="/" className="btn btn-primary btn-round">Ir a la pagina principal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
