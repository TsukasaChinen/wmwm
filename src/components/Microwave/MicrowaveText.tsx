type Props = {
  className?: string;
  text: number | '';
};
export const MicrowaveText: React.FC<Props> = ({ className, text }) => <div className={className}>{text}</div>;
