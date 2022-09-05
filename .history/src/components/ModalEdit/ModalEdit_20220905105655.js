import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '~/components/Image';
import { FiEdit } from 'react-icons/fi';

const cx = classNames.bind(styles);
const linkavatar =
    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7124212580931796997~c5_100x100.jpeg?x-expires=1662519600&x-signature=2DQYj4AxMr8hdUcGFajt3qeGnKo%3D';
function ModalEdit() {
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <div>Edit profile</div>
                        <AiOutlineClose className={cx('icon-close')} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Profile photo</div>
                            <div className={cx('avatar-content')}>
                                <Image src={linkavatar} className={cx('avatar')} />
                                <div className={cx('icon-edit')}>
                                    <FiEdit />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Username</div>
                            <div className={cx('edit-area')}>
                                <input className={cx('input-text')} />
                                <p className={cx('link-username')}>www.tiktok.com/@jujo_bin</p>
                                <p className={cx('site-username')}>
                                    Usernames can only contain letters, numbers, underscores, and periods. Changing your
                                    username will also change your profile link.
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Name</div>
                            <div className={cx('edit-area')}>
                                <input className={cx('input-text')} />
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Bio</div>
                            <div className={cx('edit-area')}>
                                <input className={cx('input-text', 'bio')} />
                                <span className={cx('text-count')}>0/80</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <button className={cx('btn')}>Cancel</button>
                        <button className={cx('btn', 'active')}>Save</button>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default ModalEdit;
