// ----------------------------------------------------------------------

export const varContainer = (props) => {
  const staggerIn = props?.staggerIn || 0.05;
  const delayIn = props?.staggerIn || 0.05;
  const staggerOut = props?.staggerIn || 0.05;

  return {
    animate: {
      transition: {
        staggerChildren: staggerIn,
        delayChildren: delayIn
      }
    },
    exit: {
      transition: {
        staggerChildren: staggerOut,
        staggerDirection: -1
      }
    }
  };
};
