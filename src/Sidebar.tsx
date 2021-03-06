import React from 'react';
import NavigationItem from './NavigationItem';
import {
  Twitter,
  Home
} from '@styled-icons/feather';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <Twitter size="32" />

        <ul className="list-group list-navigation">
          <li className="list-group-item">
            <NavigationItem text="Página Inicial" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Explorar" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Notificações" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Mensagens" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Itens salvos" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Listas" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Perfil" Icon={Home} />
          </li>
          <li className="list-group-item">
            <NavigationItem text="Mais" Icon={Home} />
          </li>
        </ul>

    </div>
  );
}

export default Sidebar;
