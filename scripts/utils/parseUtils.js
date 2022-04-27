export const parseUtils = {
    name: name = "",

    parseRepository : (data) => {
        let result = {};

        //파싱하기 편하게 문자열 replace를 합니다.
        data = data.replaceAll(" ", "");
        data = data.replaceAll("\"", "");

        //파싱해온 html에서 불 필요한 부분을 날려버립니다.
        let startPoint = data.indexOf('data-filterable-type=substring>');
        data = data.substring(startPoint, data.length-1);

        //레포지토리 이름을 파싱하고
        let parseBy = `<ahref=/${infoUtils.name}/`;
        let tempData = data.split(parseBy);
        //불필요한 값이 담긴 1번 인덱스를 날려버립니다.
        tempData = tempData.splice(1, tempData.length);

        for ( let i in tempData ) {
            result[i] = tempData[i].split("itemprop=")[0];
        }
        return result;
        /*chrome.runtime.sendMessage({action: "finished_Get_Repository", res : result}, response => {
            if (response.status === false)
                throw new Error("레이아웃 표시 오류입니다.");
                });*/
    }
}
