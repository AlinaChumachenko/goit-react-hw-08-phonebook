import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            placeholder="Enter email ..."
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            // title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
            placeholder="Enter password ..."
            required
          />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
