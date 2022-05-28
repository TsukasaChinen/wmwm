import css from './catchcopy.module.css';

export const CatchCopy: React.FC = () => (
  <div className={css.wrapper}>
    <div className={css.contents}>
      <span className={css.text}>{process.env.REACT_APP_DESCRIPTION}</span>
    </div>
  </div>
);
