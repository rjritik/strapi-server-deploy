"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[5162],{

/***/ 81788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(39645);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.js
var Play = __webpack_require__(45448);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(92155);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/EventRow.js




const EventRow = ({ disabledEvents, name, events, inputValue, handleChange, handleChangeAll }) => {
  const enabledCheckboxes = events.filter((event) => {
    return !disabledEvents.includes(event);
  });
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleChangeAll({
      target: { name: name2, value: valueToSet }
    });
  };
  return /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
      "aria-label": "Select all entries",
      name,
      onChange: onChangeAll,
      value: areAllCheckboxesSelected
    },
    upperFirst_default()(name)
  )), events.map((event) => {
    return /* @__PURE__ */ react.createElement("td", { key: event }, /* @__PURE__ */ react.createElement(
      BaseCheckbox/* BaseCheckbox */.C,
      {
        disabled: disabledEvents.includes(event),
        "aria-label": event,
        name: event,
        value: inputValue.includes(event),
        onValueChange: (value) => handleChange({ target: { name: event, value } })
      }
    ));
  }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleChange() {
  },
  handleChangeAll() {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types_default()).array,
  events: (prop_types_default()).array,
  inputValue: (prop_types_default()).array,
  handleChange: (prop_types_default()).func,
  handleChangeAll: (prop_types_default()).func,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const EventInput_EventRow = (EventRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/index.js







const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
const StyledTable = styled_components_browser_esm/* default */.ZP.table`
  td {
    height: ${52 / 16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;
const displayedData = {
  headers: {
    default: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" }
    ],
    draftAndPublish: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" },
      { id: "app.utils.publish", defaultMessage: "Publish" },
      { id: "app.utils.unpublish", defaultMessage: "Unpublish" }
    ]
  },
  events: {
    default: {
      entry: ["entry.create", "entry.update", "entry.delete"],
      media: ["media.create", "media.update", "media.delete"]
    },
    draftAndPublish: {
      entry: ["entry.create", "entry.update", "entry.delete", "entry.publish", "entry.unpublish"],
      media: ["media.create", "media.update", "media.delete"]
    }
  }
};
const EventInput = ({ isDraftAndPublish }) => {
  const headersName = isDraftAndPublish ? displayedData.headers.draftAndPublish : displayedData.headers.default;
  const events = isDraftAndPublish ? displayedData.events.draftAndPublish : displayedData.events.default;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, handleChange: onChange } = (0,formik_esm/* useFormikContext */.u6)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = formatValue(inputValue);
  const handleChange = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleChangeAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  })), /* @__PURE__ */ react.createElement(StyledTable, null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null), headersName.map((header) => {
    if (header === "app.utils.publish" || header === "app.utils.unpublish") {
      return /* @__PURE__ */ react.createElement(
        "td",
        {
          key: header.id,
          title: formatMessage({
            id: "Settings.webhooks.event.publish-tooltip",
            defaultMessage: "This event only exists for content with draft & publish enabled"
          })
        },
        /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header))
      );
    }
    return /* @__PURE__ */ react.createElement("td", { key: header.id }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header)));
  }))), /* @__PURE__ */ react.createElement("tbody", null, Object.keys(events).map((event) => {
    return /* @__PURE__ */ react.createElement(
      EventInput_EventRow,
      {
        disabledEvents,
        key: event,
        name: event,
        events: events[event],
        inputValue: formattedValue[event],
        handleChange,
        handleChangeAll
      }
    );
  }))));
};
EventInput.propTypes = {
  isDraftAndPublish: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_EventInput = (EventInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var Combobox = __webpack_require__(29178);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/keys.js
const keys = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
/* harmony default export */ const HeadersInput_keys = (keys);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js




const Combobox_Combobox = ({ name, onChange, value, ...props }) => {
  const [options, setOptions] = (0,react.useState)(value ? [...HeadersInput_keys, value] : HeadersInput_keys);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    onChange({ target: { name, value: value2 } });
  };
  return /* @__PURE__ */ react.createElement(
    Combobox/* CreatableCombobox */.XU,
    {
      ...props,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      placeholder: "",
      value
    },
    options.map((key) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: key, key }, key))
  );
};
Combobox_Combobox.defaultProps = {
  value: void 0
};
Combobox_Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox_Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js







const HeadersInput = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, errors } = (0,formik_esm/* useFormikContext */.u6)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(
    formik_esm/* FieldArray */.F2,
    {
      validateOnChange: false,
      name: "headers",
      render: ({ push, remove }) => /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, values.headers?.map((header, i) => (
        // eslint-disable-next-line
        /* @__PURE__ */ react.createElement(react.Fragment, { key: i }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: HeadersInput_Combobox,
            name: `headers.${i}.key`,
            "aria-label": `row ${i + 1} key`,
            label: formatMessage({
              id: "Settings.webhooks.key",
              defaultMessage: "Key"
            }),
            error: errors.headers?.[i]?.key && formatMessage({
              id: errors.headers[i]?.key,
              defaultMessage: errors.headers[i]?.key
            })
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: TextInput/* TextInput */.o,
            "aria-label": `row ${i + 1} value`,
            label: formatMessage({
              id: "Settings.webhooks.value",
              defaultMessage: "Value"
            }),
            name: `headers.${i}.value`,
            error: errors.headers?.[i]?.value && formatMessage({
              id: errors.headers[i]?.value,
              defaultMessage: errors.headers[i]?.value
            })
          }
        )), /* @__PURE__ */ react.createElement(
          Flex/* Flex */.k,
          {
            paddingLeft: 2,
            style: { alignSelf: "center" },
            paddingTop: errors.headers?.[i]?.value ? 0 : 5
          },
          /* @__PURE__ */ react.createElement(
            helper_plugin_esm.RemoveRoundedButton,
            {
              onClick: () => values.headers.length !== 1 && remove(i),
              label: formatMessage(
                {
                  id: "Settings.webhooks.headers.remove",
                  defaultMessage: "Remove header row {number}"
                },
                { number: i + 1 }
              )
            }
          )
        ))))
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
        TextButton/* TextButton */.A,
        {
          type: "button",
          onClick: () => {
            push({ key: "", value: "" });
          },
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        },
        formatMessage({
          id: "Settings.webhooks.create.header",
          defaultMessage: "Create new header"
        })
      )))
    }
  )));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Loader.js
var Loader = __webpack_require__(86647);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js







const Icon = styled_components_browser_esm/* default */.ZP.svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Loader/* default */.Z }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Check/* default */.Z, color: "success700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "danger700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", ellipsis: true }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { maxWidth: (0,helper_plugin_esm.pxToRem)(250), justifyContent: "flex-end", title: message }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true, textColor: "neutral600" }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement("button", { onClick: onCancel, type: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral400" }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "neutral400" }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 5, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Status, { isPending, statusCode })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, !isPending ? /* @__PURE__ */ react.createElement(Message, { statusCode, message }) : /* @__PURE__ */ react.createElement(CancelButton, { onCancel }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel() {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/fieldsRegex.js
const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/schema.js



const schema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_(helper_plugin_esm.translatedErrors.string).required(helper_plugin_esm.translatedErrors.required).matches(NAME_REGEX, helper_plugin_esm.translatedErrors.regex),
  url: yup_es/* string */.Z_(helper_plugin_esm.translatedErrors.string).required(helper_plugin_esm.translatedErrors.required).matches(URL_REGEX, helper_plugin_esm.translatedErrors.regex),
  headers: yup_es/* lazy */.Vo((array) => {
    let baseSchema = yup_es/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_es/* object */.Ry().shape({
        key: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required),
        value: yup_es/* string */.Z_().required(helper_plugin_esm.translatedErrors.required)
      })
    );
  }),
  events: yup_es/* array */.IX()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js











const WebhookForm = ({
  handleSubmit,
  data,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  isDraftAndPublishEvents
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showTriggerResponse, setShowTriggerResponse] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      onSubmit: handleSubmit,
      initialValues: {
        name: data?.name || "",
        url: data?.url || "",
        headers: Object.keys(data?.headers || []).length ? Object.entries(data.headers).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }],
        events: data?.events || []
      },
      validationSchema: utils_schema,
      validateOnChange: false,
      validateOnBlur: false
    },
    ({ handleSubmit: handleSubmit2, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            onClick: () => {
              triggerWebhook();
              setShowTriggerResponse(true);
            },
            variant: "tertiary",
            startIcon: /* @__PURE__ */ react.createElement(Play/* default */.Z, null),
            disabled: isCreating || isTriggering,
            size: "L"
          },
          formatMessage({
            id: "Settings.webhooks.trigger",
            defaultMessage: "Trigger"
          })
        ), /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), onClick: handleSubmit2, type: "submit", size: "L" }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        }))),
        title: isCreating ? formatMessage({
          id: "Settings.webhooks.create",
          defaultMessage: "Create a webhook"
        }) : data?.name,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/webhooks" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, showTriggerResponse && /* @__PURE__ */ react.createElement("div", { className: "trigger-wrapper" }, /* @__PURE__ */ react.createElement(
      components_TriggerContainer,
      {
        isPending: isTriggering,
        response: triggerResponse,
        onCancel: () => setShowTriggerResponse(false)
      }
    )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 8, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      formik_esm/* Field */.gN,
      {
        as: TextInput/* TextInput */.o,
        name: "name",
        error: errors.name && formatMessage({ id: errors.name }),
        label: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }),
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
      formik_esm/* Field */.gN,
      {
        as: TextInput/* TextInput */.o,
        name: "url",
        error: errors.url && formatMessage({ id: errors.url }),
        label: formatMessage({
          id: "Settings.roles.form.input.url",
          defaultMessage: "Url"
        }),
        required: true
      }
    ))), /* @__PURE__ */ react.createElement(components_HeadersInput, null), /* @__PURE__ */ react.createElement(components_EventInput, { isDraftAndPublish: isDraftAndPublishEvents }))))))
  );
};
WebhookForm.propTypes = {
  data: (prop_types_default()).object,
  handleSubmit: (prop_types_default()).func.isRequired,
  triggerWebhook: (prop_types_default()).func.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isDraftAndPublishEvents: (prop_types_default()).bool.isRequired,
  isTriggering: (prop_types_default()).bool.isRequired,
  triggerResponse: (prop_types_default()).object
};
WebhookForm.defaultProps = {
  data: void 0,
  triggerResponse: void 0
};
/* harmony default export */ const components_WebhookForm = (WebhookForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/utils/formatData.js
const cleanData = (data) => {
  return { ...data, headers: unformatHeaders(data.headers) };
};
const unformatHeaders = (headers) => {
  return headers.reduce((acc, current) => {
    const { key, value } = current;
    if (key !== "") {
      return {
        ...acc,
        [key]: value
      };
    }
    return acc;
  }, {});
};
/* harmony default export */ const formatData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js








const EditView = () => {
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/webhooks/:id");
  const { replace } = (0,react_router/* useHistory */.k6)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const queryClient = (0,es.useQueryClient)();
  const { isLoading: isLoadingForModels, collectionTypes } = (0,useContentTypes/* useContentTypes */.G)();
  const { put, get, post } = (0,helper_plugin_esm.useFetchClient)();
  const isCreating = id === "create";
  const { isLoading, data } = (0,es.useQuery)(
    ["get-webhook", id],
    async () => {
      try {
        const {
          data: { data: data2 }
        } = await get(`/admin/webhooks/${id}`);
        return data2;
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
        return null;
      }
    },
    {
      enabled: !isCreating
    }
  );
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,es.useMutation)(() => post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const createWebhookMutation = (0,es.useMutation)((body) => post("/admin/webhooks", body));
  const updateWebhookMutation = (0,es.useMutation)(({ id: id2, body }) => put(`/admin/webhooks/${id2}`, body));
  const handleSubmit = async (data2) => {
    if (isCreating) {
      lockApp();
      createWebhookMutation.mutate(formatData(data2), {
        onSuccess({ data: result }) {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
          unlockApp();
        },
        onError(e) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          console.log(e);
          unlockApp();
        }
      });
    } else {
      lockApp();
      updateWebhookMutation.mutate(
        { id, body: formatData(data2) },
        {
          onSuccess() {
            queryClient.invalidateQueries(["get-webhook", id]);
            toggleNotification({
              type: "success",
              message: { id: "notification.form.success.fields" }
            });
            unlockApp();
          },
          onError(e) {
            toggleNotification({
              type: "warning",
              message: { id: "notification.error" }
            });
            console.log(e);
            unlockApp();
          }
        }
      );
    }
  };
  const isDraftAndPublishEvents = react.useMemo(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm.SettingsPageTitle, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(
    components_WebhookForm,
    {
      ...{
        handleSubmit,
        data,
        triggerWebhook,
        isCreating,
        isTriggering,
        isTriggerIdle,
        triggerResponse: triggerResponse?.data.data,
        isDraftAndPublishEvents
      }
    }
  ));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53915);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81788);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.settings.webhooks.create }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 42122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53915);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81788);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.settings.webhooks.update }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ })

}]);