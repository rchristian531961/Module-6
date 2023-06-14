import {useState} from 'react'

function SubmitForm(){
    const [submitResult, setSubmitResult]=useState('');

    const [userEmail, setUserEmail]=useState('');
    const [userPassword, setUserPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault() //prevents refresh of page on submit
        if(userPassword.length<5){
            setSubmitResult('Password must be at least 5 characters long');
        }
        else if (userPassword===userEmail){
            setSubmitResult('Password must not match email address');
        }
        else{
            setSubmitResult('Success login');
        }
        console.log(e) //try e you'll notice e is an array containing password, username button in form etc
        // e.target[1].type='text';
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type='email' onChange={(e)=>setUserEmail(e.target.value)} name='userEmail' value={userEmail}></input>
                </label>
                <label>Password:
                    <input type='password' onChange={(e)=>setUserPassword(e.target.value)} name='userPassword' value={userPassword}></input>
                </label>
                <button>Log in</button>
                <p>{submitResult}</p>
            </form>
        </div>
    )
}

export default SubmitForm;