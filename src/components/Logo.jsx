import logo from '/logo.png'
// eslint-disable-next-line react/prop-types
function Logo({ width, height }) {
  return (
    <img className={`w-[${width}px] h-[${height}px]`} src={logo} alt="logo" />
  );
}

export default Logo