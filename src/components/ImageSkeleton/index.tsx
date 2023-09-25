import React from "react";
import * as S from "./style";

type ImageSkeletonProps = {
  alt: string;
  src: string;
};

export const ImageSkeleton = ({ alt, src, ...props }: ImageSkeletonProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }: React.SyntheticEvent) {
    setSkeleton(false);
    if (target instanceof HTMLImageElement) {
      target.style.opacity = "1";
    }
  }

  return (
    <S.Wrapper>
      {skeleton && <S.Skeleton></S.Skeleton>}
      <S.Image onLoad={handleLoad} alt={alt} src={src} {...props} />
    </S.Wrapper>
  );
};

export default ImageSkeleton;
