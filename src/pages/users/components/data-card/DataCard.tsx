import { FC } from "react";
import './DataCard.styles.scss'

interface DataCardProps {
  icon: any;
  title: string;
  count: string | number;
}
const DataCard: FC<DataCardProps> = ({ icon, title, count }) => {
  const Icon = icon;
  return (
    <div className="card__wrapper">
      <Icon />
      <p className="card__title">{title}</p>
      <p className="card__count">{count}</p>
    </div>
  );
};

export default DataCard;
