import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
        <span>lammadmin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' />
        <img src='/app.svg' alt='' />
        <img src='/expand.svg' alt='' />
        <div className='notification'>
          <img src='/notifications.svg' alt='' />
          <span>1</span>
        </div>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/6640696/pexels-photo-6640696.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
            alt=''
          />
          <span>John doe</span>
        </div>
        <img src='/settings.svg' alt='' />
      </div>
    </div>
  );
};

export default Navbar;
