type Props = {
  title: string;
};

export const HeaderTitle: React.FC<Props> = ({ title }) => <h1>{title}</h1>;
