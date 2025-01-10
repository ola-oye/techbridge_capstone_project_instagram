import "../styles/stories.css"
// import DavidoStories from './DavidoStories';
const Stories = () => {
  return ( 
           <div className='insta-story'>
              <div className="body">
       <div>
    <div className="you">
      <a href="">
        <img src="/images/you.png" alt=""className='' />
        {/* <DavidoStories /> */}
        </a>
    <div>
    <img src="/images/Ellipse 3.png" alt="" className="ellipse"/> 
    <img src="/images/Vector.png" alt="" className="plussign" />
    </div>
    </div>
    <p>Your story</p>
    </div>
    <div className="child-div">
      <div className="gradient-border">
        <img src="/images/user1.png" alt=""className='image' />
        </div>
        <p>manicus</p>
    </div>
    <div className="child-div">
      <div className="gradient-border">
        <img src="/images/user 2.png" alt=""className='image' />
        </div>
        <p>leoni_tu</p>
    </div >
    <div className="child-div">
    <div className="gradient-border">
        <img src="/images/user 4.png" alt=""className='image' />
        </div>
        <p>katarina</p>
    </div>
    <div className="child-div">
    <div className="gradient-border">
        <img src="/images/user 5.png" alt=""className='image' />
        </div>
        <p>brandon</p>
    </div>
    <div className="child-div">
    <div className="gradient=border">
      <div className="gradient-border">
        <img src="/images/user 6.png" alt=""className='image' />
        </div>
        </div>
        <p>milk</p>
    </div>
    </div>
    <img src="/images/Exclude.png" alt=""  className="exclude"/>
   
  
      </div>
   );
}

export default Stories;