import classNames from 'classnames/bind';
import FollowingVideo from '~/components/FollowingVideo';
import styles from './Following.module.scss';

import * as userService from '~/services/userService';
import { useCallback, useEffect, useRef, useState } from 'react';

const INIT_PAGE = 1;
const PER_PAGE = 5;

// const cx = classNames.bind(styles);

function Following() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [more, setMore] = useState(false);

    const observer = useRef();

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
                setMore(data.length > 0);
            })
            .catch((error) => console.log(error));
    }, [page]);
    const lastRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [more],
    );

    return <FollowingVideo accountList={suggestedUser} lastVideoRef={lastRef} />;
}

export default Following;
