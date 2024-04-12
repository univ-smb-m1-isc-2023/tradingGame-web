import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "My Money",
    value: "185k€",
    footer: {
      color: "text-green-500",
      value: "+55€",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Mes achats",
    value: "2,300€",
    footer: {
      color: "text-green-500",
      value: "+3",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Mes ventes",
    value: "822€",
    footer: {
      color: "text-red-500",
      value: "-2€",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Mes actions",
    value: "47",
    footer: {
      color: "text-green-500",
      value: "+5",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
