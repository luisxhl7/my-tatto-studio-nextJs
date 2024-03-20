'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageItem } from "../../../interface";
import images from "../../../assets";
import "./banner.scss";

interface BannerProps {
  imagesList?: ImageItem[] | string;
  title?: string;
}

export const Banner: React.FC<BannerProps> = ({ imagesList, title }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    if (imagesList) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < imagesList.length - 1) {
            return prevIndex + 1;
          } else {
            return prevIndex;
          }
        });
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, imagesList]);

  return (
    <div className="banner__section-1">
      <div className="banner__section-image">
        {imagesList && Array.isArray(imagesList) && imagesList.length > 0 ? (
          imagesList.map((item, idx) => (
            <Link
              href={`/tatuador/${item.name}`}
              key={idx}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              className={`banner__content-image ${
                idx <= currentIndex ? "--show" : ""
              } ${
                hoveredImage !== null && idx < hoveredImage ? "--isFilter" : ""
              } ${
                hoveredImage !== null && idx > hoveredImage ? "--isFilter" : ""
              }`}
            >
              <span className="banner__content-image__name">{item?.name}</span>
              <img src={item?.image} alt="" title={`Ver mas de ${item?.name}`} />
            </Link>
          ))
        ) : (
          <img src={typeof imagesList === "string" ? imagesList : ""} alt="" />
        )}
      </div>

      <div className="banner__divisor-section">
        {title && <h1>{title}</h1>}
        <Image src={images.rasgado_con_negro} alt="" />
      </div>
    </div>
  );
};
