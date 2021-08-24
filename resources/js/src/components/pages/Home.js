import React from 'react'; 
import Heroes from '../partials/Heroes';
import Featured from '../pages/Featured';
import Recommended from '../pages/Recommended';

const Home = () => {
    return <>  
        <Heroes />
        <Featured />
        <Recommended />
    </>
}
 export default Home