import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';

const cx = classNames.bind(styles);

function ModalEdit() {
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}></div>
            </div>
        </Portal>
    );
}

export default ModalEdit;
