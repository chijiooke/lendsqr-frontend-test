import { Dispatch, FC } from "react";
import { capitalizeText } from "../../utils/capitalizeText";
import './Tabs.styles.scss'

const Tabs: FC<{
  tabs: string[];
  activeItem: string;
  setActiveItem: Dispatch<string>;
}> = ({ tabs, activeItem, setActiveItem }) => {
  return (
    <div className="tab__wrapper">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab ${activeItem === tab && "active__tab"}`}
          onClick={() => setActiveItem(tab)}
        >
          {capitalizeText(tab)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
