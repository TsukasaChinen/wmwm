import { FooterCopyright } from './FooterCopyright';
import css from './footer.module.css';

export const Footer: React.FC = () => (
  <footer className={css.footer}>
    <FooterCopyright copy="trylight.net" />
  </footer>
);
