import axios from 'axios';
import config from '../../InitialLoader/qGame.config';


export default function callApi (apiUrl,methodType, data){

    const contentType = "application/json";

    if(apiUrl !== '' && methodType !== ''){

        const url = config.apiUrl + apiUrl;

        return axios(
            {
                method:methodType, 
                url:url,
                timeout: 300000,
                headers: {"Content-Type": contentType},
                data: data
            }).then((response) => {
                if (response.status !== 200) {
                    console.log(response);
                    return null;
                  } else if (response) {
                    return response;
                  }
            })
            .catch(() =>{
                 return null;
            });
    }
};