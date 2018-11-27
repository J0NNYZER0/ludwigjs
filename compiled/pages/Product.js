"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@ludwigjs/ui");

var _Preso = _interopRequireDefault(require("../components/presos/Preso-1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Plan =
/*#__PURE__*/
function (_Component) {
  _inherits(Plan, _Component);

  function Plan() {
    _classCallCheck(this, Plan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Plan).apply(this, arguments));
  }

  _createClass(Plan, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("section", {
        className: "t-mrg bolt-btm bolt-top"
      }, _react.default.createElement(_ui.Elements.PageTitle, {
        titleText: "Ludwig JS"
      })), _react.default.createElement("section", {
        className: "t-mrg bolt-btm"
      }, _react.default.createElement(_ui.Slideshow, null, _react.default.createElement(_ui.Hero, _extends({
        key: 1
      }, this.props, {
        classNames: "lt-bg-lnr",
        text: "I Wasn't Made by Tiny Elves"
      }), _react.default.createElement("div", {
        className: "banner wooden-ludwig"
      })), _react.default.createElement(_ui.Hero, _extends({
        key: 2
      }, this.props, {
        classNames: "lt-bg-lnr",
        text: "I'm Not a Magical Black Box"
      }), _react.default.createElement("div", {
        className: "banner magical-blk-box-ludwig"
      })))), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("p", null, _react.default.createElement("b", null, "I'm no elf, "), "I don't hail from Germany, I don't yodel or cobble shoes after midnight.\n            I'm your tiniest, most useful tool in your toolbelt, created by some geek\n            that worked at a super mega tech giant in Silicon Valley.")), _react.default.createElement("section", {
        className: "t-mrg bolt-btm"
      }, _react.default.createElement(_Preso.default, null)), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("h1", null, "Everything + the Kitchen Sink"), _react.default.createElement("p", null, "Ludwig offers you the next generation in full stack applications.\n              Finally, unchain yourself from systems like Django, Joomla and Wordpress.\n              Ludwig doesn't forcefeed you any sugarcoated syntax or annoying namespacing.\n              Kind of like a CMS but better.")), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("h2", null, "Here's What You Get:"), _react.default.createElement(_ui.Accordion, {
        title: "Reactjs Components"
      }, _react.default.createElement("p", {
        className: "b-m-25"
      }, "A library of reactjs pages, forms and components."), _react.default.createElement("h3", null, "8 Pages"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Global"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Header"), _react.default.createElement("li", null, "Footer"), _react.default.createElement("li", null, "Modal Popup"), _react.default.createElement("li", null, "Notifications"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Home"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Hero Banner"), _react.default.createElement("li", null, "Section Title x 6"), _react.default.createElement("li", null, "Section Content x 6"), _react.default.createElement("li", null, "Grid Layout"), _react.default.createElement("li", null, "Section Title"), _react.default.createElement("li", null, "Contact Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Product"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Hero Banner"), _react.default.createElement("li", null, "Section Content"), _react.default.createElement("li", null, "Grid Layout"), _react.default.createElement("li", null, "Contact Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Plans"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Slideshow containing Hero Banners"), _react.default.createElement("li", null, "Section Content"), _react.default.createElement("li", null, "Grid Layout"), _react.default.createElement("li", null, "Contact Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Contact"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Contact Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Account"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Account Info"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Register"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Register Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Login"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Login Form"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Not Found"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Status")))), _react.default.createElement("h3", null, "4 Forms"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Contact - "), "Accepts email and subject"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Login - "), "Accepts email"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Reconfirm - "), "Accept email"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Register - "), "Accepts email, username and first name")), _react.default.createElement("h3", null, "30+ Components"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Root - "), "This abstracts the App component to be used in Prod / Dev components"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Prod - "), "Use this when you compile for production"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Dev - "), "Supports Hot Module Reloading"), _react.default.createElement("li", null, _react.default.createElement("b", null, "App - "), "Contains Modal, Notifications, Header, Main and Footer", _react.default.createElement("ul", {
        className: "m-15"
      }, _react.default.createElement("li", null, _react.default.createElement("b", null, "Modal - "), "This takes any html or react components as\n                      children and renders with the help of the button component."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Notifications - "), "This is used to render notifications\n                      during any kind of http activity. You can wire this to\n                      support other uses within the base, but that is on you.\n                      Specifically when a user sends information through a form request."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Header - "), "A key layout component which contains the Logo,\n                      Nav Bar and DropDown components. This is built for repsonsive desktop\n                      with the help of sass."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Main - "), "The main react routes are defined within this,\n                      along with the pages which each respectively render."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Footer - "), "This contains a scaled down version of the Nav\n                      component, plus the Copyright, Company Name and Logo component"))), _react.default.createElement("li", null, _react.default.createElement("b", null, "Button - "), "This executes an action and display a title"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Company Name - "), "This displays your company name"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Message - "), "This renders alternative section content, use this to swap\n                  content based on a user event"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Copyright - "), "This displays the copyright symbol and the current year"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Drop Down Menu - "), "This contains a parent button which toggle a list of children, and a caret icon\n                  which toggles up or down"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Load More - "), "This contains a text button which accepts a minimum list of items and hides the rest.\n                  This is used to balance content within grids."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Logo - "), "This is the site logo"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Menu Icon - "), "An animation rendered with pure css, it transitions between a \"menu\" icon and an \"x\" icon."), _react.default.createElement("li", null, _react.default.createElement("b", null, "Nav Bar - "), "A horizontal list of menu items which collapse into a vertical hidden list of menu items.\n                  Some unique features include an animated menu icon. The expanded menu\n                  disappears on location change. Also contains the Dropdown component"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Slideshow - "), "Left and right arrow controls allow you to flip through an array of\n                  components or balanced html"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Status Message - "), "Renders when a status is received within the response of an HTTP request"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Hero Banner - "), "Contains a background image and gradient along with a main image, title, call to action and button"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Lists - "), "Lists can be fully loaded or partially loaded with a Load More component"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Grid - "), "Divided into 3 sections - Top, Body, Footer"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Grids - "), "A responsive list of 2 x 2 grid components"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Grid Layouts - "), "More tailored list containing 1 top grid above a list of 2 x 2 grids"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Groups - "), "These contain a blend of Grid with Modal and Hero with Modal"))), _react.default.createElement(_ui.Accordion, {
        title: "Responsive Design"
      }, _react.default.createElement("p", null, "9 Sass documents which generate and compile to readable css in all.css"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "_base.scss"), _react.default.createElement("li", null, "_components.scss"), _react.default.createElement("li", null, "_elements.scss"), _react.default.createElement("li", null, "_fonts.scss"), _react.default.createElement("li", null, "_grid.scss"), _react.default.createElement("li", null, "_icons.scss"), _react.default.createElement("li", null, "_reset.scss"), _react.default.createElement("li", null, "_variables.scss"), _react.default.createElement("li", null, "all.scss"))), _react.default.createElement(_ui.Accordion, {
        title: "Server Rendered Pages"
      }, _react.default.createElement("p", null, "Essential for SEO Compliance, and rendering pages which respond to server errors")), _react.default.createElement(_ui.Accordion, {
        title: "Account Management"
      }, _react.default.createElement("p", null, "This is a highly opinioned implementation known as passwordless login."), _react.default.createElement("h3", null, "Registration"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "User fills out register form and clicks submit"), _react.default.createElement("li", null, _react.default.createElement("b", null, "API - "), "Logging in service is executed"), _react.default.createElement("li", null, _react.default.createElement("b", null, "DB - "), "Register service stores account info"), _react.default.createElement("li", null, _react.default.createElement("b", null, "CACHE - "), "Time sensitive token is stored in state for subsequent retrieval\n                  from client"), _react.default.createElement("li", null, _react.default.createElement("b", null, "COOKIE - "), "A cookie is sent down to client in response and client attaches\n                  it to all subsequent http request"), _react.default.createElement("li", null, _react.default.createElement("b", null, "AWS - "), "Simple Email Service delivers user an email with a token to\n                  confirm and log user in for the first time"), _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "After clicking email, user is redirected back to login page"), _react.default.createElement("li", null, _react.default.createElement("b", null, "API - "), "Login service executes and response is sent"), _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "Client receives response and redirects to account page")), _react.default.createElement("ul", null, _react.default.createElement("h3", null, "Login"), _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "User enters email in login form and clicks submit"), _react.default.createElement("li", null, _react.default.createElement("b", null, "API - "), "Logging in service is executed"), _react.default.createElement("li", null, _react.default.createElement("b", null, "CACHE - "), "Time sensitive token is stored in state for subsequent retrieval from client"), _react.default.createElement("li", null, _react.default.createElement("b", null, "COOKIE - "), "A cookie is sent down to client in response and client attaches it\n                  to all subsequent http request"), _react.default.createElement("li", null, _react.default.createElement("b", null, "AWS - "), "Simple Email Service delivers user an email with a token to log user in"), _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "After clicking email, user is redirected back to login page"), _react.default.createElement("li", null, _react.default.createElement("b", null, "API - "), "Login service executes and response is sent"), _react.default.createElement("li", null, _react.default.createElement("b", null, "UI - "), "Client receives response and redirects to account page"))), _react.default.createElement(_ui.Accordion, {
        title: "Nodejs Backend"
      }, _react.default.createElement("p", null, "This is a robust API running on HapiJs. (Express and pure Nodejs implementations coming soon)"), _react.default.createElement("h3", null, "Static Content"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Page Content - "), "Serve home, account, contact, login, plan, product, register"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Static Assets - "), "Serve css, javascript and static json")), _react.default.createElement("h3", null, "API"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Contact - "), "Multiple contact form requests"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Account - "), "Register, login, loggin in and logout"))), _react.default.createElement(_ui.Accordion, {
        title: "Database Storage"
      }, _react.default.createElement("p", null, "Provide a database connection string and create your custom MYSQL queries"), _react.default.createElement("ul", null, _react.default.createElement("h3", null, "Handler"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Params and Payload - "), "Safely pass your values wrapped within an array at all times (even single values)")), _react.default.createElement("h3", null, "Queries"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Contact - "), "Create custom queries for node-mysql"))), _react.default.createElement(_ui.Accordion, {
        title: "Platform Security"
      }, _react.default.createElement("p", null, "Multiple Layers of Security keep your application and it's data safe and secure."), _react.default.createElement("h3", null, "Validation"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Client - "), "Forms prevent empty values from being sent in request"), _react.default.createElement("li", null, _react.default.createElement("b", null, "Server - "), "Route validation tests all payload and parameter values are checked on the server's request lifecycle"))), _react.default.createElement(_ui.Accordion, {
        title: "Multiple Levels of Monitoring"
      }, _react.default.createElement("p", null, "Coming Soon...")), _react.default.createElement(_ui.Accordion, {
        title: "Multiple Levels of Monitoring"
      }, _react.default.createElement("p", null, "Coming Soon...")), _react.default.createElement(_ui.Accordion, {
        title: "Configured for Webpack, Babel and Hot Reloading"
      }, _react.default.createElement("p", null, "Coming Soon...")), _react.default.createElement(_ui.Accordion, {
        title: "Easily Deployable to Heroku and AWS"
      }, _react.default.createElement("p", null, "Already configured and tested to guarantee simple deployment")), _react.default.createElement(_ui.Accordion, {
        title: "Send Email Via AWS"
      }, _react.default.createElement("p", null, "The internal account flow is dependent upon AWS"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Login to Heroku - "), "Add a domain in your project settings")), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Login to SES Console - "), "Add a new domain for each region")), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("b", null, "Login to Host Provider - "), "Add TXT, MX records as per AWS and CNAME record as per Heroku")))), _react.default.createElement("section", {
        className: "gry-brdr b-rad-6 rad-grad3"
      }, _react.default.createElement("h2", null, "Out of the Box"), _react.default.createElement("p", null, "No muss or fuss, Ludwig gives developers a rockin' end to end\n            boilerplate. If your app needs more fuel check out our packages."), _react.default.createElement(_ui.GridLayouts.GridLayoutA, this.props)), _react.default.createElement("section", {
        className: "gry-brdr bolt-top"
      }, _react.default.createElement("h3", null, "WYSIWYG"), _react.default.createElement("p", null, "This site and everything you see herein is built using Ludwig!\n              That means all the pages, components, API's and configurations\n              necessary to run this site are available for you instantly out\n              of the box.")), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("h3", null, "Request A Demo"), _react.default.createElement(_ui.Forms.Contact, _extends({}, this.props, {
        formTitle: "Request a Demo",
        subject: "Demo Request",
        contactType: 1
      }))));
    }
  }]);

  return Plan;
}(_react.Component);

var _default = Plan;
/*My bones are made of reactjs
and nodejs and my brains squish with redis and mysql. My heart pumps javascript and my
soul is open source.
*/

exports.default = _default;