import { JSX } from "react";
import { NonSemantic } from "../pages/1-semantic-html/NonSemantic";
import { Semantic } from "../pages/1-semantic-html/Semantic";
import { Units } from "../pages/2-units/Units";
import { Styles } from "../pages/3-styles/Styles";
import { CssInJs } from "../pages/4-css-in-js/CssInJs";

export enum ROUTES {
  NONSEMANTIC = "/non-semantic",
  SEMANTIC = "/semantic",
  UNITS = "/units",
  STYLES = "/styles",
  CSS_IN_JS = "/css-in-js",
}

interface Route {
  path: ROUTES;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: ROUTES.NONSEMANTIC,
    element: <NonSemantic />,
  },
  {
    path: ROUTES.SEMANTIC,
    element: <Semantic />,
  },
  {
    path: ROUTES.UNITS,
    element: <Units />,
  },
  {
    path: ROUTES.STYLES,
    element: <Styles />,
  },
  {
    path: ROUTES.CSS_IN_JS,
    element: <CssInJs />,
  },
];
