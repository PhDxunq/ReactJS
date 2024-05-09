import React from "react";
import "./Main.css";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="txt-bold">
                                Email
                            </div>
                            <div>
                                huudung072004@gmail.com
                            </div>

                        </div>
                        <div className="col-3">
                            <div className="txt-bold">Github</div>
                            <a href="https://github.com/PhDxunq">https://github.com/PhDxunq</a>
                        </div>
                        <div className="col-3">
                            <div className="txt-bold">
                                ADAMS Follow
                            </div>
                        </div>
                        <div className="col-3">@copyright</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;