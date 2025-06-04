import { Link, NavLink } from '@solidjs/router';

import {
  ToggleBodyClass,
  AdjustFontSize,
  ResetFontSize,
} from './../utils/accessibility';
import { useCarbonIntensity } from './../context/carbonIntensity';

import './Header.css';

export default function Header() {
  const [carbonIntensity, setCarbonIntensity] = useCarbonIntensity();
  return (
    <header>
      <div class='page-flex-wrap'>
        <div class='header-title'>
          <Link href='/'>
            <h1>INGI</h1>
          </Link>
        </div>

        <nav>
          <div className='nav-wrap'>
            <NavLink href='/projects'>Projects</NavLink>
            <NavLink href='/events'>Events</NavLink>
            <NavLink href='/info'>Info</NavLink>
          </div>
        </nav>

        <div className='secondary-nav'>
          <div class='dropdown'>
            <button class='dropbtn'>Accessibility</button>
            <div class='dropdown-content'>
              <button onClick={() => AdjustFontSize('add')}>
                Increase Font Size
              </button>
              <button onClick={() => AdjustFontSize('subtract')}>
                Decrease Font Size
              </button>
              <button onClick={() => ResetFontSize()}>Reset Font Size</button>
              <button onClick={() => ToggleBodyClass('darkmode')}>
                Toggle Darkmode
              </button>
              <button onClick={() => ToggleBodyClass('high-contrast')}>
                Toggle High Contrast
              </button>
              <button onClick={() => ToggleBodyClass('grayscale')}>
                Toggle Grayscale
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
