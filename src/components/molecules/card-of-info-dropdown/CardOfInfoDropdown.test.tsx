import { fireEvent, render, screen } from "@testing-library/react";
import { CardOfInfoDropdown } from './CardOfInfoDropdown';


describe('Testing of CardOfInfoDropdown', () => {

  it('should renders CardOfInfoDropdown', () => {
    render(<CardOfInfoDropdown title='contáctenos'>WhatsApp +57 321 321 3232</CardOfInfoDropdown>);
    
    expect(screen.getByText(/contáctenos/i)).toBeInTheDocument();
    expect(screen.getByText('WhatsApp +57 321 321 3232')).toBeInTheDocument();
  });

  it('should toggle isOpen state and add/remove class accordingly', () => {
    render(<CardOfInfoDropdown title="Test Title">Test Content</CardOfInfoDropdown>);

    const dropdown = screen.getByTestId('cardOfInfoDropdown');

    expect(dropdown).toHaveClass('cardOfInfoDropdown');

    fireEvent.click(dropdown);

    expect(dropdown).toHaveClass('cardOfInfoDropdown --isOpen');

    fireEvent.click(dropdown);

    expect(dropdown).toHaveClass('cardOfInfoDropdown');
  });
  
});