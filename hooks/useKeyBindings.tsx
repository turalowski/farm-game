import { Direction, Keys } from '@/utils';
import { useState } from 'react';

export function useKeyBindings() {
  const [keys, setKeys] = useState<Keys>({
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
  });

  function bindEventListeners() {
    window.addEventListener('keydown', event => {
      if (Object.keys(Direction).includes(event.key)) {
        setKeys(prevKeys => ({
          ...prevKeys,
          [event.key]: {
            pressed: true,
          },
        }));
      }
    });

    window.addEventListener('keyup', event => {
      if (Object.keys(Direction).includes(event.key)) {
        setKeys(prevKeys => ({
          ...prevKeys,
          [event.key]: {
            pressed: false,
          },
        }));
      }
    });
  }

  return {
    bindEventListeners,
    keys,
  };
}
