import classNames from 'classnames/bind';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);
const linkImage1 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg';
const linkImage2 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg';
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>body</div>
            <footer className={cx('footer', 'grid')}>
                <div className={cx('footer-start')}>
                    <div className={cx('image')}>
                        <Image src={linkImage1} />
                        <Image src={linkImage2} />
                    </div>
                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Company</h4>
                        <Link className={cx('footer-item')} to="#">
                            About
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            TikTok Browse
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Newsroom
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Contact
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Career
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Programs</h4>
                        <Link className={cx('footer-item')} to="#">
                            TikTok for Good
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Advertise
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Developes
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            TiTok Rewards
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Support</h4>
                        <Link className={cx('footer-item')} to="#">
                            Help Center
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Safety Center
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Creator Portal
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Community Guidelines
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Transparency
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Accessibility
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Legal</h4>
                        <Link className={cx('footer-item')} to="#">
                            Terms of Use
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className={cx('footer-end')}>
                    <div className={cx('footer-lang ')}>
                        <p>English</p>
                        <AiFillCaretDown />
                    </div>
                    <span className={cx('footer-copy-right')}>© 2022 TikTok</span>
                </div>
            </footer>
        </div>
    );
}

export default Upload;
