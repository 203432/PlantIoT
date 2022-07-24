import { useNavigate, } from "react-router-dom";

import "./Login.css"

function Login() {
  const navigate = useNavigate();
  const consumir_login = () => {
    navigate('/monitoreo');
  };    





  return (
    <div>
      <div>
        <section  className="container">

            <h2 className="Login-text-h2">L O G I N </h2>

  
          <form>
            <input className="input" placeholder="Username" class= "input" type="text" id = 'user' required  />
            <hr/>
            <input className="dipo" placeholder="Password" class= "input" type="password" id = 'pass' required  />
              <button className="btn_Login" onClick={consumir_login}> ENTRAR </button>
          </form>

  
        </section>    
      </div>
    </div>

  );


}


export default Login;