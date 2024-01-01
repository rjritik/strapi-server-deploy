"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[6750],{

/***/ 72796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53915);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17034);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53979);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29728);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36989);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49066);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38939);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8060);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79031);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37909);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84170);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15234);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36213);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12028);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41580);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20022);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(871);





const HomePage = () => {
  const [iconLibraries, setIconLibraries] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const getIconLibraries = async () => {
    setIconLibraries([
      ...await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.request)("/react-icons/iconlibrary/find", {
        method: "GET"
      })
    ]);
  };
  const updateIconLibrary = async (id, isEnabled) => {
    await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.request)(`/react-icons/iconlibrary/update/${id}`, {
      method: "PUT",
      body: { data: { isEnabled } }
    });
    setIconLibraries((current) => {
      return current.map(
        (iconLibrary) => iconLibrary.id === id ? {
          ...iconLibrary,
          isEnabled
        } : iconLibrary
      );
    });
  };
  const deleteIconLibrary = async (id) => {
    await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.request)(`/react-icons/iconlibrary/delete/${id}`, {
      method: "DELETE"
    });
    setIconLibraries(
      (current) => current.filter((iconLibrary) => iconLibrary.id !== id)
    );
  };
  const importDefaultIconLibraries = async () => {
    (await __webpack_require__.e(/* import() */ 5155).then(__webpack_require__.t.bind(__webpack_require__, 5155, 19))).default.forEach(async (entry) => {
      await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.request)("/react-icons/iconlibrary/post", {
        method: "POST",
        body: { data: entry }
      });
    });
    getIconLibraries();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getIconLibraries();
  }, []);
  const getIconCount = (abbreviation) => {
    return Object.keys(react_icons_all__WEBPACK_IMPORTED_MODULE_2__).filter(
      (icon) => icon.toLowerCase().startsWith(abbreviation)
    ).length;
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .A,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      padding: 8,
      style: { marginTop: "10px" }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLayout */ .T,
      {
        title: "react-icons",
        subtitle: "Select the react-icon libraries you want to have enabled.",
        as: "h2",
        primaryAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, { onClick: importDefaultIconLibraries }, "Import default icon libraries")
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ActionLayout */ .Z,
      {
        startActions: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z,
          {
            onClick: () => iconLibraries.filter((iconLibrary) => iconLibrary.isEnabled).forEach(
              (iconLibrary) => updateIconLibrary(iconLibrary.id, false)
            ),
            variant: "secondary",
            label: "Disable all"
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { gap: 5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null), "Disable all")
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z,
          {
            onClick: () => iconLibraries.forEach(
              (iconLibrary) => deleteIconLibrary(iconLibrary.id)
            ),
            variant: "danger",
            label: "Delete all"
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { gap: 5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null), "Delete all")
        ))
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .ContentLayout */ .D, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Table */ .i, { colCount: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Thead */ .h, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__.Tr, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Th, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma" }, "is enabled")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Th, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma" }, "abbreviation")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Th, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma" }, "name")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Th, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma" }, "icon count")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Th, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .VisuallyHidden */ .T, null, "Actions")))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Tbody */ .p, null, iconLibraries.length > 0 ? iconLibraries.map((iconLibrary) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__.Tr, { key: iconLibrary.name }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Checkbox */ .X,
        {
          id: iconLibrary.id,
          value: iconLibrary.isEnabled,
          onClick: () => updateIconLibrary(
            iconLibrary.id,
            !iconLibrary.isEnabled
          )
        }
      )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { textColor: "neutral800" }, iconLibrary.abbreviation)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { textColor: "neutral800" }, iconLibrary.name)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { textColor: "neutral800" }, getIconCount(iconLibrary.abbreviation))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__.Td, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .IconButton */ .h,
        {
          onClick: () => deleteIconLibrary(iconLibrary.id),
          label: "Delete",
          icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null)
        }
      )));
    }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .x, { padding: 5 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "pi" }, "No icon libraries added yet")))))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

}]);