import classNames from 'classnames/bind';
import { AiOutlineClose, AiTwotoneHeart } from 'react-icons/ai';
import {
    BsCheckSquare,
    BsChevronDown,
    BsFacebook,
    BsFlag,
    BsLink45Deg,
    BsMusicNoteBeamed,
    BsWhatsapp,
} from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ImEmbed } from 'react-icons/im';
import videos from '~/assets/videos';
import Button from '~/components/Button';
import Image from '~/components/Image';
import UserComment from './Comments/UserComment';
import styles from './Watching.module.scss';
import Data from '~/FakeData/Data';

import { Link, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const cx = classNames.bind(styles);
// const avatar =
//     'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c3ed2a3f7ac5ab519e76de1ec3a3589f~c5_100x100.jpeg?x-expires=1661187600&x-signature=2X8um1CKUTt%2B9KWtwK6o4MNxiQo%3D';
// const nickName = 'quynh nv';
// const id = 2;
// const name = ' quynh nguyen van';
// const content = 'hello mn';
// const like = 233;
// const comment = 4;
// const music = 'nahn nen';
function Watching() {
    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const match = useLocation();
    const query = new URLSearchParams(match.search);

    const idPayload = query.get('id');

    const newData = Data.find((data) => data.id === +idPayload);

    const {
        name,
        nickName,
        avatar,
        id,
        music,
        comments,

        content,

        like,
    } = {
        ...newData,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-video')}>
                <video className={cx('video')} controls>
                    <source src={videos.hyn} />
                </video>
                <div className={cx('icon-body', 'close')} onClick={goBack}>
                    <AiOutlineClose className={cx('icon')} />
                </div>
                <div className={cx('icon-body', 'report')}>
                    <BsFlag className={cx('icon')} /> Report
                </div>
                <div className={cx('icon-body', 'down')}>
                    <BsChevronDown className={cx('icon')} />
                </div>
            </div>

            <div className={cx('author')}>
                <div className={cx('info')}>
                    <div className={cx('info-header')}>
                        <Link
                            to={{
                                pathname: '/@' + nickName,
                                search: 'id=' + id,
                            }}
                            className={cx('header-info-body')}
                        >
                            <Image src={avatar} className={cx('avatar')} />
                            <div className={cx('info-wrapper')}>
                                <p className={cx('nickname')}>{nickName}</p>
                                <p className={cx('name')}>
                                    {name} <BsCheckSquare className={cx('icon-check')} /> - 1d ago
                                </p>
                            </div>
                        </Link>
                        <Button outline large className={cx('btn')}>
                            Follow
                        </Button>
                    </div>

                    <div className={cx('content')}>
                        {content}
                        <Link to="#" className={cx('tag-link')}>
                            #xuhuong
                        </Link>
                        <Link to="#" className={cx('tag-link')}>
                            #gaixinh
                        </Link>
                    </div>

                    <Link to="#" className={cx('music')}>
                        <BsMusicNoteBeamed /> {music}
                    </Link>

                    <div className={cx('action')}>
                        <div className={cx('like')}>
                            <div className={cx('like-body')}>
                                <AiTwotoneHeart className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}>{like}</span>
                            <div className={cx('like-body')}>
                                <FaCommentDots className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}> {comments}</span>
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
                        <div>https://www.tiktok.com/@yentiktok12/video/71334295915191</div>
                        <Button outline small className={cx('share-link-btn')}>
                            Copy link
                        </Button>
                    </div>
                </div>
                <div className={cx('comments')}>
                    <UserComment />
                    <UserComment />
                    <UserComment />
                </div>
                <footer className={cx('footer')}>
                    <div className={cx('footer-text')}>Please log in to comment</div>
                </footer>
            </div>
        </div>
    );
}

export default Watching;
