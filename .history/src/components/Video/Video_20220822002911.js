import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FaMusic, FaHeart, FaShare } from 'react-icons/fa';
import { BsFillChatDotsFill, BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiFillSound } from 'react-icons/ai';

import Button from '../Button';

import Image from '../Image';
import styles from './Video.module.scss';
import { useRef, useState, useEffect } from 'react';
import { useElementOnScreen } from '~/pages/Home';
import FollowAccount from '../FollowAccount/FollowAccount';
import BoxShare from '../BoxShare';

const cx = classNames.bind(styles);

const VideoInfo = ({ name, nickName, id, avatar, content, music, followers, like, check, ...args }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Link
                    to={{
                        pathname: '/@' + nickName,
                        search: 'id=' + id,
                    }}
                    className={cx('avatar-div')}
                >
                    <Image className={cx('avatar')} src={avatar} alt="avatar" />
                </Link>

                <div className={cx('info-body')}>
                    <div className={cx('name-out')}>
                        <Link
                            to={{
                                pathname: '/@' + nickName,
                                search: 'id=' + id,
                            }}
                            className={cx('name')}
                        >
                            {nickName}
                        </Link>
                        <Link
                            to={{
                                pathname: '/@' + nickName,
                                search: 'id=' + id,
                            }}
                            className={cx('nickname')}
                        >
                            {name}
                        </Link>
                        {/* follow user */}
                        <div className={cx('follow-account')}>
                            <FollowAccount
                                name={name}
                                avatar={avatar}
                                nickName={nickName}
                                followers={followers}
                                like={like}
                            />
                        </div>
                        {/* follow user */}
                    </div>
                    <div className={cx('content-text')}>{content}</div>
                    <Link to="#" className={cx('name-music')}>
                        <FaMusic className={cx('music-icon')} />
                        {music}
                    </Link>

                    {/* video */}
                    <VideoContent like={like} nickName={nickName} id={id} {...args} />
                </div>
            </div>
            <div>
                <Button outline small className={cx('btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
};
// ,
const VideoContent = ({ video, like, nickName, id, comments, share, ...args }) => {
    const [playing, setPlaying] = useState(false);
    const [heart, setHeart] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
        if (playing) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [playing]);
    const handleClick = () => {
        setPlaying(!playing);
    };

    // auto play
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const isVisible = useElementOnScreen(options, videoRef);
    useEffect(() => {
        if (isVisible) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible]);

    return (
        <div className={cx('body')}>
            <div className={cx('body-video')}>
                <Link
                    to={{
                        pathname: '/@' + nickName + '/watching',
                        search: 'id=' + id,
                    }}
                >
                    <video className={cx('video')} ref={videoRef} loop>
                        <source src={video} />
                    </video>
                </Link>

                <BsPlayFill className={cx('pause', playing ? '' : 'play')} onClick={handleClick} />
                <BsPauseFill className={cx('pause', playing ? 'play' : '')} onClick={handleClick} />

                <AiFillSound className={cx('sound-icon')} />
            </div>
            <div className={cx('actions')}>
                <div className={cx('action-item')}>
                    {/* , 'active' */}
                    <FaHeart className={cx('action-icon', heart && 'active')} onClick={() => setHeart(!heart)} />{' '}
                    <p className={cx('vote')}>{like}K</p>
                </div>
                <div className={cx('action-item')}>
                    <BsFillChatDotsFill className={cx('action-icon')} /> <p className={cx('vote')}>{comments}K</p>
                </div>
                <div className={cx('action-item')}>
                    <FaShare className={cx('action-icon')} />
                    <p className={cx('vote')}>{share}K</p>
                    <div className={cx('share-home')}>
                        <BoxShare />
                    </div>
                </div>
            </div>
        </div>
    );
};

function Video({ ...args }) {
    return (
        <div className={cx('video')}>
            <VideoInfo {...args} />
        </div>
    );
}

export default Video;
