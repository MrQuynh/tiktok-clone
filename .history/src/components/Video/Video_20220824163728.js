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

import { actions } from '~/store';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

const VideoInfo = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Link
                    to={{
                        pathname: '/@' + data.nickname,
                        search: 'id=' + data.id,
                    }}
                    className={cx('avatar-div')}
                >
                    <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                </Link>

                <div className={cx('info-body')}>
                    <div className={cx('name-out')}>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                                search: 'id=' + data.id,
                            }}
                            className={cx('name')}
                        >
                            {data.nickname}
                        </Link>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                                search: 'id=' + data.id,
                            }}
                            className={cx('nickname')}
                        >
                            {`${data.first_name} ${data.last_name}`}
                        </Link>
                        {/* follow user */}
                        <div className={cx('follow-account')}>
                            <FollowAccount
                                name={data.name}
                                avatar={data.avatar}
                                nickName={data.nickname}
                                followers={data.followers_count}
                                like={data.like_count}
                                id={data.id}
                            />
                        </div>
                        {/* follow user */}
                    </div>
                    <div className={cx('content-text')}>{data.popular_video.description}</div>
                    {data.music && (
                        <Link to="#" className={cx('name-music')}>
                            <FaMusic className={cx('music-icon')} />
                            {data.music}
                        </Link>
                    )}

                    {/* video */}
                    <VideoContent
                        like={data.like_count}
                        nickName={data.nickname}
                        id={data.id}
                        video={data.popular_video.file_url}
                    />
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
const VideoContent = ({ video, like, nickName, id, comments, share }) => {
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
                    <video className={cx('video')} ref={videoRef}>
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
                    <p className={cx('vote')}>{like || 0}</p>
                </div>
                <div className={cx('action-item')}>
                    <BsFillChatDotsFill className={cx('action-icon')} /> <p className={cx('vote')}>{comments || 0}</p>
                </div>
                <div className={cx('action-item')}>
                    <FaShare className={cx('action-icon')} />
                    <p className={cx('vote')}>{share || 0}</p>
                    <div className={cx('share-home')}>
                        <BoxShare />
                    </div>
                </div>
            </div>
        </div>
    );
};

function Video({ data }) {
    return (
        <div className={cx('video')}>
            <VideoInfo data={data} />
        </div>
    );
}

export default Video;
