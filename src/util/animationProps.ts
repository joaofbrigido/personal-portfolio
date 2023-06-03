export const showUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const showDown = {
  initial: { opacity: 0, y: -35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const showLeft = {
  initial: { opacity: 0, x: -35 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

export const showRight = {
  initial: { opacity: 0, x: 35 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

export const zoom = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

export const zoomLow = {
  initial: { opacity: 0, scale: 0.68 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

export const showUpLow = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const showOpacity = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

export const transitionDefault = {
  duration: 0.3,
  type: 'spring',
  stiffness: 260,
  damping: 20,
};
