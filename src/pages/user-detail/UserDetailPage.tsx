import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import BackButton from "../../shared/UIElements/back-arrow-button/BackButton";
import Loader from "../../shared/UIElements/loader/Loader";
import PageWrapper from "../../shared/UIElements/pageWrapper/PageWrapper";
import Tabs from "../../shared/UIElements/tabs/Tabs";
import { formatAmount } from "../../shared/utils/formatAmount";
import { Rating } from "react-simple-star-rating";

import { UserType } from "../users/types/UserDetailTypes";
import UserGeneralDetails from "./components/user-general-details/UserGeneralDetails";
import { tabs } from "./types/tabs.enums";
import "./UserDetailPage.styles.scss";

const UserDetailPage = () => {
  const { id } = useParams();
  const [userDetails, setuserDetails] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs.GENRAL_DETAILS);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then((res) => setuserDetails(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (!userDetails || isLoading) {
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    );
  }
  return (
    <PageWrapper>
      <div>
        {" "}
        <BackButton path="/users" text="back to users" />
        <div className="user__details__header">
          <p>User Detail</p>
          <div className="action__btns__wrapper">
            <button className="action__btn error">Blacklist User</button>
            <button className="action__btn success ">Activate User</button>
          </div>
        </div>
        <div className="user__detail__card__wrapper">
          <div className="user__detail__card">
            <img
              src={userDetails?.profile.avatar || avatar}
              alt="avatar"
              className="user__avatar"
            />
            <div className="user__basic__details">
              <div className="user__detail__card__item">
                {" "}
                <div>
                  <p className="user__fullname">
                    {userDetails?.profile?.firstName}{" "}
                    {userDetails?.profile?.lastName}
                  </p>
                  <p>{userDetails?.profile?.bvn}</p>
                </div>
              </div>
              <div className="user__detail__card__item">
                {" "}
                <p>User's Tier</p>
                <Rating
                  initialValue={1}
                  iconsCount={3}
                  size={20}
                  SVGstrokeColor="#f1a545"
                  SVGstorkeWidth="1px"
                  emptyColor="transparent"
                />
              </div>
              <div className="user__detail__card__item">
                <p className="user__account__balance">
                  ₦{formatAmount(Number(userDetails?.accountBalance))}
                </p>
                <p className="account__number">
                  {userDetails?.accountNumber}/Providus Bank
                </p>
              </div>
            </div>
          </div>
          <Tabs
            tabs={Object.values(tabs)}
            activeItem={activeTab}
            setActiveItem={setActiveTab}
          />
        </div>
        {activeTab === tabs.GENRAL_DETAILS && (
          <UserGeneralDetails userDetails={userDetails} />
        )}
      </div>
    </PageWrapper>
  );
};

export default UserDetailPage;
