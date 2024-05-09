import React from "react";
import "./Main.css";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 d-flex align-items-baseline pd-20">
                            <h4 className="pd-right">Dalya Baron</h4>
                            <p className="pd-20">Astrophysics Research Student</p>
                        </div>
                        <div className="col-6 ">
                            <ul className="d-flex justify-content-end">
                                <li>Resume</li>
                                <li>Research</li>
                                <li>Outreach</li>
                                <li>Personal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;