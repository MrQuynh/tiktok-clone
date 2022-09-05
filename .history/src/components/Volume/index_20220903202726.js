import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const inputRef = useRef();
    const progressRef = useRef();

    return (
        <div className={cx('slider-count')}>
            <div className={cx('slider')}>
                <input ref={inputRef} type="range" min="0" max="0" value="50" />
                <progress ref={progressRef} min="0" max="100" value="50"></progress>
            </div>
        </div>
    );
}

export default Volume;
