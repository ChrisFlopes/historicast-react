import Navbarsearch from "./NavBarSearch";

const Navbar = ({ onFormSubmit }) => {
  return ( 
    <nav className="navbar">
      <h1>Historicast</h1>
      <Navbarsearch onFormSubmit={onFormSubmit} />
    </nav>
   );
}
 
export default Navbar;