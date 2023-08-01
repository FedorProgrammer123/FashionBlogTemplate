import LeftArrow from '../Img/LeftArrow.svg';
import RigthArrow from '../Img/RightArrow.svg';
function Pagination(){
    return(
        <div className="Pagination">
            <div class="d-flex justify-content-center">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary"><img src={LeftArrow} alt='...'/></button>
                        <button type="button" class="btn btn-primary">OLDER POST</button>
                        <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">2</button>
                        <button type="button" class="btn btn-primary">3</button>
                        <button type="button" class="btn btn-primary">...</button>
                        <button type="button" class="btn btn-primary">8</button>
                        <button type="button" class="btn btn-primary">NEXT POST</button>
                        <button type="button" class="btn btn-primary"><img src={RigthArrow} alt='...'/></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Pagination;