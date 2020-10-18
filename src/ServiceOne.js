import React from 'react';
import CardOne from './CardOne';
import Sdataone from './Sdataone';

const ServiceOne = () =>{
    return(
        <>
           <div className="my-5">
                <h1 className="text-center">Our Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4"> 
                        {
                          
                            Sdataone.map((val, ind) =>{
                                return <CardOne key={ind} imgsrc={val.imgsrc} title={val.title}/>
                            })
                        }
                           
                        </div>
                    </div>
                </div>
		    </div>
        </>
    );
  }

  export default ServiceOne;