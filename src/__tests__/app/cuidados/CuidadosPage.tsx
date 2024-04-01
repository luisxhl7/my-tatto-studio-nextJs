import { render, screen } from "@testing-library/react";
import Cuidados from '@/app/cuidados/page';

describe('Testing of CuidadosPage', () => {
  it('should renders Cuidados page', () => {
      render(<Cuidados/>);
      expect(screen.getByText('Prevención de infecciones:')).toBeInTheDocument();
  });
});