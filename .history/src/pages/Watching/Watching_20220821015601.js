import classNames from 'classnames/bind';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BsCheckSquare, BsFacebook, BsLink45Deg, BsMusicNoteBeamed, BsWhatsapp } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ImEmbed } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Watching.module.scss';

const cx = classNames.bind(styles);

function Watching() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-video')}></div>
            <div className={cx('author')}>
                <div className={cx('info')}>
                    <div className={cx('info-header')}>
                        <div className={cx('header-info-body')}>
                            <Image src="" className={cx('avatar')} />
                            <div>
                                <p className={cx('nickname')}>yentiktok12</p>
                                <p className={cx('name')}>
                                    Yên TikTok 12 <BsCheckSquare className={cx('icon-check')} /> - 1d ago
                                </p>
                            </div>
                        </div>
                        <Button outline>Follow</Button>
                    </div>

                    <div>
                        Vì món quà chính là...Cái kết Thơm. <span>#xuhuong</span>
                        <span>gaixinh</span>
                    </div>

                    <Link to="#">
                        <BsMusicNoteBeamed /> Bắt Cóc Con Tim - Lou Hoàng{' '}
                    </Link>

                    <div>
                        <div>
                            <AiTwotoneHeart /> 590 <FaCommentDots />
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

                    <div>
                        <div>https://www.tiktok.com/@yentiktok12/video/71334295915191</div>
                        <Button outline>Copy link</Button>
                    </div>
                </div>
                <div className={cx('comments')}></div>
            </div>
        </div>
    );
}

export default Watching;
