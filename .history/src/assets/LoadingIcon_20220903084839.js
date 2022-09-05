import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '50px',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
