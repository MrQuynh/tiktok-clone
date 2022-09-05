import classNames from 'classnames/bind';
import FollowingVideo from '~/components/FollowingVideo';
import styles from './Following.module.scss';

import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const INIT_PAGE = 1;
const PER_PAGE = 5;

const cx = classNames.bind(styles);

function Following() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    return (
        // <div className={cx('wrapper')}>
        <FollowingVideo accountList={suggestedUser} />
        // </div>
    );
}

export default Following;
