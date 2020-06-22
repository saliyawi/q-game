import callApi from '../Utilities/callApi';
import apiUrls from '../Constants/ApiUrls';

export default function handleUserProfile (userAuth) {
    if (!userAuth) return;
    const { displayName, email } = userAuth;

    //console.log('userAuth',userAuth)

    const url = apiUrls.addUser; 
    const method = 'POST';
    const data = {
        Name: displayName,
        Email: email
    }

    // Save user into API
    callApi(url, method, data).then((response) => {
        if(response && response.status === 200){
           return response; 
        }    
    });

};