"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-responsive";
exports.ids = ["vendor-chunks/react-responsive"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-responsive/dist/cjs/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-responsive/dist/cjs/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar matchMedia = __webpack_require__(/*! matchmediaquery */ \"(ssr)/./node_modules/matchmediaquery/index.js\");\nvar hyphenate = __webpack_require__(/*! hyphenate-style-name */ \"(ssr)/./node_modules/hyphenate-style-name/index.cjs.js\");\nvar shallowEqual = __webpack_require__(/*! shallow-equal */ \"(ssr)/./node_modules/shallow-equal/dist/index.js\");\nvar PropTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nconst stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);\n// media types\nconst types = {\n    all: PropTypes.bool,\n    grid: PropTypes.bool,\n    aural: PropTypes.bool,\n    braille: PropTypes.bool,\n    handheld: PropTypes.bool,\n    print: PropTypes.bool,\n    projection: PropTypes.bool,\n    screen: PropTypes.bool,\n    tty: PropTypes.bool,\n    tv: PropTypes.bool,\n    embossed: PropTypes.bool\n};\n// properties that match media queries\nconst matchers = {\n    orientation: PropTypes.oneOf(['portrait', 'landscape']),\n    scan: PropTypes.oneOf(['progressive', 'interlace']),\n    aspectRatio: PropTypes.string,\n    deviceAspectRatio: PropTypes.string,\n    height: stringOrNumber,\n    deviceHeight: stringOrNumber,\n    width: stringOrNumber,\n    deviceWidth: stringOrNumber,\n    color: PropTypes.bool,\n    colorIndex: PropTypes.bool,\n    monochrome: PropTypes.bool,\n    resolution: stringOrNumber,\n    type: Object.keys(types)\n};\n// eslint-disable-next-line @typescript-eslint/no-unused-vars\nconst { type, ...featureMatchers } = matchers;\n// media features\nconst features = {\n    minAspectRatio: PropTypes.string,\n    maxAspectRatio: PropTypes.string,\n    minDeviceAspectRatio: PropTypes.string,\n    maxDeviceAspectRatio: PropTypes.string,\n    minHeight: stringOrNumber,\n    maxHeight: stringOrNumber,\n    minDeviceHeight: stringOrNumber,\n    maxDeviceHeight: stringOrNumber,\n    minWidth: stringOrNumber,\n    maxWidth: stringOrNumber,\n    minDeviceWidth: stringOrNumber,\n    maxDeviceWidth: stringOrNumber,\n    minColor: PropTypes.number,\n    maxColor: PropTypes.number,\n    minColorIndex: PropTypes.number,\n    maxColorIndex: PropTypes.number,\n    minMonochrome: PropTypes.number,\n    maxMonochrome: PropTypes.number,\n    minResolution: stringOrNumber,\n    maxResolution: stringOrNumber,\n    ...featureMatchers\n};\nconst all = { ...types, ...features };\nvar mq = {\n    all: all,\n    types: types,\n    matchers: matchers,\n    features: features\n};\n\nconst negate = (cond) => `not ${cond}`;\nconst keyVal = (k, v) => {\n    const realKey = hyphenate(k);\n    // px shorthand\n    if (typeof v === 'number') {\n        v = `${v}px`;\n    }\n    if (v === true) {\n        return realKey;\n    }\n    if (v === false) {\n        return negate(realKey);\n    }\n    return `(${realKey}: ${v})`;\n};\nconst join = (conds) => conds.join(' and ');\nconst toQuery = (obj) => {\n    const rules = [];\n    Object.keys(mq.all).forEach((k) => {\n        const v = obj[k];\n        if (v != null) {\n            rules.push(keyVal(k, v));\n        }\n    });\n    return join(rules);\n};\n\nconst Context = react.createContext(undefined);\n\nconst makeQuery = (settings) => settings.query || toQuery(settings);\nconst hyphenateKeys = (obj) => {\n    if (!obj)\n        return undefined;\n    const keys = Object.keys(obj);\n    return keys.reduce((result, key) => {\n        result[hyphenate(key)] = obj[key];\n        return result;\n    }, {});\n};\nconst useIsUpdate = () => {\n    const ref = react.useRef(false);\n    react.useEffect(() => {\n        ref.current = true;\n    }, []);\n    return ref.current;\n};\nconst useDevice = (deviceFromProps) => {\n    const deviceFromContext = react.useContext(Context);\n    const getDevice = () => hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);\n    const [device, setDevice] = react.useState(getDevice);\n    react.useEffect(() => {\n        const newDevice = getDevice();\n        if (!shallowEqual.shallowEqualObjects(device, newDevice)) {\n            setDevice(newDevice);\n        }\n    }, [deviceFromProps, deviceFromContext]);\n    return device;\n};\nconst useQuery = (settings) => {\n    const getQuery = () => makeQuery(settings);\n    const [query, setQuery] = react.useState(getQuery);\n    react.useEffect(() => {\n        const newQuery = getQuery();\n        if (query !== newQuery) {\n            setQuery(newQuery);\n        }\n    }, [settings]);\n    return query;\n};\nconst useMatchMedia = (query, device) => {\n    const getMatchMedia = () => matchMedia(query, device || {}, !!device);\n    const [mq, setMq] = react.useState(getMatchMedia);\n    const isUpdate = useIsUpdate();\n    react.useEffect(() => {\n        if (isUpdate) {\n            // skip on mounting, it has already been set\n            const newMq = getMatchMedia();\n            setMq(newMq);\n            return () => {\n                if (newMq) {\n                    newMq.dispose();\n                }\n            };\n        }\n    }, [query, device]);\n    return mq;\n};\nconst useMatches = (mediaQuery) => {\n    const [matches, setMatches] = react.useState(mediaQuery.matches);\n    react.useEffect(() => {\n        const updateMatches = (ev) => {\n            setMatches(ev.matches);\n        };\n        mediaQuery.addListener(updateMatches);\n        setMatches(mediaQuery.matches);\n        return () => {\n            mediaQuery.removeListener(updateMatches);\n        };\n    }, [mediaQuery]);\n    return matches;\n};\nconst useMediaQuery = (settings, device, onChange) => {\n    const deviceSettings = useDevice(device);\n    const query = useQuery(settings);\n    if (!query)\n        throw new Error('Invalid or missing MediaQuery!');\n    const mq = useMatchMedia(query, deviceSettings);\n    const matches = useMatches(mq);\n    const isUpdate = useIsUpdate();\n    react.useEffect(() => {\n        if (isUpdate && onChange) {\n            onChange(matches);\n        }\n    }, [matches]);\n    react.useEffect(() => () => {\n        if (mq) {\n            mq.dispose();\n        }\n    }, []);\n    return matches;\n};\n\n// ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return\nconst MediaQuery = ({ children, device, onChange, ...settings }) => {\n    const matches = useMediaQuery(settings, device, onChange);\n    if (typeof children === 'function') {\n        return children(matches);\n    }\n    return matches ? children : null;\n};\n\nexports.Context = Context;\nexports[\"default\"] = MediaQuery;\nexports.toQuery = toQuery;\nexports.useMediaQuery = useMediaQuery;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS9kaXN0L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFlBQVksbUJBQU8sQ0FBQyx3R0FBTztBQUMzQixpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsb0ZBQXNCO0FBQzlDLG1CQUFtQixtQkFBTyxDQUFDLHVFQUFlO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDREQUFZOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQkFBMkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUSxJQUFJLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmLGtCQUFlO0FBQ2YsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVTcGFjZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlL2Rpc3QvY2pzL2luZGV4LmpzP2RkODMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1hdGNoTWVkaWEgPSByZXF1aXJlKCdtYXRjaG1lZGlhcXVlcnknKTtcbnZhciBoeXBoZW5hdGUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xudmFyIHNoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ3NoYWxsb3ctZXF1YWwnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbmNvbnN0IHN0cmluZ09yTnVtYmVyID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pO1xuLy8gbWVkaWEgdHlwZXNcbmNvbnN0IHR5cGVzID0ge1xuICAgIGFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ3JpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXVyYWw6IFByb3BUeXBlcy5ib29sLFxuICAgIGJyYWlsbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRoZWxkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwcmludDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJvamVjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2NyZWVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0dHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHR2OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlbWJvc3NlZDogUHJvcFR5cGVzLmJvb2xcbn07XG4vLyBwcm9wZXJ0aWVzIHRoYXQgbWF0Y2ggbWVkaWEgcXVlcmllc1xuY29uc3QgbWF0Y2hlcnMgPSB7XG4gICAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZSddKSxcbiAgICBzY2FuOiBQcm9wVHlwZXMub25lT2YoWydwcm9ncmVzc2l2ZScsICdpbnRlcmxhY2UnXSksXG4gICAgYXNwZWN0UmF0aW86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGV2aWNlQXNwZWN0UmF0aW86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICBkZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgIHdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICBkZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgY29sb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbG9ySW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIG1vbm9jaHJvbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyLFxuICAgIHR5cGU6IE9iamVjdC5rZXlzKHR5cGVzKVxufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IHsgdHlwZSwgLi4uZmVhdHVyZU1hdGNoZXJzIH0gPSBtYXRjaGVycztcbi8vIG1lZGlhIGZlYXR1cmVzXG5jb25zdCBmZWF0dXJlcyA9IHtcbiAgICBtaW5Bc3BlY3RSYXRpbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhBc3BlY3RSYXRpbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtaW5EZXZpY2VBc3BlY3RSYXRpbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhEZXZpY2VBc3BlY3RSYXRpbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtaW5IZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgIG1heEhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgbWluRGV2aWNlSGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICBtYXhEZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgIG1pbldpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICBtYXhXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgbWluRGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgIG1heERldmljZVdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICBtaW5Db2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5Db2xvckluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heENvbG9ySW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluTW9ub2Nocm9tZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhNb25vY2hyb21lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyLFxuICAgIG1heFJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyLFxuICAgIC4uLmZlYXR1cmVNYXRjaGVyc1xufTtcbmNvbnN0IGFsbCA9IHsgLi4udHlwZXMsIC4uLmZlYXR1cmVzIH07XG52YXIgbXEgPSB7XG4gICAgYWxsOiBhbGwsXG4gICAgdHlwZXM6IHR5cGVzLFxuICAgIG1hdGNoZXJzOiBtYXRjaGVycyxcbiAgICBmZWF0dXJlczogZmVhdHVyZXNcbn07XG5cbmNvbnN0IG5lZ2F0ZSA9IChjb25kKSA9PiBgbm90ICR7Y29uZH1gO1xuY29uc3Qga2V5VmFsID0gKGssIHYpID0+IHtcbiAgICBjb25zdCByZWFsS2V5ID0gaHlwaGVuYXRlKGspO1xuICAgIC8vIHB4IHNob3J0aGFuZFxuICAgIGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdiA9IGAke3Z9cHhgO1xuICAgIH1cbiAgICBpZiAodiA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmVhbEtleTtcbiAgICB9XG4gICAgaWYgKHYgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBuZWdhdGUocmVhbEtleSk7XG4gICAgfVxuICAgIHJldHVybiBgKCR7cmVhbEtleX06ICR7dn0pYDtcbn07XG5jb25zdCBqb2luID0gKGNvbmRzKSA9PiBjb25kcy5qb2luKCcgYW5kICcpO1xuY29uc3QgdG9RdWVyeSA9IChvYmopID0+IHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKG1xLmFsbCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBjb25zdCB2ID0gb2JqW2tdO1xuICAgICAgICBpZiAodiAhPSBudWxsKSB7XG4gICAgICAgICAgICBydWxlcy5wdXNoKGtleVZhbChrLCB2KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gam9pbihydWxlcyk7XG59O1xuXG5jb25zdCBDb250ZXh0ID0gcmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuXG5jb25zdCBtYWtlUXVlcnkgPSAoc2V0dGluZ3MpID0+IHNldHRpbmdzLnF1ZXJ5IHx8IHRvUXVlcnkoc2V0dGluZ3MpO1xuY29uc3QgaHlwaGVuYXRlS2V5cyA9IChvYmopID0+IHtcbiAgICBpZiAoIW9iailcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdFtoeXBoZW5hdGUoa2V5KV0gPSBvYmpba2V5XTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG59O1xuY29uc3QgdXNlSXNVcGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmID0gcmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudCA9IHRydWU7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn07XG5jb25zdCB1c2VEZXZpY2UgPSAoZGV2aWNlRnJvbVByb3BzKSA9PiB7XG4gICAgY29uc3QgZGV2aWNlRnJvbUNvbnRleHQgPSByZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGNvbnN0IGdldERldmljZSA9ICgpID0+IGh5cGhlbmF0ZUtleXMoZGV2aWNlRnJvbVByb3BzKSB8fCBoeXBoZW5hdGVLZXlzKGRldmljZUZyb21Db250ZXh0KTtcbiAgICBjb25zdCBbZGV2aWNlLCBzZXREZXZpY2VdID0gcmVhY3QudXNlU3RhdGUoZ2V0RGV2aWNlKTtcbiAgICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgICAgICAgaWYgKCFzaGFsbG93RXF1YWwuc2hhbGxvd0VxdWFsT2JqZWN0cyhkZXZpY2UsIG5ld0RldmljZSkpIHtcbiAgICAgICAgICAgIHNldERldmljZShuZXdEZXZpY2UpO1xuICAgICAgICB9XG4gICAgfSwgW2RldmljZUZyb21Qcm9wcywgZGV2aWNlRnJvbUNvbnRleHRdKTtcbiAgICByZXR1cm4gZGV2aWNlO1xufTtcbmNvbnN0IHVzZVF1ZXJ5ID0gKHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiBtYWtlUXVlcnkoc2V0dGluZ3MpO1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gcmVhY3QudXNlU3RhdGUoZ2V0UXVlcnkpO1xuICAgIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1F1ZXJ5ID0gZ2V0UXVlcnkoKTtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9PSBuZXdRdWVyeSkge1xuICAgICAgICAgICAgc2V0UXVlcnkobmV3UXVlcnkpO1xuICAgICAgICB9XG4gICAgfSwgW3NldHRpbmdzXSk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufTtcbmNvbnN0IHVzZU1hdGNoTWVkaWEgPSAocXVlcnksIGRldmljZSkgPT4ge1xuICAgIGNvbnN0IGdldE1hdGNoTWVkaWEgPSAoKSA9PiBtYXRjaE1lZGlhKHF1ZXJ5LCBkZXZpY2UgfHwge30sICEhZGV2aWNlKTtcbiAgICBjb25zdCBbbXEsIHNldE1xXSA9IHJlYWN0LnVzZVN0YXRlKGdldE1hdGNoTWVkaWEpO1xuICAgIGNvbnN0IGlzVXBkYXRlID0gdXNlSXNVcGRhdGUoKTtcbiAgICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIC8vIHNraXAgb24gbW91bnRpbmcsIGl0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gICAgICAgICAgICBjb25zdCBuZXdNcSA9IGdldE1hdGNoTWVkaWEoKTtcbiAgICAgICAgICAgIHNldE1xKG5ld01xKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld01xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01xLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3F1ZXJ5LCBkZXZpY2VdKTtcbiAgICByZXR1cm4gbXE7XG59O1xuY29uc3QgdXNlTWF0Y2hlcyA9IChtZWRpYVF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gcmVhY3QudXNlU3RhdGUobWVkaWFRdWVyeS5tYXRjaGVzKTtcbiAgICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVNYXRjaGVzID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBzZXRNYXRjaGVzKGV2Lm1hdGNoZXMpO1xuICAgICAgICB9O1xuICAgICAgICBtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKHVwZGF0ZU1hdGNoZXMpO1xuICAgICAgICBzZXRNYXRjaGVzKG1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYVF1ZXJ5LnJlbW92ZUxpc3RlbmVyKHVwZGF0ZU1hdGNoZXMpO1xuICAgICAgICB9O1xuICAgIH0sIFttZWRpYVF1ZXJ5XSk7XG4gICAgcmV0dXJuIG1hdGNoZXM7XG59O1xuY29uc3QgdXNlTWVkaWFRdWVyeSA9IChzZXR0aW5ncywgZGV2aWNlLCBvbkNoYW5nZSkgPT4ge1xuICAgIGNvbnN0IGRldmljZVNldHRpbmdzID0gdXNlRGV2aWNlKGRldmljZSk7XG4gICAgY29uc3QgcXVlcnkgPSB1c2VRdWVyeShzZXR0aW5ncyk7XG4gICAgaWYgKCFxdWVyeSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yIG1pc3NpbmcgTWVkaWFRdWVyeSEnKTtcbiAgICBjb25zdCBtcSA9IHVzZU1hdGNoTWVkaWEocXVlcnksIGRldmljZVNldHRpbmdzKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcyhtcSk7XG4gICAgY29uc3QgaXNVcGRhdGUgPSB1c2VJc1VwZGF0ZSgpO1xuICAgIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc1VwZGF0ZSAmJiBvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UobWF0Y2hlcyk7XG4gICAgICAgIH1cbiAgICB9LCBbbWF0Y2hlc10pO1xuICAgIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgICAgIGlmIChtcSkge1xuICAgICAgICAgICAgbXEuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBtYXRjaGVzO1xufTtcblxuLy8gUmVhY3ROb2RlIGFuZCBSZWFjdEVsZW1lbnQgdHlwaW5ncyBhcmUgYSBsaXR0bGUgZnVua3kgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgc28gdGhlIFJlYWN0RWxlbWVudCBjYXN0IGlzIG5lZWRlZCBvbiB0aGUgcmV0dXJuXG5jb25zdCBNZWRpYVF1ZXJ5ID0gKHsgY2hpbGRyZW4sIGRldmljZSwgb25DaGFuZ2UsIC4uLnNldHRpbmdzIH0pID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeShzZXR0aW5ncywgZGV2aWNlLCBvbkNoYW5nZSk7XG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4obWF0Y2hlcyk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzID8gY2hpbGRyZW4gOiBudWxsO1xufTtcblxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcbmV4cG9ydHMuZGVmYXVsdCA9IE1lZGlhUXVlcnk7XG5leHBvcnRzLnRvUXVlcnkgPSB0b1F1ZXJ5O1xuZXhwb3J0cy51c2VNZWRpYVF1ZXJ5ID0gdXNlTWVkaWFRdWVyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-responsive/dist/cjs/index.js\n");

/***/ })

};
;