import classNames from 'classnames/bind';
import { AiOutlineClose, AiTwotoneHeart } from 'react-icons/ai';
import {
    BsCheckSquare,
    BsChevronDown,
    BsFacebook,
    BsFillPlayFill,
    BsFlag,
    BsLink45Deg,
    BsMusicNoteBeamed,
    BsWhatsapp,
} from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ImEmbed } from 'react-icons/im';
import Button from '~/components/Button';
import Image from '~/components/Image';
import UserComment from './Comments/UserComment';
import styles from './Watching.module.scss';

import { Link, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useEffect, useRef, useState } from 'react';
import * as anUserService from '~/services/userService';

const cx = classNames.bind(styles);

function Watching() {
    const match = useLocation();
    const query = new URLSearchParams(match.search);
    const nick = '/' + match.pathname.split('/')[1];
    const idVideo = query.get('id');

    const [data, setData] = useState([]);

    useEffect(() => {
        anUserService
            .getAnUser(nick)

            // .then((data) => setData(data.videos.find((video) => video.id === +idVideo)))
            .then((data) => {
                if (data === undefined) {
                    return;
                }
                setData(data);
                console.log(data.videos.find((video) => video.id === +idVideo).file_url);
            })

            .catch((error) => console.log(error));
    }, [nick]);
    // const videoLink = data.videos.find((video) => video.id === +idVideo);

    // const test = () => {
    //     if (data.videos === undefined) {
    //         return;
    //     }
    // };

    const [play, setPlay] = useState(false);
    const videoRef = useRef();

    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const handlePlay = () => {
        setPlay(!play);
        play ? videoRef.current.play() : videoRef.current.pause();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-video')}>
                <div>
                    <video className={cx('video')} ref={videoRef} controls>
                        <source src={''} />
                    </video>
                </div>

                <div className={cx('icon-body', 'close')} onClick={goBack}>
                    <AiOutlineClose className={cx('icon')} />
                </div>
                <div className={cx('icon-body', 'report')}>
                    <BsFlag className={cx('icon')} /> Report
                </div>
                <div className={cx('icon-body', 'down')}>
                    <BsChevronDown className={cx('icon')} />
                </div>
                {/* on mobile */}
                <div className={cx('cmt-on-mobile')} onClick={handlePlay}>
                    <div className={cx('icon-body', 'close')} onClick={goBack}>
                        <AiOutlineClose className={cx('icon')} />
                    </div>
                    <div className={cx('icon-body', 'report')}>
                        <BsFlag className={cx('icon')} /> Report
                    </div>
                    <div className={cx('m-info')}>
                        <p className={cx('m-name')}> nickname</p>
                        <div className={cx('m-content')}>
                            {data.description}
                            <div className={cx('m-tag')}>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #xuhuong
                                </Link>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #gaixinh
                                </Link>
                            </div>
                            <div className={cx('m-tag')}>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #xuhuong
                                </Link>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #gaixinh
                                </Link>
                            </div>
                        </div>
                        <Link to="#" className={cx('m-music')}>
                            <BsMusicNoteBeamed /> music
                        </Link>
                    </div>
                    <div className={cx('m-action')}>
                        <Image src={data.avatar} className={cx('m-avatar')} />
                        <div className={cx('m-like')}>
                            <div className={cx('m-like-body')}>
                                <AiTwotoneHeart className={cx('m-like-icon')} />
                            </div>
                            <span className={cx('m-like-count')}>like</span>
                            <div className={cx('m-like-body')}>
                                <FaCommentDots className={cx('m-like-icon')} />
                            </div>
                            <span className={cx('m-like-count')}> {data.description}</span>
                        </div>

                        <Image src={data.avatar} className={cx('m-avatar')} />
                    </div>
                    {play && <BsFillPlayFill className={cx('m-play')} />}
                </div>
            </div>

            <div className={cx('author')}>
                <div className={cx('info')}>
                    <div className={cx('info-header')}>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                            }}
                            className={cx('header-info-body')}
                        >
                            <Image src={data.avatar} className={cx('avatar')} />
                            <div className={cx('info-wrapper')}>
                                <p className={cx('nickname')}>{data.nickname}</p>
                                <p className={cx('name')}>
                                    {`${data.first_name} ${data.last_name}`}{' '}
                                    <BsCheckSquare className={cx('icon-check')} /> - 1d ago
                                </p>
                            </div>
                        </Link>
                        <Button outline large className={cx('btn')}>
                            Follow
                        </Button>
                    </div>

                    <div className={cx('content')}>
                        {/* {aVideo.description} */}
                        <Link to="#" className={cx('tag-link')}>
                            #xuhuong
                        </Link>
                        <Link to="#" className={cx('tag-link')}>
                            #gaixinh
                        </Link>
                    </div>

                    <Link to="#" className={cx('music')}>
                        <BsMusicNoteBeamed />
                        music
                    </Link>

                    <div className={cx('action')}>
                        <div className={cx('like')}>
                            <div className={cx('like-body')}>
                                <AiTwotoneHeart className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}>{data.likes_count}</span>
                            <div className={cx('like-body')}>
                                <FaCommentDots className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}> {data.comments_count}</span>
                        </div>
                        <div className={cx('share')}>
                            <Link to="#" className={cx('share-item')}>
                                <ImEmbed className={cx('share-icon')} />
                                <span>Embed</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <FiSend className={cx('share-icon')} />
                                <span>Send to friends</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <BsFacebook className={cx('share-icon')} />
                                <span>Share to Facebook</span>
                            </Link>
                            <Link to="/share-whatsapp" className={cx('share-item')}>
                                <BsWhatsapp className={cx('share-icon')} />
                                <span>Share to WhatsApp</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <BsLink45Deg className={cx('share-icon')} />
                                <span>Copy link</span>
                            </Link>
                        </div>
                    </div>

                    <div className={cx('share-link')}>
                        <div>https://www.tiktok.com/@{data.nickname}/video/71334295915191</div>
                        <Button outline small className={cx('share-link-btn')}>
                            Copy link
                        </Button>
                    </div>
                </div>
                <div className={cx('comments')}>
                    {/* <UserComment />
                    <UserComment />
                    <UserComment /> */}
                </div>
                <footer className={cx('footer')}>
                    <div className={cx('footer-text')}>Please log in to comment</div>
                </footer>
            </div>
        </div>
    );
}

export default Watching;
