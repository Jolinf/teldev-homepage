/* @ds-bundle: {"format":4,"namespace":"TELDEV","components":[
  {"name":"Button"},{"name":"TextLink"},{"name":"Input"},{"name":"Textarea"},{"name":"Select"},
  {"name":"Checkbox"},{"name":"RadioSegmented"},{"name":"Badge"},{"name":"ImagePlaceholder"},
  {"name":"Header"},{"name":"Footer"},{"name":"SplitHero"},{"name":"HeroVisual"},{"name":"LayeredVisual"},{"name":"PageHero"},{"name":"VisualCards"},{"name":"Reveal"},{"name":"SectionHeader"},
  {"name":"ServiceCard"},{"name":"ServiceDetail"},{"name":"StrategicPillars"},{"name":"ProcessSteps"},
  {"name":"LogoStrip"},{"name":"Testimonial"},{"name":"CaseStudy"},{"name":"EventHighlight"},
  {"name":"BlogCard"},{"name":"ArticleProse"},{"name":"TeamCard"},{"name":"StatBlock"},
  {"name":"CTABanner"},{"name":"Breadcrumbs"},{"name":"Pagination"},{"name":"EmptyState"},
  {"name":"NotFound"},{"name":"Timeline"},{"name":"ContactForm"}
]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState;
  var useEffect = React.useEffect;
  var useRef = React.useRef;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(" ");
  }

  /* ---------------------------------------------------------------------
   * Icon — a small local SVG set in this system's stroke language
   * (24x24, stroke=currentColor, no fill, round caps/joins, 1.75 default
   * weight). Ships here only so previews render with no network access.
   * The real implementation imports the named icon from `lucide-react`;
   * each component's README says which names it uses.
   * ------------------------------------------------------------------- */
  var ICONS = {
    menu: [["line", { x1: 4, y1: 7, x2: 20, y2: 7 }], ["line", { x1: 4, y1: 12, x2: 20, y2: 12 }], ["line", { x1: 4, y1: 17, x2: 20, y2: 17 }]],
    x: [["line", { x1: 6, y1: 6, x2: 18, y2: 18 }], ["line", { x1: 18, y1: 6, x2: 6, y2: 18 }]],
    "chevron-down": [["polyline", { points: "6 9 12 15 18 9" }]],
    "chevron-left": [["polyline", { points: "15 6 9 12 15 18" }]],
    "chevron-right": [["polyline", { points: "9 6 15 12 9 18" }]],
    "arrow-right": [["line", { x1: 4, y1: 12, x2: 20, y2: 12 }], ["polyline", { points: "13 5 20 12 13 19" }]],
    check: [["polyline", { points: "5 13 10 18 19 7" }]],
    "check-circle": [["circle", { cx: 12, cy: 12, r: 9 }], ["polyline", { points: "8 12.5 11 15.5 16 9" }]],
    "alert-triangle": [["path", { d: "M12 3.5 21.5 20h-19L12 3.5Z" }], ["line", { x1: 12, y1: 9.5, x2: 12, y2: 14 }], ["circle", { cx: 12, cy: 17, r: 0.6, fill: "currentColor" }]],
    "alert-circle": [["circle", { cx: 12, cy: 12, r: 9 }], ["line", { x1: 12, y1: 7.5, x2: 12, y2: 13 }], ["circle", { cx: 12, cy: 16.2, r: 0.6, fill: "currentColor" }]],
    info: [["circle", { cx: 12, cy: 12, r: 9 }], ["line", { x1: 12, y1: 11, x2: 12, y2: 16.5 }], ["circle", { cx: 12, cy: 7.7, r: 0.6, fill: "currentColor" }]],
    sun: [["circle", { cx: 12, cy: 12, r: 4 }], ["line", { x1: 12, y1: 2, x2: 12, y2: 4.5 }], ["line", { x1: 12, y1: 19.5, x2: 12, y2: 22 }], ["line", { x1: 2, y1: 12, x2: 4.5, y2: 12 }], ["line", { x1: 19.5, y1: 12, x2: 22, y2: 12 }], ["line", { x1: 4.9, y1: 4.9, x2: 6.6, y2: 6.6 }], ["line", { x1: 17.4, y1: 17.4, x2: 19.1, y2: 19.1 }], ["line", { x1: 4.9, y1: 19.1, x2: 6.6, y2: 17.4 }], ["line", { x1: 17.4, y1: 6.6, x2: 19.1, y2: 4.9 }]],
    moon: [["path", { d: "M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5Z" }]],
    mail: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["polyline", { points: "3.5 6 12 13 20.5 6" }]],
    phone: [["path", { d: "M6.5 3h3l1.5 4.5-2 1.7a13 13 0 0 0 5.8 5.8l1.7-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" }]],
    "map-pin": [["path", { d: "M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z" }], ["circle", { cx: 12, cy: 9.5, r: 2.3 }]],
    linkedin: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 3 }], ["line", { x1: 7.5, y1: 10, x2: 7.5, y2: 17 }], ["circle", { cx: 7.5, cy: 6.8, r: 0.6, fill: "currentColor" }], ["path", { d: "M11.5 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" }], ["line", { x1: 11.5, y1: 10, x2: 11.5, y2: 17 }]],
    instagram: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 5 }], ["circle", { cx: 12, cy: 12, r: 4 }], ["circle", { cx: 17, cy: 7, r: 0.7, fill: "currentColor" }]],
    "search-x": [["circle", { cx: 10.5, cy: 10.5, r: 6.5 }], ["line", { x1: 20, y1: 20, x2: 15.3, y2: 15.3 }], ["line", { x1: 8.5, y1: 8.5, x2: 12.5, y2: 12.5 }], ["line", { x1: 12.5, y1: 8.5, x2: 8.5, y2: 12.5 }]],
    inbox: [["path", { d: "M3.5 12h4.5l1.5 3h5l1.5-3h4.5" }], ["path", { d: "M5.5 5.5h13l2 6.5v6a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 18v-6l2-6.5Z" }]],
    "file-question": [["path", { d: "M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7 3.5Z" }], ["line", { x1: 14, y1: 3.5, x2: 14, y2: 8, }], ["line", { x1: 14, y1: 8, x2: 18, y2: 8 }], ["path", { d: "M10.3 13.2a1.7 1.7 0 1 1 2.2 1.6c-.6.2-.9.6-.9 1.2" }], ["circle", { cx: 11.6, cy: 17.8, r: 0.5, fill: "currentColor" }]],
    building: [["rect", { x: 4, y: 3, width: 16, height: 18, rx: 1 }], ["line", { x1: 8, y1: 7, x2: 8, y2: 7.01 }], ["line", { x1: 12, y1: 7, x2: 12, y2: 7.01 }], ["line", { x1: 16, y1: 7, x2: 16, y2: 7.01 }], ["line", { x1: 8, y1: 11, x2: 8, y2: 11.01 }], ["line", { x1: 12, y1: 11, x2: 12, y2: 11.01 }], ["line", { x1: 16, y1: 11, x2: 16, y2: 11.01 }], ["line", { x1: 8, y1: 15, x2: 8, y2: 15.01 }], ["line", { x1: 16, y1: 15, x2: 16, y2: 15.01 }], ["path", { d: "M9.5 21v-3.5h5V21" }]],
    server: [["rect", { x: 4, y: 4, width: 16, height: 6.5, rx: 1.2 }], ["rect", { x: 4, y: 13.5, width: 16, height: 6.5, rx: 1.2 }], ["line", { x1: 7, y1: 7.2, x2: 7, y2: 7.21 }], ["line", { x1: 7, y1: 16.7, x2: 7, y2: 16.71 }]],
    cloud: [["path", { d: "M7.5 18.5a4.5 4.5 0 0 1-.5-9 5.5 5.5 0 0 1 10.6-1.7A4 4 0 0 1 17 18.5H7.5Z" }]],
    sparkles: [["path", { d: "M12 3.5 13 8l4.5 1-4.5 1-1 4.5-1-4.5L6.5 9 11 8Z" }], ["path", { d: "M18.5 14.5 19 16.5 21 17 19 17.5 18.5 19.5 18 17.5 16 17 18 16.5Z" }]],
    "arrow-up-right": [["line", { x1: 7, y1: 17, x2: 17, y2: 7 }], ["polyline", { points: "8 7 17 7 17 16" }]]
  };
  function Icon(props) {
    var name = props.name, size = props.size || 20, strokeWidth = props.strokeWidth || (size <= 16 ? 2 : 1.75);
    var parts = ICONS[name] || ICONS.info;
    return h(
      "svg",
      { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", className: props.className, style: props.style },
      parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); })
    );
  }

  /* ---------------------------------------------------------------------
   * Button — variants primary/secondary/ghost/link, sizes sm/md/lg,
   * optional icon, disabled + loading states.
   * ------------------------------------------------------------------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var size = props.size || "md";
    var iconName = props.icon;
    var iconPosition = props.iconPosition || "trailing";
    var loading = !!props.loading;
    var disabled = !!props.disabled || loading;
    var as = props.as || "button";
    var iconSize = size === "sm" ? 16 : 18;
    var content = [
      iconName && iconPosition === "leading" && h(Icon, { key: "i1", name: iconName, size: iconSize }),
      h("span", { key: "t" }, props.children),
      iconName && iconPosition === "trailing" && h(Icon, { key: "i2", name: iconName, size: iconSize }),
      loading && h(Icon, { key: "sp", name: "sparkles", size: iconSize, className: "ds-spinner" })
    ];
    var cls = cx("ds-btn", "ds-btn--" + variant, "ds-btn--" + size, loading && "is-loading");
    var common = { className: cx(cls, props.className), onClick: disabled ? undefined : props.onClick, "aria-disabled": disabled || undefined, "aria-busy": loading || undefined };
    if (as === "a") {
      return h("a", Object.assign({ href: disabled ? undefined : props.href, role: "button", tabIndex: disabled ? -1 : 0 }, common), content);
    }
    return h("button", Object.assign({ type: props.type || "button", disabled: disabled }, common), content);
  }

  /* ---------------------------------------------------------------------
   * TextLink — standalone and inline-in-copy
   * ------------------------------------------------------------------- */
  function TextLink(props) {
    return h("a", { href: props.href || "#", className: cx("ds-link", props.inline && "ds-link--inline", props.className), target: props.external ? "_blank" : undefined, rel: props.external ? "noreferrer" : undefined },
      props.children,
      props.external && h(Icon, { name: "arrow-up-right", size: 14, style: { marginLeft: 3, verticalAlign: "-1px" } })
    );
  }

  /* ---------------------------------------------------------------------
   * Form field primitives
   * ------------------------------------------------------------------- */
  function FieldLabel(props) {
    return h("label", { className: "label ds-label", htmlFor: props.htmlFor }, props.children, props.required && h("span", { className: "ds-required", "aria-hidden": "true" }, "*"));
  }
  function HelperText(props) { return h("p", { className: "small ds-helper", id: props.id }, props.children); }
  function ErrorText(props) { return h("p", { className: "small ds-error-text", id: props.id, role: "alert" }, h(Icon, { name: "alert-circle", size: 14 }), props.children); }
  function SuccessText(props) { return h("p", { className: "small ds-success-text", id: props.id }, h(Icon, { name: "check-circle", size: 14 }), props.children); }

  function fieldIds(base) { return { helpId: base + "-help", errId: base + "-err" }; }

  function Input(props) {
    var id = props.id || "field"; var ids = fieldIds(id);
    var describedBy = [props.error ? ids.errId : (props.helper ? ids.helpId : null)].filter(Boolean).join(" ") || undefined;
    return h("div", { className: "ds-field" },
      props.label && h(FieldLabel, { htmlFor: id, required: props.required }, props.label),
      h("input", { id: id, className: "ds-control", type: props.type || "text", placeholder: props.placeholder, defaultValue: props.defaultValue, disabled: props.disabled, "aria-invalid": !!props.error, "aria-describedby": describedBy, required: props.required }),
      props.error ? h(ErrorText, { id: ids.errId }, props.error) : (props.success ? h(SuccessText, null, props.success) : (props.helper && h(HelperText, { id: ids.helpId }, props.helper)))
    );
  }

  function Textarea(props) {
    var id = props.id || "field"; var ids = fieldIds(id);
    return h("div", { className: "ds-field" },
      props.label && h(FieldLabel, { htmlFor: id, required: props.required }, props.label),
      h("textarea", { id: id, className: "ds-control", rows: props.rows || 5, placeholder: props.placeholder, defaultValue: props.defaultValue, "aria-invalid": !!props.error, "aria-describedby": props.error ? ids.errId : ids.helpId }),
      props.error ? h(ErrorText, { id: ids.errId }, props.error) : (props.helper && h(HelperText, { id: ids.helpId }, props.helper))
    );
  }

  function Select(props) {
    var id = props.id || "field"; var ids = fieldIds(id);
    return h("div", { className: "ds-field" },
      props.label && h(FieldLabel, { htmlFor: id, required: props.required }, props.label),
      h("div", { className: "ds-select-wrap" },
        h("select", { id: id, className: "ds-control", defaultValue: props.defaultValue, "aria-invalid": !!props.error, "aria-describedby": props.error ? ids.errId : ids.helpId },
          (props.options || []).map(function (o) { return h("option", { key: o.value, value: o.value }, o.label); })
        ),
        h(Icon, { name: "chevron-down", size: 18, className: "ds-chevron" })
      ),
      props.error ? h(ErrorText, { id: ids.errId }, props.error) : (props.helper && h(HelperText, { id: ids.helpId }, props.helper))
    );
  }

  function Checkbox(props) {
    return h("label", { className: "ds-checkbox-row" },
      h("input", { type: "checkbox", className: "ds-checkbox", defaultChecked: props.defaultChecked, disabled: props.disabled }),
      h("span", { className: "body" }, props.children)
    );
  }

  function RadioSegmented(props) {
    var options = props.options || [];
    var initial = props.defaultValue || (options[0] && options[0].value);
    var state = useState(initial), value = state[0], setValue = state[1];
    return h("div", { className: "ds-field" },
      props.label && h("span", { className: "label ds-label" }, props.label),
      h("div", { className: "ds-segmented", role: "radiogroup", "aria-label": props.label || "Options" },
        options.map(function (o) {
          var checked = value === o.value;
          return h("button", { key: o.value, type: "button", role: "radio", "aria-checked": checked, className: "ds-segmented__opt", onClick: function () { setValue(o.value); if (props.onChange) props.onChange(o.value); } }, o.label);
        })
      ),
      props.helper && h(HelperText, null, props.helper)
    );
  }

  /* ---------------------------------------------------------------------
   * Badge
   * ------------------------------------------------------------------- */
  function Badge(props) {
    var tone = props.tone || "neutral";
    return h("span", { className: cx("ds-badge", "ds-badge--" + tone, "label-sm") }, props.icon && h(Icon, { name: props.icon, size: 13 }), props.children);
  }

  /* ---------------------------------------------------------------------
   * ImagePlaceholder
   * ------------------------------------------------------------------- */
  function ImagePlaceholder(props) {
    var ratio = props.ratio || "16x9";
    return h("div", { className: "ds-imgph ds-imgph--" + ratio, style: props.style },
      h("div", { className: "ds-imgph__body" },
        h(Icon, { name: "sparkles", size: 28, className: "ds-imgph__icon" }),
        props.label && h("span", { className: "small", style: { color: "var(--text-muted)" } }, props.label)
      ),
      props.note && h("div", { className: "ds-imgph__note caption" }, props.note)
    );
  }

  /* ---------------------------------------------------------------------
   * Header / navigation
   * ------------------------------------------------------------------- */
  var SERVICES = [
    { name: "Website development", desc: "Marketing sites and web apps.", icon: "building" },
    { name: "IT support, helpdesk & networking", desc: "Keep the day-to-day running.", icon: "server" },
    { name: "Cloud & Microsoft 365 setup", desc: "Migrate and configure with confidence.", icon: "cloud" },
    { name: "AI, automation & custom software", desc: "Purpose-built tools for your workflow.", icon: "sparkles" }
  ];
  function Logomark(props) {
    var size = props.size || 28;
    return h("svg", { width: size, height: size * (34 / 36), viewBox: "0 0 36 34", fill: "none", "aria-hidden": "true" },
      h("path", { d: "M12.9585 30.6955C12.9585 30.6955 26.0549 30.9402 26.4685 30.8179C26.4685 30.8179 27.9849 30.2065 26.8821 30.6956C25.7792 31.1848 26.7442 32.1861 26.7442 33.1411H12.9585V30.6955Z", fill: props.mono ? "currentColor" : "#1C6CFE" }),
      h("path", { d: "M0 0.125H27.8471V7.78807H23.7114V3.79348H15.9914V33.875H11.8557V3.79348H4.1357V7.78807H0V0.125Z", fill: props.mono ? "currentColor" : "#1C6CFE" }),
      h("path", { d: "M23.7615 33.875C30.1614 33.875 33.3613 29.8479 33.3613 21.7936C33.3613 18.6411 32.5778 16.1191 31.0106 14.2275C29.4435 12.3259 27.316 11.375 24.6283 11.375L19.7848 11.375V14.3597H24.6764C28.8593 14.5122 30.6035 16.7648 30.6035 22.053C30.6035 24.9004 30.0782 27.1275 29.0276 28.7343C27.977 30.3309 26.5325 31.1292 24.6939 31.1292C23.8272 31.1292 23.1005 31.2309 22.5139 31.1292H15.9914V33.875H23.7615Z", fill: props.mono ? "currentColor" : "#1C6CFE" }),
      h("path", { d: "M24.5015 33.875C31.5109 33.875 35.0156 29.8479 35.0156 21.7936C35.0156 18.6411 34.1574 16.1191 32.441 14.2275C30.7246 12.3259 28.3946 11.375 25.4508 11.375L20.1461 11.375V14.3597H25.5035C30.0848 14.5122 31.9952 16.7648 31.9952 22.053C31.9952 24.9004 31.4198 27.1275 30.2692 28.7343C29.1185 30.3309 27.5364 31.1292 25.5227 31.1292C24.5735 31.1292 23.7776 31.2309 23.1351 31.1292H15.9914V33.875H24.5015Z", fill: props.mono ? "currentColor" : "#1C6CFE" })
    );
  }
  function ThemeToggle(props) {
    var isDark = props.isDark, onToggle = props.onToggle;
    return h("button", { type: "button", className: "ds-theme-toggle", "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode", onClick: onToggle }, h(Icon, { name: isDark ? "sun" : "moon", size: 18 }));
  }
  function Header(props) {
    var dropState = useState(false), servicesOpen = dropState[0], setServicesOpen = dropState[1];
    var mobileState = useState(false), mobileOpen = mobileState[0], setMobileOpen = mobileState[1];
    var themeState = useState(false), isDark = themeState[0], setDark = themeState[1];
    return h("header", { className: "ds-header" },
      h("div", { className: "ds-container ds-header__bar" },
        h("a", { href: "#", className: "ds-header__logo" }, h(Logomark, null), h("span", { className: "h6" }, "TELDEV")),
        h("nav", { className: "ds-nav", "aria-label": "Primary" },
          h("div", { className: "ds-dropdown", onMouseLeave: function () { setServicesOpen(false); } },
            h("button", { type: "button", className: "ds-nav__link", "aria-expanded": servicesOpen, "aria-haspopup": "true", onClick: function () { setServicesOpen(!servicesOpen); } },
              "Services", h(Icon, { name: "chevron-down", size: 16 })),
            servicesOpen && h("div", { className: "ds-dropdown__panel", role: "menu" },
              SERVICES.map(function (s) { return h("a", { key: s.name, href: "#", role: "menuitem", className: "ds-dropdown__item" }, h("strong", { className: "label" }, s.name), h("span", { className: "small" }, s.desc)); })
            )
          ),
          h("a", { href: "#" }, "About"),
          h("a", { href: "#" }, "Partnerships"),
          h("a", { href: "#" }, "Work"),
          h("a", { href: "#" }, "Blog")
        ),
        h("div", { className: "ds-row", style: { gap: "12px" } },
          h(ThemeToggle, { isDark: isDark, onToggle: function () { setDark(!isDark); } }),
          h("div", { style: { display: window.innerWidth < 1024 ? "block" : "none" } }),
          h(Button, { variant: "primary", size: "sm", className: "ds-header__nav-cta" }, "Contact"),
          h("button", { type: "button", className: "ds-header__mobile-btn", "aria-label": mobileOpen ? "Close menu" : "Open menu", "aria-expanded": mobileOpen, onClick: function () { setMobileOpen(!mobileOpen); } }, h(Icon, { name: mobileOpen ? "x" : "menu", size: 20 }))
        )
      ),
      mobileOpen && h("div", { className: "ds-container", style: { paddingBottom: "16px" } },
        h("div", { className: "ds-mobile-sheet ds-stack" },
          h("a", { href: "#" }, "Services"), h("a", { href: "#" }, "About"), h("a", { href: "#" }, "Partnerships"), h("a", { href: "#" }, "Work"), h("a", { href: "#" }, "Blog"),
          h(Button, { variant: "primary" }, "Contact")
        )
      )
    );
  }

  /* ---------------------------------------------------------------------
   * Footer
   * ------------------------------------------------------------------- */
  function Footer() {
    return h("footer", { className: "ds-footer" },
      h("div", { className: "ds-container" },
        h("div", { className: "ds-footer__cols" },
          h("div", { className: "ds-stack", style: { gap: "12px", maxWidth: "320px" } },
            h("div", { className: "ds-row", style: { gap: "8px" } }, h(Logomark, { size: 24 }), h("span", { className: "h6" }, "TELDEV")),
            h("p", { className: "small" }, "Bringing technology to you.")
          ),
          h("div", { className: "ds-stack", style: { gap: "10px" } }, h("span", { className: "label-sm" }, "Company"), h("a", { href: "#" }, "About"), h("a", { href: "#" }, "Partnerships"), h("a", { href: "#" }, "Work"), h("a", { href: "#" }, "Blog")),
          h("div", { className: "ds-stack", style: { gap: "10px" } }, h("span", { className: "label-sm" }, "Services"), SERVICES.map(function (s) { return h("a", { key: s.name, href: "#" }, s.name); })),
          h("div", { className: "ds-stack", style: { gap: "10px" } },
            h("span", { className: "label-sm" }, "Contact"),
            h("span", { className: "small ds-row", style: { gap: "8px" } }, h(Icon, { name: "map-pin", size: 15 }), "Lagos, Nigeria"),
            h("a", { href: "mailto:contact@teldev.org", className: "small ds-row", style: { gap: "8px" } }, h(Icon, { name: "mail", size: 15 }), "contact@teldev.org"),
            h("a", { href: "tel:+2347084036561", className: "small ds-row", style: { gap: "8px" } }, h(Icon, { name: "phone", size: 15 }), "+234 708 403 6561")
          )
        ),
        h("div", { className: "ds-footer__bottom" },
          h("span", { className: "caption" }, "© ", new Date().getFullYear(), " TELDEV Technologies. All rights reserved. · ", h(TextLink, { href: "#", inline: true }, "Privacy")),
          h("div", { className: "ds-row", style: { gap: "8px" } },
            h("a", { href: "#", className: "ds-social", "aria-label": "TELDEV on LinkedIn" }, h(Icon, { name: "linkedin", size: 18 })),
            h("a", { href: "#", className: "ds-social", "aria-label": "TELDEV on Instagram" }, h(Icon, { name: "instagram", size: 18 }))
          )
        )
      )
    );
  }

  /* ---------------------------------------------------------------------
   * useInView — shared scroll trigger for Reveal, CountUp, LayeredVisual.
   * `seen` flips true once; `inView` tracks visibility so idle drift can
   * pause off-screen. Both start true without IntersectionObserver, so
   * content is never left hidden.
   * ------------------------------------------------------------------- */
  function useInView(once) {
    var ref = useRef(null);
    var can = typeof window !== "undefined" && "IntersectionObserver" in window;
    var a = useState(!can), seen = a[0], setSeen = a[1];
    var b = useState(!can), inView = b[0], setInView = b[1];
    useEffect(function () {
      if (!can || !ref.current) return;
      var io = new window.IntersectionObserver(function (entries) {
        var v = entries[0].isIntersecting;
        setInView(v);
        if (v) { setSeen(true); if (once) io.disconnect(); }
      }, { threshold: 0.15 });
      io.observe(ref.current);
      return function () { io.disconnect(); };
    }, []);
    return { ref: ref, seen: seen, inView: inView };
  }
  function prefersReducedMotion() {
    return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* Reveal — fades + rises its children in once, on first scroll into view. */
  function Reveal(props) {
    var v = useInView(true);
    return h(props.as || "div", {
      ref: v.ref,
      className: cx("ds-reveal", v.seen && "is-in", props.className),
      style: Object.assign({ transitionDelay: (props.delay || 0) + "ms" }, props.style)
    }, props.children);
  }

  /* CountUp — animates the number inside a string ("99.9%", "1,200+") from 0
     when it scrolls into view. Non-numeric strings (e.g. an em-dash) render as-is. */
  function CountUp(props) {
    var text = String(props.value);
    var m = /^([^\d]*)(\d[\d,]*\.?\d*)(.*)$/.exec(text);
    var v = useInView(true);
    var st = useState(null), n = st[0], setN = st[1];
    useEffect(function () {
      if (!m || !v.seen) return;
      var target = parseFloat(m[2].replace(/,/g, ""));
      if (prefersReducedMotion() || typeof window.requestAnimationFrame !== "function") { setN(target); return; }
      var start = null, dur = props.duration || 1200, raf;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = window.requestAnimationFrame(step);
      }
      raf = window.requestAnimationFrame(step);
      return function () { window.cancelAnimationFrame(raf); };
    }, [v.seen]);
    if (!m) return h("span", { ref: v.ref }, text);
    var decimals = (m[2].split(".")[1] || "").length;
    var shown = n === null ? "0" : Number(n).toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return h("span", { ref: v.ref },
      h("span", { className: "ds-sr-only" }, text),
      h("span", { "aria-hidden": "true" }, m[1], shown, m[3]));
  }

  /* ---------------------------------------------------------------------
   * Visual cards — the small "live status" cards layered over photos.
   * Each is plain content; LayeredVisual positions and animates them.
   * ------------------------------------------------------------------- */
  function CardHead(p) {
    return h("div", { className: "ds-row", style: { gap: "10px" } },
      p.icon && h("span", { className: "ds-icon-tile ds-icon-tile--sm" }, h(Icon, { name: p.icon, size: 18 })),
      h("div", { style: { minWidth: 0 } },
        h("div", { className: "label" }, p.title),
        p.sub && h("div", { className: "caption", style: { color: "var(--text-muted)" } }, p.sub)));
  }
  function ProgressCard(p) {
    var val = p.value || 0;
    return h("div", { className: "ds-vc" },
      h(CardHead, { icon: p.icon, title: p.title, sub: p.sub }),
      h("div", { className: "ds-lv__bar" }, h("div", { className: "ds-lv__bar-fill", style: { width: val + "%" } })),
      h("div", { className: "ds-row caption", style: { justifyContent: "space-between", color: "var(--text-muted)", gap: "12px" } },
        h("span", null, p.foot), h("span", { className: "code-sm", style: { color: "var(--text)" } }, val + "%")));
  }
  function TicketCard(p) {
    return h("div", { className: "ds-vc" },
      h("div", { className: "ds-row", style: { gap: "10px", justifyContent: "space-between" } },
        h("span", { className: "code-sm", style: { color: "var(--text-muted)" } }, p.code),
        p.status && h(Badge, { tone: p.tone || "success", icon: p.statusIcon || "check-circle" }, p.status)),
      h("div", { className: "label" }, p.title),
      p.sub && h("div", { className: "caption", style: { color: "var(--text-muted)" } }, p.sub));
  }
  function FlowCard(p) {
    var steps = p.steps || [];
    var done = p.doneIndex === undefined ? steps.length - 1 : p.doneIndex;
    return h("div", { className: "ds-vc" },
      p.label && h("div", { className: "caption", style: { color: "var(--text-muted)" } }, p.label),
      h("div", { className: "ds-row ds-lv__flow" }, steps.map(function (s, i) {
        return h(React.Fragment, { key: s },
          i > 0 && h(Icon, { name: "arrow-right", size: 14 }),
          h("span", { className: cx("ds-lv__chip", i === done && "ds-lv__chip--done") }, i === done && h(Icon, { name: "check", size: 13 }), s));
      })));
  }
  function MetricCard(p) {
    return h("div", { className: "ds-vc" },
      h("div", { className: "ds-row", style: { gap: "8px", color: "var(--text-muted)" } }, p.icon && h(Icon, { name: p.icon, size: 16 }), h("span", { className: "caption" }, p.label)),
      h("div", { className: "h4", style: { fontWeight: 800, letterSpacing: "-0.02em" } }, p.value),
      p.sub && h("div", { className: "caption", style: { color: "var(--text-muted)" } }, p.sub));
  }
  function InfoCard(p) {
    return h("div", { className: "ds-vc" }, h(CardHead, { icon: p.icon, title: p.title, sub: p.sub }));
  }
  function EventMiniCard(p) {
    return h("div", { className: "ds-row", style: { gap: "12px" } },
      h("div", { className: "ds-event__date", style: { width: "52px" } }, h("div", null, p.mon), h("div", null, p.day)),
      h("div", { style: { minWidth: 0 } },
        h("div", { className: "label" }, p.title),
        p.sub && h("div", { className: "caption", style: { color: "var(--text-muted)" } }, p.sub)));
  }

  /* ---------------------------------------------------------------------
   * LayeredVisual — a photograph with up to four visual cards layered on
   * its corners. The shared picture language of every page hero, the
   * service pages, contact, and (compact) case studies.
   * ------------------------------------------------------------------- */
  var RATIOS = { "16x9": "16 / 9", "4x3": "4 / 3", "1x1": "1 / 1", "3x4": "3 / 4" };
  function LayeredVisual(p) {
    var v = useInView(false);
    var cards = p.cards || [];
    var photo = p.photo || {};
    var ratio = photo.ratio || "4x3";
    var used = cards.map(function (c) { return c.pos || "tl"; });
    var noteSpot = ["tr", "tl", "br", "bl"].filter(function (s) { return used.indexOf(s) === -1; })[0] || "none";
    return h("div", {
      ref: v.ref,
      className: cx("ds-lv", p.compact && "ds-lv--compact", ratio === "16x9" && "ds-lv--wide", "ds-lv--note-" + noteSpot, v.seen && "is-seen", v.inView && "is-in", p.className),
      "aria-hidden": p.decorative === false ? undefined : "true"
    },
      !p.compact && p.grid !== false && h("div", { className: "ds-lv__grid" }),
      h("div", { className: "ds-lv__photo ds-anim-in" },
        photo.src
          ? h("img", { src: photo.src, alt: photo.alt || "", className: "ds-lv__img", style: { aspectRatio: RATIOS[ratio] } })
          : h(ImagePlaceholder, { ratio: ratio, label: photo.label || "Photograph", note: photo.note })),
      cards.map(function (c, i) {
        return h("div", { key: i, className: cx("ds-lv__card", "ds-lv__card--" + (c.pos || "tl"), "ds-lv__card--i" + i, "ds-anim-in"), style: { animationDelay: (180 + i * 180) + "ms", width: c.width } },
          h("div", { className: cx(!p.still && "ds-float", i % 2 === 1 && "ds-float--slow") }, c.content));
      }));
  }

  /* HeroVisual — the homepage preset of LayeredVisual. */
  function HeroVisual(props) {
    return h(LayeredVisual, {
      decorative: props.decorative,
      photo: { src: props.photoSrc, alt: props.photoAlt, label: "Hero photograph", note: "TELDEV engineer working alongside a client, natural light, real Lagos office." },
      cards: [
        { pos: "tl", width: "280px", content: h(ProgressCard, { icon: "cloud", title: "Microsoft 365 migration", sub: "38 of 44 mailboxes moved", value: 86, foot: "Files & identities next" }) },
        { pos: "br", width: "250px", content: h(TicketCard, { code: "Ticket #2481", status: "Resolved", title: "Office printer network restored", sub: "Response in 42 minutes" }) },
        { pos: "bl", content: h(FlowCard, { label: "Automation · runs daily", steps: ["Invoice in", "Approved", "Sent"] }) }
      ]
    });
  }

  /* ---------------------------------------------------------------------
   * PageHero — the interior-page version of the hero: headline on the
   * left, a LayeredVisual on the right, same entrance motion.
   * ------------------------------------------------------------------- */
  function PageHero(p) {
    return h("section", { className: "ds-section ds-hero-section" },
      h("div", { className: "ds-container ds-hero-top" },
        h("div", { className: "ds-stack ds-anim-in", style: { gap: "20px" } },
          p.breadcrumbs && h(Breadcrumbs, { items: p.breadcrumbs }),
          h("h1", { className: "h1" }, p.title, p.accent ? " " : null, p.accent ? h("span", { className: "ds-accent-text" }, p.accent) : null),
          p.lead && h("p", { className: "lead", style: { color: "var(--text-muted)", maxWidth: "540px" } }, p.lead),
          p.actions && h("div", { className: "ds-row ds-wrap", style: { gap: "12px", marginTop: "8px" } }, p.actions)),
        p.visual));
  }

  /* ---------------------------------------------------------------------
   * Split hero
   * ------------------------------------------------------------------- */
  function SplitHero(props) {
    return h("section", { className: "ds-section ds-hero-section" },
      h("div", { className: "ds-container ds-stack", style: { gap: "56px" } },
        h("div", { className: "ds-hero-top" },
          h("div", { className: "ds-stack ds-anim-in", style: { gap: "20px" } },
            h("h1", { className: "display" }, "Bringing technology ", h("span", { className: "ds-accent-text" }, "to you.")),
            h("p", { className: "lead", style: { color: "var(--text-muted)", maxWidth: "540px" } }, "TELDEV helps businesses, institutions and individuals understand, adopt and get real value from technology — starting in Nigeria, with an ambition across Africa.")
          ),
          h(HeroVisual, { photoSrc: props.photoSrc, photoAlt: props.photoAlt })
        ),
        h("div", { className: "ds-hero" },
          h("div", { className: "ds-hero__path ds-hero__path--primary ds-anim-in", style: { animationDelay: "240ms" } },
            h("span", { className: "ds-hero__eyebrow small" }, "For businesses"),
            h("h2", { className: "h3" }, "Hire us"),
            h("p", { className: "body ds-hero__desc" }, "Website development, IT support, cloud setup or custom software — tell us the problem and we'll tell you plainly how we'd solve it."),
            h(Button, { variant: "secondary", icon: "arrow-right" }, "Request a quote")
          ),
          h("div", { className: "ds-hero__path ds-hero__path--secondary ds-anim-in", style: { animationDelay: "320ms" } },
            h("span", { className: "ds-hero__eyebrow small" }, "For sponsors & institutions"),
            h("h2", { className: "h3" }, "Partner with us"),
            h("p", { className: "body ds-hero__desc" }, "We work alongside universities, schools and event organisers on technology education and community impact across Nigeria."),
            h(Button, { variant: "primary", icon: "arrow-right" }, "Start a partnership")
          )
        )
      )
    );
  }

  /* ---------------------------------------------------------------------
   * Section header
   * ------------------------------------------------------------------- */
  function SectionHeader(props) {
    return h("div", { className: cx("ds-sectionhead", props.center && "ds-sectionhead--center") },
      props.overline && h("span", { className: "overline ds-overline", style: { textTransform: "uppercase" } }, props.overline),
      h("h2", { className: "h2" }, props.heading),
      props.lead && h("p", { className: "lead", style: { color: "var(--text-muted)" } }, props.lead)
    );
  }

  /* ---------------------------------------------------------------------
   * Service card, overview, detail
   * ------------------------------------------------------------------- */
  function ServiceCard(props) {
    return h("div", { className: "ds-card ds-card--hover ds-servicecard" },
      h("div", { className: "ds-icon-tile" }, h(Icon, { name: props.icon, size: 22 })),
      h("h3", { className: "h5" }, props.title),
      h("p", { className: "small", style: { color: "var(--text-muted)" } }, props.description),
      h(TextLink, { href: props.href || "#" }, "Learn more →")
    );
  }
  function ServicesOverview() {
    return h("section", { className: "ds-section" },
      h("div", { className: "ds-container ds-stack", style: { gap: "40px" } },
        h(SectionHeader, { overline: "What we do", heading: "Four ways we help", lead: "Live, paid services — not a roadmap." }),
        h("div", { className: "ds-grid-12" },
          SERVICES.map(function (s, i) { return h(Reveal, { key: s.name, delay: i * 90, className: "ds-svc-col" }, h(ServiceCard, { icon: s.icon, title: s.name, description: s.desc })); })
        )
      )
    );
  }

  /* Illustrative copy and card figures per service — replace with real
     examples before launch. */
  var SERVICE_PAGES = {
    web: {
      title: "Website development",
      lead: "Fast, clear websites and web apps your customers can actually use — built, launched and looked after.",
      note: "Designer reviewing a new site on a phone with the client, natural light.",
      problem: "Many small businesses have a site that's slow on mobile data, hard to update, or out of date — so customers call to ask what the website should have told them.",
      what: "We plan pages around what your customers need to do, design and build on a modern stack, and hand over a site your team can update without calling us.",
      outcomes: "A site that loads quickly on mobile, is found for what you sell, and turns visits into enquiries — with support after launch.",
      cards: function () { return [
        { pos: "tl", width: "220px", content: h(MetricCard, { icon: "building", label: "Mobile performance", value: "98", sub: "Lighthouse score" }) },
        { pos: "br", width: "270px", content: h(ProgressCard, { icon: "check-circle", title: "Launch checklist", sub: "11 of 12 done", value: 92, foot: "Last step: domain switch" }) },
        { pos: "bl", content: h(FlowCard, { label: "Every build", steps: ["Design", "Build", "Live"] }) }
      ]; }
    },
    it: {
      title: "IT support, helpdesk & networking",
      lead: "Day-to-day IT that just works — a helpdesk your team can reach, and networks set up properly.",
      note: "TELDEV engineer fixing a network cabinet at a client's office, candid.",
      problem: "When the printer, Wi-Fi or a laptop fails, work stops — and with nobody responsible for IT, fixes take days.",
      what: "We audit your devices and network, fix what's fragile, and give your team one helpdesk to call, with remote and on-site support in Lagos.",
      outcomes: "Fewer outages, faster fixes, and a clear record of every device and licence you own.",
      cards: function () { return [
        { pos: "tl", width: "260px", content: h(TicketCard, { code: "Ticket #2481", status: "Resolved", title: "Office printer network restored", sub: "Response in 42 minutes" }) },
        { pos: "br", width: "220px", content: h(MetricCard, { icon: "server", label: "Network uptime", value: "99.9%", sub: "This month" }) },
        { pos: "bl", width: "270px", content: h(ProgressCard, { icon: "server", title: "Network audit", sub: "7 of 9 sites checked", value: 78, foot: "Report this week" }) }
      ]; }
    },
    cloud: {
      title: "Cloud & Microsoft 365 setup",
      lead: "Move your team onto Microsoft 365 and the cloud, configured properly the first time.",
      note: "Team configuring a client's cloud tenancy, natural light, real Lagos office.",
      problem: "Most small teams either have no IT setup at all, or one that grew ad hoc and nobody fully understands — shared logins, no backups, licences nobody's tracking.",
      what: "We audit what you have, design a Microsoft 365 tenancy around how your team actually works, and migrate your mail, files and identities without a weekend of downtime.",
      outcomes: "Proper accounts and permissions, mail and files backed up, and a support line for when something breaks — typically live within a week.",
      cards: function () { return [
        { pos: "tl", width: "280px", content: h(ProgressCard, { icon: "cloud", title: "Microsoft 365 migration", sub: "38 of 44 mailboxes moved", value: 86, foot: "Files & identities next" }) },
        { pos: "br", width: "220px", content: h(MetricCard, { icon: "cloud", label: "Licences tracked", value: "44", sub: "No unused seats" }) },
        { pos: "bl", content: h(FlowCard, { label: "Migration order", steps: ["Mail", "Files", "Identities"], doneIndex: 0 }) }
      ]; }
    },
    ai: {
      title: "AI, automation & custom software",
      lead: "Software built around how your business already works — with the repetitive parts automated.",
      note: "Developer walking a client's team through a new internal tool, candid.",
      problem: "Staff spend hours re-typing data between spreadsheets, email and accounting tools — slow, and easy to get wrong.",
      what: "We map the workflow, automate the repetitive steps, and build custom tools where off-the-shelf software doesn't fit — using AI only where it clearly helps.",
      outcomes: "Hours back every week, fewer errors, and software your team understands and owns.",
      cards: function () { return [
        { pos: "tl", content: h(FlowCard, { label: "Automation · runs daily", steps: ["Invoice in", "Approved", "Sent"] }) },
        { pos: "br", width: "220px", content: h(MetricCard, { icon: "sparkles", label: "Time saved", value: "11 hrs", sub: "Per week, per team" }) },
        { pos: "bl", width: "270px", content: h(ProgressCard, { icon: "sparkles", title: "Workflow build", sub: "3 of 4 steps live", value: 75, foot: "Testing with your team" }) }
      ]; }
    }
  };
  function ServiceDetail(props) {
    var d = SERVICE_PAGES[props.service] || SERVICE_PAGES.cloud;
    return h("div", null,
      h(PageHero, {
        breadcrumbs: [{ label: "Home", href: "#" }, { label: "Services", href: "#" }, { label: d.title }],
        title: d.title,
        lead: d.lead,
        actions: [
          h(Button, { key: "q", variant: "primary", size: "lg", icon: "arrow-right" }, "Request a quote"),
          h(Button, { key: "w", variant: "ghost", size: "lg" }, "How we work")
        ],
        visual: h(LayeredVisual, { photo: { label: "Service photograph", note: d.note }, cards: d.cards() })
      }),
      h("section", { className: "ds-section ds-section--subtle" },
        h("div", { className: "ds-container" },
          h("div", { className: "ds-detail-cols" },
            [
              { icon: "alert-circle", t: "The problem", b: d.problem },
              { icon: "sparkles", t: "What we do", b: d.what },
              { icon: "check-circle", t: "Outcomes", b: d.outcomes }
            ].map(function (blk, i) {
              return h(Reveal, { key: blk.t, delay: i * 100, className: "ds-card ds-card--onSubtle ds-stack", style: { gap: "12px" } },
                h("span", { className: "ds-icon-tile" }, h(Icon, { name: blk.icon, size: 22 })),
                h("h2", { className: "h5" }, blk.t),
                h("p", { className: "body", style: { color: "var(--text-muted)" } }, blk.b));
            })
          )
        )
      )
    );
  }

  /* ---------------------------------------------------------------------
   * Strategic pillars
   * ------------------------------------------------------------------- */
  var PILLARS = [
    { t: "Accessible technology", d: "Technology explained in plain English and priced for small and growing organisations." },
    { t: "Practical adoption", d: "We start from the problem you have today, not the newest tool on the market." },
    { t: "Local-first, Africa-wide", d: "Built for Nigerian businesses and conditions first, with the rest of Africa in view." },
    { t: "Education & empowerment", d: "Training and community programmes so people use technology with confidence." },
    { t: "Long-term partnership", d: "Support that continues after launch, from people who know your setup." }
  ];
  function StrategicPillars() {
    return h("div", { className: "ds-pillars" },
      PILLARS.map(function (p, i) {
        return h(Reveal, { key: p.t, delay: i * 80, className: "ds-pillar ds-card ds-card--hover" },
          h("span", { className: "h3 ds-pillar__num", "aria-hidden": "true" }, String(i + 1).padStart(2, "0")),
          h("h4", { className: "h6" }, p.t),
          h("p", { className: "small", style: { color: "var(--text-muted)" } }, p.d)
        );
      })
    );
  }

  /* ---------------------------------------------------------------------
   * Process / how we work
   * ------------------------------------------------------------------- */
  var STEPS = [
    { t: "Tell us what you need", d: "A short call or form — hire us or partner with us." },
    { t: "We scope it plainly", d: "A fixed quote or partnership proposal, no jargon." },
    { t: "We build or set it up", d: "Regular updates, nothing disappears into a black box." },
    { t: "We stay reachable", d: "Support after launch, not just at handover." }
  ];
  function ProcessSteps() {
    return h("div", { className: "ds-process" },
      STEPS.map(function (s, i) {
        return h(Reveal, { key: s.t, delay: i * 140, className: "ds-process__step" },
          h("span", { className: "ds-process__num" }, i + 1),
          h("h4", { className: "h6" }, s.t),
          h("p", { className: "small", style: { color: "var(--text-muted)", marginTop: "6px" } }, s.d)
        );
      })
    );
  }

  /* ---------------------------------------------------------------------
   * Proof: logo strip, testimonial, case study, event highlight
   * ------------------------------------------------------------------- */
  function LogoStrip(props) {
    var names = props.names || ["Partner A", "Partner B", "Partner C", "Partner D", "Partner E"];
    return h("div", { className: "ds-logostrip" }, names.map(function (n, i) { return h(Reveal, { key: n, delay: i * 60, className: "ds-logostrip__mark" }, n); }));
  }
  function Testimonial(props) {
    return h("div", { className: "ds-card ds-card--hover ds-testimonial" },
      h(Icon, { name: "sparkles", size: 20, style: { color: "var(--primary)" } }),
      h("p", { className: "h5 ds-testimonial__quote" }, "“", props.quote || "TELDEV set up our whole office in a week and actually explained what they did.", "”"),
      h("div", { className: "ds-testimonial__person" },
        h("div", { className: "ds-avatar" }),
        h("div", null, h("div", { className: "label" }, props.name || "Amaka Obi"), h("div", { className: "small", style: { color: "var(--text-muted)" } }, props.role || "Operations Lead, a Lagos SME"))
      )
    );
  }
  function CaseStudy(props) {
    return h("div", { className: "ds-card ds-card--hover ds-casestudy" },
      h(LayeredVisual, {
        compact: true, still: true,
        photo: { label: "Case study photograph", note: props.note },
        cards: [{ pos: "br", content: h(MetricCard, { icon: props.metricIcon || "check-circle", label: props.metricLabel || "Downtime during move", value: props.metricValue || "0 hrs" }) }]
      }),
      h("div", { className: "ds-stack", style: { gap: "10px", alignItems: "flex-start" } },
        h(Badge, { tone: "success" }, "Case study"),
        h("h3", { className: "h4" }, props.title || "A cloud migration with zero downtime"),
        h("p", { className: "small", style: { color: "var(--text-muted)" } }, props.summary || "How we moved a 40-person team to Microsoft 365 over a weekend."),
        h(TextLink, { href: "#" }, "Read the case study →")
      )
    );
  }
  function EventHighlight(props) {
    var date = props.date || { mon: "Mar", day: "14" };
    var body = [
      h(Badge, { key: "b", tone: "brand" }, props.tag || "Partnership"),
      h("h4", { key: "t", className: "h5", style: { marginTop: "6px" } }, props.title || "NAMS 7th Annual Convention"),
      h("p", { key: "d", className: "small", style: { color: "var(--text-muted)" } }, props.description || "TELDEV supported the technology track alongside the University of Lagos.")
    ];
    if (props.media) {
      return h("div", { className: "ds-card ds-card--hover ds-event--media" },
        h("div", { className: "ds-media" },
          h(ImagePlaceholder, { ratio: "16x9", label: "Event photograph", note: props.note }),
          h("div", { className: "ds-event__date ds-event__date--overlay" }, h("div", null, date.mon), h("div", null, date.day))),
        h("div", { className: "ds-stack", style: { gap: "4px", marginTop: "16px", alignItems: "flex-start" } }, body));
    }
    return h("div", { className: "ds-card ds-card--hover ds-event" },
      h("div", { className: "ds-event__date" }, h("div", null, date.mon), h("div", null, date.day)),
      h("div", null, body)
    );
  }

  /* ---------------------------------------------------------------------
   * Blog card + article prose
   * ------------------------------------------------------------------- */
  function BlogCard(props) {
    return h("article", { className: "ds-blogcard" },
      h("div", { className: "ds-media" },
        h(ImagePlaceholder, { ratio: props.ratio || "3x4", label: "Article image" }),
        h("span", { className: "ds-media__chip" }, h(Badge, { tone: "neutral" }, props.category || "Guides"))),
      h("h3", { className: "h5 ds-blogcard__title" }, h("a", { href: props.href || "#", className: "ds-stretched" }, props.title || "Five signs your business is ready for Microsoft 365")),
      h("p", { className: "small", style: { color: "var(--text-muted)" } }, props.excerpt || "What to check before you move your team's mail and files to the cloud."),
      h("span", { className: "caption", style: { color: "var(--text-muted)" } }, props.date || "12 Mar 2026 · 4 min read")
    );
  }
  function ArticleProse() {
    return h("div", { className: "ds-prose" },
      h("p", { className: "lead" }, "A short lead paragraph sets up the article — larger, lighter, and never longer than two sentences."),
      h("h2", { className: "h3" }, "A first heading"),
      h("p", { className: "body" }, "Body copy uses the ", h("code", null, "body"), " style at 68 characters max width for comfortable reading. Inline links look like ", h("a", { href: "#" }, "this"), ", and inline ", h("code", null, "code"), " uses the mono family."),
      h("blockquote", null, h("p", { className: "body" }, "A pull quote or an excerpt from a source sits in a blockquote, set apart with a brand-coloured rule.")),
      h("h3", { className: "h4" }, "A sub-heading"),
      h("ul", null, h("li", { className: "body" }, "Unordered list item one"), h("li", { className: "body" }, "Unordered list item two")),
      h("pre", null, h("code", null, "npm install @teldev/nothing-real-yet")),
      h("table", null,
        h("thead", null, h("tr", null, h("th", null, "Plan"), h("th", null, "Response time"))),
        h("tbody", null, h("tr", null, h("td", null, "Standard"), h("td", null, "24 hours")), h("tr", null, h("td", null, "Priority"), h("td", null, "4 hours"))))
    );
  }

  /* ---------------------------------------------------------------------
   * Team card, stat block, CTA banner
   * ------------------------------------------------------------------- */
  function TeamCard(props) {
    var name = props.name || "Founder Name";
    return h("div", { className: "ds-teamcard" },
      h("div", { className: "ds-media", style: { maxWidth: "220px" } }, h(ImagePlaceholder, { ratio: "1x1", label: "Portrait", note: props.note })),
      h("h4", { className: "h5" }, name),
      h("span", { className: "small", style: { color: "var(--text-muted)" } }, props.role || "Co-Founder"),
      h("p", { className: "small" }, props.bio || "One or two sentences of real background — never filler."),
      h("a", { href: "#", "aria-label": name + " on LinkedIn", className: "ds-social", style: { width: 36, height: 36 } }, h(Icon, { name: "linkedin", size: 16 }))
    );
  }
  function StatBlock(props) {
    var stats = props.stats || [{ n: "—", l: "Figure supplied later" }, { n: "—", l: "Figure supplied later" }, { n: "—", l: "Figure supplied later" }];
    return h("div", { className: "ds-statblock" }, stats.map(function (s, i) {
      return h(Reveal, { key: i, delay: i * 100 },
        h("div", { className: "display ds-stat__num", style: { fontSize: "40px", lineHeight: "44px" } }, h(CountUp, { value: s.n })),
        h("div", { className: "small", style: { color: "var(--text-muted)" } }, s.l));
    }));
  }
  function CTABanner(props) {
    return h("div", { className: "ds-ctabanner" },
      h("div", { className: "ds-stack", style: { gap: "16px", alignItems: "flex-start" } },
        h("h3", { className: "h3" }, props.heading || "Ready to bring technology to your business?"),
        h("p", { className: "body", style: { opacity: 0.85 } }, props.body || "Tell us what you're trying to do — we'll tell you plainly whether we can help."),
        h(Button, { variant: "secondary", icon: "arrow-right" }, props.cta || "Request a quote")
      ),
      h("div", { className: "ds-ctabanner__visual", "aria-hidden": "true" },
        h("div", { className: "ds-ctabanner__grid" }),
        h(Reveal, { className: "ds-ctabanner__card", delay: 150 },
          h("div", { className: "ds-float" }, props.card || h(FlowCard, { label: "What happens next", steps: ["Enquiry", "Call", "Quote"] }))))
    );
  }

  /* ---------------------------------------------------------------------
   * Breadcrumbs, pagination, empty state, 404
   * ------------------------------------------------------------------- */
  function Breadcrumbs(props) {
    var items = props.items || [];
    return h("nav", { className: "ds-breadcrumbs small", "aria-label": "Breadcrumb" },
      items.map(function (it, i) {
        var last = i === items.length - 1;
        return h(React.Fragment, { key: it.label },
          i > 0 && h(Icon, { name: "chevron-right", size: 14 }),
          last ? h("span", { "aria-current": "page" }, it.label) : h("a", { href: it.href || "#" }, it.label)
        );
      })
    );
  }
  function Pagination(props) {
    var page = props.page || 2, count = props.count || 5;
    var pages = []; for (var i = 1; i <= count; i++) pages.push(i);
    return h("nav", { className: "ds-pagination", "aria-label": "Pagination" },
      h("button", { "aria-label": "Previous page", disabled: page === 1 }, h(Icon, { name: "chevron-left", size: 16 })),
      pages.map(function (p) { return h("button", { key: p, "aria-current": p === page ? "page" : undefined }, p); }),
      h("button", { "aria-label": "Next page", disabled: page === count }, h(Icon, { name: "chevron-right", size: 16 }))
    );
  }
  function EmptyState(props) {
    return h("div", { className: "ds-emptystate" },
      h(Icon, { name: props.icon || "inbox", size: 40, className: "ds-emptystate__icon" }),
      h("h4", { className: "h5" }, props.title || "No enquiries yet"),
      h("p", { className: "small", style: { color: "var(--text-muted)", maxWidth: "320px" } }, props.description || "When someone submits the contact form, it will show up here."),
      props.action && h(Button, { variant: "secondary", size: "sm" }, props.action)
    );
  }
  function NotFound() {
    return h("div", { className: "ds-notfound" },
      h("div", { className: "ds-notfound__card ds-anim-in", "aria-hidden": "true" },
        h("div", { className: "ds-float" }, h(TicketCard, { code: "Error 404", status: "Not found", tone: "warning", statusIcon: "alert-triangle", title: "This page has moved or never existed", sub: "Suggested next step: the homepage" }))),
      h("h1", { className: "h2 ds-anim-in", style: { animationDelay: "120ms" } }, "Page not found"),
      h("p", { className: "body ds-anim-in", style: { color: "var(--text-muted)", maxWidth: "360px", animationDelay: "200ms" } }, "That page doesn't exist, or it's moved. Try the homepage, or get in touch if you followed a broken link."),
      h(Button, { variant: "primary", icon: "arrow-right" }, "Back to homepage")
    );
  }

  /* ---------------------------------------------------------------------
   * Timeline / roadmap
   * ------------------------------------------------------------------- */
  function Timeline() {
    var items = [
      { t: "Nigeria first", d: "Live today: website, IT support, cloud and AI services for Nigerian businesses and institutions.", done: true },
      { t: "Deepen partnerships", d: "Live today: universities, schools and event organisers across Nigeria.", done: true },
      { t: "West Africa", d: "Planned: the same services, extended to neighbouring markets.", done: false },
      { t: "Africa-wide", d: "Planned: proprietary products, built from what we learn along the way.", done: false }
    ];
    return h("div", { className: "ds-timeline" },
      items.map(function (it, i) {
        return h(Reveal, { key: it.t, delay: i * 140, className: cx("ds-timeline__item", it.done && "ds-timeline__item--done") },
          h("span", { className: "ds-timeline__dot" }),
          h("h4", { className: "h6" }, it.t),
          h("p", { className: "small", style: { color: "var(--text-muted)" } }, it.d)
        );
      })
    );
  }

  /* ---------------------------------------------------------------------
   * Contact form (sample composition)
   * ------------------------------------------------------------------- */
  function ContactForm() {
    return h("form", { className: "ds-card ds-stack", style: { gap: "20px", maxWidth: "560px" }, onSubmit: function (e) { e.preventDefault(); } },
      h("div", null, h("h3", { className: "h4" }, "Tell us what you need"), h("p", { className: "small", style: { color: "var(--text-muted)" } }, "We reply within one working day.")),
      h(RadioSegmented, { label: "I'm getting in touch about", options: [{ value: "hire", label: "Hire us" }, { value: "partner", label: "Partnership" }, { value: "other", label: "Other" }], defaultValue: "hire" }),
      h(Input, { id: "name", label: "Full name", placeholder: "Ada Okafor", required: true }),
      h(Input, { id: "email", label: "Email address", type: "email", placeholder: "ada@company.com", required: true, error: "Enter a valid email address." }),
      h(Select, { id: "service", label: "Service of interest", options: [{ value: "", label: "Choose a service" }].concat(SERVICES.map(function (s) { return { value: s.name, label: s.name }; })) }),
      h(Textarea, { id: "message", label: "Message", placeholder: "Tell us a bit about what you need…", required: true }),
      h(Checkbox, { defaultChecked: true }, "I agree to be contacted about this enquiry."),
      h(Button, { variant: "primary", size: "lg", type: "submit" }, "Send message")
    );
  }

  /* ---------------------------------------------------------------------
   * Page compositions — every page opens with a PageHero + LayeredVisual,
   * sections below reveal on scroll. Card figures are illustrative.
   * ------------------------------------------------------------------- */
  function Section(p) {
    return h("section", { className: cx("ds-section", p.subtle && "ds-section--subtle") },
      h("div", { className: "ds-container ds-stack", style: { gap: "40px" } }, p.children));
  }
  var QUOTE_2 = { quote: "They explained every step in plain English — no jargon, no upsell.", name: "Chidi Nwosu", role: "Founder, a Lagos retail brand" };

  function ContactSection() {
    return h("section", { className: "ds-section ds-section--subtle" },
      h("div", { className: "ds-container ds-contact-grid" },
        h("div", { className: "ds-stack", style: { gap: "20px" } },
          h("div", { className: "ds-stack ds-anim-in", style: { gap: "20px" } },
            h(Breadcrumbs, { items: [{ label: "Home", href: "#" }, { label: "Contact" }] }),
            h("h1", { className: "h1" }, "Let's talk about ", h("span", { className: "ds-accent-text" }, "what you need.")),
            h("p", { className: "lead", style: { color: "var(--text-muted)" } }, "Tell us what you're trying to do, and we'll tell you plainly whether we can help.")),
          h(LayeredVisual, {
            photo: { label: "Contact photograph", note: "The TELDEV team at the Lagos office, candid, natural light." },
            cards: [
              { pos: "tl", width: "220px", content: h(MetricCard, { icon: "mail", label: "Typical reply", value: "1 working day" }) },
              { pos: "br", width: "260px", content: h(FlowCard, { label: "What happens next", steps: ["Enquiry", "Call", "Quote"] }) },
              { pos: "bl", content: h(InfoCard, { icon: "map-pin", title: "Lagos, Nigeria", sub: "contact@teldev.org" }) }
            ]
          })),
        h(Reveal, { className: "ds-contact-form" }, h(ContactForm, null))));
  }

  function HomePage() {
    return h("div", null,
      h(Header, null),
      h(SplitHero, null),
      h(ServicesOverview, null),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "How we work", heading: "Plain steps, no black box", lead: "The same four steps whether you hire us or partner with us." }),
        h(ProcessSteps, null)),
      h(Section, null,
        h(SectionHeader, { overline: "Trusted by", heading: "Organisations we work with" }),
        h(LogoStrip, null),
        h("div", { className: "ds-two-col" }, h(Reveal, null, h(Testimonial, null)), h(Reveal, { delay: 120 }, h(Testimonial, QUOTE_2)))),
      h(Section, null, h(Reveal, null, h(CTABanner, null))),
      h(Footer, null));
  }

  function AboutPage() {
    return h("div", null,
      h(Header, null),
      h(PageHero, {
        breadcrumbs: [{ label: "Home", href: "#" }, { label: "About" }],
        title: "Technology should be",
        accent: "accessible to everyone.",
        lead: "We help businesses, institutions and individuals understand, adopt and get real value from technology — starting in Nigeria.",
        visual: h(LayeredVisual, {
          photo: { label: "Team photograph", note: "The TELDEV team together at the Lagos office, candid, natural light." },
          cards: [
            { pos: "tl", width: "230px", content: h(MetricCard, { icon: "building", label: "Services live today", value: "4", sub: "Web · IT · Cloud · AI" }) },
            { pos: "br", width: "290px", content: h(FlowCard, { label: "Where we're heading", steps: ["Nigeria", "West Africa", "Africa"], doneIndex: 0 }) },
            { pos: "bl", content: h(InfoCard, { icon: "map-pin", title: "Based in Lagos", sub: "Working across Nigeria" }) }
          ]
        })
      }),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "What we believe", heading: "Five pillars behind the work" }),
        h(StrategicPillars, null)),
      h(Section, null,
        h("div", { className: "ds-two-col ds-two-col--start" },
          h(SectionHeader, { overline: "Roadmap", heading: "Nigeria first, then Africa", lead: "Where TELDEV is today, and where it's going." }),
          h(Timeline, null))),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "Team", heading: "The people you'll work with" }),
        h("div", { className: "ds-team-grid" },
          h(Reveal, null, h(TeamCard, null)),
          h(Reveal, { delay: 120 }, h(TeamCard, { name: "Second Founder", role: "Co-Founder", bio: "One or two sentences of real background." })))),
      h(Footer, null));
  }

  function PartnershipsPage() {
    var runCard = h(FlowCard, { label: "How a partnership runs", steps: ["Proposal", "Plan", "Event"] });
    return h("div", null,
      h(Header, null),
      h(PageHero, {
        breadcrumbs: [{ label: "Home", href: "#" }, { label: "Partnerships" }],
        title: "Partner with us on",
        accent: "technology education.",
        lead: "We work alongside universities, schools and event organisers to build digital skills and community impact across Nigeria.",
        actions: [h(Button, { key: "p", variant: "primary", size: "lg", icon: "arrow-right" }, "Start a partnership")],
        visual: h(LayeredVisual, {
          photo: { label: "Event photograph", note: "Students at a technology session run with TELDEV, candid, real venue." },
          cards: [
            { pos: "tl", width: "270px", content: h(EventMiniCard, { mon: "Mar", day: "14", title: "NAMS 7th Annual Convention", sub: "Technology track" }) },
            { pos: "br", width: "270px", content: h(EventMiniCard, { mon: "Sep", day: "02", title: "University of Lagos", sub: "Sponsorship" }) },
            { pos: "bl", content: runCard }
          ]
        })
      }),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "Partners", heading: "Who we've worked with" }),
        h(LogoStrip, { names: ["University of Lagos", "NAMS", "Partner C", "Partner D"] })),
      h(Section, null,
        h(SectionHeader, { overline: "Highlights", heading: "Partnerships and events" }),
        h("div", { className: "ds-two-col" },
          h(Reveal, null, h(EventHighlight, { media: true })),
          h(Reveal, { delay: 120 }, h(EventHighlight, { media: true, date: { mon: "Sep", day: "02" }, tag: "Sponsorship", title: "University of Lagos sponsorship", description: "Supporting student technology projects at UNILAG." })))),
      h(Section, null,
        h(Reveal, null, h(CTABanner, { heading: "Planning an event or programme?", body: "Tell us about your audience and goals — we'll suggest how TELDEV can take part.", cta: "Start a partnership", card: runCard }))),
      h(Footer, null));
  }

  function WorkPage() {
    return h("div", null,
      h(Header, null),
      h(PageHero, {
        breadcrumbs: [{ label: "Home", href: "#" }, { label: "Work" }],
        title: "Work we've done,",
        accent: "told plainly.",
        lead: "The problem, what we did, and what changed — for businesses and institutions across Nigeria.",
        visual: h(LayeredVisual, {
          photo: { label: "Project photograph", note: "Engineer and client reviewing a finished rollout on site, natural light." },
          cards: [
            { pos: "tl", width: "270px", content: h(TicketCard, { code: "Project handover", status: "Complete", title: "Office network and Microsoft 365 rollout", sub: "Handed over with documentation" }) },
            { pos: "br", width: "220px", content: h(MetricCard, { icon: "check-circle", label: "Downtime during move", value: "0 hrs" }) },
            { pos: "bl", content: h(FlowCard, { label: "Every project", steps: ["Audit", "Build", "Handover"] }) }
          ]
        })
      }),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "Case studies", heading: "Selected projects" }),
        h(Reveal, null, h(CaseStudy, null)),
        h(Reveal, null, h(CaseStudy, { title: "A website that brings in enquiries", summary: "How we rebuilt a service business's site for visitors on mobile data.", metricIcon: "building", metricLabel: "Mobile performance", metricValue: "98" }))),
      h(Section, null,
        h("div", { className: "ds-two-col" }, h(Reveal, null, h(Testimonial, null)), h(Reveal, { delay: 120 }, h(Testimonial, QUOTE_2)))),
      h(Section, null, h(Reveal, null, h(CTABanner, null))),
      h(Footer, null));
  }

  function BlogPage() {
    var posts = [
      {},
      { category: "Company news", title: "What our UNILAG partnership covers", excerpt: "A short note on the programme and who it's for.", date: "2 Feb 2026 · 2 min read" },
      { category: "IT support", title: "A simple backup plan for a small office", excerpt: "Three copies, two places, one tested restore.", date: "18 Jan 2026 · 5 min read" }
    ];
    return h("div", null,
      h(Header, null),
      h(PageHero, {
        breadcrumbs: [{ label: "Home", href: "#" }, { label: "Blog" }],
        title: "Plain-English guides to",
        accent: "business technology.",
        lead: "Practical advice on websites, IT, cloud and automation for Nigerian businesses.",
        visual: h(LayeredVisual, {
          photo: { ratio: "16x9", label: "Featured article image", note: "Photo for the featured guide." },
          cards: [
            { pos: "bl", width: "300px", content: h(TicketCard, { code: "Featured · 4 min read", status: "Guides", tone: "brand", statusIcon: "info", title: "Five signs your business is ready for Microsoft 365", sub: "What to check before you move mail and files" }) }
          ]
        })
      }),
      h(Section, { subtle: true },
        h(SectionHeader, { overline: "Latest", heading: "Recent articles" }),
        h("div", { className: "ds-blog-grid" }, posts.map(function (p, i) { return h(Reveal, { key: i, delay: i * 100 }, h(BlogCard, Object.assign({ ratio: "4x3" }, p))); })),
        h(Pagination, { page: 1, count: 3 })),
      h(Footer, null));
  }

  function ContactPage() {
    return h("div", null, h(Header, null), h(ContactSection, null), h(Footer, null));
  }

  /* ---------------------------------------------------------------------
   * Cover
   * ------------------------------------------------------------------- */

  window.TELDEV = {
    Icon: Icon, Button: Button, TextLink: TextLink,
    FieldLabel: FieldLabel, HelperText: HelperText, ErrorText: ErrorText, SuccessText: SuccessText,
    Input: Input, Textarea: Textarea, Select: Select, Checkbox: Checkbox, RadioSegmented: RadioSegmented,
    Badge: Badge, ImagePlaceholder: ImagePlaceholder, Logomark: Logomark, ThemeToggle: ThemeToggle,
    Header: Header, Footer: Footer, SplitHero: SplitHero, HeroVisual: HeroVisual, Reveal: Reveal, CountUp: CountUp, LayeredVisual: LayeredVisual, PageHero: PageHero,
    ProgressCard: ProgressCard, TicketCard: TicketCard, FlowCard: FlowCard, MetricCard: MetricCard, InfoCard: InfoCard, EventMiniCard: EventMiniCard,
    ContactSection: ContactSection, HomePage: HomePage, AboutPage: AboutPage, PartnershipsPage: PartnershipsPage, WorkPage: WorkPage, BlogPage: BlogPage, ContactPage: ContactPage, SectionHeader: SectionHeader,
    ServiceCard: ServiceCard, ServicesOverview: ServicesOverview, ServiceDetail: ServiceDetail,
    StrategicPillars: StrategicPillars, ProcessSteps: ProcessSteps,
    LogoStrip: LogoStrip, Testimonial: Testimonial, CaseStudy: CaseStudy, EventHighlight: EventHighlight,
    BlogCard: BlogCard, ArticleProse: ArticleProse, TeamCard: TeamCard, StatBlock: StatBlock, CTABanner: CTABanner,
    Breadcrumbs: Breadcrumbs, Pagination: Pagination, EmptyState: EmptyState, NotFound: NotFound,
    Timeline: Timeline, ContactForm: ContactForm, SERVICES: SERVICES
  };
})();
