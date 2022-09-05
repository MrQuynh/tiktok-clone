import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '../Search';
import routesConfig from '~/config/routes';
import { BsCloudUpload } from 'react-icons/bs';
import ModalOverlay from '~/components/ModalOverlay';
import { useEffect, useState } from 'react';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboards shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/quynhhh',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        // to: '/',
        separate: true,
    },
];

const isLogin = localStorage.getItem('USER_LOG_IN');
const userLogIn = null;
const status = false;
const item = isLogin ? userMenu : MENU_ITEMS;

function Header() {
    const [currentUser, setCurrentUser] = useState({ userLogIn, status });
    const [login, setLogin] = useState(false);
    // const [item, setItem] = useState(MENU_ITEMS);

    const [state] = useStore();
    // console.log(state);
    useEffect(() => {
        if (state[0]?.userLogIn !== null) {
            setCurrentUser(state[0]);
            // setItem(userMenu);
        }
    }, [state]);

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const HandleLogin = () => {
        setLogin(true);
    };

    return (
        <header className={cx('wrapper')}>
            {login ? <ModalOverlay setLogin={setLogin} /> : ''}
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img className={cx('logo-image')} src={images.logo} alt="Tiktok" />
                </Link>

                {/* search */}

                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    {currentUser?.status ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                                <Link to="/upload">
                                    <button className={cx('action-btn')}>
                                        <BsCloudUpload />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to="/upload">
                                <Button text>Upload</Button>
                            </Link>
                            <Button primary onClick={HandleLogin}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={item} onChange={handleMenuChange}>
                        {currentUser?.status ? (
                            <Link
                                to={{
                                    pathname: '/@' + JSON.parse(currentUser?.userLogIn).nickname,
                                }}
                            >
                                <Image
                                    src={JSON.parse(currentUser?.userLogIn).avatar}
                                    className={cx('user-avatar')}
                                    // alt={userInfoLogIn.first_name}
                                    // fallback="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/279841216_1091212664941555_4727043539452060717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4RB0MOg_irsAX9qdhcU&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-zZLb-MWVTqtvdUNvU9Zbn_-7VNKibHfjFvX59Bbrvow&oe=62FCEAC9"
                                    // fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            </Link>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
