import { ROUTES } from "../../../routes/routes";

export interface ManuItem {
  name: string;
  to: string;
}

export const menuItems: ManuItem[] = [
  { name: "NonSemantic", to: ROUTES.NONSEMANTIC },
  { name: "Semantic", to: ROUTES.SEMANTIC },
  { name: "Units", to: ROUTES.UNITS },
  { name: "Styles", to: ROUTES.STYLES },
  { name: "CSS-in-JS", to: ROUTES.CSS_IN_JS },
  { name: "Bonus", to: ROUTES.BONUS },
];
