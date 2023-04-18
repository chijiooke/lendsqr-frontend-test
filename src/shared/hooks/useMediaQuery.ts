import { screenSize } from "../../pages/users/types/ScreenSize.enum";

export const UseMediaQuery = () => {
  
  const screen = window.innerWidth;
  if (screen >1300) {
    return screenSize.DESKTOP;
  } else if (screen < 810 && screen > 400) {
    return screenSize.PAD;
  } else {
    return screenSize?.PHONE;
  }
};
