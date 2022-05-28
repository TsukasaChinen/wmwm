import { useRecoilValue } from 'recoil';
import { watState, minState } from '../Key';
import { MicrowaveDraw } from './MicrowaveDraw';
import { MicrowaveReset } from './MicrowaveReset';
import { MicrowaveText } from './MicrowaveText';
import css from './microwave.module.css';

export const Microwave: React.FC = () => {
  const wat = useRecoilValue(watState);

  const min = useRecoilValue(minState);

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <MicrowaveText className={css.wat} text={wat || ''} />
        <MicrowaveText className={css.min} text={min || ''} />
        <MicrowaveReset />
        <MicrowaveDraw />
      </div>
    </div>
  );
};
