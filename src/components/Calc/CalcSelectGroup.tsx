import { CalcSelect } from './CalcSelect';
import css from './calc.module.css';

type Props = {
  size: 'medium' | 'small';
  viewValue: number;
  values: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const CalcSelectGroup: React.FC<Props> = ({ size, viewValue, values, onChange }) => (
  <div className={`${css.selectGroup} ${size === 'medium' ? css.medium : css.small}`}>
    <p className={css.dummy}>{viewValue}</p>
    <CalcSelect values={values} onChange={onChange} />
  </div>
);
