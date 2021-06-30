import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
// import Error from "@bit/centime.atm.templates.error";
// import OnBoardingRoutes from "./Modules/OnBoarding/Pages/OnBoardingRoutes";
// import CommonModuleRoutes, {
//   LogoutPage
// } from "./Modules/Common/Routes/CommonModuleRoutes";
import GateWay from "./Modules/Common/Pages/Routes/Gateway";

// const ConsignerPages = React.lazy(() =>
//   import("./Modules/Consigner/ConsignerPages")
// );
import ConsignerRoutes from "./Modules/Consigner/ConsignerRoutes";
import ConsignerPages from "./Modules/Consigner/ConsignerPages";
import CommonModuleRoutes from "./Modules/Common/Pages/Routes/CommonModuleRoutes";
import CommonModulePages from "./Modules/Common/Pages/CommonModulePages";
import CarrierPages from "./Modules/Carrier/CarrierPages";
import CarrierRoutes from "./Modules/Carrier/CarrierRoutes";

const Routes = () => {
  const allRoutes = [
    // {
    //   ModulePages: OnBoardingPages,
    //   ModuleRoutes: OnBoardingRoutes
    // },
    {
      ModulePages: CommonModulePages,
      ModuleRoutes: CommonModuleRoutes
    },
    {
      ModulePages: ConsignerPages,
      ModuleRoutes: ConsignerRoutes
    },
    {
      ModulePages: CarrierPages,
      ModuleRoutes: CarrierRoutes
    }
  ];
  // const history = useHistory();
  return (
    <>
      <Switch>
        {allRoutes.map(m => {
          const PagesComponent = m.ModulePages;
          return m.ModuleRoutes.map(v => (
            <GateWay
              key={v.path}
              exact={v.exact}
              title={v.title}
              pageType={v.type}
              path={"/" + v.path}
              tns={v.tns}
            >
              <PagesComponent page={v.path} />
            </GateWay>
          ));
        })}
        {/*<Route path={"/error"} title={"Error"}>*/}
        {/*  <Error />*/}
        {/*</Route>*/}
        {/*<Route title={"404"}>*/}
        {/*  <Error*/}
        {/*    type={"404"}*/}
        {/*    backToLinkLabel={":BackLogin"}*/}
        {/*    btnClickFunction={() => history.push("/" + LogoutPage)}*/}
        {/*  />*/}
        {/*</Route>*/}
      </Switch>
    </>
  );
};

export default Routes;
