import Logo from '../../assets/logo.png';
import classes from './Header.module.css';


const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={classes.btn}>
            <button>Get Priority Access</button>
        </div>
      </div>
    </header>
  );
};

export default (Header);