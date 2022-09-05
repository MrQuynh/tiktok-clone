import classNames from 'classnames/bind';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>body</div>
            <footer className={cx('footer', 'grid')}>
                <div></div>
            </footer>
        </div>
    );
}

export default Upload;
