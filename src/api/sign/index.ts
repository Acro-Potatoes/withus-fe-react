import { postAPI } from '#/api/axios';
import { PostSignInAPI, PostSignUpAPI } from '#/api/sign/type';
import { API_PATH } from '#/contents/api';

const postSignInAPI: PostSignInAPI = (data) => {
    return postAPI({ endPoint: API_PATH.post_sign_in, data });
};

const postSignUpAPI: PostSignUpAPI = (data) => {
    return postAPI({ endPoint: API_PATH.psot_sign_up, data });
};

export default {
    postSignInAPI,
    postSignUpAPI,
};
