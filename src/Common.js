import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/product-launch-rocket-man.svg';

const Common = (props) =>{
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row" >
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1> {props.name} <span className="barnd">Shaikh Nisar</span></h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer making website
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-01 btn-outline-primary">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={props.imgsrc} className="img-fluid bounce" alt="home" style={{width:'70%',float:'right'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }

  export default Common;