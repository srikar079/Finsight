import LandingPage from "../../pages/LandingPage/LandingPage";
import AuthContainer from "@/pages/Authentication/AuthContainer";
import DashBoard from "../DashBoard/DashBoard";
import SignIn_SignUp_Wrapper from "@/pages/Authentication/SignIn_SignUp_Wrapper";
import SignInForm from "@/pages/Authentication/SignInForm";
import SignUpForm from "@/pages/Authentication/SignUpForm";
import Market_Overview from "@/pages/Market_Overview";
import Industry_Analysis from "@/pages/Analysis/Industry_Analysis";
import Company_Analysis from "@/pages/Analysis/Company_Analysis";
import DashBoardContent from "../DashBoard/DashBoardContent";
import Account from "@/pages/Account/Account";
import BuisnessProcessManagement from "@/pages/Company/Buisness-Process-Management/BuisnessProcessManagement";
import ITCompany from "@/pages/Company/IT/ITCompany";
import Cement from "@/pages/Company/Cement/Cement";
import OilAndGas from "@/pages/Company/Oil_and_Gas/OilAndGas";
import Chemical from "@/pages/Company/Chemical/Chemical";
import Pharmaceuticals from "@/pages/Company/Pharmaceuticals/Pharmaceuticals";
import AutoMobileIndustry from "@/pages/Company/Auto-mobile-industry/Auto-mobile-industry";
import Auto from "@/pages/Company/Auto/Auto";
import DashBoardPage from "@/pages/Dashboard/DashBoardPage";
import RenderCompanyDetails from "@/pages/Analysis/RenderCompanyDetails";

const UseRoutesContainer = () => {
  const publicRoutes = [
    {
      path: "/finsight/landging_page",
      PageTitle: "Finsight | Landing Page",
      element: <LandingPage />,
    },
    {
      path: "/finsight/signin",
      PageTitle: "Finsight | SignIn",
      element: (
        <AuthContainer
          img={"bg-signIn"}
          SignIn_SignUp_Wrapper={
            <SignIn_SignUp_Wrapper
              txt={"Don't have an account? SignUp"}
              goto={"/finsight/signup"}
            >
              <SignInForm />
            </SignIn_SignUp_Wrapper>
          }
        />
      ),
    },
    {
      path: "/finsight/signup",
      PageTitle: "Finsight | SignUp",
      element: (
        <AuthContainer
          img={"bg-signUp"}
          SignIn_SignUp_Wrapper={
            <SignIn_SignUp_Wrapper
              txt={"Have an account? SignIn"}
              goto={"/finsight/signin"}
            >
              <SignUpForm />
            </SignIn_SignUp_Wrapper>
          }
        />
      ),
    },
  ];
  const privateRoutes = [
    {
      path: "/finsight/dashboard",
      PageTitle: "Finsight | Dashboard",
      element: (
        <DashBoard>
          <DashBoardContent breadCrumbLink={"Dashboard"} breadCrumbPage={""}>
            <DashBoardPage />
          </DashBoardContent>
        </DashBoard>
      ),
    },
    {
      path: "/finsight/analysis/company",
      PageTitle: "Finsight | Dashboard",
      element: (
        <DashBoard>
          <DashBoardContent
            breadCrumbLink={"Company"}
            breadCrumbPage={"Analysis"}
          >
            <Company_Analysis />
          </DashBoardContent>
        </DashBoard>
      ),
    },
    {
      path: "/finsight/analysis/company/:key",
      PageTitle: "Finsight | Dashboard",
      element: (
        <DashBoard>
          <DashBoardContent
            breadCrumbLink={"Company"}
            breadCrumbPage={"Details"}
          >
            <RenderCompanyDetails />
          </DashBoardContent>
        </DashBoard>
      ),
    },
    {
      path: "/finsight/analysis/industry",
      PageTitle: "Finsight | Dashboard",
      element: (
        <DashBoard>
          <DashBoardContent
            breadCrumbLink={"Industry"}
            breadCrumbPage={"Analysis"}
          >
            <Industry_Analysis />
          </DashBoardContent>
        </DashBoard>
      ),
    },
    {
      path: "/finsight/account",
      PageTitle: "Finsight | Dashboard",
      element: (
        <DashBoard>
          <DashBoardContent
            breadCrumbLink={"Account"}
            breadCrumbPage={"Setting"}
          >
            <Account />
          </DashBoardContent>
        </DashBoard>
      ),
    },
  ];
  return { publicRoutes, privateRoutes };
};

export default UseRoutesContainer;
