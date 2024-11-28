import { NavLink, useNavigate } from "react-router-dom";
import UseIconsPack from "@/utils/UseIconsPack";
import Btn from "../UiElements/Btn";

const LandingPage = () => {
  const { BarChart3 } = UseIconsPack();
  const navigate = useNavigate();
  return (
    <div className="h-dvh">
      <div className="flex flex-col h-full">
        <header className="flex items-center justify-between p-8">
          <NavLink className={"font-semibold text-xl flex"} to={"/"}>
            <BarChart3 />
            FinSight
          </NavLink>
        </header>
        <div className="px-4 pb-2 md:px-8 bg-white flex-1 grid">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center gap-4 sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold text-black sm:text-2xl md:text-3xl">
                Unlock Financial Clarity with Finsight
              </h1>
              <p className="leading-relaxed text-gray-500 xl:text-lg text-balance">
                Gain a comprehensive view of India’s leading industries and
                companies with Finsight, your personalized financial analysis
                platform. Dive into detailed profit and loss reports, track
                financial trends, and receive AI-driven investment
                recommendations tailored to your unique profile. With Finsight’s
                powerful data visualizations and predictive analytics, make
                informed decisions and seize opportunities in the ever-evolving
                financial landscape.
              </p>
              <p className=" font-semibold md:text-lg xl:text-xl">
                Explore. Analyze. Invest Wisely.
              </p>
              <div className="flex flex-col gap-2.5 lg:flex-row  sm:justify-center lg:justify-start">
                <Btn
                  label="Sign In"
                  onClick={() => navigate("/finsight/signin")}
                />
                <Btn
                  className="bg-gray-500 "
                  label="Sign Up"
                  onClick={() => navigate("/finsight/signup")}
                />
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-gray-100 bg-no-repeat bg-center bg-contain flex-1 bg-hero hidden lg:block"></div>
          </section>
        </div>
        <div className="bg-gray-900">
          <footer className="">
            <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
              © 2024 - FinSight. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
