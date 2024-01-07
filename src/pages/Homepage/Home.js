import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phone Book</h1>
      <p className={css.text}>Register to create your contact list</p>
    </div>
  );
}
