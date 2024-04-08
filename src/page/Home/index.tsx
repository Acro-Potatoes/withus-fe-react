import { PAGE_PATH } from '#/contents/page';
import Link from '#/common/components/Link';

const HomePage = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <ul>
                <li>
                    <Link to={PAGE_PATH.auth}>Auth</Link>
                </li>
                <li>
                    <Link to={PAGE_PATH.createAccout}>Create Account</Link>
                </li>
                <li>
                    <Link to={PAGE_PATH.groupConnection}>Group Connection</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
