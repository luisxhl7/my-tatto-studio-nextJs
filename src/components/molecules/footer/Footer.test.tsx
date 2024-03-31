import { render, screen } from "@testing-library/react";
import { Footer } from './Footer';

describe('Testing of Footer', () => {
  
  it('should renders Footer', () => {
    render(<Footer/>);
    
    expect(screen.getByText('CONTÁCTENOS')).toBeInTheDocument();
  });
  it('should render a footer component with four CardOfInfoDropdown components', () => {
  
    render(<Footer />);
  
    expect(screen.getAllByTestId('cardOfInfoDropdown')).toHaveLength(4);
  });
  
});