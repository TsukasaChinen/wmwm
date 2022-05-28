import { HeaderTitle } from './HeaderTitle';
import { HeaderDescription } from './HeaderDescription';
import css from './header.module.css';

export const Header: React.FC = () => (
  <header className={css.header}>
    <a href="./" className={css.link}>
      <HeaderTitle title="WMWM" />
      <HeaderDescription description="ウチの電子レンジだと何分？" />
    </a>
  </header>
);
