import 'matchmedia-polyfill';
import { render, screen } from "@testing-library/react";
import Home from '@/app/page';

describe('Testing of HomePage', () => {
    
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('should renders home page', () => {
      render(<Home/>);
      expect(screen.getByText('¡BIENVENIDOS AL MUNDO DE MY TATTOO STUDIO!')).toBeInTheDocument();
  });

  it('should render "CONOCE A MY STUDIO TATTOO Y SU EQUIPO"', () => {
      render(<Home/>);
      expect(screen.getByText(/conoce a my studio tattoo y su equipo/i)).toBeInTheDocument();
  });

  it('should integrate with Facebook, Instagram and WhatsApp icon', () => {
    render(<Home />);
    const facebookIcon = screen.getByTitle('Facebook');
    const instagramIcon = screen.getByTitle('Instagram');
    const whatsAppIcon = screen.getByTitle('WhatsApp');
    
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(whatsAppIcon).toBeInTheDocument();
  });
  
});