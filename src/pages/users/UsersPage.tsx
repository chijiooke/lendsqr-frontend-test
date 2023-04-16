import React, { useEffect, useState } from "react";
import axios from "axios";
import PageWrapper from "../../common/UIElements/PageWrapper";
import { ReactComponent as ActiveUsers } from "../../assets/dashcard-active-users.svg";
import { ReactComponent as UsersWIthLoans } from "../../assets/dashcard-users-with-loans.svg";
import { ReactComponent as UsersWithSavings } from "../../assets/dashcard-users-with-loans.svg";
import { ReactComponent as Users } from "../../assets/dashcard-users.svg";
import DataCard from "./components/data-card/DataCard";
import './styles/UserPage.styles.scss'

const UsersPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => setUsers(res.data));
  }, []);

  const userData = [
    { title: "USERS", count: "2,453", icon: ActiveUsers },
    { title: "Active Users", count: "2,453", icon: UsersWIthLoans },
    { title: "Users with Loans", count: "12,453", icon: UsersWithSavings },
    { title: "Users with Savings", count: "102,453", icon: Users },
  ];

  return (
    <PageWrapper>
      <div className="data__card__wrapper">
        {userData.map((data) => (
          <DataCard icon={data?.icon} count={data.count} title={data.title} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default UsersPage;
