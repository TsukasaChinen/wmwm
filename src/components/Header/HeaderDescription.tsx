type Props = {
  description: string;
};

export const HeaderDescription: React.FC<Props> = ({ description }) => <p className="ffMaruGothic">{description}</p>;
