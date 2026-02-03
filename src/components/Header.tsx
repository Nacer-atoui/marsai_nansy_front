import { NavLink, useNavigate } from 'react-router-dom';

export function Header() {
  const Navigate = useNavigate();

  return (
    <>
      <header className="m-7">
        <nav className="mb-5">
          <ul className="flex lg:flex-1">
            <li>
              <p
                onClick={() => Navigate('/')}
                className="cursor-pointer font-bold text-xl "
              >
                Mars<span className="text-mars-orange font-bold">AI</span>
              </p>
            </li>
            <li className="mx-auto">
              <NavLink className="m-3" to="/">
                Accueil
              </NavLink>
              <NavLink className="m-3" to="/about">
                A propos
              </NavLink>
              <NavLink className="m-3" to="/movie">
                Films
              </NavLink>
              <NavLink className="m-3" to="/jury">
                Jury
              </NavLink>
              <NavLink className="m-3" to="/contact">
                Contact
              </NavLink>
            </li>
            <select className="bg-midnight ">
              <option value="Fr">🌐FR</option>
              <option value="En">🌐EN</option>
            </select>
          </ul>
        </nav>
      </header>
    </>
  );
}
