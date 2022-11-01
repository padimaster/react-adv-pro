import { lazy, LazyExoticComponent } from "react";
import NoLazyPage from "../lazyload/pages/NoLazyPage";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

const LazyLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLayout"*/ "../lazyload/layout/LazyLayout"
        )
);


export const routes: Route[] = [
    {
        path: "/lazyload/*",
        to: "/lazyload/",
        component: LazyLayout,
        name: "Lazy Layout",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        component: NoLazyPage,
        name: "No Lazy",
    },
];
