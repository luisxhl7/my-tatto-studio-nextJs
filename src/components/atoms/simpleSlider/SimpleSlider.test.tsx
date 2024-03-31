import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import { render, screen } from '@testing-library/react';
import { SimpleSlider } from '.';

describe('SimpleSlider', () => {
  it('debería renderizar los hijos correctamente', () => {
    const children = <div>Child 1</div>;
      render(<SimpleSlider> {children}</SimpleSlider>);
      expect(screen.getByText('Child 1')).toBeInTheDocument();
  });

});
