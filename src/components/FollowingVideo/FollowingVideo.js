import classNames from 'classnames/bind';
import FollowingItem from './FollowingItem';
import styles from './FollowingVideo.module.scss';

import Data from '~/FakeData/Data';

const cx = classNames.bind(styles);

function FollowingVideo() {
    return (
        <div>
            {Data.map((data) => (
                <FollowingItem key={data.id} {...data} />
            ))}
        </div>
    );
}

export default FollowingVideo;
