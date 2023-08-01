import Follow1 from '../Img/Follow1.svg';
import Follow2 from '../Img/Follow2.svg';
import Follow3 from '../Img/Follow3.svg';
import Follow4 from '../Img/Follow4.svg';
import Follow5 from '../Img/Follow5.svg';
import Follow6 from '../Img/Follow6.svg';
function FollowOur(){
    return(
        <div className="FollowOur">
            <div class="d-flex p-2 justify-content-center instname">Follow our @instagram_name</div>
            <div class="d-flex flex-row mb-3">
                <div class="p-2"><img src={Follow1} alt='...'/></div>
                <div class="p-2"><img src={Follow2} alt='...'/></div>
                <div class="p-2"><img src={Follow3} alt='...'/></div>
                <div class="p-2"><img src={Follow4} alt='...'/></div>
                <div class="p-2"><img src={Follow5} alt='...'/></div>
                <div class="p-2"><img src={Follow6} alt='...'/></div>
            </div>
        </div>
    );
}
export default FollowOur;