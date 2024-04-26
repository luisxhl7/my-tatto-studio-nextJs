import { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { ModalImageProps } from "@/interface";
import "./modal-image.scss";

const ModalImage: FC<ModalImageProps> = ({ handleOpenModal, images, actualImage, setActualImage }) => {
  
  const handleImageChange = (newPosition: number) => {
    if (newPosition >= 0 && newPosition < images.length) {
      setActualImage(newPosition);
    }
  };

  return (
    <div className={`modal-image`}>
      <div className="modal-image__content-image">
        <button
          onClick={() => handleOpenModal(undefined)}
          className="modal-image__button-close"
          title="cerrar"
        >
          x
        </button>
        
        <button
          onClick={() => handleImageChange(actualImage - 1)}
          className={`modal-image__button-arrow ${actualImage === 0 ? '--disabled' : ''}`}
          title="anterior"
        >
          <KeyboardArrowLeft />
        </button>

        <img src={images[actualImage]} alt="imagen modal" className={`modal-image__content-image__image`} />
        
        <button
          onClick={() => handleImageChange(actualImage + 1)}
          className={`modal-image__button-arrow ${actualImage + 1 === images.length ? '--disabled' : ''}`}
          title="siguiente"
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ModalImage;
