import { AxiosResponse } from 'axios';

type ResponseStatus = {
    statusCode: number;
    statusMsg: string;
};

export type PostSignInAPIProps = {
    userMail: string;
    password: string;
};

export type PostSignInAPI = (
    data: PostSignInAPIProps,
) => Promise<AxiosResponse<ResponseStatus>>;

export type PostSignUpAPIProps = {
    userMail: string;
    password: string;
};

export type PostSignUpAPI = (
    data: PostSignUpAPIProps,
) => Promise<AxiosResponse<ResponseStatus>>;
