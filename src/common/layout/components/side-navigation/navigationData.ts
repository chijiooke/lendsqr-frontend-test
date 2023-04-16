import { ReactComponent as AuditLogs } from "../../../../assets/audit-logs.svg";
import { ReactComponent as Dashboard } from "../../../../assets/dashboard.svg";
import { ReactComponent as DecisionModels } from "../../../../assets/decision-models.svg";
import { ReactComponent as FeesAndCharges } from "../../../../assets/fees-and-charges.svg";
import { ReactComponent as FeesAndPricing } from "../../../../assets/fees-and-pricing.svg";
import { ReactComponent as Guarantors } from "../../../../assets/guarantors.svg";
import { ReactComponent as Karma } from "../../../../assets/karma.svg";
import {
  ReactComponent as LoanProducts,
  ReactComponent as LoanRequests,
} from "../../../../assets/loan-requests.svg";
import { ReactComponent as Loans } from "../../../../assets/loans.svg";
import { ReactComponent as Organization } from "../../../../assets/Organisation.svg";
import { ReactComponent as Preferences } from "../../../../assets/preferences.svg";
import { ReactComponent as Reports } from "../../../../assets/reports.svg";
import { ReactComponent as SavingsProducts } from "../../../../assets/savings-product.svg";
import { ReactComponent as Savings } from "../../../../assets/savings.svg";
import { ReactComponent as ServiceAccount } from "../../../../assets/service-account.svg";
import { ReactComponent as Services } from "../../../../assets/services.svg";
import { ReactComponent as Settlements } from "../../../../assets/settlement.svg";
import { ReactComponent as Transactions } from "../../../../assets/transactions.svg";
import { ReactComponent as Users } from "../../../../assets/users.svg";
import { ReactComponent as Whitelist } from "../../../../assets/whitelist.svg";

type NavigationDataType = {
  group: string;
  links: {
    text: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}[];

export const navigation: NavigationDataType = [
  {
    group: "",
    links: [{ text: "Dashboard", path: "/dashboard", icon: Dashboard }],
  },
  {
    group: "CUSTOMERS",
    links: [
      { text: "Users", path: "/users", icon: Users },
      { text: "Guarantors", path: "/guarantors", icon: Guarantors },
      { text: "Loans", path: "/loans", icon: Loans },
      {
        text: "Decision Models",
        path: "/decision-models",
        icon: DecisionModels,
      },
      { text: "Savings", path: "/savings", icon: Savings },
      { text: "Loan Requests", path: "/loan-requests", icon: LoanRequests },
      { text: "Whitelist", path: "/whitelist", icon: Whitelist },
      { text: "Karma", path: "/karma", icon: Karma },
    ],
  },
  {
    group: "BUSINESSES",
    links: [
      { text: "Organization", path: "/organization", icon: Organization },
      { text: "Loan Products", path: "/loan-products", icon: LoanProducts },
      {
        text: "Savings Products",
        path: "/savings-products",
        icon: SavingsProducts,
      },
      {
        text: "Fees and Charges",
        path: "/fees-and-charges",
        icon: FeesAndCharges,
      },
      { text: "Transactions", path: "/transactions", icon: Transactions },
      {
        text: "Services",
        path: "/services",
        icon: Services,
      },
      {
        text: "Service Account",
        path: "/service-sccount",
        icon: ServiceAccount,
      },
      { text: "Settlements", path: "/settlements", icon: Settlements },
      { text: "Reports", path: "/reports", icon: Reports },
    ],
  },
  {
    group: "SETTINGS",
    links: [
      { text: "Preferences", path: "/preferences", icon: Preferences },
      { text: "Fees and Pricing", path: "/loan-products", icon: FeesAndPricing },
      { text: "Audit Logs", path: "/audit-logs", icon: AuditLogs },
    ],
  },
];
