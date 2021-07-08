import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
export const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'olo@gmail.com',
    password: '123123',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('email is not valid'));
      return false;
    } else if (password.length < 5) {
      dispatch(setError('Password shold be at least 6 characters '));
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className='auth__title mb-5'>Login</h3>
      <form onSubmit={handleLogin}>
        {msgError && (
          <div className='auth__alert-error bounceIn'>
            <span>{msgError}</span>
          </div>
        )}
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <button className='btn btn-primary btn-block' type='submit'>
          Login
        </button>
        <div className='auth__social-networks'>
          <p className='mb-1'>Login with social networks</p>
          <div className='google-btn' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};
