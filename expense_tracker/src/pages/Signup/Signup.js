import React,{ useState }from "react";
import{useNavigate,Link} from 'react-router-dom';
import './Signup.css';
import axios from 'axios';


function Signup(){
    
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/Signup",{
                fname,lname,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/Expense",{state:{id:fname}})
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return( 
        <form action="POST">
            <div className="sign_form">
                <div className="sign_det">
                    <h1><u>Signup</u></h1>
                    <div className="name">
                        <input type="text" placeholder="First name" id="fname" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
                        <input type="text" placeholder="Last name" id="lname" name="lname" value={lname} onChange={e => setLname(e.target.value)}/>
                    </div>
                    <input type="text" placeholder="Email" id="email" name="email"value={email} onChange={e => setEmail(e.target.value)}  />
                    <input type="password" placeholder="Password" id="pass" name="pass"value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" id="cpass" name="cpass" />
                    <button type="submit"onClick={submit}>Signup</button>
                    <h5>Already have an account?<Link to="/"> Login </Link></h5>
                </div>
            </div>
        </form>
    
    )
}

export default Signup;