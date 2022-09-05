import classNames from 'classnames/bind';
import styles from './ProfileVideo.module.scss';

import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const videolink =
    'https://v16-webapp.tiktok.com/b7cd5d1cf5537df1f37d804e9651664b/6307971d/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/5bf62dfa9a274fe3bff15b24af8387e9/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=6514&bt=3257&cs=0&ds=3&ft=TkXt216WvjVQ9-ABzPTsdHc64i_a7uwQAJXe8bSya9&mime_type=video_mp4&qs=0&rc=ZjhpPGU7ZzM1ZjtmNGZnaUBpajlpNmY6Zjo0ZTMzZjgzM0BiLS8wYy0uNi4xNjNiMTBfYSNvMi1gcjRnMnNgLS1kL2Nzcw%3D%3D&l=2022082509360101024500505104087528&btag=80000';

function ProfileVideo({ video }) {
    console.log(video.file_url);
    // const [linkVideo, setLinkVideo] = useState('');
    const mouseOver = (e) => {
        e.target.play();
        e.target.volume = 0;
    };
    const mouseOut = (e) => {
        e.target.pause();
    };
    // useEffect(() => setLinkVideo(video.file_url), [video.file_url]);

    return (
        <div className={cx('item-wrapper')}>
            <div className={cx('item-video-body')}>
                <Link
                    to={{
                        pathname: '/@' + 'hello' + '/watching',
                    }}
                >
                    <video className={cx('item-video')} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <source src={videolink} />
                    </video>
                </Link>
                <div className={cx('item-viewers')}>
                    <BsPlayFill className={cx('item-play-icon')} />
                    <p>content</p>
                </div>
            </div>
            {/* <div className={cx('item-video-content')}>{video.description}</div> */}
        </div>
    );
}

export default ProfileVideo;
