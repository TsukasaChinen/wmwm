import css from './modal.module.css';

type Props = {
  text: string;
};
export const ModalError: React.FC<Props> = ({ text }) => <span className={css.error}>{text}</span>;
