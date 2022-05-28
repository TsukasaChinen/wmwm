type Props = {
  copy: string;
};

export const FooterCopyright: React.FC<Props> = ({ copy }) => (
  <small>
    <span>&copy;</span> {copy}
  </small>
);
