import clsx from 'clsx';
import React from 'react';

const Caret = ({ className }: {className: string}) => {
  return (
    <span className={clsx(
      "caret",
      className
    )}>
      {/* You can adjust the size of the ball by modifying the font-size */}
      {/* For a bigger ball, increase the font-size */}
      {/* For a smaller ball, decrease the font-size */}
    </span>
  );
};

export default Caret;
