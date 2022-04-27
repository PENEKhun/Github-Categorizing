import {parseUtils} from "./parseUtils.js";
import {datasetUtils} from "./datasetUtils.js";

export const infoUtils = {

    checkLogin: () => {
        console.log("[infoUtils] [checkLogin] called");
        /*
        로그인 상태인지 확인하는 함수
        로그인 상태면 name에 닉네임을 저장하고 true를 리턴,
        로그인 상태가 아니라면 false를 리턴
         */
        datasetUtils.setName(document.querySelector("meta[name=\"user-login\"]").getAttribute("content"));
        return datasetUtils.getName() !== ""; //닉네임이 존재하면 True, 아니면 False
    },

    loadRepository: () => {
        return new Promise((resolve, reject) => {
            console.log("[infoUtils] [loadRepository] called");
            /*
            모든 레포지토리를 가져오는 함수
             */

            //access : github.com/USER?tab=repositories
            // or GET /orgs/{org}/repos

            if (datasetUtils.name === "") {
                console.log("[infoUtils] [loadRepository] login 되지 않음.");
                return -1;
            }

            let repo = "";
            fetch(`https://github.com/${datasetUtils.getName()}?tab=repositories`, {
                method: 'GET',
                credentials: 'include'
            })
                .then(response => response.text())
                .then(data => {
                    resolve(parseUtils.parseRepository(data));
                })


            /*        chrome.runtime.sendMessage({
                        action: "getCookie"
                    },function(response) {
                        //callback
                        let cookies = response.res;



                    });*/
        });

    }
}
