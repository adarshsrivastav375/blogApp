import logo from '/logo.png'
function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo