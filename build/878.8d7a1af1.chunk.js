"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[878],{

/***/ 60878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pluginId.js
var pluginId = __webpack_require__(274);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(76835);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/api.js


const fetchSeoComponent = async () => {
  try {
    const data = await (0,helper_plugin_esm.request)(`/${(pluginId_default())}/component`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};
const fetchContentTypes = async () => {
  try {
    const data = await (0,helper_plugin_esm.request)(`/${(pluginId_default())}/content-types`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};
const createSeoComponent = async () => {
  try {
    const data = await (0,helper_plugin_esm.request)(
      `/${(pluginId_default())}/component`,
      {
        method: "POST"
      },
      true
    );
    return data.json();
  } catch (error) {
    return null;
  }
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var LinkButton_LinkButton = __webpack_require__(32064);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/EmptyComponentLayout/illo.js
var illo = __webpack_require__(94228);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Switch/Switch.js
var Switch = __webpack_require__(3566);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.js
var GridLayout = __webpack_require__(19306);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Equalizer.js
var Equalizer = __webpack_require__(58283);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/InformationSquare.js
var InformationSquare = __webpack_require__(45349);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/SettingsModal/index.js













const settingsAPI = (__webpack_require__(25309)/* ["default"] */ .Z);
const SettingsModal = ({ item }) => {
  const [metaTitle, setMetaTitle] = (0,react.useState)(true);
  const [metaDescription, setMetaDescription] = (0,react.useState)(true);
  const [metaRobots, setMetaRobots] = (0,react.useState)(true);
  const [metaSocial, setMetaSocial] = (0,react.useState)(true);
  const [wordCount, setWordCount] = (0,react.useState)(true);
  const [canonicalUrl, setCanonicalUrl] = (0,react.useState)(true);
  const [keywordDensity, setKeywordDensity] = (0,react.useState)(true);
  const [structuredData, setStructuredData] = (0,react.useState)(true);
  const [alternativeText, setAlternativeText] = (0,react.useState)(true);
  const [lastUpdatedAt, setLastUpdatedAt] = (0,react.useState)(true);
  const [defaultSettings, setDefaultSettings] = (0,react.useState)(null);
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,react.useEffect)(() => {
    const fetchDefaultSettings = async () => {
      const tmpSettings = await settingsAPI.get();
      setDefaultSettings(tmpSettings);
    };
    fetchDefaultSettings();
  }, []);
  const handleOpeningModal = (prev) => {
    const matchingContentType = defaultSettings[item?.uid];
    setMetaTitle(matchingContentType?.seoChecks?.metaTitle);
    setMetaDescription(matchingContentType?.seoChecks?.metaDescription);
    setMetaRobots(matchingContentType?.seoChecks?.metaRobots);
    setMetaSocial(matchingContentType?.seoChecks?.metaSocial);
    setWordCount(matchingContentType?.seoChecks?.wordCount);
    setCanonicalUrl(matchingContentType?.seoChecks?.canonicalUrl);
    setKeywordDensity(matchingContentType?.seoChecks?.keywordDensity);
    setStructuredData(matchingContentType?.seoChecks?.structuredData);
    setAlternativeText(matchingContentType?.seoChecks?.alternativeText);
    setLastUpdatedAt(matchingContentType?.seoChecks?.lastUpdatedAt);
    setIsVisible((prev2) => !prev2);
  };
  const handleSavingSettingsModal = (prev) => {
    const newSettings = {
      ...defaultSettings,
      [item?.uid]: {
        collectionName: defaultSettings[item?.uid]?.collectionName,
        seoChecks: {
          metaTitle,
          metaDescription,
          metaRobots,
          metaSocial,
          wordCount,
          canonicalUrl,
          keywordDensity,
          structuredData,
          alternativeText,
          lastUpdatedAt
        }
      }
    };
    settingsAPI.set(newSettings).then(async () => {
      setDefaultSettings(newSettings);
      setIsVisible((prev2) => !prev2);
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "tertiary",
      startIcon: /* @__PURE__ */ react.createElement(Equalizer/* default */.Z, null),
      onClick: (prev) => handleOpeningModal(prev)
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.config"),
      defaultMessage: "Settings"
    })
  ), isVisible && /* @__PURE__ */ react.createElement(
    ModalLayout/* ModalLayout */.P,
    {
      onClose: () => setIsVisible((prev) => !prev),
      labelledBy: "title"
    },
    /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        fontWeight: "bold",
        textColor: "neutral800",
        as: "h2",
        id: "title"
      },
      formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings"),
        defaultMessage: "Settings"
      })
    )),
    /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 8, paddingTop: 4 }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm.ContentBox,
      {
        title: formatMessage({
          id: "Information",
          defaultMessage: "Information"
        }),
        subtitle: formatMessage({
          id: (0,utils/* getTrad */.O)("HomePage.info.settings.information"),
          defaultMessage: "Disable SEO checks for this specific content-type."
        }),
        icon: /* @__PURE__ */ react.createElement(InformationSquare/* default */.Z, null),
        iconBackground: "primary100"
      }
    )), /* @__PURE__ */ react.createElement(GridLayout/* GridLayout */.M, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
      Switch/* Switch */.r,
      {
        label: "Switch",
        selected: metaTitle,
        onChange: () => setMetaTitle((s) => !s)
      }
    ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-title-check"),
      defaultMessage: "Meta Title"
    })))), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: metaDescription,
          onChange: () => setMetaDescription((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.meta-description-check"
        ),
        defaultMessage: "Meta Description"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: metaRobots,
          onChange: () => setMetaRobots((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-robots-check"),
        defaultMessage: "Meta Robots"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: metaSocial,
          onChange: () => setMetaSocial((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-social-check"),
        defaultMessage: "Meta Social"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: wordCount,
          onChange: () => setWordCount((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.word-count-check"),
        defaultMessage: "Word Count"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: canonicalUrl,
          onChange: () => setCanonicalUrl((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.canonical-url-check"),
        defaultMessage: "Canonical URL"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: keywordDensity,
          onChange: () => setKeywordDensity((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.keyword-density-check"
        ),
        defaultMessage: "Keyword Density"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: structuredData,
          onChange: () => setStructuredData((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.structured-data-check"
        ),
        defaultMessage: "Structured Data"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: alternativeText,
          onChange: () => setAlternativeText((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.alternative-text-check"
        ),
        defaultMessage: "Alt Text"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch/* Switch */.r,
        {
          label: "Switch",
          selected: lastUpdatedAt,
          onChange: () => setLastUpdatedAt((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.last-updated-at-check"
        ),
        defaultMessage: "Last Updated At"
      })))
    ))),
    /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            onClick: () => setIsVisible((prev) => !prev),
            variant: "tertiary"
          },
          formatMessage({
            id: (0,utils/* getTrad */.O)("SEOPage.info.settings.cancel.button"),
            defaultMessage: "Cancel"
          })
        ),
        endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: (prev) => handleSavingSettingsModal(prev) }, formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.settings.save.button"),
          defaultMessage: "Save"
        })))
      }
    )
  ));
};
/* harmony default export */ const Main_SettingsModal = (SettingsModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(77296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/index.js
















const Main = ({ contentTypes }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8 }, /* @__PURE__ */ react.createElement(TabGroup/* TabGroup */.v, { label: "label", id: "tabs", variant: "simple" }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab.collection-type-title"),
    defaultMessage: "Collection Types"
  }))), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab.single-type-title"),
    defaultMessage: "Single Types"
  })))), /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount: 2,
      rowCount: contentTypes.collectionTypes.length
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.tab-panel.column-name"),
      defaultMessage: "Name"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, contentTypes && contentTypes.collectionTypes && !lodash_default().isEmpty(contentTypes.collectionTypes) ? contentTypes.collectionTypes.map((item) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: item.uid }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, item.globalId)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "right", alignItems: "right" }, item.seo ? /* @__PURE__ */ react.createElement(Main_SettingsModal, { item }) : /* @__PURE__ */ react.createElement(
      LinkButton_LinkButton/* LinkButton */.Q,
      {
        startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
        variant: "secondary",
        to: `/plugins/content-type-builder/content-types/${item.uid}`
      },
      formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
        defaultMessage: "Add component"
      })
    ))))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral0" }, /* @__PURE__ */ react.createElement(
      EmptyStateLayout/* EmptyStateLayout */.x,
      {
        icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
        content: formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.no-collection-types"),
          defaultMessage: "You don't have any collection-types yet..."
        }),
        action: /* @__PURE__ */ react.createElement(
          LinkButton_LinkButton/* LinkButton */.Q,
          {
            to: "/plugins/content-type-builder",
            variant: "secondary",
            startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
          },
          formatMessage({
            id: (0,utils/* getTrad */.O)(
              "SEOPage.info.create-collection-type"
            ),
            defaultMessage: "Create your first collection-type"
          })
        )
      }
    )))
  )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: contentTypes.singleTypes.length }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab-panel.column-name"),
    defaultMessage: "Name"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, contentTypes && contentTypes.singleTypes && !lodash_default().isEmpty(contentTypes.singleTypes) ? contentTypes.singleTypes.map((item) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: item.uid }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, item.globalId)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "right", alignItems: "right" }, item.seo ? /* @__PURE__ */ react.createElement(Main_SettingsModal, { item }) : /* @__PURE__ */ react.createElement(
    LinkButton_LinkButton/* LinkButton */.Q,
    {
      startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
      variant: "secondary",
      to: `/plugins/content-type-builder/content-types/${item.uid}`
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
      defaultMessage: "Add component"
    })
  ))))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral0" }, /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
      content: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.no-single-types"),
        defaultMessage: "You don't have any single-types yet..."
      }),
      action: /* @__PURE__ */ react.createElement(
        LinkButton_LinkButton/* LinkButton */.Q,
        {
          to: "/plugins/content-type-builder",
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        },
        formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.create-single-type"),
          defaultMessage: "Create your first single-type"
        })
      )
    }
  )))))))));
};
/* harmony default export */ const HomePage_Main = (Main);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Header/index.js







const Header = (seoComponent) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      secondaryAction: seoComponent ? null : /* @__PURE__ */ react.createElement(
        LinkButton,
        {
          variant: "tertiary",
          to: "/plugins/content-type-builder/component-categories/shared/shared.seo",
          startIcon: /* @__PURE__ */ react.createElement(Pencil, null)
        },
        formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.header.button.edit-component"),
          defaultMessage: "Edit SEO component"
        })
      ),
      title: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.header.title"),
        defaultMessage: "SEO"
      }),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.header.subtitle"),
        defaultMessage: "Optimize your content to be SEO friendly"
      }),
      as: "h2"
    }
  ));
};
/* harmony default export */ const HomePage_Header = (Header);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/HomePage/index.js










const HomePage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,helper_plugin_esm.useAutoReloadOverlayBlocker)();
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [shouldEffect, setShouldEffect] = (0,react.useState)(false);
  const seoComponent = (0,react.useRef)({});
  const contentTypes = (0,react.useRef)({});
  (0,react.useEffect)(async () => {
    seoComponent.current = await fetchSeoComponent();
    contentTypes.current = await fetchContentTypes();
    if (!seoComponent.current) {
      try {
        lockAppWithAutoreload();
        await createSeoComponent();
      } catch (error) {
        console.log(error);
      } finally {
        unlockAppWithAutoreload();
        setShouldEffect(true);
      }
    }
    setIsLoading(false);
  }, [shouldEffect]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(HomePage_Header, { seoComponent: seoComponent.current }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8 }, /* @__PURE__ */ react.createElement(
    helper_plugin_esm.ContentBox,
    {
      title: formatMessage({
        id: "Information",
        defaultMessage: "Information"
      }),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.O)("HomePage.info.information"),
        defaultMessage: "When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."
      }),
      icon: /* @__PURE__ */ react.createElement(InformationSquare/* default */.Z, null),
      iconBackground: "primary100"
    }
  )), /* @__PURE__ */ react.createElement(HomePage_Main, { contentTypes: contentTypes.current }));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/permissions.js
var permissions = __webpack_require__(53487);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/App/index.js






const App = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.main }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${(pluginId_default())}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { component: helper_plugin_esm.NotFound }))));
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);