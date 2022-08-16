import React from 'react'

//imports from react router dom
import {Link} from 'react-router-dom'

//styles
import './styles/footer.css'

const footer = () => {
  return (
    <div className="parentFooter">
        <ul>
            <li><Link to='/'>spacex &copy;</Link></li>
            <li><Link to='/'>Twitter</Link></li>
            <li><Link to='/'>Youtube</Link></li>
            <li><Link to='/'>instagram</Link></li>
            <li><Link to='/'>flicker</Link></li>
            <li><Link to='/'>linkedin</Link></li>
            <li><Link to='/'>privacy policy</Link></li>
            <li><Link to='/'>suppliers</Link></li>
        </ul>
    </div>
  )
}

export default footer