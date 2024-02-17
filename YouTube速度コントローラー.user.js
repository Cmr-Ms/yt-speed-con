// ==UserScript==
// @name         YouTube広告スキッパー兼速度コントローラー
// @version      1.0
// @description  YouTubeの広告スキップと速度コントロール
// @author       Co_Ma_391
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", e=>{
    if(location.pathname.startsWith("/shorts")){
        if(e.key === "s"){
            document.querySelectorAll("video").forEach(e=>e.playbackRate -= 0.25)
        }else if(e.key === "d"){
            document.querySelectorAll("video").forEach(e=>e.playbackRate += 0.25)
        }else if(e.key === "S"){
            document.querySelectorAll("video").forEach(e=>e.playbackRate -= 0.1)
        }else if(e.key === "D"){
            document.querySelectorAll("video").forEach(e=>e.playbackRate += 0.1)
        }
    }else if(location.pathname.startsWith("/watch")){
        if(e.key === "#"){
            document.querySelectorAll("video").forEach(e=>e.playbackRate = 3)
        }
        if(e.key === "a"){
            document.querySelectorAll("video").forEach(e=>e.hidden = !document.querySelectorAll("video")[0].hidden)
        }else if(e.key === "s"){
            document.querySelectorAll("video")[0].playbackRate -= 0.25
        }else if(e.key === "d"){
            document.querySelectorAll("video")[0].playbackRate += 0.25
        }else if(e.key === "S"){
            document.querySelectorAll("video")[0].playbackRate -= 0.1
        }else if(e.key === "D"){
            document.querySelectorAll("video")[0].playbackRate += 0.1
        }else if(e.key === "g"){
            document.querySelectorAll("video")[0].playbackRate = 16
            document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")[0].click()
        }
    }
})

