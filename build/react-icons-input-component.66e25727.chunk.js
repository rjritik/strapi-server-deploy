"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[533],{

/***/ 41200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16364);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25752);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42866);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24969);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84170);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59946);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41580);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36856);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40619);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82562);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29728);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(871);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37106);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53915);
/* harmony import */ var react_icons_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44405);






const strapiTheme = window.localStorage.STRAPI_THEME;
const IconComponent = ({ icon, size }) => {
  const DynamicIconComponent = react_icons_all__WEBPACK_IMPORTED_MODULE_3__[icon];
  if (void 0 === DynamicIconComponent)
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    react_icons_lib__WEBPACK_IMPORTED_MODULE_2__/* .IconContext */ .Pd.Provider,
    {
      value: { color: strapiTheme === "light" ? "#212134" : "#a5a5ba" }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicIconComponent, { size })
  );
};
const ReactIconsSelector = ({
  description,
  error,
  intlLabel,
  placeholder,
  name,
  required,
  onChange,
  value
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const [iconLibraries, setIconLibraries] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedIconLibrary, setSelectedIconLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    null
  );
  const [selectableIcons, setSelectableIcons] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleModal = () => setIsModalVisible((prev) => !prev);
  const changeIcon = (newIcon) => onChange({
    target: {
      name,
      type: "string",
      value: newIcon
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getIconLibraries = async () => {
      setIconLibraries(
        (await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.request)("/react-icons/iconlibrary/find", {
          method: "GET"
        })).filter((iconLibrary) => iconLibrary.isEnabled)
      );
    };
    getIconLibraries();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    selectedIconLibrary && setSelectableIcons(
      Object.keys(react_icons_all__WEBPACK_IMPORTED_MODULE_3__).filter(
        (icon) => icon.toLowerCase().startsWith(selectedIconLibrary)
      )
    );
  }, [selectedIconLibrary, setSelectableIcons]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .TextInput */ .o,
    {
      type: "text",
      label: intlLabel && formatMessage(intlLabel),
      placeholder: placeholder && formatMessage(placeholder),
      hint: description && formatMessage(description),
      disabled: true,
      onChange,
      id: name,
      name,
      value: value || "",
      required,
      error,
      startAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .FieldAction */ .E, { onClick: toggleModal }, value ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent, { icon: value }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_7__/* .TbSearch */ .adB, null)),
      endAction: !!value && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .FieldAction */ .E, { onClick: () => changeIcon("") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_7__/* .TbX */ .lhV, null))
    }
  ), isModalVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .ModalLayout */ .P, { onClose: toggleModal, labelledBy: "title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .ModalHeader */ .x, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .Z, { fontWeight: "bold", id: "title" }, "Select icon")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ModalBody */ .f, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .k, { direction: "row", wrap: "wrap", gap: 2 }, selectedIconLibrary ? selectableIcons.length > 0 ? selectableIcons.map((icon) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .x,
    {
      key: icon,
      variant: "secondary",
      onClick: () => {
        toggleModal();
        changeIcon(icon);
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent, { size: 30, icon })
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .Z, { variant: "pi" }, "No icons available") : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .Z, { variant: "pi" }, "No icon library selected"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .ModalFooter */ .m,
    {
      startActions: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Select */ .P,
        {
          id: "iconLibrarySelect",
          minWidth: 500,
          selectButtonTitle: "Select icon library",
          placeholder: "Select icon library",
          required: 0,
          error,
          value: selectedIconLibrary,
          onChange: setSelectedIconLibrary
        },
        iconLibraries.map((iconLibrary) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Option */ .W, { key: iconLibrary.id, value: iconLibrary.abbreviation }, iconLibrary.name))
      ),
      endActions: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Button */ .z, { variant: "tertiary", onClick: toggleModal }, "Close")
    }
  )));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactIconsSelector);


/***/ })

}]);