import { FC } from "react";
import { UserType } from "../../../users/components/table/UserDetailTypes";
import "./UserGeneralDetails.styles.scss";

const UserGeneralDetails: FC<{ userDetails: UserType }> = ({ userDetails }) => {
  const personalInformation = [
    {
      title: "Full Name",
      value:
        userDetails?.profile?.firstName + " " + userDetails?.profile?.lastName,
    },
    {
      title: "Phone Number",
      value: userDetails?.profile?.phoneNumber,
    },
    {
      title: "Bvn",
      value: userDetails?.profile?.bvn,
    },
    {
      title: "Email Address",
      value: userDetails?.email,
    },
    {
      title: "Gender",
      value: userDetails?.profile?.gender,
    },
    {
      title: "Marital status",
      value: "Single",
    },
    {
      title: "Children",
      value: "None",
    },
    {
      title: "Type's Of Residence",
      value: "Parent’s Apartment",
    },
  ];

  const educationAndEmployment = [
    {
      title: "level of education",
      value: userDetails?.education?.level,
    },
    {
      title: "employment status",
      value: userDetails?.education?.employmentStatus,
    },
    {
      title: "sector of employment",
      value: userDetails?.education?.sector,
    },
    {
      title: "Duration of employment",
      value: userDetails?.education?.duration,
    },
    {
      title: "Monthly income",
      value: userDetails?.education?.monthlyIncome
        .map((it) => `₦ ${it}`)
        .join(" - "),
    },
    {
      title: "loan repayment",
      value: userDetails?.education?.loanRepayment,
    },
  ];

  const socials = [
    {
      title: "Twitter",
      value: userDetails?.socials?.twitter,
    },
    {
      title: "Facebook",
      value: userDetails?.socials?.facebook,
    },
    {
      title: "Instagram",
      value: userDetails?.socials?.instagram,
    },
  ];
  const guarantor = [
    {
      title: "full Name",
      value: userDetails?.guarantor?.firstName + " " + userDetails?.guarantor?.lastName ,
    },
    {
      title: "Phone Number",
      value: userDetails?.guarantor?.phoneNumber,
    },
    {
      title: "Email Address",
      value: 'N/A',
    },
    {
      title: "Relationship",
      value: 'Ex',
    },
  ];

  return (
    <div className="user__general__details__wrapper">
      <div className="user__general__details__section">
        {" "}
        <p className="section__title">Personal Information</p>
        <div className="user__personal__information">
          {personalInformation.map((info) => (
            <DetailItem title={info?.title} value={info?.value} />
          ))}
        </div>
      </div>
      <div className="user__general__details__section">
        {" "}
        <p className="section__title">Education and Employment</p>
        <div className="user__education">
          {educationAndEmployment.map((info) => (
            <DetailItem title={info?.title} value={info?.value} />
          ))}
        </div>
      </div>
      <div className="user__general__details__section">
        {" "}
        <p className="section__title">Socials</p>
        <div className="user__socials">
          {socials.map((info) => (
            <DetailItem title={info?.title} value={info?.value} />
          ))}
        </div>
      </div>
      <div className="user__general__details__section">
        {" "}
        <p className="section__title">Education and Employment</p>
        <div className="user__guarantor">
          {guarantor.map((info) => (
            <DetailItem title={info?.title} value={info?.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserGeneralDetails;

const DetailItem: FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => {
  return (
    <div className="user__detail">
      <p className="user__detail__title">{title}</p>
      <p className="user__detail__value">{value}</p>
    </div>
  );
};
