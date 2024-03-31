import { act, render, renderHook } from '@testing-library/react';
import { useMobileDetect } from './useMobileDetect';

describe('useMobileDetect', () => {    
    it('should return an object with "isMobile" and "screenSize" properties', () => {
        const { result } = renderHook(() => useMobileDetect());

        expect(result.current).toHaveProperty('isMobile');
        expect(result.current).toHaveProperty('screenSize');
    });
    it('should set "isMobile" to false when window.innerWidth is greater than or equal to 761', () => {
        const { result } = renderHook(() => useMobileDetect());
  
        expect(result.current.isMobile).toBe(false);
    });
    it('should set "isMobile" to true when window.innerWidth is less than 761', () => {
        const { result } = renderHook(() => useMobileDetect());
  
        act(() => {
          global.innerWidth = 760;
          global.dispatchEvent(new Event('resize'));
        });
  
        expect(result.current.isMobile).toBe(true);
      });
});
