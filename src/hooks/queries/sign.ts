import { useMutation } from '@tanstack/react-query';
import signAPI from '#/api/sign';

export const usePostSignIn = () => {
    return useMutation({ mutationFn: signAPI.postSignInAPI });
};

export const usePostSignUp = () => {
    return useMutation({ mutationFn: signAPI.postSignUpAPI });
};
