"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("./components/Button/button");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(button_1["default"], { disabled: true }, "disabled"),
            react_1["default"].createElement(button_1["default"], { onClick: function (e) {
                    e.preventDefault();
                    alert(111);
                } }, "Hello"),
            react_1["default"].createElement(button_1["default"], { btnType: button_1.ButtonType.Primary, size: button_1.ButtonSize.Large }, "Large Primary"),
            react_1["default"].createElement(button_1["default"], { btnType: button_1.ButtonType.Danger, size: button_1.ButtonSize.Small }, "Small Danger"),
            react_1["default"].createElement(button_1["default"], { btnType: button_1.ButtonType.Link, href: "https://www.baidu.com/", target: "_blank" }, "Baidu Link"),
            react_1["default"].createElement(button_1["default"], { disabled: true, btnType: button_1.ButtonType.Link, href: "https://www.baidu.com/" }, "Disabled Link"),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports["default"] = App;
