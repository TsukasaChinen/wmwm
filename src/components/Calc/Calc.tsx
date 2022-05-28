import { useRecoilState } from 'recoil';
import { CalcSelectGroup } from './CalcSelectGroup';
import { CalcText } from './CalcText';
import { watState, minState, secState } from '../Key';
import css from './calc.module.css';

export const Calc: React.FC = () => {
  const [wat, setWat] = useRecoilState(watState);

  const wats: number[] = [];
  for (let i = 500; i <= 1000; i += 100) {
    wats.push(i);
  }

  const handleChangeWat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWat(Number(e.target.value));
  };

  const [min, setMin] = useRecoilState(minState);

  const mins: number[] = [];
  for (let i = 0; i <= 10; i += 1) {
    mins.push(i);
  }

  const handleChangeMin = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMin(Number(e.target.value));
  };

  const [sec, setSec] = useRecoilState(secState);

  const secs: number[] = [];

  for (let i = 0; i <= 55; i += 5) {
    secs.push(i);
  }

  const handleChangeSec = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSec(Number(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.group}>
          <CalcSelectGroup size="medium" viewValue={wat} values={wats} onChange={handleChangeWat} />
          <CalcText text="ワットで" />
        </div>
        <div className={css.group}>
          <CalcSelectGroup size="small" viewValue={min} values={mins} onChange={handleChangeMin} />
          <CalcText text="分" />
          <CalcSelectGroup size="small" viewValue={sec} values={secs} onChange={handleChangeSec} />
          <CalcText text="秒って" />
        </div>
        <div className={css.group}>
          <CalcText text="ほかのワット数だと何分何秒？" />
        </div>
      </div>
    </div>
  );
};
