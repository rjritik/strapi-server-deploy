(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[8155],{

/***/ 97259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReviewWorkflows)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(86706);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 14 modules
var helper_plugin_esm = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(77197);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(53616);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js

function setWorkflows({ status, data }) {
  return {
    type: constants/* ACTION_SET_WORKFLOWS */.QM,
    payload: {
      status,
      workflows: data
    }
  };
}
function deleteStage(stageId) {
  return {
    type: constants/* ACTION_DELETE_STAGE */.x4,
    payload: {
      stageId
    }
  };
}
function addStage(stage = {}) {
  return {
    type: constants/* ACTION_ADD_STAGE */.Ot,
    payload: stage
  };
}
function updateStage(stageId, payload) {
  return {
    type: constants/* ACTION_UPDATE_STAGE */.Nj,
    payload: {
      stageId,
      ...payload
    }
  };
}
function updateStagePosition(oldIndex, newIndex) {
  return {
    type: constants/* ACTION_UPDATE_STAGE_POSITION */.$k,
    payload: {
      newIndex,
      oldIndex
    }
  };
}

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js
var Typography = __webpack_require__(84170);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlusCircle.js
var PlusCircle = __webpack_require__(99782);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/AddStage.js





const StyledAddIcon = (0,styled_components_browser_esm/* default */.ZP)(PlusCircle/* default */.Z)`
  > circle {
    fill: ${({ theme }) => theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  border-radius: 26px;

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};

    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }

  &:active {
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
function AddStage({ children, ...props }) {
  return /* @__PURE__ */ react.createElement(
    StyledButton,
    {
      as: "button",
      background: "neutral0",
      border: "neutral150",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 3,
      shadow: "filterShadow",
      ...props
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { "aria-hidden": true }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral500" }, children))
  );
}
AddStage.propTypes = {
  children: (prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Drag.js
var Drag = __webpack_require__(12814);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var cjs = __webpack_require__(61080);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(13037);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/components/OptionColor/index.js + 1 modules
var OptionColor = __webpack_require__(75194);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/components/SingleValueColor/index.js + 1 modules
var SingleValueColor = __webpack_require__(54878);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/index.js + 13 modules
var hooks = __webpack_require__(75642);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(47815);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/Stage.js
















const AVAILABLE_COLORS = (0,colors/* getAvailableStageColors */.s)();
function StageDropPreview() {
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      display: "block",
      hasRadius: true,
      padding: 6,
      shadow: "tableShadow"
    }
  );
}
function Stage({
  id,
  index,
  canDelete,
  canReorder,
  isOpen: isOpenDefault = false,
  stagesCount
}) {
  const getItemPos = (index2) => `${index2 + 1} of ${stagesCount}`;
  const handleGrabStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.grab-item",
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleDropStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.drop-item",
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleCancelDragStage = () => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.cancel-item",
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: nameField.value
        }
      )
    );
  };
  const handleMoveStage = (newIndex, oldIndex) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.reorder",
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: nameField.value,
          position: getItemPos(newIndex)
        }
      )
    );
    dispatch(updateStagePosition(oldIndex, newIndex));
  };
  const [liveText, setLiveText] = react.useState(null);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,helper_plugin_esm.useTracking)();
  const dispatch = (0,es.useDispatch)();
  const [isOpen, setIsOpen] = react.useState(isOpenDefault);
  const [nameField, nameMeta] = (0,formik_esm/* useField */.U$)(`stages.${index}.name`);
  const [colorField, colorMeta] = (0,formik_esm/* useField */.U$)(`stages.${index}.color`);
  const [{ handlerId, isDragging, handleKeyDown }, stageRef, dropRef, dragRef, dragPreviewRef] = (0,hooks/* useDragAndDrop */.Y9)(canReorder, {
    index,
    item: {
      name: nameField.value
    },
    onGrabItem: handleGrabStage,
    onDropItem: handleDropStage,
    onMoveItem: handleMoveStage,
    onCancel: handleCancelDragStage,
    type: constants/* DRAG_DROP_TYPES */.uL.STAGE
  });
  const composedRef = (0,utils/* composeRefs */.FE)(stageRef, dropRef);
  const colorOptions = AVAILABLE_COLORS.map(({ hex, name }) => ({
    value: hex,
    label: formatMessage(
      {
        id: "Settings.review-workflows.stage.color.name",
        defaultMessage: "{name}"
      },
      { name }
    ),
    color: hex
  }));
  const colorValue = colorOptions.find(({ value }) => value === colorField.value.toUpperCase());
  react.useEffect(() => {
    dragPreviewRef((0,cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { ref: composedRef }, liveText && /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "assertive" }, liveText), isDragging ? /* @__PURE__ */ react.createElement(StageDropPreview, null) : /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      size: "S",
      variant: "primary",
      onToggle: () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
          trackUsage("willEditStage");
        }
      },
      expanded: isOpen,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: nameField.value,
        togglePosition: "left",
        action: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, canDelete && /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.h,
          {
            background: "transparent",
            icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
            label: formatMessage({
              id: "Settings.review-workflows.stage.delete",
              defaultMessage: "Delete stage"
            }),
            noBorder: true,
            onClick: () => dispatch(deleteStage(id))
          }
        ), /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.h,
          {
            background: "transparent",
            forwardedAs: "div",
            role: "button",
            noBorder: true,
            tabIndex: 0,
            "data-handler-id": handlerId,
            ref: dragRef,
            label: formatMessage({
              id: "Settings.review-workflows.stage.drag",
              defaultMessage: "Drag"
            }),
            onClick: (e) => e.stopPropagation(),
            onKeyDown: handleKeyDown
          },
          /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
        ))
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, { padding: 6, background: "neutral0", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        ...nameField,
        id: nameField.name,
        label: formatMessage({
          id: "Settings.review-workflows.stage.name.label",
          defaultMessage: "Stage name"
        }),
        error: nameMeta.error ?? false,
        onChange: (event) => {
          nameField.onChange(event);
          dispatch(updateStage(id, { name: event.target.value }));
        },
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      Field/* Field */.g,
      {
        error: colorMeta?.error ?? false,
        name: colorField.name,
        id: colorField.name,
        required: true
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 1, alignItems: "stretch" }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
        id: "content-manager.reviewWorkflows.stage.color",
        defaultMessage: "Color"
      })), /* @__PURE__ */ react.createElement(
        helper_plugin_esm.ReactSelect,
        {
          components: { Option: OptionColor/* OptionColor */.K, SingleValue: SingleValueColor/* SingleValueColor */.R },
          error: colorMeta?.error,
          inputId: colorField.name,
          name: colorField.name,
          options: colorOptions,
          onChange: ({ value }) => {
            colorField.onChange({ target: { value } });
            dispatch(updateStage(id, { color: value }));
          },
          value: colorValue ?? {
            value: colorField.value,
            label: formatMessage({
              id: "Settings.review-workflows.stage.color.name.custom",
              defaultMessage: "Custom"
            }),
            color: colorField.value
          }
        }
      ), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null))
    ))))
  ));
}
Stage.propTypes = prop_types_default().shape({
  id: (prop_types_default()).number.isRequired,
  color: (prop_types_default()).string.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canReorder: (prop_types_default()).bool.isRequired,
  stagesCount: (prop_types_default()).number.isRequired
}).isRequired;

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stages.js










const StagesContainer = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  position: relative;
`;
const Background = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;
function Stages({ stages }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es.useDispatch)();
  const { trackUsage } = (0,helper_plugin_esm.useTracking)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 6, width: "100%" }, /* @__PURE__ */ react.createElement(StagesContainer, { spacing: 4, width: "100%" }, /* @__PURE__ */ react.createElement(Background, { background: "neutral200", height: "100%", width: 2, zIndex: 1 }), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      gap: 6,
      zIndex: 2,
      position: "relative",
      as: "ol"
    },
    stages.map((stage, index) => {
      const id = stage?.id ?? stage.__temp_key__;
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: `stage-${id}`, as: "li" }, /* @__PURE__ */ react.createElement(
        Stage,
        {
          id,
          index,
          canDelete: stages.length > 1,
          isOpen: !stage.id,
          canReorder: stages.length > 1,
          stagesCount: stages.length
        }
      ));
    })
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 6 }, /* @__PURE__ */ react.createElement(
    AddStage,
    {
      type: "button",
      onClick: () => {
        dispatch(addStage({ name: "" }));
        trackUsage("willCreateStage");
      }
    },
    formatMessage({
      id: "Settings.review-workflows.stage.add",
      defaultMessage: "Add new stage"
    })
  )));
}

Stages.defaultProps = {
  stages: []
};
Stages.propTypes = {
  stages: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number,
      __temp_key__: (prop_types_default()).number,
      name: (prop_types_default()).string.isRequired
    })
  )
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/index.js


// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/reducer/index.js



const initialState = {
  status: "loading",
  serverState: {
    currentWorkflow: null,
    workflows: []
  },
  clientState: {
    currentWorkflow: { data: null, isDirty: false, hasDeletedServerStages: false }
  }
};
function reducer(state = initialState, action) {
  return (0,immer_esm/* produce */.Uy)(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case constants/* ACTION_SET_WORKFLOWS */.QM: {
        const { status, workflows } = payload;
        draft.status = status;
        if (workflows?.length > 0) {
          let defaultWorkflow = workflows[0];
          defaultWorkflow = {
            ...defaultWorkflow,
            stages: defaultWorkflow.stages.map((stage) => ({
              ...stage,
              color: stage?.color ?? constants/* STAGE_COLOR_DEFAULT */.FT
            }))
          };
          draft.serverState.workflows = workflows;
          draft.serverState.currentWorkflow = defaultWorkflow;
          draft.clientState.currentWorkflow.data = defaultWorkflow;
          draft.clientState.currentWorkflow.hasDeletedServerStages = false;
        }
        break;
      }
      case constants/* ACTION_DELETE_STAGE */.x4: {
        const { stageId } = payload;
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.filter(
          (stage) => (stage?.id ?? stage.__temp_key__) !== stageId
        );
        if (!currentWorkflow.hasDeletedServerStages) {
          draft.clientState.currentWorkflow.hasDeletedServerStages = !!state.serverState.currentWorkflow.stages.find((stage) => stage.id === stageId);
        }
        break;
      }
      case constants/* ACTION_ADD_STAGE */.Ot: {
        const { currentWorkflow } = state.clientState;
        if (!currentWorkflow.data) {
          draft.clientState.currentWorkflow.data = {
            stages: []
          };
        }
        const newTempKey = getMaxTempKey(draft.clientState.currentWorkflow.data.stages);
        draft.clientState.currentWorkflow.data.stages.push({
          ...payload,
          color: payload?.color ?? constants/* STAGE_COLOR_DEFAULT */.FT,
          __temp_key__: newTempKey
        });
        break;
      }
      case constants/* ACTION_UPDATE_STAGE */.Nj: {
        const { currentWorkflow } = state.clientState;
        const { stageId, ...modified } = payload;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.map(
          (stage) => (stage.id ?? stage.__temp_key__) === stageId ? {
            ...stage,
            ...modified
          } : stage
        );
        break;
      }
      case constants/* ACTION_UPDATE_STAGE_POSITION */.$k: {
        const {
          currentWorkflow: {
            data: { stages }
          }
        } = state.clientState;
        const { newIndex, oldIndex } = payload;
        if (newIndex >= 0 && newIndex < stages.length) {
          const stage = stages[oldIndex];
          let newStages = [...stages];
          newStages.splice(oldIndex, 1);
          newStages.splice(newIndex, 0, stage);
          draft.clientState.currentWorkflow.data.stages = newStages;
        }
        break;
      }
      default:
        break;
    }
    if (state.clientState.currentWorkflow.data) {
      draft.clientState.currentWorkflow.isDirty = !isEqual_default()(
        (0,immer_esm/* current */.Vk)(draft.clientState.currentWorkflow).data,
        draft.serverState.currentWorkflow
      );
    }
  });
}
const getMaxTempKey = (stages = []) => {
  const ids = stages.map((stage) => stage.id ?? stage.__temp_key__);
  return Math.max(...ids, -1) + 1;
};

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/useInjectReducer.js


function useInjectReducer(namespace, reducer) {
  const store = (0,es.useStore)();
  (0,react.useEffect)(() => {
    store.injectReducer(namespace, reducer);
  }, [store, namespace, reducer]);
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/index.js


// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(53752);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/getWorkflowValidationSchema.js

function getWorkflowValidationSchema({ formatMessage }) {
  return yup_es/* object */.Ry({
    stages: yup_es/* array */.IX().of(
      yup_es/* object */.Ry().shape({
        name: yup_es/* string */.Z_().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.name",
            defaultMessage: "Name is required"
          })
        ).max(
          255,
          formatMessage({
            id: "Settings.review-workflows.validation.stage.max-length",
            defaultMessage: "Name can not be longer than 255 characters"
          })
        ),
        color: yup_es/* string */.Z_().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.color",
            defaultMessage: "Color is required"
          })
        ).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)
      })
    )
  });
}

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/StageDragPreview.js






const Toggle = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
function StageDragPreview({ name }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      gap: 3,
      hasRadius: true,
      padding: 3,
      shadow: "tableShadow",
      width: (0,helper_plugin_esm.pxToRem)(300)
    },
    /* @__PURE__ */ react.createElement(
      Toggle,
      {
        alignItems: "center",
        background: "neutral200",
        borderRadius: "50%",
        height: 6,
        justifyContent: "center",
        width: 6
      },
      /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, { width: `${8 / 16}rem` })
    ),
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, name)
  );
}
StageDragPreview.propTypes = {
  name: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/index.js


// EXTERNAL MODULE: ./.cache/admin/src/components/DragLayer/index.js + 1 modules
var DragLayer = __webpack_require__(27887);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/ReviewWorkflows.js


















function renderDragLayerItem({ type, item }) {
  switch (type) {
    case constants/* DRAG_DROP_TYPES */.uL.STAGE:
      return /* @__PURE__ */ react.createElement(StageDragPreview, { ...item });
    default:
      return null;
  }
}
function ReviewWorkflowsPage() {
  const { trackUsage } = (0,helper_plugin_esm.useTracking)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es.useDispatch)();
  const { put } = (0,helper_plugin_esm.useFetchClient)();
  const { formatAPIError } = (0,helper_plugin_esm.useAPIErrorHandler)();
  const toggleNotification = (0,helper_plugin_esm.useNotification)();
  const { workflows, status: workflowStatus, refetch: refetchWorkflow } = (0,useReviewWorkflows/* useReviewWorkflows */.n)();
  const {
    status,
    clientState: {
      currentWorkflow: {
        data: currentWorkflow,
        isDirty: currentWorkflowIsDirty,
        hasDeletedServerStages: currentWorkflowHasDeletedServerStages
      }
    }
  } = (0,es.useSelector)((state) => state?.[constants/* REDUX_NAMESPACE */.sN] ?? initialState);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = (0,react.useState)(false);
  const { mutateAsync, isLoading } = (0,react_query_es.useMutation)(
    async ({ workflowId, stages }) => {
      const {
        data: { data }
      } = await put(`/admin/review-workflows/workflows/${workflowId}/stages`, {
        data: stages
      });
      return data;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
      }
    }
  );
  const updateWorkflowStages = async (workflowId, stages) => {
    try {
      const res = await mutateAsync({ workflowId, stages });
      return res;
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      return null;
    }
  };
  const submitForm = async () => {
    await updateWorkflowStages(currentWorkflow.id, currentWorkflow.stages);
    await refetchWorkflow();
    setIsConfirmDeleteDialogOpen(false);
  };
  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };
  const toggleConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen((prev) => !prev);
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    enableReinitialize: true,
    initialValues: currentWorkflow,
    async onSubmit() {
      if (currentWorkflowHasDeletedServerStages) {
        setIsConfirmDeleteDialogOpen(true);
      } else {
        submitForm();
      }
    },
    validationSchema: getWorkflowValidationSchema({ formatMessage }),
    validateOnChange: false
  });
  useInjectReducer(constants/* REDUX_NAMESPACE */.sN, reducer);
  (0,react.useEffect)(() => {
    dispatch(setWorkflows({ status: workflowStatus, data: workflows }));
  }, [workflowStatus, workflows, dispatch]);
  (0,react.useEffect)(() => {
    trackUsage("didViewWorkflow");
  }, []);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm.CheckPagePermissions, { permissions: permissions/* default */.Z.settings["review-workflows"].main }, /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(
    helper_plugin_esm.SettingsPageTitle,
    {
      name: formatMessage({
        id: "Settings.review-workflows.page.title",
        defaultMessage: "Review Workflows"
      })
    }
  ), /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(DragLayer/* DragLayer */.r, { renderItem: renderDragLayerItem }), /* @__PURE__ */ react.createElement(formik_esm/* FormikProvider */.Hy, { value: formik }, /* @__PURE__ */ react.createElement(formik_esm/* Form */.l0, { onSubmit: formik.handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          type: "submit",
          size: "M",
          disabled: !currentWorkflowIsDirty,
          loading: !isConfirmDeleteDialogOpen && isLoading
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      title: formatMessage({
        id: "Settings.review-workflows.page.title",
        defaultMessage: "Review Workflows"
      }),
      subtitle: formatMessage(
        {
          id: "Settings.review-workflows.page.subtitle",
          defaultMessage: "{count, plural, one {# stage} other {# stages}}"
        },
        { count: currentWorkflow?.stages?.length ?? 0 }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, status === "loading" && /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.review-workflows.page.isLoading",
    defaultMessage: "Workflow is loading"
  })), /* @__PURE__ */ react.createElement(Stages, { stages: formik.values?.stages })))), /* @__PURE__ */ react.createElement(
    helper_plugin_esm.ConfirmDialog,
    {
      bodyText: {
        id: "Settings.review-workflows.page.delete.confirm.body",
        defaultMessage: "All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"
      },
      isConfirmButtonLoading: isLoading,
      isOpen: isConfirmDeleteDialogOpen,
      onToggleDialog: toggleConfirmDeleteDialog,
      onConfirm: handleConfirmDeleteDialog
    }
  ))));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/index.js

/* harmony default export */ const ReviewWorkflows = (ReviewWorkflowsPage);


/***/ }),

/***/ 7654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(81763);

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),

/***/ 81763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 7334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(79833);

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString(value).toLowerCase();
}

module.exports = toLower;


/***/ }),

/***/ 20573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P1: () => (/* binding */ createSelector)
});

// UNUSED EXPORTS: createSelectorCreator, createStructuredSelector, defaultEqualityCheck, defaultMemoize

;// CONCATENATED MODULE: ./node_modules/reselect/es/defaultMemoize.js
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}
;// CONCATENATED MODULE: ./node_modules/reselect/es/index.js



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ })

}]);