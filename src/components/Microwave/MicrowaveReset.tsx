import { useResetRecoilState } from 'recoil';
import { watState, minState, originalWatState } from '../Key';
import css from './microwave.module.css';

export const MicrowaveReset: React.FC = () => {
  const resetWatState = useResetRecoilState(watState);
  const resetMinState = useResetRecoilState(minState);
  const resetOriginalWatState = useResetRecoilState(originalWatState);

  const handleClickReset = () => {
    resetWatState();
    resetMinState();
    resetOriginalWatState();
  };

  return (
    <button type="button" className={css.button} onClick={handleClickReset}>
      Reset
    </button>
  );
};
