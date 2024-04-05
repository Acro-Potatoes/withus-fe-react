import { Link } from 'react-router-dom';
import { CloudIcon, EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';

import { PAGE_PATH } from '#/contents/page';
import { usePostSignIn } from '#/hooks/queries/sign';
import GoogleLogo from '#/assets/google-logo.svg?react';

const AuthPage = () => {
    const { mutate } = usePostSignIn();
    return (
        <div className="flex flex-col gap-6 items-center mt-28">
            <CloudIcon className="h-36 w-36 text-cyan-500" />
            <h2 className="text-5xl font-bold">
                WithUS에 오신 것을 환영합니다!
            </h2>
            <h2 className="text-xl">
                <span className="font-bold">그룹에서 사용하는 이메일 주소</span>
                로 로그인하는 것을 추천드려요.
            </h2>
            <form className="flex flex-col items-center gap-3 w-full max-w-sm">
                <label className="input input-secondary flex items-center gap-2">
                    <EnvelopeIcon width={18} />
                    <input
                        placeholder="name@work-email.com"
                        type="text"
                        className="grow"
                        autoFocus
                        required
                    />
                </label>
                <label className="input input-secondary flex items-center gap-2">
                    <KeyIcon width={18} />
                    <input
                        placeholder="password"
                        type="password"
                        className="grow"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="btn btn-neutral text-lg font-medium"
                >
                    시작
                </button>
            </form>
            <span className="divider">또는</span>
            <button className="btn btn-outline text-lg font-medium max-w-sm flex items-center hover:bg-white hover:text-black">
                <GoogleLogo width={30} height={30} />
                sign with google
            </button>
            <Link
                to={PAGE_PATH.createAccout}
                className="text-blue-500 hover:underline underline-offset-2"
            >
                처음 왔어요!
            </Link>
        </div>
    );
};

export default AuthPage;
