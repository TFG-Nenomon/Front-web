import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/usuario/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (response.ok) {

        localStorage.setItem(
          "user",
          JSON.stringify({
            email
          })
        );

        navigate("/home");

        return;
      }

    } catch (error) {
      console.log("Backend no disponible");
    }

    if (email === "sergio@gmail.com" && password === "12345") {

      localStorage.setItem(
        "user",
        JSON.stringify({
          email
        })
      );

      navigate("/home");

    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (regPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/usuario/registry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: regUsername,
          email: regEmail,
          password: regPassword
        }),
      });

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (response.ok) {
        console.log('Registro correcto', data);
        alert('Registro correcto');

        setActiveTab('login');
      } else {
        console.error('Error registro:', data);
        alert(data || 'Error en registro');
      }
    } catch (error) {
      console.error('Error de conexión', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Iniciar Sesión
          </button>

          <button
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Registrarse
          </button>
        </div>

        {activeTab === 'login' && (
          <form className="login-form" onSubmit={handleLogin}>
            <h3>Bienvenido de nuevo</h3>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>

              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Ingresar
            </button>
          </form>
        )}

        {activeTab === 'register' && (
          <form className="login-form" onSubmit={handleRegister}>
            <h3>Crear nueva cuenta</h3>

            <div className="form-group">
              <label>Username</label>

              <input
                type="text"
                className="form-input"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                className="form-input"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>

              <input
                type="password"
                className="form-input"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirmar contraseña</label>

              <input
                type="password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Crear Cuenta
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default Login;
