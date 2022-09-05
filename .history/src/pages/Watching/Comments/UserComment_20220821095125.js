import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './UserComment.module.scss';

const cx = classNames.bind(styles);
const avatar = '';

const nickName = 'quynhnv2300';
const comment = 'khi co dua ban la dai ca';
const time = 5;
const likeComment = 345;
function UserComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Image src={avatar} className={cx('avatar')} />
                <div className={cx('body')}>
                    <p className={cx('nickname')}>{nickName}</p>
                    <p className={cx('comment')}>{comment}</p>

                    <div className={cx('time')}>
                        <span>{time}d ago</span> <span>Reply</span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default UserComment;
