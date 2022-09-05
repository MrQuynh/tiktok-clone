import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume() {
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(0);
    const handleInput = (e) => {
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
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
