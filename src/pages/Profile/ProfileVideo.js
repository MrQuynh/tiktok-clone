import classNames from 'classnames/bind';
import styles from './ProfileVideo.module.scss';

import { BsPlayFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function ProfileVideo({ video, viewers, content }) {
    const mouseOver = (e) => {
        e.target.play();
        e.target.volume = 0;
    };
    const mouseOut = (e) => {
        e.target.pause();
    };

    return (
        <div className={cx('item-wrapper')}>
            <div className={cx('item-video-body')}>
                <video className={cx('item-video')} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <source src={video} />
                </video>
                <div className={cx('item-viewers')}>
                    <BsPlayFill className={cx('item-play-icon')} />
                    <p>{viewers}M</p>
                </div>
            </div>
            <div className={cx('item-video-content')}>{content}</div>
        </div>
    );
}

export default ProfileVideo;
