function e(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(
          e,
          t
        ).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function t(e, t) {
  if (!(e instanceof t))
    throw new TypeError(
      "Cannot call a class as a function"
    )
}
function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function r(e, t, r) {
  return t && n(e.prototype, t), r && n(e, r), e
}
function u(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function i(e, t) {
  if (null == e) return {}
  var n,
    r,
    u = (function (e, t) {
      if (null == e) return {}
      var n,
        r,
        u = {},
        i = Object.keys(e)
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (u[n] = e[n])
      return u
    })(e, t)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(
            e,
            n
          ) &&
            (u[n] = e[n]))
  }
  return u
}
function o(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e
    })(e) ||
    (function (e, t) {
      var n =
        e &&
        (("undefined" != typeof Symbol &&
          e[Symbol.iterator]) ||
          e["@@iterator"])
      if (null == n) return
      var r,
        u,
        i = [],
        o = !0,
        a = !1
      try {
        for (
          n = n.call(e);
          !(o = (r = n.next()).done) &&
          (i.push(r.value), !t || i.length !== t);
          o = !0
        );
      } catch (e) {
        ;(a = !0), (u = e)
      } finally {
        try {
          o || null == n.return || n.return()
        } finally {
          if (a) throw u
        }
      }
      return i
    })(e, t) ||
    a(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    })()
  )
}
function a(e, t) {
  if (e) {
    if ("string" == typeof e) return l(e, t)
    var n = Object.prototype.toString
      .call(e)
      .slice(8, -1)
    return (
      "Object" === n &&
        e.constructor &&
        (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
            n
          )
        ? l(e, t)
        : void 0
    )
  }
}
function l(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n]
  return r
}
function s(e, t) {
  var n =
    ("undefined" != typeof Symbol &&
      e[Symbol.iterator]) ||
    e["@@iterator"]
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = a(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n)
      var r = 0,
        u = function () {}
      return {
        s: u,
        n: function () {
          return r >= e.length
            ? { done: !0 }
            : { done: !1, value: e[r++] }
        },
        e: function (e) {
          throw e
        },
        f: u,
      }
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    )
  }
  var i,
    o = !0,
    l = !1
  return {
    s: function () {
      n = n.call(e)
    },
    n: function () {
      var e = n.next()
      return (o = e.done), e
    },
    e: function (e) {
      ;(l = !0), (i = e)
    },
    f: function () {
      try {
        o || null == n.return || n.return()
      } finally {
        if (l) throw i
      }
    },
  }
}
var c =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  f = function (e) {
    return e && e.Math == Math && e
  },
  p =
    f("object" == typeof globalThis && globalThis) ||
    f("object" == typeof window && window) ||
    f("object" == typeof self && self) ||
    f("object" == typeof c && c) ||
    (function () {
      return this
    })() ||
    Function("return this")(),
  h = {},
  D = function (e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  },
  g = !D(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1]
    )
  }),
  d = {},
  v = {}.propertyIsEnumerable,
  A = Object.getOwnPropertyDescriptor,
  y = A && !v.call({ 1: 2 }, 1)
d.f = y
  ? function (e) {
      var t = A(this, e)
      return !!t && t.enumerable
    }
  : v
var E = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    }
  },
  m = {}.toString,
  k = function (e) {
    return m.call(e).slice(8, -1)
  },
  F = k,
  b = "".split,
  C = D(function () {
    return !Object("z").propertyIsEnumerable(0)
  })
    ? function (e) {
        return "String" == F(e)
          ? b.call(e, "")
          : Object(e)
      }
    : Object,
  x = function (e) {
    if (null == e)
      throw TypeError("Can't call method on " + e)
    return e
  },
  w = C,
  B = x,
  S = function (e) {
    return w(B(e))
  },
  _ = function (e) {
    return "object" == typeof e
      ? null !== e
      : "function" == typeof e
  },
  T = _,
  O = function (e, t) {
    if (!T(e)) return e
    var n, r
    if (
      t &&
      "function" == typeof (n = e.toString) &&
      !T((r = n.call(e)))
    )
      return r
    if (
      "function" == typeof (n = e.valueOf) &&
      !T((r = n.call(e)))
    )
      return r
    if (
      !t &&
      "function" == typeof (n = e.toString) &&
      !T((r = n.call(e)))
    )
      return r
    throw TypeError(
      "Can't convert object to primitive value"
    )
  },
  R = x,
  j = function (e) {
    return Object(R(e))
  },
  I = j,
  z = {}.hasOwnProperty,
  $ = function (e, t) {
    return z.call(I(e), t)
  },
  P = _,
  L = p.document,
  M = P(L) && P(L.createElement),
  N = function (e) {
    return M ? L.createElement(e) : {}
  },
  U = N,
  q =
    !g &&
    !D(function () {
      return (
        7 !=
        Object.defineProperty(U("div"), "a", {
          get: function () {
            return 7
          },
        }).a
      )
    }),
  Z = g,
  G = d,
  H = E,
  V = S,
  Y = O,
  K = $,
  X = q,
  W = Object.getOwnPropertyDescriptor
h.f = Z
  ? W
  : function (e, t) {
      if (((e = V(e)), (t = Y(t, !0)), X))
        try {
          return W(e, t)
        } catch (e) {}
      if (K(e, t)) return H(!G.f.call(e, t), e[t])
    }
var J = {},
  Q = _,
  ee = function (e) {
    if (!Q(e))
      throw TypeError(String(e) + " is not an object")
    return e
  },
  te = g,
  ne = q,
  re = ee,
  ue = O,
  ie = Object.defineProperty
J.f = te
  ? ie
  : function (e, t, n) {
      if ((re(e), (t = ue(t, !0)), re(n), ne))
        try {
          return ie(e, t, n)
        } catch (e) {}
      if ("get" in n || "set" in n)
        throw TypeError("Accessors not supported")
      return "value" in n && (e[t] = n.value), e
    }
var oe = J,
  ae = E,
  le = g
    ? function (e, t, n) {
        return oe.f(e, t, ae(1, n))
      }
    : function (e, t, n) {
        return (e[t] = n), e
      },
  se = { exports: {} },
  ce = p,
  fe = le,
  pe = function (e, t) {
    try {
      fe(ce, e, t)
    } catch (n) {
      ce[e] = t
    }
    return t
  },
  he = pe,
  De =
    p["__core-js_shared__"] ||
    he("__core-js_shared__", {}),
  ge = De,
  de = Function.toString
"function" != typeof ge.inspectSource &&
  (ge.inspectSource = function (e) {
    return de.call(e)
  })
var ve = ge.inspectSource,
  Ae = ve,
  ye = p.WeakMap,
  Ee =
    "function" == typeof ye &&
    /native code/.test(Ae(ye)),
  me = { exports: {} },
  ke = De
;(me.exports = function (e, t) {
  return ke[e] || (ke[e] = void 0 !== t ? t : {})
})("versions", []).push({
  version: "3.12.1",
  mode: "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
})
var Fe,
  be,
  Ce,
  xe = 0,
  we = Math.random(),
  Be = function (e) {
    return (
      "Symbol(" +
      String(void 0 === e ? "" : e) +
      ")_" +
      (++xe + we).toString(36)
    )
  },
  Se = me.exports,
  _e = Be,
  Te = Se("keys"),
  Oe = function (e) {
    return Te[e] || (Te[e] = _e(e))
  },
  Re = {},
  je = Ee,
  Ie = _,
  ze = le,
  $e = $,
  Pe = De,
  Le = Oe,
  Me = Re,
  Ne = p.WeakMap
if (je || Pe.state) {
  var Ue = Pe.state || (Pe.state = new Ne()),
    qe = Ue.get,
    Ze = Ue.has,
    Ge = Ue.set
  ;(Fe = function (e, t) {
    if (Ze.call(Ue, e))
      throw new TypeError("Object already initialized")
    return (t.facade = e), Ge.call(Ue, e, t), t
  }),
    (be = function (e) {
      return qe.call(Ue, e) || {}
    }),
    (Ce = function (e) {
      return Ze.call(Ue, e)
    })
} else {
  var He = Le("state")
  ;(Me[He] = !0),
    (Fe = function (e, t) {
      if ($e(e, He))
        throw new TypeError(
          "Object already initialized"
        )
      return (t.facade = e), ze(e, He, t), t
    }),
    (be = function (e) {
      return $e(e, He) ? e[He] : {}
    }),
    (Ce = function (e) {
      return $e(e, He)
    })
}
var Ve = {
    set: Fe,
    get: be,
    has: Ce,
    enforce: function (e) {
      return Ce(e) ? be(e) : Fe(e, {})
    },
    getterFor: function (e) {
      return function (t) {
        var n
        if (!Ie(t) || (n = be(t)).type !== e)
          throw TypeError(
            "Incompatible receiver, " + e + " required"
          )
        return n
      }
    },
  },
  Ye = p,
  Ke = le,
  Xe = $,
  We = pe,
  Je = ve,
  Qe = Ve.get,
  et = Ve.enforce,
  tt = String(String).split("String")
;(se.exports = function (e, t, n, r) {
  var u,
    i = !!r && !!r.unsafe,
    o = !!r && !!r.enumerable,
    a = !!r && !!r.noTargetGet
  "function" == typeof n &&
    ("string" != typeof t ||
      Xe(n, "name") ||
      Ke(n, "name", t),
    (u = et(n)).source ||
      (u.source = tt.join(
        "string" == typeof t ? t : ""
      ))),
    e !== Ye
      ? (i ? !a && e[t] && (o = !0) : delete e[t],
        o ? (e[t] = n) : Ke(e, t, n))
      : o
      ? (e[t] = n)
      : We(t, n)
})(Function.prototype, "toString", function () {
  return (
    ("function" == typeof this && Qe(this).source) ||
    Je(this)
  )
})
var nt = p,
  rt = p,
  ut = function (e) {
    return "function" == typeof e ? e : void 0
  },
  it = function (e, t) {
    return arguments.length < 2
      ? ut(nt[e]) || ut(rt[e])
      : (nt[e] && nt[e][t]) || (rt[e] && rt[e][t])
  },
  ot = {},
  at = Math.ceil,
  lt = Math.floor,
  st = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? lt : at)(e)
  },
  ct = st,
  ft = Math.min,
  pt = function (e) {
    return e > 0 ? ft(ct(e), 9007199254740991) : 0
  },
  ht = st,
  Dt = Math.max,
  gt = Math.min,
  dt = function (e, t) {
    var n = ht(e)
    return n < 0 ? Dt(n + t, 0) : gt(n, t)
  },
  vt = S,
  At = pt,
  yt = dt,
  Et = function (e) {
    return function (t, n, r) {
      var u,
        i = vt(t),
        o = At(i.length),
        a = yt(r, o)
      if (e && n != n) {
        for (; o > a; )
          if ((u = i[a++]) != u) return !0
      } else
        for (; o > a; a++)
          if ((e || a in i) && i[a] === n)
            return e || a || 0
      return !e && -1
    }
  },
  mt = { includes: Et(!0), indexOf: Et(!1) },
  kt = $,
  Ft = S,
  bt = mt.indexOf,
  Ct = Re,
  xt = function (e, t) {
    var n,
      r = Ft(e),
      u = 0,
      i = []
    for (n in r) !kt(Ct, n) && kt(r, n) && i.push(n)
    for (; t.length > u; )
      kt(r, (n = t[u++])) && (~bt(i, n) || i.push(n))
    return i
  },
  wt = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Bt = xt,
  St = wt.concat("length", "prototype")
ot.f =
  Object.getOwnPropertyNames ||
  function (e) {
    return Bt(e, St)
  }
var _t = {}
_t.f = Object.getOwnPropertySymbols
var Tt = ot,
  Ot = _t,
  Rt = ee,
  jt =
    it("Reflect", "ownKeys") ||
    function (e) {
      var t = Tt.f(Rt(e)),
        n = Ot.f
      return n ? t.concat(n(e)) : t
    },
  It = $,
  zt = jt,
  $t = h,
  Pt = J,
  Lt = D,
  Mt = /#|\.prototype\./,
  Nt = function (e, t) {
    var n = qt[Ut(e)]
    return (
      n == Gt ||
      (n != Zt &&
        ("function" == typeof t ? Lt(t) : !!t))
    )
  },
  Ut = (Nt.normalize = function (e) {
    return String(e).replace(Mt, ".").toLowerCase()
  }),
  qt = (Nt.data = {}),
  Zt = (Nt.NATIVE = "N"),
  Gt = (Nt.POLYFILL = "P"),
  Ht = Nt,
  Vt = p,
  Yt = h.f,
  Kt = le,
  Xt = se.exports,
  Wt = pe,
  Jt = function (e, t) {
    for (
      var n = zt(t), r = Pt.f, u = $t.f, i = 0;
      i < n.length;
      i++
    ) {
      var o = n[i]
      It(e, o) || r(e, o, u(t, o))
    }
  },
  Qt = Ht,
  en = function (e, t) {
    var n,
      r,
      u,
      i,
      o,
      a = e.target,
      l = e.global,
      s = e.stat
    if (
      (n = l
        ? Vt
        : s
        ? Vt[a] || Wt(a, {})
        : (Vt[a] || {}).prototype)
    )
      for (r in t) {
        if (
          ((i = t[r]),
          (u = e.noTargetGet
            ? (o = Yt(n, r)) && o.value
            : n[r]),
          !Qt(
            l ? r : a + (s ? "." : "#") + r,
            e.forced
          ) && void 0 !== u)
        ) {
          if (typeof i == typeof u) continue
          Jt(i, u)
        }
        ;(e.sham || (u && u.sham)) &&
          Kt(i, "sham", !0),
          Xt(n, r, i, e)
      }
  },
  tn = ee,
  nn = function () {
    var e = tn(this),
      t = ""
    return (
      e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.dotAll && (t += "s"),
      e.unicode && (t += "u"),
      e.sticky && (t += "y"),
      t
    )
  },
  rn = {},
  un = D
function on(e, t) {
  return RegExp(e, t)
}
;(rn.UNSUPPORTED_Y = un(function () {
  var e = on("a", "y")
  return (e.lastIndex = 2), null != e.exec("abcd")
})),
  (rn.BROKEN_CARET = un(function () {
    var e = on("^r", "gy")
    return (e.lastIndex = 2), null != e.exec("str")
  }))
var an = nn,
  ln = rn,
  sn = me.exports,
  cn = RegExp.prototype.exec,
  fn = sn(
    "native-string-replace",
    String.prototype.replace
  ),
  pn = cn,
  hn = (function () {
    var e = /a/,
      t = /b*/g
    return (
      cn.call(e, "a"),
      cn.call(t, "a"),
      0 !== e.lastIndex || 0 !== t.lastIndex
    )
  })(),
  Dn = ln.UNSUPPORTED_Y || ln.BROKEN_CARET,
  gn = void 0 !== /()??/.exec("")[1]
;(hn || gn || Dn) &&
  (pn = function (e) {
    var t,
      n,
      r,
      u,
      i = this,
      o = Dn && i.sticky,
      a = an.call(i),
      l = i.source,
      s = 0,
      c = e
    return (
      o &&
        (-1 ===
          (a = a.replace("y", "")).indexOf("g") &&
          (a += "g"),
        (c = String(e).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline ||
            (i.multiline &&
              "\n" !== e[i.lastIndex - 1])) &&
          ((l = "(?: " + l + ")"), (c = " " + c), s++),
        (n = new RegExp("^(?:" + l + ")", a))),
      gn && (n = new RegExp("^" + l + "$(?!\\s)", a)),
      hn && (t = i.lastIndex),
      (r = cn.call(o ? n : i, c)),
      o
        ? r
          ? ((r.input = r.input.slice(s)),
            (r[0] = r[0].slice(s)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : hn &&
          r &&
          (i.lastIndex = i.global
            ? r.index + r[0].length
            : t),
      gn &&
        r &&
        r.length > 1 &&
        fn.call(r[0], n, function () {
          for (u = 1; u < arguments.length - 2; u++)
            void 0 === arguments[u] && (r[u] = void 0)
        }),
      r
    )
  })
var dn = pn
en(
  {
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== dn,
  },
  { exec: dn }
)
var vn,
  An,
  yn = it("navigator", "userAgent") || "",
  En = yn,
  mn = p.process,
  kn = mn && mn.versions,
  Fn = kn && kn.v8
Fn
  ? (An =
      (vn = Fn.split("."))[0] < 4 ? 1 : vn[0] + vn[1])
  : En &&
    (!(vn = En.match(/Edge\/(\d+)/)) || vn[1] >= 74) &&
    (vn = En.match(/Chrome\/(\d+)/)) &&
    (An = vn[1])
var bn = An && +An,
  Cn = bn,
  xn = D,
  wn =
    !!Object.getOwnPropertySymbols &&
    !xn(function () {
      return (
        !String(Symbol()) ||
        (!Symbol.sham && Cn && Cn < 41)
      )
    }),
  Bn =
    wn &&
    !Symbol.sham &&
    "symbol" == typeof Symbol.iterator,
  Sn = p,
  _n = me.exports,
  Tn = $,
  On = Be,
  Rn = wn,
  jn = Bn,
  In = _n("wks"),
  zn = Sn.Symbol,
  $n = jn ? zn : (zn && zn.withoutSetter) || On,
  Pn = function (e) {
    return (
      (Tn(In, e) &&
        (Rn || "string" == typeof In[e])) ||
        (Rn && Tn(zn, e)
          ? (In[e] = zn[e])
          : (In[e] = $n("Symbol." + e))),
      In[e]
    )
  },
  Ln = se.exports,
  Mn = dn,
  Nn = D,
  Un = Pn,
  qn = le,
  Zn = Un("species"),
  Gn = RegExp.prototype,
  Hn = !Nn(function () {
    var e = /./
    return (
      (e.exec = function () {
        var e = []
        return (e.groups = { a: "7" }), e
      }),
      "7" !== "".replace(e, "$<a>")
    )
  }),
  Vn = "$0" === "a".replace(/./, "$0"),
  Yn = Un("replace"),
  Kn = !!/./[Yn] && "" === /./[Yn]("a", "$0"),
  Xn = !Nn(function () {
    var e = /(?:)/,
      t = e.exec
    e.exec = function () {
      return t.apply(this, arguments)
    }
    var n = "ab".split(e)
    return (
      2 !== n.length || "a" !== n[0] || "b" !== n[1]
    )
  }),
  Wn = function (e, t, n, r) {
    var u = Un(e),
      i = !Nn(function () {
        var t = {}
        return (
          (t[u] = function () {
            return 7
          }),
          7 != ""[e](t)
        )
      }),
      o =
        i &&
        !Nn(function () {
          var t = !1,
            n = /a/
          return (
            "split" === e &&
              (((n = {}).constructor = {}),
              (n.constructor[Zn] = function () {
                return n
              }),
              (n.flags = ""),
              (n[u] = /./[u])),
            (n.exec = function () {
              return (t = !0), null
            }),
            n[u](""),
            !t
          )
        })
    if (
      !i ||
      !o ||
      ("replace" === e && (!Hn || !Vn || Kn)) ||
      ("split" === e && !Xn)
    ) {
      var a = /./[u],
        l = n(
          u,
          ""[e],
          function (e, t, n, r, u) {
            var o = t.exec
            return o === Mn || o === Gn.exec
              ? i && !u
                ? { done: !0, value: a.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 }
          },
          {
            REPLACE_KEEPS_$0: Vn,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:
              Kn,
          }
        ),
        s = l[0],
        c = l[1]
      Ln(String.prototype, e, s),
        Ln(
          Gn,
          u,
          2 == t
            ? function (e, t) {
                return c.call(e, this, t)
              }
            : function (e) {
                return c.call(e, this)
              }
        )
    }
    r && qn(Gn[u], "sham", !0)
  },
  Jn = st,
  Qn = x,
  er = function (e) {
    return function (t, n) {
      var r,
        u,
        i = String(Qn(t)),
        o = Jn(n),
        a = i.length
      return o < 0 || o >= a
        ? e
          ? ""
          : void 0
        : (r = i.charCodeAt(o)) < 55296 ||
          r > 56319 ||
          o + 1 === a ||
          (u = i.charCodeAt(o + 1)) < 56320 ||
          u > 57343
        ? e
          ? i.charAt(o)
          : r
        : e
        ? i.slice(o, o + 2)
        : u - 56320 + ((r - 55296) << 10) + 65536
    }
  },
  tr = { codeAt: er(!1), charAt: er(!0) },
  nr = tr.charAt,
  rr = function (e, t, n) {
    return t + (n ? nr(e, t).length : 1)
  },
  ur = j,
  ir = Math.floor,
  or = "".replace,
  ar = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  lr = /\$([$&'`]|\d{1,2})/g,
  sr = k,
  cr = dn,
  fr = function (e, t) {
    var n = e.exec
    if ("function" == typeof n) {
      var r = n.call(e, t)
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        )
      return r
    }
    if ("RegExp" !== sr(e))
      throw TypeError(
        "RegExp#exec called on incompatible receiver"
      )
    return cr.call(e, t)
  },
  pr = Wn,
  hr = ee,
  Dr = pt,
  gr = st,
  dr = x,
  vr = rr,
  Ar = function (e, t, n, r, u, i) {
    var o = n + e.length,
      a = r.length,
      l = lr
    return (
      void 0 !== u && ((u = ur(u)), (l = ar)),
      or.call(i, l, function (i, l) {
        var s
        switch (l.charAt(0)) {
          case "$":
            return "$"
          case "&":
            return e
          case "`":
            return t.slice(0, n)
          case "'":
            return t.slice(o)
          case "<":
            s = u[l.slice(1, -1)]
            break
          default:
            var c = +l
            if (0 === c) return i
            if (c > a) {
              var f = ir(c / 10)
              return 0 === f
                ? i
                : f <= a
                ? void 0 === r[f - 1]
                  ? l.charAt(1)
                  : r[f - 1] + l.charAt(1)
                : i
            }
            s = r[c - 1]
        }
        return void 0 === s ? "" : s
      })
    )
  },
  yr = fr,
  Er = Math.max,
  mr = Math.min
pr("replace", 2, function (e, t, n, r) {
  var u =
      r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    o = u ? "$" : "$0"
  return [
    function (n, r) {
      var u = dr(this),
        i = null == n ? void 0 : n[e]
      return void 0 !== i
        ? i.call(n, u, r)
        : t.call(String(u), n, r)
    },
    function (e, r) {
      if (
        (!u && i) ||
        ("string" == typeof r && -1 === r.indexOf(o))
      ) {
        var a = n(t, e, this, r)
        if (a.done) return a.value
      }
      var l = hr(e),
        s = String(this),
        c = "function" == typeof r
      c || (r = String(r))
      var f = l.global
      if (f) {
        var p = l.unicode
        l.lastIndex = 0
      }
      for (var h = []; ; ) {
        var D = yr(l, s)
        if (null === D) break
        if ((h.push(D), !f)) break
        "" === String(D[0]) &&
          (l.lastIndex = vr(s, Dr(l.lastIndex), p))
      }
      for (
        var g, d = "", v = 0, A = 0;
        A < h.length;
        A++
      ) {
        D = h[A]
        for (
          var y = String(D[0]),
            E = Er(mr(gr(D.index), s.length), 0),
            m = [],
            k = 1;
          k < D.length;
          k++
        )
          m.push(void 0 === (g = D[k]) ? g : String(g))
        var F = D.groups
        if (c) {
          var b = [y].concat(m, E, s)
          void 0 !== F && b.push(F)
          var C = String(r.apply(void 0, b))
        } else C = Ar(y, s, E, m, F, r)
        E >= v &&
          ((d += s.slice(v, E) + C),
          (v = E + y.length))
      }
      return d + s.slice(v)
    },
  ]
})
var kr = _,
  Fr = ee,
  br = function (e) {
    if (!kr(e) && null !== e)
      throw TypeError(
        "Can't set " + String(e) + " as a prototype"
      )
    return e
  },
  Cr =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var e,
            t = !1,
            n = {}
          try {
            ;(e = Object.getOwnPropertyDescriptor(
              Object.prototype,
              "__proto__"
            ).set).call(n, []),
              (t = n instanceof Array)
          } catch (e) {}
          return function (n, r) {
            return (
              Fr(n),
              br(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            )
          }
        })()
      : void 0),
  xr = _,
  wr = Cr,
  Br = _,
  Sr = k,
  _r = Pn("match"),
  Tr = function (e) {
    var t
    return (
      Br(e) &&
      (void 0 !== (t = e[_r])
        ? !!t
        : "RegExp" == Sr(e))
    )
  },
  Or = it,
  Rr = J,
  jr = g,
  Ir = Pn("species"),
  zr = function (e) {
    var t = Or(e),
      n = Rr.f
    jr &&
      t &&
      !t[Ir] &&
      n(t, Ir, {
        configurable: !0,
        get: function () {
          return this
        },
      })
  },
  $r = g,
  Pr = p,
  Lr = Ht,
  Mr = function (e, t, n) {
    var r, u
    return (
      wr &&
        "function" == typeof (r = t.constructor) &&
        r !== n &&
        xr((u = r.prototype)) &&
        u !== n.prototype &&
        wr(e, u),
      e
    )
  },
  Nr = J.f,
  Ur = ot.f,
  qr = Tr,
  Zr = nn,
  Gr = rn,
  Hr = se.exports,
  Vr = D,
  Yr = Ve.enforce,
  Kr = zr,
  Xr = Pn("match"),
  Wr = Pr.RegExp,
  Jr = Wr.prototype,
  Qr = /a/g,
  eu = /a/g,
  tu = new Wr(Qr) !== Qr,
  nu = Gr.UNSUPPORTED_Y
if (
  $r &&
  Lr(
    "RegExp",
    !tu ||
      nu ||
      Vr(function () {
        return (
          (eu[Xr] = !1),
          Wr(Qr) != Qr ||
            Wr(eu) == eu ||
            "/a/i" != Wr(Qr, "i")
        )
      })
  )
) {
  for (
    var ru = function (e, t) {
        var n,
          r = this instanceof ru,
          u = qr(e),
          i = void 0 === t
        if (!r && u && e.constructor === ru && i)
          return e
        tu
          ? u && !i && (e = e.source)
          : e instanceof ru &&
            (i && (t = Zr.call(e)), (e = e.source)),
          nu &&
            (n = !!t && t.indexOf("y") > -1) &&
            (t = t.replace(/y/g, ""))
        var o = Mr(
          tu ? new Wr(e, t) : Wr(e, t),
          r ? this : Jr,
          ru
        )
        nu && n && (Yr(o).sticky = !0)
        return o
      },
      uu = function (e) {
        ;(e in ru) ||
          Nr(ru, e, {
            configurable: !0,
            get: function () {
              return Wr[e]
            },
            set: function (t) {
              Wr[e] = t
            },
          })
      },
      iu = Ur(Wr),
      ou = 0;
    iu.length > ou;

  )
    uu(iu[ou++])
  ;(Jr.constructor = ru),
    (ru.prototype = Jr),
    Hr(Pr, "RegExp", ru)
}
Kr("RegExp")
var au = se.exports,
  lu = ee,
  su = D,
  cu = nn,
  fu = RegExp.prototype,
  pu = fu.toString,
  hu = su(function () {
    return (
      "/a/b" != pu.call({ source: "a", flags: "b" })
    )
  }),
  Du = "toString" != pu.name
;(hu || Du) &&
  au(
    RegExp.prototype,
    "toString",
    function () {
      var e = lu(this),
        t = String(e.source),
        n = e.flags
      return (
        "/" +
        t +
        "/" +
        String(
          void 0 === n &&
            e instanceof RegExp &&
            !("flags" in fu)
            ? cu.call(e)
            : n
        )
      )
    },
    { unsafe: !0 }
  )
var gu = ee,
  du = pt,
  vu = x,
  Au = rr,
  yu = fr
Wn("match", 1, function (e, t, n) {
  return [
    function (t) {
      var n = vu(this),
        r = null == t ? void 0 : t[e]
      return void 0 !== r
        ? r.call(t, n)
        : new RegExp(t)[e](String(n))
    },
    function (e) {
      var r = n(t, e, this)
      if (r.done) return r.value
      var u = gu(e),
        i = String(this)
      if (!u.global) return yu(u, i)
      var o = u.unicode
      u.lastIndex = 0
      for (
        var a, l = [], s = 0;
        null !== (a = yu(u, i));

      ) {
        var c = String(a[0])
        ;(l[s] = c),
          "" === c &&
            (u.lastIndex = Au(i, du(u.lastIndex), o)),
          s++
      }
      return 0 === s ? null : l
    },
  ]
})
var Eu = g,
  mu = J.f,
  ku = Function.prototype,
  Fu = ku.toString,
  bu = /^\s*function ([^ (]*)/
Eu &&
  !("name" in ku) &&
  mu(ku, "name", {
    configurable: !0,
    get: function () {
      try {
        return Fu.call(this).match(bu)[1]
      } catch (e) {
        return ""
      }
    },
  })
var Cu = D,
  xu = function (e, t) {
    var n = [][e]
    return (
      !!n &&
      Cu(function () {
        n.call(
          null,
          t ||
            function () {
              throw 1
            },
          1
        )
      })
    )
  },
  wu = en,
  Bu = S,
  Su = [].join,
  _u = C != Object,
  Tu = xu("join", ",")
wu(
  { target: "Array", proto: !0, forced: _u || !Tu },
  {
    join: function (e) {
      return Su.call(Bu(this), void 0 === e ? "," : e)
    },
  }
)
var Ou = function (e) {
    if ("function" != typeof e)
      throw TypeError(String(e) + " is not a function")
    return e
  },
  Ru = ee,
  ju = Ou,
  Iu = Pn("species"),
  zu = function (e, t) {
    var n,
      r = Ru(e).constructor
    return void 0 === r || null == (n = Ru(r)[Iu])
      ? t
      : ju(n)
  },
  $u = Wn,
  Pu = Tr,
  Lu = ee,
  Mu = x,
  Nu = zu,
  Uu = rr,
  qu = pt,
  Zu = fr,
  Gu = dn,
  Hu = rn.UNSUPPORTED_Y,
  Vu = [].push,
  Yu = Math.min
$u(
  "split",
  2,
  function (e, t, n) {
    var r
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (e, n) {
              var r = String(Mu(this)),
                u = void 0 === n ? 4294967295 : n >>> 0
              if (0 === u) return []
              if (void 0 === e) return [r]
              if (!Pu(e)) return t.call(r, e, u)
              for (
                var i,
                  o,
                  a,
                  l = [],
                  s =
                    (e.ignoreCase ? "i" : "") +
                    (e.multiline ? "m" : "") +
                    (e.unicode ? "u" : "") +
                    (e.sticky ? "y" : ""),
                  c = 0,
                  f = new RegExp(e.source, s + "g");
                (i = Gu.call(f, r)) &&
                !(
                  (o = f.lastIndex) > c &&
                  (l.push(r.slice(c, i.index)),
                  i.length > 1 &&
                    i.index < r.length &&
                    Vu.apply(l, i.slice(1)),
                  (a = i[0].length),
                  (c = o),
                  l.length >= u)
                );

              )
                f.lastIndex === i.index &&
                  f.lastIndex++
              return (
                c === r.length
                  ? (!a && f.test("")) || l.push("")
                  : l.push(r.slice(c)),
                l.length > u ? l.slice(0, u) : l
              )
            }
          : "0".split(void 0, 0).length
          ? function (e, n) {
              return void 0 === e && 0 === n
                ? []
                : t.call(this, e, n)
            }
          : t),
      [
        function (t, n) {
          var u = Mu(this),
            i = null == t ? void 0 : t[e]
          return void 0 !== i
            ? i.call(t, u, n)
            : r.call(String(u), t, n)
        },
        function (e, u) {
          var i = n(r, e, this, u, r !== t)
          if (i.done) return i.value
          var o = Lu(e),
            a = String(this),
            l = Nu(o, RegExp),
            s = o.unicode,
            c =
              (o.ignoreCase ? "i" : "") +
              (o.multiline ? "m" : "") +
              (o.unicode ? "u" : "") +
              (Hu ? "g" : "y"),
            f = new l(
              Hu ? "^(?:" + o.source + ")" : o,
              c
            ),
            p = void 0 === u ? 4294967295 : u >>> 0
          if (0 === p) return []
          if (0 === a.length)
            return null === Zu(f, a) ? [a] : []
          for (
            var h = 0, D = 0, g = [];
            D < a.length;

          ) {
            f.lastIndex = Hu ? 0 : D
            var d,
              v = Zu(f, Hu ? a.slice(D) : a)
            if (
              null === v ||
              (d = Yu(
                qu(f.lastIndex + (Hu ? D : 0)),
                a.length
              )) === h
            )
              D = Uu(a, D, s)
            else {
              if (
                (g.push(a.slice(h, D)), g.length === p)
              )
                return g
              for (var A = 1; A <= v.length - 1; A++)
                if ((g.push(v[A]), g.length === p))
                  return g
              D = h = d
            }
          }
          return g.push(a.slice(h)), g
        },
      ]
    )
  },
  Hu
)
var Ku = x,
  Xu =
    "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
  Wu = RegExp("^" + Xu + Xu + "*"),
  Ju = RegExp(Xu + Xu + "*$"),
  Qu = function (e) {
    return function (t) {
      var n = String(Ku(t))
      return (
        1 & e && (n = n.replace(Wu, "")),
        2 & e && (n = n.replace(Ju, "")),
        n
      )
    }
  },
  ei = { start: Qu(1), end: Qu(2), trim: Qu(3) },
  ti = D,
  ni =
    "\t\n\v\f\r                　\u2028\u2029\ufeff",
  ri = ei.trim
en(
  {
    target: "String",
    proto: !0,
    forced: (function (e) {
      return ti(function () {
        return (
          !!ni[e]() ||
          "​᠎" != "​᠎"[e]() ||
          ni[e].name !== e
        )
      })
    })("trim"),
  },
  {
    trim: function () {
      return ri(this)
    },
  }
)
var ui = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  ii = Ou,
  oi = function (e, t, n) {
    if ((ii(e), void 0 === t)) return e
    switch (n) {
      case 0:
        return function () {
          return e.call(t)
        }
      case 1:
        return function (n) {
          return e.call(t, n)
        }
      case 2:
        return function (n, r) {
          return e.call(t, n, r)
        }
      case 3:
        return function (n, r, u) {
          return e.call(t, n, r, u)
        }
    }
    return function () {
      return e.apply(t, arguments)
    }
  },
  ai = k,
  li =
    Array.isArray ||
    function (e) {
      return "Array" == ai(e)
    },
  si = _,
  ci = li,
  fi = Pn("species"),
  pi = function (e, t) {
    var n
    return (
      ci(e) &&
        ("function" != typeof (n = e.constructor) ||
        (n !== Array && !ci(n.prototype))
          ? si(n) &&
            null === (n = n[fi]) &&
            (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    )
  },
  hi = oi,
  Di = C,
  gi = j,
  di = pt,
  vi = pi,
  Ai = [].push,
  yi = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      u = 4 == e,
      i = 6 == e,
      o = 7 == e,
      a = 5 == e || i
    return function (l, s, c, f) {
      for (
        var p,
          h,
          D = gi(l),
          g = Di(D),
          d = hi(s, c, 3),
          v = di(g.length),
          A = 0,
          y = f || vi,
          E = t ? y(l, v) : n || o ? y(l, 0) : void 0;
        v > A;
        A++
      )
        if (
          (a || A in g) &&
          ((h = d((p = g[A]), A, D)), e)
        )
          if (t) E[A] = h
          else if (h)
            switch (e) {
              case 3:
                return !0
              case 5:
                return p
              case 6:
                return A
              case 2:
                Ai.call(E, p)
            }
          else
            switch (e) {
              case 4:
                return !1
              case 7:
                Ai.call(E, p)
            }
      return i ? -1 : r || u ? u : E
    }
  },
  Ei = {
    forEach: yi(0),
    map: yi(1),
    filter: yi(2),
    some: yi(3),
    every: yi(4),
    find: yi(5),
    findIndex: yi(6),
    filterOut: yi(7),
  },
  mi = Ei.forEach,
  ki = p,
  Fi = ui,
  bi = xu("forEach")
    ? [].forEach
    : function (e) {
        return mi(
          this,
          e,
          arguments.length > 1 ? arguments[1] : void 0
        )
      },
  Ci = le
for (var xi in Fi) {
  var wi = ki[xi],
    Bi = wi && wi.prototype
  if (Bi && Bi.forEach !== bi)
    try {
      Ci(Bi, "forEach", bi)
    } catch (e) {
      Bi.forEach = bi
    }
}
var Si = {}
Si[Pn("toStringTag")] = "z"
var _i = "[object z]" === String(Si),
  Ti = _i,
  Oi = k,
  Ri = Pn("toStringTag"),
  ji =
    "Arguments" ==
    Oi(
      (function () {
        return arguments
      })()
    ),
  Ii = Ti
    ? Oi
    : function (e) {
        var t, n, r
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (n = (function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            })((t = Object(e)), Ri))
          ? n
          : ji
          ? Oi(t)
          : "Object" == (r = Oi(t)) &&
            "function" == typeof t.callee
          ? "Arguments"
          : r
      },
  zi = Ii,
  $i = _i
    ? {}.toString
    : function () {
        return "[object " + zi(this) + "]"
      },
  Pi = _i,
  Li = se.exports,
  Mi = $i
Pi ||
  Li(Object.prototype, "toString", Mi, { unsafe: !0 })
var Ni = p.Promise,
  Ui = se.exports,
  qi = J.f,
  Zi = $,
  Gi = Pn("toStringTag"),
  Hi = function (e, t, n) {
    e &&
      !Zi((e = n ? e : e.prototype), Gi) &&
      qi(e, Gi, { configurable: !0, value: t })
  },
  Vi = {},
  Yi = Vi,
  Ki = Pn("iterator"),
  Xi = Array.prototype,
  Wi = Ii,
  Ji = Vi,
  Qi = Pn("iterator"),
  eo = ee,
  to = ee,
  no = function (e) {
    return (
      void 0 !== e && (Yi.Array === e || Xi[Ki] === e)
    )
  },
  ro = pt,
  uo = oi,
  io = function (e) {
    if (null != e)
      return e[Qi] || e["@@iterator"] || Ji[Wi(e)]
  },
  oo = function (e) {
    var t = e.return
    if (void 0 !== t) return eo(t.call(e)).value
  },
  ao = function (e, t) {
    ;(this.stopped = e), (this.result = t)
  },
  lo = Pn("iterator"),
  so = !1
try {
  var co = 0,
    fo = {
      next: function () {
        return { done: !!co++ }
      },
      return: function () {
        so = !0
      },
    }
  ;(fo[lo] = function () {
    return this
  }),
    Array.from(fo, function () {
      throw 2
    })
} catch (e) {}
var po,
  ho,
  Do,
  go = it("document", "documentElement"),
  vo = /(?:iphone|ipod|ipad).*applewebkit/i.test(yn),
  Ao = "process" == k(p.process),
  yo = p,
  Eo = D,
  mo = oi,
  ko = go,
  Fo = N,
  bo = vo,
  Co = Ao,
  xo = yo.location,
  wo = yo.setImmediate,
  Bo = yo.clearImmediate,
  So = yo.process,
  _o = yo.MessageChannel,
  To = yo.Dispatch,
  Oo = 0,
  Ro = {},
  jo = function (e) {
    if (Ro.hasOwnProperty(e)) {
      var t = Ro[e]
      delete Ro[e], t()
    }
  },
  Io = function (e) {
    return function () {
      jo(e)
    }
  },
  zo = function (e) {
    jo(e.data)
  },
  $o = function (e) {
    yo.postMessage(
      e + "",
      xo.protocol + "//" + xo.host
    )
  }
;(wo && Bo) ||
  ((wo = function (e) {
    for (var t = [], n = 1; arguments.length > n; )
      t.push(arguments[n++])
    return (
      (Ro[++Oo] = function () {
        ;("function" == typeof e
          ? e
          : Function(e)
        ).apply(void 0, t)
      }),
      po(Oo),
      Oo
    )
  }),
  (Bo = function (e) {
    delete Ro[e]
  }),
  Co
    ? (po = function (e) {
        So.nextTick(Io(e))
      })
    : To && To.now
    ? (po = function (e) {
        To.now(Io(e))
      })
    : _o && !bo
    ? ((Do = (ho = new _o()).port2),
      (ho.port1.onmessage = zo),
      (po = mo(Do.postMessage, Do, 1)))
    : yo.addEventListener &&
      "function" == typeof postMessage &&
      !yo.importScripts &&
      xo &&
      "file:" !== xo.protocol &&
      !Eo($o)
    ? ((po = $o),
      yo.addEventListener("message", zo, !1))
    : (po =
        "onreadystatechange" in Fo("script")
          ? function (e) {
              ko.appendChild(
                Fo("script")
              ).onreadystatechange = function () {
                ko.removeChild(this), jo(e)
              }
            }
          : function (e) {
              setTimeout(Io(e), 0)
            }))
var Po,
  Lo,
  Mo,
  No,
  Uo,
  qo,
  Zo,
  Go,
  Ho = { set: wo, clear: Bo },
  Vo = /web0s(?!.*chrome)/i.test(yn),
  Yo = p,
  Ko = h.f,
  Xo = Ho.set,
  Wo = vo,
  Jo = Vo,
  Qo = Ao,
  ea =
    Yo.MutationObserver || Yo.WebKitMutationObserver,
  ta = Yo.document,
  na = Yo.process,
  ra = Yo.Promise,
  ua = Ko(Yo, "queueMicrotask"),
  ia = ua && ua.value
ia ||
  ((Po = function () {
    var e, t
    for (Qo && (e = na.domain) && e.exit(); Lo; ) {
      ;(t = Lo.fn), (Lo = Lo.next)
      try {
        t()
      } catch (e) {
        throw (Lo ? No() : (Mo = void 0), e)
      }
    }
    ;(Mo = void 0), e && e.enter()
  }),
  Wo || Qo || Jo || !ea || !ta
    ? ra && ra.resolve
      ? (((Zo = ra.resolve(void 0)).constructor = ra),
        (Go = Zo.then),
        (No = function () {
          Go.call(Zo, Po)
        }))
      : (No = Qo
          ? function () {
              na.nextTick(Po)
            }
          : function () {
              Xo.call(Yo, Po)
            })
    : ((Uo = !0),
      (qo = ta.createTextNode("")),
      new ea(Po).observe(qo, { characterData: !0 }),
      (No = function () {
        qo.data = Uo = !Uo
      })))
var oa =
    ia ||
    function (e) {
      var t = { fn: e, next: void 0 }
      Mo && (Mo.next = t),
        Lo || ((Lo = t), No()),
        (Mo = t)
    },
  aa = {},
  la = Ou,
  sa = function (e) {
    var t, n
    ;(this.promise = new e(function (e, r) {
      if (void 0 !== t || void 0 !== n)
        throw TypeError("Bad Promise constructor")
      ;(t = e), (n = r)
    })),
      (this.resolve = la(t)),
      (this.reject = la(n))
  }
aa.f = function (e) {
  return new sa(e)
}
var ca,
  fa,
  pa,
  ha,
  Da = ee,
  ga = _,
  da = aa,
  va = p,
  Aa = "object" == typeof window,
  ya = en,
  Ea = p,
  ma = it,
  ka = Ni,
  Fa = se.exports,
  ba = function (e, t, n) {
    for (var r in t) Ui(e, r, t[r], n)
    return e
  },
  Ca = Cr,
  xa = Hi,
  wa = zr,
  Ba = _,
  Sa = Ou,
  _a = function (e, t, n) {
    if (!(e instanceof t))
      throw TypeError(
        "Incorrect " +
          (n ? n + " " : "") +
          "invocation"
      )
    return e
  },
  Ta = ve,
  Oa = function (e, t, n) {
    var r,
      u,
      i,
      o,
      a,
      l,
      s,
      c = n && n.that,
      f = !(!n || !n.AS_ENTRIES),
      p = !(!n || !n.IS_ITERATOR),
      h = !(!n || !n.INTERRUPTED),
      D = uo(t, c, 1 + f + h),
      g = function (e) {
        return r && oo(r), new ao(!0, e)
      },
      d = function (e) {
        return f
          ? (to(e),
            h ? D(e[0], e[1], g) : D(e[0], e[1]))
          : h
          ? D(e, g)
          : D(e)
      }
    if (p) r = e
    else {
      if ("function" != typeof (u = io(e)))
        throw TypeError("Target is not iterable")
      if (no(u)) {
        for (i = 0, o = ro(e.length); o > i; i++)
          if ((a = d(e[i])) && a instanceof ao)
            return a
        return new ao(!1)
      }
      r = u.call(e)
    }
    for (l = r.next; !(s = l.call(r)).done; ) {
      try {
        a = d(s.value)
      } catch (e) {
        throw (oo(r), e)
      }
      if ("object" == typeof a && a && a instanceof ao)
        return a
    }
    return new ao(!1)
  },
  Ra = function (e, t) {
    if (!t && !so) return !1
    var n = !1
    try {
      var r = {}
      ;(r[lo] = function () {
        return {
          next: function () {
            return { done: (n = !0) }
          },
        }
      }),
        e(r)
    } catch (e) {}
    return n
  },
  ja = zu,
  Ia = Ho.set,
  za = oa,
  $a = function (e, t) {
    if ((Da(e), ga(t) && t.constructor === e)) return t
    var n = da.f(e)
    return (0, n.resolve)(t), n.promise
  },
  Pa = function (e, t) {
    var n = va.console
    n &&
      n.error &&
      (1 === arguments.length
        ? n.error(e)
        : n.error(e, t))
  },
  La = aa,
  Ma = function (e) {
    try {
      return { error: !1, value: e() }
    } catch (e) {
      return { error: !0, value: e }
    }
  },
  Na = Ve,
  Ua = Ht,
  qa = Aa,
  Za = Ao,
  Ga = bn,
  Ha = Pn("species"),
  Va = "Promise",
  Ya = Na.get,
  Ka = Na.set,
  Xa = Na.getterFor(Va),
  Wa = ka && ka.prototype,
  Ja = ka,
  Qa = Wa,
  el = Ea.TypeError,
  tl = Ea.document,
  nl = Ea.process,
  rl = La.f,
  ul = rl,
  il = !!(tl && tl.createEvent && Ea.dispatchEvent),
  ol = "function" == typeof PromiseRejectionEvent,
  al = !1,
  ll = Ua(Va, function () {
    var e = Ta(Ja) !== String(Ja)
    if (!e && 66 === Ga) return !0
    if (Ga >= 51 && /native code/.test(Ja)) return !1
    var t = new Ja(function (e) {
        e(1)
      }),
      n = function (e) {
        e(
          function () {},
          function () {}
        )
      }
    return (
      ((t.constructor = {})[Ha] = n),
      !(al = t.then(function () {}) instanceof n) ||
        (!e && qa && !ol)
    )
  }),
  sl =
    ll ||
    !Ra(function (e) {
      Ja.all(e).catch(function () {})
    }),
  cl = function (e) {
    var t
    return (
      !(!Ba(e) || "function" != typeof (t = e.then)) &&
      t
    )
  },
  fl = function (e, t) {
    if (!e.notified) {
      e.notified = !0
      var n = e.reactions
      za(function () {
        for (
          var r = e.value, u = 1 == e.state, i = 0;
          n.length > i;

        ) {
          var o,
            a,
            l,
            s = n[i++],
            c = u ? s.ok : s.fail,
            f = s.resolve,
            p = s.reject,
            h = s.domain
          try {
            c
              ? (u ||
                  (2 === e.rejection && gl(e),
                  (e.rejection = 1)),
                !0 === c
                  ? (o = r)
                  : (h && h.enter(),
                    (o = c(r)),
                    h && (h.exit(), (l = !0))),
                o === s.promise
                  ? p(el("Promise-chain cycle"))
                  : (a = cl(o))
                  ? a.call(o, f, p)
                  : f(o))
              : p(r)
          } catch (e) {
            h && !l && h.exit(), p(e)
          }
        }
        ;(e.reactions = []),
          (e.notified = !1),
          t && !e.rejection && hl(e)
      })
    }
  },
  pl = function (e, t, n) {
    var r, u
    il
      ? (((r = tl.createEvent("Event")).promise = t),
        (r.reason = n),
        r.initEvent(e, !1, !0),
        Ea.dispatchEvent(r))
      : (r = { promise: t, reason: n }),
      !ol && (u = Ea["on" + e])
        ? u(r)
        : "unhandledrejection" === e &&
          Pa("Unhandled promise rejection", n)
  },
  hl = function (e) {
    Ia.call(Ea, function () {
      var t,
        n = e.facade,
        r = e.value
      if (
        Dl(e) &&
        ((t = Ma(function () {
          Za
            ? nl.emit("unhandledRejection", r, n)
            : pl("unhandledrejection", n, r)
        })),
        (e.rejection = Za || Dl(e) ? 2 : 1),
        t.error)
      )
        throw t.value
    })
  },
  Dl = function (e) {
    return 1 !== e.rejection && !e.parent
  },
  gl = function (e) {
    Ia.call(Ea, function () {
      var t = e.facade
      Za
        ? nl.emit("rejectionHandled", t)
        : pl("rejectionhandled", t, e.value)
    })
  },
  dl = function (e, t, n) {
    return function (r) {
      e(t, r, n)
    }
  },
  vl = function (e, t, n) {
    e.done ||
      ((e.done = !0),
      n && (e = n),
      (e.value = t),
      (e.state = 2),
      fl(e, !0))
  },
  Al = function (e, t, n) {
    if (!e.done) {
      ;(e.done = !0), n && (e = n)
      try {
        if (e.facade === t)
          throw el("Promise can't be resolved itself")
        var r = cl(t)
        r
          ? za(function () {
              var n = { done: !1 }
              try {
                r.call(t, dl(Al, n, e), dl(vl, n, e))
              } catch (t) {
                vl(n, t, e)
              }
            })
          : ((e.value = t), (e.state = 1), fl(e, !1))
      } catch (t) {
        vl({ done: !1 }, t, e)
      }
    }
  }
if (
  ll &&
  ((Qa = (Ja = function (e) {
    _a(this, Ja, Va), Sa(e), ca.call(this)
    var t = Ya(this)
    try {
      e(dl(Al, t), dl(vl, t))
    } catch (e) {
      vl(t, e)
    }
  }).prototype),
  ((ca = function (e) {
    Ka(this, {
      type: Va,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    })
  }).prototype = ba(Qa, {
    then: function (e, t) {
      var n = Xa(this),
        r = rl(ja(this, Ja))
      return (
        (r.ok = "function" != typeof e || e),
        (r.fail = "function" == typeof t && t),
        (r.domain = Za ? nl.domain : void 0),
        (n.parent = !0),
        n.reactions.push(r),
        0 != n.state && fl(n, !1),
        r.promise
      )
    },
    catch: function (e) {
      return this.then(void 0, e)
    },
  })),
  (fa = function () {
    var e = new ca(),
      t = Ya(e)
    ;(this.promise = e),
      (this.resolve = dl(Al, t)),
      (this.reject = dl(vl, t))
  }),
  (La.f = rl =
    function (e) {
      return e === Ja || e === pa ? new fa(e) : ul(e)
    }),
  "function" == typeof ka && Wa !== Object.prototype)
) {
  ;(ha = Wa.then),
    al ||
      (Fa(
        Wa,
        "then",
        function (e, t) {
          var n = this
          return new Ja(function (e, t) {
            ha.call(n, e, t)
          }).then(e, t)
        },
        { unsafe: !0 }
      ),
      Fa(Wa, "catch", Qa.catch, { unsafe: !0 }))
  try {
    delete Wa.constructor
  } catch (e) {}
  Ca && Ca(Wa, Qa)
}
ya(
  { global: !0, wrap: !0, forced: ll },
  { Promise: Ja }
),
  xa(Ja, Va, !1),
  wa(Va),
  (pa = ma(Va)),
  ya(
    { target: Va, stat: !0, forced: ll },
    {
      reject: function (e) {
        var t = rl(this)
        return t.reject.call(void 0, e), t.promise
      },
    }
  ),
  ya(
    { target: Va, stat: !0, forced: ll },
    {
      resolve: function (e) {
        return $a(this, e)
      },
    }
  ),
  ya(
    { target: Va, stat: !0, forced: sl },
    {
      all: function (e) {
        var t = this,
          n = rl(t),
          r = n.resolve,
          u = n.reject,
          i = Ma(function () {
            var n = Sa(t.resolve),
              i = [],
              o = 0,
              a = 1
            Oa(e, function (e) {
              var l = o++,
                s = !1
              i.push(void 0),
                a++,
                n.call(t, e).then(function (e) {
                  s ||
                    ((s = !0), (i[l] = e), --a || r(i))
                }, u)
            }),
              --a || r(i)
          })
        return i.error && u(i.value), n.promise
      },
      race: function (e) {
        var t = this,
          n = rl(t),
          r = n.reject,
          u = Ma(function () {
            var u = Sa(t.resolve)
            Oa(e, function (e) {
              u.call(t, e).then(n.resolve, r)
            })
          })
        return u.error && r(u.value), n.promise
      },
    }
  )
var yl = O,
  El = J,
  ml = E,
  kl = function (e, t, n) {
    var r = yl(t)
    r in e ? El.f(e, r, ml(0, n)) : (e[r] = n)
  },
  Fl = D,
  bl = bn,
  Cl = Pn("species"),
  xl = function (e) {
    return (
      bl >= 51 ||
      !Fl(function () {
        var t = []
        return (
          ((t.constructor = {})[Cl] = function () {
            return { foo: 1 }
          }),
          1 !== t[e](Boolean).foo
        )
      })
    )
  },
  wl = en,
  Bl = _,
  Sl = li,
  _l = dt,
  Tl = pt,
  Ol = S,
  Rl = kl,
  jl = Pn,
  Il = xl("slice"),
  zl = jl("species"),
  $l = [].slice,
  Pl = Math.max
wl(
  { target: "Array", proto: !0, forced: !Il },
  {
    slice: function (e, t) {
      var n,
        r,
        u,
        i = Ol(this),
        o = Tl(i.length),
        a = _l(e, o),
        l = _l(void 0 === t ? o : t, o)
      if (
        Sl(i) &&
        ("function" != typeof (n = i.constructor) ||
        (n !== Array && !Sl(n.prototype))
          ? Bl(n) &&
            null === (n = n[zl]) &&
            (n = void 0)
          : (n = void 0),
        n === Array || void 0 === n)
      )
        return $l.call(i, a, l)
      for (
        r = new (void 0 === n ? Array : n)(
          Pl(l - a, 0)
        ),
          u = 0;
        a < l;
        a++, u++
      )
        a in i && Rl(r, u, i[a])
      return (r.length = u), r
    },
  }
)
var Ll,
  Ml = xt,
  Nl = wt,
  Ul =
    Object.keys ||
    function (e) {
      return Ml(e, Nl)
    },
  ql = J,
  Zl = ee,
  Gl = Ul,
  Hl = g
    ? Object.defineProperties
    : function (e, t) {
        Zl(e)
        for (
          var n, r = Gl(t), u = r.length, i = 0;
          u > i;

        )
          ql.f(e, (n = r[i++]), t[n])
        return e
      },
  Vl = ee,
  Yl = Hl,
  Kl = wt,
  Xl = Re,
  Wl = go,
  Jl = N,
  Ql = Oe("IE_PROTO"),
  es = function () {},
  ts = function (e) {
    return "<script>" + e + "</script>"
  },
  ns = function () {
    try {
      Ll =
        document.domain &&
        new ActiveXObject("htmlfile")
    } catch (e) {}
    var e, t
    ns = Ll
      ? (function (e) {
          e.write(ts("")), e.close()
          var t = e.parentWindow.Object
          return (e = null), t
        })(Ll)
      : (((t = Jl("iframe")).style.display = "none"),
        Wl.appendChild(t),
        (t.src = String("javascript:")),
        (e = t.contentWindow.document).open(),
        e.write(ts("document.F=Object")),
        e.close(),
        e.F)
    for (var n = Kl.length; n--; )
      delete ns.prototype[Kl[n]]
    return ns()
  }
Xl[Ql] = !0
var rs =
    Object.create ||
    function (e, t) {
      var n
      return (
        null !== e
          ? ((es.prototype = Vl(e)),
            (n = new es()),
            (es.prototype = null),
            (n[Ql] = e))
          : (n = ns()),
        void 0 === t ? n : Yl(n, t)
      )
    },
  us = rs,
  is = J,
  os = Pn("unscopables"),
  as = Array.prototype
null == as[os] &&
  is.f(as, os, { configurable: !0, value: us(null) })
var ls,
  ss,
  cs,
  fs = function (e) {
    as[os][e] = !0
  },
  ps = !D(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    )
  }),
  hs = $,
  Ds = j,
  gs = ps,
  ds = Oe("IE_PROTO"),
  vs = Object.prototype,
  As = gs
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = Ds(e)),
          hs(e, ds)
            ? e[ds]
            : "function" == typeof e.constructor &&
              e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? vs
            : null
        )
      },
  ys = D,
  Es = As,
  ms = le,
  ks = $,
  Fs = Pn("iterator"),
  bs = !1
;[].keys &&
  ("next" in (cs = [].keys())
    ? (ss = Es(Es(cs))) !== Object.prototype &&
      (ls = ss)
    : (bs = !0)),
  (null == ls ||
    ys(function () {
      var e = {}
      return ls[Fs].call(e) !== e
    })) &&
    (ls = {}),
  ks(ls, Fs) ||
    ms(ls, Fs, function () {
      return this
    })
var Cs = {
    IteratorPrototype: ls,
    BUGGY_SAFARI_ITERATORS: bs,
  },
  xs = Cs.IteratorPrototype,
  ws = rs,
  Bs = E,
  Ss = Hi,
  _s = Vi,
  Ts = function () {
    return this
  },
  Os = en,
  Rs = function (e, t, n) {
    var r = t + " Iterator"
    return (
      (e.prototype = ws(xs, { next: Bs(1, n) })),
      Ss(e, r, !1),
      (_s[r] = Ts),
      e
    )
  },
  js = As,
  Is = Cr,
  zs = Hi,
  $s = le,
  Ps = se.exports,
  Ls = Vi,
  Ms = Cs.IteratorPrototype,
  Ns = Cs.BUGGY_SAFARI_ITERATORS,
  Us = Pn("iterator"),
  qs = function () {
    return this
  },
  Zs = function (e, t, n, r, u, i, o) {
    Rs(n, t, r)
    var a,
      l,
      s,
      c = function (e) {
        if (e === u && g) return g
        if (!Ns && e in h) return h[e]
        switch (e) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this)
        }
      },
      f = t + " Iterator",
      p = !1,
      h = e.prototype,
      D = h[Us] || h["@@iterator"] || (u && h[u]),
      g = (!Ns && D) || c(u),
      d = ("Array" == t && h.entries) || D
    if (
      (d &&
        ((a = js(d.call(new e()))),
        Ms !== Object.prototype &&
          a.next &&
          (js(a) !== Ms &&
            (Is
              ? Is(a, Ms)
              : "function" != typeof a[Us] &&
                $s(a, Us, qs)),
          zs(a, f, !0))),
      "values" == u &&
        D &&
        "values" !== D.name &&
        ((p = !0),
        (g = function () {
          return D.call(this)
        })),
      h[Us] !== g && $s(h, Us, g),
      (Ls[t] = g),
      u)
    )
      if (
        ((l = {
          values: c("values"),
          keys: i ? g : c("keys"),
          entries: c("entries"),
        }),
        o)
      )
        for (s in l)
          (Ns || p || !(s in h)) && Ps(h, s, l[s])
      else
        Os(
          { target: t, proto: !0, forced: Ns || p },
          l
        )
    return l
  },
  Gs = S,
  Hs = fs,
  Vs = Vi,
  Ys = Ve,
  Ks = Zs,
  Xs = Ys.set,
  Ws = Ys.getterFor("Array Iterator"),
  Js = Ks(
    Array,
    "Array",
    function (e, t) {
      Xs(this, {
        type: "Array Iterator",
        target: Gs(e),
        index: 0,
        kind: t,
      })
    },
    function () {
      var e = Ws(this),
        t = e.target,
        n = e.kind,
        r = e.index++
      return !t || r >= t.length
        ? ((e.target = void 0),
          { value: void 0, done: !0 })
        : "keys" == n
        ? { value: r, done: !1 }
        : "values" == n
        ? { value: t[r], done: !1 }
        : { value: [r, t[r]], done: !1 }
    },
    "values"
  )
;(Vs.Arguments = Vs.Array),
  Hs("keys"),
  Hs("values"),
  Hs("entries")
var Qs = tr.charAt,
  ec = Ve,
  tc = Zs,
  nc = ec.set,
  rc = ec.getterFor("String Iterator")
tc(
  String,
  "String",
  function (e) {
    nc(this, {
      type: "String Iterator",
      string: String(e),
      index: 0,
    })
  },
  function () {
    var e,
      t = rc(this),
      n = t.string,
      r = t.index
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Qs(n, r)),
        (t.index += e.length),
        { value: e, done: !1 })
  }
)
var uc = p,
  ic = ui,
  oc = Js,
  ac = le,
  lc = Pn,
  sc = lc("iterator"),
  cc = lc("toStringTag"),
  fc = oc.values
for (var pc in ic) {
  var hc = uc[pc],
    Dc = hc && hc.prototype
  if (Dc) {
    if (Dc[sc] !== fc)
      try {
        ac(Dc, sc, fc)
      } catch (e) {
        Dc[sc] = fc
      }
    if ((Dc[cc] || ac(Dc, cc, pc), ic[pc]))
      for (var gc in oc)
        if (Dc[gc] !== oc[gc])
          try {
            ac(Dc, gc, oc[gc])
          } catch (e) {
            Dc[gc] = oc[gc]
          }
  }
}
var dc = en,
  vc = D,
  Ac = li,
  yc = _,
  Ec = j,
  mc = pt,
  kc = kl,
  Fc = pi,
  bc = xl,
  Cc = bn,
  xc = Pn("isConcatSpreadable"),
  wc =
    Cc >= 51 ||
    !vc(function () {
      var e = []
      return (e[xc] = !1), e.concat()[0] !== e
    }),
  Bc = bc("concat"),
  Sc = function (e) {
    if (!yc(e)) return !1
    var t = e[xc]
    return void 0 !== t ? !!t : Ac(e)
  }
dc(
  { target: "Array", proto: !0, forced: !wc || !Bc },
  {
    concat: function (e) {
      var t,
        n,
        r,
        u,
        i,
        o = Ec(this),
        a = Fc(o, 0),
        l = 0
      for (t = -1, r = arguments.length; t < r; t++)
        if (Sc((i = -1 === t ? o : arguments[t]))) {
          if (
            l + (u = mc(i.length)) >
            9007199254740991
          )
            throw TypeError(
              "Maximum allowed index exceeded"
            )
          for (n = 0; n < u; n++, l++)
            n in i && kc(a, l, i[n])
        } else {
          if (l >= 9007199254740991)
            throw TypeError(
              "Maximum allowed index exceeded"
            )
          kc(a, l++, i)
        }
      return (a.length = l), a
    },
  }
)
var _c = j,
  Tc = Ul
en(
  {
    target: "Object",
    stat: !0,
    forced: D(function () {
      Tc(1)
    }),
  },
  {
    keys: function (e) {
      return Tc(_c(e))
    },
  }
)
var Oc = mt.includes,
  Rc = fs
en(
  { target: "Array", proto: !0 },
  {
    includes: function (e) {
      return Oc(
        this,
        e,
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
),
  Rc("includes")
var jc = Tr,
  Ic = Pn("match"),
  zc = function (e) {
    if (jc(e))
      throw TypeError(
        "The method doesn't accept regular expressions"
      )
    return e
  },
  $c = x
en(
  {
    target: "String",
    proto: !0,
    forced: !(function (e) {
      var t = /./
      try {
        "/./"[e](t)
      } catch (n) {
        try {
          return (t[Ic] = !1), "/./"[e](t)
        } catch (e) {}
      }
      return !1
    })("includes"),
  },
  {
    includes: function (e) {
      return !!~String($c(this)).indexOf(
        zc(e),
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
)
var Pc = x,
  Lc = /"/g,
  Mc = D,
  Nc = function (e, t, n, r) {
    var u = String(Pc(e)),
      i = "<" + t
    return (
      "" !== n &&
        (i +=
          " " +
          n +
          '="' +
          String(r).replace(Lc, "&quot;") +
          '"'),
      i + ">" + u + "</" + t + ">"
    )
  }
en(
  {
    target: "String",
    proto: !0,
    forced: (function (e) {
      return Mc(function () {
        var t = ""[e]('"')
        return (
          t !== t.toLowerCase() ||
          t.split('"').length > 3
        )
      })
    })("link"),
  },
  {
    link: function (e) {
      return Nc(this, "a", "href", e)
    },
  }
)
var Uc = Ei.map
en(
  { target: "Array", proto: !0, forced: !xl("map") },
  {
    map: function (e) {
      return Uc(
        this,
        e,
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
)
var qc = en,
  Zc = dt,
  Gc = st,
  Hc = pt,
  Vc = j,
  Yc = pi,
  Kc = kl,
  Xc = xl("splice"),
  Wc = Math.max,
  Jc = Math.min
qc(
  { target: "Array", proto: !0, forced: !Xc },
  {
    splice: function (e, t) {
      var n,
        r,
        u,
        i,
        o,
        a,
        l = Vc(this),
        s = Hc(l.length),
        c = Zc(e, s),
        f = arguments.length
      if (
        (0 === f
          ? (n = r = 0)
          : 1 === f
          ? ((n = 0), (r = s - c))
          : ((n = f - 2),
            (r = Jc(Wc(Gc(t), 0), s - c))),
        s + n - r > 9007199254740991)
      )
        throw TypeError(
          "Maximum allowed length exceeded"
        )
      for (u = Yc(l, r), i = 0; i < r; i++)
        (o = c + i) in l && Kc(u, i, l[o])
      if (((u.length = r), n < r)) {
        for (i = c; i < s - r; i++)
          (a = i + n),
            (o = i + r) in l
              ? (l[a] = l[o])
              : delete l[a]
        for (i = s; i > s - r + n; i--) delete l[i - 1]
      } else if (n > r)
        for (i = s - r; i > c; i--)
          (a = i + n - 1),
            (o = i + r - 1) in l
              ? (l[a] = l[o])
              : delete l[a]
      for (i = 0; i < n; i++)
        l[i + c] = arguments[i + 2]
      return (l.length = s - r + n), u
    },
  }
)
var Qc = { exports: {} }
function ef() {
  return {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  }
}
Qc.exports = {
  defaults: {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  },
  getDefaults: ef,
  changeDefaults: function (e) {
    Qc.exports.defaults = e
  },
}
var tf = /[&<>"']/,
  nf = /[&<>"']/g,
  rf = /[<>"']|&(?!#?\w+;)/,
  uf = /[<>"']|&(?!#?\w+;)/g,
  of = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  af = function (e) {
    return of[e]
  }
var lf = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function sf(e) {
  return e.replace(lf, function (e, t) {
    return "colon" === (t = t.toLowerCase())
      ? ":"
      : "#" === t.charAt(0)
      ? "x" === t.charAt(1)
        ? String.fromCharCode(
            parseInt(t.substring(2), 16)
          )
        : String.fromCharCode(+t.substring(1))
      : ""
  })
}
var cf = /(^|[^\[])\^/g
var ff = /[^\w:]/g,
  pf = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
var hf = {},
  Df = /^[^:]+:\/*[^/]*$/,
  gf = /^([^:]+:)[\s\S]*$/,
  df = /^([^:]+:\/*[^/]*)[\s\S]*$/
function vf(e, t) {
  hf[" " + e] ||
    (Df.test(e)
      ? (hf[" " + e] = e + "/")
      : (hf[" " + e] = Af(e, "/", !0)))
  var n = -1 === (e = hf[" " + e]).indexOf(":")
  return "//" === t.substring(0, 2)
    ? n
      ? t
      : e.replace(gf, "$1") + t
    : "/" === t.charAt(0)
    ? n
      ? t
      : e.replace(df, "$1") + t
    : e + t
}
function Af(e, t, n) {
  var r = e.length
  if (0 === r) return ""
  for (var u = 0; u < r; ) {
    var i = e.charAt(r - u - 1)
    if (i !== t || n) {
      if (i === t || !n) break
      u++
    } else u++
  }
  return e.substr(0, r - u)
}
var yf = function (e, t) {
    if (t) {
      if (tf.test(e)) return e.replace(nf, af)
    } else if (rf.test(e)) return e.replace(uf, af)
    return e
  },
  Ef = sf,
  mf = function (e, t) {
    ;(e = e.source || e), (t = t || "")
    var n = {
      replace: function (t, r) {
        return (
          (r = (r = r.source || r).replace(cf, "$1")),
          (e = e.replace(t, r)),
          n
        )
      },
      getRegex: function () {
        return new RegExp(e, t)
      },
    }
    return n
  },
  kf = function (e, t, n) {
    if (e) {
      var r
      try {
        r = decodeURIComponent(sf(n))
          .replace(ff, "")
          .toLowerCase()
      } catch (e) {
        return null
      }
      if (
        0 === r.indexOf("javascript:") ||
        0 === r.indexOf("vbscript:") ||
        0 === r.indexOf("data:")
      )
        return null
    }
    t && !pf.test(n) && (n = vf(t, n))
    try {
      n = encodeURI(n).replace(/%25/g, "%")
    } catch (e) {
      return null
    }
    return n
  },
  Ff = { exec: function () {} },
  bf = function (e) {
    for (var t, n, r = 1; r < arguments.length; r++)
      for (n in (t = arguments[r]))
        Object.prototype.hasOwnProperty.call(t, n) &&
          (e[n] = t[n])
    return e
  },
  Cf = function (e, t) {
    var n = e
        .replace(/\|/g, function (e, t, n) {
          for (
            var r = !1, u = t;
            --u >= 0 && "\\" === n[u];

          )
            r = !r
          return r ? "|" : " |"
        })
        .split(/ \|/),
      r = 0
    if (n.length > t) n.splice(t)
    else for (; n.length < t; ) n.push("")
    for (; r < n.length; r++)
      n[r] = n[r].trim().replace(/\\\|/g, "|")
    return n
  },
  xf = Af,
  wf = function (e, t) {
    if (-1 === e.indexOf(t[1])) return -1
    for (var n = e.length, r = 0, u = 0; u < n; u++)
      if ("\\" === e[u]) u++
      else if (e[u] === t[0]) r++
      else if (e[u] === t[1] && --r < 0) return u
    return -1
  },
  Bf = function (e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      )
  },
  Sf = function (e, t) {
    if (t < 1) return ""
    for (var n = ""; t > 1; )
      1 & t && (n += e), (t >>= 1), (e += e)
    return n + e
  },
  _f = Qc.exports.defaults,
  Tf = xf,
  Of = Cf,
  Rf = yf,
  jf = wf
function If(e, t, n) {
  var r = t.href,
    u = t.title ? Rf(t.title) : null,
    i = e[1].replace(/\\([\[\]])/g, "$1")
  return "!" !== e[0].charAt(0)
    ? {
        type: "link",
        raw: n,
        href: r,
        title: u,
        text: i,
      }
    : {
        type: "image",
        raw: n,
        href: r,
        title: u,
        text: Rf(i),
      }
}
var zf = (function () {
    function e(n) {
      t(this, e), (this.options = n || _f)
    }
    return (
      r(e, [
        {
          key: "space",
          value: function (e) {
            var t = this.rules.block.newline.exec(e)
            if (t)
              return t[0].length > 1
                ? { type: "space", raw: t[0] }
                : { raw: "\n" }
          },
        },
        {
          key: "code",
          value: function (e) {
            var t = this.rules.block.code.exec(e)
            if (t) {
              var n = t[0].replace(/^ {1,4}/gm, "")
              return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic
                  ? n
                  : Tf(n, "\n"),
              }
            }
          },
        },
        {
          key: "fences",
          value: function (e) {
            var t = this.rules.block.fences.exec(e)
            if (t) {
              var n = t[0],
                r = (function (e, t) {
                  var n = e.match(/^(\s+)(?:```)/)
                  if (null === n) return t
                  var r = n[1]
                  return t
                    .split("\n")
                    .map(function (e) {
                      var t = e.match(/^\s+/)
                      return null === t
                        ? e
                        : o(t, 1)[0].length >= r.length
                        ? e.slice(r.length)
                        : e
                    })
                    .join("\n")
                })(n, t[3] || "")
              return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim() : t[2],
                text: r,
              }
            }
          },
        },
        {
          key: "heading",
          value: function (e) {
            var t = this.rules.block.heading.exec(e)
            if (t) {
              var n = t[2].trim()
              if (/#$/.test(n)) {
                var r = Tf(n, "#")
                this.options.pedantic
                  ? (n = r.trim())
                  : (r && !/ $/.test(r)) ||
                    (n = r.trim())
              }
              return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: n,
              }
            }
          },
        },
        {
          key: "nptable",
          value: function (e) {
            var t = this.rules.block.nptable.exec(e)
            if (t) {
              var n = {
                type: "table",
                header: Of(
                  t[1].replace(/^ *| *\| *$/g, "")
                ),
                align: t[2]
                  .replace(/^ *|\| *$/g, "")
                  .split(/ *\| */),
                cells: t[3]
                  ? t[3].replace(/\n$/, "").split("\n")
                  : [],
                raw: t[0],
              }
              if (n.header.length === n.align.length) {
                var r,
                  u = n.align.length
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = "center")
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = "left")
                    : (n.align[r] = null)
                for (
                  u = n.cells.length, r = 0;
                  r < u;
                  r++
                )
                  n.cells[r] = Of(
                    n.cells[r],
                    n.header.length
                  )
                return n
              }
            }
          },
        },
        {
          key: "hr",
          value: function (e) {
            var t = this.rules.block.hr.exec(e)
            if (t) return { type: "hr", raw: t[0] }
          },
        },
        {
          key: "blockquote",
          value: function (e) {
            var t = this.rules.block.blockquote.exec(e)
            if (t) {
              var n = t[0].replace(/^ *> ?/gm, "")
              return {
                type: "blockquote",
                raw: t[0],
                text: n,
              }
            }
          },
        },
        {
          key: "list",
          value: function (e) {
            var t = this.rules.block.list.exec(e)
            if (t) {
              var n,
                r,
                u,
                i,
                o,
                a,
                l,
                s,
                c,
                f = t[0],
                p = t[2],
                h = p.length > 1,
                D = {
                  type: "list",
                  raw: f,
                  ordered: h,
                  start: h ? +p.slice(0, -1) : "",
                  loose: !1,
                  items: [],
                },
                g = t[0].match(this.rules.block.item),
                d = !1,
                v = g.length
              u = this.rules.block.listItemStart.exec(
                g[0]
              )
              for (var A = 0; A < v; A++) {
                if (
                  ((f = n = g[A]),
                  this.options.pedantic ||
                    ((c = n.match(
                      new RegExp(
                        "\\n\\s*\\n {0," +
                          (u[0].length - 1) +
                          "}\\S"
                      )
                    )) &&
                      ((o =
                        n.length -
                        c.index +
                        g.slice(A + 1).join("\n")
                          .length),
                      (D.raw = D.raw.substring(
                        0,
                        D.raw.length - o
                      )),
                      (f = n =
                        n.substring(0, c.index)),
                      (v = A + 1))),
                  A !== v - 1)
                ) {
                  if (
                    ((i =
                      this.rules.block.listItemStart.exec(
                        g[A + 1]
                      )),
                    this.options.pedantic
                      ? i[1].length > u[1].length
                      : i[1].length >= u[0].length ||
                        i[1].length > 3)
                  ) {
                    g.splice(
                      A,
                      2,
                      g[A] +
                        (!this.options.pedantic &&
                        i[1].length < u[0].length &&
                        !g[A].match(/\n$/)
                          ? ""
                          : "\n") +
                        g[A + 1]
                    ),
                      A--,
                      v--
                    continue
                  }
                  ;(!this.options.pedantic ||
                  this.options.smartLists
                    ? i[2][i[2].length - 1] !==
                      p[p.length - 1]
                    : h === (1 === i[2].length)) &&
                    ((o = g
                      .slice(A + 1)
                      .join("\n").length),
                    (D.raw = D.raw.substring(
                      0,
                      D.raw.length - o
                    )),
                    (A = v - 1)),
                    (u = i)
                }
                ;(r = n.length),
                  ~(n = n.replace(
                    /^ *([*+-]|\d+[.)]) ?/,
                    ""
                  )).indexOf("\n ") &&
                    ((r -= n.length),
                    (n = this.options.pedantic
                      ? n.replace(/^ {1,4}/gm, "")
                      : n.replace(
                          new RegExp(
                            "^ {1," + r + "}",
                            "gm"
                          ),
                          ""
                        ))),
                  (n = Tf(n, "\n")),
                  A !== v - 1 && (f += "\n"),
                  (a = d || /\n\n(?!\s*$)/.test(f)),
                  A !== v - 1 &&
                    ((d = "\n\n" === f.slice(-2)),
                    a || (a = d)),
                  a && (D.loose = !0),
                  this.options.gfm &&
                    ((s = void 0),
                    (l = /^\[[ xX]\] /.test(n)) &&
                      ((s = " " !== n[1]),
                      (n = n.replace(
                        /^\[[ xX]\] +/,
                        ""
                      )))),
                  D.items.push({
                    type: "list_item",
                    raw: f,
                    task: l,
                    checked: s,
                    loose: a,
                    text: n,
                  })
              }
              return D
            }
          },
        },
        {
          key: "html",
          value: function (e) {
            var t = this.rules.block.html.exec(e)
            if (t)
              return {
                type: this.options.sanitize
                  ? "paragraph"
                  : "html",
                raw: t[0],
                pre:
                  !this.options.sanitizer &&
                  ("pre" === t[1] ||
                    "script" === t[1] ||
                    "style" === t[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : Rf(t[0])
                  : t[0],
              }
          },
        },
        {
          key: "def",
          value: function (e) {
            var t = this.rules.block.def.exec(e)
            if (t)
              return (
                t[3] &&
                  (t[3] = t[3].substring(
                    1,
                    t[3].length - 1
                  )),
                {
                  type: "def",
                  tag: t[1]
                    .toLowerCase()
                    .replace(/\s+/g, " "),
                  raw: t[0],
                  href: t[2],
                  title: t[3],
                }
              )
          },
        },
        {
          key: "table",
          value: function (e) {
            var t = this.rules.block.table.exec(e)
            if (t) {
              var n = {
                type: "table",
                header: Of(
                  t[1].replace(/^ *| *\| *$/g, "")
                ),
                align: t[2]
                  .replace(/^ *|\| *$/g, "")
                  .split(/ *\| */),
                cells: t[3]
                  ? t[3].replace(/\n$/, "").split("\n")
                  : [],
              }
              if (n.header.length === n.align.length) {
                n.raw = t[0]
                var r,
                  u = n.align.length
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = "center")
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = "left")
                    : (n.align[r] = null)
                for (
                  u = n.cells.length, r = 0;
                  r < u;
                  r++
                )
                  n.cells[r] = Of(
                    n.cells[r].replace(
                      /^ *\| *| *\| *$/g,
                      ""
                    ),
                    n.header.length
                  )
                return n
              }
            }
          },
        },
        {
          key: "lheading",
          value: function (e) {
            var t = this.rules.block.lheading.exec(e)
            if (t)
              return {
                type: "heading",
                raw: t[0],
                depth: "=" === t[2].charAt(0) ? 1 : 2,
                text: t[1],
              }
          },
        },
        {
          key: "paragraph",
          value: function (e) {
            var t = this.rules.block.paragraph.exec(e)
            if (t)
              return {
                type: "paragraph",
                raw: t[0],
                text:
                  "\n" === t[1].charAt(t[1].length - 1)
                    ? t[1].slice(0, -1)
                    : t[1],
              }
          },
        },
        {
          key: "text",
          value: function (e) {
            var t = this.rules.block.text.exec(e)
            if (t)
              return {
                type: "text",
                raw: t[0],
                text: t[0],
              }
          },
        },
        {
          key: "escape",
          value: function (e) {
            var t = this.rules.inline.escape.exec(e)
            if (t)
              return {
                type: "escape",
                raw: t[0],
                text: Rf(t[1]),
              }
          },
        },
        {
          key: "tag",
          value: function (e, t, n) {
            var r = this.rules.inline.tag.exec(e)
            if (r)
              return (
                !t && /^<a /i.test(r[0])
                  ? (t = !0)
                  : t &&
                    /^<\/a>/i.test(r[0]) &&
                    (t = !1),
                !n &&
                /^<(pre|code|kbd|script)(\s|>)/i.test(
                  r[0]
                )
                  ? (n = !0)
                  : n &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(
                      r[0]
                    ) &&
                    (n = !1),
                {
                  type: this.options.sanitize
                    ? "text"
                    : "html",
                  raw: r[0],
                  inLink: t,
                  inRawBlock: n,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : Rf(r[0])
                    : r[0],
                }
              )
          },
        },
        {
          key: "link",
          value: function (e) {
            var t = this.rules.inline.link.exec(e)
            if (t) {
              var n = t[2].trim()
              if (
                !this.options.pedantic &&
                /^</.test(n)
              ) {
                if (!/>$/.test(n)) return
                var r = Tf(n.slice(0, -1), "\\")
                if ((n.length - r.length) % 2 == 0)
                  return
              } else {
                var u = jf(t[2], "()")
                if (u > -1) {
                  var i =
                    (0 === t[0].indexOf("!") ? 5 : 4) +
                    t[1].length +
                    u
                  ;(t[2] = t[2].substring(0, u)),
                    (t[0] = t[0]
                      .substring(0, i)
                      .trim()),
                    (t[3] = "")
                }
              }
              var o = t[2],
                a = ""
              if (this.options.pedantic) {
                var l =
                  /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(
                    o
                  )
                l && ((o = l[1]), (a = l[3]))
              } else a = t[3] ? t[3].slice(1, -1) : ""
              return (
                (o = o.trim()),
                /^</.test(o) &&
                  (o =
                    this.options.pedantic &&
                    !/>$/.test(n)
                      ? o.slice(1)
                      : o.slice(1, -1)),
                If(
                  t,
                  {
                    href: o
                      ? o.replace(
                          this.rules.inline._escapes,
                          "$1"
                        )
                      : o,
                    title: a
                      ? a.replace(
                          this.rules.inline._escapes,
                          "$1"
                        )
                      : a,
                  },
                  t[0]
                )
              )
            }
          },
        },
        {
          key: "reflink",
          value: function (e, t) {
            var n
            if (
              (n =
                this.rules.inline.reflink.exec(e)) ||
              (n = this.rules.inline.nolink.exec(e))
            ) {
              var r = (n[2] || n[1]).replace(
                /\s+/g,
                " "
              )
              if (
                !(r = t[r.toLowerCase()]) ||
                !r.href
              ) {
                var u = n[0].charAt(0)
                return {
                  type: "text",
                  raw: u,
                  text: u,
                }
              }
              return If(n, r, n[0])
            }
          },
        },
        {
          key: "emStrong",
          value: function (e, t) {
            var n =
                arguments.length > 2 &&
                void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r =
                this.rules.inline.emStrong.lDelim.exec(
                  e
                )
            if (
              r &&
              (!r[3] ||
                !n.match(
                  /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                ))
            ) {
              var u = r[1] || r[2] || ""
              if (
                !u ||
                (u &&
                  ("" === n ||
                    this.rules.inline.punctuation.exec(
                      n
                    )))
              ) {
                var i,
                  o,
                  a = r[0].length - 1,
                  l = a,
                  s = 0,
                  c =
                    "*" === r[0][0]
                      ? this.rules.inline.emStrong
                          .rDelimAst
                      : this.rules.inline.emStrong
                          .rDelimUnd
                for (
                  c.lastIndex = 0,
                    t = t.slice(-1 * e.length + a);
                  null != (r = c.exec(t));

                )
                  if (
                    (i =
                      r[1] ||
                      r[2] ||
                      r[3] ||
                      r[4] ||
                      r[5] ||
                      r[6])
                  )
                    if (((o = i.length), r[3] || r[4]))
                      l += o
                    else if (
                      !((r[5] || r[6]) && a % 3) ||
                      (a + o) % 3
                    ) {
                      if (!((l -= o) > 0)) {
                        if (
                          (l + s - o <= 0 &&
                            !t
                              .slice(c.lastIndex)
                              .match(c) &&
                            (o = Math.min(
                              o,
                              o + l + s
                            )),
                          Math.min(a, o) % 2)
                        )
                          return {
                            type: "em",
                            raw: e.slice(
                              0,
                              a + r.index + o + 1
                            ),
                            text: e.slice(
                              1,
                              a + r.index + o
                            ),
                          }
                        if (Math.min(a, o) % 2 == 0)
                          return {
                            type: "strong",
                            raw: e.slice(
                              0,
                              a + r.index + o + 1
                            ),
                            text: e.slice(
                              2,
                              a + r.index + o - 1
                            ),
                          }
                      }
                    } else s += o
              }
            }
          },
        },
        {
          key: "codespan",
          value: function (e) {
            var t = this.rules.inline.code.exec(e)
            if (t) {
              var n = t[2].replace(/\n/g, " "),
                r = /[^ ]/.test(n),
                u = /^ /.test(n) && / $/.test(n)
              return (
                r &&
                  u &&
                  (n = n.substring(1, n.length - 1)),
                (n = Rf(n, !0)),
                {
                  type: "codespan",
                  raw: t[0],
                  text: n,
                }
              )
            }
          },
        },
        {
          key: "br",
          value: function (e) {
            var t = this.rules.inline.br.exec(e)
            if (t) return { type: "br", raw: t[0] }
          },
        },
        {
          key: "del",
          value: function (e) {
            var t = this.rules.inline.del.exec(e)
            if (t)
              return {
                type: "del",
                raw: t[0],
                text: t[2],
              }
          },
        },
        {
          key: "autolink",
          value: function (e, t) {
            var n,
              r,
              u = this.rules.inline.autolink.exec(e)
            if (u)
              return (
                (r =
                  "@" === u[2]
                    ? "mailto:" +
                      (n = Rf(
                        this.options.mangle
                          ? t(u[1])
                          : u[1]
                      ))
                    : (n = Rf(u[1]))),
                {
                  type: "link",
                  raw: u[0],
                  text: n,
                  href: r,
                  tokens: [
                    { type: "text", raw: n, text: n },
                  ],
                }
              )
          },
        },
        {
          key: "url",
          value: function (e, t) {
            var n
            if ((n = this.rules.inline.url.exec(e))) {
              var r, u
              if ("@" === n[2])
                u =
                  "mailto:" +
                  (r = Rf(
                    this.options.mangle
                      ? t(n[0])
                      : n[0]
                  ))
              else {
                var i
                do {
                  ;(i = n[0]),
                    (n[0] =
                      this.rules.inline._backpedal.exec(
                        n[0]
                      )[0])
                } while (i !== n[0])
                ;(r = Rf(n[0])),
                  (u =
                    "www." === n[1]
                      ? "http://" + r
                      : r)
              }
              return {
                type: "link",
                raw: n[0],
                text: r,
                href: u,
                tokens: [
                  { type: "text", raw: r, text: r },
                ],
              }
            }
          },
        },
        {
          key: "inlineText",
          value: function (e, t, n) {
            var r,
              u = this.rules.inline.text.exec(e)
            if (u)
              return (
                (r = t
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(u[0])
                      : Rf(u[0])
                    : u[0]
                  : Rf(
                      this.options.smartypants
                        ? n(u[0])
                        : u[0]
                    )),
                { type: "text", raw: u[0], text: r }
              )
          },
        },
      ]),
      e
    )
  })(),
  $f = Ff,
  Pf = mf,
  Lf = bf,
  Mf = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote:
      /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: $f,
    table: $f,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title:
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  }
;(Mf.def = Pf(Mf.def)
  .replace("label", Mf._label)
  .replace("title", Mf._title)
  .getRegex()),
  (Mf.bullet = /(?:[*+-]|\d{1,9}[.)])/),
  (Mf.item =
    /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
  (Mf.item = Pf(Mf.item, "gm")
    .replace(/bull/g, Mf.bullet)
    .getRegex()),
  (Mf.listItemStart = Pf(/^( *)(bull) */)
    .replace("bull", Mf.bullet)
    .getRegex()),
  (Mf.list = Pf(Mf.list)
    .replace(/bull/g, Mf.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
    )
    .replace("def", "\\n+(?=" + Mf.def.source + ")")
    .getRegex()),
  (Mf._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
  (Mf._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
  (Mf.html = Pf(Mf.html, "i")
    .replace("comment", Mf._comment)
    .replace("tag", Mf._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex()),
  (Mf.paragraph = Pf(Mf._paragraph)
    .replace("hr", Mf.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("blockquote", " {0,3}>")
    .replace(
      "fences",
      " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
    )
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)"
    )
    .replace("tag", Mf._tag)
    .getRegex()),
  (Mf.blockquote = Pf(Mf.blockquote)
    .replace("paragraph", Mf.paragraph)
    .getRegex()),
  (Mf.normal = Lf({}, Mf)),
  (Mf.gfm = Lf({}, Mf.normal, {
    nptable:
      "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    table:
      "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  })),
  (Mf.gfm.nptable = Pf(Mf.gfm.nptable)
    .replace("hr", Mf.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace(
      "fences",
      " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
    )
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)"
    )
    .replace("tag", Mf._tag)
    .getRegex()),
  (Mf.gfm.table = Pf(Mf.gfm.table)
    .replace("hr", Mf.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace(
      "fences",
      " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
    )
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)"
    )
    .replace("tag", Mf._tag)
    .getRegex()),
  (Mf.pedantic = Lf({}, Mf.normal, {
    html: Pf(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
    )
      .replace("comment", Mf._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: $f,
    paragraph: Pf(Mf.normal._paragraph)
      .replace("hr", Mf.hr)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", Mf.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  }))
var Nf = {
  escape:
    /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: $f,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink:
    /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink:
    /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim:
      /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: $f,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
  _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
}
;(Nf.punctuation = Pf(Nf.punctuation)
  .replace(/punctuation/g, Nf._punctuation)
  .getRegex()),
  (Nf.blockSkip =
    /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
  (Nf.escapedEmSt = /\\\*|\\_/g),
  (Nf._comment = Pf(Mf._comment)
    .replace("(?:--\x3e|$)", "--\x3e")
    .getRegex()),
  (Nf.emStrong.lDelim = Pf(Nf.emStrong.lDelim)
    .replace(/punct/g, Nf._punctuation)
    .getRegex()),
  (Nf.emStrong.rDelimAst = Pf(
    Nf.emStrong.rDelimAst,
    "g"
  )
    .replace(/punct/g, Nf._punctuation)
    .getRegex()),
  (Nf.emStrong.rDelimUnd = Pf(
    Nf.emStrong.rDelimUnd,
    "g"
  )
    .replace(/punct/g, Nf._punctuation)
    .getRegex()),
  (Nf._escapes =
    /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Nf._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Nf._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Nf.autolink = Pf(Nf.autolink)
    .replace("scheme", Nf._scheme)
    .replace("email", Nf._email)
    .getRegex()),
  (Nf._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Nf.tag = Pf(Nf.tag)
    .replace("comment", Nf._comment)
    .replace("attribute", Nf._attribute)
    .getRegex()),
  (Nf._label =
    /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Nf._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
  (Nf._title =
    /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Nf.link = Pf(Nf.link)
    .replace("label", Nf._label)
    .replace("href", Nf._href)
    .replace("title", Nf._title)
    .getRegex()),
  (Nf.reflink = Pf(Nf.reflink)
    .replace("label", Nf._label)
    .getRegex()),
  (Nf.reflinkSearch = Pf(Nf.reflinkSearch, "g")
    .replace("reflink", Nf.reflink)
    .replace("nolink", Nf.nolink)
    .getRegex()),
  (Nf.normal = Lf({}, Nf)),
  (Nf.pedantic = Lf({}, Nf.normal, {
    strong: {
      start: /^__|\*\*/,
      middle:
        /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g,
    },
    em: {
      start: /^_|\*/,
      middle:
        /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g,
    },
    link: Pf(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Nf._label)
      .getRegex(),
    reflink: Pf(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Nf._label)
      .getRegex(),
  })),
  (Nf.gfm = Lf({}, Nf.normal, {
    escape: Pf(Nf.escape)
      .replace("])", "~|])")
      .getRegex(),
    _extended_email:
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal:
      /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
  })),
  (Nf.gfm.url = Pf(Nf.gfm.url, "i")
    .replace("email", Nf.gfm._extended_email)
    .getRegex()),
  (Nf.breaks = Lf({}, Nf.gfm, {
    br: Pf(Nf.br).replace("{2,}", "*").getRegex(),
    text: Pf(Nf.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  }))
var Uf = { block: Mf, inline: Nf },
  qf = zf,
  Zf = Qc.exports.defaults,
  Gf = Uf.block,
  Hf = Uf.inline,
  Vf = Sf
function Yf(e) {
  return e
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…")
}
function Kf(e) {
  var t,
    n,
    r = "",
    u = e.length
  for (t = 0; t < u; t++)
    (n = e.charCodeAt(t)),
      Math.random() > 0.5 &&
        (n = "x" + n.toString(16)),
      (r += "&#" + n + ";")
  return r
}
var Xf = (function () {
    function e(n) {
      t(this, e),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = n || Zf),
        (this.options.tokenizer =
          this.options.tokenizer || new qf()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options)
      var r = { block: Gf.normal, inline: Hf.normal }
      this.options.pedantic
        ? ((r.block = Gf.pedantic),
          (r.inline = Hf.pedantic))
        : this.options.gfm &&
          ((r.block = Gf.gfm),
          this.options.breaks
            ? (r.inline = Hf.breaks)
            : (r.inline = Hf.gfm)),
        (this.tokenizer.rules = r)
    }
    return (
      r(
        e,
        [
          {
            key: "lex",
            value: function (e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")),
                this.blockTokens(e, this.tokens, !0),
                this.inline(this.tokens),
                this.tokens
              )
            },
          },
          {
            key: "blockTokens",
            value: function (e) {
              var t,
                n,
                r,
                u,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                o =
                  !(
                    arguments.length > 2 &&
                    void 0 !== arguments[2]
                  ) || arguments[2]
              for (
                this.options.pedantic &&
                (e = e.replace(/^ +$/gm, ""));
                e;

              )
                if ((t = this.tokenizer.space(e)))
                  (e = e.substring(t.raw.length)),
                    t.type && i.push(t)
                else if ((t = this.tokenizer.code(e)))
                  (e = e.substring(t.raw.length)),
                    (u = i[i.length - 1]) &&
                    "paragraph" === u.type
                      ? ((u.raw += "\n" + t.raw),
                        (u.text += "\n" + t.text))
                      : i.push(t)
                else if (
                  (t = this.tokenizer.fences(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  (t = this.tokenizer.heading(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  (t = this.tokenizer.nptable(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if ((t = this.tokenizer.hr(e)))
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  (t = this.tokenizer.blockquote(e))
                )
                  (e = e.substring(t.raw.length)),
                    (t.tokens = this.blockTokens(
                      t.text,
                      [],
                      o
                    )),
                    i.push(t)
                else if (
                  (t = this.tokenizer.list(e))
                ) {
                  for (
                    e = e.substring(t.raw.length),
                      r = t.items.length,
                      n = 0;
                    n < r;
                    n++
                  )
                    t.items[n].tokens =
                      this.blockTokens(
                        t.items[n].text,
                        [],
                        !1
                      )
                  i.push(t)
                } else if (
                  (t = this.tokenizer.html(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  o &&
                  (t = this.tokenizer.def(e))
                )
                  (e = e.substring(t.raw.length)),
                    this.tokens.links[t.tag] ||
                      (this.tokens.links[t.tag] = {
                        href: t.href,
                        title: t.title,
                      })
                else if ((t = this.tokenizer.table(e)))
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  (t = this.tokenizer.lheading(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if (
                  o &&
                  (t = this.tokenizer.paragraph(e))
                )
                  (e = e.substring(t.raw.length)),
                    i.push(t)
                else if ((t = this.tokenizer.text(e)))
                  (e = e.substring(t.raw.length)),
                    (u = i[i.length - 1]) &&
                    "text" === u.type
                      ? ((u.raw += "\n" + t.raw),
                        (u.text += "\n" + t.text))
                      : i.push(t)
                else if (e) {
                  var a =
                    "Infinite loop on byte: " +
                    e.charCodeAt(0)
                  if (this.options.silent) {
                    console.error(a)
                    break
                  }
                  throw new Error(a)
                }
              return i
            },
          },
          {
            key: "inline",
            value: function (e) {
              var t,
                n,
                r,
                u,
                i,
                o,
                a = e.length
              for (t = 0; t < a; t++)
                switch ((o = e[t]).type) {
                  case "paragraph":
                  case "text":
                  case "heading":
                    ;(o.tokens = []),
                      this.inlineTokens(
                        o.text,
                        o.tokens
                      )
                    break
                  case "table":
                    for (
                      o.tokens = {
                        header: [],
                        cells: [],
                      },
                        u = o.header.length,
                        n = 0;
                      n < u;
                      n++
                    )
                      (o.tokens.header[n] = []),
                        this.inlineTokens(
                          o.header[n],
                          o.tokens.header[n]
                        )
                    for (
                      u = o.cells.length, n = 0;
                      n < u;
                      n++
                    )
                      for (
                        i = o.cells[n],
                          o.tokens.cells[n] = [],
                          r = 0;
                        r < i.length;
                        r++
                      )
                        (o.tokens.cells[n][r] = []),
                          this.inlineTokens(
                            i[r],
                            o.tokens.cells[n][r]
                          )
                    break
                  case "blockquote":
                    this.inline(o.tokens)
                    break
                  case "list":
                    for (
                      u = o.items.length, n = 0;
                      n < u;
                      n++
                    )
                      this.inline(o.items[n].tokens)
                }
              return e
            },
          },
          {
            key: "inlineTokens",
            value: function (e) {
              var t,
                n,
                r,
                u,
                i,
                o =
                  arguments.length > 1 &&
                  void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                s = e
              if (this.tokens.links) {
                var c = Object.keys(this.tokens.links)
                if (c.length > 0)
                  for (
                    ;
                    null !=
                    (r =
                      this.tokenizer.rules.inline.reflinkSearch.exec(
                        s
                      ));

                  )
                    c.includes(
                      r[0].slice(
                        r[0].lastIndexOf("[") + 1,
                        -1
                      )
                    ) &&
                      (s =
                        s.slice(0, r.index) +
                        "[" +
                        Vf("a", r[0].length - 2) +
                        "]" +
                        s.slice(
                          this.tokenizer.rules.inline
                            .reflinkSearch.lastIndex
                        ))
              }
              for (
                ;
                null !=
                (r =
                  this.tokenizer.rules.inline.blockSkip.exec(
                    s
                  ));

              )
                s =
                  s.slice(0, r.index) +
                  "[" +
                  Vf("a", r[0].length - 2) +
                  "]" +
                  s.slice(
                    this.tokenizer.rules.inline
                      .blockSkip.lastIndex
                  )
              for (
                ;
                null !=
                (r =
                  this.tokenizer.rules.inline.escapedEmSt.exec(
                    s
                  ));

              )
                s =
                  s.slice(0, r.index) +
                  "++" +
                  s.slice(
                    this.tokenizer.rules.inline
                      .escapedEmSt.lastIndex
                  )
              for (; e; )
                if (
                  (u || (i = ""),
                  (u = !1),
                  (t = this.tokenizer.escape(e)))
                )
                  (e = e.substring(t.raw.length)),
                    o.push(t)
                else if (
                  (t = this.tokenizer.tag(e, a, l))
                ) {
                  ;(e = e.substring(t.raw.length)),
                    (a = t.inLink),
                    (l = t.inRawBlock)
                  var f = o[o.length - 1]
                  f &&
                  "text" === t.type &&
                  "text" === f.type
                    ? ((f.raw += t.raw),
                      (f.text += t.text))
                    : o.push(t)
                } else if (
                  (t = this.tokenizer.link(e))
                )
                  (e = e.substring(t.raw.length)),
                    "link" === t.type &&
                      (t.tokens = this.inlineTokens(
                        t.text,
                        [],
                        !0,
                        l
                      )),
                    o.push(t)
                else if (
                  (t = this.tokenizer.reflink(
                    e,
                    this.tokens.links
                  ))
                ) {
                  e = e.substring(t.raw.length)
                  var p = o[o.length - 1]
                  "link" === t.type
                    ? ((t.tokens = this.inlineTokens(
                        t.text,
                        [],
                        !0,
                        l
                      )),
                      o.push(t))
                    : p &&
                      "text" === t.type &&
                      "text" === p.type
                    ? ((p.raw += t.raw),
                      (p.text += t.text))
                    : o.push(t)
                } else if (
                  (t = this.tokenizer.emStrong(
                    e,
                    s,
                    i
                  ))
                )
                  (e = e.substring(t.raw.length)),
                    (t.tokens = this.inlineTokens(
                      t.text,
                      [],
                      a,
                      l
                    )),
                    o.push(t)
                else if (
                  (t = this.tokenizer.codespan(e))
                )
                  (e = e.substring(t.raw.length)),
                    o.push(t)
                else if ((t = this.tokenizer.br(e)))
                  (e = e.substring(t.raw.length)),
                    o.push(t)
                else if ((t = this.tokenizer.del(e)))
                  (e = e.substring(t.raw.length)),
                    (t.tokens = this.inlineTokens(
                      t.text,
                      [],
                      a,
                      l
                    )),
                    o.push(t)
                else if (
                  (t = this.tokenizer.autolink(e, Kf))
                )
                  (e = e.substring(t.raw.length)),
                    o.push(t)
                else if (
                  a ||
                  !(t = this.tokenizer.url(e, Kf))
                ) {
                  if (
                    (t = this.tokenizer.inlineText(
                      e,
                      l,
                      Yf
                    ))
                  )
                    (e = e.substring(t.raw.length)),
                      "_" !== t.raw.slice(-1) &&
                        (i = t.raw.slice(-1)),
                      (u = !0),
                      (n = o[o.length - 1]) &&
                      "text" === n.type
                        ? ((n.raw += t.raw),
                          (n.text += t.text))
                        : o.push(t)
                  else if (e) {
                    var h =
                      "Infinite loop on byte: " +
                      e.charCodeAt(0)
                    if (this.options.silent) {
                      console.error(h)
                      break
                    }
                    throw new Error(h)
                  }
                } else
                  (e = e.substring(t.raw.length)),
                    o.push(t)
              return o
            },
          },
        ],
        [
          {
            key: "rules",
            get: function () {
              return { block: Gf, inline: Hf }
            },
          },
          {
            key: "lex",
            value: function (t, n) {
              return new e(n).lex(t)
            },
          },
          {
            key: "lexInline",
            value: function (t, n) {
              return new e(n).inlineTokens(t)
            },
          },
        ]
      ),
      e
    )
  })(),
  Wf = Qc.exports.defaults,
  Jf = kf,
  Qf = yf,
  ep = (function () {
    function e(n) {
      t(this, e), (this.options = n || Wf)
    }
    return (
      r(e, [
        {
          key: "code",
          value: function (e, t, n) {
            var r = (t || "").match(/\S*/)[0]
            if (this.options.highlight) {
              var u = this.options.highlight(e, r)
              null != u &&
                u !== e &&
                ((n = !0), (e = u))
            }
            return (
              (e = e.replace(/\n$/, "") + "\n"),
              r
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  Qf(r, !0) +
                  '">' +
                  (n ? e : Qf(e, !0)) +
                  "</code></pre>\n"
                : "<pre><code>" +
                  (n ? e : Qf(e, !0)) +
                  "</code></pre>\n"
            )
          },
        },
        {
          key: "blockquote",
          value: function (e) {
            return (
              "<blockquote>\n" + e + "</blockquote>\n"
            )
          },
        },
        {
          key: "html",
          value: function (e) {
            return e
          },
        },
        {
          key: "heading",
          value: function (e, t, n, r) {
            return this.options.headerIds
              ? "<h" +
                  t +
                  ' id="' +
                  this.options.headerPrefix +
                  r.slug(n) +
                  '">' +
                  e +
                  "</h" +
                  t +
                  ">\n"
              : "<h" + t + ">" + e + "</h" + t + ">\n"
          },
        },
        {
          key: "hr",
          value: function () {
            return this.options.xhtml
              ? "<hr/>\n"
              : "<hr>\n"
          },
        },
        {
          key: "list",
          value: function (e, t, n) {
            var r = t ? "ol" : "ul"
            return (
              "<" +
              r +
              (t && 1 !== n
                ? ' start="' + n + '"'
                : "") +
              ">\n" +
              e +
              "</" +
              r +
              ">\n"
            )
          },
        },
        {
          key: "listitem",
          value: function (e) {
            return "<li>" + e + "</li>\n"
          },
        },
        {
          key: "checkbox",
          value: function (e) {
            return (
              "<input " +
              (e ? 'checked="" ' : "") +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? " /" : "") +
              "> "
            )
          },
        },
        {
          key: "paragraph",
          value: function (e) {
            return "<p>" + e + "</p>\n"
          },
        },
        {
          key: "table",
          value: function (e, t) {
            return (
              t && (t = "<tbody>" + t + "</tbody>"),
              "<table>\n<thead>\n" +
                e +
                "</thead>\n" +
                t +
                "</table>\n"
            )
          },
        },
        {
          key: "tablerow",
          value: function (e) {
            return "<tr>\n" + e + "</tr>\n"
          },
        },
        {
          key: "tablecell",
          value: function (e, t) {
            var n = t.header ? "th" : "td"
            return (
              (t.align
                ? "<" + n + ' align="' + t.align + '">'
                : "<" + n + ">") +
              e +
              "</" +
              n +
              ">\n"
            )
          },
        },
        {
          key: "strong",
          value: function (e) {
            return "<strong>" + e + "</strong>"
          },
        },
        {
          key: "em",
          value: function (e) {
            return "<em>" + e + "</em>"
          },
        },
        {
          key: "codespan",
          value: function (e) {
            return "<code>" + e + "</code>"
          },
        },
        {
          key: "br",
          value: function () {
            return this.options.xhtml
              ? "<br/>"
              : "<br>"
          },
        },
        {
          key: "del",
          value: function (e) {
            return "<del>" + e + "</del>"
          },
        },
        {
          key: "link",
          value: function (e, t, n) {
            if (
              null ===
              (e = Jf(
                this.options.sanitize,
                this.options.baseUrl,
                e
              ))
            )
              return n
            var r = '<a href="' + Qf(e) + '"'
            return (
              t && (r += ' title="' + t + '"'),
              (r += ">" + n + "</a>")
            )
          },
        },
        {
          key: "image",
          value: function (e, t, n) {
            if (
              null ===
              (e = Jf(
                this.options.sanitize,
                this.options.baseUrl,
                e
              ))
            )
              return n
            var r =
              '<img src="' + e + '" alt="' + n + '"'
            return (
              t && (r += ' title="' + t + '"'),
              (r += this.options.xhtml ? "/>" : ">")
            )
          },
        },
        {
          key: "text",
          value: function (e) {
            return e
          },
        },
      ]),
      e
    )
  })(),
  tp = (function () {
    function e() {
      t(this, e)
    }
    return (
      r(e, [
        {
          key: "strong",
          value: function (e) {
            return e
          },
        },
        {
          key: "em",
          value: function (e) {
            return e
          },
        },
        {
          key: "codespan",
          value: function (e) {
            return e
          },
        },
        {
          key: "del",
          value: function (e) {
            return e
          },
        },
        {
          key: "html",
          value: function (e) {
            return e
          },
        },
        {
          key: "text",
          value: function (e) {
            return e
          },
        },
        {
          key: "link",
          value: function (e, t, n) {
            return "" + n
          },
        },
        {
          key: "image",
          value: function (e, t, n) {
            return "" + n
          },
        },
        {
          key: "br",
          value: function () {
            return ""
          },
        },
      ]),
      e
    )
  })(),
  np = (function () {
    function e() {
      t(this, e), (this.seen = {})
    }
    return (
      r(e, [
        {
          key: "serialize",
          value: function (e) {
            return e
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, "")
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                ""
              )
              .replace(/\s/g, "-")
          },
        },
        {
          key: "getNextSafeSlug",
          value: function (e, t) {
            var n = e,
              r = 0
            if (this.seen.hasOwnProperty(n)) {
              r = this.seen[e]
              do {
                n = e + "-" + ++r
              } while (this.seen.hasOwnProperty(n))
            }
            return (
              t ||
                ((this.seen[e] = r),
                (this.seen[n] = 0)),
              n
            )
          },
        },
        {
          key: "slug",
          value: function (e) {
            var t =
                arguments.length > 1 &&
                void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = this.serialize(e)
            return this.getNextSafeSlug(n, t.dryrun)
          },
        },
      ]),
      e
    )
  })(),
  rp = ep,
  up = tp,
  ip = np,
  op = Qc.exports.defaults,
  ap = Ef,
  lp = Xf,
  sp = (function () {
    function e(n) {
      t(this, e),
        (this.options = n || op),
        (this.options.renderer =
          this.options.renderer || new rp()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new up()),
        (this.slugger = new ip())
    }
    return (
      r(
        e,
        [
          {
            key: "parse",
            value: function (e) {
              var t,
                n,
                r,
                u,
                i,
                o,
                a,
                l,
                s,
                c,
                f,
                p,
                h,
                D,
                g,
                d,
                v,
                A,
                y =
                  !(
                    arguments.length > 1 &&
                    void 0 !== arguments[1]
                  ) || arguments[1],
                E = "",
                m = e.length
              for (t = 0; t < m; t++)
                switch ((c = e[t]).type) {
                  case "space":
                    continue
                  case "hr":
                    E += this.renderer.hr()
                    continue
                  case "heading":
                    E += this.renderer.heading(
                      this.parseInline(c.tokens),
                      c.depth,
                      ap(
                        this.parseInline(
                          c.tokens,
                          this.textRenderer
                        )
                      ),
                      this.slugger
                    )
                    continue
                  case "code":
                    E += this.renderer.code(
                      c.text,
                      c.lang,
                      c.escaped
                    )
                    continue
                  case "table":
                    for (
                      l = "",
                        a = "",
                        u = c.header.length,
                        n = 0;
                      n < u;
                      n++
                    )
                      a += this.renderer.tablecell(
                        this.parseInline(
                          c.tokens.header[n]
                        ),
                        {
                          header: !0,
                          align: c.align[n],
                        }
                      )
                    for (
                      l += this.renderer.tablerow(a),
                        s = "",
                        u = c.cells.length,
                        n = 0;
                      n < u;
                      n++
                    ) {
                      for (
                        a = "",
                          i = (o = c.tokens.cells[n])
                            .length,
                          r = 0;
                        r < i;
                        r++
                      )
                        a += this.renderer.tablecell(
                          this.parseInline(o[r]),
                          {
                            header: !1,
                            align: c.align[r],
                          }
                        )
                      s += this.renderer.tablerow(a)
                    }
                    E += this.renderer.table(l, s)
                    continue
                  case "blockquote":
                    ;(s = this.parse(c.tokens)),
                      (E +=
                        this.renderer.blockquote(s))
                    continue
                  case "list":
                    for (
                      f = c.ordered,
                        p = c.start,
                        h = c.loose,
                        u = c.items.length,
                        s = "",
                        n = 0;
                      n < u;
                      n++
                    )
                      (d = (g = c.items[n]).checked),
                        (v = g.task),
                        (D = ""),
                        g.task &&
                          ((A =
                            this.renderer.checkbox(d)),
                          h
                            ? g.tokens.length > 0 &&
                              "text" ===
                                g.tokens[0].type
                              ? ((g.tokens[0].text =
                                  A +
                                  " " +
                                  g.tokens[0].text),
                                g.tokens[0].tokens &&
                                  g.tokens[0].tokens
                                    .length > 0 &&
                                  "text" ===
                                    g.tokens[0]
                                      .tokens[0]
                                      .type &&
                                  (g.tokens[0].tokens[0].text =
                                    A +
                                    " " +
                                    g.tokens[0]
                                      .tokens[0].text))
                              : g.tokens.unshift({
                                  type: "text",
                                  text: A,
                                })
                            : (D += A)),
                        (D += this.parse(g.tokens, h)),
                        (s += this.renderer.listitem(
                          D,
                          v,
                          d
                        ))
                    E += this.renderer.list(s, f, p)
                    continue
                  case "html":
                    E += this.renderer.html(c.text)
                    continue
                  case "paragraph":
                    E += this.renderer.paragraph(
                      this.parseInline(c.tokens)
                    )
                    continue
                  case "text":
                    for (
                      s = c.tokens
                        ? this.parseInline(c.tokens)
                        : c.text;
                      t + 1 < m &&
                      "text" === e[t + 1].type;

                    )
                      s +=
                        "\n" +
                        ((c = e[++t]).tokens
                          ? this.parseInline(c.tokens)
                          : c.text)
                    E += y
                      ? this.renderer.paragraph(s)
                      : s
                    continue
                  default:
                    var k =
                      'Token with "' +
                      c.type +
                      '" type was not found.'
                    if (this.options.silent)
                      return void console.error(k)
                    throw new Error(k)
                }
              return E
            },
          },
          {
            key: "parseInline",
            value: function (e, t) {
              t = t || this.renderer
              var n,
                r,
                u = "",
                i = e.length
              for (n = 0; n < i; n++)
                switch ((r = e[n]).type) {
                  case "escape":
                    u += t.text(r.text)
                    break
                  case "html":
                    u += t.html(r.text)
                    break
                  case "link":
                    u += t.link(
                      r.href,
                      r.title,
                      this.parseInline(r.tokens, t)
                    )
                    break
                  case "image":
                    u += t.image(
                      r.href,
                      r.title,
                      r.text
                    )
                    break
                  case "strong":
                    u += t.strong(
                      this.parseInline(r.tokens, t)
                    )
                    break
                  case "em":
                    u += t.em(
                      this.parseInline(r.tokens, t)
                    )
                    break
                  case "codespan":
                    u += t.codespan(r.text)
                    break
                  case "br":
                    u += t.br()
                    break
                  case "del":
                    u += t.del(
                      this.parseInline(r.tokens, t)
                    )
                    break
                  case "text":
                    u += t.text(r.text)
                    break
                  default:
                    var o =
                      'Token with "' +
                      r.type +
                      '" type was not found.'
                    if (this.options.silent)
                      return void console.error(o)
                    throw new Error(o)
                }
              return u
            },
          },
        ],
        [
          {
            key: "parse",
            value: function (t, n) {
              return new e(n).parse(t)
            },
          },
          {
            key: "parseInline",
            value: function (t, n) {
              return new e(n).parseInline(t)
            },
          },
        ]
      ),
      e
    )
  })(),
  cp = zf,
  fp = ep,
  pp = tp,
  hp = np,
  Dp = bf,
  gp = Bf,
  dp = yf,
  vp = Qc.exports.getDefaults,
  Ap = Qc.exports.changeDefaults,
  yp = Qc.exports.defaults
function Ep(e, t, n) {
  if (null == e)
    throw new Error(
      "marked(): input parameter is undefined or null"
    )
  if ("string" != typeof e)
    throw new Error(
      "marked(): input parameter is of type " +
        Object.prototype.toString.call(e) +
        ", string expected"
    )
  if (
    ("function" == typeof t && ((n = t), (t = null)),
    (t = Dp({}, Ep.defaults, t || {})),
    gp(t),
    n)
  ) {
    var r,
      u = t.highlight
    try {
      r = lp.lex(e, t)
    } catch (e) {
      return n(e)
    }
    var i = function (e) {
      var i
      if (!e)
        try {
          i = sp.parse(r, t)
        } catch (t) {
          e = t
        }
      return (t.highlight = u), e ? n(e) : n(null, i)
    }
    if (!u || u.length < 3) return i()
    if ((delete t.highlight, !r.length)) return i()
    var o = 0
    return (
      Ep.walkTokens(r, function (e) {
        "code" === e.type &&
          (o++,
          setTimeout(function () {
            u(e.text, e.lang, function (t, n) {
              if (t) return i(t)
              null != n &&
                n !== e.text &&
                ((e.text = n), (e.escaped = !0)),
                0 === --o && i()
            })
          }, 0))
      }),
      void (0 === o && i())
    )
  }
  try {
    var a = lp.lex(e, t)
    return (
      t.walkTokens && Ep.walkTokens(a, t.walkTokens),
      sp.parse(a, t)
    )
  } catch (e) {
    if (
      ((e.message +=
        "\nPlease report this to https://github.com/markedjs/marked."),
      t.silent)
    )
      return (
        "<p>An error occurred:</p><pre>" +
        dp(e.message + "", !0) +
        "</pre>"
      )
    throw e
  }
}
;(Ep.options = Ep.setOptions =
  function (e) {
    return Dp(Ep.defaults, e), Ap(Ep.defaults), Ep
  }),
  (Ep.getDefaults = vp),
  (Ep.defaults = yp),
  (Ep.use = function (e) {
    var t = Dp({}, e)
    if (
      (e.renderer &&
        (function () {
          var n = Ep.defaults.renderer || new fp(),
            r = function (t) {
              var r = n[t]
              n[t] = function () {
                for (
                  var u = arguments.length,
                    i = new Array(u),
                    o = 0;
                  o < u;
                  o++
                )
                  i[o] = arguments[o]
                var a = e.renderer[t].apply(n, i)
                return (
                  !1 === a && (a = r.apply(n, i)), a
                )
              }
            }
          for (var u in e.renderer) r(u)
          t.renderer = n
        })(),
      e.tokenizer &&
        (function () {
          var n = Ep.defaults.tokenizer || new cp(),
            r = function (t) {
              var r = n[t]
              n[t] = function () {
                for (
                  var u = arguments.length,
                    i = new Array(u),
                    o = 0;
                  o < u;
                  o++
                )
                  i[o] = arguments[o]
                var a = e.tokenizer[t].apply(n, i)
                return (
                  !1 === a && (a = r.apply(n, i)), a
                )
              }
            }
          for (var u in e.tokenizer) r(u)
          t.tokenizer = n
        })(),
      e.walkTokens)
    ) {
      var n = Ep.defaults.walkTokens
      t.walkTokens = function (t) {
        e.walkTokens(t), n && n(t)
      }
    }
    Ep.setOptions(t)
  }),
  (Ep.walkTokens = function (e, t) {
    var n,
      r = s(e)
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var u = n.value
        switch ((t(u), u.type)) {
          case "table":
            var i,
              o = s(u.tokens.header)
            try {
              for (o.s(); !(i = o.n()).done; ) {
                var a = i.value
                Ep.walkTokens(a, t)
              }
            } catch (e) {
              o.e(e)
            } finally {
              o.f()
            }
            var l,
              c = s(u.tokens.cells)
            try {
              for (c.s(); !(l = c.n()).done; ) {
                var f,
                  p = s(l.value)
                try {
                  for (p.s(); !(f = p.n()).done; ) {
                    var h = f.value
                    Ep.walkTokens(h, t)
                  }
                } catch (e) {
                  p.e(e)
                } finally {
                  p.f()
                }
              }
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            break
          case "list":
            Ep.walkTokens(u.items, t)
            break
          default:
            u.tokens && Ep.walkTokens(u.tokens, t)
        }
      }
    } catch (e) {
      r.e(e)
    } finally {
      r.f()
    }
  }),
  (Ep.parseInline = function (e, t) {
    if (null == e)
      throw new Error(
        "marked.parseInline(): input parameter is undefined or null"
      )
    if ("string" != typeof e)
      throw new Error(
        "marked.parseInline(): input parameter is of type " +
          Object.prototype.toString.call(e) +
          ", string expected"
      )
    ;(t = Dp({}, Ep.defaults, t || {})), gp(t)
    try {
      var n = lp.lexInline(e, t)
      return (
        t.walkTokens && Ep.walkTokens(n, t.walkTokens),
        sp.parseInline(n, t)
      )
    } catch (e) {
      if (
        ((e.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        t.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" +
          dp(e.message + "", !0) +
          "</pre>"
        )
      throw e
    }
  }),
  (Ep.Parser = sp),
  (Ep.parser = sp.parse),
  (Ep.Renderer = fp),
  (Ep.TextRenderer = pp),
  (Ep.Lexer = lp),
  (Ep.lexer = lp.lex),
  (Ep.Tokenizer = cp),
  (Ep.Slugger = hp),
  (Ep.parse = Ep)
var mp = Ep,
  kp = /\[([\s\d,|-]*)\]/,
  Fp = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }
export default function () {
  var t
  function n(e) {
    var t = (
        e.querySelector("[data-template]") ||
        e.querySelector("script") ||
        e
      ).textContent,
      n = (t = t.replace(
        new RegExp("__SCRIPT_END__", "g"),
        "</script>"
      )).match(/^\n?(\s*)/)[1].length,
      r = t.match(/^\n?(\t*)/)[1].length
    return (
      r > 0
        ? (t = t.replace(
            new RegExp("\\n?\\t{" + r + "}", "g"),
            "\n"
          ))
        : n > 1 &&
          (t = t.replace(
            new RegExp("\\n? {" + n + "}", "g"),
            "\n"
          )),
      t
    )
  }
  function r(e) {
    for (
      var t = e.attributes,
        n = [],
        r = 0,
        u = t.length;
      r < u;
      r++
    ) {
      var i = t[r].name,
        o = t[r].value
      ;/data\-(markdown|separator|vertical|notes)/gi.test(
        i
      ) || (o ? n.push(i + '="' + o + '"') : n.push(i))
    }
    return n.join(" ")
  }
  function o(e) {
    return (
      ((e = e || {}).separator =
        e.separator || "\r?\n---\r?\n"),
      (e.notesSeparator =
        e.notesSeparator || "notes?:"),
      (e.attributes = e.attributes || ""),
      e
    )
  }
  function a(e, t) {
    t = o(t)
    var n = e.split(
      new RegExp(t.notesSeparator, "mgi")
    )
    return (
      2 === n.length &&
        (e =
          n[0] +
          '<aside class="notes">' +
          mp(n[1].trim()) +
          "</aside>"),
      '<script type="text/template">' +
        (e = e.replace(
          /<\/script>/g,
          "__SCRIPT_END__"
        )) +
        "</script>"
    )
  }
  function l(e, t) {
    t = o(t)
    for (
      var n,
        r,
        u,
        i = new RegExp(
          t.separator +
            (t.verticalSeparator
              ? "|" + t.verticalSeparator
              : ""),
          "mg"
        ),
        l = new RegExp(t.separator),
        s = 0,
        c = !0,
        f = [];
      (n = i.exec(e));

    )
      !(r = l.test(n[0])) && c && f.push([]),
        (u = e.substring(s, n.index)),
        r && c ? f.push(u) : f[f.length - 1].push(u),
        (s = i.lastIndex),
        (c = r)
    ;(c ? f : f[f.length - 1]).push(e.substring(s))
    for (var p = "", h = 0, D = f.length; h < D; h++)
      f[h] instanceof Array
        ? ((p += "<section " + t.attributes + ">"),
          f[h].forEach(function (e) {
            p +=
              "<section data-markdown>" +
              a(e, t) +
              "</section>"
          }),
          (p += "</section>"))
        : (p +=
            "<section " +
            t.attributes +
            " data-markdown>" +
            a(f[h], t) +
            "</section>")
    return p
  }
  function s(e) {
    return new Promise(function (t) {
      var u = []
      ;[].slice
        .call(
          e.querySelectorAll(
            "section[data-markdown]:not([data-markdown-parsed])"
          )
        )
        .forEach(function (e, t) {
          e.getAttribute("data-markdown").length
            ? u.push(
                (function (e) {
                  return new Promise(function (t, n) {
                    var r = new XMLHttpRequest(),
                      u = e.getAttribute(
                        "data-markdown"
                      ),
                      i = e.getAttribute(
                        "data-charset"
                      )
                    null != i &&
                      "" != i &&
                      r.overrideMimeType(
                        "text/html; charset=" + i
                      ),
                      (r.onreadystatechange =
                        function (e, r) {
                          4 === r.readyState &&
                            ((r.status >= 200 &&
                              r.status < 300) ||
                            0 === r.status
                              ? t(r, u)
                              : n(r, u))
                        }.bind(this, e, r)),
                      r.open("GET", u, !0)
                    try {
                      r.send()
                    } catch (e) {
                      console.warn(
                        "Failed to get the Markdown file " +
                          u +
                          ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " +
                          e
                      ),
                        t(r, u)
                    }
                  })
                })(e).then(
                  function (t, n) {
                    e.outerHTML = l(t.responseText, {
                      separator: e.getAttribute(
                        "data-separator"
                      ),
                      verticalSeparator:
                        e.getAttribute(
                          "data-separator-vertical"
                        ),
                      notesSeparator: e.getAttribute(
                        "data-separator-notes"
                      ),
                      attributes: r(e),
                    })
                  },
                  function (t, n) {
                    e.outerHTML =
                      '<section data-state="alert">ERROR: The attempt to fetch ' +
                      n +
                      " failed with HTTP status " +
                      t.status +
                      ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"
                  }
                )
              )
            : (e.outerHTML = l(n(e), {
                separator: e.getAttribute(
                  "data-separator"
                ),
                verticalSeparator: e.getAttribute(
                  "data-separator-vertical"
                ),
                notesSeparator: e.getAttribute(
                  "data-separator-notes"
                ),
                attributes: r(e),
              }))
        }),
        Promise.all(u).then(t)
    })
  }
  function c(e, t, n) {
    var r,
      u,
      i = new RegExp(n, "mg"),
      o = new RegExp(
        '([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',
        "mg"
      ),
      a = e.nodeValue
    if ((r = i.exec(a))) {
      var l = r[1]
      for (
        a =
          a.substring(0, r.index) +
          a.substring(i.lastIndex),
          e.nodeValue = a;
        (u = o.exec(l));

      )
        u[2]
          ? t.setAttribute(u[1], u[2])
          : t.setAttribute(u[3], "")
      return !0
    }
    return !1
  }
  function f(e, t, n, r, u) {
    if (
      null != t &&
      null != t.childNodes &&
      t.childNodes.length > 0
    )
      for (
        var i = t, o = 0;
        o < t.childNodes.length;
        o++
      ) {
        var a = t.childNodes[o]
        if (o > 0)
          for (var l = o - 1; l >= 0; ) {
            var s = t.childNodes[l]
            if (
              "function" == typeof s.setAttribute &&
              "BR" != s.tagName
            ) {
              i = s
              break
            }
            l -= 1
          }
        var p = e
        "section" == a.nodeName && ((p = a), (i = a)),
          ("function" != typeof a.setAttribute &&
            a.nodeType != Node.COMMENT_NODE) ||
            f(p, a, i, r, u)
      }
    t.nodeType == Node.COMMENT_NODE &&
      0 == c(t, n, r) &&
      c(t, e, u)
  }
  function p() {
    var e = t
      .getRevealElement()
      .querySelectorAll(
        "[data-markdown]:not([data-markdown-parsed])"
      )
    return (
      [].slice.call(e).forEach(function (e) {
        e.setAttribute("data-markdown-parsed", !0)
        var t = e.querySelector("aside.notes"),
          r = n(e)
        ;(e.innerHTML = mp(r)),
          f(
            e,
            e,
            null,
            e.getAttribute(
              "data-element-attributes"
            ) ||
              e.parentNode.getAttribute(
                "data-element-attributes"
              ) ||
              "\\.element\\s*?(.+?)$",
            e.getAttribute("data-attributes") ||
              e.parentNode.getAttribute(
                "data-attributes"
              ) ||
              "\\.slide:\\s*?(\\S.+?)$"
          ),
          t && e.appendChild(t)
      }),
      Promise.resolve()
    )
  }
  return {
    id: "markdown",
    init: function (n) {
      var r = (t = n).getConfig().markdown || {},
        o = r.renderer,
        a = r.animateLists,
        l = i(r, ["renderer", "animateLists"])
      return (
        o ||
          ((o = new mp.Renderer()).code = function (
            e,
            t
          ) {
            var n = ""
            return (
              kp.test(t) &&
                ((n = t.match(kp)[1].trim()),
                (n = 'data-line-numbers="'.concat(
                  n,
                  '"'
                )),
                (t = t.replace(kp, "").trim())),
              (e = e.replace(
                /([&<>'"])/g,
                function (e) {
                  return Fp[e]
                }
              )),
              "<pre><code "
                .concat(n, ' class="')
                .concat(t, '">')
                .concat(e, "</code></pre>")
            )
          }),
        !0 === a &&
          (o.listitem = function (e) {
            return '<li class="fragment">'.concat(
              e,
              "</li>"
            )
          }),
        mp.setOptions(
          (function (t) {
            for (
              var n = 1;
              n < arguments.length;
              n++
            ) {
              var r =
                null != arguments[n]
                  ? arguments[n]
                  : {}
              n % 2
                ? e(Object(r), !0).forEach(function (
                    e
                  ) {
                    u(t, e, r[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(
                        r,
                        e
                      )
                    )
                  })
            }
            return t
          })({ renderer: o }, l)
        ),
        s(t.getRevealElement()).then(p)
      )
    },
    processSlides: s,
    convertSlides: p,
    slidify: l,
    marked: mp,
  }
}
