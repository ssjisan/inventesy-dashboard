import Items from "../../Assets/Icons/Items";
import Zone from "../../Assets/Icons/Zone";
import Salesman from "../../Assets/Icons/Salesman";
import DailySales from "../../Assets/Icons/DailySales";
import Reports from "../../Assets/Icons/Reports";
import Dashboard from "../../Assets/Icons/Dashboard";

const navConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: "Product",
    link: "/product",
    icon: <Items />,
  },
  {
    id: 3,
    title: "Zone",
    link: "/zone",
    icon: <Zone />,
  },
  {
    id: 4,
    title: "Salesman",
    link: "/salesman",
    icon: <Salesman />,
  },
  {
    id: 5,
    title: "Daily Sales",
    link: "/daily-sales",
    icon: <DailySales />,
  },
  {
    id: 6,
    title: "Report",
    link: "/report",
    icon: <Reports />,
  },
];
const settings = [{ id: 1, title: "Name" }];

export { navConfig, settings };
