import { useSearchParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Redirect(){
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("code"));

    let navigate = useNavigate();

    axios.get('/api/auth?code=' + searchParams.get("code")).then((response) => {
        Cookies.set('access_token', response.data.accessToken);
        navigate('/Landing');
    }).catch(error => {
        console.error(error);
        navigate('/');
    })

    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Loading...</p>
        </div>
    );
}

export default Redirect; 
