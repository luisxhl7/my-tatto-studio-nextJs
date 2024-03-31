import { fireEvent, render, screen } from "@testing-library/react";
import { NavbarMobile } from "./Navbar-mobile";

describe('Testing of Footer', () => {
    it('should render component of NavBar', () => {
        render(<NavbarMobile/>)

        expect(screen.getByText(/inicio/i)).toBeInTheDocument()
    });
    it('should open the menu', () => {
        render(<NavbarMobile/>)
        
        const menu = screen.getByTitle('Menu')
        fireEvent.mouseEnter(menu);
        fireEvent.click(menu)
        
        expect(menu).toHaveClass('navBar__menu-mobile__hamburger --open');

        fireEvent.click(menu)
        expect(menu).toHaveClass('navBar__menu-mobile__hamburger');

    });
    it('should close the menu', () => {
        render(<NavbarMobile/>)
        
        const menu = screen.getByTitle('Menu')
        fireEvent.mouseEnter(menu);
        fireEvent.click(menu)
        
        expect(menu).toHaveClass('navBar__menu-mobile__hamburger --open');

        fireEvent.click(menu)
        expect(menu).toHaveClass('navBar__menu-mobile__hamburger');

    });
    it('should open the subMenu', () => {
        render(<NavbarMobile/>)
        
        const subMenu = screen.getByTitle('Trabajos');

        fireEvent.click(subMenu)
        
        expect(screen.getByTitle('subMenu')).toHaveClass('navBar__menu-mobile__options-list__subMenu --open');

        fireEvent.click(subMenu)
        
        expect(screen.getByTitle('subMenu')).toHaveClass('navBar__menu-mobile__options-list__subMenu');

    });
    it('should scroll up when clicking a link', () => {
        const scrollToMock = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
        
        render(<NavbarMobile />);    
        
        const linkElement = screen.getByText('Inicio');
        fireEvent.click(linkElement);
    
        expect(scrollToMock).toHaveBeenCalledWith(0, 0);
    
        scrollToMock.mockRestore();
    });
    it('should close the menu when clicking outside the menu', () => {
        render(<NavbarMobile />);
        const bodyElement = document.body;
    
        fireEvent.click(bodyElement);
        expect(screen.getByTitle('Menu')).not.toHaveClass('--open');
    });
});