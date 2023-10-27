"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var link_1 = require("next/link");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/about" }, "About Us")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/fansupport" }, "Fan Support")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/blog" }, "Blog Index")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/showcase" }, "Showcase")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/abouthajduk" }, "About Hajduk")))),
            children)));
}
exports["default"] = RootLayout;