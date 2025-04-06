export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInFromTop = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export const textStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export const floatingButton = {
  floating: {
      y: [0, -5, 0],
      transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
      },
  },
};

export const parallaxEffect = {
  visible: (offsetY) => ({
      transform: `translateY(${offsetY * 0.3}px)`,
      transition: { ease: "easeOut", duration: 0.5 },
  }),
};

export const fadeInZoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const floatingAccents = {
  floating: {
      y: [0, 10, 0],
      transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
      },
  },
};

export const backgroundOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

// export const fullSizeImage = {
//   initial: { scale: 1, opacity: 1 },
//   expanded: { scale: 1.5, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   collapsed: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
// };

// export const overlayFade = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 0.6, transition: { duration: 0.3, ease: "easeOut" } },
// };

export const fullSizeImage = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const overlayFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
