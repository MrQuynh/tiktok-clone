import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const inputRef = useRef();
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(50);
    const handleInput = (e) => {
        // console.log(progressRef.current.value);
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
    };

    return (
        <div className={cx('slider-count')}>
            <div className={cx('slider')}>
                <input type="range" min="0" max="100" value="50" onInput={handleInput} />
                <progress id="progress" ref={progressRef} min="0" max="100" value={inputValue} />
            </div>
            <div className={cx('sliderValue')}>50</div>
        </div>
    );
}

export default Volume;
