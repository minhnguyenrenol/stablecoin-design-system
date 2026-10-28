/* UNERAStablecoinDS design system bundle. Built from every .jsx under components/ by tools/bundle.mjs. Needs React 18 UMD on the page. */
var React = window.React;
var __ds_tmp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    AccountStateBanner: () => AccountStateBanner,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    CompositionDonut: () => CompositionDonut,
    Input: () => Input,
    MaturityLadder: () => MaturityLadder,
    NotificationCenter: () => NotificationCenter,
    QuoteCard: () => QuoteCard,
    ReserveBar: () => ReserveBar,
    ReserveGauge: () => ReserveGauge,
    Select: () => Select,
    StatCard: () => StatCard,
    StatusPill: () => StatusPill,
    StatusTimeline: () => StatusTimeline,
    Stepper: () => Stepper,
    TrendChart: () => TrendChart,
    WalletPill: () => WalletPill
  });

  // ../../x/sc/components/charts/CompositionDonut.jsx
  var import_react = __toESM(require_react());
  var ASSET = { bank: "var(--por-bank)", stablecoin: "var(--por-stable)", treasury: "var(--por-treasury)", cash: "var(--por-cash)" };
  function CompositionDonut({ items = [], size = 200, thickness = 26, centerLabel, centerValue }) {
    const total = items.reduce((s, i) => s + i.pct, 0) || 100;
    const r = (size - thickness) / 2, c = 2 * Math.PI * r, cx = size / 2;
    let offset = 0;
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, style: { fontFamily: "var(--font-body)" } }, /* @__PURE__ */ import_react.default.createElement("g", { transform: `rotate(-90 ${cx} ${cx})` }, /* @__PURE__ */ import_react.default.createElement("circle", { cx, cy: cx, r, fill: "none", stroke: "var(--neutral-200)", strokeWidth: thickness }), items.map((i, k) => {
      const len = i.pct / total * c;
      const seg = /* @__PURE__ */ import_react.default.createElement(
        "circle",
        {
          key: k,
          cx,
          cy: cx,
          r,
          fill: "none",
          stroke: i.color || ASSET[i.asset] || "var(--por-bank)",
          strokeWidth: thickness,
          strokeDasharray: `${len} ${c - len}`,
          strokeDashoffset: -offset,
          style: { transition: "stroke-dasharray 0.5s cubic-bezier(0.28,0.11,0.32,1)" }
        }
      );
      offset += len;
      return seg;
    })), (centerValue || centerLabel) && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
      "text",
      {
        x: cx,
        y: cx - 2,
        textAnchor: "middle",
        fontSize: size * 0.13,
        fontWeight: "700",
        fill: "var(--text-primary)",
        style: { fontFamily: "var(--font-display)", fontVariantNumeric: "tabular-nums" }
      },
      centerValue
    ), /* @__PURE__ */ import_react.default.createElement(
      "text",
      {
        x: cx,
        y: cx + size * 0.1,
        textAnchor: "middle",
        fontSize: size * 0.058,
        fontWeight: "700",
        fill: "var(--text-secondary)",
        style: { textTransform: "uppercase", letterSpacing: "0.08em" }
      },
      centerLabel
    )));
  }

  // ../../x/sc/components/charts/MaturityLadder.jsx
  var import_react2 = __toESM(require_react());
  function MaturityLadder({ buckets = [], style }) {
    const maxPct = Math.max(...buckets.map((b) => b.pct), 1);
    return /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", gap: "0.7rem", ...style } }, buckets.map((b, k) => /* @__PURE__ */ import_react2.default.createElement("div", { key: k, style: { display: "grid", gridTemplateColumns: "92px 1fr auto", alignItems: "center", gap: "0.75rem" } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 600 } }, b.label), /* @__PURE__ */ import_react2.default.createElement("span", { style: { height: 18, borderRadius: "var(--radius-sm)", background: "var(--neutral-200)", overflow: "hidden", display: "block" } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: {
      display: "block",
      height: "100%",
      width: `${b.pct / maxPct * 100}%`,
      background: b.color || "var(--brand-deep-blue)",
      borderRadius: "var(--radius-sm)",
      transition: "width 0.5s cubic-bezier(0.28,0.11,0.32,1)"
    } })), /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "0.78rem", fontWeight: 600, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums", minWidth: 38, textAlign: "right" } }, b.pct, "%"))));
  }

  // ../../x/sc/components/charts/ReserveGauge.jsx
  var import_react3 = __toESM(require_react());
  function ReserveGauge({ value = 105, floor = 100, max = 120, size = 240, label = "Active wallets", onDark = false }) {
    const R = size * 0.42, cx = size / 2, cy = size / 2, stroke = Math.max(10, size * 0.06);
    const a0 = 180, a1 = 360;
    const pol = (deg) => {
      const r = deg * Math.PI / 180;
      return { x: cx + R * Math.cos(r), y: cy + R * Math.sin(r) };
    };
    const arc = (start, end) => {
      const s = pol(start), e = pol(end), large = end - start > 180 ? 1 : 0;
      return `M ${s.x} ${s.y} A ${R} ${R} 0 ${large} 1 ${e.x} ${e.y}`;
    };
    const clamped = Math.max(0, Math.min(value, max));
    const valAngle = a0 + clamped / max * (a1 - a0);
    const floorAngle = a0 + floor / max * (a1 - a0);
    const color = value >= floor ? "var(--fin-up)" : value >= floor - 3 ? "var(--warning)" : "var(--error)";
    const track = onDark ? "rgba(255,255,255,0.16)" : "var(--neutral-200)";
    const floorPt = pol(floorAngle);
    return /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontFamily: "var(--font-body)", textAlign: "center", width: size } }, /* @__PURE__ */ import_react3.default.createElement("svg", { width: size, height: size * 0.62, viewBox: `0 0 ${size} ${size * 0.62}` }, /* @__PURE__ */ import_react3.default.createElement("path", { d: arc(a0, a1), fill: "none", stroke: track, strokeWidth: stroke, strokeLinecap: "round" }), /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        d: arc(a0, valAngle),
        fill: "none",
        stroke: color,
        strokeWidth: stroke,
        strokeLinecap: "round",
        style: { transition: "all 0.5s cubic-bezier(0.28,0.11,0.32,1)" }
      }
    ), /* @__PURE__ */ import_react3.default.createElement("circle", { cx: floorPt.x, cy: floorPt.y, r: stroke * 0.42, fill: onDark ? "#fff" : "var(--brand-deep-blue)" }), /* @__PURE__ */ import_react3.default.createElement(
      "text",
      {
        x: cx,
        y: cy - size * 0.02,
        textAnchor: "middle",
        fontSize: size * 0.17,
        fontWeight: "700",
        fill: onDark ? "#fff" : "var(--text-primary)",
        style: { fontVariantNumeric: "tabular-nums", fontFamily: "var(--font-display)" }
      },
      value.toFixed(1),
      "%"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: onDark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)", marginTop: -size * 0.06 } }, label, " \xB7 floor ", floor, "%"));
  }

  // ../../x/sc/components/charts/TrendChart.jsx
  var import_react4 = __toESM(require_react());
  function TrendChart({ data = [], width = 520, height = 140, color = "var(--brand-teal)", floor, pad = 6, style }) {
    if (!data.length) return null;
    const min = Math.min(...data, floor ?? Infinity), max = Math.max(...data, floor ?? -Infinity);
    const span = max - min || 1;
    const x = (i) => pad + i / (data.length - 1) * (width - pad * 2);
    const y = (v) => pad + (1 - (v - min) / span) * (height - pad * 2);
    const line = data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const area = `${line} L ${x(data.length - 1).toFixed(1)} ${height - pad} L ${x(0).toFixed(1)} ${height - pad} Z`;
    const gid = "tg" + Math.random().toString(36).slice(2, 7);
    return /* @__PURE__ */ import_react4.default.createElement("svg", { width: "100%", viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: "none", style: { display: "block", ...style } }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: "0.20" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: "0" }))), floor != null && /* @__PURE__ */ import_react4.default.createElement("line", { x1: pad, x2: width - pad, y1: y(floor), y2: y(floor), stroke: "var(--neutral-300)", strokeWidth: "1", strokeDasharray: "4 4" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: area, fill: `url(#${gid})` }), /* @__PURE__ */ import_react4.default.createElement("path", { d: line, fill: "none", stroke: color, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }));
  }

  // ../../x/sc/components/core/Badge.jsx
  var import_react5 = __toESM(require_react());
  function Badge({ variant = "neutral", icon, children, style, ...rest }) {
    const variants = {
      up: { background: "var(--fin-up-bg)", color: "var(--fin-up)" },
      down: { background: "var(--fin-down-bg)", color: "var(--fin-down)" },
      neutral: { background: "var(--fin-neutral-bg)", color: "var(--fin-neutral)" },
      verify: { background: "var(--verify-teal-bg)", color: "var(--verify-teal)" },
      reserve: { background: "var(--reserve-gold-bg)", color: "var(--reserve-gold-deep)" }
    };
    return /* @__PURE__ */ import_react5.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      padding: "0.2rem 0.625rem",
      borderRadius: "var(--radius-pill, 980px)",
      fontSize: "var(--text-xs, 0.75rem)",
      fontWeight: 700,
      letterSpacing: "0.03em",
      lineHeight: 1.5,
      fontFamily: "var(--font-body)",
      ...variants[variant],
      ...style
    }, ...rest }, icon, children);
  }

  // ../../x/sc/components/core/Button.jsx
  var import_react6 = __toESM(require_react());
  function Button({
    variant = "primary",
    size = "md",
    href,
    type = "button",
    disabled = false,
    icon,
    iconRight,
    fullWidth = false,
    onClick,
    children,
    style,
    ...rest
  }) {
    const sizes = {
      sm: { padding: "0.5rem 1rem", fontSize: "0.875rem", minHeight: 40 },
      md: { padding: "0.75rem 1.5rem", fontSize: "0.938rem", minHeight: 46 },
      lg: { padding: "0.875rem 1.75rem", fontSize: "1rem", minHeight: 52 }
    };
    const variants = {
      primary: { background: "var(--brand-deep-blue)", color: "#fff", border: "none" },
      secondary: { background: "transparent", color: "var(--text-secondary)", border: "2px solid var(--border-subtle)" },
      accent: { background: "var(--reserve-gold)", color: "var(--brand-deep-blue)", border: "none" },
      ghost: { background: "transparent", color: "var(--brand-deep-blue)", border: "none" }
    };
    const [hover, setHover] = import_react6.default.useState(false);
    const hoverStyle = !disabled && hover ? {
      primary: { background: "var(--neutral-800)", boxShadow: "0 4px 12px rgba(23,61,71,0.30)" },
      secondary: { borderColor: "var(--brand-deep-blue)", color: "var(--brand-deep-blue)" },
      accent: { background: "var(--reserve-gold-strong)" },
      ghost: { background: "rgba(23,61,71,0.06)" }
    }[variant] : {};
    const base = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      borderRadius: "var(--radius-md, 8px)",
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      lineHeight: 1,
      transition: "all 0.2s cubic-bezier(0.28,0.11,0.32,1)",
      width: fullWidth ? "100%" : void 0,
      opacity: disabled ? 0.5 : 1,
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    };
    const content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, icon, children, iconRight);
    const handlers = {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: base,
      ...rest
    };
    if (href && !disabled) {
      return /* @__PURE__ */ import_react6.default.createElement("a", { href, onClick, ...handlers }, content);
    }
    return /* @__PURE__ */ import_react6.default.createElement("button", { type, disabled, onClick, ...handlers }, content);
  }

  // ../../x/sc/components/core/Card.jsx
  var import_react7 = __toESM(require_react());
  function Card({ surface = "card", interactive = false, href, children, style, ...rest }) {
    const surfaces = {
      card: "var(--surface-card)",
      impact: "var(--surface-impact)",
      action: "var(--surface-action)",
      sky: "var(--surface-sky)",
      warm: "var(--surface-warm)",
      reserve: "var(--surface-reserve)",
      verify: "var(--surface-verify)",
      "cad-hub": "var(--surface-cad-hub)",
      deep: "var(--brand-deep-blue)"
    };
    const [hover, setHover] = import_react7.default.useState(false);
    const onDeep = surface === "deep";
    const base = {
      background: surfaces[surface] || surfaces.card,
      color: onDeep ? "#fff" : "var(--text-primary)",
      border: `1px solid ${onDeep ? "var(--brand-deep-blue)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-2xl, 1.25rem)",
      padding: "1.75rem",
      boxShadow: "var(--shadow-card)",
      textDecoration: "none",
      display: "block",
      transition: "all 0.2s cubic-bezier(0.28,0.11,0.32,1)",
      ...interactive && hover ? {
        borderColor: "var(--brand-deep-blue)",
        boxShadow: "var(--shadow-hover)",
        transform: "translateY(-4px)"
      } : {},
      ...style
    };
    const handlers = {
      style: base,
      ...interactive ? { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) } : {},
      ...rest
    };
    return href ? /* @__PURE__ */ import_react7.default.createElement("a", { href, ...handlers }, children) : /* @__PURE__ */ import_react7.default.createElement("div", { ...handlers }, children);
  }

  // ../../x/sc/components/core/StatusPill.jsx
  var import_react8 = __toESM(require_react());
  function StatusPill({ status = "completed", dot = false, children, style, ...rest }) {
    const map = {
      completed: { background: "var(--fin-up-bg)", color: "var(--fin-up)", label: "Completed" },
      pending: { background: "color-mix(in srgb, var(--warning) 18%, var(--brand-white))", color: "var(--warning)", label: "Pending" },
      failed: { background: "var(--error-bg)", color: "var(--error)", label: "Failed" },
      processing: { background: "color-mix(in srgb, var(--brand-light-blue) 20%, var(--brand-white))", color: "var(--brand-deep-blue)", label: "Processing" },
      operational: { background: "var(--verify-teal-bg)", color: "var(--verify-teal)", label: "Operational" }
    };
    const s = map[status] || map.completed;
    return /* @__PURE__ */ import_react8.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      padding: "0.2rem 0.625rem",
      borderRadius: "var(--radius-pill, 980px)",
      fontSize: "var(--text-xs, 0.75rem)",
      fontWeight: 600,
      letterSpacing: "0.03em",
      fontFamily: "var(--font-body)",
      background: s.background,
      color: s.color,
      ...style
    }, ...rest }, dot && /* @__PURE__ */ import_react8.default.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "currentColor", flexShrink: 0 } }), children || s.label);
  }

  // ../../x/sc/components/core/Stepper.jsx
  var import_react9 = __toESM(require_react());
  function Stepper({ steps = [], current = 0, style }) {
    const total = steps.length;
    const pct = total > 1 ? current / (total - 1) * 100 : 0;
    return /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        role: "progressbar",
        "aria-valuemin": 1,
        "aria-valuemax": total,
        "aria-valuenow": current + 1,
        style: { position: "relative", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", ...style }
      },
      /* @__PURE__ */ import_react9.default.createElement("div", { style: { position: "absolute", top: 16, left: 0, right: 0, height: 2, background: "var(--border-subtle)", zIndex: 0 } }),
      /* @__PURE__ */ import_react9.default.createElement("div", { style: { position: "absolute", top: 16, left: 0, width: `${pct}%`, height: 2, background: "var(--brand-deep-blue)", zIndex: 1, transition: "width 0.5s cubic-bezier(0.28,0.11,0.32,1)" } }),
      steps.map((label, i) => {
        const done = i < current, active = i === current;
        const filled = done || active;
        return /* @__PURE__ */ import_react9.default.createElement("div", { key: i, style: { position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", flex: 1 } }, /* @__PURE__ */ import_react9.default.createElement("div", { style: {
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: filled ? "var(--brand-deep-blue)" : "var(--brand-white)",
          border: `2px solid ${filled ? "var(--brand-deep-blue)" : "var(--border-subtle)"}`,
          color: filled ? "#fff" : "var(--text-secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: "0.875rem",
          transition: "all 0.2s cubic-bezier(0.28,0.11,0.32,1)"
        } }, done ? /* @__PURE__ */ import_react9.default.createElement("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M5 13l4 4L19 7" })) : i + 1), /* @__PURE__ */ import_react9.default.createElement("span", { style: {
          fontSize: "var(--text-xs, 0.75rem)",
          textAlign: "center",
          fontWeight: active ? 700 : 500,
          color: active ? "var(--brand-deep-blue)" : done ? "var(--text-primary)" : "var(--text-secondary)"
        } }, label));
      })
    );
  }

  // ../../x/sc/components/forms/Checkbox.jsx
  var import_react10 = __toESM(require_react());
  function Checkbox({ label, sublabel, type = "checkbox", name, checked, defaultChecked, onChange, disabled, style }) {
    const [on, setOn] = import_react10.default.useState(defaultChecked || false);
    const isOn = checked !== void 0 ? checked : on;
    const toggle = () => {
      if (disabled) return;
      const next = type === "radio" ? true : !isOn;
      if (checked === void 0) setOn(next);
      onChange && onChange(next);
    };
    return /* @__PURE__ */ import_react10.default.createElement("label", { onClick: toggle, style: {
      display: "flex",
      alignItems: sublabel ? "flex-start" : "center",
      gap: "0.75rem",
      minHeight: 48,
      padding: "0.5rem 0.75rem",
      borderRadius: "var(--radius-lg, 12px)",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      border: `1.5px solid ${isOn ? "var(--brand-deep-blue)" : "var(--border-subtle)"}`,
      background: isOn ? "color-mix(in srgb, var(--brand-cloud-blue) 40%, var(--brand-white))" : "var(--brand-white)",
      opacity: disabled ? 0.5 : 1,
      transition: "all 0.15s",
      ...style
    } }, /* @__PURE__ */ import_react10.default.createElement("span", { "aria-hidden": true, style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      marginTop: sublabel ? 2 : 0,
      borderRadius: type === "radio" ? "50%" : "6px",
      border: `2px solid ${isOn ? "var(--brand-deep-blue)" : "var(--neutral-400)"}`,
      background: isOn ? "var(--brand-deep-blue)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.15s"
    } }, isOn && (type === "radio" ? /* @__PURE__ */ import_react10.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#fff" } }) : /* @__PURE__ */ import_react10.default.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "#fff", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react10.default.createElement("path", { d: "M5 13l4 4L19 7" })))), /* @__PURE__ */ import_react10.default.createElement("span", { style: { minWidth: 0 } }, /* @__PURE__ */ import_react10.default.createElement("span", { style: { display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" } }, label), sublabel && /* @__PURE__ */ import_react10.default.createElement("span", { style: { display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 } }, sublabel)), /* @__PURE__ */ import_react10.default.createElement("input", { type, name, checked: isOn, readOnly: true, style: { position: "absolute", opacity: 0, pointerEvents: "none" } }));
  }

  // ../../x/sc/components/forms/Input.jsx
  var import_react11 = __toESM(require_react());
  function Input({ label, hint, error, prefix, suffix, id, style, ...rest }) {
    const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
    const [focus, setFocus] = import_react11.default.useState(false);
    return /* @__PURE__ */ import_react11.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "0.4rem", fontFamily: "var(--font-body)" } }, label && /* @__PURE__ */ import_react11.default.createElement("label", { htmlFor: inputId, style: { fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" } }, label), /* @__PURE__ */ import_react11.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "var(--brand-white)",
      borderRadius: "var(--radius-lg, 12px)",
      border: `1.5px solid ${error ? "var(--error)" : focus ? "var(--brand-deep-blue)" : "var(--border-subtle)"}`,
      padding: "0 0.875rem",
      minHeight: 48,
      boxShadow: focus ? "0 0 0 3px rgba(23,61,71,0.12)" : "none",
      transition: "border-color 0.15s, box-shadow 0.15s"
    } }, prefix && /* @__PURE__ */ import_react11.default.createElement("span", { style: { color: "var(--text-secondary)", fontWeight: 600 } }, prefix), /* @__PURE__ */ import_react11.default.createElement(
      "input",
      {
        id: inputId,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "1rem",
          fontFamily: "var(--font-body)",
          color: "var(--text-primary)",
          padding: "0.75rem 0",
          minWidth: 0,
          ...style
        },
        ...rest
      }
    ), suffix && /* @__PURE__ */ import_react11.default.createElement("span", { style: { color: "var(--text-secondary)", fontWeight: 600 } }, suffix)), (hint || error) && /* @__PURE__ */ import_react11.default.createElement("span", { style: { fontSize: "0.75rem", color: error ? "var(--error)" : "var(--text-secondary)" } }, error || hint));
  }

  // ../../x/sc/components/forms/Select.jsx
  var import_react12 = __toESM(require_react());
  function Select({ label, options = [], value, defaultValue, onChange, placeholder = "Select\u2026", style }) {
    const norm = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const [open, setOpen] = import_react12.default.useState(false);
    const [val, setVal] = import_react12.default.useState(value ?? defaultValue ?? "");
    const [active, setActive] = import_react12.default.useState(0);
    const ref = import_react12.default.useRef(null);
    const current = val !== void 0 ? val : value;
    const selected = norm.find((o) => o.value === current);
    import_react12.default.useEffect(() => {
      const close = (e) => {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);
    const pick = (o) => {
      setVal(o.value);
      onChange && onChange(o.value);
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
        setActive((a) => Math.min(a + 1, norm.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (open) pick(norm[active]);
        else setOpen(true);
      } else if (e.key === "Escape") setOpen(false);
    };
    return /* @__PURE__ */ import_react12.default.createElement("div", { ref, style: { display: "flex", flexDirection: "column", gap: "0.4rem", fontFamily: "var(--font-body)", position: "relative", ...style } }, label && /* @__PURE__ */ import_react12.default.createElement("label", { style: { fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" } }, label), /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        onKeyDown: onKey,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          background: "var(--brand-white)",
          borderRadius: "var(--radius-lg, 12px)",
          minHeight: 48,
          border: `1.5px solid ${open ? "var(--brand-deep-blue)" : "var(--border-subtle)"}`,
          padding: "0 0.875rem",
          fontSize: "1rem",
          fontFamily: "var(--font-body)",
          cursor: "pointer",
          color: selected ? "var(--text-primary)" : "var(--text-secondary)",
          textAlign: "left",
          boxShadow: open ? "0 0 0 3px rgba(23,61,71,0.12)" : "none"
        }
      },
      /* @__PURE__ */ import_react12.default.createElement("span", null, selected ? selected.label : placeholder),
      /* @__PURE__ */ import_react12.default.createElement("svg", { width: "18", height: "18", viewBox: "0 -960 960 960", fill: "var(--text-secondary)", style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" } }, /* @__PURE__ */ import_react12.default.createElement("path", { d: "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" }))
    ), open && /* @__PURE__ */ import_react12.default.createElement("ul", { role: "listbox", style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 10002,
      listStyle: "none",
      margin: 0,
      padding: "0.35rem",
      background: "var(--brand-white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg, 12px)",
      boxShadow: "var(--shadow-menu)"
    } }, norm.map((o, i) => /* @__PURE__ */ import_react12.default.createElement(
      "li",
      {
        key: o.value,
        role: "option",
        "aria-selected": o.value === current,
        onClick: () => pick(o),
        onMouseEnter: () => setActive(i),
        style: {
          padding: "0.625rem 0.75rem",
          borderRadius: "var(--radius-md, 8px)",
          cursor: "pointer",
          fontSize: "0.9rem",
          background: i === active ? "color-mix(in srgb, var(--brand-cloud-blue) 60%, var(--brand-white))" : "transparent",
          color: o.value === current ? "var(--brand-deep-blue)" : "var(--text-primary)",
          fontWeight: o.value === current ? 600 : 400
        }
      },
      o.label
    ))));
  }

  // ../../x/sc/components/stablecoin/AccountStateBanner.jsx
  var import_react13 = __toESM(require_react());
  var TONE = {
    info: { bg: "var(--surface-sky, #eef6fb)", bd: "var(--brand-deep-blue)", ic: "var(--brand-deep-blue)" },
    accent: { bg: "var(--accent-bg)", bd: "var(--accent-strong)", ic: "var(--accent-deep)" },
    warning: { bg: "var(--warning-bg, #fbf3e2)", bd: "var(--warning)", ic: "var(--warning)" },
    blocked: { bg: "var(--error-bg, #fbeef0)", bd: "var(--error)", ic: "var(--error)" }
  };
  var PRESET = {
    public: { tone: "info", title: "Viewing public transparency data", body: "Supply, reserves and audit reports are open to everyone. Log in to see your balance and to issue or redeem hUSD.", cta: "Create account" },
    kyc_not_started: { tone: "accent", title: "Complete KYC to issue or redeem hUSD", body: "Verify your identity (Level 2) to unlock issuance and redemption. You can still view public reserve data.", cta: "Verify identity" },
    kyc_pending: { tone: "accent", title: "Verification in review", body: "Your identity check is being reviewed, usually within minutes. Issuing and redeeming unlock once you are approved.", cta: "View status" },
    blocked: { tone: "blocked", title: "hUSD actions are not available for your account", body: "You can still view public transparency data. Contact support if you believe this is an error.", cta: "Contact support" },
    maintenance: { tone: "warning", title: "Scheduled maintenance", body: "Issuance and redemption are paused briefly. Public reserve data remains available.", cta: "See announcement" },
    data_unavailable: { tone: "warning", title: "Reserve data updating", body: "Live reserve data is briefly unavailable. We show the last known snapshot timestamp below.", cta: null }
  };
  function AccountStateBanner({ state = "public", onAction, title, body, cta, style }) {
    const p = PRESET[state] || PRESET.public;
    const t = TONE[p.tone];
    return /* @__PURE__ */ import_react13.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "0.85rem",
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-2xl, 14px)",
      padding: "0.85rem 1.1rem",
      fontFamily: "var(--font-body)",
      ...style
    } }, /* @__PURE__ */ import_react13.default.createElement("span", { "aria-hidden": true, style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      color: t.ic
    } }, /* @__PURE__ */ import_react13.default.createElement("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2.2" }, /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 16v-4M12 8h.01" }))), /* @__PURE__ */ import_react13.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary)" } }, title || p.title), /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 } }, body || p.body)), (cta || p.cta) && /* @__PURE__ */ import_react13.default.createElement("button", { onClick: onAction, style: {
      flexShrink: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "0.8rem",
      fontWeight: 700,
      padding: "0.55rem 1.05rem",
      borderRadius: 980,
      border: `1px solid ${t.bd}`,
      background: "#fff",
      color: "var(--text-primary)"
    } }, cta || p.cta));
  }

  // ../../x/sc/components/stablecoin/NotificationCenter.jsx
  var import_react14 = __toESM(require_react());
  var KIND = {
    success: { ic: "var(--fin-up)", bg: "var(--fin-up-bg, #e7f5ef)" },
    progress: { ic: "var(--accent-deep)", bg: "var(--accent-bg)" },
    info: { ic: "var(--brand-teal, #2f7682)", bg: "var(--surface-sky, #eef6fb)" },
    alert: { ic: "var(--warning)", bg: "var(--warning-bg, #fbf3e2)" }
  };
  var ICON = {
    success: "M20 6L9 17l-5-5",
    progress: "M12 8v4l3 2M12 22a10 10 0 110-20 10 10 0 010 20z",
    info: "M12 16v-4M12 8h.01M12 22a10 10 0 110-20 10 10 0 010 20z",
    alert: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  };
  function NotificationCenter({ open, items = [], onToggle, onClose, onMarkAllRead }) {
    const unread = items.filter((i) => !i.read).length;
    return /* @__PURE__ */ import_react14.default.createElement("div", { style: { position: "relative", fontFamily: "var(--font-body)" } }, /* @__PURE__ */ import_react14.default.createElement("button", { onClick: onToggle, "aria-label": "Notifications", style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "var(--brand-white)",
      border: "1px solid var(--border-subtle)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-secondary)"
    } }, /* @__PURE__ */ import_react14.default.createElement("svg", { viewBox: "0 0 24 24", width: "17", height: "17", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react14.default.createElement("path", { d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" })), unread > 0 && /* @__PURE__ */ import_react14.default.createElement("span", { style: {
      position: "absolute",
      top: 7,
      right: 8,
      minWidth: 15,
      height: 15,
      padding: "0 3px",
      borderRadius: 980,
      background: "var(--accent)",
      color: "var(--accent-deep)",
      fontSize: "0.58rem",
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, unread)), open && /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 55 } }), /* @__PURE__ */ import_react14.default.createElement("div", { style: {
      position: "absolute",
      top: "calc(100% + 0.6rem)",
      right: 0,
      width: 340,
      zIndex: 60,
      background: "var(--brand-white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      boxShadow: "var(--shadow-popover, 0 24px 50px -12px rgba(16,43,50,0.2))",
      overflow: "hidden"
    } }, /* @__PURE__ */ import_react14.default.createElement("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.85rem 1rem",
      borderBottom: "1px solid var(--border-subtle)"
    } }, /* @__PURE__ */ import_react14.default.createElement("span", { style: { fontSize: "0.84rem", fontWeight: 700 } }, "Notifications"), /* @__PURE__ */ import_react14.default.createElement("button", { onClick: onMarkAllRead, style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "0.72rem",
      fontWeight: 600,
      color: "var(--accent-deep)"
    } }, "Mark all read")), /* @__PURE__ */ import_react14.default.createElement("div", { style: { maxHeight: 340, overflow: "auto" } }, items.map((n) => {
      const k = KIND[n.kind] || KIND.info;
      return /* @__PURE__ */ import_react14.default.createElement("div", { key: n.id, style: {
        display: "flex",
        gap: "0.7rem",
        alignItems: "flex-start",
        padding: "0.8rem 1rem",
        borderBottom: "1px solid var(--border-subtle)",
        background: n.read ? "transparent" : "var(--accent-bg)"
      } }, /* @__PURE__ */ import_react14.default.createElement("span", { style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: k.bg,
        color: k.ic
      } }, /* @__PURE__ */ import_react14.default.createElement("svg", { viewBox: "0 0 24 24", width: "15", height: "15", fill: "none", stroke: "currentColor", strokeWidth: "2.2" }, /* @__PURE__ */ import_react14.default.createElement("path", { d: ICON[n.kind] || ICON.info }))), /* @__PURE__ */ import_react14.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react14.default.createElement("div", { style: { fontSize: "0.8rem", fontWeight: 600, color: "var(--text-primary)" } }, n.title), /* @__PURE__ */ import_react14.default.createElement("div", { style: { fontSize: "0.72rem", color: "var(--text-secondary)", lineHeight: 1.4, marginTop: 1 } }, n.body), /* @__PURE__ */ import_react14.default.createElement("div", { style: { fontSize: "0.66rem", color: "var(--text-tertiary, #8a9a9a)", marginTop: 3 } }, n.time)));
    })))));
  }

  // ../../x/sc/components/stablecoin/QuoteCard.jsx
  var import_react15 = __toESM(require_react());
  function QuoteCard({
    rateLabel = "Rate \xB7 1.0000 USD = 1.0000 hUSD",
    rateSource = "exchangerate-api.com",
    rateType = "FX rate",
    // 'FX rate' (fiat/stablecoin) | 'exchange rate' (ETH/BTC)
    sourceHref = "",
    // link to the rate source (required when rateType is 'exchange rate', e.g. CoinGecko)
    rows = [],
    // [{ label, value }]: fee, markup, daily limit, etc.
    secondsLeft = 60,
    expired = false,
    onRefresh,
    style
  }) {
    const danger = expired || secondsLeft <= 10;
    return /* @__PURE__ */ import_react15.default.createElement("div", { style: {
      background: "var(--brand-white)",
      border: `1px solid ${expired ? "var(--error)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-2xl, 14px)",
      padding: "1rem 1.2rem",
      fontFamily: "var(--font-body)",
      ...style
    } }, /* @__PURE__ */ import_react15.default.createElement("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "0.7rem",
      borderBottom: "1px solid var(--border-subtle)"
    } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: { display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8rem", color: "var(--text-secondary)" } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: expired ? "var(--error)" : "var(--fin-up)" } }), rateLabel), /* @__PURE__ */ import_react15.default.createElement("span", { style: {
      fontSize: "0.78rem",
      fontVariantNumeric: "tabular-nums",
      color: danger ? expired ? "var(--error)" : "var(--accent-deep)" : "var(--text-secondary)"
    } }, expired ? "Quote expired" : `Expires in ${secondsLeft}s`)), expired && /* @__PURE__ */ import_react15.default.createElement("button", { onClick: onRefresh, style: {
      width: "100%",
      marginTop: "0.7rem",
      cursor: "pointer",
      background: "var(--brand-white)",
      border: "1px solid var(--accent-strong)",
      color: "var(--accent-deep)",
      borderRadius: 9,
      padding: "0.55rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.8rem",
      fontWeight: 700
    } }, "Refresh quote"), /* @__PURE__ */ import_react15.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", paddingTop: "0.7rem" } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: { fontSize: "0.82rem", color: "var(--text-secondary)" } }, "Rate source \xB7 ", rateType), sourceHref ? /* @__PURE__ */ import_react15.default.createElement("a", { href: sourceHref, target: "_blank", rel: "noopener", style: { fontSize: "0.82rem", color: "var(--accent-deep, #2f7682)", textDecoration: "none" } }, rateSource, " \u2197") : /* @__PURE__ */ import_react15.default.createElement("span", { style: { fontSize: "0.82rem", color: "var(--text-tertiary, #8a9a9a)" } }, rateSource)), rows.map((r, i) => /* @__PURE__ */ import_react15.default.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", marginTop: "0.4rem" } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: { fontSize: "0.82rem", color: "var(--text-secondary)" } }, r.label), /* @__PURE__ */ import_react15.default.createElement("span", { style: { fontSize: "0.82rem", fontWeight: 600, fontVariantNumeric: "tabular-nums", color: "var(--text-primary)" } }, r.value))));
  }

  // ../../x/sc/components/stablecoin/ReserveBar.jsx
  var import_react16 = __toESM(require_react());
  var ASSET_COLORS = {
    bank: "var(--por-bank)",
    stablecoin: "var(--por-stable)",
    treasury: "var(--por-treasury)",
    cash: "var(--por-cash)"
  };
  function ReserveBar({ items = [], showLegend = true, height = 16, style }) {
    const total = items.reduce((s, i) => s + i.pct, 0) || 100;
    return /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontFamily: "var(--font-body)", ...style } }, /* @__PURE__ */ import_react16.default.createElement(
      "div",
      {
        role: "img",
        "aria-label": `Reserve composition: ${items.map((i) => `${i.pct}% ${i.label}`).join(", ")}`,
        style: { display: "flex", height, borderRadius: "var(--radius-pill, 980px)", overflow: "hidden", gap: 2 }
      },
      items.map((i, k) => /* @__PURE__ */ import_react16.default.createElement("div", { key: k, style: { flex: i.pct, background: ASSET_COLORS[i.asset] || "var(--por-bank)" } }))
    ), showLegend && /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "14px 20px", marginTop: 16 } }, items.map((i, k) => /* @__PURE__ */ import_react16.default.createElement("div", { key: k, style: { display: "flex", alignItems: "center", gap: 8, minWidth: 150 } }, /* @__PURE__ */ import_react16.default.createElement("span", { style: { width: 14, height: 14, borderRadius: 4, flexShrink: 0, background: ASSET_COLORS[i.asset] || "var(--por-bank)" } }), /* @__PURE__ */ import_react16.default.createElement("span", null, /* @__PURE__ */ import_react16.default.createElement("span", { style: { display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" } }, i.label), /* @__PURE__ */ import_react16.default.createElement("span", { style: { display: "block", fontSize: "0.72rem", color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" } }, Math.round(i.pct / total * 100), "%", i.value ? ` \xB7 ${i.value}` : ""))))));
  }

  // ../../x/sc/components/stablecoin/StatCard.jsx
  var import_react17 = __toESM(require_react());
  function StatCard({ icon, label, value, currency, trend, trendVariant = "up", href, onClick, style }) {
    const [hover, setHover] = import_react17.default.useState(false);
    const interactive = !!(href || onClick);
    const trendColors = {
      up: { background: "var(--fin-up-bg)", color: "var(--fin-up)" },
      reserve: { background: "var(--reserve-gold-bg)", color: "var(--reserve-gold-deep)" },
      verify: { background: "var(--verify-teal-bg)", color: "var(--verify-teal)" }
    }[trendVariant];
    const base = {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-2xl, 1.25rem)",
      padding: "1.75rem",
      boxShadow: "var(--shadow-card)",
      textDecoration: "none",
      color: "inherit",
      display: "block",
      fontFamily: "var(--font-body)",
      transition: "all 0.2s cubic-bezier(0.28,0.11,0.32,1)",
      ...interactive && hover ? { borderColor: "var(--brand-deep-blue)", boxShadow: "var(--shadow-hover)", transform: "translateY(-4px)" } : {},
      ...style
    };
    const inner = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" } }, /* @__PURE__ */ import_react17.default.createElement("div", { style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-lg, 12px)",
      flexShrink: 0,
      background: "color-mix(in srgb, var(--brand-deep-blue) 10%, var(--brand-white))",
      color: "var(--brand-deep-blue)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, icon), trend && /* @__PURE__ */ import_react17.default.createElement("span", { style: { ...trendColors, fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "var(--radius-pill, 980px)" } }, trend)), /* @__PURE__ */ import_react17.default.createElement("div", { style: { fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)", marginBottom: "0.5rem" } }, label), /* @__PURE__ */ import_react17.default.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: "var(--font-stat-size, 2.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.1, fontVariantNumeric: "tabular-nums" } }, value, currency && /* @__PURE__ */ import_react17.default.createElement("span", { style: { fontSize: "1.25rem", fontWeight: 600, color: "var(--text-secondary)" } }, " ", currency)));
    const handlers = interactive ? { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick } : {};
    return href ? /* @__PURE__ */ import_react17.default.createElement("a", { href, style: base, ...handlers }, inner) : /* @__PURE__ */ import_react17.default.createElement("div", { style: base, ...handlers }, inner);
  }

  // ../../x/sc/components/stablecoin/StatusTimeline.jsx
  var import_react18 = __toESM(require_react());
  function StatusTimeline({ steps = [], style }) {
    const stateColor = {
      done: { ring: "var(--fin-up)", bg: "var(--fin-up)", ink: "#fff" },
      current: { ring: "var(--brand-deep-blue)", bg: "var(--brand-deep-blue)", ink: "#fff" },
      pending: { ring: "var(--neutral-300)", bg: "var(--brand-white)", ink: "var(--text-secondary)" },
      blocked: { ring: "var(--error)", bg: "var(--error)", ink: "#fff" },
      queued: { ring: "var(--warning)", bg: "var(--warning)", ink: "#fff" }
    };
    return /* @__PURE__ */ import_react18.default.createElement("ol", { style: { listStyle: "none", margin: 0, padding: 0, fontFamily: "var(--font-body)", ...style } }, steps.map((s, i) => {
      const c = stateColor[s.state] || stateColor.pending;
      const last = i === steps.length - 1;
      return /* @__PURE__ */ import_react18.default.createElement("li", { key: i, style: { display: "grid", gridTemplateColumns: "28px 1fr", gap: "0.85rem", position: "relative" } }, /* @__PURE__ */ import_react18.default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ import_react18.default.createElement("span", { style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        flexShrink: 0,
        background: c.bg,
        border: `2px solid ${c.ring}`,
        color: c.ink,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, s.state === "done" && /* @__PURE__ */ import_react18.default.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react18.default.createElement("path", { d: "M5 13l4 4L19 7" })), s.state === "current" && /* @__PURE__ */ import_react18.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#fff" } }), s.state === "blocked" && /* @__PURE__ */ import_react18.default.createElement("svg", { viewBox: "0 0 24 24", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }, /* @__PURE__ */ import_react18.default.createElement("path", { d: "M6 6l12 12M18 6L6 18" })), s.state === "queued" && /* @__PURE__ */ import_react18.default.createElement("svg", { viewBox: "0 -960 960 960", width: "14", height: "14", fill: "currentColor" }, /* @__PURE__ */ import_react18.default.createElement("path", { d: "M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z" }))), !last && /* @__PURE__ */ import_react18.default.createElement("span", { style: { flex: 1, width: 2, minHeight: 22, background: s.state === "done" ? "var(--fin-up)" : "var(--neutral-200)", marginTop: 2 } })), /* @__PURE__ */ import_react18.default.createElement("div", { style: { paddingBottom: last ? 0 : "1.1rem" } }, /* @__PURE__ */ import_react18.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" } }, /* @__PURE__ */ import_react18.default.createElement("span", { style: {
        fontSize: "0.9rem",
        fontWeight: s.state === "current" ? 700 : 600,
        color: s.state === "pending" ? "var(--text-secondary)" : "var(--text-primary)"
      } }, s.label), s.time && /* @__PURE__ */ import_react18.default.createElement("span", { style: { fontSize: "0.72rem", color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" } }, s.time)), s.detail && /* @__PURE__ */ import_react18.default.createElement("div", { style: { fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 } }, s.detail)));
    }));
  }

  // ../../x/sc/components/stablecoin/WalletPill.jsx
  var import_react19 = __toESM(require_react());
  function WalletPill({ connected = false, address = "", balance = "", network = "Ethereum", initials = "JS", onConnect, onClick, onNetwork, style }) {
    const short = address ? `${address.slice(0, 6)}\u2026${address.slice(-4)}` : "";
    if (!connected) {
      return /* @__PURE__ */ import_react19.default.createElement("button", { type: "button", onClick: onConnect, style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "var(--reserve-gold)",
        color: "var(--brand-deep-blue)",
        border: "none",
        borderRadius: "var(--radius-pill, 980px)",
        padding: "0.4rem 0.9rem",
        fontWeight: 700,
        fontSize: "0.8rem",
        fontFamily: "var(--font-body)",
        cursor: "pointer",
        minHeight: 34,
        ...style
      } }, /* @__PURE__ */ import_react19.default.createElement("svg", { width: "16", height: "16", viewBox: "0 -960 960 960", fill: "currentColor" }, /* @__PURE__ */ import_react19.default.createElement("path", { d: "M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 15v-40q0-33-23.5-56.5T720-740H240q-33 0-56.5 23.5T160-660v40q18-10 38-15t42-5Z" })), "Connect wallet");
    }
    return /* @__PURE__ */ import_react19.default.createElement("div", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.3125rem",
      padding: "0.125rem 0.375rem 0.125rem 0.25rem",
      background: "var(--brand-white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill, 980px)",
      boxShadow: "0 1px 4px rgba(23,61,71,0.08)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      ...style
    } }, /* @__PURE__ */ import_react19.default.createElement("span", { style: { width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: "var(--brand-deep-blue)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 600 } }, initials), /* @__PURE__ */ import_react19.default.createElement("button", { type: "button", onClick, style: { display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.2, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", padding: "0.0625rem 0.125rem" } }, /* @__PURE__ */ import_react19.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: "0.125rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" } }, short, /* @__PURE__ */ import_react19.default.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { opacity: 0.55 } }, /* @__PURE__ */ import_react19.default.createElement("path", { d: "M6 9l6 6 6-6" }))), /* @__PURE__ */ import_react19.default.createElement("span", { style: { fontSize: "0.6875rem", color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" } }, balance)), /* @__PURE__ */ import_react19.default.createElement("button", { type: "button", onClick: onNetwork, style: { display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.25rem 0.5rem", background: "var(--neutral-200)", border: "none", borderRadius: "var(--radius-lg, 8px)", cursor: "pointer", fontFamily: "var(--font-body)" } }, /* @__PURE__ */ import_react19.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#627EEA" } }), /* @__PURE__ */ import_react19.default.createElement("span", { style: { fontSize: "0.6875rem", fontWeight: 600, color: "var(--text-secondary)" } }, network)));
  }
  return __toCommonJS(stdin_exports);
})();
window.UNERAStablecoinDS = Object.assign(window.UNERAStablecoinDS || {}, __ds_tmp); window.__DS__ = window.UNERAStablecoinDS;
