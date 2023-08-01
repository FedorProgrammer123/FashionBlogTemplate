import Header from './Components/Header';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import ADAPTING_FOLLOWOUR from './Adapting/Adapting_FollowOur';
import ADAPTING_NEWS from './Adapting/Adapting_News';
import ADAPTING_ABOUTHEAUTHOR from './Adapting/Adapting_AboutTheAuthor';
import ADAPTING_FEAUTUREDPOSTS from './Adapting/Adapting_FeauturedPosts';
import ADAPTING_CATEGORIES from './Adapting/Adapting_Categories';
import ADAPTING_SOCIALMEDIA from './Adapting/Adapting_SocialMedia';
import ADAPTING_TAGS from './Adapting/Adapting_Tags';
import './Style/app.css';
import './Style/Header.css';
import './Style/YourImagesHere.css';
import './Style/News.css';
import './Style/Pagination.css';
import './Style/FollowOur.css';
import './Style/AboutTheAuthor.css';
import './Style/FeauturedPosts.css';
import './Style/Categories.css';
import './Style/SocialMedia.css';
import './Style/Tags.css';
import './Style/Footer.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
      <ADAPTING_FOLLOWOUR/>
      <ADAPTING_NEWS/>
      <ADAPTING_ABOUTHEAUTHOR/>
      <ADAPTING_FEAUTUREDPOSTS/>
      <ADAPTING_CATEGORIES/>
      <ADAPTING_SOCIALMEDIA/>
      <ADAPTING_TAGS/>
    </div>
  );
}

export default App;