import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import SuggestAccounts from '~/components/SuggestAccounts';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import ModalOverlay from '~/components/ModalOverlay';
// import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar({ medium }) {
    // const [state] = useStore();
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [login, setLogin] = useState(false);
    const [count, setCount] = useState(suggestedUser.length + 5);
    const [seeMore, setSeeMore] = useState(true);

    // get data
    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);
    // get more account
    const handleViewChange = () => {
        setPage(page + 1);
        setCount((prev) => prev + 5);
    };
    if (suggestedUser.length !== count) {
        setSeeMore(false);
    }
    // login
    const HandleLogin = () => {
        setLogin(true);
    };
    return (
        <div className={cx('wrapper', medium && 'medium')}>
            {login ? <ModalOverlay setLogin={setLogin} /> : ''}
            <div className={cx('body')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>

                {localStorage.getItem('USER_LOG_IN') ? (
                    ''
                ) : (
                    <div className={cx('sidebar-login')}>
                        <p className={cx('sidebar-login-text')}>
                            Log in to follow creators, like videos, and view comments.
                        </p>
                        <Button outline large className={cx('sidebar-login-btn')} onClick={HandleLogin}>
                            Log in
                        </Button>
                    </div>
                )}

                <SuggestAccounts
                    label="Suggested accounts"
                    data={suggestedUser}
                    seeMore={seeMore}
                    onViewChange={handleViewChange}
                />
                <SuggestAccounts label="Following accounts" />
            </div>
            <footer className={cx('footer')}>
                <ul className={cx('footer-list')}>
                    <p>
                        <Link to="#">About</Link>
                    </p>
                    <p>
                        <Link to="#">TikTok Browse</Link>
                    </p>
                    <p>
                        <Link to="#">Contact</Link>
                    </p>
                    <p>
                        <Link to="#">Careers</Link>
                    </p>
                </ul>
                <ul className={cx('footer-list')}>
                    <p>
                        <Link to="#">Help</Link>
                    </p>
                    <p>
                        <Link to="#">Safety</Link>
                    </p>
                    <p>
                        <Link to="#">Privacy</Link>
                    </p>
                    <p>
                        <Link to="#">Community</Link>
                    </p>
                </ul>

                <span className={cx('end')}>© 2022 TikTok - Create by Quynh</span>
            </footer>
        </div>
    );
}

export default Sidebar;
