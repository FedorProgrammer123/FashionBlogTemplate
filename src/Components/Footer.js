import Logo from '../Img/Logotype.svg';
import Facebook2 from '../Img/facebook2.svg';
import Twitter2 from '../Img/twitter2.svg';
import Pinterest2 from '../Img/pinterest2.svg';
import GooglePlay2 from '../Img/google-play2.svg';
import Behance2 from '../Img/behance2.svg';
import Instagram2 from '../Img/instagram2.svg';
import Rectangle from '../Img/Rectangle.svg';
function Footer(){
    return(
        <div className="Footer">
            <div class="d-flex p-2 justify-content-center">
                <img src={Logo} alt='...'/>
            </div>
            <div class="d-flex flex-row mb-3 justify-content-center">
                <div class="p-2"><a href='index.html'>Home</a></div>
                <div class="p-2"><a href='index.html'>Recipes</a></div>
                <div class="p-2"><a href='index.html'>Article</a></div>
                <div class="p-2"><a href='index.html'>Contact</a></div>
                <div class="p-2"><a href='index.html'>Purchase</a></div>
            </div>
            <div class="d-flex flex-row mb-3 justify-content-center">
                <div class="p-2"><img src={Facebook2} alt='...'/></div>
                <div class="p-2"><img src={Twitter2} alt='...'/></div>
                <div class="p-2"><img src={Pinterest2} alt='...'/></div>
                <div class="p-2"><img src={GooglePlay2} alt='...'/></div>
                <div class="p-2"><img src={Behance2} alt='...'/></div>
                <div class="p-2"><img src={Instagram2} alt='...'/></div>
            </div>
            <div class="d-flex flex-row mb-3 justify-content-center">
                <img src={Rectangle} alt='...'/>
            </div>
            <div class="d-flex flex-row mb-3 justify-content-center">
                <p>@2019 Logwork. All Right Reserved.</p>
            </div>
        </div>
    );
}
export default Footer;