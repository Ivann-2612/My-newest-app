import './App.css';

function App() {
  return (
    <>
    <div className="container">
     <nav>
        <div class="site-title">
            <a href='/'><h1>BLOGman</h1></a>
            <p>IVAN'S SITE BLOG</p>
        </div>
        <ul>
            <li><a href='/'>BLOGS</a></li>
            <li><a href='/about'>ABOUT</a></li>
            <li><a href='/blogs/create'>NEW BLOG</a></li>
        </ul>
      </nav>
  
      <div className='main'>
          <div className='left'>main</div>
          <div className='right'>mmm</div>
      </div>
      <div className='asside'>
          asside
      </div>
      <div className='footer'>
          Copyright &copy; Blog Ivan 2021
      </div>
    </div>
    </>
  );
}

export default App;
