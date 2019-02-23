(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
    typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
    (global = global || self, global.ReactTabber = factory(global.React, global.PropTypes));
}(this, function (React, PropTypes) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var switchFuncPropTypes = {
        fnSwitchTo: PropTypes.func,
        fnSwitchPrevious: PropTypes.func,
        fnSwitchNext: PropTypes.func,
        fnSwitchFirst: PropTypes.func,
        fnSwitchLast: PropTypes.func
    };
    var entriesPropType = PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node.isRequired,
        panel: PropTypes.node.isRequired,
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }));
    var necessaryPropTypes = {
        entries: entriesPropType,
        mode: PropTypes.string,
        keyboardSwitch: PropTypes.bool,
        delayTriggerLatency: PropTypes.number,
        tabContainerClassName: PropTypes.string,
        labelContainerClassName: PropTypes.string,
        showHeaderLabelContainer: PropTypes.bool,
        showFooterLabelContainer: PropTypes.bool,
        labelItemClassName: PropTypes.string,
        panelContainerClassName: PropTypes.string,
        panelItemClassName: PropTypes.string
    };
    var callbackPropTypes = {
        onUpdateActivePosition: PropTypes.func,
        onUpdateTargetPosition: PropTypes.func,
        onSwitching: PropTypes.func,
        onSwitched: PropTypes.func
    };
    var eventPropTypes = {
        triggerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        delayTriggerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        delayTriggerCancelEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    };
    var normalizedEventPropTypes = {
        triggerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        delayTriggerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        delayTriggerCancelEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    };
    var publicPropTypes = __assign({}, necessaryPropTypes, callbackPropTypes, eventPropTypes, { activePosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) });
    var tabPropTypes = __assign({}, necessaryPropTypes, callbackPropTypes, normalizedEventPropTypes, { activePosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) });
    var tabContainerPropTypes = __assign({}, necessaryPropTypes, normalizedEventPropTypes, switchFuncPropTypes, { tabContext: PropTypes.object, currentIndex: PropTypes.number });
    var labelContainerPropTypes = __assign({}, normalizedEventPropTypes, switchFuncPropTypes, { entries: entriesPropType, mode: PropTypes.string, keyboardSwitch: PropTypes.bool, delayTriggerLatency: PropTypes.number, labelContainerClassName: PropTypes.string, labelItemClassName: PropTypes.string, tabContext: PropTypes.object, currentIndex: PropTypes.number, side: PropTypes.string });
    var panelContainerPropTypes = {
        entries: PropTypes.arrayOf(PropTypes.object),
        mode: PropTypes.string,
        panelContainerClassName: PropTypes.string,
        panelItemClassName: PropTypes.string,
        tabContext: PropTypes.object,
        currentIndex: PropTypes.number,
        refLabelSide: PropTypes.string
    };

    var defaultProps = {
        entries: [],
        mode: "horizontal" /* Horizontal */,
        keyboardSwitch: true,
        triggerEvents: ['onClick'],
        delayTriggerLatency: 200,
        tabContainerClassName: 'tab-container',
        labelContainerClassName: 'label-container',
        showHeaderLabelContainer: true,
        showFooterLabelContainer: false,
        labelItemClassName: 'label-item',
        panelContainerClassName: 'panel-container',
        panelItemClassName: 'panel-item',
    };

    var RE_WHITESPACES = /\s+/;
    function normalizeEvents(events) {
        if (!events) {
            return [];
        }
        var arrayed = Array.isArray(events) ? events : String(events).split(RE_WHITESPACES);
        var normalized = arrayed.filter(Boolean);
        return normalized;
    }

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Label.propTypes = {
            disabled: PropTypes.bool,
            hidden: PropTypes.bool
        };
        return Label;
    }(React.Component));

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Panel = /** @class */ (function (_super) {
        __extends$1(Panel, _super);
        function Panel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Panel;
    }(React.Component));

    var __assign$1 = (undefined && undefined.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    function parseTabEntries(propEntries, children) {
        var entries = [];
        // prop entries
        if (propEntries && propEntries.length) {
            entries.push.apply(entries, propEntries.map(function (_entry) {
                var entry = __assign$1({}, _entry);
                if (entry.key === undefined) {
                    entry.key = null;
                }
                return entry;
            }));
        }
        // children
        if (children) {
            var currentLabelProps_1 = {};
            var currentLabelItems_1 = [];
            var currentPanelProps_1 = {};
            var currentPanelItems_1 = [];
            var key_1;
            var disabled_1;
            var hidden_1;
            var pushEntry_1 = function () {
                entries.push({
                    labelProps: currentLabelProps_1,
                    label: currentLabelItems_1,
                    panelProps: currentPanelProps_1,
                    panel: currentPanelItems_1,
                    key: key_1,
                    disabled: disabled_1,
                    hidden: hidden_1
                });
            };
            React__default.Children.forEach(children, function (child) {
                var element = child;
                if (element.type && element.type === Label) {
                    if (currentLabelItems_1.length) { // end of previous entry
                        pushEntry_1();
                    }
                    var _a = element.props, itemDisabled = _a.disabled, itemHidden = _a.hidden, restLabelProps = __rest(_a, ["disabled", "hidden"]);
                    currentLabelProps_1 = restLabelProps;
                    currentLabelItems_1 = [];
                    if (Array.isArray(element.props.children)) {
                        currentLabelItems_1.push.apply(currentLabelItems_1, element.props.children);
                    }
                    else {
                        currentLabelItems_1.push(element.props.children);
                    }
                    currentPanelProps_1 = {};
                    currentPanelItems_1 = [];
                    key_1 = typeof element.key !== 'undefined' ? element.key : entries.length;
                    disabled_1 = itemDisabled;
                    hidden_1 = itemHidden;
                }
                else {
                    if (!currentLabelItems_1.length) {
                        currentLabelItems_1.push('');
                    }
                    if (element.type && element.type === Panel) {
                        currentPanelProps_1 = __assign$1({}, currentPanelProps_1, element.props);
                        if (Array.isArray(element.props.children)) {
                            currentPanelItems_1.push.apply(currentPanelItems_1, element.props.children);
                        }
                        else {
                            currentPanelItems_1.push(element.props.children);
                        }
                    }
                    else {
                        currentPanelItems_1.push(element);
                    }
                }
            });
            if (currentLabelItems_1.length) {
                pushEntry_1();
            }
        }
        return entries;
    }

    var invalidNormalizedPosition = {
        index: -1,
        key: undefined
    };
    function normalizePosition(entries, position) {
        if (typeof position === 'number') {
            return {
                index: position,
                key: entries[position] && entries[position].key
            };
        }
        else if (isFinite(position)) {
            var index = parseInt(position);
            return {
                index: index,
                key: entries[index].key
            };
        }
        else if (position) {
            var result_1 = undefined;
            entries.some(function (entry, i) {
                if (entry.key === position) {
                    result_1 = {
                        index: i,
                        key: entry.key
                    };
                    return true;
                }
                return false;
            });
            return result_1 || invalidNormalizedPosition;
        }
        else {
            return invalidNormalizedPosition;
        }
    }

    var PREFIX = '__react-tabber';
    var NUMBER_MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var currentTabberContainerId = -1;
    function getNextTabContainerId() {
        currentTabberContainerId = (currentTabberContainerId + 1) % NUMBER_MAX_SAFE_INTEGER;
        return currentTabberContainerId;
    }
    function getLabelItemId(tabberId, side, index) {
        return PREFIX + "__" + tabberId + "__" + side + "__label__" + index;
    }
    function getPanelItemId(tabberId, index) {
        return PREFIX + "__" + tabberId + "__panel__" + index;
    }

    var ClassNameSuffix = {
        active: 'active',
        inactive: 'inactive',
        disabled: 'disabled',
        hidden: 'hidden',
        header: 'header',
        footer: 'footer'
    };

    function createEventHandler(events, handler) {
        var eventHandlers = {};
        events.forEach(function (event) {
            eventHandlers[event] = handler;
        });
        return eventHandlers;
    }

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$2 = (undefined && undefined.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    var UP = 'Up';
    var DOWN = 'Down';
    var LEFT = 'Left';
    var RIGHT = 'Right';
    var ARROW_UP = 'ArrowUp';
    var ARROW_DOWN = 'ArrowDown';
    var ARROW_LEFT = 'ArrowLeft';
    var ARROW_RIGHT = 'ArrowRight';
    var TAB = 'Tab';
    var HOME = 'Home';
    var END = 'End';
    var SPACE = ' ';
    var ENTER = 'Enter';
    var LabelContainer = /** @class */ (function (_super) {
        __extends$2(LabelContainer, _super);
        function LabelContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LabelContainer.prototype.onKeyDown = function (e, pos) {
            var _a = this.props, fnSwitchTo = _a.fnSwitchTo, fnSwitchPrevious = _a.fnSwitchPrevious, fnSwitchNext = _a.fnSwitchNext, fnSwitchFirst = _a.fnSwitchFirst, fnSwitchLast = _a.fnSwitchLast;
            var switchResult;
            if (e.key) {
                switch (e.key) {
                    case UP:
                    case LEFT:
                    case ARROW_UP:
                    case ARROW_LEFT:
                        switchResult = fnSwitchPrevious();
                        break;
                    case DOWN:
                    case RIGHT:
                    case ARROW_DOWN:
                    case ARROW_RIGHT:
                        switchResult = fnSwitchNext();
                        break;
                    case TAB:
                        switchResult = e.shiftKey ? fnSwitchPrevious() : fnSwitchNext();
                        if (switchResult) {
                            e.preventDefault();
                        }
                        break;
                    case HOME:
                        switchResult = fnSwitchFirst();
                        break;
                    case END:
                        switchResult = fnSwitchLast();
                        break;
                    case SPACE:
                    case ENTER:
                        switchResult = fnSwitchTo(pos);
                        break;
                }
            }
            if (switchResult) {
                var targetNode = e.currentTarget.parentNode.childNodes[switchResult.index];
                targetNode && targetNode.focus && targetNode.focus();
                e.preventDefault();
            }
        };
        LabelContainer.prototype.render = function () {
            var _this = this;
            var _a = this.props, entries = _a.entries, mode = _a.mode, keyboardSwitch = _a.keyboardSwitch, triggerEvents = _a.triggerEvents, labelContainerClassName = _a.labelContainerClassName, labelItemClassName = _a.labelItemClassName, delayTriggerEvents = _a.delayTriggerEvents, delayTriggerCancelEvents = _a.delayTriggerCancelEvents, delayTriggerLatency = _a.delayTriggerLatency, tabContext = _a.tabContext, currentIndex = _a.currentIndex, side = _a.side, fnSwitchTo = _a.fnSwitchTo;
            var labelContainerSideClassName = labelContainerClassName + '-' + side;
            var labelContainerModeClassName = labelContainerClassName + '-' + mode;
            var labelContainerSideModeClassName = labelContainerClassName + '-' + side + '-' + mode;
            var labelContainerAllClassName = labelContainerClassName + ' ' + labelContainerSideClassName + ' ' + labelContainerModeClassName + ' ' + labelContainerSideModeClassName;
            var labelItemActiveClassName = labelItemClassName + '-' + ClassNameSuffix.active;
            var labelItemInactiveClassName = labelItemClassName + '-' + ClassNameSuffix.inactive;
            var labelItemDisabledClassName = labelItemClassName + '-' + ClassNameSuffix.disabled;
            var labelItemHiddenClassName = labelItemClassName + '-' + ClassNameSuffix.hidden;
            var tabberId = tabContext.tabberId;
            return React__default.createElement("div", { className: labelContainerAllClassName, role: "tablist" }, entries.map(function (entry, index) {
                var labelProps = entry.labelProps, key = entry.key, disabled = entry.disabled, hidden = entry.hidden;
                var pos = { index: index, key: key };
                var labelDelayTriggerCancelProps;
                var labelDelayTriggerProps;
                var labelTriggerProps;
                if (!disabled && !hidden) {
                    var doSwitch_1 = function () {
                        clearTimeout(tabContext.delayTimeout);
                        fnSwitchTo(pos);
                    };
                    var localDelayTimeout_1;
                    var delayDoSwitch = (delayTriggerLatency) <= 0 ?
                        doSwitch_1 :
                        function () {
                            clearTimeout(tabContext.delayTimeout);
                            localDelayTimeout_1 = tabContext.delayTimeout = setTimeout(doSwitch_1, delayTriggerLatency);
                        };
                    var cancelDelayDoSwitch = function () {
                        if (localDelayTimeout_1 === tabContext.delayTimeout) {
                            clearTimeout(localDelayTimeout_1);
                        }
                    };
                    if (delayTriggerEvents.length) {
                        labelDelayTriggerCancelProps = createEventHandler(delayTriggerCancelEvents, cancelDelayDoSwitch);
                        labelDelayTriggerProps = createEventHandler(delayTriggerEvents, delayDoSwitch);
                    }
                    labelTriggerProps = createEventHandler(triggerEvents, doSwitch_1);
                }
                var isActive = index === currentIndex;
                var labelItemStatusClassName = isActive ? labelItemActiveClassName : labelItemInactiveClassName;
                var labelItemAllClassName = labelItemClassName + ' ' + labelItemStatusClassName;
                if (disabled) {
                    labelItemAllClassName += ' ' + labelItemDisabledClassName;
                }
                if (hidden) {
                    labelItemAllClassName += ' ' + labelItemHiddenClassName;
                }
                return React__default.createElement("label", __assign$2({}, labelProps, labelDelayTriggerCancelProps, labelDelayTriggerProps, labelTriggerProps, { className: labelItemAllClassName, tabIndex: 0, id: getLabelItemId(tabberId, side, index), role: "tab", "aria-controls": getPanelItemId(tabberId, index), "aria-selected": isActive, "aria-expanded": isActive, key: key ? 'key-' + key : 'index-' + index, onKeyDown: keyboardSwitch ? function (e) { return _this.onKeyDown(e, pos); } : undefined }), entry.label);
            }));
        };
        LabelContainer.propTypes = labelContainerPropTypes;
        return LabelContainer;
    }(React.Component));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$3 = (undefined && undefined.__assign) || function () {
        __assign$3 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$3.apply(this, arguments);
    };
    var PanelContainer = /** @class */ (function (_super) {
        __extends$3(PanelContainer, _super);
        function PanelContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PanelContainer.prototype.render = function () {
            var _a = this.props, entries = _a.entries, mode = _a.mode, panelContainerClassName = _a.panelContainerClassName, panelItemClassName = _a.panelItemClassName, tabContext = _a.tabContext, currentIndex = _a.currentIndex, refLabelSide = _a.refLabelSide;
            var panelContainerModeClassName = panelContainerClassName + '-' + mode;
            var panelContainerAllClassName = panelContainerClassName + ' ' + panelContainerModeClassName;
            var panelItemActiveClassName = panelItemClassName + '-' + ClassNameSuffix.active;
            var panelItemInactiveClassName = panelItemClassName + '-' + ClassNameSuffix.inactive;
            var panelItemDisabledClassName = panelItemClassName + '-' + ClassNameSuffix.disabled;
            var panelItemHiddenClassName = panelItemClassName + '-' + ClassNameSuffix.hidden;
            var tabberId = tabContext.tabberId;
            return React__default.createElement("div", { className: panelContainerAllClassName }, entries.map(function (entry, index) {
                var panelProps = entry.panelProps, key = entry.key, disabled = entry.disabled, hidden = entry.hidden;
                var isActive = index === currentIndex;
                var panelItemStatusClassName = isActive ? panelItemActiveClassName : panelItemInactiveClassName;
                var panelItemAllClassName = panelItemClassName + ' ' + panelItemStatusClassName;
                if (disabled) {
                    panelItemAllClassName += ' ' + panelItemDisabledClassName;
                }
                if (hidden) {
                    panelItemAllClassName += ' ' + panelItemHiddenClassName;
                }
                return React__default.createElement("div", __assign$3({}, panelProps, { className: panelItemAllClassName, id: getPanelItemId(tabberId, index), role: "tabpanel", "aria-labelledby": getLabelItemId(tabberId, refLabelSide, index), "aria-hidden": !isActive, key: key ? 'key-' + key : 'index-' + index }), entry.panel);
            }));
        };
        PanelContainer.propTypes = panelContainerPropTypes;
        return PanelContainer;
    }(React.Component));

    function TabContainer(props) {
        var entries = props.entries, mode = props.mode, keyboardSwitch = props.keyboardSwitch, delayTriggerLatency = props.delayTriggerLatency, tabContainerClassName = props.tabContainerClassName, labelContainerClassName = props.labelContainerClassName, labelItemClassName = props.labelItemClassName, panelContainerClassName = props.panelContainerClassName, panelItemClassName = props.panelItemClassName, showHeaderLabelContainer = props.showHeaderLabelContainer, showFooterLabelContainer = props.showFooterLabelContainer, triggerEvents = props.triggerEvents, delayTriggerEvents = props.delayTriggerEvents, delayTriggerCancelEvents = props.delayTriggerCancelEvents, fnSwitchTo = props.fnSwitchTo, fnSwitchPrevious = props.fnSwitchPrevious, fnSwitchNext = props.fnSwitchNext, fnSwitchFirst = props.fnSwitchFirst, fnSwitchLast = props.fnSwitchLast, tabContext = props.tabContext, currentIndex = props.currentIndex;
        var tabContainerModeClassName = tabContainerClassName + '-' + mode;
        return React__default.createElement("div", { className: tabContainerClassName + ' ' + tabContainerModeClassName },
            showHeaderLabelContainer ?
                React__default.createElement(LabelContainer, { entries: entries, mode: mode, keyboardSwitch: keyboardSwitch, delayTriggerLatency: delayTriggerLatency, labelContainerClassName: labelContainerClassName, labelItemClassName: labelItemClassName, tabContext: tabContext, currentIndex: currentIndex, side: ClassNameSuffix.header, triggerEvents: triggerEvents, delayTriggerEvents: delayTriggerEvents, delayTriggerCancelEvents: delayTriggerCancelEvents, fnSwitchTo: fnSwitchTo, fnSwitchPrevious: fnSwitchPrevious, fnSwitchNext: fnSwitchNext, fnSwitchFirst: fnSwitchFirst, fnSwitchLast: fnSwitchLast }) : null,
            React__default.createElement(PanelContainer, { mode: mode, panelContainerClassName: panelContainerClassName, panelItemClassName: panelItemClassName, tabContext: tabContext, currentIndex: currentIndex, entries: entries, refLabelSide: showHeaderLabelContainer || !showFooterLabelContainer ? ClassNameSuffix.header : ClassNameSuffix.footer }),
            showFooterLabelContainer ?
                React__default.createElement(LabelContainer, { entries: entries, mode: mode, keyboardSwitch: keyboardSwitch, delayTriggerLatency: delayTriggerLatency, labelContainerClassName: labelContainerClassName, labelItemClassName: labelItemClassName, tabContext: tabContext, currentIndex: currentIndex, side: ClassNameSuffix.footer, triggerEvents: triggerEvents, delayTriggerEvents: delayTriggerEvents, delayTriggerCancelEvents: delayTriggerCancelEvents, fnSwitchTo: fnSwitchTo, fnSwitchPrevious: fnSwitchPrevious, fnSwitchNext: fnSwitchNext, fnSwitchFirst: fnSwitchFirst, fnSwitchLast: fnSwitchLast }) : null);
    }
    TabContainer.propTypes = tabContainerPropTypes;

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var SwitchDirection;
    (function (SwitchDirection) {
        SwitchDirection[SwitchDirection["Backward"] = 0] = "Backward";
        SwitchDirection[SwitchDirection["Forward"] = 1] = "Forward";
    })(SwitchDirection || (SwitchDirection = {}));
    var Tab = /** @class */ (function (_super) {
        __extends$4(Tab, _super);
        function Tab(props) {
            var _this = _super.call(this, props) || this;
            _this.tabContext = {
                tabberId: getNextTabContainerId(),
                delayTimeout: 0
            };
            _this.prevPosition = invalidNormalizedPosition;
            _this.currentPosition = invalidNormalizedPosition;
            _this.switchTo = _this.switchTo.bind(_this);
            _this._switchNeighbor = _this._switchNeighbor.bind(_this);
            _this.switchPrevious = _this.switchPrevious.bind(_this);
            _this.switchNext = _this.switchNext.bind(_this);
            _this.switchFirst = _this.switchFirst.bind(_this);
            _this.switchLast = _this.switchLast.bind(_this);
            _this.state = {
                manageTargetPosition: true,
                targetPosition: -1,
            };
            return _this;
        }
        Tab.getDerivedStateFromProps = function (props) {
            var activePosition = props.activePosition;
            if (activePosition === undefined ||
                activePosition === null ||
                (typeof activePosition === 'number' && !isFinite(activePosition))) {
                return {
                    manageTargetPosition: true
                };
            }
            return {
                manageTargetPosition: false,
                targetPosition: activePosition
            };
        };
        Tab.prototype.componentWillUnmount = function () {
            clearTimeout(this.tabContext.delayTimeout);
        };
        Tab.prototype.switchTo = function (position) {
            var manageTargetPosition = this.state.manageTargetPosition;
            var _a = this.props, onUpdateActivePosition = _a.onUpdateActivePosition, onUpdateTargetPosition = _a.onUpdateTargetPosition;
            if (manageTargetPosition) {
                if (!onUpdateTargetPosition || onUpdateTargetPosition(position) !== false) {
                    this.setState({
                        targetPosition: position.index
                    });
                }
            }
            else if (onUpdateActivePosition) {
                onUpdateActivePosition(position);
            }
            return position;
        };
        Tab.prototype._switchNeighbor = function (fromIndex, direction, options) {
            var includeDisabled, includeHidden, loop, exclude;
            if (options) {
                includeDisabled = options.includeDisabled;
                includeHidden = options.includeHidden;
                loop = options.loop;
                exclude = options.exclude;
            }
            var entries = this.props.entries;
            var excludeIndecies = exclude ? exclude.map(function (pos) { return normalizePosition(entries, pos).index; }) : [];
            var itemCount = entries.length;
            var maxIterationCount = -1;
            if (loop) {
                if (fromIndex >= 0 && fromIndex < itemCount) {
                    maxIterationCount = itemCount - 1;
                }
                else {
                    maxIterationCount = itemCount;
                }
            }
            else if (direction === SwitchDirection.Backward) {
                maxIterationCount = fromIndex;
            }
            else if (direction === SwitchDirection.Forward) {
                maxIterationCount = itemCount - fromIndex - 1;
            }
            var iterationStep = direction === SwitchDirection.Backward ? -1 : 1;
            for (var i = 1; i <= maxIterationCount; i++) {
                var tabItemIndex = (fromIndex + i * iterationStep + itemCount) % itemCount;
                if (excludeIndecies.indexOf(tabItemIndex) >= 0) {
                    continue;
                }
                var _a = entries[tabItemIndex], disabled = _a.disabled, hidden = _a.hidden;
                if ((!disabled && !hidden) ||
                    (includeDisabled && !hidden) ||
                    (!disabled && includeHidden) ||
                    (includeDisabled && includeHidden)) {
                    return this.switchTo(normalizePosition(entries, tabItemIndex));
                }
            }
        };
        Tab.prototype.switchPrevious = function (options) {
            return this._switchNeighbor(this.currentPosition.index, SwitchDirection.Backward, options);
        };
        Tab.prototype.switchNext = function (options) {
            return this._switchNeighbor(this.currentPosition.index, SwitchDirection.Forward, options);
        };
        Tab.prototype.switchFirst = function (options) {
            return this._switchNeighbor(-1, SwitchDirection.Forward, options);
        };
        Tab.prototype.switchLast = function (options) {
            return this._switchNeighbor(this.props.entries.length, SwitchDirection.Backward, options);
        };
        Tab.prototype.render = function () {
            var _a = this, props = _a.props, state = _a.state, tabContext = _a.tabContext, normalizedPrevPosition = _a.prevPosition;
            var entries = props.entries, mode = props.mode, keyboardSwitch = props.keyboardSwitch, delayTriggerLatency = props.delayTriggerLatency, tabContainerClassName = props.tabContainerClassName, labelContainerClassName = props.labelContainerClassName, labelItemClassName = props.labelItemClassName, panelContainerClassName = props.panelContainerClassName, panelItemClassName = props.panelItemClassName, showHeaderLabelContainer = props.showHeaderLabelContainer, showFooterLabelContainer = props.showFooterLabelContainer, triggerEvents = props.triggerEvents, delayTriggerEvents = props.delayTriggerEvents, delayTriggerCancelEvents = props.delayTriggerCancelEvents;
            var prevIndex = normalizedPrevPosition.index;
            var targetPosition = state.targetPosition;
            var normalizedTargetPosition = normalizePosition(entries, targetPosition);
            var targetIndex = normalizedTargetPosition.index;
            var entryCount = entries.length;
            var currentIndex;
            if (targetIndex === -1) {
                currentIndex = entryCount > 0 ? 0 : -1;
                this.currentPosition = normalizePosition(entries, currentIndex);
            }
            else if (targetIndex < entryCount) {
                currentIndex = targetIndex;
                this.currentPosition = normalizedTargetPosition;
            }
            else {
                currentIndex = entryCount - 1;
                this.currentPosition = normalizePosition(entries, currentIndex);
            }
            if (prevIndex !== currentIndex && props.onSwitching) {
                props.onSwitching(normalizedPrevPosition, this.currentPosition);
            }
            return React__default.createElement(TabContainer, { entries: entries, mode: mode, keyboardSwitch: keyboardSwitch, delayTriggerLatency: delayTriggerLatency, tabContainerClassName: tabContainerClassName, labelContainerClassName: labelContainerClassName, labelItemClassName: labelItemClassName, panelContainerClassName: panelContainerClassName, panelItemClassName: panelItemClassName, showHeaderLabelContainer: showHeaderLabelContainer, showFooterLabelContainer: showFooterLabelContainer, triggerEvents: triggerEvents, delayTriggerEvents: delayTriggerEvents, delayTriggerCancelEvents: delayTriggerCancelEvents, fnSwitchTo: this.switchTo, fnSwitchPrevious: this.switchPrevious, fnSwitchNext: this.switchNext, fnSwitchFirst: this.switchFirst, fnSwitchLast: this.switchLast, tabContext: tabContext, currentIndex: currentIndex });
        };
        Tab.prototype.handleIndexChange = function () {
            var _a = this, props = _a.props, prevPosition = _a.prevPosition, currentPosition = _a.currentPosition;
            var onSwitched = props.onSwitched;
            if (prevPosition.index !== currentPosition.index && onSwitched) {
                onSwitched(prevPosition, currentPosition);
            }
            this.prevPosition = currentPosition;
        };
        Tab.prototype.componentDidMount = function () {
            this.handleIndexChange();
        };
        Tab.prototype.componentDidUpdate = function () {
            this.handleIndexChange();
        };
        Tab.propTypes = tabPropTypes;
        Tab.defaultProps = defaultProps;
        return Tab;
    }(React__default.Component));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$4 = (undefined && undefined.__assign) || function () {
        __assign$4 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$4.apply(this, arguments);
    };
    var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var ReactTabber = /** @class */ (function (_super) {
        __extends$5(ReactTabber, _super);
        function ReactTabber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReactTabber.prototype.render = function () {
            var _a = this.props, entries = _a.entries, children = _a.children, triggerEvents = _a.triggerEvents, delayTriggerEvents = _a.delayTriggerEvents, delayTriggerCancelEvents = _a.delayTriggerCancelEvents, props = __rest$1(_a, ["entries", "children", "triggerEvents", "delayTriggerEvents", "delayTriggerCancelEvents"]);
            return React__default.createElement(Tab, __assign$4({}, props, { entries: parseTabEntries(entries, children), triggerEvents: normalizeEvents(triggerEvents), delayTriggerEvents: normalizeEvents(delayTriggerEvents), delayTriggerCancelEvents: normalizeEvents(delayTriggerCancelEvents) }));
        };
        ReactTabber.Label = Label;
        ReactTabber.Panel = Panel;
        ReactTabber.propTypes = publicPropTypes;
        ReactTabber.defaultProps = defaultProps;
        return ReactTabber;
    }(React.Component));

    return ReactTabber;

}));
