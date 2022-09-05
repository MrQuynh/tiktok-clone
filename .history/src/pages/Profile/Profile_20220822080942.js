import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsLockFill, BsPlayFill } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Profile.module.scss';
import ProfileVideo from './ProfileVideo';

import Data from '~/FakeData/Data';
import BoxShare from '~/components/BoxShare';

const cx = classNames.bind(styles);

function Profile() {
    const [active, setActive] = useState(true);
    const handleActive = () => {
        active ? setActive(false) : setActive(true);
    };

    const match = useLocation();
    const query = new URLSearchParams(match.search);

    const idPayload = query.get('id');

    const newData = Data.find((data) => data.id === +idPayload);

    const { name, nickName, id, avatar, video, viewers, content, followers, following, tick, bio, like } = {
        ...newData,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div>
                    <div className={cx('header-info')}>
                        <Image src={avatar} className={cx('avatar')} />
                        <div className={cx('name-info')}>
                            <h4 className={cx('nickname')}>
                                {nickName} {tick && <AiFillCheckCircle className={cx('icon-tick')} />}
                            </h4>
                            <p className={cx('name')}>{name}</p>
                            <Button primary className={cx('btn')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('like-count')}>
                        <p>
                            {following} <span className={cx('like-text')}>Following</span>
                        </p>
                        <p>
                            {followers}M <span className={cx('like-text')}>Followers</span>
                        </p>
                        <p>
                            {like} M<span className={cx('like-text')}>Likes</span>
                        </p>
                    </div>
                    <div className={cx('bio')}>{bio}</div>
                    <Link to="#" className={cx('link')}>
                        bavaboi.koc.asia
                    </Link>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('actions-icon')}>
                        <FaShare />
                        <BoxShare className={cx('actions-box-share')} />
                    </div>
                    <FiMoreHorizontal className={cx('actions-icon')} />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('navbar')}>
                    <div className={cx('navbar-item', active && 'active')} onClick={!active && handleActive}>
                        Videos
                    </div>
                    <div className={cx('navbar-item', !active && 'active')} onClick={active && handleActive}>
                        <BsLockFill className={cx('icon-lock')} /> Liked
                    </div>
                </div>
                {active ? (
                    <div className={cx('video-body')}>
                        <ProfileVideo video={video} viewers={viewers} content={content} nickName={nickName} id={id} />
                    </div>
                ) : (
                    <div className={cx('linked')}>
                        <BsLockFill className={cx('icon-lock-linked')} />
                        <p className={cx('linked-text-big')}>This user's liked videos are private</p>
                        <p className={cx('linked-text-small')}>Videos liked by {nickName} are currently hidden</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
