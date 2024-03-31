import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from ".";

describe('Testing of Footer', () => {
  it('should render component of NavBar', () => {
    render(<NavBar/>)

    expect(screen.getByText(/inicio/i)).toBeInTheDocument()
  });
  it('should open the subMenu', () => {
    render(<NavBar/>)
    
    const subMenu = screen.getByText('Trabajos')
    fireEvent.mouseEnter(subMenu);
    fireEvent.click(subMenu)
    
    expect(subMenu).toHaveClass('navBar__sub-Menu --open');

    fireEvent.click(subMenu)
    expect(subMenu).toHaveClass('navBar__sub-Menu');

  });
  it('should scroll up when clicking a link', () => {
    const scrollToMock = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    
    render(<NavBar />);    
    
    const linkElement = screen.getByText('Inicio');
    fireEvent.click(linkElement);

    expect(scrollToMock).toHaveBeenCalledWith(0, 0);

    scrollToMock.mockRestore();
  });
  it('should close the menu when clicking outside the menu', () => {
    render(<NavBar />);
    const bodyElement = document.body;

    fireEvent.click(bodyElement);
    expect(screen.getByText('Trabajos')).not.toHaveClass('--open');
});
});