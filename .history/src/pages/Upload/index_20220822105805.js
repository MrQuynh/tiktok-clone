import classNames from 'classnames/bind';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div>body</div>
        </div>
    );
}

export default Upload;
