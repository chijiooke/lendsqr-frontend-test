import React, { useState } from "react";
import Button, {
  ButtonColorType,
  ButtonVariantType,
} from "../../../../shared/UIElements/button/Button";
import { UserType } from "../../types/UserDetailTypes";
import { filterTypes } from "../../UsersPage";

const FilterForm: React.FC<{
  users: UserType[];
  filterFn: (
    filterBy: {
      filterType: filterTypes;
      fillterValue: string;
    }[]
  ) => void;
}> = ({ users, filterFn }) => {
  const [organisation, setorganisation] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const filter = [
    { filterType: filterTypes.USERNAME, fillterValue: userName },
    { filterType: filterTypes.EMAIL, fillterValue: email },
    { filterType: filterTypes.DATE, fillterValue: date },
    { filterType: filterTypes.ORGANIZATION, fillterValue: organisation },
  ];
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="filter__field">
        <label htmlFor="Organization">Organisation</label>
        <select
          className="filter__input"
          onChange={(e) => setorganisation(e.target.value)}
        >
          {users?.map((it, index) => (
            <option key={index}>{it.orgName}</option>
          ))}
        </select>
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Username</label>
        <input
          className="filter__input"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Email</label>
        <input
          className="filter__input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Date</label>
        <input
          className="filter__input"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Status</label>
        <select className="filter__input">
          {["Active", "Inactive", "Blacklisted", "Pending"].map((it, index) => (
            <option key={index}>{it}</option>
          ))}
        </select>
        <div className="filter__footer">
          {" "}
          <Button
            label="Reset"
            type="reset"
            variant={ButtonVariantType?.BORDER}
          />
          <Button
            onClick={() => {
              filterFn(filter);
            }}
            label="Filter"
            type="submit"
            variant={ButtonVariantType?.FILLED}
            color={ButtonColorType.SUCCESS}
          />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
