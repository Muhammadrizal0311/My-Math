import { navMenu } from "../../data";

function NavLink({ style }) {
  return (
    <div className={`nav-menu ${style}`}>
      {navMenu.map((link, index) => {
        return (
          <a className="headerText" key={index} href={link.path}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
}

export default NavLink;
