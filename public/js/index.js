! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 5)
}([function (e, t, n) {
    var r; /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    ! function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        var i = [],
            a = n.document,
            s = Object.getPrototypeOf,
            u = i.slice,
            l = i.concat,
            c = i.push,
            f = i.indexOf,
            p = {},
            d = p.toString,
            h = p.hasOwnProperty,
            g = h.toString,
            v = g.call(Object),
            m = {},
            y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            x = function (e) {
                return null != e && e === e.window
            },
            b = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var r, o, i = (n = n || a).createElement("script");
            if (i.text = e, t)
                for (r in b)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
        }
        var C = "3.4.1",
            k = function (e, t) {
                return new k.fn.init(e, t)
            },
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        k.fn = k.prototype = {
            jquery: C,
            constructor: k,
            length: 0,
            toArray: function () {
                return u.call(this)
            },
            get: function (e) {
                return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = k.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return k.each(this, e)
            },
            map: function (e) {
                return this.pushStack(k.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(u.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: i.sort,
            splice: i.splice
        }, k.extend = k.fn.extend = function () {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || k.isPlainObject(n) ? n : {}, o = !1, a[t] = k.extend(l, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, k.extend({
            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || g.call(n) !== v))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e, t) {
                w(e, {
                    nonce: t && t.nonce
                })
            },
            each: function (e, t) {
                var n, r = 0;
                if (S(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(E, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function (e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (S(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return l.apply([], a)
            },
            guid: 1,
            support: m
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = i[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase()
        });
        var j = function (e) {
            var t, n, r, o, i, a, s, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date,
                w = e.document,
                T = 0,
                C = 0,
                k = ue(),
                E = ue(),
                S = ue(),
                j = ue(),
                A = function (e, t) {
                    return e === t && (f = !0), 0
                },
                N = {}.hasOwnProperty,
                D = [],
                L = D.pop,
                q = D.push,
                O = D.push,
                H = D.slice,
                R = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                $ = "\\[" + P + "*(" + I + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + P + "*\\]",
                B = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                W = new RegExp(P + "+", "g"),
                F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                U = new RegExp("^" + P + "*," + P + "*"),
                _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                z = new RegExp(P + "|>"),
                X = new RegExp(B),
                V = new RegExp("^" + I + "$"),
                G = {
                    ID: new RegExp("^#(" + I + ")"),
                    CLASS: new RegExp("^\\.(" + I + ")"),
                    TAG: new RegExp("^(" + I + "|[*])"),
                    ATTR: new RegExp("^" + $),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                ne = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ie = function () {
                    p()
                },
                ae = be(function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(D = H.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: D.length ? function (e, t) {
                        q.apply(e, H.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function se(e, t, r, o) {
                var i, s, l, c, f, h, m, y = t && t.ownerDocument,
                    T = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                    if (11 !== T && (f = Z.exec(e)))
                        if (i = f[1]) {
                            if (9 === T) {
                                if (!(l = t.getElementById(i))) return r;
                                if (l.id === i) return r.push(l), r
                            } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                        } else {
                            if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), r
                        } if (n.qsa && !j[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e, y = t, 1 === T && z.test(e)) {
                            for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + xe(h[s]);
                            m = h.join(","), y = ee.test(e) && me(t.parentNode) || t
                        }
                        try {
                            return O.apply(r, y.querySelectorAll(m)), r
                        } catch (t) {
                            j(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(F, "$1"), t, r, o)
            }

            function ue() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function le(e) {
                return e[b] = !0, e
            }

            function ce(e) {
                var t = d.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
            }

            function pe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function de(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ge(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ve(e) {
                return le(function (t) {
                    return t = +t, le(function (n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {}, i = se.isXML = function (e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, p = se.setDocument = function (e) {
                    var t, o, a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement && (h = (d = a).documentElement, g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ce(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ce(function (e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    }), n.getById ? (r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, m = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                    }), ce(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", B)
                    }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, A = t ? function (e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? R(c, e) - R(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? R(c, e) - R(c, t) : 0;
                        if (o === i) return pe(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }), d
                }, se.matches = function (e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !j[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        j(t, !0)
                    }
                    return 0 < se(t, d, null, [e]).length
                }, se.contains = function (e, t) {
                    return (e.ownerDocument || e) !== d && p(e), x(e, t)
                }, se.attr = function (e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var o = r.attrHandle[t.toLowerCase()],
                        i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, se.escape = function (e) {
                    return (e + "").replace(re, oe)
                }, se.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function (e) {
                    var t, r = [],
                        o = 0,
                        i = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                        for (; t = e[i++];) t === e[i] && (o = r.push(i));
                        for (; o--;) e.splice(r[o], 1)
                    }
                    return c = null, e
                }, o = se.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += o(t);
                    return n
                }, (r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var o = se.attr(r, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function (e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (v) {
                                    if (i) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [T, d, x];
                                                break
                                            }
                                    } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                        for (;
                                            (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                    return (x -= o) === r || x % r == 0 && 0 <= x / r
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                                for (var r, i = o(e, t), a = i.length; a--;) e[r = R(e, i[a])] = !(n[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: le(function (e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(F, "$1"));
                            return r[b] ? le(function (e, t, n, o) {
                                for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function (e, o, i) {
                                return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: le(function (e) {
                            return function (t) {
                                return 0 < se(e, t).length
                            }
                        }),
                        contains: le(function (e) {
                            return e = e.replace(te, ne),
                                function (t) {
                                    return -1 < (t.textContent || o(t)).indexOf(e)
                                }
                        }),
                        lang: le(function (e) {
                            return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === h
                        },
                        focus: function (e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function (e) {
                            return Q.test(e.nodeName)
                        },
                        input: function (e) {
                            return J.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ve(function () {
                            return [0]
                        }),
                        last: ve(function (e, t) {
                            return [t - 1]
                        }),
                        eq: ve(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ve(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ve(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ve(function (e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: ve(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = de(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = he(t);

            function ye() {}

            function xe(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function be(e, t, n) {
                var r = t.dir,
                    o = t.next,
                    i = o || r,
                    a = n && "parentNode" === i,
                    s = C++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function (t, n, u) {
                    var l, c, f, p = [T, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = c[i]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                    if ((c[i] = p)[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function we(e) {
                return 1 < e.length ? function (t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function Te(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                return a
            }

            function Ce(e, t, n, r, o, i) {
                return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), le(function (i, a, s, u) {
                    var l, c, f, p = [],
                        d = [],
                        h = a.length,
                        g = i || function (e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? g : Te(g, p, e, s, u),
                        m = n ? o || (i ? e : h || r) ? [] : a : v;
                    if (n && n(v, m, s, u), r)
                        for (l = Te(m, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
                                o(null, m = [], l, u)
                            }
                            for (c = m.length; c--;)(f = m[c]) && -1 < (l = o ? R(i, f) : p[c]) && (i[l] = !(a[l] = f))
                        }
                    } else m = Te(m === a ? m.splice(h, m.length) : m), o ? o(null, a, m, u) : O.apply(a, m)
                })
            }

            function ke(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function (e) {
                        return e === t
                    }, s, !0), f = be(function (e) {
                        return -1 < R(t, e)
                    }, s, !0), p = [function (e, n, r) {
                        var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, o
                    }]; u < i; u++)
                    if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                            return Ce(1 < u && we(p), 1 < u && xe(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(F, "$1"), n, u < o && ke(e.slice(u, o)), o < i && ke(e = e.slice(o)), o < i && xe(e))
                        }
                        p.push(n)
                    } return we(p)
            }
            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function (e, t) {
                var n, o, i, a, s, u, l, c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    for (a in n && !(o = U.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = _.exec(s)) && (n = o.shift(), i.push({
                            value: n,
                            type: o[0].replace(F, " ")
                        }), s = s.slice(n.length)), r.filter) !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: a,
                        matches: o
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
            }, s = se.compile = function (e, t) {
                var n, o, i, s, u, c, f = [],
                    h = [],
                    v = S[e + " "];
                if (!v) {
                    for (t || (t = a(e)), n = t.length; n--;)(v = ke(t[n]))[b] ? f.push(v) : h.push(v);
                    (v = S(e, (o = h, s = 0 < (i = f).length, u = 0 < o.length, c = function (e, t, n, a, c) {
                        var f, h, v, m = 0,
                            y = "0",
                            x = e && [],
                            b = [],
                            w = l,
                            C = e || u && r.find.TAG("*", c),
                            k = T += null == w ? 1 : Math.random() || .1,
                            E = C.length;
                        for (c && (l = t === d || t || c); y !== E && null != (f = C[y]); y++) {
                            if (u && f) {
                                for (h = 0, t || f.ownerDocument === d || (p(f), n = !g); v = o[h++];)
                                    if (v(f, t || d, n)) {
                                        a.push(f);
                                        break
                                    } c && (T = k)
                            }
                            s && ((f = !v && f) && m--, e && x.push(f))
                        }
                        if (m += y, s && y !== m) {
                            for (h = 0; v = i[h++];) v(x, b, t, n);
                            if (e) {
                                if (0 < m)
                                    for (; y--;) x[y] || b[y] || (b[y] = L.call(a));
                                b = Te(b)
                            }
                            O.apply(a, b), c && !e && 0 < b.length && 1 < m + i.length && se.uniqueSort(a)
                        }
                        return c && (T = k, l = w), x
                    }, s ? le(c) : c))).selector = e
                }
                return v
            }, u = se.select = function (e, t, n, o) {
                var i, u, l, c, f, p = "function" == typeof e && e,
                    d = !o && a(e = p.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (2 < (u = d[0] = d[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                    }
                    for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                        if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                            if (u.splice(i, 1), !(e = o.length && xe(u))) return O.apply(n, o), n;
                            break
                        }
                }
                return (p || s(e, d))(o, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n
            }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
            }), ce(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ce(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ce(function (e) {
                return null == e.getAttribute("disabled")
            }) || fe(M, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), se
        }(n);
        k.find = j, k.expr = j.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = j.uniqueSort, k.text = j.getText, k.isXMLDoc = j.isXML, k.contains = j.contains, k.escapeSelector = j.escape;
        var A = function (e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && k(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            N = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            D = k.expr.match.needsContext;

        function L(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function O(e, t, n) {
            return y(t) ? k.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? k.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? k.grep(e, function (e) {
                return -1 < f.call(t, e) !== n
            }) : k.filter(t, e, n)
        }
        k.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, k.fn.extend({
            find: function (e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                    for (t = 0; t < r; t++)
                        if (k.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, o[t], n);
                return 1 < r ? k.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(O(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(O(this, e || [], !0))
            },
            is: function (e) {
                return !!O(this, "string" == typeof e && D.test(e) ? k(e) : e || [], !1).length
            }
        });
        var H, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || H, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : R.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), q.test(r[1]) && k.isPlainObject(t))
                        for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
        }).prototype = k.fn, H = k(a);
        var M = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function I(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        k.fn.extend({
            has: function (e) {
                var t = k(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (k.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && k(e);
                if (!D.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(1 < i.length ? k.uniqueSort(i) : i)
            },
            index: function (e) {
                return e ? "string" == typeof e ? f.call(k(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), k.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return A(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return A(e, "parentNode", n)
            },
            next: function (e) {
                return I(e, "nextSibling")
            },
            prev: function (e) {
                return I(e, "previousSibling")
            },
            nextAll: function (e) {
                return A(e, "nextSibling")
            },
            prevAll: function (e) {
                return A(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return A(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return A(e, "previousSibling", n)
            },
            siblings: function (e) {
                return N((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return N(e.firstChild)
            },
            contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (L(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
            }
        }, function (e, t) {
            k.fn[e] = function (n, r) {
                var o = k.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = k.filter(r, o)), 1 < this.length && (P[e] || k.uniqueSort(o), M.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var $ = /[^\x20\t\r\n\f]+/g;

        function B(e) {
            return e
        }

        function W(e) {
            throw e
        }

        function F(e, t, n, r) {
            var o;
            try {
                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        k.Callbacks = function (e) {
            var t, n;
            e = "string" == typeof e ? (t = e, n = {}, k.each(t.match($) || [], function (e, t) {
                n[t] = !0
            }), n) : k.extend({}, e);
            var r, o, i, a, s = [],
                u = [],
                l = -1,
                c = function () {
                    for (a = a || e.once, i = r = !0; u.length; l = -1)
                        for (o = u.shift(); ++l < s.length;) !1 === s[l].apply(o[0], o[1]) && e.stopOnFalse && (l = s.length, o = !1);
                    e.memory || (o = !1), r = !1, a && (s = o ? [] : "")
                },
                f = {
                    add: function () {
                        return s && (o && !r && (l = s.length - 1, u.push(o)), function t(n) {
                            k.each(n, function (n, r) {
                                y(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== T(r) && t(r)
                            })
                        }(arguments), o && !r && c()), this
                    },
                    remove: function () {
                        return k.each(arguments, function (e, t) {
                            for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function (e) {
                        return e ? -1 < k.inArray(e, s) : 0 < s.length
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return a = u = [], s = o = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return a = u = [], o || r || (s = o = ""), this
                    },
                    locked: function () {
                        return !!a
                    },
                    fireWith: function (e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                    },
                    fire: function () {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return f
        }, k.extend({
            Deferred: function (e) {
                var t = [
                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return o.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return k.Deferred(function (n) {
                                k.each(t, function (t, r) {
                                    var o = y(e[r[4]]) && e[r[4]];
                                    i[r[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, r, o) {
                            var i = 0;

                            function a(e, t, r, o) {
                                return function () {
                                    var s = this,
                                        u = arguments,
                                        l = function () {
                                            var n, l;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? o ? l.call(n, a(i, t, B, o), a(i, t, W, o)) : (i++, l.call(n, a(i, t, B, o), a(i, t, W, o), a(i, t, B, t.notifyWith))) : (r !== B && (s = void 0, u = [n]), (o || t.resolveWith)(s, u))
                                            }
                                        },
                                        c = o ? l : function () {
                                            try {
                                                l()
                                            } catch (n) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, c.stackTrace), i <= e + 1 && (r !== W && (s = void 0, u = [n]), t.rejectWith(s, u))
                                            }
                                        };
                                    e ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return k.Deferred(function (n) {
                                t[0][3].add(a(0, n, y(o) ? o : B, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : B)), t[2][3].add(a(0, n, y(r) ? r : W))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? k.extend(e, o) : o
                        }
                    },
                    i = {};
                return k.each(t, function (e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add(function () {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function () {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                }), o.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = u.call(arguments),
                    i = k.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, o[e] = 1 < arguments.length ? u.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                for (; n--;) F(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, k.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var _ = k.Deferred();

        function z() {
            a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), k.ready()
        }
        k.fn.ready = function (e) {
            return _.then(e).catch(function (e) {
                k.readyException(e)
            }), this
        }, k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || _.resolveWith(a, [k])
            }
        }), k.ready.then = _.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(k.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
        var X = function (e, t, n, r, o, i, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === T(n))
                    for (s in o = !0, n) X(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(k(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
            },
            V = /^-ms-/,
            G = /-([a-z])/g;

        function Y(e, t) {
            return t.toUpperCase()
        }

        function J(e) {
            return e.replace(V, "ms-").replace(G, Y)
        }
        var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = k.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[J(t)] = n;
                else
                    for (r in t) o[J(r)] = t[r];
                return o
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [t] : t.match($) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t)
            }
        };
        var Z = new K,
            ee = new K,
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;

        function re(e, t, n) {
            var r, o;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : te.test(o) ? JSON.parse(o) : o)
                    } catch (e) {}
                    ee.set(e, t, n)
                } else n = void 0;
            return n
        }
        k.extend({
            hasData: function (e) {
                return ee.hasData(e) || Z.hasData(e)
            },
            data: function (e, t, n) {
                return ee.access(e, t, n)
            },
            removeData: function (e, t) {
                ee.remove(e, t)
            },
            _data: function (e, t, n) {
                return Z.access(e, t, n)
            },
            _removeData: function (e, t) {
                Z.remove(e, t)
            }
        }), k.fn.extend({
            data: function (e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = ee.get(i), 1 === i.nodeType && !Z.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), re(i, r, o[r]));
                        Z.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    ee.set(this, e)
                }) : X(this, function (t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = ee.get(i, e)) ? n : void 0 !== (n = re(i, e)) ? n : void 0;
                    this.each(function () {
                        ee.set(this, e, t)
                    })
                }, null, t, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    ee.remove(this, e)
                })
            }
        }), k.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, k.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = k._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                    k.dequeue(e, t)
                }, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Z.get(e, n) || Z.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                        Z.remove(e, [t + "queue", n])
                    })
                })
            }
        }), k.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    k.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1,
                    o = k.Deferred(),
                    i = this,
                    a = this.length,
                    s = function () {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Z.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            se = a.documentElement,
            ue = function (e) {
                return k.contains(e.ownerDocument, e)
            },
            le = {
                composed: !0
            };
        se.getRootNode && (ue = function (e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
        });
        var ce = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ue(e) && "none" === k.css(e, "display")
            },
            fe = function (e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
                return o
            };

        function pe(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function () {
                    return r.cur()
                } : function () {
                    return k.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ie.exec(k.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
                c *= 2, k.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
        }
        var de = {};

        function he(e, t) {
            for (var n, r, o, i, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Z.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ce(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (u = de[s]) || (i = a.body.appendChild(a.createElement(s)), u = k.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), de[s] = u)))) : "none" !== n && (l[c] = "none", Z.set(r, "display", n)));
            for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
            return e
        }
        k.fn.extend({
            show: function () {
                return he(this, !0)
            },
            hide: function () {
                return he(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    ce(this) ? k(this).show() : k(this).hide()
                })
            }
        });
        var ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i,
            ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function xe(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? k.merge([e], n) : n
        }

        function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
        }
        ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
        var we, Te, Ce = /<|&#?\w+;/;

        function ke(e, t, n, r, o) {
            for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === T(i)) k.merge(p, i.nodeType ? [i] : i);
                    else if (Ce.test(i)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(i) || ["", ""])[1].toLowerCase(), u = ye[s] || ye._default, a.innerHTML = u[1] + k.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
                k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
            } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; i = p[d++];)
                if (r && -1 < k.inArray(i, r)) o && o.push(i);
                else if (l = ue(i), a = xe(f.appendChild(i), "script"), l && be(a), n)
                for (c = 0; i = a[c++];) me.test(i.type || "") && n.push(i);
            return f
        }
        we = a.createDocumentFragment().appendChild(a.createElement("div")), (Te = a.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), m.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
        var Ee = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            je = /^([^.]*)(?:\.(.+)|)/;

        function Ae() {
            return !0
        }

        function Ne() {
            return !1
        }

        function De(e, t) {
            return e === function () {
                try {
                    return a.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Le(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ne;
            else if (!o) return e;
            return 1 === i && (a = o, (o = function (e) {
                return k().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
                k.event.add(this, t, o, r, n)
            })
        }

        function qe(e, t, n) {
            n ? (Z.set(e, t, !1), k.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                    var r, o, i = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(k.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = u.call(arguments), Z.set(this, t, i), r = n(this, t), this[t](), i !== (o = Z.get(this, t)) || r ? Z.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else i.length && (Z.set(this, t, {
                        value: k.event.trigger(k.extend(i[0], k.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Z.get(e, t) && k.event.add(e, t, Ae)
        }
        k.event = {
            global: {},
            add: function (e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, v = Z.get(e);
                if (v)
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && k.find.matchesSelector(se, o), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                            return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match($) || [""]).length; l--;) d = g = (s = je.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && k.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            },
            remove: function (e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, v = Z.hasData(e) && Z.get(e);
                if (v && (u = v.events)) {
                    for (l = (t = (t || "").match($) || [""]).length; l--;)
                        if (d = g = (s = je.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                        } else
                            for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                    k.isEmptyObject(u) && Z.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, r, o, i, a, s = k.event.fix(e),
                    u = new Array(arguments.length),
                    l = (Z.get(this, "events") || {})[s.type] || [],
                    c = k.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = k.event.handlers.call(this, s, l), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((k.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function (e, t) {
                var n, r, o, i, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < k(o, this).index(l) : k.find(o, this, null, [l]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function (e, t) {
                Object.defineProperty(k.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[k.expando] ? e : new k.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && L(t, "input") && qe(t, "click", Ae), !1
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && L(t, "input") && qe(t, "click"), !0
                    },
                    _default: function (e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && L(t, "input") && Z.get(t, "click") || L(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, k.Event = function (e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, k.event.addProp), k.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            k.event.special[e] = {
                setup: function () {
                    return qe(this, e, De), !1
                },
                trigger: function () {
                    return qe(this, e), !0
                },
                delegateType: t
            }
        }), k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === this || k.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), k.fn.extend({
            on: function (e, t, n, r) {
                return Le(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return Le(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
                    k.event.remove(this, e, n, t)
                })
            }
        });
        var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            He = /<script|<style|<link/i,
            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Pe(e, t) {
            return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
        }

        function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function $e(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Be(e, t) {
            var n, r, o, i, a, s, u, l;
            if (1 === t.nodeType) {
                if (Z.hasData(e) && (i = Z.access(e), a = Z.set(t, i), l = i.events))
                    for (o in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[o].length; n < r; n++) k.event.add(t, o, l[o][n]);
                ee.hasData(e) && (s = ee.access(e), u = k.extend({}, s), ee.set(t, u))
            }
        }

        function We(e, t, n, r) {
            t = l.apply([], t);
            var o, i, a, s, u, c, f = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                g = y(h);
            if (g || 1 < p && "string" == typeof h && !m.checkClone && Re.test(h)) return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), We(i, t, n, r)
            });
            if (p && (i = (o = ke(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (s = (a = k.map(xe(o, "script"), Ie)).length; f < p; f++) u = o, f !== d && (u = k.clone(u, !0, !0), s && k.merge(a, xe(u, "script"))), n.call(e[f], u, f);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, k.map(a, $e), f = 0; f < s; f++) u = a[f], me.test(u.type || "") && !Z.access(u, "globalEval") && k.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : w(u.textContent.replace(Me, ""), u, c))
            }
            return e
        }

        function Fe(e, t, n) {
            for (var r, o = t ? k.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || k.cleanData(xe(r)), r.parentNode && (n && ue(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        k.extend({
            htmlPrefilter: function (e) {
                return e.replace(Oe, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                    f = ue(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                    for (a = xe(c), r = 0, o = (i = xe(e)).length; r < o; r++) s = i[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ge.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (i = i || xe(e), a = a || xe(c), r = 0, o = i.length; r < o; r++) Be(i[r], a[r]);
                    else Be(e, c);
                return 0 < (a = xe(c, "script")).length && be(a, !f && xe(e, "script")), c
            },
            cleanData: function (e) {
                for (var t, n, r, o = k.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (Q(n)) {
                        if (t = n[Z.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                            n[Z.expando] = void 0
                        }
                        n[ee.expando] && (n[ee.expando] = void 0)
                    }
            }
        }), k.fn.extend({
            detach: function (e) {
                return Fe(this, e, !0)
            },
            remove: function (e) {
                return Fe(this, e)
            },
            text: function (e) {
                return X(this, function (e) {
                    return void 0 === e ? k.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return We(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return We(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return We(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return We(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(xe(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return k.clone(this, e, t)
                })
            },
            html: function (e) {
                return X(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !He.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(xe(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return We(this, arguments, function (t) {
                    var n = this.parentNode;
                    k.inArray(this, e) < 0 && (k.cleanData(xe(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            k.fn[e] = function (e) {
                for (var n, r = [], o = k(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), k(o[a])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ue = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
            _e = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            ze = new RegExp(ae.join("|"), "i");

        function Xe(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || _e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ue(e) || (a = k.style(e, t)), !m.pixelBoxStyles() && Ue.test(a) && ze.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function Ve(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function () {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), se.removeChild(l), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, s, u, l = a.createElement("div"),
                c = a.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(m, {
                boxSizingReliable: function () {
                    return e(), o
                },
                pixelBoxStyles: function () {
                    return e(), s
                },
                pixelPosition: function () {
                    return e(), r
                },
                reliableMarginLeft: function () {
                    return e(), u
                },
                scrollboxSize: function () {
                    return e(), i
                }
            }))
        }();
        var Ge = ["Webkit", "Moz", "ms"],
            Ye = a.createElement("div").style,
            Je = {};

        function Qe(e) {
            return k.cssProps[e] || Je[e] || (e in Ye ? e : Je[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                    if ((e = Ge[n] + t) in Ye) return e
            }(e) || e)
        }
        var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function rt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + ae[a], !0, o)), r ? ("content" === n && (u -= k.css(e, "padding" + ae[a], !0, o)), "margin" !== n && (u -= k.css(e, "border" + ae[a] + "Width", !0, o))) : (u += k.css(e, "padding" + ae[a], !0, o), "padding" !== n ? u += k.css(e, "border" + ae[a] + "Width", !0, o) : s += k.css(e, "border" + ae[a] + "Width", !0, o));
            return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
        }

        function ot(e, t, n) {
            var r = _e(e),
                o = (!m.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
                i = o,
                a = Xe(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!m.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === k.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }

        function it(e, t, n, r, o) {
            return new it.prototype.init(e, t, n, r, o)
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Xe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = J(t),
                        u = Ze.test(t),
                        l = e.style;
                    if (u || (t = Qe(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                    "string" == (i = typeof n) && (o = ie.exec(n)) && o[1] && (n = pe(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (k.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var o, i, a, s = J(t);
                return Ze.test(t) || (t = Qe(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Xe(e, t, r)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), k.each(["height", "width"], function (e, t) {
            k.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Ke.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : fe(e, et, function () {
                        return ot(e, t, r)
                    })
                },
                set: function (e, n, r) {
                    var o, i = _e(e),
                        a = !m.scrollboxSize() && "absolute" === i.position,
                        s = (a || r) && "border-box" === k.css(e, "boxSizing", !1, i),
                        u = r ? rt(e, t, r, s, i) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - rt(e, t, "border", !1, i) - .5)), u && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = k.css(e, t)), nt(0, n, u)
                }
            }
        }), k.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - fe(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            k.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ae[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (k.cssHooks[e + t].set = nt)
        }), k.fn.extend({
            css: function (e, t) {
                return X(this, function (e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = _e(e), o = t.length; a < o; a++) i[t[a]] = k.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((k.Tween = it).prototype = {
            constructor: it,
            init: function (e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (k.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get ? e.get(this) : it.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = it.propHooks[this.prop];
                return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
            }
        }).init.prototype = it.prototype, (it.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = it.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, k.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, k.fx = it.prototype.init, k.fx.step = {};
        var at, st, ut, lt, ct = /^(?:toggle|show|hide)$/,
            ft = /queueHooks$/;

        function pt() {
            st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(pt) : n.setTimeout(pt, k.fx.interval), k.fx.tick())
        }

        function dt() {
            return n.setTimeout(function () {
                at = void 0
            }), at = Date.now()
        }

        function ht(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ae[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function gt(e, t, n) {
            for (var r, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function vt(e, t, n) {
            var r, o, i = 0,
                a = vt.prefilters.length,
                s = k.Deferred().always(function () {
                    delete u.elem
                }),
                u = function () {
                    if (o) return !1;
                    for (var t = at || dt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
                    return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: k.extend({}, t),
                    opts: k.extend(!0, {
                        specialEasing: {},
                        easing: k.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: at || dt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = k.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (function (e, t) {
                    var n, r, o, i, a;
                    for (n in e)
                        if (o = t[r = J(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                            for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                        else t[r] = o
                }(c, l.opts.specialEasing); i < a; i++)
                if (r = vt.prefilters[i].call(l, e, c, l.opts)) return y(r.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return k.map(c, gt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        k.Animation = k.extend(vt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return pe(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                y(e) ? (t = e, e = ["*"]) : e = e.match($);
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ce(e),
                    v = Z.get(e, "fxshow");
                for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function () {
                        p.always(function () {
                            a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (o = t[r], ct.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || k.style(e, r)
                    } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Z.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (he([e], !0), l = e.style.display || l, c = k.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Z.access(e, "fxshow", {
                        display: l
                    }), i && (v.hidden = !g), g && he([e], !0), p.done(function () {
                        for (r in g || he([e]), Z.remove(e, "fxshow"), d) k.style(e, r, d[r])
                    })), u = gt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function (e, t) {
                t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
            }
        }), k.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? k.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
            }, r
        }, k.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var o = k.isEmptyObject(e),
                    i = k.speed(t, n, r),
                    a = function () {
                        var t = vt(this, k.extend({}, e), i);
                        (o || Z.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = k.timers,
                        a = Z.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && ft.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || k.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Z.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = k.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, k.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), k.each(["toggle", "show", "hide"], function (e, t) {
            var n = k.fn[t];
            k.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, r, o)
            }
        }), k.each({
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            k.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), k.timers = [], k.fx.tick = function () {
            var e, t = 0,
                n = k.timers;
            for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), at = void 0
        }, k.fx.timer = function (e) {
            k.timers.push(e), k.fx.start()
        }, k.fx.interval = 13, k.fx.start = function () {
            st || (st = !0, pt())
        }, k.fx.stop = function () {
            st = null
        }, k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, k.fn.delay = function (e, t) {
            return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(o)
                }
            })
        }, ut = a.createElement("input"), lt = a.createElement("select").appendChild(a.createElement("option")), ut.type = "checkbox", m.checkOn = "" !== ut.value, m.optSelected = lt.selected, (ut = a.createElement("input")).value = "t", ut.type = "radio", m.radioValue = "t" === ut.value;
        var mt, yt = k.expr.attrHandle;
        k.fn.extend({
            attr: function (e, t) {
                return X(this, k.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    k.removeAttr(this, e)
                })
            }
        }), k.extend({
            attr: function (e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === i && k.isXMLDoc(e) || (o = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && L(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0,
                    o = t && t.match($);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), mt = {
            set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = yt[t] || k.find.attr;
            yt[t] = function (e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = yt[a], yt[a] = o, o = null != n(e, t, r) ? a : null, yt[a] = i), o
            }
        });
        var xt = /^(?:input|select|textarea|button)$/i,
            bt = /^(?:a|area)$/i;

        function wt(e) {
            return (e.match($) || []).join(" ")
        }

        function Tt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Ct(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
        }
        k.fn.extend({
            prop: function (e, t) {
                return X(this, k.prop, e, t, 1 < arguments.length)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[k.propFix[e] || e]
                })
            }
        }), k.extend({
            prop: function (e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (t = k.propFix[t] || t, o = k.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), m.optSelected || (k.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            k.propFix[this.toLowerCase()] = this
        }), k.fn.extend({
            addClass: function (e) {
                var t, n, r, o, i, a, s, u = 0;
                if (y(e)) return this.each(function (t) {
                    k(this).addClass(e.call(this, t, Tt(this)))
                });
                if ((t = Ct(e)).length)
                    for (; n = this[u++];)
                        if (o = Tt(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = wt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, o, i, a, s, u = 0;
                if (y(e)) return this.each(function (t) {
                    k(this).removeClass(e.call(this, t, Tt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = Ct(e)).length)
                    for (; n = this[u++];)
                        if (o = Tt(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                            o !== (s = wt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                    k(this).toggleClass(e.call(this, n, Tt(this), t), t)
                }) : this.each(function () {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = k(this), a = Ct(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = Tt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + wt(Tt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var kt = /\r/g;
        k.fn.extend({
            val: function (e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = y(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, k(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = k.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(kt, "") : null == n ? "" : n : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : wt(k.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? i + 1 : o.length;
                        for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function (e, t) {
                        for (var n, r, o = e.options, i = k.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), i)) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), k.each(["radio", "checkbox"], function () {
            k.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
                }
            }, m.checkOn || (k.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), m.focusin = "onfocusin" in n;
        var Et = /^(?:focusinfocus|focusoutblur)$/,
            St = function (e) {
                e.stopPropagation()
            };
        k.extend(k.event, {
            trigger: function (e, t, r, o) {
                var i, s, u, l, c, f, p, d, g = [r || a],
                    v = h.call(e, "type") ? e.type : e,
                    m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = d = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(v + k.event.triggered) && (-1 < v.indexOf(".") && (v = (m = v.split(".")).shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[k.expando] ? e : new k.Event(v, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : k.makeArray(t, [e]), p = k.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                    if (!o && !p.noBubble && !x(r)) {
                        for (l = p.delegateType || v, Et.test(l + v) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                        u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n)
                    }
                    for (i = 0;
                        (s = g[i++]) && !e.isPropagationStopped();) d = s, e.type = 1 < i ? l : p.bindType || v, (f = (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = v, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || c && y(r[v]) && !x(r) && ((u = r[c]) && (r[c] = null), k.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, St), r[v](), e.isPropagationStopped() && d.removeEventListener(v, St), k.event.triggered = void 0, u && (r[c] = u)), e.result
                }
            },
            simulate: function (e, t, n) {
                var r = k.extend(new k.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                k.event.trigger(r, null, t)
            }
        }), k.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    k.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0)
            }
        }), m.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                k.event.simulate(t, e.target, k.event.fix(e))
            };
            k.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        o = Z.access(r, t);
                    o || r.addEventListener(e, n, !0), Z.access(r, t, (o || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        o = Z.access(r, t) - 1;
                    o ? Z.access(r, t, o) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
                }
            }
        });
        var jt = n.location,
            At = Date.now(),
            Nt = /\?/;
        k.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
        };
        var Dt = /\[\]$/,
            Lt = /\r?\n/g,
            qt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;

        function Ht(e, t, n, r) {
            var o;
            if (Array.isArray(t)) k.each(t, function (t, o) {
                n || Dt.test(e) ? r(e, o) : Ht(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            });
            else if (n || "object" !== T(t)) r(e, t);
            else
                for (o in t) Ht(e + "[" + o + "]", t[o], n, r)
        }
        k.param = function (e, t) {
            var n, r = [],
                o = function (e, t) {
                    var n = y(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (n in e) Ht(n, e[n], t, o);
            return r.join("&")
        }, k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && Ot.test(this.nodeName) && !qt.test(e) && (this.checked || !ge.test(e))
                }).map(function (e, t) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Lt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Lt, "\r\n")
                    }
                }).get()
            }
        });
        var Rt = /%20/g,
            Mt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            Wt = {},
            Ft = {},
            Ut = "*/".concat("*"),
            _t = a.createElement("a");

        function zt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match($) || [];
                if (y(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Xt(e, t, n, r) {
            var o = {},
                i = e === Ft;

            function a(s) {
                var u;
                return o[s] = !0, k.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                }), u
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Vt(e, t) {
            var n, r, o = k.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && k.extend(!0, e, r), e
        }
        _t.href = jt.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, k.ajaxSettings), t) : Vt(k.ajaxSettings, e)
            },
            ajaxPrefilter: zt(Wt),
            ajaxTransport: zt(Ft),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, s, u, l, c, f, p, d, h = k.ajaxSetup({}, t),
                    g = h.context || h,
                    v = h.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                    m = k.Deferred(),
                    y = k.Callbacks("once memory"),
                    x = h.statusCode || {},
                    b = {},
                    w = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = It.exec(i);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return c ? i : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == c && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (c) C.always(e[C.status]);
                                else
                                    for (t in e) x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || T;
                            return r && r.abort(t), E(0, t), this
                        }
                    };
                if (m.promise(C), h.url = ((e || h.url || jt.href) + "").replace(Bt, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match($) || [""], null == h.crossDomain) {
                    l = a.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = _t.protocol + "//" + _t.host != l.protocol + "//" + l.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Xt(Wt, h, t, C), c) return C;
                for (p in (f = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), o = h.url.replace(Mt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Nt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Pt, "$1"), d = (Nt.test(o) ? "&" : "?") + "_=" + At++ + d), h.url = o + d), h.ifModified && (k.lastModified[o] && C.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && C.setRequestHeader("If-None-Match", k.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = Xt(Ft, h, t, C)) {
                    if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                    h.async && 0 < h.timeout && (u = n.setTimeout(function () {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, r.send(b, E)
                    } catch (e) {
                        if (c) throw e;
                        E(-1, e)
                    }
                } else E(-1, "No Transport");

                function E(e, t, a, s) {
                    var l, p, d, b, w, T = t;
                    c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", C.readyState = 0 < e ? 4 : 0, l = 200 <= e && e < 300 || 304 === e, a && (b = function (e, t, n) {
                        for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break
                                } if (u[0] in n) i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i]
                    }(h, C, a)), b = function (e, t, n, r) {
                        var o, i, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (i = c.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                                if ("*" === i) i = u;
                                else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                                for (o in l)
                                    if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (k.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (k.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --k.active || k.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return k.get(e, void 0, t, "script")
            }
        }), k.each(["get", "post"], function (e, t) {
            k[t] = function (e, n, r, o) {
                return y(n) && (o = o || r, r = n, n = void 0), k.ajax(k.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, k.isPlainObject(e) && e))
            }
        }), k._evalUrl = function (e, t) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (e) {
                    k.globalEval(e, t)
                }
            })
        }, k.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    k(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = k(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                    k(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    k(this).replaceWith(this.childNodes)
                }), this
            }
        }), k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e)
        }, k.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, k.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Gt = {
                0: 200,
                1223: 204
            },
            Yt = k.ajaxSettings.xhr();
        m.cors = !!Yt && "withCredentials" in Yt, m.ajax = Yt = !!Yt, k.ajaxTransport(function (e) {
            var t, r;
            if (m.cors || Yt && !e.crossDomain) return {
                send: function (o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (t) throw o
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return k.globalEval(e), e
                }
            }
        }), k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), k.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (r, o) {
                    t = k("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        });
        var Jt, Qt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Qt.pop() || k.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), k.ajaxPrefilter("json jsonp", function (e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Kt, "$1" + o) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || k.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === i ? k(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Qt.push(o)), a && y(i) && i(a[0]), a = i = void 0
            }), "script"
        }), m.createHTMLDocument = ((Jt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), k.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = !n && [], (o = q.exec(e)) ? [t.createElement(o[1])] : (o = ke([e], t, i), i && i.length && k(i).remove(), k.merge([], o.childNodes)));
            var r, o, i
        }, k.fn.load = function (e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = wt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && k.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                i = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            k.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), k.expr.pseudos.animated = function (e) {
            return k.grep(k.timers, function (t) {
                return e === t.elem
            }).length
        }, k.offset = {
            setOffset: function (e, t, n) {
                var r, o, i, a, s, u, l = k.css(e, "position"),
                    c = k(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), i = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, k.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    k.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0), o.left += k.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - k.css(r, "marginTop", !0),
                        left: t.left - o.left - k.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                    return e || se
                })
            }
        }), k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function (r) {
                return X(this, function (e, r, o) {
                    var i;
                    if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }, e, r, arguments.length)
            }
        }), k.each(["top", "left"], function (e, t) {
            k.cssHooks[t] = Ve(m.pixelPosition, function (e, n) {
                if (n) return n = Xe(e, t), Ue.test(n) ? k(e).position()[t] + "px" : n
            })
        }), k.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            k.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                k.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return X(this, function (t, n, o) {
                        var i;
                        return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? k.css(t, n, s) : k.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            k.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), k.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), k.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), k.proxy = function (e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = u.call(arguments, 2), (o = function () {
                return e.apply(t || this, r.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, o
        }, k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0)
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = L, k.isFunction = y, k.isWindow = x, k.camelCase = J, k.type = T, k.now = Date.now, k.isNumeric = function (e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function () {
            return k
        }.apply(t, [])) || (e.exports = r);
        var Zt = n.jQuery,
            en = n.$;
        return k.noConflict = function (e) {
            return n.$ === k && (n.$ = en), e && n.jQuery === k && (n.jQuery = Zt), k
        }, o || (n.jQuery = n.$ = k), k
    })
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(u, " */")),
                            i = r.sources.map(function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a, s, u;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")), t.push(s))
            }
        }, t
    }
}, function (e, t, n) {
    var r, o, i = {},
        a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }),
        s = function (e) {
            var t = {};
            return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function (e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        u = null,
        l = 0,
        c = [],
        f = n(8);

    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(y(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(y(r.parts[a], t));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function d(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function h(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1)
    }

    function v(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function () {
                0;
                return n.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return m(t, e.attrs), h(e, t), t
    }

    function m(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function y(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
            e.css = i
        }
        if (t.singleton) {
            var a = l++;
            n = u || (u = v(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = f(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function () {
            g(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = v(t), r = function (e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function () {
            g(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = d(e, t);
        return p(n, t),
            function (e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                e && p(d(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete i[s.id]
                    }
                }
            }
    };
    var x, b = (x = [], function (e, t) {
        return x[e] = t, x.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function (e, t, n) {
    (function (t) {
        function r(e, t) {
            this.msg = e, this.dismissTime = t || 1e3, this.creatToast(), this.showToast()
        }
        n(10), r.prototype = {
            creatToast: function () {
                var e = '<div class="toast">' + this.msg + "</div>";
                this.$toast = t(e), t("body").append(this.$toast)
            },
            showToast: function () {
                var e = this;
                this.$toast.fadeIn(300, function () {
                    setTimeout(function () {
                        e.$toast.fadeOut(300, function () {
                            e.$toast.remove()
                        })
                    }, e.dismissTime)
                })
            }
        }, e.exports.Toast = function (e, t) {
            return new r(e, t)
        }
    }).call(this, n(0))
}, function (e, t) {
    var n = function () {
        var e = {};
        return {
            on: function (t, n) {
                e[t] = e[t] || [], e[t].push({
                    handler: n
                })
            },
            fire: function (t, n) {
                if (e[t])
                    for (var r = 0; r < e[t].length; r++) e[t][r].handler(n)
            }
        }
    }();
    e.exports = n
}, function (e, t, n) {
    (function (e) {
        n(6);
        var t = n(9).NoteManager,
            r = n(4),
            o = n(15);
        t.load(), e(".add-note").on("click", function () {
            t.add()
        }), r.on("waterfall", function () {
            o.init(e("#content"))
        })
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(7);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, "html,\nbody {\n  margin: 0;\n  height: 100%;\n}\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nbody {\n  font: 14px/1.4 'Arial';\n}\na {\n  text-decoration: none;\n  color: #fff;\n}\n#header {\n  height: 30px;\n  font-size: 12px;\n}\n#header a {\n  display: block;\n  font-size: 12px;\n  margin-top: 6px;\n}\n#header .user-area {\n  padding-right: 16px;\n  float: right;\n}\n#header .user-area li {\n  float: left;\n  margin-left: 5px;\n}\n#header .user-area li span {\n  color: #fff;\n  display: block;\n  margin-top: 6px;\n}\n#header .user-area img {\n  height: 18px;\n  margin-top: 5px;\n  border-radius: 50%;\n}\n#header .setting {\n  float: right;\n  margin-left: 9px;\n  display: none;\n}\n#header .add-note {\n  float: left;\n  margin-left: 16px;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n#header .login {\n  float: right;\n  margin-left: 16px;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n#content {\n  position: relative;\n  height: -webkit-calc(70%);\n  height: calc(100% - 30px);\n}\n@keyframes move-twink-back {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -10000px 5000px;\n  }\n}\n.stars,\n.twinkling {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.stars {\n  background: #000 url(https://s2.ax1x.com/2019/06/25/ZV8gOg.jpg) repeat top center;\n  background-size: 100% 100%;\n  z-index: -2;\n}\n.twinkling {\n  background: transparent url(https://s2.ax1x.com/2019/06/25/ZV8gOg.jpg) repeat top center;\n  background-size: 100% 100%;\n  z-index: -1;\n  animation: move-twink-back 200s linear infinite;\n}\n", ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function (e, t, n) {
    (function (t) {
        var r = n(3).Toast,
            o = n(12).Note,
            i = (r = n(3).Toast, n(4)),
            a = function () {
                return {
                    load: function () {
                        t.get("/api/notes").done(function (e) {
                            0 == e.status ? (t.each(e.data, function (e, t) {
                                new o({
                                    id: t.id,
                                    context: t.text,
                                    username: t.username
                                })
                            }), i.fire("waterfall")) : r(e.errorMsg)
                        }).fail(function () {
                            r("网络异常")
                        })
                    },
                    add: function () {
                        new o
                    }
                }
            }();
        e.exports.NoteManager = a
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(11);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".toast {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 20px;\n  color: #D15A39;\n  background: #fff;\n  padding: 5px 10px;\n  border-radius: 3px;\n  box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.6);\n  display: none;\n}\n", ""])
}, function (e, t, n) {
    (function (t) {
        n(13);
        var r = n(3).Toast,
            o = n(4);

        function i(e) {
            this.initOpts(e), this.createNote(), this.setStyle(), this.bindEvent()
        }
        i.prototype = {
            colors: [
                ["#ea9b35", "#efb04e"],
                ["#dd598b", "#e672a2"],
                ["#eee34b", "#f2eb67"],
                ["#c24226", "#d15a39"],
                ["#c1c341", "#d0d25c"],
                ["#3f78c3", "#5591d2"]
            ],
            defaultOpts: {
                id: "",
                $ct: t("#content").length > 0 ? t("#content") : t("body"),
                context: "这里填写内容"
            },
            initOpts: function (e) {
                this.opts = t.extend({}, this.defaultOpts, e || {}), this.opts.id && (this.id = this.opts.id)
            },
            createNote: function () {
                this.$note = t('<div class="note"><div class="note-snag"></div><div class="note-before"></div><div class="note-head"><span class="username"></span><span class="delete">&times;</span></div><div class="note-ct" contenteditable="true"></div><div class="note-bottom"><div class="note-after"></div></div></div>'), this.$note.find(".note-ct").text(this.opts.context), this.$note.find(".username").text(this.opts.username), this.opts.$ct.append(this.$note), this.id || this.$note.css("bottom", "10px")
            },
            setStyle: function () {
                var e = this.colors[Math.floor(6 * Math.random())];
                this.$note.find(".note-head").css("background-color", e[0]), this.$note.find(".note-after").css("background-color", e[1]), this.$note.find(".note-bottom").css("background-color", e[1]), this.$note.find(".note-before").css("background-color", e[0]), this.$note.find(".note-ct").css("background-color", e[1])
            },
            setLayout: function () {
                this.clk && clearTimeout(this.clk), this.clk = setTimeout(function () {
                    o.fire("waterfall")
                }, 100)
            },
            bindEvent: function () {
                var e = this,
                    n = this.$note,
                    r = n.find(".note-head"),
                    o = n.find(".note-ct");
                n.find(".delete").on("click", function () {
                    e.delete()
                }), o.on("focus", function () {
                    "这里填写内容" == o.html() && o.html(""), o.data("before", o.html())
                }).on("blur paste", function () {
                    o.data("before") != o.html() && (o.data("before", o.html()), e.setLayout(), e.id ? e.edit(o.html()) : e.add(o.html()))
                }), r.on("mousedown", function (e) {
                    var t = e.pageX - n.offset().left,
                        r = e.pageY - n.offset().top;
                    n.addClass("draggable").data("evtPos", {
                        x: t,
                        y: r
                    })
                }).on("mouseup", function () {
                    n.removeClass("draggable").removeData("pos")
                }), t("body").on("mousemove", function (e) {
                    t(".draggable").length && t(".draggable").offset({
                        top: e.pageY - t(".draggable").data("evtPos").y,
                        left: e.pageX - t(".draggable").data("evtPos").x
                    })
                })
            },
            edit: function (e) {
                t.post("/api/notes/edit", {
                    id: this.id,
                    note: e
                }).done(function (e) {
                    0 === e.status ? r("修改成功") : r(e.errorMsg)
                })
            },
            add: function (e) {
                console.log("addd...");
                var n = this;
                t.post("/api/notes/add", {
                    note: e
                }).done(function (e) {
                    0 === e.status ? r("添加成功") : (n.$note.remove(), o.fire("waterfall"), r(e.errorMsg))
                })
            },
            delete: function () {
                var e = this;
                t.post("/api/notes/delete", {
                    id: this.id
                }).done(function (t) {
                    0 === t.status ? (r("删除成功"), e.$note.remove(), o.fire("waterfall")) : r(t.errorMsg)
                })
            }
        }, e.exports.Note = i
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(14);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".note {\n  color: #333;\n  position: absolute;\n  width: 160px;\n  border-radius: 10px 10px 0px 0px;\n  margin: 30px 10px;\n  transition: all 0.5s ease;\n}\n.note .note-snag {\n  position: absolute;\n  top: -20px;\n  left: 48%;\n  width: 18px;\n  height: 21px;\n  background-image: url(https://dk7jqzmygmr3q.cloudfront.net/ml/neducatio/5b633eca-5c8f-4d4b-8ce0-cf9618e9aec6.image?v=1&type=png);\n  background-size: cover;\n  z-index: 1;\n}\n.note .note-before {\n  content: \"\";\n  background: #ffe168;\n  border-bottom: 20px solid #f0af1f;\n  border-right: 20px solid transparent;\n  width: 140px;\n  position: absolute;\n  bottom: -20px;\n  right: 10px;\n  transform: skew(-45deg);\n}\n.note .note-head {\n  background-color: #ea9b35;\n  cursor: move;\n  color: #666;\n  height: 20px;\n  width: 100%;\n  padding: 5px 0px;\n  border-radius: 10px 10px 0px 0px;\n  text-align: center;\n  font-size: 20px;\n  transition: background 0.5s ease;\n}\n.note .note-head:hover .delete {\n  opacity: 1;\n}\n.note .note-head:before {\n  position: absolute;\n  left: 50%;\n  top: -11px;\n  margin-left: -32px;\n  content: ' ';\n  display: block;\n  width: 64px;\n  height: 18px;\n  background: #35bba3;\n}\n.note .note-head:after {\n  position: absolute;\n  left: 50%;\n  margin-left: 32px;\n  top: -11px;\n  z-index: -1;\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid #299683;\n  border-top: 18px solid transparent;\n}\n.note .note-ct {\n  padding: 10px;\n  background-color: #efb04e;\n  outline: none;\n}\n.note .delete {\n  position: absolute;\n  top: -2px;\n  right: 5px;\n  font-size: 20px;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.3s;\n}\n.note-bottom {\n  position: absolute;\n  right: 20px;\n  bottom: -20px;\n  border-bottom: 20px solid rgba(0, 0, 0, 0);\n  border-left: 20px solid transparent;\n}\n.note-bottom .note-after {\n  content: '';\n  background: #f0af1f;\n  width: 120px;\n  height: 20px;\n  position: absolute;\n  bottom: -20px;\n  right: 20px;\n}\n.draggable {\n  opacity: 0.5;\n  cursor: move;\n  transition: none;\n}\n", ""])
}, function (e, t, n) {
    (function (t) {
        var n = function () {
            var e, n;

            function r(r) {
                for (var o = (n = (e = r).children()).outerWidth(!0), i = parseInt(t(window).width() / o), a = [], s = 0; s < i; s++) a.push(0);
                n.each(function () {
                    for (var e = t(this), n = 0, r = a[0], i = 0; i < a.length; i++) a[i] < r && (n = i, r = a[i]);
                    e.css({
                        left: o * n,
                        top: r
                    }), a[n] = e.outerHeight(!0) + a[n]
                })
            }
            return t(window).on("resize", function () {
                r(e)
            }), {
                init: r
            }
        }();
        e.exports = n
    }).call(this, n(0))
}]);