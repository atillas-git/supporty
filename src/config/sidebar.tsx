import { IoTicket } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import {
  MdOutlineAdd,
  MdOutlineViewInAr,
  MdList,
  MdDashboard,
  MdEdit,
} from "react-icons/md";
interface SidebarItem {
  key: string;
  label: string;
  type?: string;
  icon: React.ReactNode;
  to?: string;
  children?: SidebarItem[];
}

const sidebar: SidebarItem[] = [
  {
    key: "sidebar_dashboard",
    label: "Dashboard",
    icon: <MdDashboard />,
    to: "/dashboard",
  },
  {
    key: "sidebar_tickets",
    label: "Tickets",
    icon: <IoTicket />,
    type: "accordion",
    children: [
      {
        key: "sidebar_tickets_add",
        label: "Add",
        icon: <MdOutlineAdd />,
        to: "/dashboard/tickets/add",
      },
      {
        key: "sidebar_tickets_view",
        label: "View",
        icon: <MdOutlineViewInAr />,
        to: "/dashboard/tickets/view",
      },
      {
        key: "sidebar_tickets_list",
        label: "List",
        icon: <MdList />,
        to: "/dashboard/tickets/list",
      },
    ],
  },
  {
    key: "sidebar_users",
    label: "Users",
    icon: <FiUsers />,
    type: "accordion",
    children: [
      {
        key: "sidebar_users_add",
        label: "Add",
        icon: <MdOutlineAdd />,
        to: "/dashboard/users/add",
      },
      {
        key: "sidebar_users_edit",
        label: "Edit",
        icon: <MdEdit />,
      },
      {
        key: "sidebar_users_list",
        label: "List",
        icon: <MdList />,
        to: "/dashboard/users/list",
      },
    ],
  },
];
export default sidebar;
