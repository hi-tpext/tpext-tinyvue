import * as f from "vue";
import { t as ve } from "@opentiny/vue-locale";
function ge(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    e && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function T(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ge(Object(r), !0).forEach(function(t) {
      Ce(n, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ge(Object(r)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return n;
}
function Ve(n, e) {
  if (typeof n != "object" || !n)
    return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(n, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Le(n) {
  var e = Ve(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function _(n) {
  "@babel/helpers - typeof";
  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _(n);
}
function Ce(n, e, r) {
  return e = Le(e), e in n ? Object.defineProperty(n, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = r, n;
}
function me(n) {
  return Ne(n) || Be(n) || We(n) || Ke();
}
function Ne(n) {
  if (Array.isArray(n))
    return oe(n);
}
function Be(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function We(n, e) {
  if (n) {
    if (typeof n == "string")
      return oe(n, e);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set")
      return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oe(n, e);
  }
}
function oe(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var r = 0, t = new Array(e); r < e; r++)
    t[r] = n[r];
  return t;
}
function Ke() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(n) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    var i = e[t];
    return i || (e[t] = n(t));
  };
}
var Ue = /-(\w)/g, Fe = le(function(n) {
  return n.replace(Ue, function(e, r) {
    return r ? r.toUpperCase() : "";
  });
}), He = le(function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}), Ze = /\B([A-Z])/g, qe = le(function(n) {
  return n.replace(Ze, "-$1").toLowerCase();
}), ue = function() {
  var e = {}, r = function(o, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (o && typeof o == "string" && typeof s == "function") {
      var l = e[o] || [];
      e[o] = l, l.push(s), s.once = a;
    }
  }, t = {
    emit: function(o) {
      var s = arguments, a = e[o];
      a && (a.forEach(function(l) {
        return l.apply(null, [].slice.call(s, 1));
      }), e[o] = a.filter(function(l) {
        return !l.once;
      }));
    },
    on: r,
    once: function(o, s) {
      r(o, s, !0);
    },
    off: function(o, s) {
      if (o && typeof o == "string") {
        var a = e[o];
        typeof s == "function" ? e[o] = a.filter(function(l) {
          return l !== s;
        }) : delete e[o];
      } else
        e = {};
    }
  };
  return t;
}, Ye = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = {};
  for (var i in e)
    i.indexOf("_") !== 0 && (t[i] = e[i]);
  for (var o in r)
    t[o] = r[o];
  return t;
}, Qe = function(e, r) {
  if (!(!e || !r)) {
    var t = [];
    typeof e == "string" ? t.push(e) : Array.isArray(e) && (t = e);
    var i = [];
    typeof r == "string" ? i.push(r) : Array.isArray(r) && (i = r);
    var o = [];
    return i.forEach(function(s) {
      return t.forEach(function(a) {
        return o.push("".concat(s, ":").concat(a, "-").concat(s));
      });
    }), t.concat(o).join(" ");
  }
}, Je = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  if (_(r) === "object") {
    var t = Array.isArray(r) ? r : Object.keys(r).filter(function(o) {
      return r[o];
    }), i = "";
    return t.forEach(function(o) {
      e[o] && (i += "".concat(e[o], " "));
    }), i;
  } else
    return e[r] || "";
}, mt = f.Teleport, Ae = f.defineAsyncComponent, Xe = f.markRaw, Pe = function(e) {
  var r = e.view, t = r === void 0 ? void 0 : r, i = e.component, o = i === void 0 ? void 0 : i, s = e.props, a = e.context, l = a.attrs, u = a.slots, c = e.extend, d = c === void 0 ? {} : c;
  return function() {
    return f.h(t && t.value || o, T(T(T({
      ref: "modeTemplate"
    }, s), l), d), u);
  };
}, ce = function(e) {
  var r = f.getCurrentInstance();
  return e && Se(r), r == null ? void 0 : r.appContext.config.globalProperties;
}, De = function() {
  var e, r = f.getCurrentInstance(), t = r == null || (e = r.type) === null || e === void 0 ? void 0 : e.name;
  if (!t) {
    var i, o;
    t = r == null || (i = r.parent) === null || i === void 0 || (o = i.type) === null || o === void 0 ? void 0 : o.name;
  }
  return t || "";
}, er = function() {
  var e;
  return ((e = f.getCurrentInstance()) === null || e === void 0 ? void 0 : e.appContext) || {
    component: function() {
    }
  };
}, rr = function() {
  var e = f.getCurrentInstance();
  return (e == null ? void 0 : e.appContext.config.globalProperties) || {};
}, $e = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.getCurrentInstance(), r = e == null ? void 0 : e.appContext.config.globalProperties.$router, t = r && r.currentRoute.value;
  return {
    route: t,
    router: r
  };
}, Se = function(e) {
  var r = ue();
  typeof e.$emitter > "u" && Object.defineProperty(e, "$emitter", {
    get: function() {
      return r;
    }
  });
}, tr = function(e) {
  var r = function(i, o, s, a) {
    var l = i.subTree && i.subTree.children || i.children;
    Array.isArray(l) && l.forEach(function(u) {
      var c = u.type && u.type.componentName, d = u.component;
      c === o ? (d.emit(s, a), d.$emitter && d.$emitter.emit(s, a)) : r(u, o, s, a);
    });
  };
  return {
    dispatch: function(i, o, s) {
      for (var a = e.parent || e.root, l = a.type && a.type.componentName; a && (!l || l !== i); )
        a = a.parent, a && (l = a.type && a.type.componentName);
      if (a) {
        var u, c;
        (u = a).emit.apply(u, me([o].concat(s))), a.$emitter && (c = a.$emitter).emit.apply(c, me([o].concat(s)));
      }
    },
    broadcast: function(i, o, s) {
      r(e, i, o, s);
    }
  };
}, D = function(e) {
  if (e && e.parent)
    return e.parent.type.name === "AsyncComponentWrapper" && e.parent.parent ? e.parent.parent : e.parent;
}, nr = function(e) {
  return function(r) {
    var t = D(e), i = 0, o = function(a) {
      return {
        level: i,
        vm: L({}, a),
        el: a.vnode.el,
        options: a.type
      };
    };
    if (typeof r != "function")
      return t ? o(t) : {};
    for (i++; t && !r(o(t)); )
      t = D(t), i++;
  };
}, or = function(e) {
  return function(r) {
    if (typeof r != "function")
      return Ie(e.subTree);
    var t = 1, i = function o(s) {
      if (s) {
        var a = s.children || s.dynamicChildren, l = t++;
        if (Array.isArray(a)) {
          if (a.some(function(u) {
            return u.component && r({
              level: l,
              vm: L({}, u.component),
              el: u.el,
              options: u.type,
              isLevel1: !0
            });
          }))
            return;
          a.forEach(function(u) {
            return o(u);
          });
        }
      }
    };
    i(e.subTree);
  };
}, ir = /^on[A-Z]/, ar = function(e) {
  var r = {}, t = {};
  for (var i in e) {
    var o = e[i];
    if (ir.test(i) && typeof o == "function") {
      t[qe(i.substr(2))] = o;
      continue;
    }
    r[i] = o;
  }
  return {
    $attrs: r,
    $listeners: t
  };
}, Ie = function(e) {
  var r = [];
  if (r.refs = {}, e) {
    var t = e.dynamicChildren || e.children;
    Array.isArray(t) ? t.forEach(function(i) {
      if (i.component) {
        var o = L({}, i.component);
        r.push(o), i.props.ref && (r.refs[i.props.ref] = o);
      }
    }) : e.component && r.push(L({}, e.component));
  }
  return r;
}, te = function(e, r, t, i) {
  var o = function(l) {
    if (typeof i == "function" && i(l))
      return 1;
    Object.defineProperty(e, l, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return r[t][l];
      },
      set: function(c) {
        return r[t][l] = c;
      }
    });
  };
  for (var s in r[t])
    o(s);
  return e;
}, be = function(e) {
  return e.indexOf("_") === 0;
}, je = function(e, r) {
  return te(e, r, "setupState", null), te(e, r, "props", be), te(e, r, "ctx", be), e;
}, L = function n(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = ar(r.attrs), o = i.$attrs, s = i.$listeners, a = r.$emitter;
  a || (Se(r), a = r.$emitter);
  var l = function() {
    for (var d = arguments.length, g = new Array(d), b = 0; b < d; b++)
      g[b] = arguments[b];
    r.emit.apply(r, g), a.emit.apply(e, g);
  }, u = function(d, g, b) {
    return d[g] = b;
  };
  return t || je(e, r), Object.defineProperties(e, {
    $attrs: {
      get: function() {
        return o;
      }
    },
    $children: {
      get: function() {
        return Ie(r.subTree);
      }
    },
    $constants: {
      get: function() {
        return r.props._constants;
      }
    },
    $emit: {
      get: function() {
        return l;
      }
    },
    $el: {
      get: function() {
        return r.vnode.el;
      }
    },
    $listeners: {
      get: function() {
        return s;
      }
    },
    $mode: {
      get: function() {
        return r._tiny_mode;
      }
    },
    $nextTick: {
      get: function() {
        return f.nextTick;
      }
    },
    $off: {
      get: function() {
        return a.off;
      }
    },
    $on: {
      get: function() {
        return a.on;
      }
    },
    $once: {
      get: function() {
        return a.once;
      }
    },
    $options: {
      get: function() {
        return {
          componentName: r.type.componentName
        };
      }
    },
    $parent: {
      get: function() {
        return r.parent && n({}, D(r));
      }
    },
    $refs: {
      get: function() {
        return r.refs;
      }
    },
    $renderless: {
      get: function() {
        return r.props.tiny_renderless;
      }
    },
    $scopedSlots: {
      get: function() {
        return r.slots;
      }
    },
    $set: {
      get: function() {
        return u;
      }
    },
    $slots: {
      get: function() {
        return r.slots;
      }
    },
    $template: {
      get: function() {
        return r.props.tiny_template;
      }
    }
  }), e;
}, sr = function(e, r) {
  for (var t in e.refs)
    Object.prototype.hasOwnProperty.call(e.refs, t) && (r[t] = e.refs[t]);
}, lr = function(e, r) {
  var t, i, o = f.getCurrentInstance(), s = o == null ? void 0 : o.appContext.config.globalProperties, a = $e(o), l = a.route, u = a.router, c = o == null || (t = o.proxy) === null || t === void 0 || (i = t.$root) === null || i === void 0 ? void 0 : i.$i18n, d = tr(o), g = d.dispatch, b = d.broadcast, w = nr(o), h = or(o), p = L({}, o, e), A = e.emit, m = {}, P = typeof o.props.tiny_template > "u" && D(o), C = P ? L({}, P) : o.parent ? L({}, o.parent) : null, $ = function(S) {
    var E, M = S.name, y = S.value, K = P ? P.ctx : o == null || (E = o.parent) === null || E === void 0 ? void 0 : E.ctx;
    K[M] = y, C[M] = y;
  }, k = function(S) {
    Object.defineProperties(p, S), Object.defineProperties(o == null ? void 0 : o.ctx, S);
  }, W = function(S) {
    C && Object.defineProperties(C, S);
  };
  return f.onBeforeMount(function() {
    return je(p, o);
  }), f.onMounted(function() {
    return sr(o, m);
  }), {
    framework: "vue3",
    vm: p,
    emit: A,
    emitter: ue,
    route: l,
    router: u,
    dispatch: g,
    broadcast: b,
    parentHandler: w,
    childrenHandler: h,
    i18n: c,
    refs: m,
    slots: o == null ? void 0 : o.slots,
    scopedSlots: o == null ? void 0 : o.slots,
    attrs: e.attrs,
    parent: C,
    nextTick: f.nextTick,
    constants: o == null ? void 0 : o.props._constants,
    mode: r,
    isPCMode: r === "pc",
    isMobileMode: r === "mobile",
    service: s == null ? void 0 : s.$service,
    getService: function() {
      return s == null ? void 0 : s.$getService(p);
    },
    setParentAttribute: $,
    defineInstanceProperties: k,
    defineParentInstanceProperties: W
  };
}, ne = function(e, r, t) {
  if (typeof e[r] < "u") {
    var i = e[r];
    e[t] = function(o, s, a) {
      a.context = s.instance, i(o, s, a);
    }, delete e[r];
  }
}, ur = function(e) {
  for (var r in e) {
    var t = e[r];
    ne(t, "bind", "beforeMount"), ne(t, "update", "updated"), ne(t, "unbind", "unmounted");
  }
  return e;
}, cr = function(e) {
  return e;
}, dr = f.Text, fr = f.Comment, pr = function(e) {
  return !e || !e.type || [dr, fr].includes(e.type);
}, vr = function(e) {
  var r = {};
  for (var t in e)
    if (t === "class" || t === "style")
      r[t] = e[t];
    else if (t === "on" || t === "nativeOn") {
      var i = e[t];
      for (var o in i)
        r["on".concat(He(Fe(o)))] = i[o];
    } else if (t === "attrs" || t === "props" || t === "domProps") {
      var s = e[t];
      for (var a in s)
        r[a] = s[a];
    } else
      r[t] = e[t];
  return r;
}, gr = function(e) {
  var r = e, t = !1;
  if (typeof e == "string" && typeof document < "u") {
    var i = document.createElement(e), o = ["SVG", "CIRCLE", "PATH"];
    i instanceof HTMLUnknownElement && !o.includes(i.nodeName) || e.includes("-") ? (e = e.toLowerCase(), t = !0, e === "transition" ? r = f.Transition : e === "transition-group" ? r = f.TransitionGroup : r = f.resolveComponent(e)) : r = e;
  }
  return {
    type: r,
    component: e,
    customElement: t
  };
}, mr = function(e, r, t) {
  var i = {}, o = t, s = gr(e), a = s.customElement, l = s.type;
  return e = s.component, r && _(r) === "object" && !Array.isArray(r) ? (i = vr(r), r.scopedSlots && (o = r.scopedSlots)) : (typeof r == "string" || Array.isArray(r)) && (t = r), (typeof t == "string" || Array.isArray(t)) && (o = typeof e != "string" || a ? function() {
    return t;
  } : t), f.h(l, i, o);
}, br = function(e) {
  return function(r) {
    var t = r.component, i = r.propsData, o = r.el, s = Object.assign(t, {
      provide: Ce({}, e.configKey, e.configInstance)
    }), a = f.createVNode(s, i);
    return f.render(a, o), L({}, a.component);
  };
}, yr = f.defineComponent, ke = !1, bt = !0, hr = f.isVNode, yt = f.KeepAlive, Me = function(e) {
  var r = [];
  return Object.keys(e).forEach(function(t) {
    return e[t] && r.push(t);
  }), r.join(" ");
}, xr = function(e) {
  var r = [];
  return e.forEach(function(t) {
    typeof t == "string" ? r.push(t) : _(t) === "object" && r.push(Me(t));
  }), r.join(" ");
}, wr = function(e) {
  if (!e || Array.isArray(e) && !e.length)
    return "";
  var r = [];
  return e.forEach(function(t) {
    t && (typeof t == "string" ? r.push(t) : Array.isArray(t) ? r.push(xr(t)) : _(t) === "object" && r.push(Me(t)));
  }), r.join(" ");
};
function Cr() {
  for (var n = 0, e, r, t = ""; n < arguments.length; )
    (e = arguments[n++]) && (r = Oe(e)) && (t && (t += " "), t += r);
  return t;
}
function Oe(n) {
  if (typeof n == "string")
    return n;
  for (var e, r = "", t = 0; t < n.length; t++)
    n[t] && (e = Oe(n[t])) && (r && (r += " "), r += e);
  return r;
}
var de = "-";
function Ar(n) {
  var e = $r(n), r = n.conflictingClassGroups, t = n.conflictingClassGroupModifiers, i = t === void 0 ? {} : t;
  function o(a) {
    var l = a.split(de);
    return l[0] === "" && l.length !== 1 && l.shift(), Ee(l, e) || Pr(a);
  }
  function s(a, l) {
    var u = r[a] || [];
    return l && i[a] ? [].concat(u, i[a]) : u;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  };
}
function Ee(n, e) {
  var r;
  if (n.length === 0)
    return e.classGroupId;
  var t = n[0], i = e.nextPart.get(t), o = i ? Ee(n.slice(1), i) : void 0;
  if (o)
    return o;
  if (e.validators.length !== 0) {
    var s = n.join(de);
    return (r = e.validators.find(function(a) {
      var l = a.validator;
      return l(s);
    })) === null || r === void 0 ? void 0 : r.classGroupId;
  }
}
var ye = /^\[(.+)\]$/;
function Pr(n) {
  if (ye.test(n)) {
    var e = ye.exec(n)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function $r(n) {
  var e = n.theme, r = n.prefix, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = Ir(Object.entries(n.classGroups), r);
  return i.forEach(function(o) {
    var s = o[0], a = o[1];
    ie(a, t, s, e);
  }), t;
}
function ie(n, e, r, t) {
  n.forEach(function(i) {
    if (typeof i == "string") {
      var o = i === "" ? e : he(e, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Sr(i)) {
        ie(i(t), e, r, t);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(function(s) {
      var a = s[0], l = s[1];
      ie(l, he(e, a), r, t);
    });
  });
}
function he(n, e) {
  var r = n;
  return e.split(de).forEach(function(t) {
    r.nextPart.has(t) || r.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(t);
  }), r;
}
function Sr(n) {
  return n.isThemeGetter;
}
function Ir(n, e) {
  return e ? n.map(function(r) {
    var t = r[0], i = r[1], o = i.map(function(s) {
      return typeof s == "string" ? e + s : _(s) === "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
        var l = a[0], u = a[1];
        return [e + l, u];
      })) : s;
    });
    return [t, o];
  }) : n;
}
function jr(n) {
  if (n < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function i(o, s) {
    r.set(o, s), e++, e > n && (e = 0, t = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = t.get(s)) !== void 0)
        return i(s, a), a;
    },
    set: function(s, a) {
      r.has(s) ? r.set(s, a) : i(s, a);
    }
  };
}
var Te = "!";
function kr(n) {
  var e = n.separator || ":", r = e.length === 1, t = e[0], i = e.length;
  return function(s) {
    for (var a = [], l = 0, u = 0, c, d = 0; d < s.length; d++) {
      var g = s[d];
      if (l === 0) {
        if (g === t && (r || s.slice(d, d + i) === e)) {
          a.push(s.slice(u, d)), u = d + i;
          continue;
        }
        if (g === "/") {
          c = d;
          continue;
        }
      }
      g === "[" ? l++ : g === "]" && l--;
    }
    var b = a.length === 0 ? s : s.substring(u), w = b.startsWith(Te), h = w ? b.substring(1) : b, p = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: w,
      baseClassName: h,
      maybePostfixModifierPosition: p
    };
  };
}
function Mr(n) {
  if (n.length <= 1)
    return n;
  var e = [], r = [];
  return n.forEach(function(t) {
    var i = t[0] === "[";
    i ? (e.push.apply(e, r.sort().concat([t])), r = []) : r.push(t);
  }), e.push.apply(e, r.sort()), e;
}
function Or(n) {
  return T({
    cache: jr(n.cacheSize),
    splitModifiers: kr(n)
  }, Ar(n));
}
var Er = /\s+/;
function Tr(n, e) {
  var r = e.splitModifiers, t = e.getClassGroupId, i = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return n.trim().split(Er).map(function(s) {
    var a = r(s), l = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, d = a.maybePostfixModifierPosition, g = t(d ? c.substring(0, d) : c), b = !!d;
    if (!g) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (g = t(c), !g)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      b = !1;
    }
    var w = Mr(l).join(":"), h = u ? w + Te : w;
    return {
      isTailwindClass: !0,
      modifierId: h,
      classGroupId: g,
      originalClassName: s,
      hasPostfixModifier: b
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var a = s.modifierId, l = s.classGroupId, u = s.hasPostfixModifier, c = a + l;
    return o.has(c) ? !1 : (o.add(c), i(l, u).forEach(function(d) {
      return o.add(a + d);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function _r() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  var t, i, o, s = a;
  function a(u) {
    var c = e[0], d = e.slice(1), g = d.reduce(function(b, w) {
      return w(b);
    }, c());
    return t = Or(g), i = t.cache.get, o = t.cache.set, s = l, l(u);
  }
  function l(u) {
    var c = i(u);
    if (c)
      return c;
    var d = Tr(u, t);
    return o(u, d), d;
  }
  return function() {
    return s(Cr.apply(null, arguments));
  };
}
function x(n) {
  var e = function(t) {
    return t[n] || [];
  };
  return e.isThemeGetter = !0, e;
}
var _e = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rr = /^\d+\/\d+$/, Gr = /* @__PURE__ */ new Set(["px", "full", "screen"]), zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function O(n) {
  return N(n) || Gr.has(n) || Rr.test(n) || ae(n);
}
function ae(n) {
  return B(n, "length", Fr);
}
function Nr(n) {
  return B(n, "size", Re);
}
function Br(n) {
  return B(n, "position", Re);
}
function Wr(n) {
  return B(n, "url", Hr);
}
function J(n) {
  return B(n, "number", N);
}
function N(n) {
  return !Number.isNaN(Number(n));
}
function Kr(n) {
  return n.endsWith("%") && N(n.slice(0, -1));
}
function q(n) {
  return xe(n) || B(n, "number", xe);
}
function v(n) {
  return _e.test(n);
}
function Y() {
  return !0;
}
function V(n) {
  return zr.test(n);
}
function Ur(n) {
  return B(n, "", Zr);
}
function B(n, e, r) {
  var t = _e.exec(n);
  return t ? t[1] ? t[1] === e : r(t[2]) : !1;
}
function Fr(n) {
  return Vr.test(n);
}
function Re() {
  return !1;
}
function Hr(n) {
  return n.startsWith("url(");
}
function xe(n) {
  return Number.isInteger(Number(n));
}
function Zr(n) {
  return Lr.test(n);
}
function qr() {
  var n = x("colors"), e = x("spacing"), r = x("blur"), t = x("brightness"), i = x("borderColor"), o = x("borderRadius"), s = x("borderSpacing"), a = x("borderWidth"), l = x("contrast"), u = x("grayscale"), c = x("hueRotate"), d = x("invert"), g = x("gap"), b = x("gradientColorStops"), w = x("gradientColorStopPositions"), h = x("inset"), p = x("margin"), A = x("opacity"), m = x("padding"), P = x("saturate"), C = x("scale"), $ = x("sepia"), k = x("skew"), W = x("space"), G = x("translate"), S = function() {
    return ["auto", "contain", "none"];
  }, E = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, M = function() {
    return ["auto", v, e];
  }, y = function() {
    return [v, e];
  }, K = function() {
    return ["", O];
  }, I = function() {
    return ["auto", N, v];
  }, z = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, R = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, U = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, F = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, H = function() {
    return ["", "0", v];
  }, pe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Z = function() {
    return [N, J];
  }, Q = function() {
    return [N, v];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Y],
      spacing: [O],
      blur: ["none", "", V, v],
      brightness: Z(),
      borderColor: [n],
      borderRadius: ["none", "", "full", V, v],
      borderSpacing: y(),
      borderWidth: K(),
      contrast: Z(),
      grayscale: H(),
      hueRotate: Q(),
      invert: H(),
      gap: y(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Kr, ae],
      inset: M(),
      margin: M(),
      opacity: Z(),
      padding: y(),
      saturate: Z(),
      scale: Z(),
      sepia: H(),
      skew: Q(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [V]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(z(), [v])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", v]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Y]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", q]
        }, v]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Y]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [q]
        }, v]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(F())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(F(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(F(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [W]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [W]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", v, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", v, O]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [V]
        }, V, v]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [v, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", v, O]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [v, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", V, ae]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Y]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", v]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", N, J]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", v, O]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", v]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(R(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", O]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", v, O]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", v]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(z(), [Br])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Nr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Wr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(R(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(R())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [v, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [O]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: K()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [O]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", V, Ur]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Y]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": U()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [t]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", V, v]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [t]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", v]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", v]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", v]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [q, v]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", v]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", v]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [O, J]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Yr = /* @__PURE__ */ _r(qr);
var Qr = typeof window > "u";
function we(n, e, r, t) {
  var i, o = 0;
  typeof e != "boolean" && (t = r, r = e, e = void 0);
  function s() {
    var l = this, u = (/* @__PURE__ */ new Date()).valueOf() - o, c = arguments;
    function d() {
      o = (/* @__PURE__ */ new Date()).valueOf(), r.apply(l, c);
    }
    function g() {
      i = void 0;
    }
    t && !i && d(), i && clearTimeout(i);
    var b = t === void 0;
    b && u > n ? d() : e !== !0 && (i = setTimeout(t ? g : d, b ? n - u : n));
  }
  function a() {
    i && (clearTimeout(i), i = null);
  }
  return s._cancel = a, s;
}
function Jr(n, e, r) {
  return r === void 0 ? we(n, e, !1) : we(n, r, e !== !1);
}
var Xr = function() {
  if (!Qr) {
    var e = f.ref(""), r = ["2xl", "xl", "lg", "md", "sm"], t = {
      "2xl": window.matchMedia("(min-width:1536px)"),
      xl: window.matchMedia("(min-width:1280px)"),
      lg: window.matchMedia("(min-width:1024px)"),
      md: window.matchMedia("(min-width:768px)"),
      sm: window.matchMedia("(min-width:640px)")
    }, i = function() {
      for (var a = 0; a < r.length; a++) {
        var l = r[a];
        if (t[l].matches) {
          e.value = l;
          return;
        }
      }
      e.value = "default";
    }, o = Jr(0, function() {
      return i();
    });
    return i(), r.forEach(function(s) {
      return t[s].addEventListener("change", o);
    }), f.onBeforeUnmount(function() {
      r.forEach(function(s) {
        return t[s].removeEventListener("change", o);
      });
    }), {
      current: e
    };
  }
};
function ht() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, e = f.ref(0), r;
  function t() {
    r = requestAnimationFrame(function() {
      e.value++, !(e.value >= n) && t();
    });
  }
  function i() {
    r && (cancelAnimationFrame(r), r = 0);
  }
  return t(), f.onBeforeUnmount(function() {
    return i();
  }), {
    defer: function(s) {
      return e.value >= s;
    },
    reset: function() {
      i(), e.value = 0, t();
    },
    cancel: i
  };
}
var Dr = function(e) {
  var r = e.getCurrentInstance, t = e.isVue2, i = e.nextTick, o = e.onUnmounted;
  return function() {
    var s = r().proxy;
    t || Object.defineProperty(s, "$scopedSlots", {
      configurable: !0,
      value: null
    }), Object.defineProperty(s, "instanceSlots", {
      configurable: !0,
      get: function() {
        return s.$scopedSlots || s.$slots;
      }
    }), o(function() {
      i(function() {
        t || delete s.$scopedSlots, delete s.instanceSlots;
      });
    });
  };
}, et = function() {
}, rt = function(e) {
  var r = e.onMounted, t = e.onActivated, i = e.nextTick;
  return function(o) {
    var s;
    r(function() {
      o(), i(function() {
        return s = !0;
      });
    }), t(function() {
      return s && o();
    });
  };
}, tt = function(e) {
  var r = e.getCurrentInstance, t = e.inject, i = e.markRaw, o = e.nextTick, s = e.onMounted, a = e.onActivated, l = e.onUnmounted, u = e.provide, c = e.reactive, d = e.toRef;
  return function() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = g.relationKey, w = g.relationContainer, h = g.onChange, p = g.childrenKey;
    if (!b)
      throw new Error("[TINY Error]<relationKey> must exist.");
    var A = r(), m = c({
      children: []
    }), P = t(b, null), C = [];
    if (P) {
      var $ = P.link, k = P.unlink, W = P.callbacks, G = P.childrenKey;
      C = W, p = p || G || "instanceChildren", $(A), l(function() {
        return k(A);
      });
    } else {
      p = p || "instanceChildren";
      var S = rt({
        onMounted: s,
        onActivated: a,
        nextTick: o
      }), E = h ? function() {
        return o(h);
      } : et, M;
      o(function() {
        var I = typeof w == "function" ? w() : w;
        I && (M = new MutationObserver(function(z, R) {
          var U = [];
          nt(I.childNodes, U), C.forEach(function(F) {
            return F(U, z, R);
          }), E();
        }), M.observe(I, {
          attributes: !0,
          childList: !0,
          subtree: !0
        }));
      }), S(function() {
        return E();
      }), l(function() {
        M && (M.disconnect(), M = null), C = null;
      });
    }
    var y = function(z) {
      return m.children.push(i(z.proxy));
    }, K = function(z) {
      var R = m.children.indexOf(z.proxy);
      R > -1 && m.children.splice(R, 1);
    };
    return C.push(function(I) {
      return ot(m.children, I);
    }), u(b, {
      link: y,
      unlink: K,
      callbacks: C,
      childrenKey: p
    }), Object.defineProperty(A.proxy, p, {
      configurable: !0,
      get: function() {
        return m.children;
      }
    }), l(function() {
      return delete A.proxy[p];
    }), {
      children: d(m, "children")
    };
  };
}, nt = function n(e, r) {
  e.length && e.forEach(function(t) {
    r.push(t), t.childNodes && n(t.childNodes, r);
  });
}, ot = function(e, r) {
  e.sort(function(t, i) {
    return r.indexOf(t.$el) - r.indexOf(i.$el);
  });
};
const xt = "3.17.0";
var wt = Dr(T(T({}, f), {}, {
  isVue2: ke
})), Ct = tt(T(T({}, f), {}, {
  isVue2: ke
})), ee = "Tiny", it = {
  tiny_mode: String,
  tiny_mode_root: Boolean,
  tiny_template: [Function, Object],
  tiny_renderless: Function,
  tiny_theme: String,
  tiny_chart_theme: Object
}, at = ["tiny_mode", "tiny_mode_root", "tiny_template", "tiny_renderless", "_constants", "tiny_theme", "tiny_chart_theme"], fe = function(e, r) {
  var t = function(d) {
    return ~["pc", "mobile", "mobile-first"].indexOf(d);
  }, i = ce(r), o = typeof e.tiny_mode == "string" ? e.tiny_mode : null, s = f.inject("TinyMode", null), a;
  typeof i.tiny_mode == "string" ? a = i.tiny_mode : i.tiny_mode && (a = i.tiny_mode.value), t(o) || (o = null), t(s) || (s = null), t(a) || (a = null);
  var l = o || s || a || "pc";
  e.tiny_mode_root && f.provide("TinyMode", l);
  var u = f.getCurrentInstance();
  return Object.defineProperty(u, "_tiny_mode", {
    value: l
  }), l;
}, st = function(e, r) {
  var t = function(c) {
    return ~["tiny", "saas"].indexOf(c);
  }, i = ce(r), o = typeof e.tiny_theme == "string" ? e.tiny_theme : null, s = f.inject("TinyTheme", null), a = i.tiny_theme && i.tiny_theme.value;
  t(o) || (o = null), t(s) || (s = null), t(a) || (a = null);
  var l = o || s || a || "tiny";
  return l;
}, lt = function(e, r) {
  var t = ce(r), i = _(e.tiny_chart_theme) === "object" ? e.tiny_chart_theme : null, o = f.inject("TinyChartTheme", null), s = t.tiny_chart_theme && t.tiny_chart_theme.value, a = i || o || s || null;
  return a;
}, ut = function(e) {
  var r = e.props, t = e.context, i = e.template, o = e.extend, s = o === void 0 ? {} : o, a = fe(r, t), l = f.computed(function() {
    if (typeof r.tiny_template < "u")
      return r.tiny_template;
    var u = i(a, r);
    return typeof u == "function" ? Ae(u) : u;
  });
  return Pe({
    view: l,
    props: r,
    context: t,
    extend: s
  });
}, se = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Yr(wr(r));
}, re = {
  configKey: Symbol("designConfigKey"),
  configInstance: null
}, At = function(e) {
  Object.keys(e).length && (f.provide(re.configKey, e), re.configInstance = e);
}, ct = br(re), dt = {
  designConfig: null
}, ft = function(e) {
  var r, t, i = e.props, o = e.context, s = e.renderless, a = e.api, l = e.extendOptions, u = l === void 0 ? {} : l, c = e.mono, d = c === void 0 ? !1 : c, g = e.classes, b = g === void 0 ? {} : g, w = typeof i.tiny_renderless == "function" ? i.tiny_renderless : s, h = dt.designConfig || f.inject(re.configKey, {}), p = h == null || (r = h.components) === null || r === void 0 ? void 0 : r[De().replace(ee, "")], A = (typeof process > "u" ? "undefined" : _(process)) === "object" ? (t = process.env) === null || t === void 0 ? void 0 : t.TINY_MODE : null, m = T(T({
    $prefix: ee,
    t: ve
  }, lr(o, fe(i, o))), {}, {
    designConfig: p,
    globalDesignConfig: h,
    useBreakpoint: Xr
  });
  A !== "pc" && (m.mergeClass = se), m.vm.theme = st(i, o), m.vm.chartTheme = lt(i, o);
  var P = w(i, f, m, u);
  typeof (p == null ? void 0 : p.renderless) == "function" && Object.assign(P, p.renderless(i, f, m, P));
  var C = {
    t: ve,
    vm: m.vm,
    f: Ye,
    a: Ge,
    d: m.defineInstanceProperties,
    dp: m.defineParentInstanceProperties,
    gcls: function(k) {
      return Je(b, k);
    }
  };
  return A !== "pc" && (C.m = se), C.d({
    slots: {
      get: function() {
        return m.vm.$slots;
      },
      configurable: !0
    },
    scopedSlots: {
      get: function() {
        return m.vm.$scopedSlots;
      },
      configurable: !0
    }
  }), C.dp({
    slots: {
      get: function() {
        return m.parent.$slots;
      },
      configurable: !0
    },
    scopedSlots: {
      get: function() {
        return m.parent.$scopedSlots;
      },
      configurable: !0
    }
  }), ze(), Array.isArray(a) && (Array.isArray(p == null ? void 0 : p.api) && (a = a.concat(p.api)), a.forEach(function($) {
    var k = P[$];
    typeof k < "u" && (C[$] = k, d || m.setParentAttribute({
      name: $,
      value: k
    }));
  })), C;
};
function pt(n) {
  var e = n.name, r = e === void 0 ? "Icon" : e, t = n.component;
  return function(i) {
    return Xe(yr({
      name: ee + r,
      setup: function(s, a) {
        var l, u = a.attrs || {}, c = u.fill, d = u.width, g = u.height, b = u["custom-class"], w = Object.assign({}, s, i || null), h = fe(w, a), p = h === "mobile-first", A = {
          "data-tag": p ? "tiny-svg" : null
        }, m = A, P = "tiny-svg", C = (typeof process > "u" ? "undefined" : _(process)) === "object" ? (l = process.env) === null || l === void 0 ? void 0 : l.TINY_MODE : null;
        C !== "pc" && p && (P = se("h-4 w-4 inline-block", b || "", w.class || ""));
        var $ = Object.assign({
          style: {
            fill: c,
            width: d,
            height: g
          },
          class: P,
          isSvg: !0
        }, m);
        return $.nativeOn = a.listeners, Pe({
          component: t,
          props: w,
          context: a,
          extend: $
        });
      }
    }));
  };
}
var Ge = function(e, r, t) {
  var i = {}, o = function(l) {
    var u = r.some(function(c) {
      return new RegExp(c).test(l);
    });
    (t && u || !t && !u) && (i[l] = e[l]);
  };
  for (var s in e)
    o(s);
  return i;
}, X = {}, ze = function() {
  for (var e in X) {
    var r = X[e];
    typeof r.install == "function" && r.install(er()), typeof r.init == "function" && r.init(rr());
  }
  X = {};
}, vt = function(e) {
  e.install = function(r) {
    r.component(e.name, e);
  };
};
const Pt = {
  h: mr,
  directive: ur,
  parseVnode: cr,
  isEmptyVnode: pr,
  useRouter: $e,
  emitter: ue,
  createComponent: ct,
  defineAsyncComponent: Ae,
  filterAttrs: Ge,
  initComponent: ze,
  setupComponent: X,
  svg: pt,
  $prefix: ee,
  $props: it,
  props: at,
  $setup: ut,
  setup: ft,
  hooks: f,
  getElementStatusClass: Qe,
  $install: vt,
  isVnode: hr
};
export {
  vt as $install,
  ee as $prefix,
  it as $props,
  ut as $setup,
  yt as KeepAlive,
  mt as Teleport,
  rr as appProperties,
  ct as createComponent,
  dt as customDesignConfig,
  Pt as default,
  Ae as defineAsyncComponent,
  yr as defineComponent,
  re as design,
  ur as directive,
  ue as emitter,
  Ge as filterAttrs,
  Qe as getElementStatusClass,
  mr as h,
  f as hooks,
  ze as initComponent,
  pr as isEmptyVnode,
  hr as isVnode,
  ke as isVue2,
  bt as isVue3,
  se as mergeClass,
  cr as parseVnode,
  at as props,
  At as provideDesignConfig,
  fe as resolveMode,
  st as resolveTheme,
  ft as setup,
  X as setupComponent,
  pt as svg,
  Xr as useBreakpoint,
  ht as useDefer,
  wt as useInstanceSlots,
  Ct as useRelation,
  $e as useRouter,
  xt as version
};
