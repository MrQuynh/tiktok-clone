import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { BsVolumeMuteFill } from 'react-icons/bs';
import styles from './volume.module.scss';

const cx = classNames.bind(styles);

function Volume({ videoRef }) {
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(50);
    const handleInput = (e) => {
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
        console.log(e.target.value / 100);
        setVolume(e.target.value / 100);
    };
    const [volume, setVolume] = useState(0.5);
    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume]);

    return (
        <div>
            <div className={cx('volume1')}>
                <div className={cx('slider-count')}>
                    <div className={cx('slider')}>
                        <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
                        <progress id="progress" ref={progressRef} min="0" max="100" value="50" />
                    </div>
                </div>
            </div>

            {volume === 0 ? (
                <BsVolumeMuteFill className={cx('sound-icon')} />
            ) : (
                <AiFillSound className={cx('sound-icon')} />
            )}
        </div>
        // <div className={cx('slider-count')}>
        //     <div className={cx('slider')}>
        //         <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
        //         <progress id="progress" ref={progressRef} min="0" max="100" value="50" />
        //     </div>
        // </div>
    );
}

export default Volume;
