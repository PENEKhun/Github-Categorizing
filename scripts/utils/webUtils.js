export const webUtils = {

    create_iframe: (frmName, src) => {
        //보이지않는 iframe을 생성하는 함수입니다.
        if (!document.getElementById(frmName)) {
            let html = "<html><head></head><body>Hidden iframe</body></html>";
            let iframe = document.createElement("iframe");
            iframe.setAttribute("name", frmName);
            iframe.setAttribute("id", frmName);
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("width", "0");
            iframe.setAttribute("height", "0");
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
            document.body.appendChild(iframe);
        }
    }
}