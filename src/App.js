
import './App.css';
import routes from './routes'



function App() {

  
  return (
    <div className="app">
      {routes}
      <footer>
        <h5>CONTACT US</h5>
        <a   rel="noreferrer" target="_blank" href="https://www.instagram.com/cheka.clay/"><img className='insta' src = 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1624753690/3AC64D8C-2183-4140-9CCD-C6919113B6BF_oe3blc.png' alt = 'instaggram'/></a>
        <h6>Cheka.Clay@gmail.com</h6>
        <h6>Available 9AM-6PM E.S.T.</h6>
      </footer>
    </div>
  );
}

export default App
