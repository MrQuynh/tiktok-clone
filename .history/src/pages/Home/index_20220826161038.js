import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import * as videoListService from '~/services/getVideoList';

const cx = classNames.bind(styles);

function Home() {
    const bodyRef = useRef();
    const [active, setActive] = useState(false);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(false);
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
            .getVideoList({ type: 'for-you', page })
            .then((data) => {
                setVideoList(data);
                setMore(data.length > 0);
            })
            .catch((error) => console.log(error));
    }, [page]);
    // load more video
    const lastVideoRef = useCallback(
        (node) => {
            // if (bodyRef.current) bodyRef.current.disconnect();
            bodyRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log('vidible');
                    setPage(page + 1);
                }
            });
            if (node) bodyRef.current.observe(node);
        },
        [more],
    );

    return (
        <div className={cx('body')} id="content" ref={bodyRef}>
            {videoList.map((account, index) => {
                if (videoList.length === index + 1) {
                    return (
                        <div ref={lastVideoRef} key={account.id}>
                            <Video data={account} />
                        </div>
                    );
                } else {
                    return <Video key={account.id} data={account} />;
                }
            })}

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
