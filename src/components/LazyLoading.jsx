import styled from "styled-components";
import useInfiniteScroll from "../hooks/use-infinitescroll"
import { useEffect, useState } from "react";

export default function LazyLoadingImage({ src, alt, onError, onClick }) {
    const [isLoading, setIsLoading] = useState(true);

    const target = useInfiniteScroll();

    useEffect(() => {
        const image = new Image();
        if (target.current) {
            image.src = src;
            image.onload = () => {
                setIsLoading(false);
            }
            image.onerror = () => {
                if (target.current.src) {
                    setIsLoading(false); // 이미지 주소가 있는 경우, 로딩 상태를 false로 변경
                } else {
                    setIsLoading(true);
                }
            };
        }

    }, [src, target, onError]);

    return (

        <Box className={isLoading ? 'loading' : 'loaded'}>
            <LazyImage
                src={src}
                loading="lazy"
                alt={isLoading ? "" : alt}
                onError={onError || null}
                onClick={onClick}
                ref={target}
            />
        </Box>



    )
}

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 380px;
    background-color: #ebebeb;
    overflow: hidden;
    border-radius: 10px;
    &.loading::after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-image: linear-gradient(90deg,#ebebeb,#f5f5f5,#ebebeb);
        background-size: cover;
        animation: loadingAnimation 2s infinite;
    }
    

    @keyframes loadingAnimation {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`

const LazyImage = styled.img`
    display: block;
    width: 100%;
`