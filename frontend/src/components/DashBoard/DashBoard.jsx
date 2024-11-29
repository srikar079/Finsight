import { BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SidebarNavigation from "./SidebarNavigation";
import SideBarFooter from "./SideBarFooter";
import UsePreventBack from "@/hooks/UsePreventBack";

const DashBoard = ({ children }) => {
  UsePreventBack();
  return (
    <SidebarProvider className="!overflow-x-hidden">
      <Sidebar variant="inset">
        {/* SidebarHeader */}
        <SidebarHeader className="border-b px-6 py-4">
          <Link
            to="/finsight/dashboard"
            className="flex items-center gap-2 font-bold text-xl"
          >
            <BarChart3 className="h-6 w-6" />
            <span>Finsight</span>
          </Link>
        </SidebarHeader>
        {/* Sidebar Navigation */}
        <SidebarNavigation />
        {/* SidebarFooter */}
        <SideBarFooter />
      </Sidebar>
      {/* MAIN CONTENT */}
      <div className="border-2 w-full overflow-x-auto">{children}</div>
    </SidebarProvider>
  );
};
DashBoard.propTypes = {
  children: PropTypes.node,
};

export default DashBoard;
