// 실제 로딩될 main.js 파일을 dynamic import
const init = () => {
    console.log("Github Categorizing init...");

    (async () => {
        const src = chrome.runtime.getURL('scripts/main.js');
        const mainScript = await import(src);
     //   mainScript.default();
    })();
}

window.onload = init;