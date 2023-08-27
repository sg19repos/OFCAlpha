import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { SelectDataObjInResponse } from "../../../Store/callAPI/selectors";
// import { LoginAPI } from "../../OnBoarding/APIs";
// import { LogoutPage, RouteTypes } from "./CommonModuleRoutes";
import ModeSelection from "../ModeSelection";
import { RouteTypes } from "./CommonModuleRoutes";

export const Page = props => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return props.children;
};

export const ReturnRoute = (exact, path, title, children, tns) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <Page {...props} children={children} title={title} tns={tns} />
    )}
  />
);

/**
 * The Routes that checks for whether User is authenticated or not
 * and also his entitlements to the path given
 */
const GateWay = ({ children, exact, path, pageType, title, tns }) => {
  // const userObj = useSelector(state =>
  //   SelectDataObjInResponse(state, LoginAPI)
  // );
  // if (!userObj && pageType === RouteTypes.Login) {
  //   return (
  //     <Redirect
  //       from={"/" + path}
  //       to={{
  //         pathname: "/login",
  //         state:
  //           path === "/" + LogoutPage
  //             ? {
  //                 logout: true
  //               }
  //             : undefined
  //       }}
  //     />
  //   );
  // }
  /* else if(path !=='login' && pageType === RouteTypes.Logout && userObj){
        //TODO Decide what to show, when will this occur and what to do for redirection ??
        return <Redirect from={'/'+path} to={'/error?redirect='+path.replace('/','')} />
    } */
  //TODO-OFC-Change this after implementing login

  if (pageType === RouteTypes.Logout) {
    return ReturnRoute(exact, path, title, children, tns);
  }

  // return ReturnRoute(exact, "/", "DefaultWIP", <ModeSelection />, tns);
  return ReturnRoute(exact, path, title, children, tns);
};

export default GateWay;
