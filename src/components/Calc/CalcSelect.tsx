import css from './calc.module.css';

type Props = React.ComponentPropsWithoutRef<'select'> & {
  values: number[];
};

export const CalcSelect: React.FC<Props> = ({ values, onChange }) => (
  <select className={css.select} onChange={onChange}>
    {values.map((v: number) => (
      <option key={v} value={v}>
        {v}
      </option>
    ))}
  </select>
);
