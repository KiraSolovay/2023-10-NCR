import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Nav/>
        <Article date="11/12/20" title="On the Street in Brooklyn" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." image="blog-image-1.jpg"/>
        <Article date="11/11/20" title="Vintage in Vogue" text=" Amet consectetur adipiscing elit duis tristique sollicitudin. Diam vulputate ut pharetra sit amet aliquam id diam. Leo in vitae turpis massa sed elementum tempus. Neque vitae tempus quam pellentesque nec nam aliquam sem. Imperdiet dui accumsan sit amet nulla facilisi. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. In hendrerit gravida rutrum quisque non tellus. Elit at imperdiet dui accumsan sit amet. Cursus euismod quis viverra nibh cras pulvinar. Tortor id aliquet lectus proin." image="blog-image-2.jpg"/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
