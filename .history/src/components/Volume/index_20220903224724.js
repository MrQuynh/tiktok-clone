import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume({ setVolume }) {
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(50);
    const handleInput = (e) => {
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
        setVolume(Math.floor(e.target.value / 100));
    };

    return (
        <div className={cx('slider-count')}>
            <div className={cx('slider')}>
                <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
                <progress id="progress" ref={progressRef} min="0" max="100" value="50" />
            </div>
        </div>
    );
}

export default Volume;
