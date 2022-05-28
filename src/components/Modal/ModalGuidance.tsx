import { IconWat } from '../Icon/IconWat';
import css from './modal.module.css';

type Props = {
  text: string;
};
export const ModalGuidance: React.FC<Props> = ({ text }) => (
  <span className={css.guidance}>
    <IconWat />
    {text}
  </span>
);
