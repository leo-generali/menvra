import { brandColors } from '../colors';

const uppercase = (boolean) => (boolean ? `text-transform: uppercase` : null);
const spacing = (boolean) => (boolean ? `letter-spacing: 0.2rem` : null);
const primaryColor = (boolean) =>
  boolean ? `color: ${brandColors.primary}` : null;

export { uppercase, spacing, primaryColor };
