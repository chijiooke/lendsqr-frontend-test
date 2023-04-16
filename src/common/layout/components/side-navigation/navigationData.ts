import { ReactComponent as Services } from "../../../../assets/services.svg";
import { ReactComponent as Dashboard } from "../../../../assets/dashboard.svg";
import { ReactComponent as Users } from "../../../../assets/users.svg";
import { ReactComponent as Guarantors } from "../../../../assets/guarantors.svg";
import { ReactComponent as Loans } from "../../../../assets/loans.svg";
import { ReactComponent as DecisionModels } from "../../../../assets/decision-models.svg";
import { ReactComponent as Savings } from "../../../../assets/savings.svg";
import { ReactComponent as LoanRequests } from "../../../../assets/loan-requests.svg";
import { ReactComponent as Whitelist } from "../../../../assets/whitelist.svg";
import { ReactComponent as Karma } from "../../../../assets/karma.svg";
import { ReactComponent as Organization } from "../../../../assets/Organisation.svg";
import { ReactComponent as LoanProducts } from "../../../../assets/loan-requests.svg";
import { ReactComponent as SavingsProducts } from "../../../../assets/savings-product.svg";
import { ReactComponent as FeesAndCharges } from "../../../../assets/fees-and-charges.svg";
import { ReactComponent as Transactions } from "../../../../assets/transactions.svg";
import { ReactComponent as ServiceAccount } from "../../../../assets/service-account.svg";
import { ReactComponent as Settlements } from "../../../../assets/settlement.svg";
import { ReactComponent as Reports } from "../../../../assets/reports.svg";
import { ReactComponent as Preferences } from "../../../../assets/preferences.svg";
import { ReactComponent as FeesAndPricing } from "../../../../assets/fees-and-pricing.svg";
import { ReactComponent as AuditLogs } from "../../../../assets/audit-logs.svg";



type NavigationDataType = {
  group: string;
  links: {
    text: string;
    url: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}[];

export const navigation: NavigationDataType = [
  {
    group: "",
    links: [{ text: "Dashboard", url: "/dashboard", icon: Dashboard }],
  },
  {
    group: "CUSTOMERS",
    links: [
      { text: "Users", url: "/users", icon: Users },
      { text: "Guarantors", url: "/guarantors", icon: Guarantors },
      { text: "Loans", url: "/loans", icon: Loans },
      {
        text: "Decision Models",
        url: "/decision-models",
        icon: DecisionModels,
      },
      { text: "Savings", url: "/savings", icon: Savings },
      { text: "Loan Requests", url: "/loan-requests", icon: LoanRequests },
      { text: "Whitelist", url: "/whitelist", icon: Whitelist },
      { text: "Karma", url: "/karma", icon: Karma },
    ],
  },
  {
    group: "BUSINESSES",
    links: [
      { text: "Organization", url: "/organization", icon: Organization },
      { text: "Loan Products", url: "/loan-products", icon: LoanProducts },
      { text: "Savings Products", url: "/savings-products", icon: SavingsProducts },
      { text: "Fees and Charges", url: "/fees-and-charges", icon: FeesAndCharges },
      { text: "Transactions", url: "/transactions", icon: Transactions },
      {
        text: "Services",
        url: "/services",
        icon: Services,
      },
      { text: "Service Account", url: "/service-sccount", icon: ServiceAccount },
      { text: "Settlements", url: "/settlements", icon: Settlements },
      { text: "Reports", url: "/reports", icon: Reports },

    ],
  },
  {
    group: "SETTINGS",
    links: [
      { text: "Preferences", url: "/preferences", icon: Preferences },
      { text: "Fees and Pricing", url: "/loan-products", icon: FeesAndPricing },
      { text: "Audit Logs", url: "/audit-logs", icon: AuditLogs },

    ],
  },
];
