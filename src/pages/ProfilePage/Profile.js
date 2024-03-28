import { useAuth } from 'hooks/useAuth';

import css from './Profile.module.css';

export const Profile = () => {
  const { user } = useAuth;

  return (
    <div className={css.container}>
      <p className={css.text}>{user.name}</p>
      <p className={css.text}>{user.email}</p>
    </div>
  );
};
