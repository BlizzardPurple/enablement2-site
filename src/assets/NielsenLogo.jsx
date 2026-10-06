import logo from './images/nlsn-logo.png';

export default function NielsenLogo({ height = 28 }) {
  return (
    <img
      src={logo}
      alt="Nielsen"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
