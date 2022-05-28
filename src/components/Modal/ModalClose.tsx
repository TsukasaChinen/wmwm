import { useSetRecoilState } from 'recoil';
import { modalState } from '../Key';
import css from './modal.module.css';

export const ModalClose: React.FC = () => {
  const setIsModal = useSetRecoilState(modalState);

  const handleClickCloseModal = () => {
    setIsModal(false);
  };

  return (
    <button type="button" className={css.close} onClick={handleClickCloseModal}>
      close
    </button>
  );
};
