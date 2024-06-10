import Logo from "./Assets/Logo.svg";
import Feed from "./Assets/feed.svg";
import AccountCircle from "./Assets/account_circle.svg";
import Info from "./Assets/info.svg";
import Logout from "./Assets/logout.svg";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do codeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={AccountCircle} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
