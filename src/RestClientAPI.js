import * as request from "superagent";

export default class RestClientAPI {
    doGET (pathName, fnCall) {
        return request.get("http://localhost:3000/" + pathName).end((err, res) => {
            fnCall(JSON.parse(res.text));
        });
    }
};