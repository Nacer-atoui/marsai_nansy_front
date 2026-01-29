import { NavLink, useNavigate } from 'react-router-dom';

export function Header() {
  const Navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <ul className="flex lg:flex-1">
            <li>
              <a className="m-10" onClick={() => Navigate('/')}>
                
                LOGO
              </a>
            </li>
            <li>
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">A propos</NavLink>
              <NavLink to="/movie">Films</NavLink>
              <NavLink to="/jury">Jury</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
