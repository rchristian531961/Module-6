import {useState} from 'react';

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleInputChange=(e)=>{
    console.log(e.target.value);

    if (e.target.name==='userEmail'){
        setUserEmail(e.target.value)
    }
    if (e.target.name==='userPassword'){
        setUserPassword(e.target.value);
    }
  }

  return (
    <div className="LoginForm componentBox">
      <div className="formRow">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) =>handleInputChange(e)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="UserPassword"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;