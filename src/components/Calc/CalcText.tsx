import css from './calc.module.css';

type Props = {
  text: string;
};

export const CalcText: React.FC<Props> = ({ text }) => <span className={`ffMaruGothic ${css.text}`}>{text}</span>;
