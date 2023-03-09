import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

export const useViewController = () => {
  const [buttonsVisible, setButtonsVisible] = useState<Boolean>(false);
  const toggleVisibility = () => setButtonsVisible((prevState) => !prevState);
  const ref = useOnclickOutside(() => {
    setButtonsVisible(false);
  });

  return {
    buttonsVisible,
    toggleVisibility,
    ref
  };
};
