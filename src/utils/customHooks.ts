import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useCloseOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  actionHandler: () => void
) => {
  useEffect(() => {
    function listener(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        actionHandler();
      }
    }
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
