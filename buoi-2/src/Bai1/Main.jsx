import React from "react";
import "./Main.css";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ava from "./ava.jpg";

const Main = () => {
    return (
        <div>
            <main className="view-height">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={ava} alt="avatar" />
                            <div className="col-3">
                                <h1>Dalya Baron</h1>
                                <h3>A Bit About Me</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nam atque explicabo iusto, numquam aperiam! Similique culpa eligendi modi sunt? Veniam, deleniti. Nulla, natus totam accusamus eos non voluptate laborum?</p>
                            </div>
                        </div>
                        <div>
                            <ul className="d-flex justify-content-center">
                                <li><div className="circle bg-primary d-flex justify-content-center align-items-center txt-bold">Resume</div></li>
                                <li><div className="circle bg-secondary d-flex justify-content-center align-items-center txt-bold">Research</div></li>
                                <li><div className="circle bg-success d-flex justify-content-center align-items-center txt-bold">Outreach</div></li>
                                <li><div className="circle bg-info d-flex justify-content-center align-items-center txt-bold">Personal</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <hr />
            
        </div>
    )
};


export default Main;