// ==UserScript==
// @name         Fire&Leaf
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       leaf
// @match        http://*/*
// @match        https://chat.bzsln.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    let fetchHook={};
    let hook_fetch=unsafeWindow.fetch; //储存原始fetch
    unsafeWindow.fetch=async function(...args){ //劫持fetch
        console.log(...args);
        if(args[0]=="https://www.bzsln.cn/chatapi"){
            return await hook_fetch(...args).then((oriRes)=>{
                let hookRes =oriRes.clone(); //克隆原始response
                hookRes.text().then(res=>{ //读取克隆response
                    //console.log("RES",res)
                    fetchHook["getdata"]=res;
                    console.log(fetchHook["getdata"]);
                });
                return oriRes; //返回原始response
            });
        };
        return hook_fetch(...args);
    };
})();