import dayjs from "dayjs";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button, {
  ButtonColorType,
  ButtonVariantType,
} from "../../../../shared/UIElements/button/Button";
import { UserType } from "../../types/UserDetailTypes";
import "./UserGrid.styles.scss";

export const UserGrid: FC<{ users: UserType[] }> = ({ users }) => {
  return (
    <div className=" user__grid__wrapper ">
      {users.map((user) => (
        <div className="user__grid__item">
          <div className="user__grid__primary__info">
            {" "}
            <img src={user.profile?.avatar} className="user__grid__avatar" />
            <div>
              <Link
                to={`/users/${user?.id}`}
                className="user__grid__value__username"
              >
                {user?.userName}
              </Link>
              <p className="user__grid__value__email">{user?.email}</p>
            </div>
          </div>

          <p className="user__grid__title">Organization</p>
          <p className="user__grid__value">{user?.orgName}</p>

          <p className="user__grid__title">Phone Number</p>
          <p className="user__grid__value">{user?.phoneNumber}</p>
          <p className="user__grid__title">
            Joined: {dayjs(user.createdAt).format("MMM DD YYYY")}
          </p>
          <div className="user__grid__actions__wrapper">
            {" "}
            <Button
              label="Blacklist User"
              onClick={() => {}}
              variant={ButtonVariantType.BORDER}
              type="button"
              color={ButtonColorType.ERROR}
            />
            <Button
              label="Activate User"
              onClick={() => {}}
              variant={ButtonVariantType.BORDER}
              type="button"
              color={ButtonColorType.SUCCESS}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
