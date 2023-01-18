import Items from "../../Assets/Icons/Items";
import Zone from "../../Assets/Icons/Zone";
import Salesman from "../../Assets/Icons/Salesman";
import DailySales from "../../Assets/Icons/DailySales";
import Reports from "../../Assets/Icons/Reports";
import Dashboard from "../../Assets/Icons/Dashboard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
    link: "",
    icon: <Items />,
    subNav: [
      {
        id: 1,
        title: "Add Product",
        link: "/product/add_product",
        icon: <FiberManualRecordIcon sx={{ fontSize: "small" }} />,
      },
      {
        id: 1,
        title: "All Product",
        link: "/product/all_product",
        icon: <FiberManualRecordIcon sx={{ fontSize: "small" }} />,
      },
    ],
  },
  {
    id: 3,
    title: "Salesman",
    link: "/salesman",
    icon: <Salesman />,
  },
  {
    id: 4,
    title: "Zone",
    link: "/zone",
    icon: <Zone />,
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
