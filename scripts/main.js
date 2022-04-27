import {infoUtils} from "./utils/infoUtils.js";
import {datasetUtils} from "./utils/datasetUtils.js";
import {localDatabaseUtils as db} from "./utils/localDatabaseUtils.js";
import {webUtils} from "./utils/webUtils.js";

export let mainDiv;

if (!infoUtils.checkLogin())
    throw new Error("Not Login");

//태그 찾기 및  및 main Tag 생성부분
let contentClass = document.querySelector(".mx-auto.d-flex.flex-auto.flex-column");
mainDiv = document.createElement("main");
mainDiv.classList.add("flex-auto");
mainDiv.name = "Categorizing";

//inner Main tag Content 지정 부분
let innerContent = "<h2>🍀 Github-Categorizing</h2>";
//innerContent += "Welcome " + datasetUtils.getName();
innerContent += `<div align="right">Extension Settings</div>`;
innerContent += "<hr/>";

//적용하는 부분
mainDiv.innerHTML = innerContent;
contentClass.prepend(mainDiv);
//  alert("login 했네 ㅋ");


/*$('#repoTree').jstree().create_node('#', {
    "id": "p3",
    "text": "Parent-3"
}, "last", function() {
    alert("Parent created");
});*/


db.create_database();
infoUtils.loadRepository()
    .then(result => {
        let a = db.getRepoList;
        db.insert_newRepo(result);
    });


//db.insert_records({value : "value1", key: "key1"});
// let defaultSettingPage = webUtils.getContentByFile("view/settings.html");
// defaultSettingPage.then(data => contentClass.innerHTML = (data) + contentClass.innerHTML);
//








