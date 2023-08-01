import Facebook from '../Img/facebook-logo.svg';
import Pinterest from '../Img/pinterest.svg';
import Vimeo from '../Img/vimeo.svg';
import Dribble from '../Img/dribbble.svg';
import Twitter from '../Img/twitter.svg';
import Behance from '../Img/behance.svg';
import Instagramm from '../Img/instagram.svg';
import YouTube from '../Img/youtube.svg';
import Group from '../Img/Group.svg';
function ADAPTING_SOCIALMEDIA(){
    return(
        <div className="Adapting_SocialMedia">
            <div class="d-flex justify-content-center">
                <div class="d-flex p-2"><button type="button" class="btn btn-info">Social media</button></div>
            </div>
            <div class="d-flex justify-content-center">
            <div class="d-flex flex-row mb-3">
                    <div class="p-2">
                    <button type="button" class="btn btn-info element">
                        <img src={Facebook} alt='...'/>
                        <p>32k likes</p>
                    </button>
             </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Pinterest} alt='...'/>
                                <p className='followers'>814 followers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                    <div class="p-2">
                        <button type="button" class="btn btn-info element">
                            <img src={Vimeo} alt='...'/>
                            <p className='followers'>165 followers</p>
                        </button>
                    </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Dribble} alt='...'/>
                                <p className='followers'>6k followers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Twitter} alt='...'/>
                                <p className='followers'>130k followers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Behance} alt='...'/>
                                <p className='followers'>37k followers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Instagramm} alt='...'/>
                                <p className='followers'>854k followers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={YouTube} alt='...'/>
                                <p className='followers'>52k subscribers</p>
                            </button>
                </div>
        </div>
        <div class="d-flex justify-content-center">
                <div class="p-2">
                            <button type="button" class="btn btn-info element">
                                <img src={Group} alt='...'/>
                                <p className='followers'>642 followers</p>
                            </button>
                </div>
        </div>
    </div>
    );
}
export default ADAPTING_SOCIALMEDIA;