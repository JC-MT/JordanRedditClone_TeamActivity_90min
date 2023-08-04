import './Navbar.scss'

export default function NavBar() {

  return (
    <div className='navbarContainer'>

        <div className='navbarContainer__name'>
            <img src='https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png'/>
        </div>
        
        <div className='navbarContainer__search'>
            {/* <div>  */}
                <img width={50} height={30} src="https://w7.pngwing.com/pngs/765/401/png-transparent-search-logo-magnifying-glass-computer-icons-search-box-icon-search-drawing-icon-lens-data-background-process.png" alt="" />
            {/* </div> */}
            <div>Search Reddit</div>
        </div>

        <div className='navbarContainer__login'>

            <div className='navbarContainer__login__appButton'><svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" icon-name="qr-code-outline" fill="currentColor"><path d="M14.8 16h-3.7v-1.2h3.7v-3.7H16v3.7c0 .7-.5 1.2-1.2 1.2zM9 7.8V5.2C9 4.5 8.5 4 7.8 4H5.2C4.5 4 4 4.5 4 5.2v2.5C4 8.5 4.5 9 5.2 9h2.5C8.5 9 9 8.5 9 7.8zm-1.2 0H5.3V5.3h2.5v2.5zm8.2 0V5.2c0-.7-.5-1.2-1.2-1.2h-2.5c-.8 0-1.3.5-1.3 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2zm-1.2 0h-2.5V5.3h2.5v2.5zm-5.8 7v-2.5c0-.8-.5-1.3-1.2-1.3H5.2c-.7 0-1.2.5-1.2 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2zm-1.2 0H5.3v-2.5h2.5v2.5zm-.8 3H2.6c-.2 0-.4-.2-.4-.4V13H1v4.4c0 .9.7 1.6 1.6 1.6H7v-1.2zm12-.4V13h-1.2v4.4c0 .2-.2.4-.4.4H13V19h4.4c.9 0 1.6-.7 1.6-1.6zm0-14.8c0-.9-.7-1.6-1.6-1.6H13v1.2h4.4c.2 0 .4.2.4.4V7H19V2.6zm-16.8 0c0-.2.2-.4.4-.4H7V1H2.6C1.7 1 1 1.7 1 2.6V7h1.2V2.6z"></path></svg>Get app</div>
            <div className='navbarContainer__login__button'>Log in</div>
        </div>

    </div>
  )
}