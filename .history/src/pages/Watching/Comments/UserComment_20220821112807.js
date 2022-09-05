import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Image from '~/components/Image';
import styles from './UserComment.module.scss';
import UserCommentMore from './UserCommentMore';

const cx = classNames.bind(styles);
const avatar =
    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1966fcda97fb1bc61ca3625ac98a5714~c5_100x100.jpeg?x-expires=1661223600&x-signature=BJWqsMUWTVfUKM2Ab36Tzt3bN14%3D';

const nickName = 'quynhnv2300';
const comment = 'khi co dua ban la dai ca';
const time = 5;
const likeComment = 345;
function UserComment() {
    const [showCmt, setShowCmt] = useState('hidden');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Image src={avatar} className={cx('avatar')} />
                <div className={cx('body')}>
                    <p className={cx('nickname')}>{nickName}</p>
                    <p className={cx('comment')}>{comment}</p>

                    <div className={cx('time')}>
                        <span>{time}d ago</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <FiMoreHorizontal className={cx('actions-icon')} />
                    <div className={cx('actions-icon')}>
                        <AiOutlineHeart className={cx('icons')} />
                        <span>{likeComment}</span>
                    </div>
                </div>
            </div>
            <div className={cx('more-comments')}>
                <div className={cx('more', showCmt)}>
                    <UserCommentMore />
                    <UserCommentMore />
                    <UserCommentMore />
                </div>
                <div className={cx('more-comments-footer')}>
                    <div onClick={() => setShowCmt('show')}>
                        View more replies (5) <AiOutlineDown className={cx('more-comments-icon')} />
                    </div>
                    <div onClick={() => setShowCmt('hidden')}>
                        Hide <AiOutlineUp className={cx('more-comments-icon')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserComment;
