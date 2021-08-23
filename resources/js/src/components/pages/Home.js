import React from 'react'; 
import Heroes from '../partials/Heroes';
import Featured from '../pages/Featured';
import Recommended from '../pages/Recommended';

const Home = (props) => {
    return <>  
        <Heroes />
        <Featured />
        <Recommended />
    </>
}
export default Home;