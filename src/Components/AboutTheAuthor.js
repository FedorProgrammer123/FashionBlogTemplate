import Kate from '../Img/Kate.svg';
function AboutTheAuthor(){
    return(
        <div className="AboutTheAuthor">
            <div class="d-flex p-2"><button type="button" class="btn btn-info">About the author</button></div>
            <div class="d-flex p-2">
                    <div class="card cardauthor">
                    <img src={Kate} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title katewillems">Kate Willems</h5>
                        <p class="card-text foodcooking">Food & cooking bloger</p>
                        <p class="card-text Sonia">Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p>
                        <a href="index.html" class="btn btn-primary continuereading">Continue Reading</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutTheAuthor;