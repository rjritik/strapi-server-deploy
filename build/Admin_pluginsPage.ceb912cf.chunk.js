"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[3677],{

/***/ 14928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_InstalledPluginsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/utils/api.js

const fetchEnabledPlugins = async () => {
  const { get } = (0,helper_plugin_esm.getFetchClient)();
  const { data } = await get("/admin/plugins");
  return data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/index.js



const useFetchEnabledPlugins = (notifyLoad) => {
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  return (0,es.useQuery)("list-enabled-plugins", () => fetchEnabledPlugins(), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchEnabledPlugins = (useFetchEnabledPlugins);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js





const Plugins = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  (0,helper_plugin_esm.useFocusWhenNavigate)();
  const title = formatMessage({
    id: "global.plugins",
    defaultMessage: "Plugins"
  });
  const notifyPluginPageLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: title }
      )
    );
  };
  const { status, data } = hooks_useFetchEnabledPlugins(notifyPluginPageLoad);
  const isLoading = status !== "success" && status !== "error";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": true }, /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title,
      subtitle: formatMessage({
        id: "app.components.ListPluginsPage.description",
        defaultMessage: "List of the installed plugins in the project."
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: data?.plugins?.length ?? 0 + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.name",
    defaultMessage: "Name"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "description"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, data.plugins.map(({ name, displayName, description }) => {
    return /* @__PURE__ */ react.createElement(Tr.Tr, { key: name }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800", variant: "omega", fontWeight: "bold" }, formatMessage({
      id: `global.plugins.${name}`,
      defaultMessage: displayName
    }))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, formatMessage({
      id: `global.plugins.${name}.description`,
      defaultMessage: description
    }))));
  }))))));
};
/* harmony default export */ const InstalledPluginsPage_Plugins = (Plugins);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/index.js






const InstalledPluginsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const title = formatMessage({
    id: "global.plugins",
    defaultMessage: "Plugins"
  });
  return /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.marketplace.main }, /* @__PURE__ */ react.createElement(Helmet/* Helmet */.q, { title }), /* @__PURE__ */ react.createElement(InstalledPluginsPage_Plugins, null));
};
/* harmony default export */ const pages_InstalledPluginsPage = (InstalledPluginsPage);


/***/ })

}]);