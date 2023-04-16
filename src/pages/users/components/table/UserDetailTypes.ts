export type UserType = {
  createdAt: string;
  orgName: string;
  userName: number;
  email: number;
  phoneNumber: string;
  lastActiveDate: number;
  profile: UserProfileType;
  guarantor: UserGuarantorType;
  accountBalance: string;
  accountNumber: string;
  socials: UserSocialsType;
  education: UserEducationType;
  id: string;
};

type UserProfileType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

type UserGuarantorType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};
type UserSocialsType = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type UserEducationType = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};
