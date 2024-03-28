import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

import { Link } from 'react-router-dom';
// import { Profile } from 'pages/ProfilePage/Profile';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.box}>
      <p className={css.text}>{user.name}</p>
      <Link to="/profile" className={css.link}>
        Profile
      </Link>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
