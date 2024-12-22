import React from 'react';
import './header.css'
import topImage from '../assets/image/log.png'
import homeImage from '../assets/image/Home.png'
import messageImage from '../assets/image/Messenger.png'
import postImage from '../assets/image/NewPosts.png'
import findPeople from '../assets/image/FindPeople.png'
import profileImage from '../assets/image/profile.png'
import likeImage from '../assets/image/Menu-Button-Item.png'

const Header = () => {
    return (
        
        <div className='topProfile'>
            <div className='imageDiv'>
                <img className='imageProfile' src={topImage} alt="topImage" />
            </div>
            <div>
                <input type='text' className='input' placeholder='search'/>
            </div>
            <div className='logoContainer'>
                <img className='homeLogo' src={homeImage} alt='homeImage' />
                <img className='messageLogo' src={messageImage} alt='messageImage' />
                <img className='postLogo' src={postImage} alt='newpostImage' />
                <img className='findLogo' src={findPeople} alt='findPeople' />
                <img className='likeLogo' src={likeImage} alt='likeImage' />
                <img className='profileLogo' src={profileImage} alt='profileImage' />
            </div>
            <div>
                {/* <img className='' src={} alt='' /> */}
            </div>
        </div>
    )
}
export default Header;