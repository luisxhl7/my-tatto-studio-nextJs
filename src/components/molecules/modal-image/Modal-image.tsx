import { FC, useState, useEffect } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./modal-image.scss";

interface ModalImageProps {
  handleOpenModal: (idx?: number) => void;
  images: string[];
  actualImage: number;
  setActualImage: (index: number) => void;
}

const ModalImage: FC<ModalImageProps> = ({ handleOpenModal, images, actualImage, setActualImage }) => {


  const handleImageChange = (newPosition: number) => {
    if (newPosition >= 0 && newPosition < images.length) {
      setActualImage(newPosition);
    }
  };

  return (
    <div className="modal-image">
      <div className="modal-image__content-image">
        <button
          onClick={() => handleOpenModal(undefined)}
          className="modal-image__button-close"
        >
          x
        </button>
        
        <button
          onClick={() => handleImageChange(actualImage - 1)}
          className="modal-image__button-arrow"
        >
          <KeyboardArrowLeft />
        </button>

        <img src={images[actualImage]} alt="" className={`modal-image__content-image__image`} />
        
        <button
          onClick={() => handleImageChange(actualImage + 1)}
          className="modal-image__button-arrow"
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ModalImage;
