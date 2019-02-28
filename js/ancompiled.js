var WOW;
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        f = d.toString,
        h = f.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n)
            for (r in v) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = function(e, t) {
            return new w.fn.init(e, t)
        },
        _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || f.call(n) !== h))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(_, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (x(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return a.apply([], s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var S = function(e) {
        var t, n, i, r, o, a, s, l, c, u, d, f, h, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = e.document,
            x = 0,
            S = 0,
            T = ae(),
            C = ae(),
            E = ae(),
            k = function(e, t) {
                return e === t && (d = !0), 0
            },
            O = {}.hasOwnProperty,
            A = [],
            P = A.pop,
            D = A.push,
            I = A.push,
            N = A.slice,
            L = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
            W = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            R = new RegExp(M + "+", "g"),
            q = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            V = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            Y = new RegExp("^" + H + "$"),
            U = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            z = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                f()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(A = N.call(_.childNodes), _.childNodes), A[_.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: A.length ? function(e, t) {
                    D.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, s, c, u, d, p, v, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!r && ((t ? t.ownerDocument || t : _) !== h && f(t), t = t || h, g)) {
                if (11 !== x && (d = G.exec(e)))
                    if (o = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
                    if (1 !== x) y = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + ve(p[s]);
                        v = p.join(","), y = Z.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return I.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {} finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, i, r)
        }

        function ae() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function se(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return se(function(t) {
                return t = +t, se(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = oe.setDocument = function(e) {
                var t, r, a = e ? e.ownerDocument || e : _;
                return a !== h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), _ !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = le(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = le(function(e) {
                    return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = K.test(h.querySelectorAll)) && (le(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === _ && b(_, e) ? -1 : t === h || t.ownerDocument === _ && b(_, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                    if (r === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? ue(a[i], s[i]) : a[i] === _ ? -1 : s[i] === _ ? 1 : 0
                }, h) : h
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && f(e), t = t.replace(V, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return oe(t, h, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && f(e), b(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== h && f(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && O.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(k), d) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: U,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = oe.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (h = (c = (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            u[e] = [x, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b)
                                    for (;
                                        (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]), f !== t)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) e[i = L(e, o[a])] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            i = s(e.replace(q, "$1"));
                        return i[w] ? se(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(J, ee),
                            function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = fe(t);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = S++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, d, f = [x, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === s) return f[2] = c[2];
                                if (u[o] = f, f[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function _e(e, t, n, i, r, o) {
            return i && !i[w] && (i = _e(i)), r && !r[w] && (r = _e(r, o)), se(function(o, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : we(g, f, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i)
                    for (c = we(v, h), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && (c = r ? L(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else v = we(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : I.apply(a, v)
            })
        }

        function xe(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = ye(function(e) {
                    return e === t
                }, s, !0), d = ye(function(e) {
                    return L(t, e) > -1
                }, s, !0), f = [function(e, n, i) {
                    var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) f = [ye(be(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return _e(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && ve(e))
                    }
                    f.push(n)
                }
            return be(f)
        }

        function Se(e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function(o, a, s, l, u) {
                    var d, p, m, v = 0,
                        y = "0",
                        b = o && [],
                        w = [],
                        _ = c,
                        S = o || r && i.find.TAG("*", u),
                        T = x += null == _ ? 1 : Math.random() || .1,
                        C = S.length;
                    for (u && (c = a === h || a || u); y !== C && null != (d = S[y]); y++) {
                        if (r && d) {
                            for (p = 0, a || d.ownerDocument === h || (f(d), s = !g); m = e[p++];)
                                if (m(d, a || h, s)) {
                                    l.push(d);
                                    break
                                }
                            u && (x = T)
                        }
                        n && ((d = !m && d) && v--, o && b.push(d))
                    }
                    if (v += y, n && y !== v) {
                        for (p = 0; m = t[p++];) m(b, w, a, s);
                        if (o) {
                            if (v > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = P.call(l));
                            w = we(w)
                        }
                        I.apply(l, w), u && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                    }
                    return u && (x = T, c = _), b
                };
            return n ? se(o) : o
        }
        return me.prototype = i.filters = i.pseudos, i.setFilters = new me, a = oe.tokenize = function(e, t) {
            var n, r, o, a, s, l, c, u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(r = F.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(q, " ")
                    }), s = s.slice(n.length)), i.filter) !(r = U[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : C(e, l).slice(0)
        }, s = oe.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = E[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = xe(t[n]))[w] ? i.push(o) : r.push(o);
                (o = E(e, Se(r, i))).selector = e
            }
            return o
        }, l = oe.select = function(e, t, n, r) {
            var o, l, c, u, d, f = "function" == typeof e && e,
                h = !r && a(e = f.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = U.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((d = i.find[u]) && (r = d(c.matches[0].replace(J, ee), Z.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && ve(l))) return I.apply(n, r), n;
                        break
                    }
            }
            return (f || s(e, h))(r, t, !g, n, !t || Z.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(j, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    w.find = S, w.expr = S.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = S.uniqueSort, w.text = S.getText, w.isXMLDoc = S.isXML, w.contains = S.contains, w.escapeSelector = S.escape;
    var T = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && w(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        E = w.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, t, n) {
        return g(t) ? w.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
            return i > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
        }
    });
    var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), O.test(r[1]) && w.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, P = w(i);
    var I = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!E.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, i) {
            var r = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (N[e] || w.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function $(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return w.each(e.match(j) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : w.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            s = -1,
            l = function() {
                for (r = r || e.once, i = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function(n, i) {
                            g(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        for (var n;
                            (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? r ? c.call(e, a(o, n, M, r), a(o, n, H, r)) : (o++, c.call(e, a(o, n, M, r), a(o, n, H, r), a(o, n, M, n.notifyWith))) : (i !== M && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== H && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(r) ? r : M, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : M)), n[2][3].add(a(0, e, g(i) ? i : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(r[n] && r[n].then))) return a.then();
            for (; n--;) $(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var R = w.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), w.ready()
    }
    w.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || R.resolveWith(i, [w]))
        }
    }), w.ready.then = R.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
    var F = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in r = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, g(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        B = /^-ms-/,
        V = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(B, "ms-").replace(V, X)
    }
    var U = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function z() {
        this.expando = w.expando + z.uid++
    }
    z.uid = 1, z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[Y(t)] = n;
            else
                for (i in t) r[Y(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(j) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Q = new z,
        K = new z,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), J(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : F(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = J(o, e))) return n
                } else this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                w.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        re = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return w.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) w.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = ae[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ae[i] = r, r)
    }

    function le(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Q.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = se(i))) : "none" !== n && (r[o] = "none", Q.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var ge = /<|&#?\w+;/;

    function me(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) w.merge(f, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = fe[s] || fe._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            w.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];)
            if (i && w.inArray(o, i) > -1) r && r.push(o);
            else if (c = w.contains(o.ownerDocument, o), a = he(d.appendChild(o), "script"), c && pe(a), n)
            for (u = 0; o = a[u++];) de.test(o.type || "") && n.push(o);
        return d
    }! function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ve = i.documentElement,
        ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function _e() {
        return !0
    }

    function xe() {
        return !1
    }

    function Se() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function Te(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, r, i, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = Q.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(ve, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(j) || [""]).length; c--;) h = g = (s = we.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = w.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = w.event.special[h] || {}, u = w.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), w.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--;)
                    if (h = g = (s = we.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = w.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || w.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(e, h + t[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = w.event.fix(e),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[s.type] || [],
                u = w.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = w.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, i) {
            return Te(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) w.event.add(t, r, c[r][n]);
            K.hasData(e) && (s = K.access(e), l = w.extend({}, s), K.set(t, l))
        }
    }

    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Le(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, c, u, d = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = g(m);
        if (v || f > 1 && "string" == typeof m && !p.checkClone && ke.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), Le(o, t, n, i)
        });
        if (f && (o = (r = me(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (s = w.map(he(r, "script"), Pe)).length; d < f; d++) c = r, d !== h && (c = w.clone(c, !0, !0), l && w.merge(s, he(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, w.map(s, De), d = 0; d < l; d++) c = s[d], de.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Oe, ""), u, c))
        }
        return e
    }

    function je(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(he(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = w.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = he(s), i = 0, r = (o = he(e)).length; i < r; i++) Ne(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || he(e), a = a || he(s), i = 0, r = o.length; i < r; i++) Ie(o[i], a[i]);
                else Ie(e, s);
            return (a = he(s, "script")).length > 0 && pe(a, !l && he(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (U(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return je(this, e, !0)
        },
        remove: function(e) {
            return je(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(he(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        $e = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !p.pixelBoxStyles() && Me.test(a) && $e.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Re(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", a = 36 === u.offsetWidth || "absolute", ve.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, a, s, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var qe = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "Moz", "ms"],
        Ye = i.createElement("div").style;

    function Ue(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = function(e) {
            if (e in Ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ye) return e
        }(e) || e), t
    }

    function ze(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, r) : s += w.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
    }

    function Ke(e, t, n) {
        var i = He(e),
            r = We(e, t, i),
            o = "border-box" === w.css(e, "boxSizing", !1, i),
            a = o;
        if (Me.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return a = a && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
    }

    function Ge(e, t, n, i, r) {
        return new Ge.prototype.init(e, t, n, i, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = Y(t),
                    l = Fe.test(t),
                    c = e.style;
                if (l || (t = Ue(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = Y(t);
            return Fe.test(t) || (t = Ue(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = We(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : re(e, Be, function() {
                    return Ke(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = He(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = i && Qe(e, t, i, a, o);
                return a && p.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), s && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), ze(0, n, s)
            }
        }
    }), w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = ze)
    }), w.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; a < r; a++) o[t[a]] = w.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), w.Tween = Ge, Ge.prototype = {
        constructor: Ge,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Ge.prototype.init, w.fx.step = {};
    var Ze, Je, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function nt() {
        Je && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, w.fx.interval), w.fx.tick())
    }

    function it() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function rt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, n) {
        for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function at(e, t, n) {
        var i, r, o = 0,
            a = at.prefilters.length,
            s = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Ze || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || it(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = Y(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = w.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); o < a; o++)
            if (i = at.prefilters[o].call(c, e, u, c.opts)) return g(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, ot, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(at, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(j);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && ie(e),
                    m = Q.get(e, "fxshow");
                for (i in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, f.always(function() {
                        f.always(function() {
                            a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (r = t[i], et.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        h[i] = m && m[i] || w.style(e, i)
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                    for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (f.done(function() {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                        display: c
                    }), o && (m.hidden = !g), g && le([e], !0), f.done(function() {
                        for (i in g || le([e]), Q.remove(e, "fxshow"), h) w.style(e, i, h[i])
                    })), l = ot(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), w.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
            }, i
        }, w.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ie).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = w.isEmptyObject(e),
                    o = w.speed(t, n, i),
                    a = function() {
                        var t = at(this, w.extend({}, e), o);
                        (r || Q.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = w.timers,
                        a = Q.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && tt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Q.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = w.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
            }
        }), w.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            w.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                n = w.timers;
            for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), Ze = void 0
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            Je || (Je = !0, nt())
        }, w.fx.stop = function() {
            Je = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, n) {
            return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var st, lt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return F(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(j);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), st = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || w.find.attr;
        lt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = lt[a], lt[a] = r, r = null != n(e, t, i) ? a : null, lt[a] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(j) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ht(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return F(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, ft(this)))
            });
            if ((t = ht(e)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = dt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ht(e)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (s = dt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, ft(this), t), t)
            }) : this.each(function() {
                var t, r, o, a;
                if (i)
                    for (r = 0, o = w(this), a = ht(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ft(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + dt(ft(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : dt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), a = r.length; a--;)((i = r[a]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        mt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, r, o) {
            var a, s, l, c, u, f, h, p, v = [r || i],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[y] || {}, o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!o && !h.noBubble && !m(r)) {
                    for (c = h.delegateType || y, gt.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = a > 1 ? c : h.bindType || y, (f = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && U(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !U(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, mt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, mt), w.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Q.access(i, t);
                r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Q.access(i, t) - 1;
                r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
            }
        }
    });
    var vt = e.location,
        yt = Date.now(),
        bt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var wt = /\[\]$/,
        _t = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Tt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) w.each(t, function(t, r) {
            n || wt.test(e) ? i(e, r) : Tt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) Tt(e + "[" + r + "]", t[r], n, i)
    }
    w.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Tt(n, e[n], t, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && St.test(this.nodeName) && !xt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var Ct = /%20/g,
        Et = /#.*$/,
        kt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        At = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Dt = {},
        It = {},
        Nt = "*/".concat("*"),
        Lt = i.createElement("a");

    function jt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(j) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Mt(e, t, n, i) {
        var r = {},
            o = e === It;

        function a(s) {
            var l;
            return r[s] = !0, w.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Ht(e, t) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Lt.href = vt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
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
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, w.ajaxSettings), t) : Ht(w.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Dt),
        ajaxTransport: jt(It),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, f, h, p = w.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = p.statusCode || {},
                _ = {},
                x = {},
                S = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(T), p.url = ((t || p.url || vt.href) + "").replace(Pt, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Mt(Dt, p, n, T), u) return T;
            for (f in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !At.test(p.type), o = p.url.replace(Et, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ct, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (bt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(kt, "$1"), h = (bt.test(o) ? "&" : "?") + "_=" + yt++ + h), p.url = o + h), p.ifModified && (w.lastModified[o] && T.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u)) return T.abort();
            if (S = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = Mt(It, p, n, T)) {
                if (T.readyState = 1, d && m.trigger("ajaxSend", [T, p]), u) return T;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(_, C)
                } catch (e) {
                    if (u) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, s) {
                var c, f, h, _, x, S = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = function(e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, T, i)), _ = function(e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, _, T, c), c ? (p.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (w.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (w.etag[o] = x)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = _.state, f = _.data, c = !(h = _.error))) : (h = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || S) + "", c ? v.resolveWith(g, [f, S, T]) : v.rejectWith(g, [T, S, h]), T.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : h]), y.fireWith(g, [T, S]), d && (m.trigger("ajaxComplete", [T, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var $t = {
            0: 200,
            1223: 204
        },
        Wt = w.ajaxSettings.xhr();
    p.cors = !!Wt && "withCredentials" in Wt, p.ajax = Wt = !!Wt, w.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Wt && !t.crossDomain) return {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, o) {
                t = w("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Rt = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || w.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || w.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Rt.push(r)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = O.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = me([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
        var r, o, a
    }, w.fn.load = function(e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = dt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c = w.css(e, "position"),
                u = w(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(i, "marginTop", !0),
                    left: t.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(i) {
            return F(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Re(p.pixelPosition, function(e, n) {
            if (n) return n = We(e, t), Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            w.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return F(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, s) : w.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, r
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = g, w.isWindow = m, w.camelCase = Y, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Ft = e.jQuery,
        Bt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Bt), t && e.jQuery === w && (e.jQuery = Ft), w
    }, t || (e.jQuery = e.$ = w), w
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var r = t(e),
            o = r.overflow,
            a = r.overflowX,
            s = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e))
    }

    function r(e) {
        return 11 === e ? Y : 10 === e ? U : Y || U
    }

    function o(e) {
        if (!e) return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var a = i && i.nodeName;
        return a && "BODY" !== a && "HTML" !== a ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(r, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(r)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(c) ? c : o(c);
        var u = a(e);
        return u.host ? s(u.host, t) : s(e, a(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = l(t, "top"),
            r = l(t, "left"),
            o = n ? -1 : 1;
        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function d(e, t, n, i) {
        return R(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function f(e) {
        var t = e.body,
            n = e.documentElement,
            i = r(10) && getComputedStyle(n);
        return {
            height: d("Height", t, n, i),
            width: d("Width", t, n, i)
        }
    }

    function h(e) {
        return G({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function p(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"),
                    o = l(e, "left");
                n.top += i, n.left += o, n.bottom += i, n.right += o
            } else n = e.getBoundingClientRect()
        } catch (e) {}
        var a = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            s = "HTML" === e.nodeName ? f(e.ownerDocument) : {},
            c = s.width || e.clientWidth || a.right - a.left,
            d = s.height || e.clientHeight || a.bottom - a.top,
            p = e.offsetWidth - c,
            g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"), g -= u(m, "y"), a.width -= p, a.height -= g
        }
        return h(a)
    }

    function g(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            a = r(10),
            s = "HTML" === n.nodeName,
            l = p(e),
            u = p(n),
            d = i(e),
            f = t(n),
            g = parseFloat(f.borderTopWidth, 10),
            m = parseFloat(f.borderLeftWidth, 10);
        o && s && (u.top = R(u.top, 0), u.left = R(u.left, 0));
        var v = h({
            top: l.top - u.top - g,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0, v.marginLeft = 0, !a && s) {
            var y = parseFloat(f.marginTop, 10),
                b = parseFloat(f.marginLeft, 10);
            v.top -= g - y, v.bottom -= g - y, v.left -= m - b, v.right -= m - b, v.marginTop = y, v.marginLeft = b
        }
        return (a && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)), v
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = g(e, n),
            r = R(n.clientWidth, window.innerWidth || 0),
            o = R(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : l(n),
            s = t ? 0 : l(n, "left");
        return h({
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: r,
            height: o
        })
    }

    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }

    function y(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, r, o) {
        var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            l = {
                top: 0,
                left: 0
            },
            c = a ? y(e) : s(e, t);
        if ("viewport" === o) l = m(c, a);
        else {
            var u;
            "scrollParent" === o ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === o ? e.ownerDocument.documentElement : o;
            var d = g(u, c, a);
            if ("HTML" !== u.nodeName || v(c)) l = d;
            else {
                var h = f(e.ownerDocument),
                    p = h.height,
                    b = h.width;
                l.top += d.top - d.marginTop, l.bottom = p + d.top, l.left += d.left - d.marginLeft, l.right = b + d.left
            }
        }
        var w = "number" == typeof(r = r || 0);
        return l.left += w ? r : r.left || 0, l.top += w ? r : r.top || 0, l.right -= w ? r : r.right || 0, l.bottom -= w ? r : r.bottom || 0, l
    }

    function w(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = b(n, i, o, r),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function(e) {
                return G({
                    key: e
                }, s[e], {
                    area: function(e) {
                        return e.width * e.height
                    }(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function _(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : s(t, n), i)
    }

    function x(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function S(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, n) {
        n = n.split("-")[0];
        var i = x(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[S(s)], r
    }

    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function E(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = C(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = h(n.offsets.popper), n.offsets.reference = h(n.offsets.reference), n = i(n, t))
        }), n
    }

    function k(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function O(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function P(e, t, n, r) {
        n.updateBound = r, A(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return function e(t, n, r, o) {
            var a = "BODY" === t.nodeName,
                s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, r, {
                passive: !0
            }), a || e(i(s.parentNode), n, r, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function D() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function I(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function N(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function L(e, t, n) {
        var i = C(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function j(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = J.indexOf(e),
            i = J.slice(n + 1).concat(J.slice(0, n));
        return t ? i.reverse() : i
    }

    function M(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            a = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = a.indexOf(C(a, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                a = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        a = r[2];
                    if (!o) return e;
                    if (0 === a.indexOf("%")) {
                        var s;
                        switch (a) {
                            case "%p":
                                s = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = i
                        }
                        return h(s)[t] / 100 * o
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                I(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var H = Math.min, $ = Math.round, W = Math.floor, R = Math.max, q = "undefined" != typeof window && "undefined" != typeof document, F = ["Edge", "Trident", "Firefox"], B = 0, V = 0; V < F.length; V += 1)
        if (q && 0 <= navigator.userAgent.indexOf(F[V])) {
            B = 1;
            break
        }
    var X = q && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, B))
            }
        },
        Y = q && !(!window.MSInputMethodContext || !document.documentMode),
        U = q && /MSIE 10/.test(navigator.userAgent),
        z = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Q = function() {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        K = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        G = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        J = Z.slice(3),
        ee = "flip",
        te = "clockwise",
        ne = "counterclockwise",
        ie = function() {
            function t(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                z(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = X(this.update.bind(this)), this.options = G({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(G({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    r.options.modifiers[e] = G({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return G({
                        name: e
                    }, r.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return Q(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, k(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[O("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return D.call(this)
                }
            }]), t
        }();
    return ie.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ie.placements = Z, ie.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            a = r.popper,
                            s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top",
                            c = s ? "width" : "height",
                            u = {
                                start: K({}, l, o[l]),
                                end: K({}, l, o[l] + o[c] - a[c])
                            };
                        e.offsets.popper = G({}, a, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        a = o.popper,
                        s = o.reference,
                        l = r.split("-")[0];
                    return n = I(+i) ? [+i, 0] : M(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = O("transform"),
                        r = e.instance.popper.style,
                        a = r.top,
                        s = r.left,
                        l = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = a, r.left = s, r[i] = l, t.boundaries = c;
                    var u = t.priority,
                        d = e.offsets.popper,
                        f = {
                            primary: function(e) {
                                var n = d[e];
                                return d[e] < c[e] && !t.escapeWithReference && (n = R(d[e], c[e])), K({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    i = d[n];
                                return d[e] > c[e] && !t.escapeWithReference && (i = H(d[n], c[e] - ("right" === e ? d.width : d.height))), K({}, n, i)
                            }
                        };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = G({}, d, f[t](e))
                    }), e.offsets.popper = d, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = W,
                        a = -1 !== ["top", "bottom"].indexOf(r),
                        s = a ? "right" : "bottom",
                        l = a ? "left" : "top",
                        c = a ? "width" : "height";
                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!L(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0],
                        a = e.offsets,
                        s = a.popper,
                        l = a.reference,
                        c = -1 !== ["left", "right"].indexOf(o),
                        u = c ? "height" : "width",
                        d = c ? "Top" : "Left",
                        f = d.toLowerCase(),
                        p = c ? "left" : "top",
                        g = c ? "bottom" : "right",
                        m = x(r)[u];
                    l[g] - m < s[f] && (e.offsets.popper[f] -= s[f] - (l[g] - m)), l[f] + m > s[g] && (e.offsets.popper[f] += l[f] + m - s[g]), e.offsets.popper = h(e.offsets.popper);
                    var v = l[f] + l[u] / 2 - m / 2,
                        y = t(e.instance.popper),
                        b = parseFloat(y["margin" + d], 10),
                        w = parseFloat(y["border" + d + "Width"], 10),
                        _ = v - e.offsets.popper[f] - b - w;
                    return _ = R(H(s[u] - m, _), 0), e.arrowElement = r, e.offsets.arrow = (K(i = {}, f, $(_)), K(i, p, ""), i), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (k(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0],
                        r = S(i),
                        o = e.placement.split("-")[1] || "",
                        a = [];
                    switch (t.behavior) {
                        case ee:
                            a = [i, r];
                            break;
                        case te:
                            a = j(i);
                            break;
                        case ne:
                            a = j(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function(s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = S(i);
                        var c = e.offsets.popper,
                            u = e.offsets.reference,
                            d = W,
                            f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                            h = d(c.left) < d(n.left),
                            p = d(c.right) > d(n.right),
                            g = d(c.top) < d(n.top),
                            m = d(c.bottom) > d(n.bottom),
                            v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (f || v || b) && (e.flipped = !0, (f || v) && (i = a[l + 1]), b && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = G({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n),
                        s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = S(t), e.offsets.popper = h(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!L(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = C(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        a = C(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, c = void 0 === a ? t.gpuAcceleration : a,
                        u = o(e.instance.popper),
                        d = p(u),
                        f = {
                            position: r.position
                        },
                        h = {
                            left: W(r.left),
                            top: $(r.top),
                            bottom: $(r.bottom),
                            right: W(r.right)
                        },
                        g = "bottom" === n ? "top" : "bottom",
                        m = "right" === i ? "left" : "right",
                        v = O("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + h.bottom : -d.height + h.bottom : h.top, s = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + h.right : -d.width + h.right : h.left, c && v) f[v] = "translate3d(" + s + "px, " + l + "px, 0)", f[g] = 0, f[m] = 0, f.willChange = "transform";
                    else {
                        var y = "bottom" == g ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        f[g] = l * y, f[m] = s * b, f.willChange = g + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = G({}, w, e.attributes), e.styles = G({}, f, e.styles), e.arrowStyles = G({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return N(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach(function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && N(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = _(r, t, e, n.positionFixed),
                        a = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), N(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, ie
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "popper.js", "jquery"], t) : t(e.bootstrap = {}, e.Popper, e.jQuery)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var s = "transitionend";

    function l(e) {
        var t = this,
            i = !1;
        return n(this).one(c.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || c.triggerTransitionEnd(t)
        }, e), this
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            return t && document.querySelector(t) ? t : null
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = n(e).css("transition-duration"),
                i = n(e).css("transition-delay"),
                r = parseFloat(t),
                o = parseFloat(i);
            return r || o ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            n(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        a = o && c.isElement(o) ? "element" : (s = o, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
        }
    };
    (n = n && n.hasOwnProperty("default") ? n.default : n).fn.emulateTransitionEnd = l, n.event.special[c.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (n(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var u = n.fn.alert,
        d = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        },
        f = "alert",
        h = "fade",
        p = "show",
        g = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                n.removeData(this._element, "bs.alert"), this._element = null
            }, t._getRootElement = function(e) {
                var t = c.getSelectorFromElement(e),
                    i = !1;
                return t && (i = document.querySelector(t)), i || (i = n(e).closest("." + f)[0]), i
            }, t._triggerCloseEvent = function(e) {
                var t = n.Event(d.CLOSE);
                return n(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                if (n(e).removeClass(p), n(e).hasClass(h)) {
                    var i = c.getTransitionDurationFromElement(e);
                    n(e).one(c.TRANSITION_END, function(n) {
                        return t._destroyElement(e, n)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, t._destroyElement = function(e) {
                n(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this),
                        r = i.data("bs.alert");
                    r || (r = new e(this), i.data("bs.alert", r)), "close" === t && r[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), e
        }();
    n(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), n.fn.alert = g._jQueryInterface, n.fn.alert.Constructor = g, n.fn.alert.noConflict = function() {
        return n.fn.alert = u, g._jQueryInterface
    };
    var m = n.fn.button,
        v = "active",
        y = "btn",
        b = "focus",
        w = '[data-toggle^="button"]',
        _ = '[data-toggle="buttons"]',
        x = 'input:not([type="hidden"])',
        S = ".active",
        T = ".btn",
        C = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    i = n(this._element).closest(_)[0];
                if (i) {
                    var r = this._element.querySelector(x);
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(v)) e = !1;
                            else {
                                var o = i.querySelector(S);
                                o && n(o).removeClass(v)
                            }
                        if (e) {
                            if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            r.checked = !this._element.classList.contains(v), n(r).trigger("change")
                        }
                        r.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && n(this._element).toggleClass(v)
            }, t.dispose = function() {
                n.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this).data("bs.button");
                    i || (i = new e(this), n(this).data("bs.button", i)), "toggle" === t && i[t]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), e
        }();
    n(document).on(C.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var t = e.target;
        n(t).hasClass(y) || (t = n(t).closest(T)), E._jQueryInterface.call(n(t), "toggle")
    }).on(C.FOCUS_BLUR_DATA_API, w, function(e) {
        var t = n(e.target).closest(T)[0];
        n(t).toggleClass(b, /^focus(in)?$/.test(e.type))
    }), n.fn.button = E._jQueryInterface, n.fn.button.Constructor = E, n.fn.button.noConflict = function() {
        return n.fn.button = m, E._jQueryInterface
    };
    var k = "carousel",
        O = ".bs.carousel",
        A = n.fn[k],
        P = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        D = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        I = "next",
        N = "prev",
        L = "left",
        j = "right",
        M = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        H = "carousel",
        $ = "active",
        W = "slide",
        R = "carousel-item-right",
        q = "carousel-item-left",
        F = "carousel-item-next",
        B = "carousel-item-prev",
        V = "pointer-event",
        X = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        Y = {
            TOUCH: "touch",
            PEN: "pen"
        },
        U = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(X.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide(I)
            }, t.nextWhenVisible = function() {
                !document.hidden && n(this._element).is(":visible") && "hidden" !== n(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(N)
            }, t.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(X.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(X.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) n(this._element).one(M.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = e > i ? I : N;
                        this._slide(r, this._items[e])
                    }
            }, t.dispose = function() {
                n(this._element).off(O), n.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = a({}, P, e), c.typeCheckConfig(k, e, D), e
            }, t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && n(this._element).on(M.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && n(this._element).on(M.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(M.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var t = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    n(this._element.querySelectorAll(X.ITEM_IMG)).on(M.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (n(this._element).on(M.POINTERDOWN, function(e) {
                        return t(e)
                    }), n(this._element).on(M.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add(V)) : (n(this._element).on(M.TOUCHSTART, function(e) {
                        return t(e)
                    }), n(this._element).on(M.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), n(this._element).on(M.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(X.ITEM)) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var n = e === I,
                    i = e === N,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var a = (r + (e === N ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, t._triggerSlideEvent = function(e, t) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),
                    o = n.Event(M.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: r,
                        to: i
                    });
                return n(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));
                    n(t).removeClass($);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && n(i).addClass($)
                }
            }, t._slide = function(e, t) {
                var i, r, o, a = this,
                    s = this._element.querySelector(X.ACTIVE_ITEM),
                    l = this._getItemIndex(s),
                    u = t || s && this._getItemByDirection(e, s),
                    d = this._getItemIndex(u),
                    f = Boolean(this._interval);
                if (e === I ? (i = q, r = F, o = L) : (i = R, r = B, o = j), u && n(u).hasClass($)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(u);
                    var h = n.Event(M.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: l,
                        to: d
                    });
                    if (n(this._element).hasClass(W)) {
                        n(u).addClass(r), c.reflow(u), n(s).addClass(i), n(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = c.getTransitionDurationFromElement(s);
                        n(s).one(c.TRANSITION_END, function() {
                            n(u).removeClass(i + " " + r).addClass($), n(s).removeClass($ + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                return n(a._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else n(s).removeClass($), n(u).addClass($), this._isSliding = !1, n(this._element).trigger(h);
                    f && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this).data("bs.carousel"),
                        r = a({}, P, n(this).data());
                    "object" == typeof t && (r = a({}, r, t));
                    var o = "string" == typeof t ? t : r.slide;
                    if (i || (i = new e(this, r), n(this).data("bs.carousel", i)), "number" == typeof t) i.to(t);
                    else if ("string" == typeof o) {
                        if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]()
                    } else r.interval && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(t) {
                var i = c.getSelectorFromElement(this);
                if (i) {
                    var r = n(i)[0];
                    if (r && n(r).hasClass(H)) {
                        var o = a({}, n(r).data(), n(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), e._jQueryInterface.call(n(r), o), s && n(r).data("bs.carousel").to(s), t.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return P
                }
            }]), e
        }();
    n(document).on(M.CLICK_DATA_API, X.DATA_SLIDE, U._dataApiClickHandler), n(window).on(M.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(X.DATA_RIDE)), t = 0, i = e.length; t < i; t++) {
            var r = n(e[t]);
            U._jQueryInterface.call(r, r.data())
        }
    }), n.fn[k] = U._jQueryInterface, n.fn[k].Constructor = U, n.fn[k].noConflict = function() {
        return n.fn[k] = A, U._jQueryInterface
    };
    var z = "collapse",
        Q = n.fn[z],
        K = {
            toggle: !0,
            parent: ""
        },
        G = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Z = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        J = "show",
        ee = "collapse",
        te = "collapsing",
        ne = "collapsed",
        ie = "width",
        re = "height",
        oe = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        ae = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(oe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        a = c.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                n(this._element).hasClass(J) ? this.hide() : this.show()
            }, t.show = function() {
                var t, i, r = this;
                if (!this._isTransitioning && !n(this._element).hasClass(J) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(oe.ACTIVES)).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(ee)
                    })).length && (t = null), !(t && (i = n(t).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var o = n.Event(Z.SHOW);
                    if (n(this._element).trigger(o), !o.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(n(t).not(this._selector), "hide"), i || n(t).data("bs.collapse", null));
                        var a = this._getDimension();
                        n(this._element).removeClass(ee).addClass(te), this._element.style[a] = 0, this._triggerArray.length && n(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        n(this._element).one(c.TRANSITION_END, function() {
                            n(r._element).removeClass(te).addClass(ee).addClass(J), r._element.style[a] = "", r.setTransitioning(!1), n(r._element).trigger(Z.SHOWN)
                        }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && n(this._element).hasClass(J)) {
                    var t = n.Event(Z.HIDE);
                    if (n(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), n(this._element).addClass(te).removeClass(ee).removeClass(J);
                        var r = this._triggerArray.length;
                        if (r > 0)
                            for (var o = 0; o < r; o++) {
                                var a = this._triggerArray[o],
                                    s = c.getSelectorFromElement(a);
                                if (null !== s) n([].slice.call(document.querySelectorAll(s))).hasClass(J) || n(a).addClass(ne).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        n(this._element).one(c.TRANSITION_END, function() {
                            e.setTransitioning(!1), n(e._element).removeClass(te).addClass(ee).trigger(Z.HIDDEN)
                        }).emulateTransitionEnd(l)
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                n.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = a({}, K, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(z, e, G), e
            }, t._getDimension = function() {
                return n(this._element).hasClass(ie) ? ie : re
            }, t._getParent = function() {
                var t, i = this;
                c.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(t.querySelectorAll(r));
                return n(o).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), t
            }, t._addAriaAndCollapsedClass = function(e, t) {
                var i = n(e).hasClass(J);
                t.length && n(t).toggleClass(ne, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this),
                        r = i.data("bs.collapse"),
                        o = a({}, K, i.data(), "object" == typeof t && t ? t : {});
                    if (!r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || (r = new e(this, o), i.data("bs.collapse", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return K
                }
            }]), e
        }();
    n(document).on(Z.CLICK_DATA_API, oe.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = n(this),
            i = c.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        n(r).each(function() {
            var e = n(this),
                i = e.data("bs.collapse") ? "toggle" : t.data();
            ae._jQueryInterface.call(e, i)
        })
    }), n.fn[z] = ae._jQueryInterface, n.fn[z].Constructor = ae, n.fn[z].noConflict = function() {
        return n.fn[z] = Q, ae._jQueryInterface
    };
    var se = "dropdown",
        le = n.fn[se],
        ce = new RegExp("38|40|27"),
        ue = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        },
        de = "disabled",
        fe = "show",
        he = "dropup",
        pe = "dropright",
        ge = "dropleft",
        me = "dropdown-menu-right",
        ve = "position-static",
        ye = '[data-toggle="dropdown"]',
        be = ".dropdown form",
        we = ".dropdown-menu",
        _e = ".navbar-nav",
        xe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Se = "top-start",
        Te = "top-end",
        Ce = "bottom-start",
        Ee = "bottom-end",
        ke = "right-start",
        Oe = "left-start",
        Ae = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Pe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        De = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !n(this._element).hasClass(de)) {
                    var i = e._getParentFromElement(this._element),
                        r = n(this._menu).hasClass(fe);
                    if (e._clearMenus(), !r) {
                        var o = {
                                relatedTarget: this._element
                            },
                            a = n.Event(ue.SHOW, o);
                        if (n(i).trigger(a), !a.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = i : c.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && n(i).addClass(ve), this._popper = new t(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === n(i).closest(_e).length && n(document.body).children().on("mouseover", null, n.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), n(this._menu).toggleClass(fe), n(i).toggleClass(fe).trigger(n.Event(ue.SHOWN, o))
                        }
                    }
                }
            }, i.show = function() {
                if (!(this._element.disabled || n(this._element).hasClass(de) || n(this._menu).hasClass(fe))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        i = n.Event(ue.SHOW, t),
                        r = e._getParentFromElement(this._element);
                    n(r).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(fe), n(r).toggleClass(fe).trigger(n.Event(ue.SHOWN, t)))
                }
            }, i.hide = function() {
                if (!this._element.disabled && !n(this._element).hasClass(de) && n(this._menu).hasClass(fe)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        i = n.Event(ue.HIDE, t),
                        r = e._getParentFromElement(this._element);
                    n(r).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(fe), n(r).toggleClass(fe).trigger(n.Event(ue.HIDDEN, t)))
                }
            }, i.dispose = function() {
                n.removeData(this._element, "bs.dropdown"), n(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var e = this;
                n(this._element).on(ue.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function(e) {
                return e = a({}, this.constructor.Default, n(this._element).data(), e), c.typeCheckConfig(se, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(we))
                }
                return this._menu
            }, i._getPlacement = function() {
                var e = n(this._element.parentNode),
                    t = Ce;
                return e.hasClass(he) ? (t = Se, n(this._menu).hasClass(me) && (t = Te)) : e.hasClass(pe) ? t = ke : e.hasClass(ge) ? t = Oe : n(this._menu).hasClass(me) && (t = Ee), t
            }, i._detectNavbar = function() {
                return n(this._element).closest(".navbar").length > 0
            }, i._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this).data("bs.dropdown");
                    if (i || (i = new e(this, "object" == typeof t ? t : null), n(this).data("bs.dropdown", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var i = [].slice.call(document.querySelectorAll(ye)), r = 0, o = i.length; r < o; r++) {
                        var a = e._getParentFromElement(i[r]),
                            s = n(i[r]).data("bs.dropdown"),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), s) {
                            var c = s._menu;
                            if (n(a).hasClass(fe) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && n.contains(a, t.target))) {
                                var u = n.Event(ue.HIDE, l);
                                n(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), i[r].setAttribute("aria-expanded", "false"), n(c).removeClass(fe), n(a).removeClass(fe).trigger(n.Event(ue.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || n(t.target).closest(we).length)) : ce.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !n(this).hasClass(de))) {
                    var i = e._getParentFromElement(this),
                        r = n(i).hasClass(fe);
                    if (r && (!r || 27 !== t.which && 32 !== t.which)) {
                        var o = [].slice.call(i.querySelectorAll(xe));
                        if (0 !== o.length) {
                            var a = o.indexOf(t.target);
                            38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = i.querySelector(ye);
                            n(s).trigger("focus")
                        }
                        n(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ae
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Pe
                }
            }]), e
        }();
    n(document).on(ue.KEYDOWN_DATA_API, ye, De._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, we, De._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, De._clearMenus).on(ue.CLICK_DATA_API, ye, function(e) {
        e.preventDefault(), e.stopPropagation(), De._jQueryInterface.call(n(this), "toggle")
    }).on(ue.CLICK_DATA_API, be, function(e) {
        e.stopPropagation()
    }), n.fn[se] = De._jQueryInterface, n.fn[se].Constructor = De, n.fn[se].noConflict = function() {
        return n.fn[se] = le, De._jQueryInterface
    };
    var Ie = n.fn.modal,
        Ne = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Le = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        je = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        },
        Me = "modal-scrollbar-measure",
        He = "modal-backdrop",
        $e = "modal-open",
        We = "fade",
        Re = "show",
        qe = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        },
        Fe = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(qe.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    n(this._element).hasClass(We) && (this._isTransitioning = !0);
                    var i = n.Event(je.SHOW, {
                        relatedTarget: e
                    });
                    n(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), n(this._element).on(je.CLICK_DISMISS, qe.DATA_DISMISS, function(e) {
                        return t.hide(e)
                    }), n(this._dialog).on(je.MOUSEDOWN_DISMISS, function() {
                        n(t._element).one(je.MOUSEUP_DISMISS, function(e) {
                            n(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = n.Event(je.HIDE);
                    if (n(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = n(this._element).hasClass(We);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), n(document).off(je.FOCUSIN), n(this._element).removeClass(Re), n(this._element).off(je.CLICK_DISMISS), n(this._dialog).off(je.MOUSEDOWN_DISMISS), r) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            n(this._element).one(c.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return n(e).off(".bs.modal")
                }), n(document).off(je.FOCUSIN), n.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = a({}, Ne, e), c.typeCheckConfig("modal", e, Le), e
            }, t._showElement = function(e) {
                var t = this,
                    i = n(this._element).hasClass(We);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, i && c.reflow(this._element), n(this._element).addClass(Re), this._config.focus && this._enforceFocus();
                var r = n.Event(je.SHOWN, {
                        relatedTarget: e
                    }),
                    o = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, n(t._element).trigger(r)
                    };
                if (i) {
                    var a = c.getTransitionDurationFromElement(this._dialog);
                    n(this._dialog).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                n(document).off(je.FOCUSIN).on(je.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === n(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? n(this._element).on(je.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || n(this._element).off(je.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? n(window).on(je.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : n(window).off(je.RESIZE)
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    n(document.body).removeClass($e), e._resetAdjustments(), e._resetScrollbar(), n(e._element).trigger(je.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (n(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    i = n(this._element).hasClass(We) ? We : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = He, i && this._backdrop.classList.add(i), n(this._backdrop).appendTo(document.body), n(this._element).on(je.CLICK_DISMISS, function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), i && c.reflow(this._backdrop), n(this._backdrop).addClass(Re), !e) return;
                    if (!i) return void e();
                    var r = c.getTransitionDurationFromElement(this._backdrop);
                    n(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    n(this._backdrop).removeClass(Re);
                    var o = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (n(this._element).hasClass(We)) {
                        var a = c.getTransitionDurationFromElement(this._backdrop);
                        n(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT)),
                        i = [].slice.call(document.querySelectorAll(qe.STICKY_CONTENT));
                    n(t).each(function(t, i) {
                        var r = i.style.paddingRight,
                            o = n(i).css("padding-right");
                        n(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), n(i).each(function(t, i) {
                        var r = i.style.marginRight,
                            o = n(i).css("margin-right");
                        n(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = n(document.body).css("padding-right");
                    n(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                n(document.body).addClass($e)
            }, t._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT));
                n(e).each(function(e, t) {
                    var i = n(t).data("padding-right");
                    n(t).removeData("padding-right"), t.style.paddingRight = i || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + qe.STICKY_CONTENT));
                n(t).each(function(e, t) {
                    var i = n(t).data("margin-right");
                    void 0 !== i && n(t).css("margin-right", i).removeData("margin-right")
                });
                var i = n(document.body).data("padding-right");
                n(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = Me, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, i) {
                return this.each(function() {
                    var r = n(this).data("bs.modal"),
                        o = a({}, Ne, n(this).data(), "object" == typeof t && t ? t : {});
                    if (r || (r = new e(this, o), n(this).data("bs.modal", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t](i)
                    } else o.show && r.show(i)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ne
                }
            }]), e
        }();
    n(document).on(je.CLICK_DATA_API, qe.DATA_TOGGLE, function(e) {
        var t, i = this,
            r = c.getSelectorFromElement(this);
        r && (t = document.querySelector(r));
        var o = n(t).data("bs.modal") ? "toggle" : a({}, n(t).data(), n(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = n(t).one(je.SHOW, function(e) {
            e.isDefaultPrevented() || s.one(je.HIDDEN, function() {
                n(i).is(":visible") && i.focus()
            })
        });
        Fe._jQueryInterface.call(n(t), o, this)
    }), n.fn.modal = Fe._jQueryInterface, n.fn.modal.Constructor = Fe, n.fn.modal.noConflict = function() {
        return n.fn.modal = Ie, Fe._jQueryInterface
    };
    var Be = "tooltip",
        Ve = n.fn.tooltip,
        Xe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ye = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        },
        Ue = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        ze = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        },
        Qe = "show",
        Ke = "out",
        Ge = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Ze = "fade",
        Je = "show",
        et = ".tooltip-inner",
        tt = ".arrow",
        nt = "hover",
        it = "focus",
        rt = "click",
        ot = "manual",
        at = function() {
            function e(e, n) {
                if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            i = n(e.currentTarget).data(t);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(t, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (n(this.getTipElement()).hasClass(Je)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), n.removeData(this.element, this.constructor.DATA_KEY), n(this.element).off(this.constructor.EVENT_KEY), n(this.element).closest(".modal").off("hide.bs.modal"), this.tip && n(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var e = this;
                if ("none" === n(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = n.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    n(this.element).trigger(i);
                    var r = c.findShadowRoot(this.element),
                        o = n.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !o) return;
                    var a = this.getTipElement(),
                        s = c.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && n(a).addClass(Ze);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    n(a).data(this.constructor.DATA_KEY, this), n.contains(this.element.ownerDocument.documentElement, this.tip) || n(a).appendTo(d), n(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new t(this.element, a, {
                        placement: u,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: tt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), n(a).addClass(Je), "ontouchstart" in document.documentElement && n(document.body).children().on("mouseover", null, n.noop);
                    var f = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, n(e.element).trigger(e.constructor.Event.SHOWN), t === Ke && e._leave(null, e)
                    };
                    if (n(this.tip).hasClass(Ze)) {
                        var h = c.getTransitionDurationFromElement(this.tip);
                        n(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(h)
                    } else f()
                }
            }, i.hide = function(e) {
                var t = this,
                    i = this.getTipElement(),
                    r = n.Event(this.constructor.Event.HIDE),
                    o = function() {
                        t._hoverState !== Qe && i.parentNode && i.parentNode.removeChild(i), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), n(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (n(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (n(i).removeClass(Je), "ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), this._activeTrigger[rt] = !1, this._activeTrigger[it] = !1, this._activeTrigger[nt] = !1, n(this.tip).hasClass(Ze)) {
                        var a = c.getTransitionDurationFromElement(i);
                        n(i).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                n(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(n(e.querySelectorAll(et)), this.getTitle()), n(e).removeClass(Ze + " " + Je)
            }, i.setElementContent = function(e, t) {
                var i = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? i ? n(t).parent().is(e) || e.empty().append(t) : e.text(n(t).text()) : e[i ? "html" : "text"](t)
            }, i.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? n(this.config.container) : n(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return Ue[e.toUpperCase()]
            }, i._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) n(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if (t !== ot) {
                        var i = t === nt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = t === nt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        n(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), n(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || n(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusin" === e.type ? it : nt] = !0), n(t.getTipElement()).hasClass(Je) || t._hoverState === Qe ? t._hoverState = Qe : (clearTimeout(t._timeout), t._hoverState = Qe, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === Qe && t.show()
                }, t.config.delay.show) : t.show())
            }, i._leave = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || n(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusout" === e.type ? it : nt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Ke, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === Ke && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                return "number" == typeof(e = a({}, this.constructor.Default, n(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Be, e, this.constructor.DefaultType), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = n(this.getTipElement()),
                    t = e.attr("class").match(Xe);
                null !== t && t.length && e.removeClass(t.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (n(e).removeClass(Ze), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this).data("bs.tooltip"),
                        r = "object" == typeof t && t;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n(this).data("bs.tooltip", i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ze
                }
            }, {
                key: "NAME",
                get: function() {
                    return Be
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Ge
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ye
                }
            }]), e
        }();
    n.fn.tooltip = at._jQueryInterface, n.fn.tooltip.Constructor = at, n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = Ve, at._jQueryInterface
    };
    var st = "popover",
        lt = n.fn.popover,
        ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        ut = a({}, at.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        dt = a({}, at.DefaultType, {
            content: "(string|element|function)"
        }),
        ft = "fade",
        ht = "show",
        pt = ".popover-header",
        gt = ".popover-body",
        mt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        vt = function(e) {
            var t, i;

            function o() {
                return e.apply(this, arguments) || this
            }
            i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
            var a = o.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                n(this.getTipElement()).addClass("bs-popover-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || n(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = n(this.getTipElement());
                this.setElementContent(e.find(pt), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(gt), t), e.removeClass(ft + " " + ht)
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = n(this.getTipElement()),
                    t = e.attr("class").match(ct);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, o._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = n(this).data("bs.popover"),
                        i = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new o(this, i), n(this).data("bs.popover", t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ut
                }
            }, {
                key: "NAME",
                get: function() {
                    return st
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return mt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return dt
                }
            }]), o
        }(at);
    n.fn.popover = vt._jQueryInterface, n.fn.popover.Constructor = vt, n.fn.popover.noConflict = function() {
        return n.fn.popover = lt, vt._jQueryInterface
    };
    var yt = "scrollspy",
        bt = n.fn[yt],
        wt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        _t = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        xt = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        St = "dropdown-item",
        Tt = "active",
        Ct = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        Et = "offset",
        kt = "position",
        Ot = function() {
            function e(e, t) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Ct.NAV_LINKS + "," + this._config.target + " " + Ct.LIST_ITEMS + "," + this._config.target + " " + Ct.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, n(this._scrollElement).on(xt.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? Et : kt,
                    i = "auto" === this._config.method ? t : this._config.method,
                    r = i === kt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, o = c.getSelectorFromElement(e);
                    if (o && (t = document.querySelector(o)), t) {
                        var a = t.getBoundingClientRect();
                        if (a.width || a.height) return [n(t)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                n.removeData(this._element, "bs.scrollspy"), n(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = a({}, wt, "object" == typeof e && e ? e : {})).target) {
                    var t = n(e.target).attr("id");
                    t || (t = c.getUID(yt), n(e.target).attr("id", t)), e.target = "#" + t
                }
                return c.typeCheckConfig(yt, e, _t), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = n([].slice.call(document.querySelectorAll(t.join(","))));
                i.hasClass(St) ? (i.closest(Ct.DROPDOWN).find(Ct.DROPDOWN_TOGGLE).addClass(Tt), i.addClass(Tt)) : (i.addClass(Tt), i.parents(Ct.NAV_LIST_GROUP).prev(Ct.NAV_LINKS + ", " + Ct.LIST_ITEMS).addClass(Tt), i.parents(Ct.NAV_LIST_GROUP).prev(Ct.NAV_ITEMS).children(Ct.NAV_LINKS).addClass(Tt)), n(this._scrollElement).trigger(xt.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(Tt)
                }).forEach(function(e) {
                    return e.classList.remove(Tt)
                })
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this).data("bs.scrollspy");
                    if (i || (i = new e(this, "object" == typeof t && t), n(this).data("bs.scrollspy", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return wt
                }
            }]), e
        }();
    n(window).on(xt.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(Ct.DATA_SPY)), t = e.length; t--;) {
            var i = n(e[t]);
            Ot._jQueryInterface.call(i, i.data())
        }
    }), n.fn[yt] = Ot._jQueryInterface, n.fn[yt].Constructor = Ot, n.fn[yt].noConflict = function() {
        return n.fn[yt] = bt, Ot._jQueryInterface
    };
    var At = n.fn.tab,
        Pt = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        Dt = "dropdown-menu",
        It = "active",
        Nt = "disabled",
        Lt = "fade",
        jt = "show",
        Mt = ".dropdown",
        Ht = ".nav, .list-group",
        $t = ".active",
        Wt = "> li > .active",
        Rt = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qt = ".dropdown-toggle",
        Ft = "> .dropdown-menu .active",
        Bt = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n(this._element).hasClass(It) || n(this._element).hasClass(Nt))) {
                    var t, i, r = n(this._element).closest(Ht)[0],
                        o = c.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? Wt : $t;
                        i = (i = n.makeArray(n(r).find(a)))[i.length - 1]
                    }
                    var s = n.Event(Pt.HIDE, {
                            relatedTarget: this._element
                        }),
                        l = n.Event(Pt.SHOW, {
                            relatedTarget: i
                        });
                    if (i && n(i).trigger(s), n(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, r);
                        var u = function() {
                            var t = n.Event(Pt.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = n.Event(Pt.SHOWN, {
                                    relatedTarget: i
                                });
                            n(i).trigger(t), n(e._element).trigger(r)
                        };
                        t ? this._activate(t, t.parentNode, u) : u()
                    }
                }
            }, t.dispose = function() {
                n.removeData(this._element, "bs.tab"), this._element = null
            }, t._activate = function(e, t, i) {
                var r = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n(t).children($t) : n(t).find(Wt))[0],
                    a = i && o && n(o).hasClass(Lt),
                    s = function() {
                        return r._transitionComplete(e, o, i)
                    };
                if (o && a) {
                    var l = c.getTransitionDurationFromElement(o);
                    n(o).removeClass(jt).one(c.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, t._transitionComplete = function(e, t, i) {
                if (t) {
                    n(t).removeClass(It);
                    var r = n(t.parentNode).find(Ft)[0];
                    r && n(r).removeClass(It), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (n(e).addClass(It), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), n(e).addClass(jt), e.parentNode && n(e.parentNode).hasClass(Dt)) {
                    var o = n(e).closest(Mt)[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(qt));
                        n(a).addClass(It)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this),
                        r = i.data("bs.tab");
                    if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]), e
        }();
    n(document).on(Pt.CLICK_DATA_API, Rt, function(e) {
        e.preventDefault(), Bt._jQueryInterface.call(n(this), "show")
    }), n.fn.tab = Bt._jQueryInterface, n.fn.tab.Constructor = Bt, n.fn.tab.noConflict = function() {
        return n.fn.tab = At, Bt._jQueryInterface
    };
    var Vt = n.fn.toast,
        Xt = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
        },
        Yt = "fade",
        Ut = "hide",
        zt = "show",
        Qt = "showing",
        Kt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Gt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Zt = '[data-dismiss="toast"]',
        Jt = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                n(this._element).trigger(Xt.SHOW), this._config.animation && this._element.classList.add(Yt);
                var t = function() {
                    e._element.classList.remove(Qt), e._element.classList.add(zt), n(e._element).trigger(Xt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove(Ut), this._element.classList.add(Qt), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    n(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(i)
                } else t()
            }, t.hide = function(e) {
                var t = this;
                this._element.classList.contains(zt) && (n(this._element).trigger(Xt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    t._close()
                }, this._config.delay))
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zt) && this._element.classList.remove(zt), n(this._element).off(Xt.CLICK_DISMISS), n.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, t._getConfig = function(e) {
                return e = a({}, Gt, n(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, t._setListeners = function() {
                var e = this;
                n(this._element).on(Xt.CLICK_DISMISS, Zt, function() {
                    return e.hide(!0)
                })
            }, t._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add(Ut), n(e._element).trigger(Xt.HIDDEN)
                    };
                if (this._element.classList.remove(zt), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    n(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(i)
                } else t()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = n(this),
                        r = i.data("bs.toast");
                    if (r || (r = new e(this, "object" == typeof t && t), i.data("bs.toast", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Kt
                }
            }]), e
        }();
    n.fn.toast = Jt._jQueryInterface, n.fn.toast.Constructor = Jt, n.fn.toast.noConflict = function() {
            return n.fn.toast = Vt, Jt._jQueryInterface
        },
        function() {
            if (void 0 === n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = n.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = c, e.Alert = g, e.Button = E, e.Carousel = U, e.Collapse = ae, e.Dropdown = De, e.Modal = Fe, e.Popover = vt, e.Scrollspy = Ot, e.Tab = Bt, e.Toast = Jt, e.Tooltip = at, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, n.each = function(e, n, i) {
                var r = 0,
                    o = e.length,
                    a = t(e);
                if (i) {
                    if (a)
                        for (; o > r && !1 !== n.apply(e[r], i); r++);
                    else
                        for (r in e)
                            if (!1 === n.apply(e[r], i)) break
                } else if (a)
                    for (; o > r && !1 !== n.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === n.call(e[r], r, e[r])) break; return e
            }, n.data = function(e, t, r) {
                if (void 0 === r) {
                    var o = (a = e[n.expando]) && i[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[a] = i[a] || {}, i[a][t] = r, r
                }
            }, n.removeData = function(e, t) {
                var r = e[n.expando],
                    o = r && i[r];
                o && n.each(t, function(e, t) {
                    delete o[t]
                })
            }, n.extend = function() {
                var e, t, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], s !== (i = o[r]) && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
                return s
            }, n.queue = function(e, i, r) {
                if (e) {
                    i = (i || "fx") + "queue";
                    var o = n.data(e, i);
                    return r ? (!o || n.isArray(r) ? o = n.data(e, i, function(e, n) {
                        var i = n || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                            if (n != n)
                                for (; void 0 !== t[i];) e[r++] = t[i++];
                            e.length = r
                        }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                    }(r)) : o.push(r), o) : o || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var r = n.queue(i, t),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function r(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = u.data(e, "velocity");
                return null === t ? i : t
            }

            function a(e, n, i, r) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function c(e, t, n) {
                    return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function u(t, n) {
                    for (var r = 0; h > r; ++r) {
                        var o = c(n, e, i);
                        if (0 === o) return n;
                        n -= (l(n, e, i) - t) / o
                    }
                    return n
                }

                function d(t, n, r) {
                    var o, a, s = 0;
                    do {
                        (o = l(a = n + (r - n) / 2, e, i) - t) > 0 ? r = a : n = a
                    } while (Math.abs(o) > g && ++s < m);
                    return a
                }

                function f() {
                    x = !0, (e != n || i != r) && function() {
                        for (var t = 0; v > t; ++t) _[t] = l(t * y, e, i)
                    }()
                }
                var h = 4,
                    p = .001,
                    g = 1e-7,
                    m = 10,
                    v = 11,
                    y = 1 / (v - 1),
                    b = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var _ = b ? new Float32Array(v) : new Array(v),
                    x = !1,
                    S = function(t) {
                        return x || f(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                            for (var n = 0, r = 1, o = v - 1; r != o && _[r] <= t; ++r) n += y;
                            var a = n + (t - _[--r]) / (_[r + 1] - _[r]) * y,
                                s = c(a, e, i);
                            return s >= p ? u(t, a) : 0 == s ? a : d(t, n, n + y)
                        }(t), n, r)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var T = "generateBezier(" + [e, n, i, r] + ")";
                return S.toString = function() {
                    return T
                }, S
            }

            function s(e, t) {
                var n = e;
                return h.isString(e) ? v.Easings[e] || (n = !1) : n = h.isArray(e) && 1 === e.length ? function(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : h.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = v.State.calls.length;
                    n > 1e4 && (v.State.calls = function(e) {
                        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                            var r = e[t];
                            r && i.push(r)
                        }
                        return i
                    }(v.State.calls));
                    for (var r = 0; n > r; r++)
                        if (v.State.calls[r]) {
                            var a = v.State.calls[r],
                                s = a[0],
                                d = a[2],
                                f = a[3],
                                p = !!f,
                                g = null;
                            f || (f = v.State.calls[r][3] = t - 16);
                            for (var m = Math.min((t - f) / d.duration, 1), y = 0, w = s.length; w > y; y++) {
                                var x = s[y],
                                    S = x.element;
                                if (o(S)) {
                                    var T = !1;
                                    if (d.display !== i && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                b.setPropertyValue(S, "display", t)
                                            })
                                        }
                                        b.setPropertyValue(S, "display", d.display)
                                    }
                                    for (var C in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(S, "visibility", d.visibility), x)
                                        if ("element" !== C) {
                                            var E, k = x[C],
                                                O = h.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                            if (1 === m) E = k.endValue;
                                            else {
                                                var A = k.endValue - k.startValue;
                                                if (E = k.startValue + A * O(m, d, A), !p && E === k.currentValue) continue
                                            }
                                            if (k.currentValue = E, "tween" === C) g = E;
                                            else {
                                                if (b.Hooks.registered[C]) {
                                                    var P = b.Hooks.getRoot(C),
                                                        D = o(S).rootPropertyValueCache[P];
                                                    D && (k.rootPropertyValue = D)
                                                }
                                                var I = b.setPropertyValue(S, C, k.currentValue + (0 === parseFloat(E) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                                b.Hooks.registered[C] && (o(S).rootPropertyValueCache[P] = b.Normalizations.registered[P] ? b.Normalizations.registered[P]("extract", null, I[1]) : I[1]), "transform" === I[0] && (T = !0)
                                            }
                                        }
                                    d.mobileHA && o(S).transformCache.translate3d === i && (o(S).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && b.flushTransformCache(S)
                                }
                            }
                            d.display !== i && "none" !== d.display && (v.State.calls[r][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[r][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], m, Math.max(0, f + d.duration - t), f, g), 1 === m && c(r)
                        }
                }
                v.State.isTicking && _(l)
            }

            function c(e, t) {
                if (!v.State.calls[e]) return !1;
                for (var n = v.State.calls[e][0], r = v.State.calls[e][1], a = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, c = 0, d = n.length; d > c; c++) {
                    var f = n[c].element;
                    if (t || a.loop || ("none" === a.display && b.setPropertyValue(f, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(f, "visibility", a.visibility)), !0 !== a.loop && (u.queue(f)[1] === i || !/\.velocityQueueEntryFlag/i.test(u.queue(f)[1])) && o(f)) {
                        o(f).isAnimating = !1, o(f).rootPropertyValueCache = {};
                        var h = !1;
                        u.each(b.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                r = o(f).transformCache[t];
                            o(f).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (h = !0, delete o(f).transformCache[t])
                        }), a.mobileHA && (h = !0, delete o(f).transformCache.translate3d), h && b.flushTransformCache(f), b.Values.removeClass(f, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && c === d - 1) try {
                        a.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && !0 !== a.loop && s(r), o(f) && !0 === a.loop && !t && (u.each(o(f).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), v(f, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), !1 !== a.queue && u.dequeue(f, a.queue)
                }
                v.State.calls[e] = !1;
                for (var p = 0, g = v.State.calls.length; g > p; p++)
                    if (!1 !== v.State.calls[p]) {
                        l = !0;
                        break
                    }!1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
            }
            var u, d = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                f = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                h = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                p = !1;
            if (e.fn && e.fn.jquery ? (u = e, p = !0) : u = t.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var g = 400,
                    m = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: n.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: u,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: m,
                            begin: i,
                            complete: i,
                            progress: i,
                            display: i,
                            visibility: i,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            u.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== i ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var y = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, n, i) {
                        var r = {
                            x: t.x + i.dx * n,
                            v: t.v + i.dv * n,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: r.v,
                            dv: e(r)
                        }
                    }

                    function n(n, i) {
                        var r = {
                                dx: n.v,
                                dv: e(n)
                            },
                            o = t(n, .5 * i, r),
                            a = t(n, .5 * i, o),
                            s = t(n, i, a),
                            l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                            c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                        return n.x = n.x + l * i, n.v = n.v + c * i, n
                    }
                    return function e(t, i, r) {
                        var o, a, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, (o = null !== r) ? a = (u = e(t, i)) / r * .016 : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return o ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                v.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, u.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    v.Easings[t[0]] = a.apply(null, t[1])
                });
                var b = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < b.Lists.colors.length; e++) {
                                var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var n, i, r;
                            if (d)
                                for (n in b.Hooks.templates) {
                                    r = (i = b.Hooks.templates[n])[0].split(" ");
                                    var o = i[1].match(b.RegEx.valueSplit);
                                    "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), b.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                }
                            for (n in b.Hooks.templates)
                                for (var e in r = (i = b.Hooks.templates[n])[0].split(" ")) {
                                    var a = n + r[e],
                                        s = e;
                                    b.Hooks.registered[a] = [n, s]
                                }
                        },
                        getRoot: function(e) {
                            var t = b.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var n = b.Hooks.registered[e];
                            if (n) {
                                var i = n[0],
                                    r = n[1];
                                return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[r]
                            }
                            return t
                        },
                        injectValue: function(e, t, n) {
                            var i = b.Hooks.registered[e];
                            if (i) {
                                var r, o = i[0],
                                    a = i[1];
                                return (r = (n = b.Hooks.cleanRootPropertyValue(o, n)).toString().match(b.RegEx.valueSplit))[a] = t, r.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var i;
                                        return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return v.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var i = parseFloat(n);
                                        if (!i && 0 !== i) {
                                            var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            i = r ? r[1] : 0
                                        }
                                        return i;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function(e, t, n) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i ? i[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function() {
                            9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                            for (var e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var a = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                                    break;
                                                case "skew":
                                                    a = !/(deg|\d)$/i.test(r);
                                                    break;
                                                case "rotate":
                                                    a = !/(deg|\d)$/i.test(r)
                                            }
                                            return a || (o(n).transformCache[t] = "(" + r + ")"), o(n).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < b.Lists.colors.length; e++) ! function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var o;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                            else {
                                                var a, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : b.RegEx.isHex.test(r) ? a = "rgb(" + b.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
                                        case "inject":
                                            return 8 >= d ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                                var r;
                                if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), h.isString(v.State.prefixElement.style[r])) return v.State.prefixMatches[e] = r, [r, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                                return t + t + n + n + i + i
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, n, r, a) {
                        function s(e, n) {
                            function r() {
                                f && b.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = u.css(e, n);
                            else {
                                var c, f = !1;
                                if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (f = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                    if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                        return r(), h
                                    }
                                    if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                        return r(), p
                                    }
                                }
                                c = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]), r()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                var g = s(e, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = u(e).position()[n] + "px")
                            }
                            return l
                        }
                        var l;
                        if (b.Hooks.registered[n]) {
                            var c = n,
                                f = b.Hooks.getRoot(c);
                            r === i && (r = b.getPropertyValue(e, b.Names.prefixCheck(f)[0])), b.Normalizations.registered[f] && (r = b.Normalizations.registered[f]("extract", e, r)), l = b.Hooks.extractValue(c, r)
                        } else if (b.Normalizations.registered[n]) {
                            var h, p;
                            "transform" !== (h = b.Normalizations.registered[n]("name", e)) && (p = s(e, b.Names.prefixCheck(h)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", e, p)
                        }
                        if (!/^[\d-]/.test(l))
                            if (o(e) && o(e).isSVG && b.Names.SVGAttribute(n))
                                if (/^(height|width)$/i.test(n)) try {
                                    l = e.getBBox()[n]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(n);
                                else l = s(e, b.Names.prefixCheck(n)[0]);
                        return b.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                    },
                    setPropertyValue: function(e, n, i, r, a) {
                        var s = n;
                        if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                        else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e)) b.Normalizations.registered[n]("inject", e, i), s = "transform", i = o(e).transformCache[n];
                        else {
                            if (b.Hooks.registered[n]) {
                                var l = n,
                                    c = b.Hooks.getRoot(n);
                                r = r || b.getPropertyValue(e, c), i = b.Hooks.injectValue(l, i, r), n = c
                            }
                            if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i), n = b.Normalizations.registered[n]("name", e)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
                                e.style[s] = i
                            } catch (e) {
                                v.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                            } else o(e) && o(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                            v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                        }
                        return [s, i]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(b.getPropertyValue(e, t))
                        }
                        var n = "";
                        if ((d || v.State.isAndroid && !v.State.isChrome) && o(e).isSVG) {
                            var i = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            u.each(o(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                            })
                        } else {
                            var r, a;
                            u.each(o(e).transformCache, function(t) {
                                return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                            }), a && (n = "perspective" + a + " " + n)
                        }
                        b.setPropertyValue(e, "transform", n)
                    }
                };
                b.Hooks.register(), b.Normalizations.register(), v.hook = function(e, t, n) {
                    var a = i;
                    return e = r(e), u.each(e, function(e, r) {
                        if (o(r) === i && v.init(r), n === i) a === i && (a = v.CSS.getPropertyValue(r, t));
                        else {
                            var s = v.CSS.setPropertyValue(r, t, n);
                            "transform" === s[0] && v.CSS.flushTransformCache(r), a = s
                        }
                    }), a
                };
                var w = function() {
                    function e() {
                        return d ? k.promise || null : f
                    }

                    function a() {
                        function e(e) {
                            function f(e, t) {
                                var n = i,
                                    r = i,
                                    o = i;
                                return h.isArray(e) ? (n = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? o = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (r = t ? e[1] : s(e[1], c.duration), e[2] !== i && (o = e[2]))) : n = e, t || (r = r || c.easing), h.isFunction(n) && (n = n.call(a, T, S)), h.isFunction(o) && (o = o.call(a, T, S)), [n || 0, r, o]
                            }

                            function p(e, t) {
                                var n, i;
                                return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return n = e, ""
                                }), n || (n = b.Values.getUnitType(e)), [i, n]
                            }

                            function g() {
                                var e = {
                                        myParent: a.parentNode || n.body,
                                        position: b.getPropertyValue(a, "position"),
                                        fontSize: b.getPropertyValue(a, "fontSize")
                                    },
                                    i = e.position === L.lastPosition && e.myParent === L.lastParent,
                                    r = e.fontSize === L.lastFontSize;
                                L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                                var s = 100,
                                    l = {};
                                if (r && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                else {
                                    var c = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    v.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, "hidden")
                                    }), v.CSS.setPropertyValue(c, "position", e.position), v.CSS.setPropertyValue(c, "fontSize", e.fontSize), v.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, s + "%")
                                    }), v.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                }
                                return null === L.remToPx && (L.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                            }
                            if (c.begin && 0 === T) try {
                                c.begin.call(m, m)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === E) {
                                var w, x, C, O = /^x$/i.test(c.axis) ? "Left" : "Top",
                                    A = parseFloat(c.offset) || 0;
                                c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, C = (w = c.container["scroll" + O]) + u(a).position()[O.toLowerCase()] + A) : c.container = null : (w = v.State.scrollAnchor[v.State["scrollProperty" + O]], x = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === O ? "Top" : "Left")]], C = u(a).offset()[O.toLowerCase()] + A), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: C,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: O,
                                            alternateValue: x
                                        }
                                    },
                                    element: a
                                }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, a)
                            } else if ("reverse" === E) {
                                if (!o(a).tweensContainer) return void u.dequeue(a, c.queue);
                                "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, _.easing || delete c.easing, _.duration || delete c.duration, c = u.extend({}, o(a).opts, c);
                                var P = u.extend(!0, {}, o(a).tweensContainer);
                                for (var D in P)
                                    if ("element" !== D) {
                                        var I = P[D].startValue;
                                        P[D].startValue = P[D].currentValue = P[D].endValue, P[D].endValue = I, h.isEmptyObject(_) || (P[D].easing = c.easing), v.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(P[D]), a)
                                    }
                                d = P
                            } else if ("start" === E) {
                                for (var N in o(a).tweensContainer && !0 === o(a).isAnimating && (P = o(a).tweensContainer), u.each(y, function(e, t) {
                                        if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                            var n = f(t, !0),
                                                r = n[0],
                                                o = n[1],
                                                a = n[2];
                                            if (b.RegEx.isHex.test(r)) {
                                                for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(r), c = a ? b.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                                    var d = [l[u]];
                                                    o && d.push(o), c !== i && d.push(c[u]), y[e + s[u]] = d
                                                }
                                                delete y[e]
                                            }
                                        }
                                    }), y) {
                                    var M = f(y[N]),
                                        H = M[0],
                                        $ = M[1],
                                        W = M[2];
                                    N = b.Names.camelCase(N);
                                    var R = b.Hooks.getRoot(N),
                                        q = !1;
                                    if (o(a).isSVG || "tween" === R || !1 !== b.Names.prefixCheck(R)[1] || b.Normalizations.registered[R] !== i) {
                                        (c.display !== i && null !== c.display && "none" !== c.display || c.visibility !== i && "hidden" !== c.visibility) && /opacity|filter/.test(N) && !W && 0 !== H && (W = 0), c._cacheValues && P && P[N] ? (W === i && (W = P[N].endValue + P[N].unitType), q = o(a).rootPropertyValueCache[R]) : b.Hooks.registered[N] ? W === i ? (q = b.getPropertyValue(a, R), W = b.getPropertyValue(a, N, q)) : q = b.Hooks.templates[R][1] : W === i && (W = b.getPropertyValue(a, N));
                                        var F, B, V, X = !1;
                                        if (W = (F = p(N, W))[0], V = F[1], H = (F = p(N, H))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return X = t, ""
                                            }), B = F[1], W = parseFloat(W) || 0, H = parseFloat(H) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(N) ? (H /= 100, B = "em") : /^scale/.test(N) ? (H /= 100, B = "") : /(Red|Green|Blue)$/i.test(N) && (H = H / 100 * 255, B = "")), /[\/*]/.test(X)) B = V;
                                        else if (V !== B && 0 !== W)
                                            if (0 === H) B = V;
                                            else {
                                                r = r || g();
                                                var Y = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                                switch (V) {
                                                    case "%":
                                                        W *= "x" === Y ? r.percentToPxWidth : r.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= r[V + "ToPx"]
                                                }
                                                switch (B) {
                                                    case "%":
                                                        W *= 1 / ("x" === Y ? r.percentToPxWidth : r.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= 1 / r[B + "ToPx"]
                                                }
                                            }
                                        switch (X) {
                                            case "+":
                                                H = W + H;
                                                break;
                                            case "-":
                                                H = W - H;
                                                break;
                                            case "*":
                                                H *= W;
                                                break;
                                            case "/":
                                                H = W / H
                                        }
                                        d[N] = {
                                            rootPropertyValue: q,
                                            startValue: W,
                                            currentValue: W,
                                            endValue: H,
                                            unitType: B,
                                            easing: $
                                        }, v.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(d[N]), a)
                                    } else v.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                                }
                                d.element = a
                            }
                            d.element && (b.Values.addClass(a, "velocity-animating"), j.push(d), "" === c.queue && (o(a).tweensContainer = d, o(a).opts = c), o(a).isAnimating = !0, T === S - 1 ? (v.State.calls.push([j, m, c, null, k.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : T++)
                        }
                        var r, a = this,
                            c = u.extend({}, v.defaults, _),
                            d = {};
                        switch (o(a) === i && v.init(a), parseFloat(c.delay) && !1 !== c.queue && u.queue(a, c.queue, function(e) {
                            v.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(c.delay)),
                                next: e
                            }
                        }), c.duration.toString().toLowerCase()) {
                            case "fast":
                                c.duration = 200;
                                break;
                            case "normal":
                                c.duration = g;
                                break;
                            case "slow":
                                c.duration = 600;
                                break;
                            default:
                                c.duration = parseFloat(c.duration) || 1
                        }!1 !== v.mock && (!0 === v.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(v.mock) || 1, c.delay *= parseFloat(v.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== i && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = v.CSS.Values.getDisplayType(a))), c.visibility !== i && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(a, c.queue, function(t, n) {
                            return !0 === n ? (k.promise && k.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e())
                        }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(a)[0] || u.dequeue(a)
                    }
                    var d, f, p, m, y, _, x = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                    if (h.isWrapped(this) ? (d = !1, p = 0, m = this, f = this) : (d = !0, p = 1, m = x ? arguments[0].elements || arguments[0].e : arguments[0]), m = r(m)) {
                        x ? (y = arguments[0].properties || arguments[0].p, _ = arguments[0].options || arguments[0].o) : (y = arguments[p], _ = arguments[p + 1]);
                        var S = m.length,
                            T = 0;
                        if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(_)) {
                            _ = {};
                            for (var C = p + 1; C < arguments.length; C++) h.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? h.isString(arguments[C]) || h.isArray(arguments[C]) ? _.easing = arguments[C] : h.isFunction(arguments[C]) && (_.complete = arguments[C]) : _.duration = arguments[C]
                        }
                        var E, k = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && v.Promise && (k.promise = new v.Promise(function(e, t) {
                            k.resolver = e, k.rejecter = t
                        })), y) {
                            case "scroll":
                                E = "scroll";
                                break;
                            case "reverse":
                                E = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                u.each(m, function(e, t) {
                                    o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                                });
                                var O = [];
                                return u.each(v.State.calls, function(e, t) {
                                    t && u.each(t[1], function(n, r) {
                                        var a = _ === i ? "" : _;
                                        return !0 !== a && t[2].queue !== a && (_ !== i || !1 !== t[2].queue) || void u.each(m, function(n, i) {
                                            i === r && ((!0 === _ || h.isString(_)) && (u.each(u.queue(i, h.isString(_) ? _ : ""), function(e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            }), u.queue(i, h.isString(_) ? _ : "", [])), "stop" === y ? (o(i) && o(i).tweensContainer && !1 !== a && u.each(o(i).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), O.push(e)) : "finish" === y && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === y && (u.each(O, function(e, t) {
                                    c(t, !0)
                                }), k.promise && k.resolver(m)), e();
                            default:
                                if (!u.isPlainObject(y) || h.isEmptyObject(y)) {
                                    if (h.isString(y) && v.Redirects[y]) {
                                        var A = (N = u.extend({}, _)).duration,
                                            P = N.delay || 0;
                                        return !0 === N.backwards && (m = u.extend(!0, [], m).reverse()), u.each(m, function(e, t) {
                                            parseFloat(N.stagger) ? N.delay = P + parseFloat(N.stagger) * e : h.isFunction(N.stagger) && (N.delay = P + N.stagger.call(t, e, S)), N.drag && (N.duration = parseFloat(A) || (/^(callout|transition)/.test(y) ? 1e3 : g), N.duration = Math.max(N.duration * (N.backwards ? 1 - e / S : (e + 1) / S), .75 * N.duration, 200)), v.Redirects[y].call(t, t, N || {}, e, S, m, k.promise ? k : i)
                                        }), e()
                                    }
                                    var D = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return k.promise ? k.rejecter(new Error(D)) : console.log(D), e()
                                }
                                E = "start"
                        }
                        var I, N, L = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            j = [];
                        if (u.each(m, function(e, t) {
                                h.isNode(t) && a.call(t)
                            }), (N = u.extend({}, v.defaults, _)).loop = parseInt(N.loop), I = 2 * N.loop - 1, N.loop)
                            for (var M = 0; I > M; M++) {
                                var H = {
                                    delay: N.delay,
                                    progress: N.progress
                                };
                                M === I - 1 && (H.display = N.display, H.visibility = N.visibility, H.complete = N.complete), w(m, "reverse", H)
                            }
                        return e()
                    }
                };
                (v = u.extend(w, v)).animate = w;
                var _ = t.requestAnimationFrame || f;
                return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                    n.hidden ? (_ = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, l()) : _ = t.requestAnimationFrame || f
                }), e.Velocity = v, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = v.defaults), u.each(["Down", "Up"], function(e, t) {
                    v.Redirects["slide" + t] = function(e, n, r, o, a, s) {
                        var l = u.extend({}, n),
                            c = l.begin,
                            d = l.complete,
                            f = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            h = {};
                        l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var n in c && c.call(a, a), f) {
                                h[n] = e.style[n];
                                var i = v.CSS.getPropertyValue(e, n);
                                f[n] = "Down" === t ? [i, 0] : [0, i]
                            }
                            h.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in h) e.style[t] = h[t];
                            d && d.call(a, a), s && s.resolver(a)
                        }, v(e, f, l)
                    }
                }), u.each(["In", "Out"], function(e, t) {
                    v.Redirects["fade" + t] = function(e, n, r, o, a, s) {
                        var l = u.extend({}, n),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = r !== o - 1 ? l.begin = null : function() {
                            d && d.call(a, a), s && s.resolver(a)
                        }, l.display === i && (l.display = "In" === t ? "auto" : "none"), v(this, c, l)
                    }
                }), v
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(e) {
        WOW = function() {
            return {
                init: function() {
                    var t = [],
                        n = 1;

                    function i() {
                        var n = window.innerHeight,
                            i = window.scrollY;
                        e(".wow").each(function() {
                            if ("visible" != e(this).css("visibility") && (n + i - 100 > r(this) && i < r(this) || n + i - 100 > r(this) + e(this).height() && i < r(this) + e(this).height() || n + i == e(document).height() && r(this) + 100 > e(document).height())) {
                                var o = e(this).index(".wow"),
                                    a = e(this).attr("data-wow-delay");
                                if (a) {
                                    a = e(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(a);
                                    e(s).addClass("animated"), e(s).css({
                                        visibility: "visible"
                                    }), e(s).css({
                                        "animation-delay": a
                                    }), e(s).css({
                                        "animation-name": t[o]
                                    });
                                    var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                    e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                } else {
                                    e(this).addClass("animated"), e(this).css({
                                        visibility: "visible"
                                    }), e(this).css({
                                        "animation-name": t[o]
                                    });
                                    l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function r(e) {
                        var t = e.getBoundingClientRect(),
                            n = document.body,
                            i = document.documentElement,
                            r = window.pageYOffset || i.scrollTop || n.scrollTop,
                            o = i.clientTop || n.clientTop || 0,
                            a = t.top + r - o;
                        return Math.round(a)
                    }
                    e(".wow").each(function() {
                        e(this).css({
                            visibility: "hidden"
                        }), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({
                            "animation-name": "none"
                        })
                    }), e(window).scroll(function() {
                        var t, o;
                        n ? (t = window.innerHeight, o = window.scrollY, e(".wow.animated").each(function() {
                            if (t + o - 100 > r(this) && o > r(this) + 100 || t + o - 100 < r(this) && o < r(this) + 100 || r(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({
                                "animation-name": "none"
                            }), e(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var n = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (n += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                var i = this;
                                setTimeout(function() {
                                    e(i).removeClass("animated")
                                }, n)
                            }
                        }), i(), n--) : i()
                    }), e(".wow").each(function() {
                        var n = e(this).index(".wow"),
                            i = e(this).attr("data-wow-delay");
                        i ? (i = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(i), e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-delay": i + "s"
                        }), e(this).css({
                            "animation-name": t[n]
                        })) : (e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-name": t[n]
                        }))
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        e(window).on("scroll", function() {
            var t = e(".navbar");
            t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function r(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function o(e) {
            var i, o = n.call(e);
            return "[object String]" === o ? t(e) : r(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(o) && e.hasOwnProperty("length") ? e : r(i = e) && i.nodeType > 0 ? [e] : []
        }

        function a(e) {
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument;
            return t = r.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function(e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(r), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }
        }

        function s(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", t.appendChild(i);
                    var r = a(t),
                        o = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (o = e.touches[0].pageY - r.top, c = e.touches[0].pageX - r.left) : (o = e.pageY - r.top, c = e.pageX - r.left), c = c >= 0 ? c : 0, o = o >= 0 ? o : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", c), i.setAttribute("data-y", o), i.setAttribute("data-scale", u), i.setAttribute("data-translate", d);
                    var f = {
                        top: o + "px",
                        left: c + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", s(f)), i.classList.remove("waves-notransition"), f["-webkit-transform"] = u + " " + d, f["-moz-transform"] = u + " " + d, f["-ms-transform"] = u + " " + d, f["-o-transform"] = u + " " + d, f.transform = u + " " + d, f.opacity = "1";
                    var h = "mousemove" === e.type ? 2500 : l.duration;
                    f["-webkit-transition-duration"] = h + "ms", f["-moz-transition-duration"] = h + "ms", f["-o-transition-duration"] = h + "ms", f["transition-duration"] = h + "ms", i.setAttribute("style", s(f))
                },
                hide: function(e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), r = 0, o = n.length; r < o; r++) u(e, t, n[r]);
                    i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("span");
                        n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        t.replaceChild(n, e), n.appendChild(e)
                    }
                }
            };

        function u(e, t, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    r = n.getAttribute("data-y"),
                    o = n.getAttribute("data-scale"),
                    a = n.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function() {
                    var e = {
                        top: r + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": o + " " + a,
                        "-moz-transform": o + " " + a,
                        "-ms-transform": o + " " + a,
                        "-o-transform": o + " " + a,
                        transform: o + " " + a
                    };
                    n.setAttribute("style", s(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function(e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function f(e) {
            var t = function(e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var n = !1,
                        r = setTimeout(function() {
                            r = null, l.show(e, t)
                        }, l.delay),
                        o = function(i) {
                            r && (clearTimeout(r), r = null, l.show(e, t)), n || (n = !0, l.hide(i, t)), s()
                        },
                        a = function(e) {
                            r && (clearTimeout(r), r = null), o(e), s()
                        };
                    t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1);
                    var s = function() {
                        t.removeEventListener("touchmove", a), t.removeEventListener("touchend", o), t.removeEventListener("touchcancel", o)
                    }
                } else l.show(e, t), i && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", f, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", f, !1)
        }, e.attach = function(e, t) {
            var i, r;
            e = o(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var a = 0, s = e.length; a < s; a++) r = (i = e[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(r) && (c[r](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
        }, e.ripple = function(e, t) {
            var n = (e = o(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n)
                for (var i, r, s, c = {}, u = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, f = function(e, t) {
                        return function() {
                            l.hide(e, t)
                        }
                    }; u < n; u++)
                    if (i = e[u], r = t.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, s = a(i), c.x = s.left + r.x, c.y = s.top + r.y, d.pageX = c.x, d.pageY = c.y, l.show(d, i), t.wait >= 0 && null !== t.wait) {
                        setTimeout(f({
                            type: "mouseup",
                            button: 1
                        }, i), t.wait)
                    }
        }, e.calm = function(e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = (e = o(e)).length; n < i; n++) l.hide(t, e[n])
        }, e.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init();
var _this = void 0;
! function(e) {
    var t, n, i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"),
        r = function(e) {
            var t = e.siblings("label, i"),
                n = e.val().length,
                i = e.attr("placeholder");
            t["".concat(n || i ? "add" : "remove", "Class")]("active")
        },
        o = function(e) {
            if (e.hasClass("validate")) {
                var t = e.val(),
                    n = !t.length,
                    i = !e[0].validity.badInput;
                if (n && i) e.removeClass("valid").removeClass("invalid");
                else {
                    var r = e.is(":valid"),
                        o = Number(e.attr("length")) || 0;
                    r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        },
        a = function() {
            var t = e(_this);
            if (t.val().length) {
                var n = e(".hiddendiv"),
                    i = t.css("font-family"),
                    r = t.css("font-size");
                r && n.css("font-size", r), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(t.val(), "\n"));
                var o = n.html().replace(/\n/g, "<br>");
                n.html(o), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
            }
        };
    e(i).each(function(t, n) {
        var i = e(n),
            o = i.siblings("label, i");
        r(i), n.validity.badInput && o.addClass("active")
    }), e(document).on("focus", i, function(t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", i, function(t) {
        var n = e(t.target),
            i = !n.val(),
            r = !t.target.validity.badInput,
            a = void 0 === n.attr("placeholder");
        i && r && a && n.siblings("label, i").removeClass("active"), o(n)
    }), e(document).on("change", i, function(t) {
        var n = e(t.target);
        r(n), o(n)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(t) {
        var n = e(t.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function(t, n) {
            var i = e(n),
                r = !i.val(),
                o = !i.attr("placeholder");
            r && o && i.siblings("label, i").removeClass("active")
        }), n.find("select.initialized").each(function(t, n) {
            var i = e(n),
                r = i.siblings("input.select-dropdown"),
                o = i.children("[selected]").val();
            i.val(o), r.val(o)
        }))
    }), (n = e(".md-textarea-auto")).length && (t = window.attachEvent ? function(e, t, n) {
        e.attachEvent("on".concat(t), n)
    } : function(e, t, n) {
        e.addEventListener(t, n, !1)
    }, n.each(function() {
        var e = this;

        function n() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function i() {
            window.setTimeout(n, 0)
        }
        t(e, "change", n), t(e, "cut", i), t(e, "paste", i), t(e, "drop", i), t(e, "keydown", i), n()
    }));
    var s = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    e(".materialize-textarea").each(a), s.on("keyup keydown", ".materialize-textarea", a)
}(jQuery),
function(e) {
    e(".input-default-wrapper").on("change", ".input-default-js", function(t) {
        var n = e(t.target),
            i = n.next("label"),
            r = n[0].files,
            o = "";
        r && r.length > 1 ? o = (n.attr("data-multiple-target") || "").replace("{target}", r.length) : t.target.value && (o = t.target.value.split("\\").pop()), o ? i.find(".span-choose-file").html(o) : i.html(i.html())
    })
}(jQuery), $(document).ready(function() {
        $("body").attr("aria-busy", !0), $("#preloader-markup").load("mdb-addons/preloader.html", function() {
            $(window).on("load", function() {
                $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
            })
        })
    }),
    function(e) {
        e(document).on("click.card", ".card", function(t) {
            if (e(this).find(".card-reveal").length) {
                var n = e(t.target),
                    i = n.is(".card-reveal .card-title"),
                    r = n.is(".card-reveal .card-title i"),
                    o = n.is(".card .activator"),
                    a = n.is(".card .activator i");
                i || r ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (o || a) && e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            }
        }), e(".rotate-btn").on("click", function() {
            var t = e(this).attr("data-card");
            e("#".concat(t)).toggleClass("flipped")
        }), e(window).on("load", function() {
            var t = e(".front").outerHeight(),
                n = e(".back").outerHeight();
            t > n ? e(".card-wrapper, .back").height(t) : t > n ? e(".card-wrapper, .front").height(n) : e(".card-wrapper").height(n)
        }), e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        })
    }(jQuery), $(".map-card").click(function() {
        $(".card-body").toggleClass("closed")
    }),
    function(e) {
        function t() {
            var t = Number(e(this).attr("length")),
                n = Number(e(this).val().length),
                i = n <= t;
            e(this).parent().find('span[class="character-counter"]').html("".concat(n, "/").concat(t)),
                function(e, t) {
                    var n = t.hasClass("invalid");
                    e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
                }(i, e(this))
        }

        function n() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }
        e.fn.characterCounter = function() {
            return this.each(function() {
                var i, r;
                void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i = e(this), r = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(r))
            })
        }, e(document).ready(function() {
            e("input, textarea").characterCounter()
        })
    }(jQuery),
    function(e) {
        e(["jquery"], function(e) {
            return function() {
                var t, n, i, r = 0,
                    o = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    a = {
                        clear: function(n, i) {
                            var r = d();
                            t || s(r);
                            l(n, r, i) || function(n) {
                                for (var i = t.children(), r = i.length - 1; r >= 0; r--) l(e(i[r]), n)
                            }(r)
                        },
                        remove: function(n) {
                            var i = d();
                            t || s(i);
                            if (n && 0 === e(":focus", n).length) return void f(n);
                            t.children().length && t.remove()
                        },
                        error: function(e, t, n) {
                            return u({
                                type: o.error,
                                iconClass: d().iconClasses.error,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        getContainer: s,
                        info: function(e, t, n) {
                            return u({
                                type: o.info,
                                iconClass: d().iconClasses.info,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        options: {},
                        subscribe: function(e) {
                            n = e
                        },
                        success: function(e, t, n) {
                            return u({
                                type: o.success,
                                iconClass: d().iconClasses.success,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        version: "2.1.1",
                        warning: function(e, t, n) {
                            return u({
                                type: o.warning,
                                iconClass: d().iconClasses.warning,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        }
                    };
                return a;

                function s(n, i) {
                    return n || (n = d()), (t = e("#" + n.containerId)).length ? t : (i && (t = function(n) {
                        return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                    }(n)), t)
                }

                function l(t, n, i) {
                    var r = !(!i || !i.force) && i.force;
                    return !(!t || !r && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function() {
                            f(t)
                        }
                    }), !0)
                }

                function c(e) {
                    n && n(e)
                }

                function u(n) {
                    var o = d(),
                        a = n.iconClass || o.iconClass;
                    if (void 0 !== n.optionsOverride && (o = e.extend(o, n.optionsOverride), a = n.optionsOverride.iconClass || a), ! function(e, t) {
                            if (e.preventDuplicates) {
                                if (t.message === i) return !0;
                                i = t.message
                            }
                            return !1
                        }(o, n)) {
                        r++, t = s(o, !0);
                        var l = null,
                            u = e("<div/>"),
                            h = e("<div/>"),
                            p = e("<div/>"),
                            g = e("<div/>"),
                            m = e(o.closeHtml),
                            v = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            y = {
                                toastId: r,
                                state: "visible",
                                startTime: new Date,
                                options: o,
                                map: n
                            };
                        return n.iconClass && u.addClass(o.toastClass).addClass(a), n.title && (h.append(n.title).addClass(o.titleClass), u.append(h)), n.message && (p.append(n.message).addClass(o.messageClass), u.append(p)), o.closeButton && (m.addClass("md-toast-close-button").attr("role", "button"), u.prepend(m)), o.progressBar && (g.addClass("md-toast-progress"), u.prepend(g)), o.newestOnTop ? t.prepend(u) : t.append(u), u.hide(), u[o.showMethod]({
                                duration: o.showDuration,
                                easing: o.showEasing,
                                complete: o.onShown
                            }), o.timeOut > 0 && (l = setTimeout(b, o.timeOut), v.maxHideTime = parseFloat(o.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, o.progressBar && (v.intervalId = setInterval(x, 10))),
                            function() {
                                u.hover(_, w), !o.onclick && o.tapToDismiss && u.click(b);
                                o.closeButton && m && m.click(function(e) {
                                    e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                                });
                                o.onclick && u.click(function() {
                                    o.onclick(), b()
                                })
                            }(), c(y), o.debug && console && console.log(y), u
                    }

                    function b(t) {
                        if (!e(":focus", u).length || t) return clearTimeout(v.intervalId), u[o.hideMethod]({
                            duration: o.hideDuration,
                            easing: o.hideEasing,
                            complete: function() {
                                f(u), o.onHidden && "hidden" !== y.state && o.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                            }
                        })
                    }

                    function w() {
                        (o.timeOut > 0 || o.extendedTimeOut > 0) && (l = setTimeout(b, o.extendedTimeOut), v.maxHideTime = parseFloat(o.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                    }

                    function _() {
                        clearTimeout(l), v.hideEta = 0, u.stop(!0, !0)[o.showMethod]({
                            duration: o.showDuration,
                            easing: o.showEasing
                        })
                    }

                    function x() {
                        var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                        g.width(e + "%")
                    }
                }

                function d() {
                    return e.extend({}, {
                        tapToDismiss: !0,
                        toastClass: "md-toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "md-toast-error",
                            info: "md-toast-info",
                            success: "md-toast-success",
                            warning: "md-toast-warning"
                        },
                        iconClass: "md-toast-info",
                        positionClass: "md-toast-top-right",
                        timeOut: 5e3,
                        titleClass: "md-toast-title",
                        messageClass: "md-toast-message",
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }, a.options)
                }

                function f(e) {
                    t || (t = s()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
                }
            }()
        })
    }("function" == typeof define && define.amd ? define : function(e, t) {
        "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
    });
var SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function() {
        var e = $(this).attr("href");
        if (void 0 !== e && 0 === e.indexOf("#")) {
            var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                n = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(e).offset().top - t
            }, SMOOTH_SCROLL_DURATION), void 0 !== n && !1 !== n && history.replaceState(null, null, e), !1
        }
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            this.each(function() {
                var n = e(this),
                    i = e.extend({}, e.fn.dropdown.defaults, t),
                    r = !1,
                    o = e("#".concat(n.attr("data-activates")));

                function a() {
                    void 0 !== n.data("induration") && (i.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (i.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (i.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (i.hover = n.data("hover")), void 0 !== n.data("gutter") && (i.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (i.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (i.alignment = n.data("alignment"))
                }

                function s(t) {
                    "focus" === t && (r = !0), a(), o.addClass("active"), n.addClass("active"), !0 === i.constrain_width ? o.css("width", n.outerWidth()) : o.css("white-space", "nowrap");
                    var s = window.innerHeight,
                        l = n.innerHeight(),
                        c = n.offset().left,
                        u = n.offset().top - e(window).scrollTop(),
                        d = i.alignment,
                        f = 0,
                        h = 0,
                        p = 0;
                    !0 === i.belowOrigin && (p = l);
                    var g = 0,
                        m = n.parent();
                    if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop), c + o.innerWidth() > e(window).width() ? d = "right" : c - o.innerWidth() + n.innerWidth() < 0 && (d = "left"), u + o.innerHeight() > s)
                        if (u + l - o.innerHeight() < 0) {
                            var v = s - u - p;
                            o.css("max-height", v)
                        } else p || (p += l), p -= o.innerHeight();
                    if ("left" === d) f = i.gutter, h = n.position().left + f;
                    else if ("right" === d) {
                        h = n.position().left + n.outerWidth() - o.outerWidth() + (f = -i.gutter)
                    }
                    o.css({
                        position: "absolute",
                        top: n.position().top + p + g,
                        left: h
                    }), o.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1,
                        scrollTop: 0
                    }, {
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    r = !1, o.fadeOut(i.outDuration), o.removeClass("active"), n.removeClass("active"), setTimeout(function() {
                        o.css("max-height", "")
                    }, i.outDuration)
                }
                if (a(), n.after(o), i.hover) {
                    var c = !1;
                    n.unbind("click.".concat(n.attr("id"))), n.on("mouseenter", function() {
                        !1 === c && (s(), c = !0)
                    }), n.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-content").is(o) || (o.stop(!0, !0), l(), c = !1)
                    }), o.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(n) || (o.stop(!0, !0), l(), c = !1)
                    })
                } else n.unbind("click.".concat(n.attr("id"))), n.bind("click.".concat(n.attr("id")), function(t) {
                    r || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (l(), e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")))) : (t.preventDefault(), s("click")), o.hasClass("active") && e(document).bind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")), function(t) {
                        o.is(t.target) || n.is(t.target) || n.find(t.target).length || (l(), e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id"))))
                    }))
                });
                n.on("open", function(e, t) {
                    s(t)
                }), n.on("close", l)
            })
        }, e.fn.dropdown.defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function(t) {
            var n = e(this).find("input");
            this.filter(function(t, i) {
                e(i).on("keyup", function() {
                    for (var e = n.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(n.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
                })
            });
            var i = e.extend({
                color: "#000",
                backgroundColor: "",
                fontSize: ".9rem",
                fontWeight: "400",
                borderRadius: "",
                borderColor: ""
            }, t);
            return this.css({
                color: i.color,
                backgroundColor: i.backgroundColor,
                fontSize: i.fontSize,
                fontWeight: i.fontWeight,
                borderRadius: i.borderRadius,
                border: i.border,
                margin: i.margin
            })
        }
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        n = "fadeOut",
        i = $(e),
        r = $(".dropdown-menu", e),
        o = i.parents("ul.nav");
    return o.height > 0 && (t = o.data("dropdown-in") || null, n = o.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: r,
        effectIn: r.data("dropdown-in") || t,
        effectOut: r.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e)
        },
        "hide.bs.dropdown": function(e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
            }))
        }
    }),
    function(e) {
        var t = this;
        e(document).ready(function() {
            e(document).on("mouseenter", ".fixed-action-btn", function() {
                var t = e(this);
                n(t)
            }), e(document).on("mouseleave", ".fixed-action-btn", function() {
                var t = e(this);
                i(t)
            }), e(document).on("click", ".fixed-action-btn > a", function() {
                var t = e(this).parent();
                t.hasClass("active") ? n(t) : i(t), t.hasClass("active") ? i(t) : n(t)
            })
        }), e.fn.extend({
            openFAB: function() {
                n(e(this))
            },
            closeFAB: function() {
                i(e(this))
            }
        });
        var n = function(e) {
                var t = e;
                t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.add("shown")
                }))
            },
            i = function(e) {
                e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.remove("shown")
                })
            };
        e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function(r) {
            if (!e(t).hasClass("smooth-scroll")) return r.preventDefault(), o = e(".fixed-action-btn"), (a = o).hasClass("active") ? i(a) : n(a), !1;
            var o, a
        })
    }(jQuery),
    function(e) {
        var t = 240,
            n = 1440,
            i = function() {
                function i(r, o) {
                    _classCallCheck(this, i), this.defaults = {
                        MENU_WIDTH: t,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: n
                    }, this.$element = r, this.options = this.assignOptions(o), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                return _createClass(i, [{
                    key: "init",
                    value: function() {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function() {
                        var e = this;
                        this.$dragTarget.on("click", function() {
                            e.removeMenu()
                        }), this.$dragTarget.on("touchstart", function(t) {
                            e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                        }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function(e) {
                        if ("touchmove" === e.type) {
                            var t = e.touches[0],
                                n = t.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (n > this.options.MENU_WIDTH ? n = this.options.MENU_WIDTH : n < 0 && (n = 0)), this.translateSidenavX(n), this.updateOverlayOpacity(n)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function(e) {
                        if ("left" === this.options.edge) {
                            var t = e >= this.options.MENU_WIDTH / 2;
                            this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                        } else {
                            var n = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                            this.menuOut = n;
                            var i = e - this.options.MENU_WIDTH / 2;
                            i < 0 && (i = 0), this.$menu.css("transform", "translateX(".concat(i, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function(e) {
                        var t;
                        t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({
                            opacity: t
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function() {
                        var t = this;
                        this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function() {
                            t.removeMenu()
                        }), this.$body.append(this.$sidenavOverlay)
                    }
                }, {
                    key: "disableScrolling",
                    value: function() {
                        var e = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(e)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function(e) {
                        if ("touchend" === e.type) {
                            var t = e.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                            var n = this.calculateTouchVelocityX(),
                                i = t.clientX,
                                r = i - this.options.MENU_WIDTH,
                                o = i - this.options.MENU_WIDTH / 2;
                            r > 0 && (r = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && n <= .3 || n < -.5 ? (0 !== r && this.translateMenuX([0, r], "300"), this.showSidenavOverlay()) : (!this.menuOut || n > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, r], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && n >= -.3 || n > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || n < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function() {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.velocityX,
                                n = e.gesture.center.x,
                                i = n - this.options.MENU_WIDTH,
                                r = n - this.options.MENU_WIDTH / 2;
                            i > 0 && (i = 0), r < 0 && (r = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== i && this.translateMenuX([0, i], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, i], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, r], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function(e, t) {
                        this.$menu.velocity({
                            translateX: e
                        }, {
                            duration: "string" == typeof t ? Number(t) : t,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), this.$sidenavOverlay = e()
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function() {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function() {
                        var t = this;
                        this.$element.on("click", function(n) {
                            if (n.preventDefault(), !0 === t.menuOut) t.menuOut = !1, t.removeMenu();
                            else {
                                t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay);
                                var i = [];
                                i = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], t.$menu.velocity({
                                    translateX: i
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }), t.$sidenavOverlay.on("click", function() {
                                    t.removeMenu()
                                })
                            }
                        })
                    }
                }, {
                    key: "closeOnClick",
                    value: function() {
                        var e = this;
                        !0 === this.options.closeOnClick && this.$menu.on("click", "a:not(.collapsible-header)", function() {
                            e.removeMenu()
                        })
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function() {
                        var t = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), e(window).resize(function() {
                            if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                            else if (!1 === t.menuOut) {
                                var e = "left" === t.options.edge ? "-100" : "100";
                                t.$menu.css("transform", "translateX(".concat(e, "%)"))
                            }
                        }))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function() {
                        var n = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH), n.css("width", this.options.MENU_WIDTH))
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "removeMenu",
                    value: function(e) {
                        var t = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.MENU_WIDTH))
                            }
                        }), this.hideSidenavOverlay()
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.trigger("click")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$sidenavOverlay.trigger("click")
                    }
                }]), i
            }();
        e.fn.sideNav = function(t) {
            return this.each(function() {
                new i(e(this), t)
            })
        }
    }(jQuery), $(function() {
        $("#toggle").click(function() {
            $("#slide-out").hasClass("slim") ? ($("#slide-out").removeClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left")) : ($("#slide-out").addClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"))
        })
    }),
    function(e) {
        e.fn.collapsible = function(t) {
            var n = {
                accordion: void 0
            };

            function i(t, n) {
                $panelHeaders = t.find("> li > .collapsible-header"), n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"), n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }), $panelHeaders.not(n).removeClass("active").parent().removeClass("active"), $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function r(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function o(e) {
                return a(e).length > 0
            }

            function a(e) {
                return e.closest("li > .collapsible-header")
            }
            return t = e.extend(n, t), this.each(function() {
                var n = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = n.data("collapsible");
                n.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = n.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                    var r = e(t.target);
                    o(r) && (r = a(r)), r.toggleClass("active"), i(n, r)
                }), i(n, s.filter(".active").first())) : s.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var n = e(t.target);
                        o(n) && (n = a(n)), n.toggleClass("active"), r(n)
                    }), e(this).hasClass("active") && r(e(this))
                })
            })
        }, e(".collapsible").collapsible()
    }(jQuery),
    function(e) {
        var t, n = "input[type=range]:not(.custom-range)",
            i = !1;
        e(document).on("change", n, function() {
            var t = e(this);
            t.siblings(".thumb").find(".value").html(t.val())
        }), e(document).on("input mousedown touchstart", n, function(r) {
            var o = e(this),
                a = o.siblings(".thumb"),
                s = o.outerWidth();
            if (!a.length && function() {
                    var t = e('<span class="thumb"><span class="value"></span></span>');
                    e(n).after(t)
                }(), a.find(".value").html(o.val()), i = !0, o.addClass("active"), a.hasClass("active") || a.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== r.type) {
                var l = void 0 === r.pageX || null === r.pageX;
                (t = l ? r.originalEvent.touches[0].pageX - e(this).offset().left : r.pageX - e(this).offset().left) < 0 ? t = 0 : t > s && (t = s), a.addClass("active").css("left", t)
            }
            a.find(".value").html(o.val())
        }), e(document).on("mouseup touchend", ".range-field", function() {
            i = !1, e(this).removeClass("active")
        }), e(document).on("mousemove touchmove", ".range-field", function(t) {
            var r, o = e(this).children(".thumb");
            if (i) {
                o.hasClass("active") || o.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), r = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var a = e(this).outerWidth();
                r < 0 ? r = 0 : r > a && (r = a), o.addClass("active").css("left", r), o.find(".value").html(o.siblings(n).val())
            }
        }), e(document).on("mouseout touchleave", ".range-field", function() {
            if (!i) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), t.removeClass("active")
            }
        })
    }(jQuery),
    function(e) {
        e(document).on("change", '.file-field input[type="file"]', function(t) {
            var n = e(t.target),
                i = n.closest(".file-field").find("input.file-path"),
                r = n[0].files,
                o = [];
            Array.isArray(r) ? r.forEach(function(e) {
                return o.push(e.name)
            }) : Object.keys(r).forEach(function(e) {
                o.push(r[e].name)
            }), i.val(o.join(", ")), i.trigger("change")
        })
    }(jQuery),
    function(e) {
        var t, n = function() {
            function t(n, i) {
                _classCallCheck(this, t), this.options = i, this.$nativeSelect = n, this.isMultiple = Boolean(this.$nativeSelect.attr("multiple")), this.isSearchable = Boolean(this.$nativeSelect.attr("searchable")), this.isRequired = Boolean(this.$nativeSelect.attr("required")), this.uuid = this._randomUUID(), this.$selectWrapper = e('<div class="select-wrapper"></div>'), this.$materialOptionsList = e('<ul id="select-options-'.concat(this.uuid, '" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = n.find("option:selected").html() || n.find("option:first").html() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = e('<input type="text" class="select-dropdown" readonly="true" '.concat(this.$nativeSelect.is(":disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.uuid, '" value=""/>')), this.$dropdownIcon = e('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$toggleAll = e('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>Select all</label></span></li>'), this.valuesSelected = [], this.keyCodes = {
                    tab: 9,
                    esc: 27,
                    enter: 13,
                    arrowUp: 38,
                    arrowDown: 40
                }, t.mutationObservers = []
            }
            return _createClass(t, [{
                key: "init",
                value: function() {
                    if (Boolean(this.$nativeSelect.data("select-id")) && this._removeMaterialWrapper(), "destroy" !== this.options) {
                        this.$nativeSelect.data("select-id", this.uuid), this.$selectWrapper.addClass(this.$nativeSelect.attr("class"));
                        var e = this.$materialSelectInitialOption.replace(/"/g, "&quot;");
                        this.$materialSelect.val(e), this.renderMaterialSelect(), this.bindEvents(), this.isRequired && this.enableValidation()
                    } else this.$nativeSelect.data("select-id", null).removeClass("initialized")
                }
            }, {
                key: "_removeMaterialWrapper",
                value: function() {
                    var t = this.$nativeSelect.data("select-id");
                    this.$nativeSelect.parent().find("span.caret").remove(), this.$nativeSelect.parent().find("input").remove(), this.$nativeSelect.unwrap(), e("ul#select-options-".concat(t)).remove()
                }
            }, {
                key: "renderMaterialSelect",
                value: function() {
                    var t = this;
                    if (this.$nativeSelect.before(this.$selectWrapper), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSaveSelectButton(), this.$nativeSelect.is(":disabled") || this.$materialSelect.dropdown({
                            hover: !1,
                            closeOnClick: !1
                        }), !1 !== this.$nativeSelect.data("inherit-tabindex") && this.$materialSelect.attr("tabindex", this.$nativeSelect.attr("tabindex")), this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function(n, i) {
                        var r = e(i).index();
                        t._toggleSelectedValue(r), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(r).find(":checkbox").prop("checked", !0)
                    });
                    else {
                        var n = this.$nativeSelect.find("option:selected").index();
                        this.$materialOptionsList.find("li").eq(n).addClass("active")
                    }
                    this.$nativeSelect.addClass("initialized")
                }
            }, {
                key: "appendDropdownIcon",
                value: function() {
                    this.$nativeSelect.is(":disabled") && this.$dropdownIcon.addClass("disabled"), this.$selectWrapper.append(this.$dropdownIcon)
                }
            }, {
                key: "appendMaterialSelect",
                value: function() {
                    this.$selectWrapper.append(this.$materialSelect)
                }
            }, {
                key: "appendMaterialOptionsList",
                value: function() {
                    this.isSearchable && this.appendSearchInputOption(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.$selectWrapper.append(this.$materialOptionsList)
                }
            }, {
                key: "appendNativeSelect",
                value: function() {
                    this.$nativeSelect.appendTo(this.$selectWrapper)
                }
            }, {
                key: "appendSearchInputOption",
                value: function() {
                    var t = this.$nativeSelect.attr("searchable");
                    this.$searchInput = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search form-control w-100 d-block" placeholder="'.concat(t, '"></div></span>')), this.$materialOptionsList.append(this.$searchInput)
                }
            }, {
                key: "appendToggleAllCheckbox",
                value: function() {
                    this.$materialOptionsList.find("li.disabled").first().after(this.$toggleAll)
                }
            }, {
                key: "appendSaveSelectButton",
                value: function() {
                    this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)
                }
            }, {
                key: "buildMaterialOptions",
                value: function() {
                    var t = this;
                    this.$nativeSelectChildren.each(function(n, i) {
                        var r = e(i);
                        if (r.is("option")) t.buildSingleOption(r, t.isMultiple ? "multiple" : "");
                        else if (r.is("optgroup")) {
                            var o = e('<li class="optgroup"><span>'.concat(r.attr("label"), "</span></li>"));
                            t.$materialOptionsList.append(o), r.children("option").each(function(n, i) {
                                t.buildSingleOption(e(i), "optgroup-option")
                            })
                        }
                    })
                }
            }, {
                key: "buildSingleOption",
                value: function(t, n) {
                    var i = t.is(":disabled") ? "disabled" : "",
                        r = "optgroup-option" === n ? "optgroup-option" : "",
                        o = t.data("icon"),
                        a = t.data("fas") ? '<i class="fas fa-'.concat(t.data("fas"), '"></i> ') : "",
                        s = t.attr("class"),
                        l = o ? '<img alt="" src="'.concat(o, '" class="').concat(s, '">') : "",
                        c = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
                    this.$materialOptionsList.append(e('<li class="'.concat(i, " ").concat(r, '">').concat(l, '<span class="filtrable">').concat(c).concat(a).concat(t.html(), "</span></li>")))
                }
            }, {
                key: "enableValidation",
                value: function() {
                    this.$nativeSelect.css({
                        position: "absolute",
                        top: "1rem",
                        left: "0",
                        height: "0",
                        width: "0",
                        opacity: "0",
                        padding: "0",
                        "pointer-events": "none"
                    }), -1 === this.$nativeSelect.attr("style").indexOf("inline!important") && this.$nativeSelect.attr("style", "".concat(this.$nativeSelect.attr("style"), " display: inline!important;")), this.$nativeSelect.attr("tabindex", -1), this.$nativeSelect.data("inherit-tabindex", !1)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var n = this,
                        i = new MutationObserver(this._onMutationObserverChange.bind(this));
                    i.observe(this.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), i.customId = this.uuid, i.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(i), this.$nativeSelect.parent().find("button.btn-save").on("click", this._onSaveSelectBtnClick), this.$materialSelect.on("focus", this._onMaterialSelectFocus.bind(this)), this.$materialSelect.on("click", this._onMaterialSelectClick.bind(this)), this.$materialSelect.on("blur", this._onMaterialSelectBlur.bind(this)), this.$materialSelect.on("keydown", this._onMaterialSelectKeydown.bind(this)), this.$toggleAll.on("click", this._onToggleAllClick.bind(this)), this.$materialOptionsList.on("mousedown", this._onEachMaterialOptionMousedown.bind(this)), this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(t, i) {
                        e(i).on("click", n._onEachMaterialOptionClick.bind(n, t, i))
                    }), !this.isMultiple && this.isSearchable && this.$materialOptionsList.find("li").on("click", this._onSingleMaterialOptionClick.bind(this)), this.isSearchable && this.$searchInput.find(".search").on("keyup", this._onSearchInputKeyup), e("html").on("click", this._onHTMLClick.bind(this))
                }
            }, {
                key: "_onMutationObserverChange",
                value: function(n) {
                    n.forEach(function(n) {
                        var i = e(n.target).closest("select");
                        !0 !== i.data("stop-refresh") && ("childList" === n.type || "attributes" === n.type && e(n.target).is("option")) && (t.clearMutationObservers(), i.materialSelect("destroy"), i.materialSelect())
                    })
                }
            }, {
                key: "_onSaveSelectBtnClick",
                value: function() {
                    e("input.select-dropdown").trigger("close")
                }
            }, {
                key: "_onEachMaterialOptionClick",
                value: function(t, n, i) {
                    i.stopPropagation();
                    var r = e(n);
                    if (!r.hasClass("disabled") && !r.hasClass("optgroup")) {
                        var o = !0;
                        if (this.isMultiple) {
                            r.find('input[type="checkbox"]').prop("checked", function(e, t) {
                                return !t
                            });
                            var a = Boolean(this.$nativeSelect.find("optgroup").length),
                                s = this._isToggleAllPresent() ? r.index() - 1 : r.index();
                            o = this.isSearchable && a ? this._toggleSelectedValue(s - r.prevAll(".optgroup").length - 1) : this.isSearchable ? this._toggleSelectedValue(s - 1) : a ? this._toggleSelectedValue(s - r.prevAll(".optgroup").length) : this._toggleSelectedValue(s), this._isToggleAllPresent() && this._updateToggleAllOption(), this.$materialSelect.trigger("focus")
                        } else this.$materialOptionsList.find("li").removeClass("active"), r.toggleClass("active"), this.$materialSelect.val(r.text()), this.$materialSelect.trigger("close");
                        this._selectSingleOption(r), this.$nativeSelect.data("stop-refresh", !0), this.$nativeSelect.find("option").eq(t).prop("selected", o), this.$nativeSelect.removeData("stop-refresh"), this._triggerChangeOnNativeSelect(), "function" == typeof this.options && this.options()
                    }
                }
            }, {
                key: "_triggerChangeOnNativeSelect",
                value: function() {
                    var e = new KeyboardEvent("change", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    this.$nativeSelect.get(0).dispatchEvent(e)
                }
            }, {
                key: "_onMaterialSelectFocus",
                value: function(t) {
                    var n = e(t.target);
                    if (e("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible") && e("input.select-dropdown").trigger("close"), !this.$materialOptionsList.is(":visible")) {
                        n.trigger("open", ["focus"]);
                        var i = n.val(),
                            r = this.$materialOptionsList.find("li").filter(function() {
                                return e(this).text().toLowerCase() === i.toLowerCase()
                            })[0];
                        this._selectSingleOption(r)
                    }
                }
            }, {
                key: "_onMaterialSelectClick",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "_onMaterialSelectBlur",
                value: function(t) {
                    var n = e(t);
                    this.isMultiple || this.isSearchable || n.trigger("close"), this.$materialOptionsList.find("li.selected").removeClass("selected")
                }
            }, {
                key: "_onSingleMaterialOptionClick",
                value: function() {
                    this.$materialSelect.trigger("close")
                }
            }, {
                key: "_onEachMaterialOptionMousedown",
                value: function(t) {
                    var n = t.target;
                    e(".modal-content").find(this.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault()
                }
            }, {
                key: "_onHTMLClick",
                value: function(t) {
                    e(t.target).closest("#select-options-".concat(this.uuid)).length || this.$materialSelect.trigger("close")
                }
            }, {
                key: "_onToggleAllClick",
                value: function() {
                    var t = this,
                        n = e(this.$toggleAll).find('input[type="checkbox"]').first(),
                        i = !e(n).prop("checked");
                    e(n).prop("checked", i), this.$materialOptionsList.find("li:not(.optgroup):not(.disabled):not(.select-toggle-all)").each(function(n, r) {
                        var o = e(r).find('input[type="checkbox"]');
                        i && o.is(":checked") || !i && !o.is(":checked") || (t._isToggleAllPresent() && n++, o.prop("checked", i), t.$nativeSelect.find("option").eq(n).prop("selected", i), i ? e(r).removeClass("active") : e(r).addClass("active"), t._toggleSelectedValue(n), t._selectOption(r), t._setValueToMaterialSelect())
                    }), this.$nativeSelect.data("stop-refresh", !0), this._triggerChangeOnNativeSelect(), this.$nativeSelect.removeData("stop-refresh")
                }
            }, {
                key: "_onMaterialSelectKeydown",
                value: function(t) {
                    var n = e(t.target),
                        i = t.which === this.keyCodes.tab,
                        r = t.which === this.keyCodes.esc,
                        o = t.which === this.keyCodes.enter,
                        a = t.which === this.keyCodes.arrowUp,
                        s = t.which === this.keyCodes.arrowDown,
                        l = this.$materialOptionsList.is(":visible");
                    i ? this._handleTabKey(n) : !s || l ? o && !l || (t.preventDefault(), o ? this._handleEnterKey(n) : s ? this._handleArrowDownKey() : a ? this._handleArrowUpKey() : r ? this._handleEscKey(n) : this._handleLetterKey(t)) : n.trigger("open")
                }
            }, {
                key: "_handleTabKey",
                value: function(e) {
                    this._handleEscKey(e)
                }
            }, {
                key: "_handleEnterKey",
                value: function(t) {
                    var n = e(t);
                    this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click"), this.isMultiple || n.trigger("close")
                }
            }, {
                key: "_handleArrowDownKey",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first(),
                        t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last(),
                        n = this.$materialOptionsList.find("li.selected").length > 0,
                        i = n ? this.$materialOptionsList.find("li.selected") : e,
                        r = i.is(t) || !n ? i : i.next("li:not(.disabled)");
                    this._selectSingleOption(r), this.$materialOptionsList.find("li").removeClass("active"), r.toggleClass("active")
                }
            }, {
                key: "_handleArrowUpKey",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first(),
                        t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last(),
                        n = this.$materialOptionsList.find("li.selected").length > 0,
                        i = n ? this.$materialOptionsList.find("li.selected") : t,
                        r = i.is(e) || !n ? i : i.prev("li:not(.disabled)");
                    this._selectSingleOption(r), this.$materialOptionsList.find("li").removeClass("active"), r.toggleClass("active")
                }
            }, {
                key: "_handleEscKey",
                value: function(t) {
                    e(t).trigger("close")
                }
            }, {
                key: "_handleLetterKey",
                value: function(t) {
                    var n = this,
                        i = "",
                        r = String.fromCharCode(t.which).toLowerCase(),
                        o = Object.keys(this.keyCodes).map(function(e) {
                            return n.keyCodes[e]
                        });
                    if (r && -1 === o.indexOf(t.which)) {
                        i += r;
                        var a = this.$materialOptionsList.find("li").filter(function() {
                            return -1 !== e(this).text().toLowerCase().indexOf(i)
                        }).first();
                        this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), a.addClass("active"), this._selectSingleOption(a)
                    }
                }
            }, {
                key: "_onSearchInputKeyup",
                value: function(t) {
                    var n = e(t.target),
                        i = n.closest("ul"),
                        r = n.val();
                    i.find("li span.filtrable").each(function() {
                        var t = e(this);
                        "string" == typeof this.outerHTML && (this.textContent.toLowerCase().includes(r.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide())
                    })
                }
            }, {
                key: "_isToggleAllPresent",
                value: function() {
                    return this.$materialOptionsList.find(this.$toggleAll).length
                }
            }, {
                key: "_updateToggleAllOption",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled").find("[type=checkbox]"),
                        t = e.filter(":checked"),
                        n = this.$toggleAll.find("[type=checkbox]").is(":checked");
                    t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
                }
            }, {
                key: "_toggleSelectedValue",
                value: function(e) {
                    var t = this.valuesSelected.indexOf(e),
                        n = -1 !== t;
                    return n ? this.valuesSelected.splice(t, 1) : this.valuesSelected.push(e), this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(e).toggleClass("active"), this.$nativeSelect.find("option").eq(e).prop("selected", !n), this._setValueToMaterialSelect(), !n
                }
            }, {
                key: "_selectSingleOption",
                value: function(e) {
                    this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
                }
            }, {
                key: "_selectOption",
                value: function(t) {
                    e(t).addClass("selected")
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function() {
                    for (var e = "", t = this.valuesSelected.length, n = 0; n < t; n++) {
                        var i = this.$nativeSelect.find("option").eq(this.valuesSelected[n]).text();
                        e += ", ".concat(i)
                    }
                    0 === (e = t >= 5 ? "".concat(t, " options selected") : e.substring(2)).length && (e = this.$nativeSelect.find("option:disabled").eq(0).text()), this.$nativeSelect.siblings("input.select-dropdown").val(e)
                }
            }, {
                key: "_randomUUID",
                value: function() {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                    })
                }
            }], [{
                key: "clearMutationObservers",
                value: function() {
                    t.mutationObservers.forEach(function(e) {
                        e.disconnect(), e.customStatus = "stopped"
                    })
                }
            }]), t
        }();
        e.fn.materialSelect = function(t) {
            e(this).not(".browser-default").not(".custom-select").each(function() {
                new n(e(this), t).init()
            })
        }, e.fn.material_select = e.fn.materialSelect, t = e.fn.val, e.fn.val = function(e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized") && !this.hasClass("browser-default") && !this.hasClass("custom-select")) {
                n.clearMutationObservers(), this.materialSelect("destroy");
                var i = t.call(this, e);
                return this.materialSelect(), i
            }
            return t.call(this, e)
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
    }),
    function(e) {
        var t = 0,
            n = function() {
                function n(i, r) {
                    _classCallCheck(this, n), this.defaults = {
                        topSpacing: t,
                        zIndex: !1,
                        stopper: "#footer",
                        stickyClass: !1,
                        startScrolling: "top",
                        minWidth: !1
                    }, this.$element = i, this.options = this.assignOptions(r), this.$window = e(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.$placeholder = e('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
                }
                return _createClass(n, [{
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
                    }
                }, {
                    key: "hasZIndex",
                    value: function() {
                        return "number" == typeof this.options.zIndex
                    }
                }, {
                    key: "hasStopper",
                    value: function() {
                        return e(this.options.stopper).length || "number" == typeof this.options.stopper
                    }
                }, {
                    key: "isScreenHeightEnough",
                    value: function() {
                        return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
                    }
                }, {
                    key: "setStopperPosition",
                    value: function() {
                        "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
                    }
                }, {
                    key: "setPushPoint",
                    value: function() {
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.$element.offset().top - this.options.topSpacing : this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(!0) - this.$window.height()
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
                    }
                }, {
                    key: "appendPlaceholder",
                    value: function() {
                        this.$element.after(this.$placeholder), this.$placeholder.css({
                            width: this.elementWidth,
                            height: this.elementHeight
                        })
                    }
                }, {
                    key: "stickyStart",
                    value: function() {
                        this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                        var e = this.$element.get(0).scrollHeight;
                        this.$element.get(0).style.overflow = "", this.$element.css({
                            position: "fixed",
                            width: this.elementWidth,
                            height: e
                        }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
                            top: this.options.topSpacing
                        }) : this.$element.css({
                            bottom: 0,
                            top: ""
                        }), this.hasZIndex() && this.$element.css({
                            zIndex: this.options.zIndex
                        })
                    }
                }, {
                    key: "stickyEnd",
                    value: function() {
                        this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                            position: "static",
                            top: t
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopPoint < e(this.$element).offset().top + this.$element.outerHeight(!0) && this.$element.css({
                            position: "absolute",
                            bottom: 0,
                            top: ""
                        })
                    }
                }]), n
            }();
        e.fn.sticky = function(t) {
            return this.each(function() {
                var i = e(this);
                e(window).on("load", function() {
                    new n(i, t).init()
                })
            })
        }
    }(jQuery),
    function e(t, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(e, t, n) {
            "use strict";
            var i = e("../main");
            "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
        }, {
            "../main": 7
        }],
        2: [function(e, t, n) {
            "use strict";
            n.add = function(e, t) {
                e.classList ? e.classList.add(t) : function(e, t) {
                    var n = e.className.split(" ");
                    n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
                }(e, t)
            }, n.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : function(e, t) {
                    var n = e.className.split(" "),
                        i = n.indexOf(t);
                    i >= 0 && n.splice(i, 1), e.className = n.join(" ")
                }(e, t)
            }, n.list = function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, n) {
            "use strict";
            var i = {
                e: function(e, t) {
                    var n = document.createElement(e);
                    return n.className = t, n
                },
                appendTo: function(e, t) {
                    return t.appendChild(e), e
                }
            };
            i.css = function(e, t, n) {
                return "object" == typeof t ? function(e, t) {
                    for (var n in t) {
                        var i = t[n];
                        "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
                    }
                    return e
                }(e, t) : void 0 === n ? function(e, t) {
                    return window.getComputedStyle(e)[t]
                }(e, t) : function(e, t, n) {
                    return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
                }(e, t, n)
            }, i.matches = function(e, t) {
                return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, i.remove = function(e) {
                void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, i.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return i.matches(e, t)
                })
            }, t.exports = i
        }, {}],
        4: [function(e, t, n) {
            "use strict";
            var i = function(e) {
                this.element = e, this.events = {}
            };
            i.prototype.bind = function(e, t) {
                void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, i.prototype.unbind = function(e, t) {
                var n = void 0 !== t;
                this.events[e] = this.events[e].filter(function(i) {
                    return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
                }, this)
            }, i.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var r = function() {
                this.eventElements = []
            };
            r.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
            }, r.prototype.bind = function(e, t, n) {
                this.eventElement(e).bind(t, n)
            }, r.prototype.unbind = function(e, t, n) {
                this.eventElement(e).unbind(t, n)
            }, r.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, r.prototype.once = function(e, t, n) {
                var i = this.eventElement(e),
                    r = function(e) {
                        i.unbind(t, r), n(e)
                    };
                i.bind(t, r)
            }, t.exports = r
        }, {}],
        5: [function(e, t, n) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, n) {
            "use strict";

            function i(e) {
                return function(t, n) {
                    e(t, "ps--in-scrolling"), void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"), e(t, "ps--y"))
                }
            }
            var r = e("./class"),
                o = e("./dom"),
                a = n.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                s = n.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(s);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var n in e) t[n] = s(e[n]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            n.extend = function(e, t) {
                var n = s(e);
                for (var i in t) n[i] = s(t[i]);
                return n
            }, n.isEditable = function(e) {
                return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
            }, n.removePsClasses = function(e) {
                for (var t = r.list(e), n = 0; n < t.length; n++) {
                    var i = t[n];
                    0 === i.indexOf("ps-") && r.remove(e, i)
                }
            }, n.outerWidth = function(e) {
                return a(o.css(e, "width")) + a(o.css(e, "paddingLeft")) + a(o.css(e, "paddingRight")) + a(o.css(e, "borderLeftWidth")) + a(o.css(e, "borderRightWidth"))
            }, n.startScrolling = i(r.add), n.stopScrolling = i(r.remove), n.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, n) {
            "use strict";
            var i = e("./plugin/destroy"),
                r = e("./plugin/initialize"),
                o = e("./plugin/update");
            t.exports = {
                initialize: r,
                update: o,
                destroy: i
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(e, t, n) {
            "use strict";
            t.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(e, t, n) {
            "use strict";
            var i = e("../lib/helper"),
                r = e("../lib/dom"),
                o = e("./instances");
            t.exports = function(e) {
                var t = o.get(e);
                t && (t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), r.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, n) {
            "use strict";
            var i = e("../instances"),
                r = e("../update-geometry"),
                o = e("../update-scroll");
            t.exports = function(e) {
                ! function(e, t) {
                    function n(e) {
                        return e.getBoundingClientRect()
                    }
                    var i = function(e) {
                        e.stopPropagation()
                    };
                    t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function(i) {
                        var a = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                        o(e, "top", e.scrollTop + a * t.containerHeight), r(e), i.stopPropagation()
                    }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function(i) {
                        var a = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                        o(e, "left", e.scrollLeft + a * t.containerWidth), r(e), i.stopPropagation()
                    })
                }(e, i.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(e, t, n) {
            "use strict";
            var i = e("../../lib/helper"),
                r = e("../../lib/dom"),
                o = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                var t = o.get(e);
                (function(e, t) {
                    function n(n) {
                        var r = o + n * t.railXRatio,
                            a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                        t.scrollbarXLeft = r < 0 ? 0 : r > a ? a : r;
                        var l = i.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                        s(e, "left", l)
                    }
                    var o = null,
                        l = null,
                        c = function(t) {
                            n(t.pageX - l), a(e), t.stopPropagation(), t.preventDefault()
                        },
                        u = function() {
                            i.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", c)
                        };
                    t.event.bind(t.scrollbarX, "mousedown", function(n) {
                        l = n.pageX, o = i.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio, i.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                    })
                })(e, t),
                function(e, t) {
                    function n(n) {
                        var r = o + n * t.railYRatio,
                            a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                        t.scrollbarYTop = r < 0 ? 0 : r > a ? a : r;
                        var l = i.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                        s(e, "top", l)
                    }
                    var o = null,
                        l = null,
                        c = function(t) {
                            n(t.pageY - l), a(e), t.stopPropagation(), t.preventDefault()
                        },
                        u = function() {
                            i.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", c)
                        };
                    t.event.bind(t.scrollbarY, "mousedown", function(n) {
                        l = n.pageY, o = i.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio, i.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                    })
                }(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = !1;
                t.event.bind(e, "mouseenter", function() {
                    n = !0
                }), t.event.bind(e, "mouseleave", function() {
                    n = !1
                });
                t.event.bind(t.ownerDocument, "keydown", function(i) {
                    if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented)) {
                        var a = o.matches(t.scrollbarX, ":focus") || o.matches(t.scrollbarY, ":focus");
                        if (n || a) {
                            var c = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (c) {
                                if ("IFRAME" === c.tagName) c = c.contentDocument.activeElement;
                                else
                                    for (; c.shadowRoot;) c = c.shadowRoot.activeElement;
                                if (r.isEditable(c)) return
                            }
                            var u = 0,
                                d = 0;
                            switch (i.which) {
                                case 37:
                                    u = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    d = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    u = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    d = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                                    break;
                                case 33:
                                    d = 90;
                                    break;
                                case 32:
                                    d = i.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    d = -90;
                                    break;
                                case 35:
                                    d = i.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                    break;
                                case 36:
                                    d = i.ctrlKey ? e.scrollTop : t.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(e, "top", e.scrollTop - d), l(e, "left", e.scrollLeft + u), s(e),
                                function(n, i) {
                                    var r = e.scrollTop;
                                    if (0 === n) {
                                        if (!t.scrollbarYActive) return !1;
                                        if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                                    }
                                    var o = e.scrollLeft;
                                    if (0 === i) {
                                        if (!t.scrollbarXActive) return !1;
                                        if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                                    }
                                    return !0
                                }(u, d) && i.preventDefault()
                        }
                    }
                })
            }
            var r = e("../../lib/helper"),
                o = e("../../lib/dom"),
                a = e("../instances"),
                s = e("../update-geometry"),
                l = e("../update-scroll");
            t.exports = function(e) {
                i(e, a.get(e))
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                function n(n) {
                    var r = function(e) {
                            var t = e.deltaX,
                                n = -1 * e.deltaY;
                            return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                        }(n),
                        s = r[0],
                        l = r[1];
                    (function(t, n) {
                        var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                        if (i) {
                            var r = window.getComputedStyle(i);
                            if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) return !1;
                            var o = i.scrollHeight - i.clientHeight;
                            if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && n < 0)) return !0;
                            var a = i.scrollLeft - i.clientWidth;
                            if (a > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === a && t > 0)) return !0
                        }
                        return !1
                    })(s, l) || (i = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + s * t.settings.wheelSpeed), i = !0) : t.scrollbarXActive && !t.scrollbarYActive && (a(e, "left", s ? e.scrollLeft + s * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed), i = !0) : (a(e, "top", e.scrollTop - l * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + s * t.settings.wheelSpeed)), o(e), (i = i || function(n, i) {
                        var r = e.scrollTop;
                        if (0 === n) {
                            if (!t.scrollbarYActive) return !1;
                            if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                        }
                        var o = e.scrollLeft;
                        if (0 === i) {
                            if (!t.scrollbarXActive) return !1;
                            if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                        }
                        return !0
                    }(s, l)) && (n.stopPropagation(), n.preventDefault()))
                }
                var i = !1;
                void 0 !== window.onwheel ? t.event.bind(e, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", n)
            }
            var r = e("../instances"),
                o = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                i(e, r.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(e, t, n) {
            "use strict";
            var i = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                ! function(e, t) {
                    t.event.bind(e, "scroll", function() {
                        r(e)
                    })
                }(e, i.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                function n() {
                    l || (l = setInterval(function() {
                        return o.get(e) ? (s(e, "top", e.scrollTop + c.top), s(e, "left", e.scrollLeft + c.left), void a(e)) : void clearInterval(l)
                    }, 50))
                }

                function i() {
                    l && (clearInterval(l), l = null), r.stopScrolling(e)
                }
                var l = null,
                    c = {
                        top: 0,
                        left: 0
                    },
                    u = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(function() {
                        var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                        return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                    }()) ? u = !0 : (u = !1, i())
                }), t.event.bind(window, "mouseup", function() {
                    u && (u = !1, i())
                }), t.event.bind(window, "keyup", function() {
                    u && (u = !1, i())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (u) {
                        var o = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            a = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        o.x < a.left + 3 ? (c.left = -5, r.startScrolling(e, "x")) : o.x > a.right - 3 ? (c.left = 5, r.startScrolling(e, "x")) : c.left = 0, o.y < a.top + 3 ? (c.top = a.top + 3 - o.y < 5 ? -5 : -20, r.startScrolling(e, "y")) : o.y > a.bottom - 3 ? (c.top = o.y - a.bottom + 3 < 5 ? 5 : 20, r.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? i() : n()
                    }
                })
            }
            var r = e("../../lib/helper"),
                o = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                i(e, o.get(e))
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(e, t, n) {
            "use strict";
            var i = e("../../lib/helper"),
                r = e("../instances"),
                o = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                (i.env.supportsTouch || i.env.supportsIePointer) && function(e, t, n, i) {
                    function s(n, i) {
                        var r = e.scrollTop,
                            o = e.scrollLeft,
                            a = Math.abs(n),
                            s = Math.abs(i);
                        if (s > a) {
                            if (i < 0 && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r) return !t.settings.swipePropagation
                        } else if (a > s && (n < 0 && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o)) return !t.settings.swipePropagation;
                        return !0
                    }

                    function l(t, n) {
                        a(e, "top", e.scrollTop - n), a(e, "left", e.scrollLeft - t), o(e)
                    }

                    function c() {
                        w = !0
                    }

                    function u() {
                        w = !1
                    }

                    function d(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function f(e) {
                        return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    }

                    function h(e) {
                        if (f(e)) {
                            _ = !0;
                            var t = d(e);
                            m.pageX = t.pageX, m.pageY = t.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                        }
                    }

                    function p(e) {
                        if (!_ && t.settings.swipePropagation && h(e), !w && _ && f(e)) {
                            var n = d(e),
                                i = {
                                    pageX: n.pageX,
                                    pageY: n.pageY
                                },
                                r = i.pageX - m.pageX,
                                o = i.pageY - m.pageY;
                            l(r, o), m = i;
                            var a = (new Date).getTime(),
                                c = a - v;
                            c > 0 && (y.x = r / c, y.y = o / c, v = a), s(r, o) && (e.stopPropagation(), e.preventDefault())
                        }
                    }

                    function g() {
                        !w && _ && (_ = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function() {
                            return r.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                        }, 10)))
                    }
                    var m = {},
                        v = 0,
                        y = {},
                        b = null,
                        w = !1,
                        _ = !1;
                    n ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", h), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", g)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", h), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", h), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", g)))
                }(e, r.get(e), i.env.supportsTouch, i.env.supportsIePointer)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(e, t, n) {
            "use strict";
            var i = e("../lib/helper"),
                r = e("../lib/class"),
                o = e("./instances"),
                a = e("./update-geometry"),
                s = {
                    "click-rail": e("./handler/click-rail"),
                    "drag-scrollbar": e("./handler/drag-scrollbar"),
                    keyboard: e("./handler/keyboard"),
                    wheel: e("./handler/mouse-wheel"),
                    touch: e("./handler/touch"),
                    selection: e("./handler/selection")
                },
                l = e("./handler/native-scroll");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, r.add(e, "ps");
                var n = o.add(e);
                n.settings = i.extend(n.settings, t), r.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(t) {
                    s[t](e)
                }), l(e), a(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e.getAttribute("data-ps-id")
            }
            var r = e("../lib/helper"),
                o = e("../lib/class"),
                a = e("./default-setting"),
                s = e("../lib/dom"),
                l = e("../lib/event-manager"),
                c = e("../lib/guid"),
                u = {};
            n.add = function(e) {
                var t = c();
                return function(e, t) {
                    e.setAttribute("data-ps-id", t)
                }(e, t), u[t] = new function(e) {
                    function t() {
                        o.add(e, "ps--focus")
                    }

                    function n() {
                        o.remove(e, "ps--focus")
                    }
                    var i = this;
                    i.settings = r.clone(a), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === s.css(e, "direction"), i.isNegativeScroll = function() {
                        var t, n = e.scrollLeft;
                        return e.scrollLeft = -1, t = e.scrollLeft < 0, e.scrollLeft = n, t
                    }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new l, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = s.appendTo(s.e("div", "ps__scrollbar-x-rail"), e), i.scrollbarX = s.appendTo(s.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = r.toInt(s.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom == i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : r.toInt(s.css(i.scrollbarXRail, "top")), i.railBorderXWidth = r.toInt(s.css(i.scrollbarXRail, "borderLeftWidth")) + r.toInt(s.css(i.scrollbarXRail, "borderRightWidth")), s.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = r.toInt(s.css(i.scrollbarXRail, "marginLeft")) + r.toInt(s.css(i.scrollbarXRail, "marginRight")), s.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = s.appendTo(s.e("div", "ps__scrollbar-y-rail"), e), i.scrollbarY = s.appendTo(s.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = r.toInt(s.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight == i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : r.toInt(s.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? r.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = r.toInt(s.css(i.scrollbarYRail, "borderTopWidth")) + r.toInt(s.css(i.scrollbarYRail, "borderBottomWidth")), s.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = r.toInt(s.css(i.scrollbarYRail, "marginTop")) + r.toInt(s.css(i.scrollbarYRail, "marginBottom")), s.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
                }(e), u[t]
            }, n.remove = function(e) {
                delete u[i(e)],
                    function(e) {
                        e.removeAttribute("data-ps-id")
                    }(e)
            }, n.get = function(e) {
                return u[i(e)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }
            var r = e("../lib/helper"),
                o = e("../lib/class"),
                a = e("../lib/dom"),
                s = e("./instances"),
                l = e("./update-scroll");
            t.exports = function(e) {
                var t, n = s.get(e);
                n.containerWidth = e.clientWidth, n.containerHeight = e.clientHeight, n.contentWidth = e.scrollWidth, n.contentHeight = e.scrollHeight, e.contains(n.scrollbarXRail) || ((t = a.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && t.forEach(function(e) {
                        a.remove(e)
                    }), a.appendTo(n.scrollbarXRail, e)), e.contains(n.scrollbarYRail) || ((t = a.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && t.forEach(function(e) {
                        a.remove(e)
                    }), a.appendTo(n.scrollbarYRail, e)), !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0, n.railXWidth = n.containerWidth - n.railXMarginWidth, n.railXRatio = n.containerWidth / n.railXWidth, n.scrollbarXWidth = i(n, r.toInt(n.railXWidth * n.containerWidth / n.contentWidth)), n.scrollbarXLeft = r.toInt((n.negativeScrollAdjustment + e.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1, !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0, n.railYHeight = n.containerHeight - n.railYMarginHeight, n.railYRatio = n.containerHeight / n.railYHeight, n.scrollbarYHeight = i(n, r.toInt(n.railYHeight * n.containerHeight / n.contentHeight)), n.scrollbarYTop = r.toInt(e.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1, n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth), n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
                    function(e, t) {
                        var n = {
                            width: t.railXWidth
                        };
                        t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, n);
                        var i = {
                            top: e.scrollTop,
                            height: t.railYHeight
                        };
                        t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, i), a.css(t.scrollbarX, {
                            left: t.scrollbarXLeft,
                            width: t.scrollbarXWidth - t.railBorderXWidth
                        }), a.css(t.scrollbarY, {
                            top: t.scrollbarYTop,
                            height: t.scrollbarYHeight - t.railBorderYWidth
                        })
                    }(e, n), n.scrollbarXActive ? o.add(e, "ps--active-x") : (o.remove(e, "ps--active-x"), n.scrollbarXWidth = 0, n.scrollbarXLeft = 0, l(e, "left", 0)), n.scrollbarYActive ? o.add(e, "ps--active-y") : (o.remove(e, "ps--active-y"), n.scrollbarYHeight = 0, n.scrollbarYTop = 0, l(e, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(e, t, n) {
            "use strict";
            var i = e("./instances"),
                r = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0), t
                };
            t.exports = function(e, t, n) {
                if (void 0 === e) throw "You must provide an element to the update-scroll function";
                if (void 0 === t) throw "You must provide an axis to the update-scroll function";
                if (void 0 === n) throw "You must provide a value to the update-scroll function";
                "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(r("ps-x-reach-start")));
                var o = i.get(e);
                "top" === t && n >= o.contentHeight - o.containerHeight && ((n = o.contentHeight - o.containerHeight) - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && n >= o.contentWidth - o.containerWidth && ((n = o.contentWidth - o.containerWidth) - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(r("ps-x-reach-end"))), void 0 === o.lastTop && (o.lastTop = e.scrollTop), void 0 === o.lastLeft && (o.lastLeft = e.scrollLeft), "top" === t && n < o.lastTop && e.dispatchEvent(r("ps-scroll-up")), "top" === t && n > o.lastTop && e.dispatchEvent(r("ps-scroll-down")), "left" === t && n < o.lastLeft && e.dispatchEvent(r("ps-scroll-left")), "left" === t && n > o.lastLeft && e.dispatchEvent(r("ps-scroll-right")), "top" === t && n !== o.lastTop && (e.scrollTop = o.lastTop = n, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && n !== o.lastLeft && (e.scrollLeft = o.lastLeft = n, e.dispatchEvent(r("ps-scroll-x")))
            }
        }, {
            "./instances": 18
        }],
        21: [function(e, t, n) {
            "use strict";
            var i = e("../lib/helper"),
                r = e("../lib/dom"),
                o = e("./instances"),
                a = e("./update-geometry"),
                s = e("./update-scroll");
            t.exports = function(e) {
                var t = o.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")), r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), r.css(t.scrollbarXRail, "display", ""), r.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]), $.fn.mdb_autocomplete = function(e) {
        return e = $.extend({
            data: {}
        }, e), this.each(function() {
            var t, n = $(this),
                i = e.data;
            Object.keys(i).length && (t = $('<ul class="mdb-autocomplete-wrap"></ul>')).insertAfter($(this)), n.on("keyup", function(e) {
                var r = n.val();
                if (t.empty(), r.length)
                    for (var o in i)
                        if (-1 !== i[o].toLowerCase().indexOf(r.toLowerCase())) {
                            var a = $("<li>".concat(i[o], "</li>"));
                            t.append(a)
                        }
                13 === e.which && (t.children(":first").trigger("click"), t.empty()), 0 === r.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
            }), t.on("click", "li", function() {
                n.val($(this).text()), t.empty()
            }), $(".mdb-autocomplete-clear").on("click", function(e) {
                e.preventDefault(), n.val(""), $(this).css("visibility", "hidden"), t.empty(), $(this).parent().find("label").removeClass("active")
            })
        })
    },
    function(e) {
        e("body").on("shown.bs.modal", ".modal", function() {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        }), e("body").on("hidden.bs.modal", ".modal", function() {
            e("body").removeClass("scrollable")
        })
    }(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            n = _self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e, t) {
                        var i = n.util.type(e);
                        switch (t = t || {}, i) {
                            case "Object":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                var r = {};
                                for (var o in t[n.util.objId(e)] = r, e) e.hasOwnProperty(o) && (r[o] = n.util.clone(e[o], t));
                                return r;
                            case "Array":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                r = [];
                                return t[n.util.objId(e)] = r, e.forEach(function(e, i) {
                                    r[i] = n.util.clone(e, t)
                                }), r
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var r in t) i[r] = t[r];
                        return i
                    },
                    insertBefore: function(e, t, i, r) {
                        var o = (r = r || n.languages)[e];
                        if (2 == arguments.length) {
                            for (var a in i = arguments[1]) i.hasOwnProperty(a) && (o[a] = i[a]);
                            return o
                        }
                        var s = {};
                        for (var l in o)
                            if (o.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[l] = o[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) {
                            n === r[e] && t != e && (this[t] = s)
                        }), r[e] = s
                    },
                    DFS: function(e, t, i, r) {
                        for (var o in r = r || {}, e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, i) {
                    var r = {
                        callback: i,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", r);
                    for (var o, a = r.elements || e.querySelectorAll(r.selector), s = 0; o = a[s++];) n.highlightElement(o, !0 === t, r.callback)
                },
                highlightElement: function(t, i, r) {
                    for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                    s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, t.parentNode && (s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
                    var l = {
                        element: t,
                        language: o,
                        grammar: a,
                        code: t.textContent
                    };
                    if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);
                    if (n.hooks.run("before-highlight", l), i && _self.Worker) {
                        var c = new Worker(n.filename);
                        c.onmessage = function(e) {
                            l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                        }, c.postMessage(JSON.stringify({
                            language: l.language,
                            code: l.code,
                            immediateClose: !0
                        }))
                    } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                },
                highlight: function(e, t, r) {
                    var o = {
                        code: e,
                        grammar: t,
                        language: r
                    };
                    return n.hooks.run("before-tokenize", o), o.tokens = n.tokenize(o.code, o.grammar), n.hooks.run("after-tokenize", o), i.stringify(n.util.encode(o.tokens), o.language)
                },
                matchGrammar: function(e, t, i, r, o, a, s) {
                    var l = n.Token;
                    for (var c in i)
                        if (i.hasOwnProperty(c) && i[c]) {
                            if (c == s) return;
                            var u = i[c];
                            u = "Array" === n.util.type(u) ? u : [u];
                            for (var d = 0; d < u.length; ++d) {
                                var f = u[d],
                                    h = f.inside,
                                    p = !!f.lookbehind,
                                    g = !!f.greedy,
                                    m = 0,
                                    v = f.alias;
                                if (g && !f.pattern.global) {
                                    var y = f.pattern.toString().match(/[imuy]*$/)[0];
                                    f.pattern = RegExp(f.pattern.source, y + "g")
                                }
                                f = f.pattern || f;
                                for (var b = r, w = o; b < t.length; w += t[b].length, ++b) {
                                    var _ = t[b];
                                    if (t.length > e.length) return;
                                    if (!(_ instanceof l)) {
                                        if (g && b != t.length - 1) {
                                            if (f.lastIndex = w, !(k = f.exec(e))) break;
                                            for (var x = k.index + (p ? k[1].length : 0), S = k.index + k[0].length, T = b, C = w, E = t.length; T < E && (C < S || !t[T].type && !t[T - 1].greedy); ++T) x >= (C += t[T].length) && (++b, w = C);
                                            if (t[b] instanceof l) continue;
                                            O = T - b, _ = e.slice(w, C), k.index -= w
                                        } else {
                                            f.lastIndex = 0;
                                            var k = f.exec(_),
                                                O = 1
                                        }
                                        if (k) {
                                            p && (m = k[1] ? k[1].length : 0);
                                            S = (x = k.index + m) + (k = k[0].slice(m)).length;
                                            var A = _.slice(0, x),
                                                P = _.slice(S),
                                                D = [b, O];
                                            A && (++b, w += A.length, D.push(A));
                                            var I = new l(c, h ? n.tokenize(k, h) : k, v, k, g);
                                            if (D.push(I), P && D.push(P), Array.prototype.splice.apply(t, D), 1 != O && n.matchGrammar(e, t, i, b, w, !0, c), a) break
                                        } else if (a) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t, i) {
                    var r = [e],
                        o = t.rest;
                    if (o) {
                        for (var a in o) t[a] = o[a];
                        delete t.rest
                    }
                    return n.matchGrammar(e, r, t, 0, 0, !1), r
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function(e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var r, o = 0; r = i[o++];) r(t)
                    }
                }
            },
            i = n.Token = function(e, t, n, i, r) {
                this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!r
            };
        if (i.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) {
                    return i.stringify(n, t, e)
                }).join("");
                var o = {
                    type: e.type,
                    content: i.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if (e.alias) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a)
                }
                n.hooks.run("wrap", o);
                var s = Object.keys(o.attributes).map(function(e) {
                    return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
            }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                i = t.language,
                r = t.code,
                o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();

function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    // $.ajax({
    //     type: "GET",
    //     url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
    //     dataType: "json",
    //     success: function(e) {
    //         var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
    //         t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
    //     }
    // })
}

function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: e
    }, function(t) {
        console.log(e), $("#products").html(t)
    })
}
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /(^|[^\\])["']/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^{}\s][^{};]*?(?=\s*\{)/,
        string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/
    }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: "language-css",
            greedy: !0
        }
    }), Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            alias: "function"
        },
        constant: /\b[A-Z][A-Z\d_]*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\${[^}]+}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: "language-javascript",
            greedy: !0
        }
    }), Prism.languages.js = Prism.languages.javascript, Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
        buildPlaceholders: {
            value: function(e, t, n, i) {
                e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function(n) {
                    if ("function" == typeof i && !i(n)) return n;
                    for (var r = e.tokenStack.length; - 1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___");) ++r;
                    return e.tokenStack[r] = n, "___" + t.toUpperCase() + r + "___"
                }), e.grammar = Prism.languages.markup)
            }
        },
        tokenizePlaceholders: {
            value: function(e, t) {
                if (e.language === t && e.tokenStack) {
                    e.grammar = Prism.languages[t];
                    var n = 0,
                        i = Object.keys(e.tokenStack),
                        r = function(o) {
                            if (!(n >= i.length))
                                for (var a = 0; a < o.length; a++) {
                                    var s = o[a];
                                    if ("string" == typeof s || s.content && "string" == typeof s.content) {
                                        var l = i[n],
                                            c = e.tokenStack[l],
                                            u = "string" == typeof s ? s : s.content,
                                            d = u.indexOf("___" + t.toUpperCase() + l + "___");
                                        if (d > -1) {
                                            ++n;
                                            var f, h = u.substring(0, d),
                                                p = new Prism.Token(t, Prism.tokenize(c, e.grammar, t), "language-" + t, c),
                                                g = u.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                            if (h || g ? (f = [h, p, g].filter(function(e) {
                                                    return !!e
                                                }), r(f)) : f = p, "string" == typeof s ? Array.prototype.splice.apply(o, [a, 1].concat(f)) : s.content = f, n >= i.length) break
                                        }
                                    } else s.content && "string" != typeof s.content && r(s.content)
                                }
                        };
                    r(e.tokens)
                }
            }
        }
    }), Prism.languages.json = {
        property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            greedy: !0
        },
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        punctuation: /[{}[\]);,]/,
        operator: /:/g,
        boolean: /\b(?:true|false)\b/i,
        null: /\bnull\b/i
    }, Prism.languages.jsonp = Prism.languages.json,
    function(e) {
        e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment"
            }
        }), e.languages.insertBefore("php", "keyword", {
            delimiter: {
                pattern: /\?>|<\?(?:php|=)?/i,
                alias: "important"
            },
            variable: /\$+(?:\w+\b|(?={))/i,
            package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }
        }), e.languages.insertBefore("php", "operator", {
            property: {
                pattern: /(->)[\w]+/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<'?|[';]$/
                        }
                    }
                }
            },
            "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<"?|[";]$/
                        }
                    },
                    interpolation: null
                }
            },
            "single-quoted-string": {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0,
                alias: "string"
            },
            "double-quoted-string": {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: "string",
                inside: {
                    interpolation: null
                }
            }
        }), delete e.languages.php.string;
        var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.php
            }
        };
        e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function(t) {
            if (/(?:<\?php|<\?)/gi.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
            }
        }), e.hooks.add("after-tokenize", function(t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "php")
        })
    }(Prism), Prism.languages.typescript = Prism.languages.extend("javascript", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
    }), Prism.languages.ts = Prism.languages.typescript, Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.scss.property = {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
        inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }, Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = /\n(?!$)/g,
                t = function(t) {
                    var i = n(t)["white-space"];
                    if ("pre-wrap" === i || "pre-line" === i) {
                        var r = t.querySelector("code"),
                            o = t.querySelector(".line-numbers-rows"),
                            a = t.querySelector(".line-numbers-sizer"),
                            s = r.textContent.split(e);
                        a || ((a = document.createElement("span")).className = "line-numbers-sizer", r.appendChild(a)), a.style.display = "block", s.forEach(function(e, t) {
                            a.textContent = e || "\n";
                            var n = a.getBoundingClientRect().height;
                            o.children[t].style.height = n + "px"
                        }), a.textContent = "", a.style.display = "none"
                    }
                },
                n = function(e) {
                    return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                };
            window.addEventListener("resize", function() {
                Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
            }), Prism.hooks.add("complete", function(n) {
                if (n.code) {
                    var i = n.element.parentNode,
                        r = /\s*\bline-numbers\b\s*/;
                    if (i && /pre/i.test(i.nodeName) && (r.test(i.className) || r.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                        r.test(n.element.className) && (n.element.className = n.element.className.replace(r, " ")), r.test(i.className) || (i.className += " line-numbers");
                        var o, a = n.code.match(e),
                            s = a ? a.length + 1 : 1,
                            l = new Array(s + 1);
                        l = l.join("<span></span>"), (o = document.createElement("span")).setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(o), t(i), Prism.hooks.run("line-numbers", n)
                    }
                }
            }), Prism.hooks.add("line-numbers", function(e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            }), Prism.plugins.lineNumbers = {
                getLine: function(e, t) {
                    if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                        var n = e.querySelector(".line-numbers-rows"),
                            i = parseInt(e.getAttribute("data-start"), 10) || 1,
                            r = i + (n.children.length - 1);
                        t < i && (t = i), t > r && (t = r);
                        var o = t - i;
                        return n.children[o]
                    }
                }
            }
        }
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = [],
                t = {},
                n = function() {};
            Prism.plugins.toolbar = {};
            var i = Prism.plugins.toolbar.registerButton = function(n, i) {
                    var r;
                    r = "function" == typeof i ? i : function(e) {
                        var t;
                        return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
                            i.onClick.call(this, e)
                        })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
                    }, e.push(t[n] = r)
                },
                r = Prism.plugins.toolbar.hook = function(i) {
                    var r = i.element.parentNode;
                    if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                        var o = document.createElement("div");
                        o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
                        var a = document.createElement("div");
                        a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function(e) {
                            return t[e] || n
                        })), e.forEach(function(e) {
                            var t = e(i);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                            }
                        }), o.appendChild(a)
                    }
                };
            i("label", function(e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                    var n, i, r = t.getAttribute("data-label");
                    try {
                        i = document.querySelector("template#" + r)
                    } catch (e) {}
                    return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
                }
            }), Prism.hooks.add("complete", r)
        }
    }(),
    function() {
        if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
            var e, t, n = {
                    gradient: {
                        create: (e = {}, t = function(t) {
                            if (e[t]) return e[t];
                            var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
                                i = n && n[1],
                                r = n && n[2],
                                o = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                            return r.indexOf("linear") >= 0 ? e[t] = function(e, t, n) {
                                var i = "180deg";
                                return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                            }(i, r, o) : r.indexOf("radial") >= 0 ? e[t] = function(e, t, n) {
                                if (n[0].indexOf("at") < 0) {
                                    var i = "center",
                                        r = "ellipse",
                                        o = "farthest-corner";
                                    if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                        var a = n.shift().split(/\s+/);
                                        !a[0] || "circle" !== a[0] && "ellipse" !== a[0] || (r = a.shift()), a[0] && (o = a.shift()), "cover" === o ? o = "farthest-corner" : "contain" === o && (o = "clothest-side")
                                    }
                                    return t + "(" + r + " " + o + " at " + i + "," + n.join(",") + ")"
                                }
                                return t + "(" + n.join(",") + ")"
                            }(0, r, o) : e[t] = r + "(" + o.join(",") + ")"
                        }, function() {
                            new Prism.plugins.Previewer("gradient", function(e) {
                                return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                            }, "*", function() {
                                this._elt.innerHTML = "<div></div>"
                            })
                        }),
                        tokens: {
                            gradient: {
                                pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    angle: {
                        create: function() {
                            new Prism.plugins.Previewer("angle", function(e) {
                                var t, n, i = parseFloat(e),
                                    r = e.match(/[a-z]+$/i);
                                if (!i || !r) return !1;
                                switch (r = r[0]) {
                                    case "deg":
                                        t = 360;
                                        break;
                                    case "grad":
                                        t = 400;
                                        break;
                                    case "rad":
                                        t = 2 * Math.PI;
                                        break;
                                    case "turn":
                                        t = 1
                                }
                                return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    color: {
                        create: function() {
                            new Prism.plugins.Previewer("color", function(e) {
                                return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                            })
                        },
                        tokens: {
                            color: {
                                pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    easing: {
                        create: function() {
                            new Prism.plugins.Previewer("easing", function(e) {
                                var t = (e = {
                                    linear: "0,0,1,1",
                                    ease: ".25,.1,.25,1",
                                    "ease-in": ".42,0,1,1",
                                    "ease-out": "0,0,.58,1",
                                    "ease-in-out": ".42,0,.58,1"
                                }[e] || e).match(/-?\d*\.?\d+/g);
                                if (4 === t.length) {
                                    t = t.map(function(e, t) {
                                        return 100 * (t % 2 ? 1 - e : e)
                                    }), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                    var n = this.querySelectorAll("line");
                                    return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                                }
                                return !1
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                            })
                        },
                        tokens: {
                            easing: {
                                pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                before: "punctuation",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    time: {
                        create: function() {
                            new Prism.plugins.Previewer("time", function(e) {
                                var t = parseFloat(e),
                                    n = e.match(/[a-z]+$/i);
                                return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    }
                },
                i = /(?:^|\s)token(?=$|\s)/,
                r = /(?:^|\s)active(?=$|\s)/g,
                o = /(?:^|\s)flipped(?=$|\s)/g,
                a = function(e, t, n, i) {
                    this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = t, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                    var r = this;
                    n || (n = ["*"]), "Array" !== Prism.util.type(n) && (n = [n]), n.forEach(function(e) {
                        "string" != typeof e && (e = e.lang), a.byLanguages[e] || (a.byLanguages[e] = []), a.byLanguages[e].indexOf(r) < 0 && a.byLanguages[e].push(r)
                    }), a.byType[e] = this
                };
            for (var s in a.prototype.init = function() {
                    this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
                }, a.prototype.isDisabled = function(e) {
                    do {
                        if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
                    } while (e = e.parentNode);
                    return !1
                }, a.prototype.check = function(e) {
                    if (!i.test(e.className) || !this.isDisabled(e)) {
                        do {
                            if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                        } while (e = e.parentNode);
                        e && e !== this._token && (this._token = e, this.show())
                    }
                }, a.prototype.mouseout = function() {
                    this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
                }, a.prototype.show = function() {
                    if (this._elt || this.init(), this._token)
                        if (this.updater.call(this._elt, this._token.textContent)) {
                            this._token.addEventListener("mouseout", this._mouseout, !1);
                            var e = function(e) {
                                var t = 0,
                                    n = 0,
                                    i = e;
                                if (i.parentNode) {
                                    do {
                                        t += i.offsetLeft, n += i.offsetTop
                                    } while ((i = i.offsetParent) && i.nodeType < 9);
                                    i = e;
                                    do {
                                        t -= i.scrollLeft, n -= i.scrollTop
                                    } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                                }
                                return {
                                    top: n,
                                    right: innerWidth - t - e.offsetWidth,
                                    bottom: innerHeight - n - e.offsetHeight,
                                    left: t
                                }
                            }(this._token);
                            this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(o, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
                        } else this.hide()
                }, a.prototype.hide = function() {
                    this._elt.className = this._elt.className.replace(r, "")
                }, a.byLanguages = {}, a.byType = {}, a.initEvents = function(e, t) {
                    var n = [];
                    a.byLanguages[t] && (n = n.concat(a.byLanguages[t])), a.byLanguages["*"] && (n = n.concat(a.byLanguages["*"])), e.addEventListener("mouseover", function(e) {
                        var t = e.target;
                        n.forEach(function(e) {
                            e.check(t)
                        })
                    }, !1)
                }, Prism.plugins.Previewer = a, Prism.hooks.add("before-highlight", function(e) {
                    for (var t in n) {
                        var i = n[t].languages;
                        if (e.language && i[e.language] && !i[e.language].initialized) {
                            var r = i[e.language];
                            "Array" !== Prism.util.type(r) && (r = [r]), r.forEach(function(r) {
                                var o, a, s, l;
                                !0 === r ? (o = "important", a = e.language, r = e.language) : (o = r.before || "important", a = r.inside || r.lang, s = r.root || Prism.languages, l = r.skip, r = e.language), !l && Prism.languages[r] && (Prism.languages.insertBefore(a, o, n[t].tokens, s), e.grammar = Prism.languages[r], i[e.language] = {
                                    initialized: !0
                                })
                            })
                        }
                    }
                }), Prism.hooks.add("after-highlight", function(e) {
                    (a.byLanguages["*"] || a.byLanguages[e.language]) && a.initEvents(e.element, e.language)
                }), n) n[s].create()
        }
    }(),
    function() {
        var e = Object.assign || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        };

        function t(t) {
            this.defaults = e({}, t)
        }

        function n(e) {
            for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
            return e.length + t
        }
        t.prototype = {
            setDefaults: function(t) {
                this.defaults = e(this.defaults, t)
            },
            normalize: function(t, n) {
                for (var i in n = e(this.defaults, n)) {
                    var r = i.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    });
                    "normalize" !== i && "setDefaults" !== r && n[i] && this[r] && (t = this[r].call(this, t, n[i]))
                }
                return t
            },
            leftTrim: function(e) {
                return e.replace(/^\s+/, "")
            },
            rightTrim: function(e) {
                return e.replace(/\s+$/, "")
            },
            tabsToSpaces: function(e, t) {
                return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
            },
            spacesToTabs: function(e, t) {
                return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
            },
            removeTrailing: function(e) {
                return e.replace(/\s*?$/gm, "")
            },
            removeInitialLineFeed: function(e) {
                return e.replace(/^(?:\r?\n|\r)/, "")
            },
            removeIndent: function(e) {
                var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return t && t[0].length ? (t.sort(function(e, t) {
                    return e.length - t.length
                }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
            },
            indent: function(e, t) {
                return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
            },
            breakLines: function(e, t) {
                t = !0 === t ? 80 : 0 | t || 80;
                for (var i = e.split("\n"), r = 0; r < i.length; ++r)
                    if (!(n(i[r]) <= t)) {
                        for (var o = i[r].split(/(\s+)/g), a = 0, s = 0; s < o.length; ++s) {
                            var l = n(o[s]);
                            (a += l) > t && (o[s] = "\n" + o[s], a = l)
                        }
                        i[r] = o.join("")
                    }
                return i.join("\n")
            }
        }, "undefined" != typeof module && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
            "remove-trailing": !0,
            "remove-indent": !0,
            "left-trim": !0,
            "right-trim": !0
        }), Prism.hooks.add("before-sanity-check", function(e) {
            var t = Prism.plugins.NormalizeWhitespace;
            if (!e.settings || !1 !== e.settings["whitespace-normalization"])
                if (e.element && e.element.parentNode || !e.code) {
                    var n = e.element.parentNode,
                        i = /\bno-whitespace-normalization\b/;
                    if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                        for (var r = n.childNodes, o = "", a = "", s = !1, l = 0; l < r.length; ++l) {
                            var c = r[l];
                            c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, n.removeChild(c), --l)
                        }
                        if (e.element.children.length && Prism.plugins.KeepMarkup) {
                            var u = o + e.element.innerHTML + a;
                            e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent
                        } else e.code = o + e.code + a, e.code = t.normalize(e.code, e.settings)
                    }
                } else e.code = t.normalize(e.code, e.settings)
        }))
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document)
            if (Prism.plugins.toolbar) {
                var e = window.ClipboardJS || void 0;
                e || "function" != typeof require || (e = require("clipboard"));
                var t = [];
                if (!e) {
                    var n = document.createElement("script"),
                        i = document.querySelector("head");
                    n.onload = function() {
                        if (e = window.ClipboardJS)
                            for (; t.length;) t.pop()()
                    }, n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(n)
                }
                Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(n) {
                    var i = document.createElement("button");
                    return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? r() : t.push(r), i;

                    function r() {
                        var t = new e(i, {
                            text: function() {
                                return n.code
                            }
                        });
                        t.on("success", function() {
                            i.textContent = "Copied!", o()
                        }), t.on("error", function() {
                            i.textContent = "Press Ctrl+C to copy", o()
                        })
                    }

                    function o() {
                        setTimeout(function() {
                            i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                        }, 5e3)
                    }
                })
            } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
    }(), $(function(e) {
        e('.documentation a[href="#"]').click(function(e) {
            e.preventDefault()
        })
    }),
    function() {
        var e = window.location.host;
        console.log("Wyskoczylo mu: " + e)
        "assemblynest.com" !== e
    }(), jQuery(document).ready(function(e) {
        e("form#signup").on("submit", function(t) {
            t.preventDefault(), e.ajax({
                type: "POST",
                dataType: "json",
                url: mdw_search_object.ajaxurl,
                data: {
                    action: "ajaxregister",
                    name: e("#regname").val(),
                    username: e("#regusername").val(),
                    password: e("#regpassword").val(),
                    email: e("#regemail").val(),
                    security: e("#regsecurity").val()
                },
                success: function(t) {
                    e("#ajax-response").text(t.message), 1 == t.loggedin && (document.location.href = "https://mdbootstrap.com/registration-completed/")
                },
                error: function(e) {
                    console.log(e)
                }
            })
        })
    });