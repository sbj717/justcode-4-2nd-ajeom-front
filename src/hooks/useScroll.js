import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return scrollValue;
};

export { useScroll };
