import EcoMain from "../components/courses/eco/EcoMain";
import EcoPreview from "../components/courses/eco/preview/EcoPreview";

export const ecoRoutes = [
    {path: '/eco/', component: EcoMain, exact: true},
    {path: '/eco/preview', component: EcoPreview, exact: true},
]