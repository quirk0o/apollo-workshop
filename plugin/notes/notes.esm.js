var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  n = function (e) {
    return e && e.Math == Math && e
  },
  t =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof e && e) ||
    (function () {
      return this
    })() ||
    Function("return this")(),
  r = {},
  u = function (e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  },
  i = !u(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1]
    )
  }),
  a = {},
  o = {}.propertyIsEnumerable,
  l = Object.getOwnPropertyDescriptor,
  s = l && !o.call({ 1: 2 }, 1)
a.f = s
  ? function (e) {
      var n = l(this, e)
      return !!n && n.enumerable
    }
  : o
var c = function (e, n) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: n,
    }
  },
  p = {}.toString,
  d = function (e) {
    return p.call(e).slice(8, -1)
  },
  f = d,
  h = "".split,
  g = u(function () {
    return !Object("z").propertyIsEnumerable(0)
  })
    ? function (e) {
        return "String" == f(e)
          ? h.call(e, "")
          : Object(e)
      }
    : Object,
  D = function (e) {
    if (null == e)
      throw TypeError("Can't call method on " + e)
    return e
  },
  m = g,
  v = D,
  y = function (e) {
    return m(v(e))
  },
  k = function (e) {
    return "object" == typeof e
      ? null !== e
      : "function" == typeof e
  },
  A = k,
  E = function (e, n) {
    if (!A(e)) return e
    var t, r
    if (
      n &&
      "function" == typeof (t = e.toString) &&
      !A((r = t.call(e)))
    )
      return r
    if (
      "function" == typeof (t = e.valueOf) &&
      !A((r = t.call(e)))
    )
      return r
    if (
      !n &&
      "function" == typeof (t = e.toString) &&
      !A((r = t.call(e)))
    )
      return r
    throw TypeError(
      "Can't convert object to primitive value"
    )
  },
  b = D,
  F = function (e) {
    return Object(b(e))
  },
  C = F,
  x = {}.hasOwnProperty,
  w = function (e, n) {
    return x.call(C(e), n)
  },
  S = k,
  B = t.document,
  _ = S(B) && S(B.createElement),
  T = function (e) {
    return _ ? B.createElement(e) : {}
  },
  z = T,
  I =
    !i &&
    !u(function () {
      return (
        7 !=
        Object.defineProperty(z("div"), "a", {
          get: function () {
            return 7
          },
        }).a
      )
    }),
  R = i,
  O = a,
  $ = c,
  L = y,
  P = E,
  j = w,
  M = I,
  N = Object.getOwnPropertyDescriptor
r.f = R
  ? N
  : function (e, n) {
      if (((e = L(e)), (n = P(n, !0)), M))
        try {
          return N(e, n)
        } catch (e) {}
      if (j(e, n)) return $(!O.f.call(e, n), e[n])
    }
var U = {},
  q = k,
  Z = function (e) {
    if (!q(e))
      throw TypeError(String(e) + " is not an object")
    return e
  },
  J = i,
  K = I,
  H = Z,
  W = E,
  Y = Object.defineProperty
U.f = J
  ? Y
  : function (e, n, t) {
      if ((H(e), (n = W(n, !0)), H(t), K))
        try {
          return Y(e, n, t)
        } catch (e) {}
      if ("get" in t || "set" in t)
        throw TypeError("Accessors not supported")
      return "value" in t && (e[n] = t.value), e
    }
var V = U,
  X = c,
  G = i
    ? function (e, n, t) {
        return V.f(e, n, X(1, t))
      }
    : function (e, n, t) {
        return (e[n] = t), e
      },
  Q = { exports: {} },
  ee = t,
  ne = G,
  te = function (e, n) {
    try {
      ne(ee, e, n)
    } catch (t) {
      ee[e] = n
    }
    return n
  },
  re = te,
  ue =
    t["__core-js_shared__"] ||
    re("__core-js_shared__", {}),
  ie = ue,
  ae = Function.toString
"function" != typeof ie.inspectSource &&
  (ie.inspectSource = function (e) {
    return ae.call(e)
  })
var oe = ie.inspectSource,
  le = oe,
  se = t.WeakMap,
  ce =
    "function" == typeof se &&
    /native code/.test(le(se)),
  pe = { exports: {} },
  de = ue
;(pe.exports = function (e, n) {
  return de[e] || (de[e] = void 0 !== n ? n : {})
})("versions", []).push({
  version: "3.12.1",
  mode: "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
})
var fe,
  he,
  ge,
  De = 0,
  me = Math.random(),
  ve = function (e) {
    return (
      "Symbol(" +
      String(void 0 === e ? "" : e) +
      ")_" +
      (++De + me).toString(36)
    )
  },
  ye = pe.exports,
  ke = ve,
  Ae = ye("keys"),
  Ee = function (e) {
    return Ae[e] || (Ae[e] = ke(e))
  },
  be = {},
  Fe = ce,
  Ce = k,
  xe = G,
  we = w,
  Se = ue,
  Be = Ee,
  _e = be,
  Te = t.WeakMap
if (Fe || Se.state) {
  var ze = Se.state || (Se.state = new Te()),
    Ie = ze.get,
    Re = ze.has,
    Oe = ze.set
  ;(fe = function (e, n) {
    if (Re.call(ze, e))
      throw new TypeError("Object already initialized")
    return (n.facade = e), Oe.call(ze, e, n), n
  }),
    (he = function (e) {
      return Ie.call(ze, e) || {}
    }),
    (ge = function (e) {
      return Re.call(ze, e)
    })
} else {
  var $e = Be("state")
  ;(_e[$e] = !0),
    (fe = function (e, n) {
      if (we(e, $e))
        throw new TypeError(
          "Object already initialized"
        )
      return (n.facade = e), xe(e, $e, n), n
    }),
    (he = function (e) {
      return we(e, $e) ? e[$e] : {}
    }),
    (ge = function (e) {
      return we(e, $e)
    })
}
var Le = {
    set: fe,
    get: he,
    has: ge,
    enforce: function (e) {
      return ge(e) ? he(e) : fe(e, {})
    },
    getterFor: function (e) {
      return function (n) {
        var t
        if (!Ce(n) || (t = he(n)).type !== e)
          throw TypeError(
            "Incompatible receiver, " + e + " required"
          )
        return t
      }
    },
  },
  Pe = t,
  je = G,
  Me = w,
  Ne = te,
  Ue = oe,
  qe = Le.get,
  Ze = Le.enforce,
  Je = String(String).split("String")
;(Q.exports = function (e, n, t, r) {
  var u,
    i = !!r && !!r.unsafe,
    a = !!r && !!r.enumerable,
    o = !!r && !!r.noTargetGet
  "function" == typeof t &&
    ("string" != typeof n ||
      Me(t, "name") ||
      je(t, "name", n),
    (u = Ze(t)).source ||
      (u.source = Je.join(
        "string" == typeof n ? n : ""
      ))),
    e !== Pe
      ? (i ? !o && e[n] && (a = !0) : delete e[n],
        a ? (e[n] = t) : je(e, n, t))
      : a
      ? (e[n] = t)
      : Ne(n, t)
})(Function.prototype, "toString", function () {
  return (
    ("function" == typeof this && qe(this).source) ||
    Ue(this)
  )
})
var Ke = t,
  He = t,
  We = function (e) {
    return "function" == typeof e ? e : void 0
  },
  Ye = function (e, n) {
    return arguments.length < 2
      ? We(Ke[e]) || We(He[e])
      : (Ke[e] && Ke[e][n]) || (He[e] && He[e][n])
  },
  Ve = {},
  Xe = Math.ceil,
  Ge = Math.floor,
  Qe = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? Ge : Xe)(e)
  },
  en = Qe,
  nn = Math.min,
  tn = function (e) {
    return e > 0 ? nn(en(e), 9007199254740991) : 0
  },
  rn = Qe,
  un = Math.max,
  an = Math.min,
  on = function (e, n) {
    var t = rn(e)
    return t < 0 ? un(t + n, 0) : an(t, n)
  },
  ln = y,
  sn = tn,
  cn = on,
  pn = function (e) {
    return function (n, t, r) {
      var u,
        i = ln(n),
        a = sn(i.length),
        o = cn(r, a)
      if (e && t != t) {
        for (; a > o; )
          if ((u = i[o++]) != u) return !0
      } else
        for (; a > o; o++)
          if ((e || o in i) && i[o] === t)
            return e || o || 0
      return !e && -1
    }
  },
  dn = { includes: pn(!0), indexOf: pn(!1) },
  fn = w,
  hn = y,
  gn = dn.indexOf,
  Dn = be,
  mn = function (e, n) {
    var t,
      r = hn(e),
      u = 0,
      i = []
    for (t in r) !fn(Dn, t) && fn(r, t) && i.push(t)
    for (; n.length > u; )
      fn(r, (t = n[u++])) && (~gn(i, t) || i.push(t))
    return i
  },
  vn = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  yn = mn,
  kn = vn.concat("length", "prototype")
Ve.f =
  Object.getOwnPropertyNames ||
  function (e) {
    return yn(e, kn)
  }
var An = {}
An.f = Object.getOwnPropertySymbols
var En = Ve,
  bn = An,
  Fn = Z,
  Cn =
    Ye("Reflect", "ownKeys") ||
    function (e) {
      var n = En.f(Fn(e)),
        t = bn.f
      return t ? n.concat(t(e)) : n
    },
  xn = w,
  wn = Cn,
  Sn = r,
  Bn = U,
  _n = u,
  Tn = /#|\.prototype\./,
  zn = function (e, n) {
    var t = Rn[In(e)]
    return (
      t == $n ||
      (t != On &&
        ("function" == typeof n ? _n(n) : !!n))
    )
  },
  In = (zn.normalize = function (e) {
    return String(e).replace(Tn, ".").toLowerCase()
  }),
  Rn = (zn.data = {}),
  On = (zn.NATIVE = "N"),
  $n = (zn.POLYFILL = "P"),
  Ln = zn,
  Pn = t,
  jn = r.f,
  Mn = G,
  Nn = Q.exports,
  Un = te,
  qn = function (e, n) {
    for (
      var t = wn(n), r = Bn.f, u = Sn.f, i = 0;
      i < t.length;
      i++
    ) {
      var a = t[i]
      xn(e, a) || r(e, a, u(n, a))
    }
  },
  Zn = Ln,
  Jn = function (e, n) {
    var t,
      r,
      u,
      i,
      a,
      o = e.target,
      l = e.global,
      s = e.stat
    if (
      (t = l
        ? Pn
        : s
        ? Pn[o] || Un(o, {})
        : (Pn[o] || {}).prototype)
    )
      for (r in n) {
        if (
          ((i = n[r]),
          (u = e.noTargetGet
            ? (a = jn(t, r)) && a.value
            : t[r]),
          !Zn(
            l ? r : o + (s ? "." : "#") + r,
            e.forced
          ) && void 0 !== u)
        ) {
          if (typeof i == typeof u) continue
          qn(i, u)
        }
        ;(e.sham || (u && u.sham)) &&
          Mn(i, "sham", !0),
          Nn(t, r, i, e)
      }
  },
  Kn = Z,
  Hn = function () {
    var e = Kn(this),
      n = ""
    return (
      e.global && (n += "g"),
      e.ignoreCase && (n += "i"),
      e.multiline && (n += "m"),
      e.dotAll && (n += "s"),
      e.unicode && (n += "u"),
      e.sticky && (n += "y"),
      n
    )
  },
  Wn = {},
  Yn = u
function Vn(e, n) {
  return RegExp(e, n)
}
;(Wn.UNSUPPORTED_Y = Yn(function () {
  var e = Vn("a", "y")
  return (e.lastIndex = 2), null != e.exec("abcd")
})),
  (Wn.BROKEN_CARET = Yn(function () {
    var e = Vn("^r", "gy")
    return (e.lastIndex = 2), null != e.exec("str")
  }))
var Xn = Hn,
  Gn = Wn,
  Qn = pe.exports,
  et = RegExp.prototype.exec,
  nt = Qn(
    "native-string-replace",
    String.prototype.replace
  ),
  tt = et,
  rt = (function () {
    var e = /a/,
      n = /b*/g
    return (
      et.call(e, "a"),
      et.call(n, "a"),
      0 !== e.lastIndex || 0 !== n.lastIndex
    )
  })(),
  ut = Gn.UNSUPPORTED_Y || Gn.BROKEN_CARET,
  it = void 0 !== /()??/.exec("")[1]
;(rt || it || ut) &&
  (tt = function (e) {
    var n,
      t,
      r,
      u,
      i = this,
      a = ut && i.sticky,
      o = Xn.call(i),
      l = i.source,
      s = 0,
      c = e
    return (
      a &&
        (-1 ===
          (o = o.replace("y", "")).indexOf("g") &&
          (o += "g"),
        (c = String(e).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline ||
            (i.multiline &&
              "\n" !== e[i.lastIndex - 1])) &&
          ((l = "(?: " + l + ")"), (c = " " + c), s++),
        (t = new RegExp("^(?:" + l + ")", o))),
      it && (t = new RegExp("^" + l + "$(?!\\s)", o)),
      rt && (n = i.lastIndex),
      (r = et.call(a ? t : i, c)),
      a
        ? r
          ? ((r.input = r.input.slice(s)),
            (r[0] = r[0].slice(s)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : rt &&
          r &&
          (i.lastIndex = i.global
            ? r.index + r[0].length
            : n),
      it &&
        r &&
        r.length > 1 &&
        nt.call(r[0], t, function () {
          for (u = 1; u < arguments.length - 2; u++)
            void 0 === arguments[u] && (r[u] = void 0)
        }),
      r
    )
  })
var at = tt
Jn(
  {
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== at,
  },
  { exec: at }
)
var ot,
  lt,
  st = Ye("navigator", "userAgent") || "",
  ct = t.process,
  pt = ct && ct.versions,
  dt = pt && pt.v8
dt
  ? (lt =
      (ot = dt.split("."))[0] < 4 ? 1 : ot[0] + ot[1])
  : st &&
    (!(ot = st.match(/Edge\/(\d+)/)) || ot[1] >= 74) &&
    (ot = st.match(/Chrome\/(\d+)/)) &&
    (lt = ot[1])
var ft = lt && +lt,
  ht = ft,
  gt = u,
  Dt =
    !!Object.getOwnPropertySymbols &&
    !gt(function () {
      return (
        !String(Symbol()) ||
        (!Symbol.sham && ht && ht < 41)
      )
    }),
  mt =
    Dt &&
    !Symbol.sham &&
    "symbol" == typeof Symbol.iterator,
  vt = t,
  yt = pe.exports,
  kt = w,
  At = ve,
  Et = Dt,
  bt = mt,
  Ft = yt("wks"),
  Ct = vt.Symbol,
  xt = bt ? Ct : (Ct && Ct.withoutSetter) || At,
  wt = function (e) {
    return (
      (kt(Ft, e) &&
        (Et || "string" == typeof Ft[e])) ||
        (Et && kt(Ct, e)
          ? (Ft[e] = Ct[e])
          : (Ft[e] = xt("Symbol." + e))),
      Ft[e]
    )
  },
  St = Q.exports,
  Bt = at,
  _t = u,
  Tt = wt,
  zt = G,
  It = Tt("species"),
  Rt = RegExp.prototype,
  Ot = !_t(function () {
    var e = /./
    return (
      (e.exec = function () {
        var e = []
        return (e.groups = { a: "7" }), e
      }),
      "7" !== "".replace(e, "$<a>")
    )
  }),
  $t = "$0" === "a".replace(/./, "$0"),
  Lt = Tt("replace"),
  Pt = !!/./[Lt] && "" === /./[Lt]("a", "$0"),
  jt = !_t(function () {
    var e = /(?:)/,
      n = e.exec
    e.exec = function () {
      return n.apply(this, arguments)
    }
    var t = "ab".split(e)
    return (
      2 !== t.length || "a" !== t[0] || "b" !== t[1]
    )
  }),
  Mt = function (e, n, t, r) {
    var u = Tt(e),
      i = !_t(function () {
        var n = {}
        return (
          (n[u] = function () {
            return 7
          }),
          7 != ""[e](n)
        )
      }),
      a =
        i &&
        !_t(function () {
          var n = !1,
            t = /a/
          return (
            "split" === e &&
              (((t = {}).constructor = {}),
              (t.constructor[It] = function () {
                return t
              }),
              (t.flags = ""),
              (t[u] = /./[u])),
            (t.exec = function () {
              return (n = !0), null
            }),
            t[u](""),
            !n
          )
        })
    if (
      !i ||
      !a ||
      ("replace" === e && (!Ot || !$t || Pt)) ||
      ("split" === e && !jt)
    ) {
      var o = /./[u],
        l = t(
          u,
          ""[e],
          function (e, n, t, r, u) {
            var a = n.exec
            return a === Bt || a === Rt.exec
              ? i && !u
                ? { done: !0, value: o.call(n, t, r) }
                : { done: !0, value: e.call(t, n, r) }
              : { done: !1 }
          },
          {
            REPLACE_KEEPS_$0: $t,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:
              Pt,
          }
        ),
        s = l[0],
        c = l[1]
      St(String.prototype, e, s),
        St(
          Rt,
          u,
          2 == n
            ? function (e, n) {
                return c.call(e, this, n)
              }
            : function (e) {
                return c.call(e, this)
              }
        )
    }
    r && zt(Rt[u], "sham", !0)
  },
  Nt =
    Object.is ||
    function (e, n) {
      return e === n
        ? 0 !== e || 1 / e == 1 / n
        : e != e && n != n
    },
  Ut = d,
  qt = at,
  Zt = function (e, n) {
    var t = e.exec
    if ("function" == typeof t) {
      var r = t.call(e, n)
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        )
      return r
    }
    if ("RegExp" !== Ut(e))
      throw TypeError(
        "RegExp#exec called on incompatible receiver"
      )
    return qt.call(e, n)
  },
  Jt = Z,
  Kt = D,
  Ht = Nt,
  Wt = Zt
Mt("search", 1, function (e, n, t) {
  return [
    function (n) {
      var t = Kt(this),
        r = null == n ? void 0 : n[e]
      return void 0 !== r
        ? r.call(n, t)
        : new RegExp(n)[e](String(t))
    },
    function (e) {
      var r = t(n, e, this)
      if (r.done) return r.value
      var u = Jt(e),
        i = String(this),
        a = u.lastIndex
      Ht(a, 0) || (u.lastIndex = 0)
      var o = Wt(u, i)
      return (
        Ht(u.lastIndex, a) || (u.lastIndex = a),
        null === o ? -1 : o.index
      )
    },
  ]
})
var Yt = Qe,
  Vt = D,
  Xt = function (e) {
    return function (n, t) {
      var r,
        u,
        i = String(Vt(n)),
        a = Yt(t),
        o = i.length
      return a < 0 || a >= o
        ? e
          ? ""
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          r > 56319 ||
          a + 1 === o ||
          (u = i.charCodeAt(a + 1)) < 56320 ||
          u > 57343
        ? e
          ? i.charAt(a)
          : r
        : e
        ? i.slice(a, a + 2)
        : u - 56320 + ((r - 55296) << 10) + 65536
    }
  },
  Gt = { codeAt: Xt(!1), charAt: Xt(!0) }.charAt,
  Qt = function (e, n, t) {
    return n + (t ? Gt(e, n).length : 1)
  },
  er = Z,
  nr = tn,
  tr = D,
  rr = Qt,
  ur = Zt
function ir(e, n) {
  if (!(e instanceof n))
    throw new TypeError(
      "Cannot call a class as a function"
    )
}
function ar(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function or(e, n, t) {
  return n && ar(e.prototype, n), t && ar(e, t), e
}
function lr(e, n) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e
    })(e) ||
    (function (e, n) {
      var t =
        e &&
        (("undefined" != typeof Symbol &&
          e[Symbol.iterator]) ||
          e["@@iterator"])
      if (null == t) return
      var r,
        u,
        i = [],
        a = !0,
        o = !1
      try {
        for (
          t = t.call(e);
          !(a = (r = t.next()).done) &&
          (i.push(r.value), !n || i.length !== n);
          a = !0
        );
      } catch (e) {
        ;(o = !0), (u = e)
      } finally {
        try {
          a || null == t.return || t.return()
        } finally {
          if (o) throw u
        }
      }
      return i
    })(e, n) ||
    sr(e, n) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    })()
  )
}
function sr(e, n) {
  if (e) {
    if ("string" == typeof e) return cr(e, n)
    var t = Object.prototype.toString
      .call(e)
      .slice(8, -1)
    return (
      "Object" === t &&
        e.constructor &&
        (t = e.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(e)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
            t
          )
        ? cr(e, n)
        : void 0
    )
  }
}
function cr(e, n) {
  ;(null == n || n > e.length) && (n = e.length)
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t]
  return r
}
function pr(e, n) {
  var t =
    ("undefined" != typeof Symbol &&
      e[Symbol.iterator]) ||
    e["@@iterator"]
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = sr(e)) ||
      (n && e && "number" == typeof e.length)
    ) {
      t && (e = t)
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
    a = !0,
    o = !1
  return {
    s: function () {
      t = t.call(e)
    },
    n: function () {
      var e = t.next()
      return (a = e.done), e
    },
    e: function (e) {
      ;(o = !0), (i = e)
    },
    f: function () {
      try {
        a || null == t.return || t.return()
      } finally {
        if (o) throw i
      }
    },
  }
}
Mt("match", 1, function (e, n, t) {
  return [
    function (n) {
      var t = tr(this),
        r = null == n ? void 0 : n[e]
      return void 0 !== r
        ? r.call(n, t)
        : new RegExp(n)[e](String(t))
    },
    function (e) {
      var r = t(n, e, this)
      if (r.done) return r.value
      var u = er(e),
        i = String(this)
      if (!u.global) return ur(u, i)
      var a = u.unicode
      u.lastIndex = 0
      for (
        var o, l = [], s = 0;
        null !== (o = ur(u, i));

      ) {
        var c = String(o[0])
        ;(l[s] = c),
          "" === c &&
            (u.lastIndex = rr(i, nr(u.lastIndex), a)),
          s++
      }
      return 0 === s ? null : l
    },
  ]
})
var dr = {}
dr[wt("toStringTag")] = "z"
var fr = "[object z]" === String(dr),
  hr = fr,
  gr = d,
  Dr = wt("toStringTag"),
  mr =
    "Arguments" ==
    gr(
      (function () {
        return arguments
      })()
    ),
  vr = hr
    ? gr
    : function (e) {
        var n, t, r
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (t = (function (e, n) {
              try {
                return e[n]
              } catch (e) {}
            })((n = Object(e)), Dr))
          ? t
          : mr
          ? gr(n)
          : "Object" == (r = gr(n)) &&
            "function" == typeof n.callee
          ? "Arguments"
          : r
      },
  yr = fr
    ? {}.toString
    : function () {
        return "[object " + vr(this) + "]"
      },
  kr = fr,
  Ar = Q.exports,
  Er = yr
kr ||
  Ar(Object.prototype, "toString", Er, { unsafe: !0 })
var br = F,
  Fr = Math.floor,
  Cr = "".replace,
  xr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  wr = /\$([$&'`]|\d{1,2})/g,
  Sr = Mt,
  Br = Z,
  _r = tn,
  Tr = Qe,
  zr = D,
  Ir = Qt,
  Rr = function (e, n, t, r, u, i) {
    var a = t + e.length,
      o = r.length,
      l = wr
    return (
      void 0 !== u && ((u = br(u)), (l = xr)),
      Cr.call(i, l, function (i, l) {
        var s
        switch (l.charAt(0)) {
          case "$":
            return "$"
          case "&":
            return e
          case "`":
            return n.slice(0, t)
          case "'":
            return n.slice(a)
          case "<":
            s = u[l.slice(1, -1)]
            break
          default:
            var c = +l
            if (0 === c) return i
            if (c > o) {
              var p = Fr(c / 10)
              return 0 === p
                ? i
                : p <= o
                ? void 0 === r[p - 1]
                  ? l.charAt(1)
                  : r[p - 1] + l.charAt(1)
                : i
            }
            s = r[c - 1]
        }
        return void 0 === s ? "" : s
      })
    )
  },
  Or = Zt,
  $r = Math.max,
  Lr = Math.min
Sr("replace", 2, function (e, n, t, r) {
  var u =
      r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    a = u ? "$" : "$0"
  return [
    function (t, r) {
      var u = zr(this),
        i = null == t ? void 0 : t[e]
      return void 0 !== i
        ? i.call(t, u, r)
        : n.call(String(u), t, r)
    },
    function (e, r) {
      if (
        (!u && i) ||
        ("string" == typeof r && -1 === r.indexOf(a))
      ) {
        var o = t(n, e, this, r)
        if (o.done) return o.value
      }
      var l = Br(e),
        s = String(this),
        c = "function" == typeof r
      c || (r = String(r))
      var p = l.global
      if (p) {
        var d = l.unicode
        l.lastIndex = 0
      }
      for (var f = []; ; ) {
        var h = Or(l, s)
        if (null === h) break
        if ((f.push(h), !p)) break
        "" === String(h[0]) &&
          (l.lastIndex = Ir(s, _r(l.lastIndex), d))
      }
      for (
        var g, D = "", m = 0, v = 0;
        v < f.length;
        v++
      ) {
        h = f[v]
        for (
          var y = String(h[0]),
            k = $r(Lr(Tr(h.index), s.length), 0),
            A = [],
            E = 1;
          E < h.length;
          E++
        )
          A.push(void 0 === (g = h[E]) ? g : String(g))
        var b = h.groups
        if (c) {
          var F = [y].concat(A, k, s)
          void 0 !== b && F.push(b)
          var C = String(r.apply(void 0, F))
        } else C = Rr(y, s, k, A, b, r)
        k >= m &&
          ((D += s.slice(m, k) + C),
          (m = k + y.length))
      }
      return D + s.slice(m)
    },
  ]
})
var Pr = Q.exports,
  jr = Z,
  Mr = u,
  Nr = Hn,
  Ur = RegExp.prototype,
  qr = Ur.toString,
  Zr = Mr(function () {
    return (
      "/a/b" != qr.call({ source: "a", flags: "b" })
    )
  }),
  Jr = "toString" != qr.name
;(Zr || Jr) &&
  Pr(
    RegExp.prototype,
    "toString",
    function () {
      var e = jr(this),
        n = String(e.source),
        t = e.flags
      return (
        "/" +
        n +
        "/" +
        String(
          void 0 === t &&
            e instanceof RegExp &&
            !("flags" in Ur)
            ? Nr.call(e)
            : t
        )
      )
    },
    { unsafe: !0 }
  )
var Kr = mn,
  Hr = vn,
  Wr =
    Object.keys ||
    function (e) {
      return Kr(e, Hr)
    },
  Yr = F,
  Vr = Wr
Jn(
  {
    target: "Object",
    stat: !0,
    forced: u(function () {
      Vr(1)
    }),
  },
  {
    keys: function (e) {
      return Vr(Yr(e))
    },
  }
)
var Xr,
  Gr = U,
  Qr = Z,
  eu = Wr,
  nu = i
    ? Object.defineProperties
    : function (e, n) {
        Qr(e)
        for (
          var t, r = eu(n), u = r.length, i = 0;
          u > i;

        )
          Gr.f(e, (t = r[i++]), n[t])
        return e
      },
  tu = Ye("document", "documentElement"),
  ru = Z,
  uu = nu,
  iu = vn,
  au = be,
  ou = tu,
  lu = T,
  su = Ee("IE_PROTO"),
  cu = function () {},
  pu = function (e) {
    return "<script>" + e + "</script>"
  },
  du = function () {
    try {
      Xr =
        document.domain &&
        new ActiveXObject("htmlfile")
    } catch (e) {}
    var e, n
    du = Xr
      ? (function (e) {
          e.write(pu("")), e.close()
          var n = e.parentWindow.Object
          return (e = null), n
        })(Xr)
      : (((n = lu("iframe")).style.display = "none"),
        ou.appendChild(n),
        (n.src = String("javascript:")),
        (e = n.contentWindow.document).open(),
        e.write(pu("document.F=Object")),
        e.close(),
        e.F)
    for (var t = iu.length; t--; )
      delete du.prototype[iu[t]]
    return du()
  }
au[su] = !0
var fu =
    Object.create ||
    function (e, n) {
      var t
      return (
        null !== e
          ? ((cu.prototype = ru(e)),
            (t = new cu()),
            (cu.prototype = null),
            (t[su] = e))
          : (t = du()),
        void 0 === n ? t : uu(t, n)
      )
    },
  hu = U,
  gu = wt("unscopables"),
  Du = Array.prototype
null == Du[gu] &&
  hu.f(Du, gu, { configurable: !0, value: fu(null) })
var mu = dn.includes,
  vu = function (e) {
    Du[gu][e] = !0
  }
Jn(
  { target: "Array", proto: !0 },
  {
    includes: function (e) {
      return mu(
        this,
        e,
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
),
  vu("includes")
var yu = k,
  ku = d,
  Au = wt("match"),
  Eu = function (e) {
    var n
    return (
      yu(e) &&
      (void 0 !== (n = e[Au])
        ? !!n
        : "RegExp" == ku(e))
    )
  },
  bu = Eu,
  Fu = wt("match"),
  Cu = function (e) {
    if (bu(e))
      throw TypeError(
        "The method doesn't accept regular expressions"
      )
    return e
  },
  xu = D
Jn(
  {
    target: "String",
    proto: !0,
    forced: !(function (e) {
      var n = /./
      try {
        "/./"[e](n)
      } catch (t) {
        try {
          return (n[Fu] = !1), "/./"[e](n)
        } catch (e) {}
      }
      return !1
    })("includes"),
  },
  {
    includes: function (e) {
      return !!~String(xu(this)).indexOf(
        Cu(e),
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
)
var wu = d,
  Su =
    Array.isArray ||
    function (e) {
      return "Array" == wu(e)
    },
  Bu = E,
  _u = U,
  Tu = c,
  zu = function (e, n, t) {
    var r = Bu(n)
    r in e ? _u.f(e, r, Tu(0, t)) : (e[r] = t)
  },
  Iu = u,
  Ru = ft,
  Ou = wt("species"),
  $u = function (e) {
    return (
      Ru >= 51 ||
      !Iu(function () {
        var n = []
        return (
          ((n.constructor = {})[Ou] = function () {
            return { foo: 1 }
          }),
          1 !== n[e](Boolean).foo
        )
      })
    )
  },
  Lu = Jn,
  Pu = k,
  ju = Su,
  Mu = on,
  Nu = tn,
  Uu = y,
  qu = zu,
  Zu = wt,
  Ju = $u("slice"),
  Ku = Zu("species"),
  Hu = [].slice,
  Wu = Math.max
Lu(
  { target: "Array", proto: !0, forced: !Ju },
  {
    slice: function (e, n) {
      var t,
        r,
        u,
        i = Uu(this),
        a = Nu(i.length),
        o = Mu(e, a),
        l = Mu(void 0 === n ? a : n, a)
      if (
        ju(i) &&
        ("function" != typeof (t = i.constructor) ||
        (t !== Array && !ju(t.prototype))
          ? Pu(t) &&
            null === (t = t[Ku]) &&
            (t = void 0)
          : (t = void 0),
        t === Array || void 0 === t)
      )
        return Hu.call(i, o, l)
      for (
        r = new (void 0 === t ? Array : t)(
          Wu(l - o, 0)
        ),
          u = 0;
        o < l;
        o++, u++
      )
        o in i && qu(r, u, i[o])
      return (r.length = u), r
    },
  }
)
var Yu = D,
  Vu = /"/g,
  Xu = u,
  Gu = function (e, n, t, r) {
    var u = String(Yu(e)),
      i = "<" + n
    return (
      "" !== t &&
        (i +=
          " " +
          t +
          '="' +
          String(r).replace(Vu, "&quot;") +
          '"'),
      i + ">" + u + "</" + n + ">"
    )
  }
Jn(
  {
    target: "String",
    proto: !0,
    forced: (function (e) {
      return Xu(function () {
        var n = ""[e]('"')
        return (
          n !== n.toLowerCase() ||
          n.split('"').length > 3
        )
      })
    })("link"),
  },
  {
    link: function (e) {
      return Gu(this, "a", "href", e)
    },
  }
)
var Qu = u,
  ei = Jn,
  ni = y,
  ti = [].join,
  ri = g != Object,
  ui = (function (e, n) {
    var t = [][e]
    return (
      !!t &&
      Qu(function () {
        t.call(
          null,
          n ||
            function () {
              throw 1
            },
          1
        )
      })
    )
  })("join", ",")
ei(
  { target: "Array", proto: !0, forced: ri || !ui },
  {
    join: function (e) {
      return ti.call(ni(this), void 0 === e ? "," : e)
    },
  }
)
var ii = function (e) {
    if ("function" != typeof e)
      throw TypeError(String(e) + " is not a function")
    return e
  },
  ai = ii,
  oi = k,
  li = Su,
  si = wt("species"),
  ci = function (e, n) {
    var t
    return (
      li(e) &&
        ("function" != typeof (t = e.constructor) ||
        (t !== Array && !li(t.prototype))
          ? oi(t) &&
            null === (t = t[si]) &&
            (t = void 0)
          : (t = void 0)),
      new (void 0 === t ? Array : t)(0 === n ? 0 : n)
    )
  },
  pi = function (e, n, t) {
    if ((ai(e), void 0 === n)) return e
    switch (t) {
      case 0:
        return function () {
          return e.call(n)
        }
      case 1:
        return function (t) {
          return e.call(n, t)
        }
      case 2:
        return function (t, r) {
          return e.call(n, t, r)
        }
      case 3:
        return function (t, r, u) {
          return e.call(n, t, r, u)
        }
    }
    return function () {
      return e.apply(n, arguments)
    }
  },
  di = g,
  fi = F,
  hi = tn,
  gi = ci,
  Di = [].push,
  mi = function (e) {
    var n = 1 == e,
      t = 2 == e,
      r = 3 == e,
      u = 4 == e,
      i = 6 == e,
      a = 7 == e,
      o = 5 == e || i
    return function (l, s, c, p) {
      for (
        var d,
          f,
          h = fi(l),
          g = di(h),
          D = pi(s, c, 3),
          m = hi(g.length),
          v = 0,
          y = p || gi,
          k = n ? y(l, m) : t || a ? y(l, 0) : void 0;
        m > v;
        v++
      )
        if (
          (o || v in g) &&
          ((f = D((d = g[v]), v, h)), e)
        )
          if (n) k[v] = f
          else if (f)
            switch (e) {
              case 3:
                return !0
              case 5:
                return d
              case 6:
                return v
              case 2:
                Di.call(k, d)
            }
          else
            switch (e) {
              case 4:
                return !1
              case 7:
                Di.call(k, d)
            }
      return i ? -1 : r || u ? u : k
    }
  },
  vi = {
    forEach: mi(0),
    map: mi(1),
    filter: mi(2),
    some: mi(3),
    every: mi(4),
    find: mi(5),
    findIndex: mi(6),
    filterOut: mi(7),
  }.map
Jn(
  { target: "Array", proto: !0, forced: !$u("map") },
  {
    map: function (e) {
      return vi(
        this,
        e,
        arguments.length > 1 ? arguments[1] : void 0
      )
    },
  }
)
var yi = Z,
  ki = ii,
  Ai = wt("species"),
  Ei = Mt,
  bi = Eu,
  Fi = Z,
  Ci = D,
  xi = function (e, n) {
    var t,
      r = yi(e).constructor
    return void 0 === r || null == (t = yi(r)[Ai])
      ? n
      : ki(t)
  },
  wi = Qt,
  Si = tn,
  Bi = Zt,
  _i = at,
  Ti = Wn.UNSUPPORTED_Y,
  zi = [].push,
  Ii = Math.min
Ei(
  "split",
  2,
  function (e, n, t) {
    var r
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (e, t) {
              var r = String(Ci(this)),
                u = void 0 === t ? 4294967295 : t >>> 0
              if (0 === u) return []
              if (void 0 === e) return [r]
              if (!bi(e)) return n.call(r, e, u)
              for (
                var i,
                  a,
                  o,
                  l = [],
                  s =
                    (e.ignoreCase ? "i" : "") +
                    (e.multiline ? "m" : "") +
                    (e.unicode ? "u" : "") +
                    (e.sticky ? "y" : ""),
                  c = 0,
                  p = new RegExp(e.source, s + "g");
                (i = _i.call(p, r)) &&
                !(
                  (a = p.lastIndex) > c &&
                  (l.push(r.slice(c, i.index)),
                  i.length > 1 &&
                    i.index < r.length &&
                    zi.apply(l, i.slice(1)),
                  (o = i[0].length),
                  (c = a),
                  l.length >= u)
                );

              )
                p.lastIndex === i.index &&
                  p.lastIndex++
              return (
                c === r.length
                  ? (!o && p.test("")) || l.push("")
                  : l.push(r.slice(c)),
                l.length > u ? l.slice(0, u) : l
              )
            }
          : "0".split(void 0, 0).length
          ? function (e, t) {
              return void 0 === e && 0 === t
                ? []
                : n.call(this, e, t)
            }
          : n),
      [
        function (n, t) {
          var u = Ci(this),
            i = null == n ? void 0 : n[e]
          return void 0 !== i
            ? i.call(n, u, t)
            : r.call(String(u), n, t)
        },
        function (e, u) {
          var i = t(r, e, this, u, r !== n)
          if (i.done) return i.value
          var a = Fi(e),
            o = String(this),
            l = xi(a, RegExp),
            s = a.unicode,
            c =
              (a.ignoreCase ? "i" : "") +
              (a.multiline ? "m" : "") +
              (a.unicode ? "u" : "") +
              (Ti ? "g" : "y"),
            p = new l(
              Ti ? "^(?:" + a.source + ")" : a,
              c
            ),
            d = void 0 === u ? 4294967295 : u >>> 0
          if (0 === d) return []
          if (0 === o.length)
            return null === Bi(p, o) ? [o] : []
          for (
            var f = 0, h = 0, g = [];
            h < o.length;

          ) {
            p.lastIndex = Ti ? 0 : h
            var D,
              m = Bi(p, Ti ? o.slice(h) : o)
            if (
              null === m ||
              (D = Ii(
                Si(p.lastIndex + (Ti ? h : 0)),
                o.length
              )) === f
            )
              h = wi(o, h, s)
            else {
              if (
                (g.push(o.slice(f, h)), g.length === d)
              )
                return g
              for (var v = 1; v <= m.length - 1; v++)
                if ((g.push(m[v]), g.length === d))
                  return g
              h = f = D
            }
          }
          return g.push(o.slice(f)), g
        },
      ]
    )
  },
  Ti
)
var Ri = D,
  Oi =
    "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
  $i = RegExp("^" + Oi + Oi + "*"),
  Li = RegExp(Oi + Oi + "*$"),
  Pi = function (e) {
    return function (n) {
      var t = String(Ri(n))
      return (
        1 & e && (t = t.replace($i, "")),
        2 & e && (t = t.replace(Li, "")),
        t
      )
    }
  },
  ji = { start: Pi(1), end: Pi(2), trim: Pi(3) },
  Mi = u,
  Ni =
    "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ui = ji.trim
Jn(
  {
    target: "String",
    proto: !0,
    forced: (function (e) {
      return Mi(function () {
        return (
          !!Ni[e]() ||
          "​᠎" != "​᠎"[e]() ||
          Ni[e].name !== e
        )
      })
    })("trim"),
  },
  {
    trim: function () {
      return Ui(this)
    },
  }
)
var qi = k,
  Zi = Z,
  Ji = function (e) {
    if (!qi(e) && null !== e)
      throw TypeError(
        "Can't set " + String(e) + " as a prototype"
      )
    return e
  },
  Ki =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var e,
            n = !1,
            t = {}
          try {
            ;(e = Object.getOwnPropertyDescriptor(
              Object.prototype,
              "__proto__"
            ).set).call(t, []),
              (n = t instanceof Array)
          } catch (e) {}
          return function (t, r) {
            return (
              Zi(t),
              Ji(r),
              n ? e.call(t, r) : (t.__proto__ = r),
              t
            )
          }
        })()
      : void 0),
  Hi = k,
  Wi = Ki,
  Yi = Ye,
  Vi = U,
  Xi = i,
  Gi = wt("species"),
  Qi = i,
  ea = t,
  na = Ln,
  ta = function (e, n, t) {
    var r, u
    return (
      Wi &&
        "function" == typeof (r = n.constructor) &&
        r !== t &&
        Hi((u = r.prototype)) &&
        u !== t.prototype &&
        Wi(e, u),
      e
    )
  },
  ra = U.f,
  ua = Ve.f,
  ia = Eu,
  aa = Hn,
  oa = Wn,
  la = Q.exports,
  sa = u,
  ca = Le.enforce,
  pa = function (e) {
    var n = Yi(e),
      t = Vi.f
    Xi &&
      n &&
      !n[Gi] &&
      t(n, Gi, {
        configurable: !0,
        get: function () {
          return this
        },
      })
  },
  da = wt("match"),
  fa = ea.RegExp,
  ha = fa.prototype,
  ga = /a/g,
  Da = /a/g,
  ma = new fa(ga) !== ga,
  va = oa.UNSUPPORTED_Y
if (
  Qi &&
  na(
    "RegExp",
    !ma ||
      va ||
      sa(function () {
        return (
          (Da[da] = !1),
          fa(ga) != ga ||
            fa(Da) == Da ||
            "/a/i" != fa(ga, "i")
        )
      })
  )
) {
  for (
    var ya = function (e, n) {
        var t,
          r = this instanceof ya,
          u = ia(e),
          i = void 0 === n
        if (!r && u && e.constructor === ya && i)
          return e
        ma
          ? u && !i && (e = e.source)
          : e instanceof ya &&
            (i && (n = aa.call(e)), (e = e.source)),
          va &&
            (t = !!n && n.indexOf("y") > -1) &&
            (n = n.replace(/y/g, ""))
        var a = ta(
          ma ? new fa(e, n) : fa(e, n),
          r ? this : ha,
          ya
        )
        va && t && (ca(a).sticky = !0)
        return a
      },
      ka = function (e) {
        ;(e in ya) ||
          ra(ya, e, {
            configurable: !0,
            get: function () {
              return fa[e]
            },
            set: function (n) {
              fa[e] = n
            },
          })
      },
      Aa = ua(fa),
      Ea = 0;
    Aa.length > Ea;

  )
    ka(Aa[Ea++])
  ;(ha.constructor = ya),
    (ya.prototype = ha),
    la(ea, "RegExp", ya)
}
pa("RegExp")
var ba = Jn,
  Fa = on,
  Ca = Qe,
  xa = tn,
  wa = F,
  Sa = ci,
  Ba = zu,
  _a = $u("splice"),
  Ta = Math.max,
  za = Math.min
ba(
  { target: "Array", proto: !0, forced: !_a },
  {
    splice: function (e, n) {
      var t,
        r,
        u,
        i,
        a,
        o,
        l = wa(this),
        s = xa(l.length),
        c = Fa(e, s),
        p = arguments.length
      if (
        (0 === p
          ? (t = r = 0)
          : 1 === p
          ? ((t = 0), (r = s - c))
          : ((t = p - 2),
            (r = za(Ta(Ca(n), 0), s - c))),
        s + t - r > 9007199254740991)
      )
        throw TypeError(
          "Maximum allowed length exceeded"
        )
      for (u = Sa(l, r), i = 0; i < r; i++)
        (a = c + i) in l && Ba(u, i, l[a])
      if (((u.length = r), t < r)) {
        for (i = c; i < s - r; i++)
          (o = i + t),
            (a = i + r) in l
              ? (l[o] = l[a])
              : delete l[o]
        for (i = s; i > s - r + t; i--) delete l[i - 1]
      } else if (t > r)
        for (i = s - r; i > c; i--)
          (o = i + t - 1),
            (a = i + r - 1) in l
              ? (l[o] = l[a])
              : delete l[o]
      for (i = 0; i < t; i++)
        l[i + c] = arguments[i + 2]
      return (l.length = s - r + t), u
    },
  }
)
var Ia = { exports: {} }
function Ra() {
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
Ia.exports = {
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
  getDefaults: Ra,
  changeDefaults: function (e) {
    Ia.exports.defaults = e
  },
}
var Oa = /[&<>"']/,
  $a = /[&<>"']/g,
  La = /[<>"']|&(?!#?\w+;)/,
  Pa = /[<>"']|&(?!#?\w+;)/g,
  ja = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  Ma = function (e) {
    return ja[e]
  }
var Na = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function Ua(e) {
  return e.replace(Na, function (e, n) {
    return "colon" === (n = n.toLowerCase())
      ? ":"
      : "#" === n.charAt(0)
      ? "x" === n.charAt(1)
        ? String.fromCharCode(
            parseInt(n.substring(2), 16)
          )
        : String.fromCharCode(+n.substring(1))
      : ""
  })
}
var qa = /(^|[^\[])\^/g
var Za = /[^\w:]/g,
  Ja = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
var Ka = {},
  Ha = /^[^:]+:\/*[^/]*$/,
  Wa = /^([^:]+:)[\s\S]*$/,
  Ya = /^([^:]+:\/*[^/]*)[\s\S]*$/
function Va(e, n) {
  Ka[" " + e] ||
    (Ha.test(e)
      ? (Ka[" " + e] = e + "/")
      : (Ka[" " + e] = Xa(e, "/", !0)))
  var t = -1 === (e = Ka[" " + e]).indexOf(":")
  return "//" === n.substring(0, 2)
    ? t
      ? n
      : e.replace(Wa, "$1") + n
    : "/" === n.charAt(0)
    ? t
      ? n
      : e.replace(Ya, "$1") + n
    : e + n
}
function Xa(e, n, t) {
  var r = e.length
  if (0 === r) return ""
  for (var u = 0; u < r; ) {
    var i = e.charAt(r - u - 1)
    if (i !== n || t) {
      if (i === n || !t) break
      u++
    } else u++
  }
  return e.substr(0, r - u)
}
var Ga = function (e, n) {
    if (n) {
      if (Oa.test(e)) return e.replace($a, Ma)
    } else if (La.test(e)) return e.replace(Pa, Ma)
    return e
  },
  Qa = Ua,
  eo = function (e, n) {
    ;(e = e.source || e), (n = n || "")
    var t = {
      replace: function (n, r) {
        return (
          (r = (r = r.source || r).replace(qa, "$1")),
          (e = e.replace(n, r)),
          t
        )
      },
      getRegex: function () {
        return new RegExp(e, n)
      },
    }
    return t
  },
  no = function (e, n, t) {
    if (e) {
      var r
      try {
        r = decodeURIComponent(Ua(t))
          .replace(Za, "")
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
    n && !Ja.test(t) && (t = Va(n, t))
    try {
      t = encodeURI(t).replace(/%25/g, "%")
    } catch (e) {
      return null
    }
    return t
  },
  to = { exec: function () {} },
  ro = function (e) {
    for (var n, t, r = 1; r < arguments.length; r++)
      for (t in (n = arguments[r]))
        Object.prototype.hasOwnProperty.call(n, t) &&
          (e[t] = n[t])
    return e
  },
  uo = function (e, n) {
    var t = e
        .replace(/\|/g, function (e, n, t) {
          for (
            var r = !1, u = n;
            --u >= 0 && "\\" === t[u];

          )
            r = !r
          return r ? "|" : " |"
        })
        .split(/ \|/),
      r = 0
    if (t.length > n) t.splice(n)
    else for (; t.length < n; ) t.push("")
    for (; r < t.length; r++)
      t[r] = t[r].trim().replace(/\\\|/g, "|")
    return t
  },
  io = Xa,
  ao = function (e, n) {
    if (-1 === e.indexOf(n[1])) return -1
    for (var t = e.length, r = 0, u = 0; u < t; u++)
      if ("\\" === e[u]) u++
      else if (e[u] === n[0]) r++
      else if (e[u] === n[1] && --r < 0) return u
    return -1
  },
  oo = function (e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      )
  },
  lo = function (e, n) {
    if (n < 1) return ""
    for (var t = ""; n > 1; )
      1 & n && (t += e), (n >>= 1), (e += e)
    return t + e
  },
  so = Ia.exports.defaults,
  co = io,
  po = uo,
  fo = Ga,
  ho = ao
function go(e, n, t) {
  var r = n.href,
    u = n.title ? fo(n.title) : null,
    i = e[1].replace(/\\([\[\]])/g, "$1")
  return "!" !== e[0].charAt(0)
    ? {
        type: "link",
        raw: t,
        href: r,
        title: u,
        text: i,
      }
    : {
        type: "image",
        raw: t,
        href: r,
        title: u,
        text: fo(i),
      }
}
var Do = (function () {
    function e(n) {
      ir(this, e), (this.options = n || so)
    }
    return (
      or(e, [
        {
          key: "space",
          value: function (e) {
            var n = this.rules.block.newline.exec(e)
            if (n)
              return n[0].length > 1
                ? { type: "space", raw: n[0] }
                : { raw: "\n" }
          },
        },
        {
          key: "code",
          value: function (e) {
            var n = this.rules.block.code.exec(e)
            if (n) {
              var t = n[0].replace(/^ {1,4}/gm, "")
              return {
                type: "code",
                raw: n[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic
                  ? t
                  : co(t, "\n"),
              }
            }
          },
        },
        {
          key: "fences",
          value: function (e) {
            var n = this.rules.block.fences.exec(e)
            if (n) {
              var t = n[0],
                r = (function (e, n) {
                  var t = e.match(/^(\s+)(?:```)/)
                  if (null === t) return n
                  var r = t[1]
                  return n
                    .split("\n")
                    .map(function (e) {
                      var n = e.match(/^\s+/)
                      return null === n
                        ? e
                        : lr(n, 1)[0].length >=
                          r.length
                        ? e.slice(r.length)
                        : e
                    })
                    .join("\n")
                })(t, n[3] || "")
              return {
                type: "code",
                raw: t,
                lang: n[2] ? n[2].trim() : n[2],
                text: r,
              }
            }
          },
        },
        {
          key: "heading",
          value: function (e) {
            var n = this.rules.block.heading.exec(e)
            if (n) {
              var t = n[2].trim()
              if (/#$/.test(t)) {
                var r = co(t, "#")
                this.options.pedantic
                  ? (t = r.trim())
                  : (r && !/ $/.test(r)) ||
                    (t = r.trim())
              }
              return {
                type: "heading",
                raw: n[0],
                depth: n[1].length,
                text: t,
              }
            }
          },
        },
        {
          key: "nptable",
          value: function (e) {
            var n = this.rules.block.nptable.exec(e)
            if (n) {
              var t = {
                type: "table",
                header: po(
                  n[1].replace(/^ *| *\| *$/g, "")
                ),
                align: n[2]
                  .replace(/^ *|\| *$/g, "")
                  .split(/ *\| */),
                cells: n[3]
                  ? n[3].replace(/\n$/, "").split("\n")
                  : [],
                raw: n[0],
              }
              if (t.header.length === t.align.length) {
                var r,
                  u = t.align.length
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(t.align[r])
                    ? (t.align[r] = "right")
                    : /^ *:-+: *$/.test(t.align[r])
                    ? (t.align[r] = "center")
                    : /^ *:-+ *$/.test(t.align[r])
                    ? (t.align[r] = "left")
                    : (t.align[r] = null)
                for (
                  u = t.cells.length, r = 0;
                  r < u;
                  r++
                )
                  t.cells[r] = po(
                    t.cells[r],
                    t.header.length
                  )
                return t
              }
            }
          },
        },
        {
          key: "hr",
          value: function (e) {
            var n = this.rules.block.hr.exec(e)
            if (n) return { type: "hr", raw: n[0] }
          },
        },
        {
          key: "blockquote",
          value: function (e) {
            var n = this.rules.block.blockquote.exec(e)
            if (n) {
              var t = n[0].replace(/^ *> ?/gm, "")
              return {
                type: "blockquote",
                raw: n[0],
                text: t,
              }
            }
          },
        },
        {
          key: "list",
          value: function (e) {
            var n = this.rules.block.list.exec(e)
            if (n) {
              var t,
                r,
                u,
                i,
                a,
                o,
                l,
                s,
                c,
                p = n[0],
                d = n[2],
                f = d.length > 1,
                h = {
                  type: "list",
                  raw: p,
                  ordered: f,
                  start: f ? +d.slice(0, -1) : "",
                  loose: !1,
                  items: [],
                },
                g = n[0].match(this.rules.block.item),
                D = !1,
                m = g.length
              u = this.rules.block.listItemStart.exec(
                g[0]
              )
              for (var v = 0; v < m; v++) {
                if (
                  ((p = t = g[v]),
                  this.options.pedantic ||
                    ((c = t.match(
                      new RegExp(
                        "\\n\\s*\\n {0," +
                          (u[0].length - 1) +
                          "}\\S"
                      )
                    )) &&
                      ((a =
                        t.length -
                        c.index +
                        g.slice(v + 1).join("\n")
                          .length),
                      (h.raw = h.raw.substring(
                        0,
                        h.raw.length - a
                      )),
                      (p = t =
                        t.substring(0, c.index)),
                      (m = v + 1))),
                  v !== m - 1)
                ) {
                  if (
                    ((i =
                      this.rules.block.listItemStart.exec(
                        g[v + 1]
                      )),
                    this.options.pedantic
                      ? i[1].length > u[1].length
                      : i[1].length >= u[0].length ||
                        i[1].length > 3)
                  ) {
                    g.splice(
                      v,
                      2,
                      g[v] +
                        (!this.options.pedantic &&
                        i[1].length < u[0].length &&
                        !g[v].match(/\n$/)
                          ? ""
                          : "\n") +
                        g[v + 1]
                    ),
                      v--,
                      m--
                    continue
                  }
                  ;(!this.options.pedantic ||
                  this.options.smartLists
                    ? i[2][i[2].length - 1] !==
                      d[d.length - 1]
                    : f === (1 === i[2].length)) &&
                    ((a = g
                      .slice(v + 1)
                      .join("\n").length),
                    (h.raw = h.raw.substring(
                      0,
                      h.raw.length - a
                    )),
                    (v = m - 1)),
                    (u = i)
                }
                ;(r = t.length),
                  ~(t = t.replace(
                    /^ *([*+-]|\d+[.)]) ?/,
                    ""
                  )).indexOf("\n ") &&
                    ((r -= t.length),
                    (t = this.options.pedantic
                      ? t.replace(/^ {1,4}/gm, "")
                      : t.replace(
                          new RegExp(
                            "^ {1," + r + "}",
                            "gm"
                          ),
                          ""
                        ))),
                  (t = co(t, "\n")),
                  v !== m - 1 && (p += "\n"),
                  (o = D || /\n\n(?!\s*$)/.test(p)),
                  v !== m - 1 &&
                    ((D = "\n\n" === p.slice(-2)),
                    o || (o = D)),
                  o && (h.loose = !0),
                  this.options.gfm &&
                    ((s = void 0),
                    (l = /^\[[ xX]\] /.test(t)) &&
                      ((s = " " !== t[1]),
                      (t = t.replace(
                        /^\[[ xX]\] +/,
                        ""
                      )))),
                  h.items.push({
                    type: "list_item",
                    raw: p,
                    task: l,
                    checked: s,
                    loose: o,
                    text: t,
                  })
              }
              return h
            }
          },
        },
        {
          key: "html",
          value: function (e) {
            var n = this.rules.block.html.exec(e)
            if (n)
              return {
                type: this.options.sanitize
                  ? "paragraph"
                  : "html",
                raw: n[0],
                pre:
                  !this.options.sanitizer &&
                  ("pre" === n[1] ||
                    "script" === n[1] ||
                    "style" === n[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(n[0])
                    : fo(n[0])
                  : n[0],
              }
          },
        },
        {
          key: "def",
          value: function (e) {
            var n = this.rules.block.def.exec(e)
            if (n)
              return (
                n[3] &&
                  (n[3] = n[3].substring(
                    1,
                    n[3].length - 1
                  )),
                {
                  type: "def",
                  tag: n[1]
                    .toLowerCase()
                    .replace(/\s+/g, " "),
                  raw: n[0],
                  href: n[2],
                  title: n[3],
                }
              )
          },
        },
        {
          key: "table",
          value: function (e) {
            var n = this.rules.block.table.exec(e)
            if (n) {
              var t = {
                type: "table",
                header: po(
                  n[1].replace(/^ *| *\| *$/g, "")
                ),
                align: n[2]
                  .replace(/^ *|\| *$/g, "")
                  .split(/ *\| */),
                cells: n[3]
                  ? n[3].replace(/\n$/, "").split("\n")
                  : [],
              }
              if (t.header.length === t.align.length) {
                t.raw = n[0]
                var r,
                  u = t.align.length
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(t.align[r])
                    ? (t.align[r] = "right")
                    : /^ *:-+: *$/.test(t.align[r])
                    ? (t.align[r] = "center")
                    : /^ *:-+ *$/.test(t.align[r])
                    ? (t.align[r] = "left")
                    : (t.align[r] = null)
                for (
                  u = t.cells.length, r = 0;
                  r < u;
                  r++
                )
                  t.cells[r] = po(
                    t.cells[r].replace(
                      /^ *\| *| *\| *$/g,
                      ""
                    ),
                    t.header.length
                  )
                return t
              }
            }
          },
        },
        {
          key: "lheading",
          value: function (e) {
            var n = this.rules.block.lheading.exec(e)
            if (n)
              return {
                type: "heading",
                raw: n[0],
                depth: "=" === n[2].charAt(0) ? 1 : 2,
                text: n[1],
              }
          },
        },
        {
          key: "paragraph",
          value: function (e) {
            var n = this.rules.block.paragraph.exec(e)
            if (n)
              return {
                type: "paragraph",
                raw: n[0],
                text:
                  "\n" === n[1].charAt(n[1].length - 1)
                    ? n[1].slice(0, -1)
                    : n[1],
              }
          },
        },
        {
          key: "text",
          value: function (e) {
            var n = this.rules.block.text.exec(e)
            if (n)
              return {
                type: "text",
                raw: n[0],
                text: n[0],
              }
          },
        },
        {
          key: "escape",
          value: function (e) {
            var n = this.rules.inline.escape.exec(e)
            if (n)
              return {
                type: "escape",
                raw: n[0],
                text: fo(n[1]),
              }
          },
        },
        {
          key: "tag",
          value: function (e, n, t) {
            var r = this.rules.inline.tag.exec(e)
            if (r)
              return (
                !n && /^<a /i.test(r[0])
                  ? (n = !0)
                  : n &&
                    /^<\/a>/i.test(r[0]) &&
                    (n = !1),
                !t &&
                /^<(pre|code|kbd|script)(\s|>)/i.test(
                  r[0]
                )
                  ? (t = !0)
                  : t &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(
                      r[0]
                    ) &&
                    (t = !1),
                {
                  type: this.options.sanitize
                    ? "text"
                    : "html",
                  raw: r[0],
                  inLink: n,
                  inRawBlock: t,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : fo(r[0])
                    : r[0],
                }
              )
          },
        },
        {
          key: "link",
          value: function (e) {
            var n = this.rules.inline.link.exec(e)
            if (n) {
              var t = n[2].trim()
              if (
                !this.options.pedantic &&
                /^</.test(t)
              ) {
                if (!/>$/.test(t)) return
                var r = co(t.slice(0, -1), "\\")
                if ((t.length - r.length) % 2 == 0)
                  return
              } else {
                var u = ho(n[2], "()")
                if (u > -1) {
                  var i =
                    (0 === n[0].indexOf("!") ? 5 : 4) +
                    n[1].length +
                    u
                  ;(n[2] = n[2].substring(0, u)),
                    (n[0] = n[0]
                      .substring(0, i)
                      .trim()),
                    (n[3] = "")
                }
              }
              var a = n[2],
                o = ""
              if (this.options.pedantic) {
                var l =
                  /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(
                    a
                  )
                l && ((a = l[1]), (o = l[3]))
              } else o = n[3] ? n[3].slice(1, -1) : ""
              return (
                (a = a.trim()),
                /^</.test(a) &&
                  (a =
                    this.options.pedantic &&
                    !/>$/.test(t)
                      ? a.slice(1)
                      : a.slice(1, -1)),
                go(
                  n,
                  {
                    href: a
                      ? a.replace(
                          this.rules.inline._escapes,
                          "$1"
                        )
                      : a,
                    title: o
                      ? o.replace(
                          this.rules.inline._escapes,
                          "$1"
                        )
                      : o,
                  },
                  n[0]
                )
              )
            }
          },
        },
        {
          key: "reflink",
          value: function (e, n) {
            var t
            if (
              (t =
                this.rules.inline.reflink.exec(e)) ||
              (t = this.rules.inline.nolink.exec(e))
            ) {
              var r = (t[2] || t[1]).replace(
                /\s+/g,
                " "
              )
              if (
                !(r = n[r.toLowerCase()]) ||
                !r.href
              ) {
                var u = t[0].charAt(0)
                return {
                  type: "text",
                  raw: u,
                  text: u,
                }
              }
              return go(t, r, t[0])
            }
          },
        },
        {
          key: "emStrong",
          value: function (e, n) {
            var t =
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
                !t.match(
                  /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                ))
            ) {
              var u = r[1] || r[2] || ""
              if (
                !u ||
                (u &&
                  ("" === t ||
                    this.rules.inline.punctuation.exec(
                      t
                    )))
              ) {
                var i,
                  a,
                  o = r[0].length - 1,
                  l = o,
                  s = 0,
                  c =
                    "*" === r[0][0]
                      ? this.rules.inline.emStrong
                          .rDelimAst
                      : this.rules.inline.emStrong
                          .rDelimUnd
                for (
                  c.lastIndex = 0,
                    n = n.slice(-1 * e.length + o);
                  null != (r = c.exec(n));

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
                    if (((a = i.length), r[3] || r[4]))
                      l += a
                    else if (
                      !((r[5] || r[6]) && o % 3) ||
                      (o + a) % 3
                    ) {
                      if (!((l -= a) > 0)) {
                        if (
                          (l + s - a <= 0 &&
                            !n
                              .slice(c.lastIndex)
                              .match(c) &&
                            (a = Math.min(
                              a,
                              a + l + s
                            )),
                          Math.min(o, a) % 2)
                        )
                          return {
                            type: "em",
                            raw: e.slice(
                              0,
                              o + r.index + a + 1
                            ),
                            text: e.slice(
                              1,
                              o + r.index + a
                            ),
                          }
                        if (Math.min(o, a) % 2 == 0)
                          return {
                            type: "strong",
                            raw: e.slice(
                              0,
                              o + r.index + a + 1
                            ),
                            text: e.slice(
                              2,
                              o + r.index + a - 1
                            ),
                          }
                      }
                    } else s += a
              }
            }
          },
        },
        {
          key: "codespan",
          value: function (e) {
            var n = this.rules.inline.code.exec(e)
            if (n) {
              var t = n[2].replace(/\n/g, " "),
                r = /[^ ]/.test(t),
                u = /^ /.test(t) && / $/.test(t)
              return (
                r &&
                  u &&
                  (t = t.substring(1, t.length - 1)),
                (t = fo(t, !0)),
                {
                  type: "codespan",
                  raw: n[0],
                  text: t,
                }
              )
            }
          },
        },
        {
          key: "br",
          value: function (e) {
            var n = this.rules.inline.br.exec(e)
            if (n) return { type: "br", raw: n[0] }
          },
        },
        {
          key: "del",
          value: function (e) {
            var n = this.rules.inline.del.exec(e)
            if (n)
              return {
                type: "del",
                raw: n[0],
                text: n[2],
              }
          },
        },
        {
          key: "autolink",
          value: function (e, n) {
            var t,
              r,
              u = this.rules.inline.autolink.exec(e)
            if (u)
              return (
                (r =
                  "@" === u[2]
                    ? "mailto:" +
                      (t = fo(
                        this.options.mangle
                          ? n(u[1])
                          : u[1]
                      ))
                    : (t = fo(u[1]))),
                {
                  type: "link",
                  raw: u[0],
                  text: t,
                  href: r,
                  tokens: [
                    { type: "text", raw: t, text: t },
                  ],
                }
              )
          },
        },
        {
          key: "url",
          value: function (e, n) {
            var t
            if ((t = this.rules.inline.url.exec(e))) {
              var r, u
              if ("@" === t[2])
                u =
                  "mailto:" +
                  (r = fo(
                    this.options.mangle
                      ? n(t[0])
                      : t[0]
                  ))
              else {
                var i
                do {
                  ;(i = t[0]),
                    (t[0] =
                      this.rules.inline._backpedal.exec(
                        t[0]
                      )[0])
                } while (i !== t[0])
                ;(r = fo(t[0])),
                  (u =
                    "www." === t[1]
                      ? "http://" + r
                      : r)
              }
              return {
                type: "link",
                raw: t[0],
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
          value: function (e, n, t) {
            var r,
              u = this.rules.inline.text.exec(e)
            if (u)
              return (
                (r = n
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(u[0])
                      : fo(u[0])
                    : u[0]
                  : fo(
                      this.options.smartypants
                        ? t(u[0])
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
  mo = to,
  vo = eo,
  yo = ro,
  ko = {
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
    nptable: mo,
    table: mo,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title:
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  }
;(ko.def = vo(ko.def)
  .replace("label", ko._label)
  .replace("title", ko._title)
  .getRegex()),
  (ko.bullet = /(?:[*+-]|\d{1,9}[.)])/),
  (ko.item =
    /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
  (ko.item = vo(ko.item, "gm")
    .replace(/bull/g, ko.bullet)
    .getRegex()),
  (ko.listItemStart = vo(/^( *)(bull) */)
    .replace("bull", ko.bullet)
    .getRegex()),
  (ko.list = vo(ko.list)
    .replace(/bull/g, ko.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
    )
    .replace("def", "\\n+(?=" + ko.def.source + ")")
    .getRegex()),
  (ko._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
  (ko._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
  (ko.html = vo(ko.html, "i")
    .replace("comment", ko._comment)
    .replace("tag", ko._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex()),
  (ko.paragraph = vo(ko._paragraph)
    .replace("hr", ko.hr)
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
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.blockquote = vo(ko.blockquote)
    .replace("paragraph", ko.paragraph)
    .getRegex()),
  (ko.normal = yo({}, ko)),
  (ko.gfm = yo({}, ko.normal, {
    nptable:
      "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    table:
      "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  })),
  (ko.gfm.nptable = vo(ko.gfm.nptable)
    .replace("hr", ko.hr)
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
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.gfm.table = vo(ko.gfm.table)
    .replace("hr", ko.hr)
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
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.pedantic = yo({}, ko.normal, {
    html: vo(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
    )
      .replace("comment", ko._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: mo,
    paragraph: vo(ko.normal._paragraph)
      .replace("hr", ko.hr)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", ko.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  }))
var Ao = {
  escape:
    /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: mo,
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
  del: mo,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
  _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
}
;(Ao.punctuation = vo(Ao.punctuation)
  .replace(/punctuation/g, Ao._punctuation)
  .getRegex()),
  (Ao.blockSkip =
    /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
  (Ao.escapedEmSt = /\\\*|\\_/g),
  (Ao._comment = vo(ko._comment)
    .replace("(?:--\x3e|$)", "--\x3e")
    .getRegex()),
  (Ao.emStrong.lDelim = vo(Ao.emStrong.lDelim)
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao.emStrong.rDelimAst = vo(
    Ao.emStrong.rDelimAst,
    "g"
  )
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao.emStrong.rDelimUnd = vo(
    Ao.emStrong.rDelimUnd,
    "g"
  )
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao._escapes =
    /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Ao._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Ao._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Ao.autolink = vo(Ao.autolink)
    .replace("scheme", Ao._scheme)
    .replace("email", Ao._email)
    .getRegex()),
  (Ao._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Ao.tag = vo(Ao.tag)
    .replace("comment", Ao._comment)
    .replace("attribute", Ao._attribute)
    .getRegex()),
  (Ao._label =
    /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Ao._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
  (Ao._title =
    /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Ao.link = vo(Ao.link)
    .replace("label", Ao._label)
    .replace("href", Ao._href)
    .replace("title", Ao._title)
    .getRegex()),
  (Ao.reflink = vo(Ao.reflink)
    .replace("label", Ao._label)
    .getRegex()),
  (Ao.reflinkSearch = vo(Ao.reflinkSearch, "g")
    .replace("reflink", Ao.reflink)
    .replace("nolink", Ao.nolink)
    .getRegex()),
  (Ao.normal = yo({}, Ao)),
  (Ao.pedantic = yo({}, Ao.normal, {
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
    link: vo(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Ao._label)
      .getRegex(),
    reflink: vo(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Ao._label)
      .getRegex(),
  })),
  (Ao.gfm = yo({}, Ao.normal, {
    escape: vo(Ao.escape)
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
  (Ao.gfm.url = vo(Ao.gfm.url, "i")
    .replace("email", Ao.gfm._extended_email)
    .getRegex()),
  (Ao.breaks = yo({}, Ao.gfm, {
    br: vo(Ao.br).replace("{2,}", "*").getRegex(),
    text: vo(Ao.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  }))
var Eo = { block: ko, inline: Ao },
  bo = Do,
  Fo = Ia.exports.defaults,
  Co = Eo.block,
  xo = Eo.inline,
  wo = lo
function So(e) {
  return e
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…")
}
function Bo(e) {
  var n,
    t,
    r = "",
    u = e.length
  for (n = 0; n < u; n++)
    (t = e.charCodeAt(n)),
      Math.random() > 0.5 &&
        (t = "x" + t.toString(16)),
      (r += "&#" + t + ";")
  return r
}
var _o = (function () {
    function e(n) {
      ir(this, e),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = n || Fo),
        (this.options.tokenizer =
          this.options.tokenizer || new bo()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options)
      var t = { block: Co.normal, inline: xo.normal }
      this.options.pedantic
        ? ((t.block = Co.pedantic),
          (t.inline = xo.pedantic))
        : this.options.gfm &&
          ((t.block = Co.gfm),
          this.options.breaks
            ? (t.inline = xo.breaks)
            : (t.inline = xo.gfm)),
        (this.tokenizer.rules = t)
    }
    return (
      or(
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
              var n,
                t,
                r,
                u,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                a =
                  !(
                    arguments.length > 2 &&
                    void 0 !== arguments[2]
                  ) || arguments[2]
              for (
                this.options.pedantic &&
                (e = e.replace(/^ +$/gm, ""));
                e;

              )
                if ((n = this.tokenizer.space(e)))
                  (e = e.substring(n.raw.length)),
                    n.type && i.push(n)
                else if ((n = this.tokenizer.code(e)))
                  (e = e.substring(n.raw.length)),
                    (u = i[i.length - 1]) &&
                    "paragraph" === u.type
                      ? ((u.raw += "\n" + n.raw),
                        (u.text += "\n" + n.text))
                      : i.push(n)
                else if (
                  (n = this.tokenizer.fences(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  (n = this.tokenizer.heading(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  (n = this.tokenizer.nptable(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if ((n = this.tokenizer.hr(e)))
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  (n = this.tokenizer.blockquote(e))
                )
                  (e = e.substring(n.raw.length)),
                    (n.tokens = this.blockTokens(
                      n.text,
                      [],
                      a
                    )),
                    i.push(n)
                else if (
                  (n = this.tokenizer.list(e))
                ) {
                  for (
                    e = e.substring(n.raw.length),
                      r = n.items.length,
                      t = 0;
                    t < r;
                    t++
                  )
                    n.items[t].tokens =
                      this.blockTokens(
                        n.items[t].text,
                        [],
                        !1
                      )
                  i.push(n)
                } else if (
                  (n = this.tokenizer.html(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  a &&
                  (n = this.tokenizer.def(e))
                )
                  (e = e.substring(n.raw.length)),
                    this.tokens.links[n.tag] ||
                      (this.tokens.links[n.tag] = {
                        href: n.href,
                        title: n.title,
                      })
                else if ((n = this.tokenizer.table(e)))
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  (n = this.tokenizer.lheading(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if (
                  a &&
                  (n = this.tokenizer.paragraph(e))
                )
                  (e = e.substring(n.raw.length)),
                    i.push(n)
                else if ((n = this.tokenizer.text(e)))
                  (e = e.substring(n.raw.length)),
                    (u = i[i.length - 1]) &&
                    "text" === u.type
                      ? ((u.raw += "\n" + n.raw),
                        (u.text += "\n" + n.text))
                      : i.push(n)
                else if (e) {
                  var o =
                    "Infinite loop on byte: " +
                    e.charCodeAt(0)
                  if (this.options.silent) {
                    console.error(o)
                    break
                  }
                  throw new Error(o)
                }
              return i
            },
          },
          {
            key: "inline",
            value: function (e) {
              var n,
                t,
                r,
                u,
                i,
                a,
                o = e.length
              for (n = 0; n < o; n++)
                switch ((a = e[n]).type) {
                  case "paragraph":
                  case "text":
                  case "heading":
                    ;(a.tokens = []),
                      this.inlineTokens(
                        a.text,
                        a.tokens
                      )
                    break
                  case "table":
                    for (
                      a.tokens = {
                        header: [],
                        cells: [],
                      },
                        u = a.header.length,
                        t = 0;
                      t < u;
                      t++
                    )
                      (a.tokens.header[t] = []),
                        this.inlineTokens(
                          a.header[t],
                          a.tokens.header[t]
                        )
                    for (
                      u = a.cells.length, t = 0;
                      t < u;
                      t++
                    )
                      for (
                        i = a.cells[t],
                          a.tokens.cells[t] = [],
                          r = 0;
                        r < i.length;
                        r++
                      )
                        (a.tokens.cells[t][r] = []),
                          this.inlineTokens(
                            i[r],
                            a.tokens.cells[t][r]
                          )
                    break
                  case "blockquote":
                    this.inline(a.tokens)
                    break
                  case "list":
                    for (
                      u = a.items.length, t = 0;
                      t < u;
                      t++
                    )
                      this.inline(a.items[t].tokens)
                }
              return e
            },
          },
          {
            key: "inlineTokens",
            value: function (e) {
              var n,
                t,
                r,
                u,
                i,
                a =
                  arguments.length > 1 &&
                  void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                o =
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
                        wo("a", r[0].length - 2) +
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
                  wo("a", r[0].length - 2) +
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
                  (n = this.tokenizer.escape(e)))
                )
                  (e = e.substring(n.raw.length)),
                    a.push(n)
                else if (
                  (n = this.tokenizer.tag(e, o, l))
                ) {
                  ;(e = e.substring(n.raw.length)),
                    (o = n.inLink),
                    (l = n.inRawBlock)
                  var p = a[a.length - 1]
                  p &&
                  "text" === n.type &&
                  "text" === p.type
                    ? ((p.raw += n.raw),
                      (p.text += n.text))
                    : a.push(n)
                } else if (
                  (n = this.tokenizer.link(e))
                )
                  (e = e.substring(n.raw.length)),
                    "link" === n.type &&
                      (n.tokens = this.inlineTokens(
                        n.text,
                        [],
                        !0,
                        l
                      )),
                    a.push(n)
                else if (
                  (n = this.tokenizer.reflink(
                    e,
                    this.tokens.links
                  ))
                ) {
                  e = e.substring(n.raw.length)
                  var d = a[a.length - 1]
                  "link" === n.type
                    ? ((n.tokens = this.inlineTokens(
                        n.text,
                        [],
                        !0,
                        l
                      )),
                      a.push(n))
                    : d &&
                      "text" === n.type &&
                      "text" === d.type
                    ? ((d.raw += n.raw),
                      (d.text += n.text))
                    : a.push(n)
                } else if (
                  (n = this.tokenizer.emStrong(
                    e,
                    s,
                    i
                  ))
                )
                  (e = e.substring(n.raw.length)),
                    (n.tokens = this.inlineTokens(
                      n.text,
                      [],
                      o,
                      l
                    )),
                    a.push(n)
                else if (
                  (n = this.tokenizer.codespan(e))
                )
                  (e = e.substring(n.raw.length)),
                    a.push(n)
                else if ((n = this.tokenizer.br(e)))
                  (e = e.substring(n.raw.length)),
                    a.push(n)
                else if ((n = this.tokenizer.del(e)))
                  (e = e.substring(n.raw.length)),
                    (n.tokens = this.inlineTokens(
                      n.text,
                      [],
                      o,
                      l
                    )),
                    a.push(n)
                else if (
                  (n = this.tokenizer.autolink(e, Bo))
                )
                  (e = e.substring(n.raw.length)),
                    a.push(n)
                else if (
                  o ||
                  !(n = this.tokenizer.url(e, Bo))
                ) {
                  if (
                    (n = this.tokenizer.inlineText(
                      e,
                      l,
                      So
                    ))
                  )
                    (e = e.substring(n.raw.length)),
                      "_" !== n.raw.slice(-1) &&
                        (i = n.raw.slice(-1)),
                      (u = !0),
                      (t = a[a.length - 1]) &&
                      "text" === t.type
                        ? ((t.raw += n.raw),
                          (t.text += n.text))
                        : a.push(n)
                  else if (e) {
                    var f =
                      "Infinite loop on byte: " +
                      e.charCodeAt(0)
                    if (this.options.silent) {
                      console.error(f)
                      break
                    }
                    throw new Error(f)
                  }
                } else
                  (e = e.substring(n.raw.length)),
                    a.push(n)
              return a
            },
          },
        ],
        [
          {
            key: "rules",
            get: function () {
              return { block: Co, inline: xo }
            },
          },
          {
            key: "lex",
            value: function (n, t) {
              return new e(t).lex(n)
            },
          },
          {
            key: "lexInline",
            value: function (n, t) {
              return new e(t).inlineTokens(n)
            },
          },
        ]
      ),
      e
    )
  })(),
  To = Ia.exports.defaults,
  zo = no,
  Io = Ga,
  Ro = (function () {
    function e(n) {
      ir(this, e), (this.options = n || To)
    }
    return (
      or(e, [
        {
          key: "code",
          value: function (e, n, t) {
            var r = (n || "").match(/\S*/)[0]
            if (this.options.highlight) {
              var u = this.options.highlight(e, r)
              null != u &&
                u !== e &&
                ((t = !0), (e = u))
            }
            return (
              (e = e.replace(/\n$/, "") + "\n"),
              r
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  Io(r, !0) +
                  '">' +
                  (t ? e : Io(e, !0)) +
                  "</code></pre>\n"
                : "<pre><code>" +
                  (t ? e : Io(e, !0)) +
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
          value: function (e, n, t, r) {
            return this.options.headerIds
              ? "<h" +
                  n +
                  ' id="' +
                  this.options.headerPrefix +
                  r.slug(t) +
                  '">' +
                  e +
                  "</h" +
                  n +
                  ">\n"
              : "<h" + n + ">" + e + "</h" + n + ">\n"
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
          value: function (e, n, t) {
            var r = n ? "ol" : "ul"
            return (
              "<" +
              r +
              (n && 1 !== t
                ? ' start="' + t + '"'
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
          value: function (e, n) {
            return (
              n && (n = "<tbody>" + n + "</tbody>"),
              "<table>\n<thead>\n" +
                e +
                "</thead>\n" +
                n +
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
          value: function (e, n) {
            var t = n.header ? "th" : "td"
            return (
              (n.align
                ? "<" + t + ' align="' + n.align + '">'
                : "<" + t + ">") +
              e +
              "</" +
              t +
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
          value: function (e, n, t) {
            if (
              null ===
              (e = zo(
                this.options.sanitize,
                this.options.baseUrl,
                e
              ))
            )
              return t
            var r = '<a href="' + Io(e) + '"'
            return (
              n && (r += ' title="' + n + '"'),
              (r += ">" + t + "</a>")
            )
          },
        },
        {
          key: "image",
          value: function (e, n, t) {
            if (
              null ===
              (e = zo(
                this.options.sanitize,
                this.options.baseUrl,
                e
              ))
            )
              return t
            var r =
              '<img src="' + e + '" alt="' + t + '"'
            return (
              n && (r += ' title="' + n + '"'),
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
  Oo = (function () {
    function e() {
      ir(this, e)
    }
    return (
      or(e, [
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
          value: function (e, n, t) {
            return "" + t
          },
        },
        {
          key: "image",
          value: function (e, n, t) {
            return "" + t
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
  $o = (function () {
    function e() {
      ir(this, e), (this.seen = {})
    }
    return (
      or(e, [
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
          value: function (e, n) {
            var t = e,
              r = 0
            if (this.seen.hasOwnProperty(t)) {
              r = this.seen[e]
              do {
                t = e + "-" + ++r
              } while (this.seen.hasOwnProperty(t))
            }
            return (
              n ||
                ((this.seen[e] = r),
                (this.seen[t] = 0)),
              t
            )
          },
        },
        {
          key: "slug",
          value: function (e) {
            var n =
                arguments.length > 1 &&
                void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = this.serialize(e)
            return this.getNextSafeSlug(t, n.dryrun)
          },
        },
      ]),
      e
    )
  })(),
  Lo = Ro,
  Po = Oo,
  jo = $o,
  Mo = Ia.exports.defaults,
  No = Qa,
  Uo = _o,
  qo = (function () {
    function e(n) {
      ir(this, e),
        (this.options = n || Mo),
        (this.options.renderer =
          this.options.renderer || new Lo()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new Po()),
        (this.slugger = new jo())
    }
    return (
      or(
        e,
        [
          {
            key: "parse",
            value: function (e) {
              var n,
                t,
                r,
                u,
                i,
                a,
                o,
                l,
                s,
                c,
                p,
                d,
                f,
                h,
                g,
                D,
                m,
                v,
                y =
                  !(
                    arguments.length > 1 &&
                    void 0 !== arguments[1]
                  ) || arguments[1],
                k = "",
                A = e.length
              for (n = 0; n < A; n++)
                switch ((c = e[n]).type) {
                  case "space":
                    continue
                  case "hr":
                    k += this.renderer.hr()
                    continue
                  case "heading":
                    k += this.renderer.heading(
                      this.parseInline(c.tokens),
                      c.depth,
                      No(
                        this.parseInline(
                          c.tokens,
                          this.textRenderer
                        )
                      ),
                      this.slugger
                    )
                    continue
                  case "code":
                    k += this.renderer.code(
                      c.text,
                      c.lang,
                      c.escaped
                    )
                    continue
                  case "table":
                    for (
                      l = "",
                        o = "",
                        u = c.header.length,
                        t = 0;
                      t < u;
                      t++
                    )
                      o += this.renderer.tablecell(
                        this.parseInline(
                          c.tokens.header[t]
                        ),
                        {
                          header: !0,
                          align: c.align[t],
                        }
                      )
                    for (
                      l += this.renderer.tablerow(o),
                        s = "",
                        u = c.cells.length,
                        t = 0;
                      t < u;
                      t++
                    ) {
                      for (
                        o = "",
                          i = (a = c.tokens.cells[t])
                            .length,
                          r = 0;
                        r < i;
                        r++
                      )
                        o += this.renderer.tablecell(
                          this.parseInline(a[r]),
                          {
                            header: !1,
                            align: c.align[r],
                          }
                        )
                      s += this.renderer.tablerow(o)
                    }
                    k += this.renderer.table(l, s)
                    continue
                  case "blockquote":
                    ;(s = this.parse(c.tokens)),
                      (k +=
                        this.renderer.blockquote(s))
                    continue
                  case "list":
                    for (
                      p = c.ordered,
                        d = c.start,
                        f = c.loose,
                        u = c.items.length,
                        s = "",
                        t = 0;
                      t < u;
                      t++
                    )
                      (D = (g = c.items[t]).checked),
                        (m = g.task),
                        (h = ""),
                        g.task &&
                          ((v =
                            this.renderer.checkbox(D)),
                          f
                            ? g.tokens.length > 0 &&
                              "text" ===
                                g.tokens[0].type
                              ? ((g.tokens[0].text =
                                  v +
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
                                    v +
                                    " " +
                                    g.tokens[0]
                                      .tokens[0].text))
                              : g.tokens.unshift({
                                  type: "text",
                                  text: v,
                                })
                            : (h += v)),
                        (h += this.parse(g.tokens, f)),
                        (s += this.renderer.listitem(
                          h,
                          m,
                          D
                        ))
                    k += this.renderer.list(s, p, d)
                    continue
                  case "html":
                    k += this.renderer.html(c.text)
                    continue
                  case "paragraph":
                    k += this.renderer.paragraph(
                      this.parseInline(c.tokens)
                    )
                    continue
                  case "text":
                    for (
                      s = c.tokens
                        ? this.parseInline(c.tokens)
                        : c.text;
                      n + 1 < A &&
                      "text" === e[n + 1].type;

                    )
                      s +=
                        "\n" +
                        ((c = e[++n]).tokens
                          ? this.parseInline(c.tokens)
                          : c.text)
                    k += y
                      ? this.renderer.paragraph(s)
                      : s
                    continue
                  default:
                    var E =
                      'Token with "' +
                      c.type +
                      '" type was not found.'
                    if (this.options.silent)
                      return void console.error(E)
                    throw new Error(E)
                }
              return k
            },
          },
          {
            key: "parseInline",
            value: function (e, n) {
              n = n || this.renderer
              var t,
                r,
                u = "",
                i = e.length
              for (t = 0; t < i; t++)
                switch ((r = e[t]).type) {
                  case "escape":
                    u += n.text(r.text)
                    break
                  case "html":
                    u += n.html(r.text)
                    break
                  case "link":
                    u += n.link(
                      r.href,
                      r.title,
                      this.parseInline(r.tokens, n)
                    )
                    break
                  case "image":
                    u += n.image(
                      r.href,
                      r.title,
                      r.text
                    )
                    break
                  case "strong":
                    u += n.strong(
                      this.parseInline(r.tokens, n)
                    )
                    break
                  case "em":
                    u += n.em(
                      this.parseInline(r.tokens, n)
                    )
                    break
                  case "codespan":
                    u += n.codespan(r.text)
                    break
                  case "br":
                    u += n.br()
                    break
                  case "del":
                    u += n.del(
                      this.parseInline(r.tokens, n)
                    )
                    break
                  case "text":
                    u += n.text(r.text)
                    break
                  default:
                    var a =
                      'Token with "' +
                      r.type +
                      '" type was not found.'
                    if (this.options.silent)
                      return void console.error(a)
                    throw new Error(a)
                }
              return u
            },
          },
        ],
        [
          {
            key: "parse",
            value: function (n, t) {
              return new e(t).parse(n)
            },
          },
          {
            key: "parseInline",
            value: function (n, t) {
              return new e(t).parseInline(n)
            },
          },
        ]
      ),
      e
    )
  })(),
  Zo = Do,
  Jo = Ro,
  Ko = Oo,
  Ho = $o,
  Wo = ro,
  Yo = oo,
  Vo = Ga,
  Xo = Ia.exports.getDefaults,
  Go = Ia.exports.changeDefaults,
  Qo = Ia.exports.defaults
function el(e, n, t) {
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
    ("function" == typeof n && ((t = n), (n = null)),
    (n = Wo({}, el.defaults, n || {})),
    Yo(n),
    t)
  ) {
    var r,
      u = n.highlight
    try {
      r = Uo.lex(e, n)
    } catch (e) {
      return t(e)
    }
    var i = function (e) {
      var i
      if (!e)
        try {
          i = qo.parse(r, n)
        } catch (n) {
          e = n
        }
      return (n.highlight = u), e ? t(e) : t(null, i)
    }
    if (!u || u.length < 3) return i()
    if ((delete n.highlight, !r.length)) return i()
    var a = 0
    return (
      el.walkTokens(r, function (e) {
        "code" === e.type &&
          (a++,
          setTimeout(function () {
            u(e.text, e.lang, function (n, t) {
              if (n) return i(n)
              null != t &&
                t !== e.text &&
                ((e.text = t), (e.escaped = !0)),
                0 === --a && i()
            })
          }, 0))
      }),
      void (0 === a && i())
    )
  }
  try {
    var o = Uo.lex(e, n)
    return (
      n.walkTokens && el.walkTokens(o, n.walkTokens),
      qo.parse(o, n)
    )
  } catch (e) {
    if (
      ((e.message +=
        "\nPlease report this to https://github.com/markedjs/marked."),
      n.silent)
    )
      return (
        "<p>An error occurred:</p><pre>" +
        Vo(e.message + "", !0) +
        "</pre>"
      )
    throw e
  }
}
;(el.options = el.setOptions =
  function (e) {
    return Wo(el.defaults, e), Go(el.defaults), el
  }),
  (el.getDefaults = Xo),
  (el.defaults = Qo),
  (el.use = function (e) {
    var n = Wo({}, e)
    if (
      (e.renderer &&
        (function () {
          var t = el.defaults.renderer || new Jo(),
            r = function (n) {
              var r = t[n]
              t[n] = function () {
                for (
                  var u = arguments.length,
                    i = new Array(u),
                    a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a]
                var o = e.renderer[n].apply(t, i)
                return (
                  !1 === o && (o = r.apply(t, i)), o
                )
              }
            }
          for (var u in e.renderer) r(u)
          n.renderer = t
        })(),
      e.tokenizer &&
        (function () {
          var t = el.defaults.tokenizer || new Zo(),
            r = function (n) {
              var r = t[n]
              t[n] = function () {
                for (
                  var u = arguments.length,
                    i = new Array(u),
                    a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a]
                var o = e.tokenizer[n].apply(t, i)
                return (
                  !1 === o && (o = r.apply(t, i)), o
                )
              }
            }
          for (var u in e.tokenizer) r(u)
          n.tokenizer = t
        })(),
      e.walkTokens)
    ) {
      var t = el.defaults.walkTokens
      n.walkTokens = function (n) {
        e.walkTokens(n), t && t(n)
      }
    }
    el.setOptions(n)
  }),
  (el.walkTokens = function (e, n) {
    var t,
      r = pr(e)
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var u = t.value
        switch ((n(u), u.type)) {
          case "table":
            var i,
              a = pr(u.tokens.header)
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var o = i.value
                el.walkTokens(o, n)
              }
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
            var l,
              s = pr(u.tokens.cells)
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var c,
                  p = pr(l.value)
                try {
                  for (p.s(); !(c = p.n()).done; ) {
                    var d = c.value
                    el.walkTokens(d, n)
                  }
                } catch (e) {
                  p.e(e)
                } finally {
                  p.f()
                }
              }
            } catch (e) {
              s.e(e)
            } finally {
              s.f()
            }
            break
          case "list":
            el.walkTokens(u.items, n)
            break
          default:
            u.tokens && el.walkTokens(u.tokens, n)
        }
      }
    } catch (e) {
      r.e(e)
    } finally {
      r.f()
    }
  }),
  (el.parseInline = function (e, n) {
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
    ;(n = Wo({}, el.defaults, n || {})), Yo(n)
    try {
      var t = Uo.lexInline(e, n)
      return (
        n.walkTokens && el.walkTokens(t, n.walkTokens),
        qo.parseInline(t, n)
      )
    } catch (e) {
      if (
        ((e.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        n.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" +
          Vo(e.message + "", !0) +
          "</pre>"
        )
      throw e
    }
  }),
  (el.Parser = qo),
  (el.parser = qo.parse),
  (el.Renderer = Jo),
  (el.TextRenderer = Ko),
  (el.Lexer = Uo),
  (el.lexer = Uo.lex),
  (el.Tokenizer = Zo),
  (el.Slugger = Ho),
  (el.parse = el)
var nl = el
export default function () {
  var e,
    n,
    t = null
  function r() {
    if (t && !t.closed) t.focus()
    else {
      if (
        (((t = window.open(
          "about:blank",
          "reveal.js - Notes",
          "width=1100,height=700"
        )).marked = nl),
        t.document.write(
          '\x3c!--\n\tNOTE: You need to build the notes plugin after making changes to this file.\n--\x3e\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n\n    <title>reveal.js - Speaker View</title>\n\n    <style>\n      body {\n        font-family: Helvetica;\n        font-size: 18px;\n      }\n\n      #current-slide,\n      #upcoming-slide,\n      #speaker-controls {\n        padding: 6px;\n        box-sizing: border-box;\n        -moz-box-sizing: border-box;\n      }\n\n      #current-slide iframe,\n      #upcoming-slide iframe {\n        width: 100%;\n        height: 100%;\n        border: 1px solid #ddd;\n      }\n\n      #current-slide .label,\n      #upcoming-slide .label {\n        position: absolute;\n        top: 10px;\n        left: 10px;\n        z-index: 2;\n      }\n\n      #connection-status {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 20;\n        padding: 30% 20% 20% 20%;\n        font-size: 18px;\n        color: #222;\n        background: #fff;\n        text-align: center;\n        box-sizing: border-box;\n        line-height: 1.4;\n      }\n\n      .overlay-element {\n        height: 34px;\n        line-height: 34px;\n        padding: 0 10px;\n        text-shadow: none;\n        background: rgba(220, 220, 220, 0.8);\n        color: #222;\n        font-size: 14px;\n      }\n\n      .overlay-element.interactive:hover {\n        background: rgba(220, 220, 220, 1);\n      }\n\n      #current-slide {\n        position: absolute;\n        width: 60%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        padding-right: 0;\n      }\n\n      #upcoming-slide {\n        position: absolute;\n        width: 40%;\n        height: 40%;\n        right: 0;\n        top: 0;\n      }\n\n      /* Speaker controls */\n      #speaker-controls {\n        position: absolute;\n        top: 40%;\n        right: 0;\n        width: 40%;\n        height: 60%;\n        overflow: auto;\n        font-size: 18px;\n      }\n\n      .speaker-controls-time.hidden,\n      .speaker-controls-notes.hidden {\n        display: none;\n      }\n\n      .speaker-controls-time .label,\n      .speaker-controls-pace .label,\n      .speaker-controls-notes .label {\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 0.66em;\n        color: #666;\n        margin: 0;\n      }\n\n      .speaker-controls-time,\n      .speaker-controls-pace {\n        border-bottom: 1px solid\n          rgba(200, 200, 200, 0.5);\n        margin-bottom: 10px;\n        padding: 10px 16px;\n        padding-bottom: 20px;\n        cursor: pointer;\n      }\n\n      .speaker-controls-time .reset-button {\n        opacity: 0;\n        float: right;\n        color: #666;\n        text-decoration: none;\n      }\n      .speaker-controls-time:hover .reset-button {\n        opacity: 1;\n      }\n\n      .speaker-controls-time .timer,\n      .speaker-controls-time .clock {\n        width: 50%;\n      }\n\n      .speaker-controls-time .timer,\n      .speaker-controls-time .clock,\n      .speaker-controls-time .pacing .hours-value,\n      .speaker-controls-time .pacing .minutes-value,\n      .speaker-controls-time .pacing .seconds-value {\n        font-size: 1.9em;\n      }\n\n      .speaker-controls-time .timer {\n        float: left;\n      }\n\n      .speaker-controls-time .clock {\n        float: right;\n        text-align: right;\n      }\n\n      .speaker-controls-time span.mute {\n        opacity: 0.3;\n      }\n\n      .speaker-controls-time .pacing-title {\n        margin-top: 5px;\n      }\n\n      .speaker-controls-time .pacing.ahead {\n        color: blue;\n      }\n\n      .speaker-controls-time .pacing.on-track {\n        color: green;\n      }\n\n      .speaker-controls-time .pacing.behind {\n        color: red;\n      }\n\n      .speaker-controls-notes {\n        padding: 10px 16px;\n      }\n\n      .speaker-controls-notes .value {\n        margin-top: 5px;\n        line-height: 1.4;\n        font-size: 1.2em;\n      }\n\n      /* Layout selector */\n      #speaker-layout {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: #222;\n        z-index: 10;\n      }\n      #speaker-layout select {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        border: 0;\n        box-shadow: 0;\n        cursor: pointer;\n        opacity: 0;\n\n        font-size: 1em;\n        background-color: transparent;\n\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      #speaker-layout select:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n      .clear {\n        clear: both;\n      }\n\n      /* Speaker layout: Wide */\n      body[data-speaker-layout="wide"] #current-slide,\n      body[data-speaker-layout="wide"]\n        #upcoming-slide {\n        width: 50%;\n        height: 45%;\n        padding: 6px;\n      }\n\n      body[data-speaker-layout="wide"] #current-slide {\n        top: 0;\n        left: 0;\n      }\n\n      body[data-speaker-layout="wide"]\n        #upcoming-slide {\n        top: 0;\n        left: 50%;\n      }\n\n      body[data-speaker-layout="wide"]\n        #speaker-controls {\n        top: 45%;\n        left: 0;\n        width: 100%;\n        height: 50%;\n        font-size: 1.25em;\n      }\n\n      /* Speaker layout: Tall */\n      body[data-speaker-layout="tall"] #current-slide,\n      body[data-speaker-layout="tall"]\n        #upcoming-slide {\n        width: 45%;\n        height: 50%;\n        padding: 6px;\n      }\n\n      body[data-speaker-layout="tall"] #current-slide {\n        top: 0;\n        left: 0;\n      }\n\n      body[data-speaker-layout="tall"]\n        #upcoming-slide {\n        top: 50%;\n        left: 0;\n      }\n\n      body[data-speaker-layout="tall"]\n        #speaker-controls {\n        padding-top: 40px;\n        top: 0;\n        left: 45%;\n        width: 55%;\n        height: 100%;\n        font-size: 1.25em;\n      }\n\n      /* Speaker layout: Notes only */\n      body[data-speaker-layout="notes-only"]\n        #current-slide,\n      body[data-speaker-layout="notes-only"]\n        #upcoming-slide {\n        display: none;\n      }\n\n      body[data-speaker-layout="notes-only"]\n        #speaker-controls {\n        padding-top: 40px;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        font-size: 1.25em;\n      }\n\n      @media screen and (max-width: 1080px) {\n        body[data-speaker-layout="default"]\n          #speaker-controls {\n          font-size: 16px;\n        }\n      }\n\n      @media screen and (max-width: 900px) {\n        body[data-speaker-layout="default"]\n          #speaker-controls {\n          font-size: 14px;\n        }\n      }\n\n      @media screen and (max-width: 800px) {\n        body[data-speaker-layout="default"]\n          #speaker-controls {\n          font-size: 12px;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="connection-status">\n      Loading speaker view...\n    </div>\n\n    <div id="current-slide"></div>\n    <div id="upcoming-slide">\n      <span class="overlay-element label"\n        >Upcoming</span\n      >\n    </div>\n    <div id="speaker-controls">\n      <div class="speaker-controls-time">\n        <h4 class="label">\n          Time\n          <span class="reset-button"\n            >Click to Reset</span\n          >\n        </h4>\n        <div class="clock">\n          <span class="clock-value">0:00 AM</span>\n        </div>\n        <div class="timer">\n          <span class="hours-value">00</span\n          ><span class="minutes-value">:00</span\n          ><span class="seconds-value">:00</span>\n        </div>\n        <div class="clear"></div>\n\n        <h4\n          class="label pacing-title"\n          style="display: none"\n        >\n          Pacing – Time to finish current slide\n        </h4>\n        <div class="pacing" style="display: none">\n          <span class="hours-value">00</span\n          ><span class="minutes-value">:00</span\n          ><span class="seconds-value">:00</span>\n        </div>\n      </div>\n\n      <div class="speaker-controls-notes hidden">\n        <h4 class="label">Notes</h4>\n        <div class="value"></div>\n      </div>\n    </div>\n    <div\n      id="speaker-layout"\n      class="overlay-element interactive"\n    >\n      <span class="speaker-layout-label"></span>\n      <select class="speaker-layout-dropdown"></select>\n    </div>\n\n    <script>\n      ;(function () {\n        var notes,\n          notesValue,\n          currentState,\n          currentSlide,\n          upcomingSlide,\n          layoutLabel,\n          layoutDropdown,\n          pendingCalls = {},\n          lastRevealApiCallId = 0,\n          connected = false\n\n        var SPEAKER_LAYOUTS = {\n          default: "Default",\n          wide: "Wide",\n          tall: "Tall",\n          "notes-only": "Notes only",\n        }\n\n        setupLayout()\n\n        var connectionStatus = document.querySelector(\n          "#connection-status"\n        )\n        var connectionTimeout = setTimeout(\n          function () {\n            connectionStatus.innerHTML =\n              "Error connecting to main window.<br>Please try closing and reopening the speaker view."\n          },\n          5000\n        )\n\n        window.addEventListener(\n          "message",\n          function (event) {\n            clearTimeout(connectionTimeout)\n            connectionStatus.style.display = "none"\n\n            var data = JSON.parse(event.data)\n\n            // The overview mode is only useful to the reveal.js instance\n            // where navigation occurs so we don\'t sync it\n            if (data.state) delete data.state.overview\n\n            // Messages sent by the notes plugin inside of the main window\n            if (\n              data &&\n              data.namespace === "reveal-notes"\n            ) {\n              if (data.type === "connect") {\n                handleConnectMessage(data)\n              } else if (data.type === "state") {\n                handleStateMessage(data)\n              } else if (data.type === "return") {\n                pendingCalls[data.callId](data.result)\n                delete pendingCalls[data.callId]\n              }\n            }\n            // Messages sent by the reveal.js inside of the current slide preview\n            else if (\n              data &&\n              data.namespace === "reveal"\n            ) {\n              if (/ready/.test(data.eventName)) {\n                // Send a message back to notify that the handshake is complete\n                window.opener.postMessage(\n                  JSON.stringify({\n                    namespace: "reveal-notes",\n                    type: "connected",\n                  }),\n                  "*"\n                )\n              } else if (\n                /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test(\n                  data.eventName\n                ) &&\n                currentState !==\n                  JSON.stringify(data.state)\n              ) {\n                window.opener.postMessage(\n                  JSON.stringify({\n                    method: "setState",\n                    args: [data.state],\n                  }),\n                  "*"\n                )\n              }\n            }\n          }\n        )\n\n        /**\n         * Asynchronously calls the Reveal.js API of the main frame.\n         */\n        function callRevealApi(\n          methodName,\n          methodArguments,\n          callback\n        ) {\n          var callId = ++lastRevealApiCallId\n          pendingCalls[callId] = callback\n          window.opener.postMessage(\n            JSON.stringify({\n              namespace: "reveal-notes",\n              type: "call",\n              callId: callId,\n              methodName: methodName,\n              arguments: methodArguments,\n            }),\n            "*"\n          )\n        }\n\n        /**\n         * Called when the main window is trying to establish a\n         * connection.\n         */\n        function handleConnectMessage(data) {\n          if (connected === false) {\n            connected = true\n\n            setupIframes(data)\n            setupKeyboard()\n            setupNotes()\n            setupTimer()\n            setupHeartbeat()\n          }\n        }\n\n        /**\n         * Called when the main window sends an updated state.\n         */\n        function handleStateMessage(data) {\n          // Store the most recently set state to avoid circular loops\n          // applying the same state\n          currentState = JSON.stringify(data.state)\n\n          // No need for updating the notes in case of fragment changes\n          if (data.notes) {\n            notes.classList.remove("hidden")\n            notesValue.style.whiteSpace =\n              data.whitespace\n            if (data.markdown) {\n              notesValue.innerHTML = marked(data.notes)\n            } else {\n              notesValue.innerHTML = data.notes\n            }\n          } else {\n            notes.classList.add("hidden")\n          }\n\n          // Update the note slides\n          currentSlide.contentWindow.postMessage(\n            JSON.stringify({\n              method: "setState",\n              args: [data.state],\n            }),\n            "*"\n          )\n          upcomingSlide.contentWindow.postMessage(\n            JSON.stringify({\n              method: "setState",\n              args: [data.state],\n            }),\n            "*"\n          )\n          upcomingSlide.contentWindow.postMessage(\n            JSON.stringify({ method: "next" }),\n            "*"\n          )\n        }\n\n        // Limit to max one state update per X ms\n        handleStateMessage = debounce(\n          handleStateMessage,\n          200\n        )\n\n        /**\n         * Forward keyboard events to the current slide window.\n         * This enables keyboard events to work even if focus\n         * isn\'t set on the current slide iframe.\n         *\n         * Block F5 default handling, it reloads and disconnects\n         * the speaker notes window.\n         */\n        function setupKeyboard() {\n          document.addEventListener(\n            "keydown",\n            function (event) {\n              if (\n                event.keyCode === 116 ||\n                (event.metaKey && event.keyCode === 82)\n              ) {\n                event.preventDefault()\n                return false\n              }\n              currentSlide.contentWindow.postMessage(\n                JSON.stringify({\n                  method: "triggerKey",\n                  args: [event.keyCode],\n                }),\n                "*"\n              )\n            }\n          )\n        }\n\n        /**\n         * Creates the preview iframes.\n         */\n        function setupIframes(data) {\n          var params = [\n            "receiver",\n            "progress=false",\n            "history=false",\n            "transition=none",\n            "autoSlide=0",\n            "backgroundTransition=none",\n          ].join("&")\n\n          var urlSeparator = /\\?/.test(data.url)\n            ? "&"\n            : "?"\n          var hash =\n            "#/" +\n            data.state.indexh +\n            "/" +\n            data.state.indexv\n          var currentURL =\n            data.url +\n            urlSeparator +\n            params +\n            "&postMessageEvents=true" +\n            hash\n          var upcomingURL =\n            data.url +\n            urlSeparator +\n            params +\n            "&controls=false" +\n            hash\n\n          currentSlide =\n            document.createElement("iframe")\n          currentSlide.setAttribute("width", 1280)\n          currentSlide.setAttribute("height", 1024)\n          currentSlide.setAttribute("src", currentURL)\n          document\n            .querySelector("#current-slide")\n            .appendChild(currentSlide)\n\n          upcomingSlide =\n            document.createElement("iframe")\n          upcomingSlide.setAttribute("width", 640)\n          upcomingSlide.setAttribute("height", 512)\n          upcomingSlide.setAttribute(\n            "src",\n            upcomingURL\n          )\n          document\n            .querySelector("#upcoming-slide")\n            .appendChild(upcomingSlide)\n        }\n\n        /**\n         * Setup the notes UI.\n         */\n        function setupNotes() {\n          notes = document.querySelector(\n            ".speaker-controls-notes"\n          )\n          notesValue = document.querySelector(\n            ".speaker-controls-notes .value"\n          )\n        }\n\n        /**\n         * We send out a heartbeat at all times to ensure we can\n         * reconnect with the main presentation window after reloads.\n         */\n        function setupHeartbeat() {\n          setInterval(() => {\n            window.opener.postMessage(\n              JSON.stringify({\n                namespace: "reveal-notes",\n                type: "heartbeat",\n              }),\n              "*"\n            )\n          }, 1000)\n        }\n\n        function getTimings(callback) {\n          callRevealApi(\n            "getSlidesAttributes",\n            [],\n            function (slideAttributes) {\n              callRevealApi(\n                "getConfig",\n                [],\n                function (config) {\n                  var totalTime = config.totalTime\n                  var minTimePerSlide =\n                    config.minimumTimePerSlide || 0\n                  var defaultTiming =\n                    config.defaultTiming\n                  if (\n                    defaultTiming == null &&\n                    totalTime == null\n                  ) {\n                    callback(null)\n                    return\n                  }\n                  // Setting totalTime overrides defaultTiming\n                  if (totalTime) {\n                    defaultTiming = 0\n                  }\n                  var timings = []\n                  for (var i in slideAttributes) {\n                    var slide = slideAttributes[i]\n                    var timing = defaultTiming\n                    if (\n                      slide.hasOwnProperty(\n                        "data-timing"\n                      )\n                    ) {\n                      var t = slide["data-timing"]\n                      timing = parseInt(t)\n                      if (isNaN(timing)) {\n                        console.warn(\n                          "Could not parse timing \'" +\n                            t +\n                            "\' of slide " +\n                            i +\n                            "; using default of " +\n                            defaultTiming\n                        )\n                        timing = defaultTiming\n                      }\n                    }\n                    timings.push(timing)\n                  }\n                  if (totalTime) {\n                    // After we\'ve allocated time to individual slides, we summarize it and\n                    // subtract it from the total time\n                    var remainingTime =\n                      totalTime -\n                      timings.reduce(function (a, b) {\n                        return a + b\n                      }, 0)\n                    // The remaining time is divided by the number of slides that have 0 seconds\n                    // allocated at the moment, giving the average time-per-slide on the remaining slides\n                    var remainingSlides =\n                      timings.filter(function (x) {\n                        return x == 0\n                      }).length\n                    var timePerSlide = Math.round(\n                      remainingTime / remainingSlides,\n                      0\n                    )\n                    // And now we replace every zero-value timing with that average\n                    timings = timings.map(function (\n                      x\n                    ) {\n                      return x == 0 ? timePerSlide : x\n                    })\n                  }\n                  var slidesUnderMinimum =\n                    timings.filter(function (x) {\n                      return x < minTimePerSlide\n                    }).length\n                  if (slidesUnderMinimum) {\n                    message =\n                      "The pacing time for " +\n                      slidesUnderMinimum +\n                      " slide(s) is under the configured minimum of " +\n                      minTimePerSlide +\n                      " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides)."\n                    alert(message)\n                  }\n                  callback(timings)\n                }\n              )\n            }\n          )\n        }\n\n        /**\n         * Return the number of seconds allocated for presenting\n         * all slides up to and including this one.\n         */\n        function getTimeAllocated(timings, callback) {\n          callRevealApi(\n            "getSlidePastCount",\n            [],\n            function (currentSlide) {\n              var allocated = 0\n              for (var i in timings.slice(\n                0,\n                currentSlide + 1\n              )) {\n                allocated += timings[i]\n              }\n              callback(allocated)\n            }\n          )\n        }\n\n        /**\n         * Create the timer and clock and start updating them\n         * at an interval.\n         */\n        function setupTimer() {\n          var start = new Date(),\n            timeEl = document.querySelector(\n              ".speaker-controls-time"\n            ),\n            clockEl = timeEl.querySelector(\n              ".clock-value"\n            ),\n            hoursEl = timeEl.querySelector(\n              ".hours-value"\n            ),\n            minutesEl = timeEl.querySelector(\n              ".minutes-value"\n            ),\n            secondsEl = timeEl.querySelector(\n              ".seconds-value"\n            ),\n            pacingTitleEl = timeEl.querySelector(\n              ".pacing-title"\n            ),\n            pacingEl = timeEl.querySelector(".pacing"),\n            pacingHoursEl = pacingEl.querySelector(\n              ".hours-value"\n            ),\n            pacingMinutesEl = pacingEl.querySelector(\n              ".minutes-value"\n            ),\n            pacingSecondsEl = pacingEl.querySelector(\n              ".seconds-value"\n            )\n\n          var timings = null\n          getTimings(function (_timings) {\n            timings = _timings\n            if (_timings !== null) {\n              pacingTitleEl.style.removeProperty(\n                "display"\n              )\n              pacingEl.style.removeProperty("display")\n            }\n\n            // Update once directly\n            _updateTimer()\n\n            // Then update every second\n            setInterval(_updateTimer, 1000)\n          })\n\n          function _resetTimer() {\n            if (timings == null) {\n              start = new Date()\n              _updateTimer()\n            } else {\n              // Reset timer to beginning of current slide\n              getTimeAllocated(\n                timings,\n                function (slideEndTimingSeconds) {\n                  var slideEndTiming =\n                    slideEndTimingSeconds * 1000\n                  callRevealApi(\n                    "getSlidePastCount",\n                    [],\n                    function (currentSlide) {\n                      var currentSlideTiming =\n                        timings[currentSlide] * 1000\n                      var previousSlidesTiming =\n                        slideEndTiming -\n                        currentSlideTiming\n                      var now = new Date()\n                      start = new Date(\n                        now.getTime() -\n                          previousSlidesTiming\n                      )\n                      _updateTimer()\n                    }\n                  )\n                }\n              )\n            }\n          }\n\n          timeEl.addEventListener(\n            "click",\n            function () {\n              _resetTimer()\n              return false\n            }\n          )\n\n          function _displayTime(\n            hrEl,\n            minEl,\n            secEl,\n            time\n          ) {\n            var sign = Math.sign(time) == -1 ? "-" : ""\n            time = Math.abs(Math.round(time / 1000))\n            var seconds = time % 60\n            var minutes = Math.floor(time / 60) % 60\n            var hours = Math.floor(time / (60 * 60))\n            hrEl.innerHTML =\n              sign + zeroPadInteger(hours)\n            if (hours == 0) {\n              hrEl.classList.add("mute")\n            } else {\n              hrEl.classList.remove("mute")\n            }\n            minEl.innerHTML =\n              ":" + zeroPadInteger(minutes)\n            if (hours == 0 && minutes == 0) {\n              minEl.classList.add("mute")\n            } else {\n              minEl.classList.remove("mute")\n            }\n            secEl.innerHTML =\n              ":" + zeroPadInteger(seconds)\n          }\n\n          function _updateTimer() {\n            var diff,\n              hours,\n              minutes,\n              seconds,\n              now = new Date()\n\n            diff = now.getTime() - start.getTime()\n\n            clockEl.innerHTML = now.toLocaleTimeString(\n              "en-US",\n              {\n                hour12: true,\n                hour: "2-digit",\n                minute: "2-digit",\n              }\n            )\n            _displayTime(\n              hoursEl,\n              minutesEl,\n              secondsEl,\n              diff\n            )\n            if (timings !== null) {\n              _updatePacing(diff)\n            }\n          }\n\n          function _updatePacing(diff) {\n            getTimeAllocated(\n              timings,\n              function (slideEndTimingSeconds) {\n                var slideEndTiming =\n                  slideEndTimingSeconds * 1000\n\n                callRevealApi(\n                  "getSlidePastCount",\n                  [],\n                  function (currentSlide) {\n                    var currentSlideTiming =\n                      timings[currentSlide] * 1000\n                    var timeLeftCurrentSlide =\n                      slideEndTiming - diff\n                    if (timeLeftCurrentSlide < 0) {\n                      pacingEl.className =\n                        "pacing behind"\n                    } else if (\n                      timeLeftCurrentSlide <\n                      currentSlideTiming\n                    ) {\n                      pacingEl.className =\n                        "pacing on-track"\n                    } else {\n                      pacingEl.className =\n                        "pacing ahead"\n                    }\n                    _displayTime(\n                      pacingHoursEl,\n                      pacingMinutesEl,\n                      pacingSecondsEl,\n                      timeLeftCurrentSlide\n                    )\n                  }\n                )\n              }\n            )\n          }\n        }\n\n        /**\n         * Sets up the speaker view layout and layout selector.\n         */\n        function setupLayout() {\n          layoutDropdown = document.querySelector(\n            ".speaker-layout-dropdown"\n          )\n          layoutLabel = document.querySelector(\n            ".speaker-layout-label"\n          )\n\n          // Render the list of available layouts\n          for (var id in SPEAKER_LAYOUTS) {\n            var option =\n              document.createElement("option")\n            option.setAttribute("value", id)\n            option.textContent = SPEAKER_LAYOUTS[id]\n            layoutDropdown.appendChild(option)\n          }\n\n          // Monitor the dropdown for changes\n          layoutDropdown.addEventListener(\n            "change",\n            function (event) {\n              setLayout(layoutDropdown.value)\n            },\n            false\n          )\n\n          // Restore any currently persisted layout\n          setLayout(getLayout())\n        }\n\n        /**\n         * Sets a new speaker view layout. The layout is persisted\n         * in local storage.\n         */\n        function setLayout(value) {\n          var title = SPEAKER_LAYOUTS[value]\n\n          layoutLabel.innerHTML =\n            "Layout" + (title ? ": " + title : "")\n          layoutDropdown.value = value\n\n          document.body.setAttribute(\n            "data-speaker-layout",\n            value\n          )\n\n          // Persist locally\n          if (supportsLocalStorage()) {\n            window.localStorage.setItem(\n              "reveal-speaker-layout",\n              value\n            )\n          }\n        }\n\n        /**\n         * Returns the ID of the most recently set speaker layout\n         * or our default layout if none has been set.\n         */\n        function getLayout() {\n          if (supportsLocalStorage()) {\n            var layout = window.localStorage.getItem(\n              "reveal-speaker-layout"\n            )\n            if (layout) {\n              return layout\n            }\n          }\n\n          // Default to the first record in the layouts hash\n          for (var id in SPEAKER_LAYOUTS) {\n            return id\n          }\n        }\n\n        function supportsLocalStorage() {\n          try {\n            localStorage.setItem("test", "test")\n            localStorage.removeItem("test")\n            return true\n          } catch (e) {\n            return false\n          }\n        }\n\n        function zeroPadInteger(num) {\n          var str = "00" + parseInt(num)\n          return str.substring(str.length - 2)\n        }\n\n        /**\n         * Limits the frequency at which a function can be called.\n         */\n        function debounce(fn, ms) {\n          var lastTime = 0,\n            timeout\n\n          return function () {\n            var args = arguments\n            var context = this\n\n            clearTimeout(timeout)\n\n            var timeSinceLastCall =\n              Date.now() - lastTime\n            if (timeSinceLastCall > ms) {\n              fn.apply(context, args)\n              lastTime = Date.now()\n            } else {\n              timeout = setTimeout(function () {\n                fn.apply(context, args)\n                lastTime = Date.now()\n              }, ms - timeSinceLastCall)\n            }\n          }\n        }\n      })()\n    </script>\n  </body>\n</html>\n'
        ),
        !t)
      )
        return void alert(
          "Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view."
        )
      ;(e = setInterval(function () {
        t.postMessage(
          JSON.stringify({
            namespace: "reveal-notes",
            type: "connect",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              window.location.search,
            state: n.getState(),
          }),
          "*"
        )
      }, 500)),
        window.addEventListener("message", i)
    }
  }
  function u(e) {
    var r = n.getCurrentSlide(),
      u = r.querySelector("aside.notes"),
      i = r.querySelector(".current-fragment"),
      a = {
        namespace: "reveal-notes",
        type: "state",
        notes: "",
        markdown: !1,
        whitespace: "normal",
        state: n.getState(),
      }
    if (
      (r.hasAttribute("data-notes") &&
        ((a.notes = r.getAttribute("data-notes")),
        (a.whitespace = "pre-wrap")),
      i)
    ) {
      var o = i.querySelector("aside.notes")
      o
        ? (u = o)
        : i.hasAttribute("data-notes") &&
          ((a.notes = i.getAttribute("data-notes")),
          (a.whitespace = "pre-wrap"),
          (u = null))
    }
    u &&
      ((a.notes = u.innerHTML),
      (a.markdown =
        "string" ==
        typeof u.getAttribute("data-markdown"))),
      t.postMessage(JSON.stringify(a), "*")
  }
  function i(r) {
    var u,
      i,
      o,
      l,
      s = JSON.parse(r.data)
    s &&
    "reveal-notes" === s.namespace &&
    "connected" === s.type
      ? (clearInterval(e), a())
      : s &&
        "reveal-notes" === s.namespace &&
        "call" === s.type &&
        ((u = s.methodName),
        (i = s.arguments),
        (o = s.callId),
        (l = n[u].apply(n, i)),
        t.postMessage(
          JSON.stringify({
            namespace: "reveal-notes",
            type: "return",
            result: l,
            callId: o,
          }),
          "*"
        ))
  }
  function a() {
    n.on("slidechanged", u),
      n.on("fragmentshown", u),
      n.on("fragmenthidden", u),
      n.on("overviewhidden", u),
      n.on("overviewshown", u),
      n.on("paused", u),
      n.on("resumed", u),
      u()
  }
  return {
    id: "notes",
    init: function (e) {
      ;(n = e),
        /receiver/i.test(window.location.search) ||
          (null !==
          window.location.search.match(
            /(\?|\&)notes/gi
          )
            ? r()
            : window.addEventListener(
                "message",
                function (e) {
                  if (!t) {
                    var n = JSON.parse(e.data)
                    n &&
                      "reveal-notes" === n.namespace &&
                      "heartbeat" === n.type &&
                      ((r = e.source),
                      t && !t.closed
                        ? t.focus()
                        : ((t = r),
                          window.addEventListener(
                            "message",
                            i
                          ),
                          a()))
                  }
                  var r
                }
              ),
          n.addKeyBinding(
            {
              keyCode: 83,
              key: "S",
              description: "Speaker notes view",
            },
            function () {
              r()
            }
          ))
    },
    open: r,
  }
}
