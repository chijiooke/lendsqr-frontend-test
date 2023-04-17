import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import BackButton from "../../common/UIElements/back-button/BackButton";
import PageWrapper from "../../common/UIElements/pageWrapper/PageWrapper";
import Tabs from "../../common/UIElements/tabs/Tabs";
import { formatAmount } from "../../common/utils/formatAmount";

import { UserType } from "../users/components/table/UserDetailTypes";
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
      .finally(() => setIsLoading(false));
  }, []);

  if (!userDetails || isLoading) {
    return <p>Loading...</p>;
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
