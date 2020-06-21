import callApi from '../Utilities/callApi';
import apiUrls from '../Constants/ApiUrls';

export const handleUserProfile = userAuth => {
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
        console.log('response', response);
    });

};