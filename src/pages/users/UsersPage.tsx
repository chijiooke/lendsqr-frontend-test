import { ReactComponent as ActiveUsers } from "../../assets/dashcard-active-users.svg";
import { ReactComponent as UsersWIthLoans } from "../../assets/dashcard-users-with-loans.svg";
import { ReactComponent as UsersWithSavings } from "../../assets/dashcard-users-with-savings.svg";
import { ReactComponent as Users } from "../../assets/dashcard-users.svg";
import PageWrapper from "../../common/UIElements/pageWrapper/PageWrapper";

import DataCard from "./components/data-card/DataCard";
import { Table } from "./components/table/Table";
import "./styles/UserPage.styles.scss";

const UsersPage = () => {
  const userData = [
    { title: "USERS", count: "2,453", icon: Users },
    { title: "Active Users", count: "2,453", icon: ActiveUsers },
    { title: "Users with Loans", count: "12,453", icon: UsersWIthLoans },
    { title: "Users with Savings", count: "102,453", icon: UsersWithSavings },
  ];

  return (
    <PageWrapper showPath>
      <>
        <div className="data__card__wrapper">
          {userData.map((data) => (
            <DataCard icon={data?.icon} count={data.count} title={data.title} />
          ))}
        </div>
        <Table />
      </>
    </PageWrapper>
  );
};

export default UsersPage;
