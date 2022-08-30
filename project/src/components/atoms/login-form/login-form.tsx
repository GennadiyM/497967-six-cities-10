import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../hooks/redux';
import { loginAction } from '../../../store/api-actions';
import { AuthData } from '../../../types/auth-data';

const INVALID_PASSWORD_MESSAGE = 'Пароль должен состоять минимум из одной буквы и цифры';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (/\d/.test(password) && /[a-zA-z]+/g.test(password)) {
        onSubmit({email, password});
      } else {
        toast.error(INVALID_PASSWORD_MESSAGE);
      }
    }
  };
  return (
    <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>E-mail</label>
        <input
          className='login__input form__input'
          type='email'
          name='email'
          placeholder='Email'
          ref={emailRef}
          required
        />
      </div>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>Password</label>
        <input
          className='login__input form__input'
          type='password'
          name='password'
          placeholder='Password'
          ref={passwordRef}
          required
        />
      </div>
      <button
        className='login__submit form__submit button'
        type='submit'
      >
        Sign in
      </button>
    </form>
  );
}
