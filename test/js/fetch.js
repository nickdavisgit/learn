(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    668: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 365))
    },
    365: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return j
            }
        });
        var s = n(9268)
          , l = n(8136);
        function r(e) {
            return (0,
            s.jsxs)("div", {
                className: "navbar w-full max-w-screen-xl mx-auto bg-zinc-100 fixed top-0 inset-x-0 z-50",
                children: [(0,
                s.jsx)("div", {
                    className: "flex-none xl:hidden",
                    onClick: ()=>{
                        e.sidebarClick()
                    }
                    ,
                    children: (0,
                    s.jsx)("button", {
                        className: "btn btn-square btn-ghost",
                        children: (0,
                        s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            className: "inline-block w-[30px] h-[30px] stroke-current",
                            children: (0,
                            s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "w-full flex justify-center",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "dropdown dropdown-start",
                        children: [(0,
                        s.jsx)("label", {
                            tabIndex: 0,
                            className: "btn btn-ghost btn-circle avatar hover:bg-inherit",
                            children: (0,
                            s.jsx)("div", {
                                className: "w-10 rounded-full hover:ring-4 hover:ring-orange-200",
                                children: (0,
                                s.jsx)("img", {
                                    src: "/BZ.svg",
                                    alt: "User"
                                })
                            })
                        }), (0,
                        s.jsx)("div", {
                            tabIndex: 0,
                            className: "mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow",
                            children: (0,
                            s.jsxs)("div", {
                                className: "card-body",
                                children: [(0,
                                s.jsx)("span", {
                                    className: "font-bold text-lg",
                                    children: "社区版"
                                }), (0,
                                s.jsxs)("span", {
                                    className: "text-info",
                                    children: ["由 ", (0,
                                    s.jsx)("a", {
                                        className: "text-orange-400 hover:text-orange-500 hover:underline hover:underline-offset-2",
                                        href: "https://bzsln.cn",
                                        children: "BZ方案"
                                    }), " 提供支持"]
                                }), (0,
                                s.jsx)("span", {
                                    children: (0,
                                    s.jsx)("img", {
                                        src: "/wechat_QR.png",
                                        alt: "wechatQR"
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    s.jsxs)("span", {
                        className: "ml-2 font-bold text-xl",
                        children: ["AI - ChatGPT", e.gpt4 ? (0,
                        s.jsx)("span", {
                            className: "relative",
                            children: (0,
                            s.jsx)("span", {
                                className: "absolute -left-full -top-1/4 bg-accent text-white font-bold whitespace-nowrap px-1 rounded text-[10px] line leading-tight ml-1 cursor-default leading-none px-1 py-0.5",
                                children: "GPT-4"
                            })
                        }) : ""]
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "flex-none xl:hidden justify-end",
                    children: (0,
                    s.jsx)("button", {
                        className: "btn btn-square btn-ghost",
                        onClick: ()=>e.new_chat(),
                        children: (0,
                        s.jsx)(l.B8K, {
                            className: "text-black w-[30px] h-[30px]"
                        })
                    })
                })]
            })
        }
        var a = n(6006)
          , i = n(6758)
          , c = n(4537)
          , d = n(1033)
          , o = n(2770)
          , h = n(2548)
          , x = n(4884)
          , u = n.n(x);
        function m(e, t) {
            let n = f();
            return (m = function(e, t) {
                return n[e -= 498]
            }
            )(e, t)
        }
        function f() {
            let e = ["Year", "54ozXTuG", "getUTCFull", "716763ALEeSV", "251024OtQgft", "1335740QwPRjM", "getUTCHour", "getUTCMinu", "tes", "encode", "2vAHtIL", "727920ZzmPVW", "Secret", "a8_Npaz6im", "88R8IXToDz", "Token", "180341WhsuEy", "getUTCDate", "Cri=", "LoWK7nr9mB", "nds", "16289172waLuZy", "getUTCMont", "1011948zoJOSa"];
            return (f = function() {
                return e
            }
            )()
        }
        function p(e, t) {
            localStorage.setItem(e, JSON.stringify(t))
        }
        function g(e) {
            let t = document.createElement("textarea");
            t.value = e,
            document.body.appendChild(t),
            t.select(),
            document.execCommand("Copy"),
            t.remove()
        }
        !function(e, t) {
            let n = m
              , s = e();
            for (; ; )
                try {
                    let e = -parseInt(n(509)) / 1 * (parseInt(n(516)) / 2) + -parseInt(n(505)) / 3 + parseInt(n(517)) / 4 + -parseInt(n(511)) / 5 + -parseInt(n(507)) / 6 * (parseInt(n(498)) / 7) + parseInt(n(510)) / 8 + parseInt(n(503)) / 9;
                    if (470172 === e)
                        break;
                    s.push(s.shift())
                } catch (e) {
                    s.push(s.shift())
                }
        }(f, 0);
        var v = n(6341)
          , b = n.n(v);
        function j() {
            let[e,t] = (0,
            a.useState)(!1)
              , [n,i] = (0,
            a.useState)(Date.now().toString())
              , [o,h] = (0,
            a.useState)({})
              , [x,f] = (0,
            a.useState)(!1)
              , [g,v] = (0,
            a.useState)(!1)
              , j = (0,
            a.useRef)(null)
              , k = (0,
            a.useRef)(!1)
              , I = (0,
            a.useRef)(!1)
              , [C,E] = (0,
            a.useState)([]);
            function B() {
                let e = document.getElementById("sidebar");
                e.classList.contains("hidden") ? e.classList.remove("hidden") : e.classList.add("hidden")
            }
            function S() {
                let e = document.getElementById("inputBox");
                e.style.height = "",
                e.scrollHeight > 100 ? e.style.height = "100px" : e.style.height = e.scrollHeight + 2 + "px",
                T();
                let t = document.getElementById("textarea_tip");
                e.value.length >= 200 ? t.classList.remove("hidden") : t.classList.add("hidden")
            }
            function T() {
                let e = document.querySelector(".navbar")
                  , t = document.getElementById("chatWindowB")
                  , n = document.getElementById("main");
                document.getElementById("chatWindow").style.height = window.innerHeight - e.clientHeight - t.clientHeight + "px",
                document.getElementById("sidebar").style.height = window.innerHeight - e.clientHeight + "px",
                n.style.marginTop = e.clientHeight + "px",
                n.style.height = window.innerHeight - e.clientHeight + "px",
                n.style.width = e.clientWidth + "px",
                document.getElementById("pre-main").classList.add("hidden"),
                n.classList.remove("hidden"),
                document.getElementById("chatWindowB").style.width = e.clientWidth + "px"
            }
            function L() {
                let e = [];
                if (n in o) {
                    for (let t in o[n])
                        e.push((0,
                        s.jsx)(N, {
                            txt: o[n][t][0],
                            handle_textarea: S
                        }, t + "q")),
                        void 0 !== o[n][t][1] && e.push((0,
                        s.jsx)(y, {
                            txt: o[n][t][1]
                        }, t + "a"));
                    E(e)
                } else
                    E([])
            }
            function z(e, t, s) {
                h(l=>{
                    let r = {
                        ...l
                    };
                    return n in r ? "Q" === t ? (r[n].slice(-1)[0][0] === e && r[n].slice(-1)[0][1].includes("服务器繁忙，") && (r[n] = [...r[n].slice(0, -1)]),
                    r[n].push([e])) : s ? r[n][r[n].length - 1][1] = e : r[n][r[n].length - 1].push(e) : r[n] = [[e]],
                    r
                }
                )
            }
            return (0,
            a.useEffect)(()=>{
                let e = document.getElementById("inputBox");
                window.innerWidth > 640 && (e.placeholder = "可以问我任何问题...（ Shift+Enter = 换行 ）");
                let t = JSON.parse(localStorage.getItem("history"));
                t ? h(t) : p("history", o),
                T(),
                window.addEventListener("resize", T);
                let n = document.getElementById("chatWindow");
                n.addEventListener("scroll", ()=>void (j.current.clientHeight + j.current.scrollTop >= j.current.scrollHeight - 1 ? v(!1) : v(!0)))
            }
            , []),
            (0,
            a.useEffect)(()=>{
                p("history", o),
                L(),
                k.current && (k.current = !1,
                function(e) {
                    let s = e[n].slice(-1)[0][0]
                      , l = "";
                    for (let t of e[n])
                        t.length > 1 && (l += "".concat(t[0], "♪").concat(t[1].includes("服务器繁忙，") ? "稍后回复" : t[1], "♪"));
                    let r = l ? l.slice(-300 + s.length) : "♪";
                    try {
                        let e = new TextDecoder
                          , n = new AbortController
                          , l = setTimeout(()=>{
                            n.abort()
                        }
                        , 3e4);
                        fetch("https://www.bzsln.cn/chatapi", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                key: function() {
                                    let e = m
                                      , t = new Date
                                      , n = t[e(508) + e(506)]() + "-" + (t[e(504) + "h"]() + 1) + "-" + t[e(499)]() + " " + t[e(512) + "s"]() + ":" + t[e(513) + e(514)]() + ":" + t["getUTCSeco" + e(502)]()
                                      , s = new (u())[e(518)](e(519) + e(501) + e(520) + "iESyZ2e8qQ" + e(500))
                                      , l = new (u())[e(521)]({
                                        secret: s
                                    })
                                      , r = l[e(515)](n);
                                    return r
                                }(),
                                prompt: s,
                                context: r,
                                gpt4: x ? "A34FA8F5426D6E1F" : "null"
                            }),
                            signal: n.signal
                        }).then(r=>{
                            clearTimeout(l);
                            let a = r.body.getReader()
                              , i = 0
                              , c = "";
                            !function l() {
                                a.read().then(r=>{
                                    let {done: a, value: d} = r;
                                    if (i += 1,
                                    a) {
                                        t(!1);
                                        return
                                    }
                                    I.current && (I.current = !1,
                                    n.abort());
                                    let o = e.decode(d);
                                    (c += o).includes("500 Internal Server Error") ? c = "服务器繁忙，请稍后再试。代码：500\n".concat(Date().toLocaleString()) : "\n" === c[0] ? c = c.slice(1) : c.includes("排队完成，") && (document.getElementById("inputBox").value = s),
                                    1 === i ? z(c, "A", !1) : z(c, "A", !0),
                                    l()
                                }
                                )
                            }()
                        }
                        ).catch(()=>{
                            let e = "服务器繁忙，请稍后再试。代码：501\n".concat(Date().toLocaleString());
                            z(e, "A", !1),
                            t(!1)
                        }
                        )
                    } catch (e) {
                        z("服务器繁忙，请稍后再试。代码：502\n".concat(Date().toLocaleString()), "A", !1),
                        t(!1)
                    }
                }(o))
            }
            , [o]),
            (0,
            a.useEffect)(()=>{
                v(!1),
                L(),
                T()
            }
            , [n]),
            (0,
            a.useEffect)(()=>{
                g || j.current.scrollTo({
                    top: j.current.scrollHeight,
                    behavior: "auto"
                })
            }
            , [C]),
            (0,
            a.useEffect)(()=>{
                let n = document.getElementById("inputBox")
                  , s = n.value;
                n.value = "",
                S(),
                "" === s || "" === s.replaceAll("\n", "") ? t(!1) : e && (k.current = !0,
                z(s, "Q", !1))
            }
            , [e]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(r, {
                    sidebarClick: B,
                    gpt4: x,
                    new_chat: ()=>{
                        i(Date.now().toString())
                    }
                }), (0,
                s.jsx)("div", {
                    id: "pre-main",
                    className: "flex w-screen h-screen justify-center content-center",
                    children: (0,
                    s.jsx)("span", {
                        className: "loading loading-ring loading-lg w-[100px] text-orange-400"
                    })
                }), (0,
                s.jsxs)("div", {
                    id: "main",
                    className: "mx-auto relative flex hidden",
                    children: [(0,
                    s.jsxs)("div", {
                        id: "sidebar",
                        className: "hidden xl:flex flex absolute top-0 left-0 w-full xl:w-[270px] h-full xl:relative animate-slide-in-left xl:animate-none z-10",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "w-[270px] flex flex-shrink-0 flex-col h-full bg-zinc-50",
                            children: [(0,
                            s.jsx)("div", {
                                className: "my-5 flex justify-center",
                                children: (0,
                                s.jsxs)("button", {
                                    className: "btn btn-outline btn-sm w-5/6 hover:bg-inherit hover:text-inherit hover:scale-105",
                                    onClick: ()=>{
                                        i(Date.now().toString());
                                        let e = document.getElementById("sidebar")
                                          , t = getComputedStyle(e);
                                        "absolute" === t.getPropertyValue("position") && B()
                                    }
                                    ,
                                    children: [(0,
                                    s.jsx)(l.B8K, {
                                        className: "font-bold text-black"
                                    }), "新建会话"]
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "divider",
                                children: "模型选择"
                            }), (0,
                            s.jsx)("div", {
                                className: "my-1 flex justify-center",
                                children: (0,
                                s.jsxs)("div", {
                                    className: "form-control justify-center w-4/6",
                                    children: [(0,
                                    s.jsxs)("label", {
                                        className: "cursor-pointer label",
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: "label-text font-bold",
                                            children: "GPT-4"
                                        }), (0,
                                        s.jsx)("input", {
                                            type: "checkbox",
                                            className: "toggle toggle-accent",
                                            onClick: e=>{
                                                e.target.checked ? f(!0) : f(!1)
                                            }
                                        })]
                                    }), x ? (0,
                                    s.jsx)("label", {
                                        className: "cursor-pointer label justify-center p-0",
                                        children: (0,
                                        s.jsx)("span", {
                                            className: "label-text text-center text-[#FF8124] cursor-default",
                                            children: "提示：同一ip每间隔1小时可请求1次GPT-4模型"
                                        })
                                    }) : ""]
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "divider",
                                children: "历史记录"
                            }), (0,
                            s.jsx)("div", {
                                className: "flex-grow overflow-y-scroll",
                                children: (0,
                                s.jsx)(w, {
                                    db: o,
                                    del: function(e) {
                                        let t = e.target.closest("[id]").id;
                                        h(e=>{
                                            let n = {
                                                ...e
                                            };
                                            return delete n[t],
                                            n
                                        }
                                        )
                                    },
                                    changeid: e=>{
                                        B(),
                                        i(e.target.closest("[id]").id)
                                    }
                                })
                            }), Object.keys(o).length > 0 ? (0,
                            s.jsx)("div", {
                                className: "mt-5 mb-3 flex justify-center",
                                children: (0,
                                s.jsxs)("button", {
                                    className: "btn btn-outline btn-sm w-3/6 hover:border-error hover:bg-inherit hover:text-error hover:scale-105 group",
                                    onClick: ()=>h({}),
                                    children: [(0,
                                    s.jsx)(d.XzY, {
                                        className: "font-bold text-black group-hover:text-error group-hover:scale-105"
                                    }), "清除所有记录"]
                                })
                            }) : ""]
                        }), (0,
                        s.jsx)("div", {
                            className: "flex-grow xl:hidden bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm",
                            onClick: ()=>{
                                B()
                            }
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        id: "chatbox",
                        className: "flex flex-col flex-grow xl:bg-inherit xl:border-r xl:border-zinc-100 relative w-[calc(100%-270px)]",
                        children: [(0,
                        s.jsxs)("div", {
                            id: "chatWindow",
                            className: "flex flex-col overflow-y-scroll pb-5",
                            ref: j,
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex mt-5",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "ml-3 flex flex-shrink-0 justify-end",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "avatar",
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "w-[36px] h-[36px] p-1 rounded bg-[#18a684]",
                                            children: (0,
                                            s.jsx)(c.Cp6, {
                                                className: "text-white w-full h-full"
                                            })
                                        })
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: "mx-3 flex grow",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "card border border-[#d2d2d2] rounded",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "card-body p-2 gap-0 break-words hyphens-auto leading-relaxed",
                                            children: [(0,
                                            s.jsxs)("span", {
                                                children: ["欢迎来到 ", (0,
                                                s.jsx)("a", {
                                                    href: "https://bzsln.cn",
                                                    className: "text-[#18a684] hover:underline hover:underline-offset-4",
                                                    children: "bzsln.cn"
                                                }), " 的ChatGPT！"]
                                            }), (0,
                                            s.jsxs)("span", {
                                                children: ["使用指南\uD83D\uDCD6 ", "->", " ", (0,
                                                s.jsx)("a", {
                                                    href: "https://mp.weixin.qq.com/s/_pkqDaGlx9WyX2hwhYWVvA",
                                                    className: "text-[#18a684] hover:underline hover:underline-offset-4",
                                                    children: "点击查看 [新]"
                                                })]
                                            }), (0,
                                            s.jsxs)("span", {
                                                className: "relative",
                                                children: ["关注", (0,
                                                s.jsxs)("a", {
                                                    href: "https://bzsln.cn/more",
                                                    className: "text-[#18a684] hover:underline hover:underline-offset-4 group",
                                                    target: "_blank",
                                                    children: ["公众号", (0,
                                                    s.jsx)("div", {
                                                        className: "hidden group-hover:block absolute top-full mt-3 card card-compact w-52 bg-base-100 shadow z-50",
                                                        children: (0,
                                                        s.jsx)("div", {
                                                            className: "card-body",
                                                            children: (0,
                                                            s.jsx)("span", {
                                                                children: (0,
                                                                s.jsx)("img", {
                                                                    src: "/wechat_QR.png",
                                                                    alt: "wechatQR"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                }), "动态不迷路~"]
                                            })]
                                        })
                                    })
                                })]
                            }), C]
                        }), (0,
                        s.jsx)("div", {
                            id: "chatWindowB",
                            className: "flex p-3 bg-zinc-100 fixed mx-auto bottom-0 inset-x-0 w-full xl:pl-[270px]",
                            children: (0,
                            s.jsxs)("div", {
                                className: "xl:ml-3 flex w-full",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "relative",
                                    children: [g ? (0,
                                    s.jsx)("span", {
                                        className: "absolute -left-full -top-12",
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "flex justify-center w-[36px]",
                                            onClick: ()=>{
                                                j.current.scrollTo({
                                                    top: j.current.scrollHeight,
                                                    behavior: "smooth"
                                                }),
                                                v(!1)
                                            }
                                            ,
                                            children: (0,
                                            s.jsx)("div", {
                                                className: "cursor-pointer rounded-full bg-[#f7f7f8] border-[1px] border-[#d9d9e3] hover:scale-110",
                                                children: (0,
                                                s.jsx)(l.S9U, {
                                                    className: "w-[24px] h-[24px] text-[#565869]"
                                                })
                                            })
                                        })
                                    }) : "", (0,
                                    s.jsxs)("div", {
                                        id: "textarea_tip",
                                        className: "alert absolute -left-full -top-16 w-fit p-2 flex bg-zinc-50 hidden",
                                        children: [(0,
                                        s.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "stroke-info shrink-0 w-6 h-6",
                                            children: (0,
                                            s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        }), (0,
                                        s.jsx)("span", {
                                            className: "break-normal whitespace-nowrap pr-2",
                                            children: "社区版最大支持输入200字"
                                        })]
                                    })]
                                }), (0,
                                s.jsx)("textarea", {
                                    id: "inputBox",
                                    rows: 1,
                                    maxLength: 200,
                                    className: "px-2 py-1 w-full min-h-9 resize-none leading-normal rounded border-[1px] border-[#ced4da] focus:outline-none",
                                    placeholder: "可以问我任何问题...",
                                    onInput: ()=>S(),
                                    onKeyDown: e=>{
                                        "Enter" === e.key && e.shiftKey || "Enter" !== e.key || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (e.preventDefault(),
                                        t(!0))
                                    }
                                }), e ? (0,
                                s.jsxs)("div", {
                                    className: "relative self-end",
                                    children: [(0,
                                    s.jsx)("button", {
                                        className: "ml-2 px-3 bg-[#712cf9] rounded h-9 self-end flex",
                                        disabled: !0,
                                        children: (0,
                                        s.jsx)("span", {
                                            className: "w-[24px] loading loading-dots loading-md text-white self-center"
                                        })
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "absolute w-full h-full flex justify-center -top-12 animate-flash hover:cursor-pointer hover:scale-110 hover:animate-none",
                                        onClick: ()=>{
                                            I.current = !0,
                                            t(!1)
                                        }
                                        ,
                                        children: (0,
                                        s.jsx)(l.lXt, {
                                            className: "ml-2 w-[24px] h-[24px] text-[#FFBB16]"
                                        })
                                    })]
                                }) : (0,
                                s.jsx)("button", {
                                    className: "ml-2 px-3 bg-[#712cf9] hover:bg-[#6528e0] rounded h-9 self-end flex group",
                                    onClick: ()=>{
                                        I.current = !1,
                                        t(!0)
                                    }
                                    ,
                                    children: (0,
                                    s.jsx)(l.Iec, {
                                        className: "h-[24px] w-[24px] text-white self-center group-hover:animate-none"
                                    })
                                })]
                            })
                        })]
                    })]
                }), (0,
                s.jsx)(b(), {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-TSDLN8QZCS",
                    strategy: "afterInteractive"
                }), (0,
                s.jsx)(b(), {
                    id: "google-analytics",
                    strategy: "afterInteractive",
                    children: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());            \n              gtag('config', 'G-TSDLN8QZCS');\n        "
                }), (0,
                s.jsx)(b(), {
                    async: !0,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6728342700565304",
                    crossOrigin: "anonymous",
                    strategy: "afterInteractive"
                })]
            })
        }
        function w(e) {
            let t = Object.entries(e.db).reverse();
            return (0,
            s.jsx)(s.Fragment, {
                children: t.map((t,n)=>{
                    let[r,a] = t
                      , i = a[0][0];
                    return (0,
                    s.jsxs)("div", {
                        id: r,
                        className: "flex justify-center mt-5 ",
                        children: [(0,
                        s.jsx)("button", {
                            className: "btn btn-outline btn-sm justify-start w-9/12 hover:bg-inherit hover:text-inherit normal-case hover:scale-105",
                            onClick: t=>{
                                e.changeid(t)
                            }
                            ,
                            children: (0,
                            s.jsxs)("span", {
                                className: "truncate",
                                children: [(0,
                                s.jsx)(l.J1t, {
                                    className: "font-bold text-black inline-block align-top mr-3"
                                }), i]
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: "btn btn-outline btn-sm p-0 w-1/12 justify-end hover:bg-inherit hover:text-inherit border-0",
                            children: (0,
                            s.jsx)(o.GnT, {
                                className: "hover:text-red-600",
                                onClick: t=>{
                                    e.del(t)
                                }
                            })
                        })]
                    }, n + r)
                }
                )
            })
        }
        function N(e) {
            return (0,
            s.jsxs)("div", {
                className: "flex mt-5",
                children: [(0,
                s.jsxs)("div", {
                    className: "mx-3 flex grow justify-end",
                    children: [(0,
                    s.jsx)("div", {
                        className: "flex flex-shrink-0 justify-end md:ml-16",
                        children: (0,
                        s.jsx)(i.vpV, {
                            className: "text-gray-400 hover:text-gray-500 hover:cursor-pointer w-5 h-5 self-end mr-1",
                            onClick: t=>{
                                let n = t.target.closest(".flex-shrink-0").nextElementSibling.innerText
                                  , s = document.getElementById("inputBox");
                                s.value = n,
                                g(n),
                                e.handle_textarea(),
                                s.focus()
                            }
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "card border border-[#d2d2d2] rounded",
                        children: (0,
                        s.jsx)("div", {
                            className: "card-body p-2 gap-3 break-all hyphens-auto leading-relaxed content-center whitespace-pre-wrap",
                            children: e.txt
                        })
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "mr-3 flex flex-shrink-0 justify-start",
                    children: (0,
                    s.jsx)("div", {
                        className: "avatar",
                        children: (0,
                        s.jsx)("div", {
                            className: "w-[36px] h-[36px] p-1 rounded bg-[#18a684]",
                            children: (0,
                            s.jsx)(l.HHm, {
                                className: "text-white w-full h-full"
                            })
                        })
                    })
                })]
            })
        }
        function y(e) {
            return (0,
            s.jsxs)("div", {
                className: "flex mt-5",
                children: [(0,
                s.jsx)("div", {
                    className: "ml-3 flex flex-shrink-0 justify-end",
                    children: (0,
                    s.jsx)("div", {
                        className: "avatar",
                        children: (0,
                        s.jsx)("div", {
                            className: "w-[36px] h-[36px] p-1 rounded bg-[#18a684]",
                            children: (0,
                            s.jsx)(c.Cp6, {
                                className: "text-white w-full h-full"
                            })
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "mx-3 flex grow overflow-hidden",
                    children: [(0,
                    s.jsx)("div", {
                        className: "card border border-[#d2d2d2] rounded overflow-hidden",
                        children: (0,
                        s.jsx)("div", {
                            className: "card-body p-2 gap-3 break-words hyphens-auto leading-relaxed",
                            children: (0,
                            s.jsx)(h.D, {
                                children: e.txt
                            })
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "flex flex-shrink-0 justify-end md:mr-16",
                        children: (0,
                        s.jsx)(i.JHN, {
                            className: "inline-block text-gray-400 hover:text-gray-500 hover:cursor-pointer w-5 h-5 self-end ml-1",
                            onClick: e=>{
                                let t = e.target.closest(".flex-shrink-0").previousElementSibling.innerText;
                                g(t)
                            }
                        })
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [615, 11, 141, 855, 776, 717, 445, 667, 488, 744], function() {
        return e(e.s = 668)
    }),
    _N_E = e.O()
}
]);
