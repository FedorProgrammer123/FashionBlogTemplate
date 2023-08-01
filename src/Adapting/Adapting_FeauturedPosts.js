import Jeans from '../Img/Jeans.svg';
import City from '../Img/City.svg';
import Photography from '../Img/Photography.svg';
function ADAPTING_FEAUTUREDPOSTS(){
    return(
        <div className="Adapting_FeauturedPosts">
            <div class="d-flex justify-content-center">
                <div class="d-flex p-2"><button type="button" class="btn btn-info">Featured posts</button></div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex p-2">
                    <div class="card">
                        <img src={Jeans} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title Jeans">jeans</h5>
                            <p class="card-text OneOf">One of Saturn’s largest rings may be newer than anyone</p>
                            <a href="index.html" class="card-link June6">June 6, 2019</a>
                            <a href="index.html" class="card-link RickieBaroch">By Rickie Baroch</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                    <div class="d-flex p-2">
                            <div class="card">
                                <img src={City} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title Jeans">City</h5>
                                    <p class="card-text OneOf">One of Saturn’s largest rings may be newer than anyone</p>
                                    <a href="index.html" class="card-link June6">June 6, 2019</a>
                                    <a href="index.html" class="card-link RickieBaroch">By Rickie Baroch</a>
                                </div>
                             </div>
            </div>
            
            </div>
            <div class="d-flex justify-content-center">
            <div class="d-flex p-2">
                        <div class="card">
                            <img src={Photography} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title Jeans">Photography</h5>
                                <p class="card-text OneOf">One of Saturn’s largest rings may be newer than anyone</p>
                                <a href="index.html" class="card-link June6">June 6, 2019</a>
                                <a href="index.html" class="card-link RickieBaroch">By Rickie Baroch</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default ADAPTING_FEAUTUREDPOSTS;