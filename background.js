chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
    setTimeout(function() {
       /* if (rq.action === "getCookie") {
            setTimeout(() => {
                chrome.cookies.getAll({ domain: 'github.com', secure : true}, cookies => {
                   // console.log();
                    if (cookies === undefined || cookies === null)
                        throw cookies;

                    let organizedCookie =  new Object();
                    for(let cks of cookies){
                        organizedCookie[cks.name] =  cks.value;
                    }
                    sendResponse({res: organizedCookie, status: true});
                })
            }, 50);
        }*/

        if (rq.action === "finished_Get_Repository"){
            setTimeout(() => {
                console.log(rq.res);
                sendResponse({status: true});
            }, 50);
        }

    }, 30);
    return true;  // Return true to fix the error
});