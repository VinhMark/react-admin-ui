import { menu } from '../../data';
import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((menu) => (
        <div className='item' key={menu.id}>
          <span className='title'>{menu.title}</span>
          {menu.listItems.map((item) => (
            <Link className='listItem' to={item.url} key={item.id}>
              <img src={item.icon} alt='' />
              <span className='listItemTitle'>{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
