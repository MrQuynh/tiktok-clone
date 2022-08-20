import classNames from 'classnames/bind';
import { BsPlayCircle } from 'react-icons/bs';
import Image from '~/components/Image';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);
const linkavatar =
    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/23f6bfccab9ad46c9ef95e7b42d6ea47~c5_100x100.webp?x-expires=1660982400&x-signature=vOjb64yaR%2BX9FHsDXl6RiSJRGL4%3D';
function LiveVideoItem({ avatar, name, background, content, video, viewers }) {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('video-image')}
                style={{
                    backgroundImage: 'url(' + background + ')',
                }}
            >
                <div className={cx('footer')}>
                    <div className={cx('audience')}>
                        <p className={cx('audience-count')}>{viewers}</p>
                        <p className={cx('audience-text')}>viewers</p>
                    </div>
                    <div className={cx('live-label')}>LIVE</div>
                </div>
                <div className={cx('play-hover')}>
                    <BsPlayCircle className={cx('icon-play')} />
                </div>
            </div>

            <div className={cx('author-video')}>
                <Image src={avatar} className={cx('image')} />
                <div className={cx('body')}>
                    <p className={cx('content')}>{content}</p>
                    <p className={cx('name')}>{name}</p>
                </div>
            </div>
        </div>
    );
}

export default LiveVideoItem;
