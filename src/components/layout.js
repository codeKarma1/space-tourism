import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "./header";
const Layout = () => {
    return (_jsxs("div", { className: "relative", children: [_jsx(Header, {}), _jsx(Outlet, {})] }));
};
export default Layout;
