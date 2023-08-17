import React from 'react'
import { Image, Skeleton, Wrapper } from './style';

export const ImageSkeleton = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);
  
  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1;
  }

 return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <Image onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
}

export default ImageSkeleton