import React from 'react'
import * as S from './style';

export const ImageSkeleton = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);
  
  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1;
  }

 return (
    <S.Wrapper>
      {skeleton && <S.Skeleton></S.Skeleton>}
      <S.Image onLoad={handleLoad} alt={alt} {...props} />
    </S.Wrapper>
  );
}

export default ImageSkeleton