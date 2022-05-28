import { useSetRecoilState } from 'recoil';
import { IconWat } from '../Icon/IconWat';
import { IconMin } from '../Icon/IconMin';
import { modalState } from '../Key';
import css from './result.module.css';

type Props = {
  id: number;
  wat: number;
  min: number;
  sec: number;
  isClick?: boolean;
};

export const ResultGroup: React.FC<Props> = ({ id, wat, min, sec, isClick }) => {
  const setIsModal = useSetRecoilState(modalState);

  const handleClick = () => {
    const modalInput = document.getElementById('modal-input');
    modalInput?.focus();
    setIsModal(true);
  };

  return (
    <dl className={css.resultGroup}>
      <dt>
        {id === 1 && <IconWat />}
        {isClick ? (
          <button type="button" className={css.resultButton} onClick={handleClick} data-state={!wat ? 0 : wat}>
            {!wat ? 'ワット数を入力' : `${wat}w`}
          </button>
        ) : (
          <span>{wat}w</span>
        )}
      </dt>
      <dd>
        {id === 1 && <IconMin />}
        {!min && !sec ? (
          <span>-----</span>
        ) : (
          <span>
            {!min ? '' : `${min}分`}
            {!sec ? '' : `${sec}秒`}
          </span>
        )}
      </dd>
    </dl>
  );
};
