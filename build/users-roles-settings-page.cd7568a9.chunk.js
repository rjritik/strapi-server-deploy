(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[8853],{

/***/ 20400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Roles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var src_pluginId = __webpack_require__(31498);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/utils/api.js


const fetchData = async (toggleNotification, notifyStatus) => {
  try {
    const { get } = (0,helper_plugin_esm.getFetchClient)();
    const { data } = await get((0,utils/* getRequestURL */.Gc)("roles"));
    notifyStatus("The roles have loaded successfully");
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error("error");
  }
};
const deleteData = async (id, toggleNotification) => {
  try {
    const { del } = (0,helper_plugin_esm.getFetchClient)();
    await del(`${(0,utils/* getRequestURL */.Gc)("roles")}/${id}`);
  } catch (error) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error", defaultMessage: "An error occured" }
    });
  }
};

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/components/TableBody.js








const TableBody = ({ sortedRoles, canDelete, permissions, setRoleToDelete, onDelete }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const [showConfirmDelete, setShowConfirmDelete] = onDelete;
  const checkCanDeleteRole = (role) => canDelete && !["public", "authenticated"].includes(role.type);
  const handleClickDelete = (id) => {
    setRoleToDelete(id);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleClickEdit = (id) => {
    push(`/settings/${src_pluginId/* default */.Z}/roles/${id}`);
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, sortedRoles?.map((role) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: role.name, ...(0,helper_plugin_esm.onRowClick)({ fn: () => handleClickEdit(role.id) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.name)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.description)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "30%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `${role.nb_users} ${formatMessage({
    id: "global.users",
    defaultMessage: "users"
  }).toLowerCase()}`)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", ...helper_plugin_esm.stopPropagation }, /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPermissions, { permissions: permissions.updateRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickEdit(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
      label: formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: `${role.name}` }
      )
    }
  )), checkCanDeleteRole(role) && /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPermissions, { permissions: permissions.deleteRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickDelete(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: `${role.name}` }
      )
    }
  )))))));
};
/* harmony default export */ const components_TableBody = (TableBody);
TableBody.defaultProps = {
  canDelete: false
};
TableBody.propTypes = {
  onDelete: (prop_types_default()).array.isRequired,
  permissions: (prop_types_default()).object.isRequired,
  setRoleToDelete: (prop_types_default()).func.isRequired,
  sortedRoles: (prop_types_default()).array.isRequired,
  canDelete: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/index.js












const RoleListPage = () => {
  const { trackUsage } = (0,helper_plugin_esm.useTracking)();
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const [{ query }] = (0,helper_plugin_esm.useQueryParams)();
  const _q = query?._q || "";
  const [showConfirmDelete, setShowConfirmDelete] = (0,react.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react.useState)(false);
  const [roleToDelete, setRoleToDelete] = (0,react.useState)();
  (0,helper_plugin_esm.useFocusWhenNavigate)();
  const queryClient = (0,es.useQueryClient)();
  const updatePermissions = (0,react.useMemo)(() => {
    return {
      create: permissions/* default */.Z.createRole,
      read: permissions/* default */.Z.readRoles,
      update: permissions/* default */.Z.updateRole,
      delete: permissions/* default */.Z.deleteRole
    };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canRead, canDelete }
  } = (0,helper_plugin_esm.useRBAC)(updatePermissions);
  const {
    isLoading: isLoadingForData,
    data: { roles },
    isFetching
  } = (0,es.useQuery)("get-roles", () => fetchData(toggleNotification, notifyStatus), {
    initialData: {},
    enabled: canRead
  });
  const { includes } = (0,helper_plugin_esm.useFilter)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,helper_plugin_esm.useCollator)(locale, {
    sensitivity: "base"
  });
  const isLoading = isLoadingForData || isFetching;
  const handleNewRoleClick = () => {
    trackUsage("willCreateRole");
    push(`/settings/${src_pluginId/* default */.Z}/roles/new`);
  };
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const emptyLayout = {
    roles: {
      id: (0,utils/* getTrad */.OB)("Roles.empty"),
      defaultMessage: "You don't have any roles yet."
    },
    search: {
      id: (0,utils/* getTrad */.OB)("Roles.empty.search"),
      defaultMessage: "No roles match the search."
    }
  };
  const pageTitle = formatMessage({
    id: "global.roles",
    defaultMessage: "Roles"
  });
  const deleteMutation = (0,es.useMutation)((id) => deleteData(id, toggleNotification), {
    async onSuccess() {
      await queryClient.invalidateQueries("get-roles");
    }
  });
  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync(roleToDelete);
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };
  const sortedRoles = (roles || []).filter((role) => includes(role.name, _q) || includes(role.description, _q)).sort(
    (a, b) => formatter.compare(a.name, b.name) || formatter.compare(a.description, b.description)
  );
  const emptyContent = _q && !sortedRoles.length ? "search" : "roles";
  const colCount = 4;
  const rowCount = (roles?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(helper_plugin_esm.SettingsPageTitle, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: "global.roles",
        defaultMessage: "Roles"
      }),
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPermissions, { permissions: permissions/* default */.Z.createRole }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleNewRoleClick, startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), size: "S" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("List.button.roles"),
        defaultMessage: "Add new role"
      })))
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(
        helper_plugin_esm.SearchURLQuery,
        {
          label: formatMessage({
            id: "app.component.search.label",
            defaultMessage: "Search"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, !canRead && /* @__PURE__ */ react.createElement(helper_plugin_esm.NoPermissions, null), (isLoading || isLoadingForPermissions) && /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null), canRead && sortedRoles && sortedRoles?.length ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "Description"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "global.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      sortedRoles,
      canDelete,
      permissions: permissions/* default */.Z,
      setRoleToDelete,
      onDelete: [showConfirmDelete, setShowConfirmDelete]
    }
  )) : /* @__PURE__ */ react.createElement(helper_plugin_esm.EmptyStateLayout, { content: emptyLayout[emptyContent] })), /* @__PURE__ */ react.createElement(
    helper_plugin_esm.ConfirmDialog,
    {
      isConfirmButtonLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: handleShowConfirmDelete,
      isOpen: showConfirmDelete
    }
  )));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedListPage/index.js




const ProtectedRolesListPage = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.accessRoles }, /* @__PURE__ */ react.createElement(ListPage, null));
};
/* harmony default export */ const ProtectedListPage = (ProtectedRolesListPage);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js
var Textarea = __webpack_require__(61467);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(84757);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/without.js
var without = __webpack_require__(82569);
var without_default = /*#__PURE__*/__webpack_require__.n(without);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/contexts/UsersPermissionsContext/index.js


const UsersPermissions = (0,react.createContext)({});
const UsersPermissionsProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(UsersPermissions.Provider, { value }, children);
};
const useUsersPermissions = () => (0,react.useContext)(UsersPermissions);
UsersPermissionsProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: (prop_types_default()).object.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(13217);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/index.js








const MethodBox = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
    id: "users-permissions.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { hasRadius: true, background: "neutral0", borderColor: "neutral200", gap: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Policies/index.js








const Policies = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { selectedAction, routes } = useUsersPermissions();
  const path = without_default()(selectedAction.split("."), "controllers");
  const controllerRoutes = get_default()(routes, path[0]);
  const pathResolved = path.slice(1).join(".");
  const displayedRoutes = isEmpty_default()(controllerRoutes) ? [] : controllerRoutes.filter((o) => o.handler.endsWith(pathResolved));
  return /* @__PURE__ */ react.createElement(
    GridItem/* GridItem */.P,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, displayedRoutes.map((route, key) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ react.createElement(components_BoundRoute, { key, route })
    ))) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "users-permissions.Policies.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "users-permissions.Policies.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_Policies = (Policies);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPluginName.js

function formatPluginName(pluginSlug) {
  switch (pluginSlug) {
    case "application":
      return "Application";
    case "plugin::content-manager":
      return "Content manager";
    case "plugin::content-type-builder":
      return "Content types builder";
    case "plugin::documentation":
      return "Documentation";
    case "plugin::email":
      return "Email";
    case "plugin::i18n":
      return "i18n";
    case "plugin::upload":
      return "Upload";
    case "plugin::users-permissions":
      return "Users-permissions";
    default:
      return upperFirst_default()(pluginSlug.replace("api::", "").replace("plugin::", ""));
  }
}
/* harmony default export */ const utils_formatPluginName = (formatPluginName);

// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/CheckboxWrapper.js


const activeCheckboxWrapperStyles = styled_components_browser_esm/* css */.iv`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const PermissionRow_CheckboxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/SubCategory.js









const Border = styled_components_browser_esm/* default */.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const SubCategory = ({ subCategory }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { onChange, onChangeSelectAll, onSelectedAction, selectedAction, modifiedData } = useUsersPermissions();
  const currentScopedModifiedData = (0,react.useMemo)(() => {
    return get_default()(modifiedData, subCategory.name, {});
  }, [modifiedData, subCategory]);
  const hasAllActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).every((action) => action.enabled === true);
  }, [currentScopedModifiedData]);
  const hasSomeActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).some((action) => action.enabled === true) && !hasAllActionsSelected;
  }, [currentScopedModifiedData, hasAllActionsSelected]);
  const handleChangeSelectAll = (0,react.useCallback)(
    ({ target: { name } }) => {
      onChangeSelectAll({ target: { name, value: !hasAllActionsSelected } });
    },
    [hasAllActionsSelected, onChangeSelectAll]
  );
  const isActionSelected = (0,react.useCallback)(
    (actionName) => {
      return selectedAction === actionName;
    },
    [selectedAction]
  );
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, subCategory.label)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: subCategory.name,
      value: hasAllActionsSelected,
      onValueChange: (value) => handleChangeSelectAll({ target: { name: subCategory.name, value } }),
      indeterminate: hasSomeActionsSelected
    },
    formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 2, style: { flex: 1 } }, subCategory.actions.map((action) => {
    const name = `${action.name}.enabled`;
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: action.name }, /* @__PURE__ */ react.createElement(PermissionRow_CheckboxWrapper, { isActive: isActionSelected(action.name), padding: 2, hasRadius: true }, /* @__PURE__ */ react.createElement(
      Checkbox/* Checkbox */.X,
      {
        value: get_default()(modifiedData, name, false),
        name,
        onValueChange: (value) => onChange({ target: { name, value } })
      },
      action.label
    ), /* @__PURE__ */ react.createElement(
      "button",
      {
        type: "button",
        "data-testid": "action-cog",
        onClick: () => onSelectedAction(action.name),
        style: { display: "inline-flex", alignItems: "center" }
      },
      /* @__PURE__ */ react.createElement(Cog/* default */.Z, null)
    )));
  }))));
};
SubCategory.propTypes = {
  subCategory: (prop_types_default()).object.isRequired
};
/* harmony default export */ const PermissionRow_SubCategory = (SubCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/index.js





const PermissionRow = ({ name, permissions }) => {
  const subCategories = (0,react.useMemo)(() => {
    return sortBy_default()(
      Object.values(permissions.controllers).reduce((acc, curr, index) => {
        const currentName = `${name}.controllers.${Object.keys(permissions.controllers)[index]}`;
        const actions = sortBy_default()(
          Object.keys(curr).reduce((acc2, current) => {
            return [
              ...acc2,
              {
                ...curr[current],
                label: current,
                name: `${currentName}.${current}`
              }
            ];
          }, []),
          "label"
        );
        return [
          ...acc,
          {
            actions,
            label: Object.keys(permissions.controllers)[index],
            name: currentName
          }
        ];
      }, []),
      "label"
    );
  }, [name, permissions]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6 }, subCategories.map((subCategory) => /* @__PURE__ */ react.createElement(PermissionRow_SubCategory, { key: subCategory.name, subCategory })));
};
PermissionRow.propTypes = {
  name: (prop_types_default()).string.isRequired,
  permissions: (prop_types_default()).object.isRequired
};
/* harmony default export */ const Permissions_PermissionRow = (PermissionRow);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/init.js
const init_init = (initialState, permissions) => {
  const collapses = Object.keys(permissions).sort().map((name) => ({ name, isOpen: false }));
  return { ...initialState, collapses };
};
/* harmony default export */ const Permissions_init = (init_init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/reducer.js

const reducer_initialState = {
  collapses: []
};
const reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    switch (action.type) {
      case "TOGGLE_COLLAPSE": {
        draftState.collapses = state.collapses.map((collapse, index) => {
          if (index === action.index) {
            return { ...collapse, isOpen: !collapse.isOpen };
          }
          return { ...collapse, isOpen: false };
        });
        break;
      }
      default:
        return draftState;
    }
  })
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/index.js








const Permissions = () => {
  const { modifiedData } = useUsersPermissions();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [{ collapses }, dispatch] = (0,react.useReducer)(
    reducer_reducer,
    reducer_initialState,
    (state) => Permissions_init(state, modifiedData)
  );
  const handleToggle = (index) => dispatch({
    type: "TOGGLE_COLLAPSE",
    index
  });
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, collapses.map((collapse, index) => /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: collapse.isOpen,
      onToggle: () => handleToggle(index),
      key: collapse.name,
      variant: index % 2 === 0 ? "secondary" : void 0
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: utils_formatPluginName(collapse.name),
        description: formatMessage(
          {
            id: "users-permissions.Plugin.permissions.plugins.description",
            defaultMessage: "Define all allowed actions for the {name} plugin."
          },
          { name: collapse.name }
        ),
        variant: index % 2 ? "primary" : "secondary"
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Permissions_PermissionRow, { permissions: modifiedData[collapse.name], name: collapse.name })))
  )));
};
/* harmony default export */ const components_Permissions = (Permissions);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(69572);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/reducer.js




const UsersPermissions_reducer_initialState = {
  initialData: {},
  modifiedData: {},
  routes: {},
  selectedAction: "",
  policies: []
};
const UsersPermissions_reducer_reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const keysLength = action.keys.length;
      const isChangingCheckbox = action.keys[keysLength - 1] === "enabled";
      if (action.value && isChangingCheckbox) {
        const selectedAction = take_default()(action.keys, keysLength - 1).join(".");
        draftState.selectedAction = selectedAction;
      }
      set_default()(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SELECT_ALL": {
      const pathToValue = ["modifiedData", ...action.keys];
      const oldValues = get_default()(state, pathToValue, {});
      const updatedValues = Object.keys(oldValues).reduce((acc, current) => {
        acc[current] = { ...oldValues[current], enabled: action.value };
        return acc;
      }, {});
      set_default()(draftState, pathToValue, updatedValues);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "SELECT_ACTION": {
      const { actionToSelect } = action;
      draftState.selectedAction = actionToSelect === state.selectedAction ? "" : actionToSelect;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const UsersPermissions_reducer = (UsersPermissions_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/init.js
const UsersPermissions_init_init = (state, permissions, routes) => {
  return {
    ...state,
    initialData: permissions,
    modifiedData: permissions,
    routes
  };
};
/* harmony default export */ const UsersPermissions_init = (UsersPermissions_init_init);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/index.js










const UsersPermissions_UsersPermissions = (0,react.forwardRef)(({ permissions, routes }, ref) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [state, dispatch] = (0,react.useReducer)(
    UsersPermissions_reducer,
    UsersPermissions_reducer_initialState,
    (state2) => UsersPermissions_init(state2, permissions, routes)
  );
  (0,react.useImperativeHandle)(ref, () => ({
    getPermissions() {
      return {
        permissions: state.modifiedData
      };
    },
    resetForm() {
      dispatch({ type: "ON_RESET" });
    },
    setFormAfterSubmit() {
      dispatch({ type: "ON_SUBMIT_SUCCEEDED" });
    }
  }));
  const handleChange = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE",
    keys: name.split("."),
    value: value === "empty__string_value" ? "" : value
  });
  const handleChangeSelectAll = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE_SELECT_ALL",
    keys: name.split("."),
    value
  });
  const handleSelectedAction = (actionToSelect) => dispatch({
    type: "SELECT_ACTION",
    actionToSelect
  });
  const providerValue = {
    ...state,
    onChange: handleChange,
    onChangeSelectAll: handleChangeSelectAll,
    onSelectedAction: handleSelectedAction
  };
  return /* @__PURE__ */ react.createElement(UsersPermissionsProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.title"),
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.description"),
    defaultMessage: "Only actions bound by a route are listed below."
  }))), /* @__PURE__ */ react.createElement(components_Permissions, null))), /* @__PURE__ */ react.createElement(components_Policies, null)));
});
UsersPermissions_UsersPermissions.propTypes = {
  permissions: (prop_types_default()).object.isRequired,
  routes: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_UsersPermissions = ((0,react.memo)(UsersPermissions_UsersPermissions));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useForm/reducer.js

const useForm_reducer_initialState = {
  isLoading: true,
  modifiedData: {}
};
const useForm_reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  produce(state, (draftState) => {
    switch (action.type) {
      case "GET_DATA": {
        draftState.isLoading = true;
        draftState.modifiedData = {};
        break;
      }
      case "GET_DATA_SUCCEEDED": {
        draftState.isLoading = false;
        draftState.modifiedData = action.data;
        break;
      }
      case "GET_DATA_ERROR": {
        draftState.isLoading = true;
        break;
      }
      case "ON_SUBMIT_SUCCEEDED": {
        draftState.modifiedData = action.data;
        break;
      }
      default: {
        return draftState;
      }
    }
  })
);
/* harmony default export */ const useForm_reducer = ((/* unused pure expression or super */ null && (useForm_reducer_reducer)));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useForm/index.js




const useUserForm = (endPoint, permissions) => {
  const { isLoading: isLoadingForPermissions, allowedActions } = useRBAC(permissions);
  const [{ isLoading, modifiedData }, dispatch] = useReducer(reducer, initialState);
  const toggleNotification = useNotification();
  const isMounted = useRef(true);
  const { get } = useFetchClient();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: "GET_DATA"
        });
        const { data } = await get(getRequestURL(endPoint));
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        if (isMounted.current) {
          dispatch({
            type: "GET_DATA_ERROR"
          });
          console.error(err);
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    };
    if (!isLoadingForPermissions) {
      getData();
    }
    return () => {
      isMounted.current = false;
    };
  }, [isLoadingForPermissions, endPoint, get, toggleNotification]);
  const dispatchSubmitSucceeded = useCallback((data) => {
    dispatch({
      type: "ON_SUBMIT_SUCCEEDED",
      data
    });
  }, []);
  return {
    allowedActions,
    dispatchSubmitSucceeded,
    isLoading,
    isLoadingForPermissions,
    modifiedData
  };
};
/* harmony default export */ const useForm = ((/* unused pure expression or super */ null && (useUserForm)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useRolesList/reducer.js

const useRolesList_reducer_initialState = {
  roles: [],
  isLoading: true
};
const useRolesList_reducer_reducer = (state, action) => produce(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.roles = [];
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.roles = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useRolesList_reducer = ((/* unused pure expression or super */ null && (useRolesList_reducer_reducer)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useRolesList/index.js






const useRolesList = (shouldFetchData = true) => {
  const [{ roles, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
    () => init(initialState, shouldFetchData)
  );
  const toggleNotification = useNotification();
  const isMounted = useRef(true);
  const fetchClient = useFetchClient();
  const fetchRolesList = useCallback(async () => {
    try {
      dispatch({
        type: "GET_DATA"
      });
      const {
        data: { roles: roles2 }
      } = await fetchClient.get(`/${pluginId}/roles`);
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data: roles2
      });
    } catch (err) {
      const message = get(err, ["response", "payload", "message"], "An error occured");
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_ERROR"
        });
        if (message !== "Forbidden") {
          toggleNotification({
            type: "warning",
            message
          });
        }
      }
    }
  }, [fetchClient, toggleNotification]);
  useEffect(() => {
    if (shouldFetchData) {
      fetchRolesList();
    }
    return () => {
      isMounted.current = false;
    };
  }, [shouldFetchData, fetchRolesList]);
  return { roles, isLoading, getData: fetchRolesList };
};
/* harmony default export */ const hooks_useRolesList = ((/* unused pure expression or super */ null && (useRolesList)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/init.js
const usePlugins_init_init = (initialState, shouldFetchData) => {
  return { ...initialState, isLoading: shouldFetchData };
};
/* harmony default export */ const usePlugins_init = (usePlugins_init_init);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/reducer.js

const usePlugins_reducer_initialState = {
  permissions: {},
  routes: {},
  isLoading: true
};
const usePlugins_reducer_reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.permissions = {};
      draftState.routes = {};
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.permissions = action.permissions;
      draftState.routes = action.routes;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const usePlugins_reducer = (usePlugins_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/index.js







const usePlugins = (shouldFetchData = true) => {
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const [{ permissions, routes, isLoading }, dispatch] = (0,react.useReducer)(
    usePlugins_reducer,
    usePlugins_reducer_initialState,
    () => usePlugins_init(usePlugins_reducer_initialState, shouldFetchData)
  );
  const fetchClient = (0,helper_plugin_esm.useFetchClient)();
  const fetchPlugins = (0,react.useCallback)(async () => {
    try {
      dispatch({
        type: "GET_DATA"
      });
      const [{ permissions: permissions2 }, { routes: routes2 }] = await Promise.all(
        [`/${src_pluginId/* default */.Z}/permissions`, `/${src_pluginId/* default */.Z}/routes`].map(async (endpoint) => {
          const res = await fetchClient.get(endpoint);
          return res.data;
        })
      );
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        permissions: (0,utils/* cleanPermissions */.YX)(permissions2),
        routes: routes2
      });
    } catch (err) {
      const message = get_default()(err, ["response", "payload", "message"], "An error occured");
      dispatch({
        type: "GET_DATA_ERROR"
      });
      if (message !== "Forbidden") {
        toggleNotification({
          type: "warning",
          message
        });
      }
    }
  }, [toggleNotification]);
  (0,react.useEffect)(() => {
    if (shouldFetchData) {
      fetchPlugins();
    }
  }, [fetchPlugins, shouldFetchData]);
  return {
    permissions,
    routes,
    getData: fetchPlugins,
    isLoading
  };
};
/* harmony default export */ const hooks_usePlugins = (usePlugins);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useFetchRole/reducer.js

const useFetchRole_reducer_initialState = {
  role: {},
  isLoading: true
};
const useFetchRole_reducer_reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.role = action.role;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.role.name = action.name;
      draftState.role.description = action.description;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchRole_reducer = (useFetchRole_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useFetchRole/index.js




const useFetchRole = (id) => {
  const [state, dispatch] = (0,react.useReducer)(useFetchRole_reducer, useFetchRole_reducer_initialState);
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const isMounted = (0,react.useRef)(null);
  const { get } = (0,helper_plugin_esm.useFetchClient)();
  (0,react.useEffect)(() => {
    isMounted.current = true;
    if (id) {
      fetchRole(id);
    } else {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        role: {}
      });
    }
    return () => isMounted.current = false;
  }, [id]);
  const fetchRole = async (roleId) => {
    try {
      const {
        data: { role }
      } = await get(`/${src_pluginId/* default */.Z}/roles/${roleId}`);
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          role
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: "GET_DATA_ERROR"
      });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  };
  const handleSubmitSucceeded = (0,react.useCallback)((data) => {
    dispatch({
      type: "ON_SUBMIT_SUCCEEDED",
      ...data
    });
  }, []);
  return { ...state, onSubmitSucceeded: handleSubmitSucceeded };
};
/* harmony default export */ const hooks_useFetchRole = (useFetchRole);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/index.js





// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/EditPage/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required),
  description: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/EditPage/index.js












const EditPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm.useOverlayBlocker)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)(`/settings/${src_pluginId/* default */.Z}/roles/:id`);
  const { isLoading: isLoadingPlugins, routes } = hooks_usePlugins();
  const { role, onSubmitSucceeded, isLoading: isLoadingRole } = hooks_useFetchRole(id);
  const permissionsRef = (0,react.useRef)();
  const { put } = (0,helper_plugin_esm.useFetchClient)();
  const handleEditRoleSubmit = async (data) => {
    lockApp();
    setIsSubmitting(true);
    try {
      const permissions = permissionsRef.current.getPermissions();
      await put(`/${src_pluginId/* default */.Z}/roles/${id}`, { ...data, ...permissions, users: [] });
      onSubmitSucceeded({ name: data.name, description: data.description });
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.edited"),
          defaultMessage: "Role edited"
        }
      });
    } catch (err) {
      console.error(err);
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
    setIsSubmitting(false);
    unlockApp();
  };
  if (isLoadingRole) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues: { name: role.name, description: role.description },
      onSubmit: handleEditRoleSubmit,
      validationSchema: utils_schema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: role.code === "strapi-super-admin",
            type: "submit",
            loading: isSubmitting,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null)
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: role.name,
        subtitle: role.description,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/users-permissions/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        background: "neutral0",
        hasRadius: true,
        shadow: "filterShadow",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors.name ? formatMessage({ id: errors.name, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Invalid value"
          }) : null
        }
      ))))
    ), !isLoadingPlugins && /* @__PURE__ */ react.createElement(
      components_UsersPermissions,
      {
        ref: permissionsRef,
        permissions: role.permissions,
        routes
      }
    ))))
  ));
};
/* harmony default export */ const Roles_EditPage = (EditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedEditPage/index.js




const ProtectedRolesEditPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.updateRole }, /* @__PURE__ */ react.createElement(Roles_EditPage, null));
/* harmony default export */ const ProtectedEditPage = (ProtectedRolesEditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/CreatePage/utils/schema.js


const schema_schema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required),
  description: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required)
});
/* harmony default export */ const CreatePage_utils_schema = (schema_schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/CreatePage/index.js












const CreatePage_EditPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { goBack } = (0,react_router/* useHistory */.k6)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm.useOverlayBlocker)();
  const { isLoading: isLoadingPlugins, permissions, routes } = hooks_usePlugins();
  const { trackUsage } = (0,helper_plugin_esm.useTracking)();
  const permissionsRef = (0,react.useRef)();
  const { post } = (0,helper_plugin_esm.useFetchClient)();
  const handleCreateRoleSubmit = async (data) => {
    lockApp();
    setIsSubmitting(true);
    try {
      const permissions2 = permissionsRef.current.getPermissions();
      await post(`/${src_pluginId/* default */.Z}/roles`, { ...data, ...permissions2, users: [] });
      trackUsage("didCreateRole");
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.created"),
          defaultMessage: "Role created"
        }
      });
      goBack();
    } catch (err) {
      console.error(err);
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
    setIsSubmitting(false);
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues: { name: "", description: "" },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: CreatePage_utils_schema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmitting, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        background: "neutral0",
        hasRadius: true,
        shadow: "filterShadow",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors.name ? formatMessage({ id: errors.name, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Invalid value"
          }) : null
        }
      ))))
    ), !isLoadingPlugins && /* @__PURE__ */ react.createElement(
      components_UsersPermissions,
      {
        ref: permissionsRef,
        permissions,
        routes
      }
    ))))
  ));
};
/* harmony default export */ const CreatePage = (CreatePage_EditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedCreatePage/index.js




const ProtectedRolesCreatePage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.createRole }, /* @__PURE__ */ react.createElement(CreatePage, null));
/* harmony default export */ const ProtectedCreatePage = (ProtectedRolesCreatePage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/index.js








const Roles = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.accessRoles }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: `/settings/${src_pluginId/* default */.Z}/roles/new`,
      component: ProtectedCreatePage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/settings/${src_pluginId/* default */.Z}/roles/:id`, component: ProtectedEditPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/settings/${src_pluginId/* default */.Z}/roles`, component: ProtectedListPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: helper_plugin_esm.AnErrorOccurred })));
};
/* harmony default export */ const pages_Roles = (Roles);


/***/ }),

/***/ 89031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YX: () => (/* reexport */ utils_cleanPermissions),
  Gc: () => (/* reexport */ utils_getRequestURL),
  OB: () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (isEmpty_default()(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (isEmpty_default()(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var pluginId = __webpack_require__(31498);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js

const getRequestURL = (endPoint) => `/${pluginId/* default */.Z}/${endPoint}`;
/* harmony default export */ const utils_getRequestURL = (getRequestURL);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(84757);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js






/***/ }),

/***/ 47443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(42118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 20731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(88668),
    arrayIncludes = __webpack_require__(47443),
    arrayIncludesWith = __webpack_require__(1196),
    arrayMap = __webpack_require__(29932),
    baseUnary = __webpack_require__(7518),
    cacheHas = __webpack_require__(74757);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 41848:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 42118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIsNaN = __webpack_require__(62722),
    strictIndexOf = __webpack_require__(42351);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 62722:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 42351:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 35161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    isArray = __webpack_require__(1469);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 13217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259);

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ }),

/***/ 69572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259),
    toInteger = __webpack_require__(40554);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ 82569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(20731),
    baseRest = __webpack_require__(5976),
    isArrayLikeObject = __webpack_require__(29246);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ })

}]);