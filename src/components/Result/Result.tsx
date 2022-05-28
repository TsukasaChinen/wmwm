import { useRecoilValue } from 'recoil';
import { ResultGroup } from './ResultGroup';
import { resultMin } from '../Utilities';
import { watState, minState, secState, originalWatState } from '../Key';
import css from './result.module.css';

export const Result: React.FC = () => {
  const fixedWats: { [key: string]: number } = {
    low: 500,
    mid: 600,
    high: 700,
  };

  const wat = useRecoilValue(watState);

  const min = useRecoilValue(minState);

  const sec = useRecoilValue(secState);

  const originalWat = useRecoilValue(originalWatState);

  const data = [
    {
      id: 1,
      wat: fixedWats.low,
      min: resultMin(wat, min, sec, fixedWats.low, 'min'),
      sec: resultMin(wat, min, sec, fixedWats.low, 'sec'),
    },
    {
      id: 2,
      wat: fixedWats.mid,
      min: resultMin(wat, min, sec, fixedWats.mid, 'min'),
      sec: resultMin(wat, min, sec, fixedWats.mid, 'sec'),
    },
    {
      id: 3,
      wat: fixedWats.high,
      min: resultMin(wat, min, sec, fixedWats.high, 'min'),
      sec: resultMin(wat, min, sec, fixedWats.high, 'sec'),
    },
    {
      id: 4,
      wat: originalWat,
      min: originalWat ? resultMin(wat, min, sec, originalWat, 'min') : originalWat,
      sec: originalWat ? resultMin(wat, min, sec, originalWat, 'sec') : originalWat,
      isClick: true,
    },
  ];

  return (
    <div className={css.content}>
      {data.map((d) => (
        <ResultGroup key={d.id} id={d.id} wat={d.wat} min={d.min} sec={d.sec} isClick={d.isClick} />
      ))}
    </div>
  );
};
