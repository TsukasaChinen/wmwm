import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState, originalWatState } from '../Key';
import { ModalGuidance } from './ModalGuidance';
import { ModalInput } from './ModalInput';
import { ModalError } from './ModalError';
import css from './modal.module.css';

export const ModalInputGroup: React.FC = () => {
  const setIsModal = useSetRecoilState(modalState);

  const [originalWat, setOriginalWat] = useRecoilState(originalWatState);

  const handleKeypressWat = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const inputEle = document.getElementById('modal-input');
    inputEle?.blur();
  };

  const handleChangeWat = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 1000) {
      setOriginalWat(0);
    } else {
      setOriginalWat(value);
    }
  };

  const handleBlurWat = () => {
    setIsModal(false);
  };

  return (
    <div className={css.inputGroup}>
      <ModalGuidance text="ワット数を入力してください" />
      <ModalInput
        id="modal-input"
        value={originalWat}
        onKeyPress={handleKeypressWat}
        onChange={handleChangeWat}
        onBlur={handleBlurWat}
      />
      <ModalError text="1000以下を入力してください" />
    </div>
  );
};
