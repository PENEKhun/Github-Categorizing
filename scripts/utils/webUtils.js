export const webUtils = {

    create_iframe: (whereById, frmName, src) => {
        //hidden iframe을 생성하는 함수입니다.
        if (!document.getElementById(frmName)) {
            let iframe = document.createElement("iframe");
            iframe.setAttribute("name", frmName);
            iframe.setAttribute("id", frmName);
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("frameborder", "0");
            //iframe.setAttribute("width", "0");
            //iframe.setAttribute("height", "0");
            iframe.src = encodeURI(src);


            whereById.prepend(iframe);
        }
    },

    getContentByFile : (path) => {
        return new Promise((resolve, reject) => {
            let contentClass = document.querySelector(".mx-auto.d-flex.flex-auto.flex-column");
            //
            path = chrome.runtime.getURL(path);

            fetch(path , {method: 'GET'})
                .then(response => response.text())
                .then(data => resolve(data))
        });
    }

}