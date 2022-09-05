import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { useEffect, useMemo, useRef, useState } from 'react';

import * as videoListService from '~/services/getVideoList';

const cx = classNames.bind(styles);

function Home() {
    const bodyRef = useRef();
    const [active, setActive] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else setActive(false);
    };

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    // get data
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        videoListService
            .getVideoList('for-you', 2)
            .then((data) => setVideoList(data))
            .catch((error) => console.log(error));
    }, []);
    // load data
    // load more data
    // console.log(window.innerHeight);
    console.log(bodyRef.current.height);

    return (
        <div className={cx('body')} ref={bodyRef}>
            {videoList.map((account, index) => (
                <Video key={account.id} data={account} />
            ))}

            <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
        </div>
    );
}

export default Home;
export const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisible;
};
