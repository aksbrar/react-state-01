import chefImg from "../logo/chef-claude-icon.png"

export default function Header(){
  return (
    <header className="header-container">
      <img src={chefImg}></img>
      <h1>Chef Claude</h1>
    </header>
  )
}