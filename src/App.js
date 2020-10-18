import React,{useState} from 'react';
//import AddIcon from '@material-ui/icons/Add';
//import RemoveIcon from '@material-ui/icons/Remove';
//import Button from '@material-ui/core/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route,Switch} from 'react-router-dom';
import HomeOne from './HomeOne';
import AboutOne from './AboutOne';
import ServiceOne from './ServiceOne';
import ContactOne from './ContactOne';
import Navbar from './Navbar';
import Footer from './Footer';
// import About from './About';
// import Home from './Home';
// import Menu from './Menu';
// import Service from './Service';
// import User from './User';
// import Search from './Search';

const App = () =>{
  return(
      <>
          <Navbar/>
          <Switch>
            <Route exact path="/home" component={HomeOne}/>
            <Route exact path="/service" component={ServiceOne}/>
            <Route exact path="/about" component={AboutOne}/>
            <Route exact path="/contact" component={ContactOne}/>
            <Redirect to="/"/>
          </Switch>
          <Footer/>
      </>
  );
}
export default App;
// const App = () =>{ 
//   return(
//     <>
//       <Menu/>
//       <Switch>
//         <Route exact path='/' component={Home}/>
//         <Route exact path='/about' render={About}/>
//         <Route  path='/service' component={Service}/>
//         <Route  path='/user/:name' component={User}/>
//         <Route  path='/Search' component={Search}/>
//       </Switch>
//     </>
//   );
// }

//import Netflix from './Netflix';
//import Amazon from './Amazon';
//import Slot from './Slot';

// const App = () =>{
  
//   const [count,setCount]=useState(0);
//   const IncNum=()=>{
//     setCount(count+1);
//   }
 
//   return(
//     <>
//         <h1 style={{ margin: '0px 38px'}}> {count} </h1>
//         <button onClick={IncNum}>Click Here</button>
//     </>
//   );
// }


// const App=()=>{

//   const [count, setCount]=useState(0);
//   const Increment=()=>{
//     console.log(count);
//     setCount(count+1);
//   }
//   const Decrement=()=>{
//     if(count > 0){
//       setCount(count-1);
//     }else{
//       setCount(0);
//       alert("Zero limit reached");
//     }
    
//   }

//   return(
//     <>
//          <div className="main_div">
         
//                 <div className="center_div_01">
//                     <h1 className="heading-01">{count}</h1>
//                     <div style={{padding: '28px'}}>
//                       <Button className="btn btn-green" onClick={Increment}><AddIcon/></Button>
//                       <Button className="btn btn-red" onClick={Decrement}><RemoveIcon/></Button>
//                     </div>
//                 </div>
//             </div>
//     </>
//   );
// }

// const favSeries="netflix";


// const App = () =>{
//   const [value, setValue]=useState();
//   const Change=(event)=>{
//         setValue(event.target.value);
//   }

//  return (
//     <>
      
//       <h3 className="heading_style">Top 5 Netflix web Series</h3>
//       <div className="style_input">
//           <input className="form-control" type="text" onChange={Change}/>
//           <i className="fa fa-search icon" aria-hidden="true"></i>
//       </div>
//       {/* <Favs/> */}
//       { (favSeries==value) ?   <Netflix /> : <Amazon/> }
//    </>
// );
//   }


//SLOT MACHINE
// const App= () =>{
//   return(
//     <>
//       <h1 className="heading_style">🎰 Welcome to slot machine game 🎰</h1>
//       <div className="slot_machine">
//         <Slot x="😄" y="😄" z="😄"/>
//         <Slot x="😄" y="😸" z="🥰"/>
//         <Slot x="🍎" y="🍌" z="😈" />
//       </div>
//     </>
//   );
// }

// const App = () =>{
//   let currenttime= new Date().toLocaleTimeString();
//   const [time, settime]=useState(currenttime);
//   const Timeupdate=()=>{

//     settime(time+currenttime);
//   };
//   setInterval(Timeupdate,1000);
//   return(
//     <>
//       <h1>{currenttime}</h1>
//       <button onClick={Timeupdate}>Set Time</button>
//     </>
//   );
// }

// const App =()=>{

//   let color='#8e44ad';
//   const [bg, setBg]=useState(color);
//   const [name, setName]=useState('Click Me');
//   const bgChange =()=>{
//     let newBg="#34495e";
//     setBg(newBg);
//     setName('Ouchh!! 🐺');
//   }

//   return(
//     <>
//       <div style={{background:bg}}>
//         <button onClick={bgChange}>{name}</button>
//       </div>
//     </>
//   );
// }

// const App= () =>{

//   const [fullname, setFullName]= useState({
//     fname:"",
//     lname:"",
//     emailid:"",
//   });
//   const InputEvent=(event)=>{
   
//     const value=event.target.value;
//    // console.log(value);
//     const name=event.target.name;
//    // console.log(name);

//     setFullName((preValue)=>{
//      // console.log(preValue);
//      return{
//       ...preValue,
//       [name]:value
//     }
//       // if(name==='fname')
//       // {
//       //   return{
//       //     fname:value,
//       //     lname:preValue.lname,
//       //     emailid:preValue.emailid
//       //   };
//       // }
//       // else if(name==='lname'){
//       //   return{
//       //     fname:preValue.fname,
//       //     lname:value,
//       //     emailid:preValue.emailid
//       //   };
//       // }
//       // else if(name==='emailid'){
//       //   return{
//       //     fname:preValue.fname,
//       //     lname:preValue.lname,
//       //     emailid:value
//       //   };
//       // }
//     });

//   }

//   // const [password, setPassword]=useState();
//   // const [newpassword, setNewPassword]=useState();
//   // const ChangeEvent=(e)=>{
//   //   e.preventDefault();
//   //   setPassword(e.target.value);
//   // }

//   //submit
//   const Submit=(e)=>{
//     e.preventDefault();

//   }

 
//   return(
//     <>
//         <div style={{display: 'grid',justifyContent: 'center',marginTop: '17%',textAlign: 'center'}}>
//         <form onSubmit={Submit}>
//           <h1>Hello {fullname.fname} {fullname.lname} {fullname.emailid}</h1>
//           <input type="text" name="fname" placeholder="Name" className="form-control" onChange={InputEvent} /><br/>
//           <input type="text" name="lname" placeholder="Last Name" className="form-control" onChange={InputEvent} /><br/>
//           <input type="text" name="emailid" placeholder="Email Id" className="form-control" onChange={InputEvent} />
//           <button type="submit">Click Me</button>
//         </form>
//         </div>
//     </>
//   );
// }

