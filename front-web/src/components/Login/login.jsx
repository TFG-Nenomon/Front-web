import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoInicioSesion from '../../assets/logoInicioSesion.png';
import Visible from '../../assets/Visibility/Visible.png';
import Invisible from '../../assets/Visibility/NotVisible.png';
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

  const [errorMessage, setErrorMessage] = useState('');
  const [loginFieldError, setLoginFieldError] = useState('');

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showRecoveryModal, setShowRecoveryModal] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setErrorMessage('');
    setLoginFieldError('');
    setLoading(true);

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

        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/home");
        return;
      }

      setLoginFieldError("El email o la contraseña no son correctos");

    } catch (error) {
      setLoginFieldError("Backend no disponible");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    setErrorMessage('');
    setLoading(true);

    if (regPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      setLoading(false);
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
        setActiveTab('login');
      } else {
        setErrorMessage(data || 'Error en registro');
      }

    } catch (error) {
      setErrorMessage('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="login-container">

      <div className="login-image">
        <img
          src={logoInicioSesion}
          alt="Logo principal de la aplicación"
        />
      </div>

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

        {errorMessage && (
          <p className="error-message" role="alert">
            {errorMessage}
          </p>
        )}

        {activeTab === 'login' && (

          <form className="login-form" onSubmit={handleLogin}>

            <h3>Bienvenido de nuevo</h3>

            <div className="form-group">

              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                className={`form-input ${loginFieldError ? 'input-error-border' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="password">Contraseña</label>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`form-input ${loginFieldError ? 'input-error-border' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={showPassword ? Invisible : Visible}
                    alt="toggle"
                    className="eye-icon"
                  />
                </button>

              </div>

              {loginFieldError && (
                <p className="input-error" role="alert">
                  {loginFieldError}
                </p>
              )}

            </div>

            <button
              type="button"
              className="forgot-link forgot-button"
              onClick={() => setShowRecoveryModal(true)}
            >
              ¿Olvidaste tu contraseña?
            </button>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Ingresar'}
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

              <div className="password-wrapper">

                <input
                  type={showRegisterPassword ? 'text' : 'password'}
                  className="form-input"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  <img
                    src={showRegisterPassword ? Invisible : Visible}
                    alt="toggle"
                    className="eye-icon"
                  />
                </button>

              </div>
            </div>

            <div className="form-group">
              <label>Confirmar contraseña</label>

              <div className="password-wrapper">

                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <img
                    src={showConfirmPassword ? Invisible : Visible}
                    alt="toggle"
                    className="eye-icon"
                  />
                </button>

              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </button>

          </form>
        )}

      </div>

      {showRecoveryModal && (

        <div className="modal-overlay">

          <div className="recovery-modal">

            <div className="recovery-message">

              <h3>Recuperación de contraseña</h3>

              <p>
                Se ha enviado un correo de recuperación a tu dirección de email.
              </p>

            </div>

            <button
              className="btn btn-primary"
              onClick={() => setShowRecoveryModal(false)}
            >
              Cerrar
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;