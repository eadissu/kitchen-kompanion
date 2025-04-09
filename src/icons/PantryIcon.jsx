const PantryIcon = ({ className = "navbar-icon"}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="60" 
    height="60" 
    viewBox="0 0 60 60" 
    fill="none"
    style={{ color: 'inherit' }}
  >
    <path 
      fill="currentColor"
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M42 0H6C2.691 0 0 2.691 0 6V21H12V12H18V21H48V6C48 2.691 45.309 0 42 0ZM18 39H12V24H0V54C0 57.309 2.691 60 6 60H42C45.309 60 48 57.309 48 54V24H18V39Z" 
    />
  </svg>
);

export default PantryIcon;