import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '~/components/Image';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';

const cx = classNames.bind(styles);
const linkavatar =
    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7124212580931796997~c5_100x100.jpeg?x-expires=1662519600&x-signature=2DQYj4AxMr8hdUcGFajt3qeGnKo%3D';
function ModalEdit({ setModalEdit, avatar, nickname, name, bio }) {
    const [nicknameEdit, setNicknameEdit] = useState(nickname);
    const [nameEdit, setNameEdit] = useState(name);
    const [bioEdit, setBioEdit] = useState(bio);

    const handleEditAvatar = () => {
        document.getElementById('input-edit').click();
    };
    const handleCloseModel = () => {
        setModalEdit(false);
    };
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <div>Edit profile</div>
                        <div className={cx('icon-close')} onClick={handleCloseModel}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Profile photo</div>
                            <div className={cx('avatar-content')} onClick={handleEditAvatar}>
                                <input type="file" id="input-edit" className={cx('input-edit')} />
                                <Image src={avatar} className={cx('avatar')} />
                                <div className={cx('icon-edit')}>
                                    <FiEdit />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Username</div>
                            <div className={cx('edit-area')}>
                                <input type="text" className={cx('input-text')} value={nickname} />
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
                                <input type="text" className={cx('input-text')} value={name} />
                            </div>
                        </div>
                        <div className={cx('content-item', 'last-item')}>
                            <div className={cx('content-label')}>Bio</div>
                            <div>
                                <div className={cx('edit-area', 'input-text', 'bio')}>
                                    <input type="text" className={cx('input-bio')} value={bio} />
                                </div>
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
