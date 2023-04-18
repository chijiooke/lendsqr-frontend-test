import { ReactComponent as ActiveUsers } from "../../assets/dashcard-active-users.svg";
import { ReactComponent as UsersWIthLoans } from "../../assets/dashcard-users-with-loans.svg";
import { ReactComponent as UsersWithSavings } from "../../assets/dashcard-users-with-savings.svg";
import { ReactComponent as Users } from "../../assets/dashcard-users.svg";
import PageWrapper from "../../common/UIElements/pageWrapper/PageWrapper";
import axios from "axios";

import DataCard from "./components/data-card/DataCard";
import { Table } from "./components/user-table/UserTable";
import "./styles/UserPage.styles.scss";
import { useEffect, useState } from "react";
import { UserType } from "./types/UserDetailTypes";
import Loader from "../../common/UIElements/loader/Loader";

const UsersPage = () => {
  const [users, setusers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const userData = [
    { title: "USERS", count: "2,453", icon: Users },
    { title: "Active Users", count: "2,453", icon: ActiveUsers },
    { title: "Users with Loans", count: "12,453", icon: UsersWIthLoans },
    { title: "Users with Savings", count: "102,453", icon: UsersWithSavings },
  ];

  const getUsers = () => {
    return axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => setusers(res?.data as UserType[]))
      .catch((err: any) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  return (
    <PageWrapper showPath>
      {!!loading ? (
        <Loader />
      ) : (
        <>
          <div className="data__card__wrapper">
            {userData.map((data, index) => (
              <div key={index}>
                <DataCard
                  icon={data?.icon}
                  count={data.count}
                  title={data.title}
                />
              </div>
            ))}
          </div>
          <Table users={users} />
        </>
      )}
    </PageWrapper>
  );
};

export default UsersPage;
