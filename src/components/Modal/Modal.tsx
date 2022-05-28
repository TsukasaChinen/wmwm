import { useRecoilValue } from 'recoil';
import { modalState } from '../Key';
import { ModalClose } from './ModalClose';
import { ModalInputGroup } from './ModalInputGroup';
import css from './modal.module.css';

export const Modal: React.FC = () => {
  const isModal = useRecoilValue(modalState);

  return (
    <div className={css.wrapper} data-show={isModal}>
      <ModalClose />
      <div className={css.content}>
        <ModalInputGroup />
      </div>
    </div>
  );
};
