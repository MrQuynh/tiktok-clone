import classNames from 'classnames/bind';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './FollowingVideo.module.scss';

const cx = classNames.bind(styles);

function FollowingItem({ name = 'quynh nguyen van', id, video, nickName = 'quynhnv', tick = true }) {
    const mouseOver = (e) => {
        e.target.play();
        e.target.volume = 0;
    };
    const mouseOut = (e) => {
        e.target.pause();
    };
    return (
        <Link
            to={{
                pathname: '/@' + nickName,
                search: 'id=' + id,
            }}
        >
            <div className={cx('item')}>
                <div className={cx('body-video')}>
                    <video className={cx('following-video')} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <source src={video} />
                    </video>
                </div>

                <div className={cx('following-info')}>
                    <div className={cx('info')}>
                        <p>{name}</p>
                        <p className={cx('nickname')}>
                            {nickname} {tick && <AiFillCheckCircle className={cx('icon')} />}
                        </p>
                    </div>
                    <Button primary className={cx('following-btn')}>
                        Following
                    </Button>
                </div>
            </div>
        </Link>
    );
}

export default FollowingItem;
