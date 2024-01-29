import styled from "styled-components";
import useInfiniteScroll from "../hooks/use-infinitescroll"
import { useEffect, useState } from "react";

export default function LazyLoadingImage({ src, alt, onError, onClick, placeholderImg }) {
    const [isLoading, setIsLoading] = useState(true);
    const [imgSrc, setImgSrc] = useState(placeholderImg);

    const target = useInfiniteScroll(handleIntersection);

    useEffect(() => {
        const image = new Image();
        if (!isLoading) return
        image.src = src;
        image.onload = () => {
            setIsLoading(false);
            setImgSrc(src)
        };
        image.onerror = () => {
            setIsLoading(true);
            setImgSrc(src)
        };

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [src, isLoading]);

    function handleIntersection(entries) {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setIsLoading(false);
            setImgSrc(src)
        }
    }

    return (
        <LazyImage
            className={isLoading ? 'loading' : 'loaded'}
            src={imgSrc}
            loading="lazy"
            alt={isLoading ? "" : alt}
            onError={onError || null}
            onClick={onClick}
            ref={target}
        />

    )
}



const LazyImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.5s;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
  }
`