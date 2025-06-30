import { memo } from 'react';
import { log } from '../../log.js';

// memo():
// - will take a look at the props of your function,
// compare the old and new values coming in for props
// and prevent execution if the value are the same.
// It will, however, not prevent it from running if
// internal state has changed.
// Notes:
// - Use memo as high up in component tree as possible
// - don't over use it as it is costs performance
// - don't use on components where props change frequently
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;