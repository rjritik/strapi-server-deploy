"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[3552],{

/***/ 72751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(8181);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js
var utils = __webpack_require__(57813);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(77296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,es/* object */.Ry)().shape({
  code: (0,es/* string */.Z_)().required(),
  displayName: (0,es/* string */.Z_)().max(50, "Settings.locales.modal.locales.displayName.error").required(helper_plugin_esm.translatedErrors.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(86706);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var constants = __webpack_require__(7982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js





const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_es.useDispatch)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { put } = (0,helper_plugin_esm.useFetchClient)();
  const modifyLocale = async (id, payload) => {
    try {
      setLoading(true);
      const { data } = await put(`/i18n/locales/${id}`, payload);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.edit.success") }
      });
      dispatch({ type: constants/* UPDATE_LOCALE */.OT, editedLocale: data });
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      setLoading(false);
    }
  };
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(40619);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js





const useDefaultLocales = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { get } = (0,helper_plugin_esm.useFetchClient)();
  const { isLoading, data } = (0,react_query_es.useQuery)(["plugin-i18n", "locales"], async () => {
    try {
      const { data: data2 } = await get("/i18n/iso-locales");
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    } catch (e) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
      return [];
    }
  });
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js







const BaseForm = ({ locale }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, handleChange, errors } = (0,formik_esm/* useFormikContext */.u6)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const localeDetails = !isLoading && defaultLocales.find((row) => row.code === locale.code);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: localeDetails?.code || locale.code,
      disabled: true
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: localeDetails?.code || locale.code }, localeDetails?.name || locale.code)
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm);
BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,formik_esm/* useFormikContext */.u6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: "isDefault",
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault,
      disabled: isDefaultLocale
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js












const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,helper_plugin_esm.useRBACProvider)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleSubmit = async ({ displayName, isDefault }) => {
    await editLocale(locale.id, { name: displayName, isDefault });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "edit-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      initialValues: {
        code: locale?.code,
        displayName: locale?.name || "",
        isDefault: Boolean(locale?.isDefault)
      },
      onSubmit: handleSubmit,
      validationSchema: schemas
    },
    /* @__PURE__ */ react.createElement(helper_plugin_esm.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "edit-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.edit"),
      defaultMessage: "Edit a locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, { locale })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, { isDefaultLocale: Boolean(locale && locale.isDefault) }))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isEditing }, formatMessage({ id: "global.save" }))
      }
    ))
  ));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js





const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_es.useDispatch)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { del } = (0,helper_plugin_esm.useFetchClient)();
  const removeLocale = async (id) => {
    try {
      setLoading(true);
      await del(`/i18n/locales/${id}`);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.delete.success") }
      });
      dispatch({ type: constants/* DELETE_LOCALE */.HC, id });
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      setLoading(false);
    }
  };
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(
    helper_plugin_esm.ConfirmDialog,
    {
      isConfirmButtonLoading: isDeleting,
      onConfirm: handleDelete,
      onToggleDialog: onClose,
      isOpen: isOpened
    }
  );
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js






const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_es.useDispatch)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { post } = (0,helper_plugin_esm.useFetchClient)();
  const persistLocale = async (locale) => {
    setLoading(true);
    try {
      const { data } = await post("/i18n/locales", locale);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.success") }
      });
      dispatch({ type: constants/* ADD_LOCALE */.xz, newLocale: data });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var Combobox = __webpack_require__(29178);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.Z)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.hQ,
    {
      "aria-busy": isLoading,
      error,
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: computedValue,
      onClear: value ? onClear : void 0,
      onChange: (selectedLocaleKey) => {
        const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
        if (selectedLocale) {
          onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
        }
      },
      placeholder: formatMessage({
        id: "components.placeholder.select",
        defaultMessage: "Select"
      })
    },
    options.map((option) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: option.value, key: option.value }, option.label))
  );
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear() {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js






const BaseForm_BaseForm = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, handleChange, setFieldValue, errors } = (0,formik_esm/* useFormikContext */.u6)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    components_LocaleSelect,
    {
      error: errors.code,
      value: values.code,
      onLocaleChange: handleLocaleChange,
      onClear: handleClear
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm_BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm_AdvancedForm = () => {
  const { values, setFieldValue } = (0,formik_esm/* useFormikContext */.u6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm_AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js












const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { refetchPermissions } = (0,helper_plugin_esm.useRBACProvider)();
  const handleLocaleAdd = async (values) => {
    await addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "add-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      initialValues: initialFormValues,
      onSubmit: handleLocaleAdd,
      validationSchema: schemas,
      validateOnChange: false
    },
    /* @__PURE__ */ react.createElement(helper_plugin_esm.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "add-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.add"),
      defaultMessage: "Add new locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2", variant: "beta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isAdding }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
      }
    ))
  ));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js







const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 4, rowCount: locales.length + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "Actions")))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, locales.map((locale) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      key: locale.id,
      ...(0,helper_plugin_esm.onRowClick)({
        fn: () => onEditLocale(locale),
        condition: onEditLocale
      })
    },
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.id)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.default") }) : null)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1, justifyContent: "flex-end", ...helper_plugin_esm.stopPropagation }, onEditLocale && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: () => onEditLocale(locale),
        label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.edit") }),
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
        noBorder: true
      }
    ), onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: () => onDeleteLocale(locale),
        label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.delete") }),
        icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
        noBorder: true
      }
    )))
  ))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js












const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.Z)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,helper_plugin_esm.useFocusWhenNavigate)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: onToggleCreateModal, size: "S" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })),
      title: formatMessage({ id: (0,utils/* getTrad */.O)("plugin.name") }),
      subtitle: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.description") })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, locales?.length > 0 ? /* @__PURE__ */ react.createElement(
    LocaleList_LocaleTable,
    {
      locales,
      onDeleteLocale: handleDeleteLocale,
      onEditLocale: handleEditLocale
    }
  ) : /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments/* default */.Z, { width: void 0, height: void 0 }),
      content: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.empty.title") }),
      action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: onToggleCreateModal }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })) : null
    }
  )), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, { onClose: onToggleCreateModal }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, { onClose: closeModalToEdit, locale: localeToEdit }), /* @__PURE__ */ react.createElement(components_ModalDelete, { localeToDelete, onClose: closeModalToDelete }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(
    components_LocaleList,
    {
      canUpdateLocale,
      canDeleteLocale,
      onToggleCreateModal: handleToggleModalCreate,
      isCreating: isOpenedCreateModal
    }
  ) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/permissions.js
var permissions = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,helper_plugin_esm.useRBAC)(permissions/* default */.Z);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    SettingsPage_LocaleSettingsPage,
    {
      canReadLocale: canRead,
      canCreateLocale: canCreate,
      canUpdateLocale: canUpdate,
      canDeleteLocale: canDelete
    }
  );
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ })

}]);