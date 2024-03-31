import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from './Banner';

const imagesList = [
  { name: 'luis', image: 'image1.jpg' },
  { name: 'yeison', image: 'image2.jpg' },
  { name: 'juan', image: 'image3.jpg' },
];
const title = 'Banner Title';
const uniqueImage = 'image1';


describe('Testing of Banner', () => {

  it('should renders Banner', () => {
    render(<Banner title={title}/>)    

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render listImages', () => {

    render(<Banner imagesList={imagesList}/>)    
    
    expect(screen.getAllByAltText('imagen tatuador').length).toBe(imagesList.length);
  });

  it('should render a single image', () => {

    render(<Banner imagesList={uniqueImage}/>)    
    
    expect(screen.getByAltText('imagen tatuador')).toBeInTheDocument();
  });

  it('should render a banner section without images when imagesList is empty', () => {
    const imagesListNone:any = [];
    const title = 'Banner Title';

    render(<Banner imagesList={imagesListNone} title={title} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render a banner section with images and a title when imagesList and title are provided', () => {
    render(<Banner imagesList={imagesList} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getAllByAltText('imagen tatuador')).toHaveLength(imagesList.length);
  });

  it('should show the name of each image on hover', () => {

    render(<Banner imagesList={imagesList} title={title} />);

    imagesList.forEach((item) => {
      const linkElement = screen.getByText(item.name);
      
      fireEvent.mouseEnter(linkElement);
      expect(screen.getByText(item.name)).toBeInTheDocument();
      fireEvent.mouseLeave(linkElement);
    });
  });

  it('should filter images on hover', () => {
    render(<Banner imagesList={imagesList} title={title} />);
    const imageLinks = screen.getAllByRole('link');

    expect(imageLinks).toHaveLength(imagesList.length);

    fireEvent.mouseEnter(imageLinks[0]);

    expect(imageLinks[0]).not.toHaveClass('--isFilter');
    expect(imageLinks[1]).toHaveClass('--isFilter');
    expect(imageLinks[2]).toHaveClass('--isFilter');

    fireEvent.mouseEnter(imageLinks[1]);

    expect(imageLinks[0]).toHaveClass('--isFilter');
    expect(imageLinks[1]).not.toHaveClass('--isFilter');
    expect(imageLinks[2]).toHaveClass('--isFilter');

    fireEvent.mouseLeave(imageLinks[1]);

    expect(imageLinks[0]).not.toHaveClass('--isFilter');
    expect(imageLinks[1]).not.toHaveClass('--isFilter');
    expect(imageLinks[2]).not.toHaveClass('--isFilter');
  });

});