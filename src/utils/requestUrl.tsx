import axios from "axios";
import http from "../http-common";


const requestGet = (url: string, response: any, error: any) =>{
    http.get(url).then(response).catch(error);
}

const requestPost = (url: string, data: any, response: any,error: any) =>{
    http.post(url,data).then(response).catch(error);
}


const payRequest = (params: any,response: any, error: any) => {
    const url =  "/pay/card";
    requestPost(url,params,response,error);
}

const getPayFormToken = (params:any,response:any,error:any) => {
    const $username = '92244041';
    const $password =
        'testpassword_iIlE1eLKBcBGLeiJA8RCp8N8b70Y9B15HveExla2qQpGe';
    const url = 'https://api.systempay.fr/api-payment/V4/Charge/CreatePayment';
    const $header =
        'Authorization: Basic ' +
        Buffer.from($username + ':' +$password).toString('base64');
    const data = JSON.stringify(params);
    axios.post(url,data,{
        headers: {
            'Content-Type': 'application/json',
            $header,
        },
        auth: { username: $username, password: $password },
        responseType: 'json',
    },).then(response).catch(error);

}


export {payRequest,getPayFormToken};