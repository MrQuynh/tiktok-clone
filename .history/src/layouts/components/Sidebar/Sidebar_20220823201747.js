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

const cx = classNames.bind(styles);

function Sidebar({ medium }) {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper', medium && 'medium')}>
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

                <div className={cx('sidebar-login')}>
                    <p className={cx('sidebar-login-text')}>
                        Log in to follow creators, like videos, and view comments.
                    </p>
                    <Button outline large className={cx('sidebar-login-btn')}>
                        Log in
                    </Button>
                </div>

                <SuggestAccounts label="Suggested accounts" data={suggestedUser} />
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
