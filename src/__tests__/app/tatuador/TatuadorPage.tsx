import 'matchmedia-polyfill';

import { render, screen } from '@testing-library/react';
import Tatuador from '@/app/tatuador/[id]/page';

const mockParams = { id: 'luis' };

describe('Tatuador Component', () => {

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
  
  it('renders tatuador page with provided data', () => {
    render(<Tatuador params={mockParams} />);
    
    expect(screen.getByText('luis')).toBeInTheDocument();
    
    expect(screen.getByText('Con una habilidad técnica impresionante y una pasión ardiente por el arte oscuro, luis se destaca como un maestro del tatuaje Blackwork. Su enfoque distintivo se centra en crear diseños intrincados y detallados utilizando exclusivamente tinta negra. Cada trazo audaz y cada sombra profunda se combinan para formar composiciones poderosas que evocan un aura de misterio y fascinación. Inspirado por la estética del arte geométrico, el simbolismo esotérico y el folclore oscuro, luis infunde cada tatuaje con una profundidad emocional y una belleza inquietante. Su estudio es un santuario para los amantes del Blackwork, donde la oscuridad se encuentra con la creatividad en un ambiente de camaradería y respeto mutuo. Con luis, cada tatuaje es una declaración audaz de individualidad y fuerza, destinado a dejar una impresión duradera en la piel y en el alma de quienes lo llevan.')).toBeInTheDocument();
    
    expect(screen.getByAltText('imagen de proyectos realizados 1')).toBeInTheDocument();
    expect(screen.getByAltText('imagen de proyectos realizados 2')).toBeInTheDocument();
    
  });

  it('opens modal with correct image when portafolio image is clicked', async() => {
    render(<Tatuador params={mockParams} />);
    
    expect(screen.getByAltText('imagen de proyectos realizados 1')).toBeInTheDocument();
    
    const portafolioImage = screen.getByAltText('imagen de proyectos realizados 1');
    await portafolioImage.click();
    
    expect(screen.getByAltText('imagen modal')).toBeInTheDocument();
  });
});
