import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';

import Image from '../Image';
import styles from './SuggestAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountItem({ avatar, id, nickname, tick, first_name, last_name, followers_count, likes_count }) {
    const name = first_name + last_name;
    const [follow, setFollow] = useState(false);
    const handleClick = () => {
        setFollow(!follow);
    };

    return (
        <>
            <Tippy
                interactive
                placement="bottom"
                delay={[600, 200]}
                render={() => (
                    <div className={cx('account')}>
                        <div className={cx('account-header')}>
                            <Link to={'/@' + nickname}>
                                <Image className={cx('avatar', 'large')} src={avatar} />
                            </Link>

                            {follow ? (
                                <Button
                                    outline
                                    className={cx('btn-account-follow', 'btn-small-account')}
                                    onClick={handleClick}
                                >
                                    Following
                                </Button>
                            ) : (
                                <Button primary className={cx('btn-small-account')} onClick={handleClick}>
                                    Follow
                                </Button>
                            )}
                        </div>
                        <div className={cx('info', 'info-follow')}>
                            <Link
                                to={{
                                    pathname: '/@' + nickname,
                                }}
                            >
                                <h4 className={cx('nick-name', 'bold')}>
                                    {nickname} {tick && <AiFillCheckCircle className={cx('icon')} />}
                                </h4>
                            </Link>
                            <Link to={'/@' + nickname}>
                                <p className={cx('name', 'medium')}>{name}</p>
                            </Link>
                            <div className={cx('vote-body')}>
                                <strong className={cx('vote')}>{followers_count}</strong> Followers
                                <strong className={cx('vote')}>{likes_count}</strong> Likes
                            </div>
                        </div>
                    </div>
                )}
            >
                <div>
                    <Link
                        to={{
                            pathname: '/@' + nickname,
                        }}
                        className={cx('item')}
                    >
                        <Image className={cx('avatar')} src={avatar} />
                        <div className={cx('info')}>
                            <h4 className={cx('nick-name')}>
                                {nickname} {tick && <AiFillCheckCircle className={cx('icon')} />}
                            </h4>
                            <p className={cx('name')}>{name}</p>
                        </div>
                    </Link>
                </div>
            </Tippy>
        </>
    );
}

export default AccountItem;
