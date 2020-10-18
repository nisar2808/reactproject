import React,{useState} from 'react';

const ContactOne = () =>{

    const [data, setData] = useState({

        fname:"",
        mobile:"",
        email:"",
        message:""
        });

    const InputEvent =(event)=>{
        //setData(event.target.value);
        const {name, value} =event.target;

        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`${data.fname}`);
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" name="fname" value={data.fname} onChange={InputEvent}
                                    placeholder="Enter your full name" required/>
                            </div><br/>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Mobile Number</label>
                                <input type="text" class="form-control" name="mobile" value={data.mobile} onChange={InputEvent}
                                placeholder="Enter your Mobile No" required/>
                            </div><br/>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" name="email" value={data.email} onChange={InputEvent}
                                placeholder="Enter your Email id" required/>
                            </div><br/>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" name="message" value={data.message} onChange={InputEvent}
                                 rows="3" required></textarea>
                            </div><br/>
                            <div class="form-group">
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
		    </div>
        </>
    );
  }

  export default ContactOne;