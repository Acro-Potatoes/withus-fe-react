import Button from '#/common/components/Button';
import { EnvelopeIcon, KeyIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Input from '#/common/components/Input';

const CreateAccountPage = () => {
    const [profileImg, setProfileImg] = useState(null);
    return (
        <div className="flex flex-col items-center gap-8 *:max-w-80 md:gap-12 md:*:max-w-sm">
            <form className="flex w-full max-w-sm flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Email
                    </p>
                    <Input
                        forwardIcon={<EnvelopeIcon width={18} />}
                        type="text"
                        autoFocus
                        required
                        placeholder="name@work-email.com"
                        className="input-secondary"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>User Name
                    </p>
                    <Input
                        forwardIcon={<UserIcon width={18} />}
                        type="text"
                        required
                        placeholder="Superman"
                        className="input-secondary"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Password
                    </p>
                    <Input
                        forwardIcon={<KeyIcon width={18} />}
                        type="password"
                        required
                        placeholder="password"
                        className="input-secondary"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Password Check
                    </p>
                    <Input
                        forwardIcon={<KeyIcon width={18} />}
                        type="password"
                        required
                        placeholder="password check"
                        className="input-secondary"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Profile Image</p>
                    <div className="avatar placeholder self-center">
                        <div className="w-24 rounded-full bg-neutral-content">
                            {profileImg ? (
                                <img src="" alt="profile image" />
                            ) : (
                                <span className="text-sm">Superman</span>
                            )}
                        </div>
                    </div>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-sm"
                    />
                </div>
            </form>
            <Button type="submit" className="max-w-sm md:text-lg">
                새로운 계정 만들기
            </Button>
        </div>
    );
};

export default CreateAccountPage;
