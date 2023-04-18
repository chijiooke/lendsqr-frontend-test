import { ReactComponent as ActiveUsers } from "../../assets/dashcard-active-users.svg";
import { ReactComponent as UsersWIthLoans } from "../../assets/dashcard-users-with-loans.svg";
import { ReactComponent as UsersWithSavings } from "../../assets/dashcard-users-with-savings.svg";
import { ReactComponent as Users } from "../../assets/dashcard-users.svg";
import PageWrapper from "../../shared/UIElements/pageWrapper/PageWrapper";
import axios from "axios";

import DataCard from "./components/data-card/DataCard";
import { Table } from "./components/user-table/UserTable";
import "./styles/UserPage.styles.scss";
import { useEffect, useState } from "react";
import { UserType } from "./types/UserDetailTypes";
import Loader from "../../shared/UIElements/loader/Loader";

export enum filterTypes {
  ORGANIZATION = "organisation",
  USERNAME = "username",
  EMAIL = "email",
  DATE = "date",
  PHONE_NUMBER = "phone-number",
}

const UsersPage = () => {
  const [users, setusers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const filterFn: (
    filterBy: {
      filterType: filterTypes;
      fillterValue: string;
    }[]
  ) => void = (filterBy) => {
    let filteredUsers: UserType[];
    filterBy.map((it) => {
      if (it.filterType === filterTypes.USERNAME) {
        filteredUsers = users.filter((user) =>
          user.userName.includes(it.fillterValue as string)
        );
      }
      // if (it.filterType === filterTypes.DATE) {
      //   filteredUsers = users.filter((user) => {
      //     user.createdAt === it.fillterValue;
      //   });
      // }
      // if (it.filterType === filterTypes.EMAIL) {
      //   filteredUsers = users.filter((user) =>
      //     user.email.includes(it.fillterValue as string)
      //   );
      // }
      // if (it.filterType === filterTypes.PHONE_NUMBER) {
      //   filteredUsers = users.filter((user) =>
      //     user.phoneNumber.includes(it.fillterValue as string)
      //   );
      // }
      // if (it.filterType === filterTypes.ORGANIZATION) {
      //   filteredUsers = users.filter(
      //     (user) => user.orgName === (it.fillterValue as string)
      //   );
      // }

      setusers(filteredUsers);
    });
  };
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
          <Table users={users} filterFn={filterFn} />
        </>
      )}
    </PageWrapper>
  );
};

export default UsersPage;
