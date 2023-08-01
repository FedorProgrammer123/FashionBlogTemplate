import AboutTheAuthor from './AboutTheAuthor';
import FeaututredPosts from './FeauturedPosts';
import Categories from './Categories';
import SocialMedia from './SocialMedia';
import Tags from './Tags';
function Aside(){
    return(
        <aside>
            <AboutTheAuthor/>
            <FeaututredPosts/>
            <Categories/>
            <SocialMedia/>
            <Tags/>
        </aside>
    );
}
export default Aside;