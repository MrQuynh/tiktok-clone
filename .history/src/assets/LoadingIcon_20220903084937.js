import Image from '~/components/Image';
import images from './images';

function LoadingIcon() {
    return (
        <Image
            style={{
                width: '10%',
                height: '10%',
            }}
            src={images.loading}
        />
    );
}

export default LoadingIcon;
