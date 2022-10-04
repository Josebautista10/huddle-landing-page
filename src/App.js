import './App.css'
import { ReactComponent as HuddleDesign } from './images/illustration-mockups.svg'
import { ReactComponent as Logo } from './images/logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <Logo />
      </header>
      <div className='main-container'>
        <HuddleDesign className='huddle-design' />
        <div className='info-container'>
          <h1>
            Build The Community {'\n'}
            Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </div>
      <footer className='footer'>
        <div className='icons-container'>
          <a href='https://facebook.com/' target='blank_'>
            <FaFacebookF className='icon' />
          </a>

          <a href='https://twitter.com/' target='blank_'>
            <FaTwitter className='icon' />
          </a>

          <a href='https://instagram.com/' target='blank_'>
            <FaInstagram className='icon' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
