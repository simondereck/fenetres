import axios from "axios";
export default axios.create({
    baseURL:  process.env.REACT_APP_BASE_URL, 
    headers: {
        "Content-type": "application/json"
    },
    // paramsSerializer: function(params) {
    //     return QS.stringify(params, { indices: true });
    // }
});
