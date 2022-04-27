import {infoUtils} from "./utils/infoUtils.js";
import {webUtils} from "./utils/webUtils.js";

export let mainDiv;

if (infoUtils.checkLogin()) {
    //태그 찾기 및  및 main Tag 생성부분
    let contentClass = document.querySelector(".mx-auto.d-flex.flex-auto.flex-column");
    mainDiv = document.createElement("main");
    mainDiv.classList.add("flex-auto");
    mainDiv.name = "Categorizing";

    //inner Main tag Content 지정 부분
    let innerContent = "<h2>🍀 Github-Categorizing</h2>";
    innerContent += "Welcome " + infoUtils.name;
    innerContent += "<hr/>";

    //적용하는 부분
    mainDiv.innerHTML = innerContent;
    contentClass.prepend(mainDiv);
  //  alert("login 했네 ㅋ");

}



infoUtils.loadRepository()
    .then(result => console.log(result))



