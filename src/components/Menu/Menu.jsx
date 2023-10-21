import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <>        
            <nav class="menu">
                <NavLink className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}  to="/">Главная</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}  to="/drift">Дрифт-такси</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}  to="/timeattack">Time Attack</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}  to="/forza">Forza Karting</NavLink>
            </nav>
        </>
    );
        

  }

//   <NavLink>
// A <NavLink> - это особый вид <Link>, который знает, является ли он "активным", "ожидающим" или "переходящим". Это полезно в нескольких различных сценариях:

// При создании навигационного меню, такого как хлебная крошка или набор вкладок, где вы хотели бы показать, какая из них выбрана в данный момент
// Он предоставляет полезный контекст для вспомогательных технологий, таких как программы чтения с экрана
// Он предоставляет значение "transitioning", чтобы предоставить вам более детальный контроль над переходами между видами