import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { login, logout } from '../api/firebase';

export default function NavBar() {
  return (
    <header className='flex gap-5 justify-between px-16 py-4 w-full text-base leading-6 border-b border-solid border-b-[color:var(--Border-primary,#000)] max-md:flex-wrap max-md:px-5 max-md:max-w-full'>
      <nav className='flex gap-5 justify-between my-auto text-black max-md:flex-wrap max-md:max-w-full'>
        <Link to='/' className='flex items-center gap-1 text-4xl font-bold'>
          <img
            className='w-12 h-12 '
            src='/images/logo-stylepulse.svg'
            alt='Company Logo'
          />
          <h1 className='text-2xl font-bold text-purple-500'>StylePulse</h1>
        </Link>
        <div className='flex gap-5 justify-between my-auto'></div>
      </nav>
      <div className='flex gap-4 justify-between whitespace-nowrap'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}
        {/* Join Button */}
        <Button text={'Login'} onClick={login} />
        {/* Sign Up Button*/}
        <Button text={'Logout'} onClick={logout} />
      </div>
    </header>
  );
}
