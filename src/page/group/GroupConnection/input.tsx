import { LinkIcon, TicketIcon } from '@heroicons/react/24/outline';
import Button from '#/common/components/Button';
import Input from '#/common/components/Input';
import Link from '#/common/components/Link';

const GroupConnectionPage = () => {
    return (
        <div className="flex flex-col items-center gap-4 md:gap-6">
            <TicketIcon className="size-16 text-cyan-500 md:size-24" />
            <p className="text-2xl font-bold md:text-4xl">
                초대 받으신 그룹이 있으신가요?
            </p>
            <p className="text-base font-semibold md:text-lg">
                초대 링크를 입력해주세요.
            </p>
            <Input
                forwardIcon={<LinkIcon className="size-6" />}
                type="text"
                placeholder="enter the invited link here"
                autoFocus
                className="input-secondary max-w-80 md:max-w-sm"
            />
            <Button className="max-w-80 md:max-w-sm">
                초대받은 그룹에 참가하기
            </Button>
            <div className="flex flex-col items-center gap-2">
                <p className="text-base font-semibold md:text-lg">
                    그룹을 만들어보세요.
                </p>
                <Link to={'/'}>그룹 만들기</Link>
            </div>
        </div>
    );
};

export default GroupConnectionPage;
