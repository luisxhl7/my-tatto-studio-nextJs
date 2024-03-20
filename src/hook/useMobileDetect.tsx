import { useEffect, useState } from 'react';

export const useMobileDetect = () => {
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 761);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize(width);
            setIsMobile(width < 761);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        isMobile,
        screenSize
    };
};
