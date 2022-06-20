import Image from 'next/image';

/*
const ImageComponent = () => (
  <Image 
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
*/

export default function ImageComponent() {
    return (
        <Image
        src="/images/profile.png" // Route of the image file
        height={54} // Desired size with correct aspect ratio
        width={54} // Desired size with correct aspect ratio
        alt="Your Name" />
    );
  }
  