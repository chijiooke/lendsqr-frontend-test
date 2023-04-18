import React from "react";
import Button, {
  ButtonColorType,
  ButtonVariantType,
} from "../../../../common/UIElements/button/Button";
import { UserType } from "../../types/UserDetailTypes";

const FilterForm: React.FC<{ users: UserType[] }> = ({ users }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="filter__field">
        <label htmlFor="Organization">Organisation</label>
        <select className="filter__input">
          {users?.map((it, index) => (
            <option key={index}>{it.orgName}</option>
          ))}
        </select>
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Username</label>
        <input className="filter__input" />
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Email</label>
        <input className="filter__input" type="email" />
      </div>
      <div className="filter__field">
        <label htmlFor="Organization">Date</label>
        <input className="filter__input" type="date" />
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
