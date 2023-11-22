import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      Load More
    </button>
  );
}