"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4121],{

/***/ 62872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webhooks_ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(92155);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Switch/Switch.js
var Switch = __webpack_require__(3566);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/index.js








const ListView = () => {
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [webhooksToDelete, setWebhooksToDelete] = (0,react.useState)([]);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { formatAPIError } = (0,helper_plugin_esm.useAPIErrorHandler)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  (0,helper_plugin_esm.useFocusWhenNavigate)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const {
    isLoading: isRBACLoading,
    allowedActions: { canCreate, canUpdate, canDelete }
  } = (0,helper_plugin_esm.useRBAC)(permissions/* default */.Z.settings.webhooks);
  const { get, post, put } = (0,helper_plugin_esm.useFetchClient)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const QUERY_KEY = "webhooks";
  const {
    isLoading: isWebhooksLoading,
    data: webhooks,
    error: webhooksError,
    refetch: refetchWebhooks
  } = (0,es.useQuery)(QUERY_KEY, async () => {
    const {
      data: { data }
    } = await get("/admin/webhooks");
    return data;
  });
  (0,react.useEffect)(() => {
    if (webhooksError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(webhooksError)
      });
      return;
    }
    if (webhooks) {
      notifyStatus(
        formatMessage({
          id: "Settings.webhooks.list.loading.success",
          defaultMessage: "Webhooks have been loaded"
        })
      );
    }
  }, [webhooks, webhooksError, toggleNotification, formatMessage, notifyStatus, formatAPIError]);
  const deleteMutation = (0,es.useMutation)(
    async () => {
      await post("/admin/webhooks/batch-delete", {
        ids: webhooksToDelete
      });
    },
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        setShowModal(false);
      },
      onSuccess() {
        setWebhooksToDelete([]);
        setShowModal(false);
        refetchWebhooks();
      }
    }
  );
  const enabledMutation = (0,es.useMutation)(
    async ({ isEnabled, id }) => {
      const { id: _, ...webhook } = webhooks.find((webhook2) => webhook2.id === id) ?? {};
      const body = {
        ...webhook,
        isEnabled
      };
      await put(`/admin/webhooks/${id}`, body);
    },
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      },
      onSuccess() {
        refetchWebhooks();
      }
    }
  );
  const confirmDelete = () => deleteMutation.mutate();
  const selectAllCheckbox = (selected) => selected ? setWebhooksToDelete(webhooks.map((webhook) => webhook.id)) : setWebhooksToDelete([]);
  const selectOneCheckbox = (selected, id) => selected ? setWebhooksToDelete((prev) => [...prev, id]) : setWebhooksToDelete((prev) => prev.filter((webhookId) => webhookId !== id));
  const goTo = (to) => push(`${pathname}/${to}`);
  const isLoading = isRBACLoading || isWebhooksLoading;
  const numberOfWebhooks = webhooks?.length ?? 0;
  const webhooksToDeleteLength = webhooksToDelete.length;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(helper_plugin_esm.SettingsPageTitle, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
      subtitle: formatMessage({
        id: "Settings.webhooks.list.description",
        defaultMessage: "Get POST changes notifications"
      }),
      primaryAction: canCreate && !isLoading && /* @__PURE__ */ react.createElement(helper_plugin_esm.LinkButton, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), variant: "default", to: `${pathname}/create`, size: "S" }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    }
  ), webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
        {
          id: "Settings.webhooks.to.delete",
          defaultMessage: "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"
        },
        { webhooksToDeleteLength }
      )), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: () => setShowModal(true),
          startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          size: "L",
          variant: "danger-light"
        },
        formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null)) : numberOfWebhooks > 0 ? /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount: 5,
      rowCount: numberOfWebhooks + 1,
      footer: /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { onClick: () => canCreate ? goTo("create") : {}, icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null) }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
      BaseCheckbox/* BaseCheckbox */.C,
      {
        "aria-label": formatMessage({
          id: "global.select-all-entries",
          defaultMessage: "Select all entries"
        }),
        indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < numberOfWebhooks,
        value: webhooksToDeleteLength === numberOfWebhooks,
        onValueChange: selectAllCheckbox
      }
    )), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "60%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.form.url",
      defaultMessage: "URL"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.list.th.status",
      defaultMessage: "Status"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "Settings.webhooks.list.th.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, webhooks.map((webhook) => /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: webhook.id,
        ...(0,helper_plugin_esm.onRowClick)({
          fn: () => goTo(webhook.id),
          condition: canUpdate
        })
      },
      /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm.stopPropagation }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": `${formatMessage({
            id: "global.select",
            defaultMessage: "Select"
          })} ${webhook.name}`,
          value: webhooksToDelete?.includes(webhook.id),
          onValueChange: (selected) => selectOneCheckbox(selected, webhook.id),
          name: "select"
        }
      )),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800" }, webhook.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, webhook.url)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          onLabel: formatMessage({
            id: "global.enabled",
            defaultMessage: "Enabled"
          }),
          offLabel: formatMessage({
            id: "global.disabled",
            defaultMessage: "Disabled"
          }),
          label: `${webhook.name} ${formatMessage({
            id: "Settings.webhooks.list.th.status",
            defaultMessage: "Status"
          })}`,
          selected: webhook.isEnabled,
          onChange: (e) => {
            e.stopPropagation();
            enabledMutation.mutate({
              isEnabled: !webhook.isEnabled,
              id: webhook.id
            });
          },
          visibleLabels: true
        }
      ))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, canUpdate && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          label: formatMessage({
            id: "Settings.webhooks.events.update",
            defaultMessage: "Update"
          }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          noBorder: true
        }
      ), canDelete && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: (e) => {
            e.stopPropagation();
            setWebhooksToDelete([webhook.id]);
            setShowModal(true);
          },
          label: formatMessage({
            id: "Settings.webhooks.events.delete",
            defaultMessage: "Delete webhook"
          }),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          noBorder: true
        }
      )))
    )))
  ) : /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments/* default */.Z, { width: "160px" }),
      content: formatMessage({
        id: "Settings.webhooks.list.empty.description",
        defaultMessage: "No webhooks found"
      }),
      action: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          onClick: () => canCreate ? goTo("create") : {}
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    }
  ))), /* @__PURE__ */ react.createElement(
    helper_plugin_esm.ConfirmDialog,
    {
      isOpen: showModal,
      onToggleDialog: () => setShowModal((prev) => !prev),
      onConfirm: confirmDelete,
      isConfirmButtonLoading: deleteMutation.isLoading
    }
  ));
};
/* harmony default export */ const Webhooks_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ProtectedListView/index.js




const ProtectedListView = () => /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.settings.webhooks.main }, /* @__PURE__ */ react.createElement(Webhooks_ListView, null));
/* harmony default export */ const Webhooks_ProtectedListView = (ProtectedListView);


/***/ })

}]);