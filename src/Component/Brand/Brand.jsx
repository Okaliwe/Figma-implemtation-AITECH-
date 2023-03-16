import{google,slack,lassian,dropbox,shopify} from './import'
import './Brand.css'
const Brand = () => {
    return ( 
        <div className='brand'>
            <div>
                <img src={google} alt="google"/>
            </div>
            <div>
                <img src={slack} alt="slack"/>
            </div>
            <div>
                <img src={lassian} alt="lashian"/>
            </div>
            <div>
                <img src={dropbox} alt="dropbox"/>
            </div>
            <div>
                <img src={shopify} alt="shopify"/>
            </div>
        </div>
     );
}
export default Brand;
