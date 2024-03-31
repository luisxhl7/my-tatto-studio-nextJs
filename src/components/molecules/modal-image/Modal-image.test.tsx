import { fireEvent, render, screen } from "@testing-library/react";
import ModalImage from "./Modal-image";

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const actualImage = 1;

describe('Testing of Footer', () => {
  it('should render the modal image component with the correct image and arrow buttons', () => {
    const handleOpenModal = jest.fn();
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    expect(screen.getByAltText("")).toHaveAttribute("src", "image2.jpg");
    expect(screen.getByTitle("cerrar")).toBeInTheDocument();
    expect(screen.getByTitle("anterior")).toBeInTheDocument();
    expect(screen.getByTitle("siguiente")).toBeInTheDocument();
  });

  it('should call handleOpenModal with undefined when the close button is clicked', () => {
    const handleOpenModal = jest.fn();
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    fireEvent.click(screen.getByTitle("cerrar"));

    expect(handleOpenModal).toHaveBeenCalledWith(undefined);
  });

  it('should decrement actualImage state and call setActualImage when left arrow button is clicked', () => {

    const handleOpenModal = jest.fn();
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    fireEvent.click(screen.getByTitle("anterior"));

    expect(setActualImage).toHaveBeenCalledWith(actualImage - 1);
  });

  it('should increment actualImage state and call setActualImage when right arrow button is clicked', () => {
    const handleOpenModal = jest.fn();
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    fireEvent.click(screen.getByTitle("siguiente"));

    expect(setActualImage).toHaveBeenCalledWith(actualImage + 1);
  });

  it('should not allow the current state of the image to be greater than the array', () => {
    const handleOpenModal = jest.fn();
    const actualImage = 2;
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    expect(screen.getByTitle("siguiente")).toHaveClass('--disabled');
  });
  
  it('should not allow the current state of the image to be less than the array', () => {
    const handleOpenModal = jest.fn();
    const actualImage = 0;
    const setActualImage = jest.fn();

    render(
      <ModalImage
        handleOpenModal={handleOpenModal}
        images={images}
        actualImage={actualImage}
        setActualImage={setActualImage}
      />
    );

    expect(screen.getByTitle("anterior")).toHaveClass('--disabled');
  });

});