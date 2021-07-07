import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  //extraer una parte del state
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    email: 'simon@gmail.com',
    name: 'Simón',
    password: '123123',
    password2: '123123',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Formulario correcto');
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('email is not valid'));
      return false;
    } else if (name.trim().length === 0) {
      dispatch(setError('name is required'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError('Password shold be at least 6 characters and match each other')
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className='auth__title mb-5'>Register</h3>
      <form onSubmit={handleRegister}>
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
          onChange={handleInputChange}
          value={email}
        />

        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
          value={name}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          onChange={handleInputChange}
          value={password}
        />

        <input
          type='password'
          placeholder='Confirm password'
          name='password2'
          className='auth__input'
          onChange={handleInputChange}
          value={password2}
        />
        <button className='btn btn-primary btn-block mb-5' type='submit'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
      </form>
    </>
  );
};
