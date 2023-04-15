import { ReactComponent as Briefcase } from "../../assets/savings.svg";

const icons = [{ name: "savings", icon: Briefcase }];

type IGetIconType = (icon: string) => React.FC<React.SVGProps<SVGSVGElement>>;

export const getIcons: IGetIconType = (icon) => {
  const selected = icons.filter((it) => it.name === icon);
  return selected[0].icon;
};
