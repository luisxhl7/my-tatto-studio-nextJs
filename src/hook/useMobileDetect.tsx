import { useEffect, useState } from 'react';

export const useMobileDetect = () => {
    const [screenSize, setScreenSize] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize(width);
            setIsMobile(width < 761);
        };

        if (typeof window !== 'undefined') {
            setScreenSize(window.innerWidth);
            setIsMobile(window.innerWidth < 761);

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return {
        isMobile,
        screenSize
    };
};
