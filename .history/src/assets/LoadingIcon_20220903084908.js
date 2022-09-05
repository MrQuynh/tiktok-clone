import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '150px',
                height: '150px',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
