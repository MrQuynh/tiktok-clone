import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);
const linkImage1 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg';
const linkImage2 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg';
function Upload() {
    const [runcheck, setRuncheck] = useState(false);
    const [whoView, setWhoView] = useState(false);
    window.onClick = () => {
        setWhoView(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('upload')}>
                    <div className={cx('upload-title')}>Upload video</div>
                    <div className={cx('upload-title-small')}>Post a video to your account</div>
                    <div className={cx('upload-body')}>
                        <div className={cx('left')}>
                            <div className={cx('left-wrapper')}>
                                <Image
                                    className={cx('left-icon')}
                                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                />
                                <div className={cx('left-text-main')}>Select video to upload</div>
                                <div className={cx('left-text-sub')}>Or drag and drop a file</div>
                                <div className={cx('left-text-video-info')}>MP4 or WebM</div>
                                <div className={cx('left-text-video-info')}>720x1280 resolution or higher</div>
                                <div className={cx('left-text-video-info')}>Up to 10 minutes</div>
                                <div className={cx('left-text-video-info')}>Less than 2GB</div>
                                <Button primary className={cx('left-select-btn')}>
                                    Select file
                                </Button>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label', 'label-caption')}>
                                    <p>Caption</p> <span>0 / 150</span>
                                </div>
                                <div className={cx('box', 'box-input')}>
                                    <input type="text" className={cx('input')} />
                                    <div className={cx('input-style')}>
                                        <span>@</span>
                                        <span>#</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Cover</div>

                                <div className={cx('box', 'box-cover')}>
                                    <div className={cx('cover-video')}></div>
                                </div>
                            </div>

                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Who can view this video</div>
                                <div className={cx('box', 'box-public')} onClick={() => setWhoView(!whoView)}>
                                    <p>Public</p>
                                    <AiFillCaretDown className={cx('icon-down', whoView && 'route')} />
                                    {whoView && (
                                        <div className={cx('choose-module')}>
                                            <div className={cx('choose-item')}>
                                                <span className={cx('choose-text')}>Public</span>
                                            </div>
                                            <div className={cx('choose-item')}>
                                                <span className={cx('choose-text')}>Friends</span>
                                            </div>
                                            <div className={cx('choose-item')}>
                                                <span className={cx('choose-text')}>Private</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Allow users to:</div>
                                <div className={cx('allow-check')}>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Comment</p>
                                    </div>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Duet</p>
                                    </div>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Stitch</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('label', 'label-run')}>
                                <p> Run a copyright check</p>{' '}
                                <div
                                    className={cx('switch', runcheck && 'turn-on')}
                                    onClick={() => setRuncheck(!runcheck)}
                                >
                                    <p className={cx('switch-inner')}></p>
                                </div>
                            </div>
                            {runcheck ? (
                                <div className={cx('text-run-on')}>
                                    <BiErrorCircle className={cx('text-run-on-icon')} />
                                    <p>Copyright check will not begin until your video is uploaded.</p>
                                </div>
                            ) : (
                                <div className={cx('text-run-off')}>
                                    We'll check your video for potential copyright infringements on used sounds. If
                                    infringements are found, you can edit the video before posting.{' '}
                                    <span>Learn more</span>
                                </div>
                            )}
                            <div className={cx('btn-body')}>
                                <Button outline large className={cx('btn')}>
                                    Discard
                                </Button>
                                <Button outline large disabled className={cx('btn')}>
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    <div className={cx('footer-lang')}>
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
