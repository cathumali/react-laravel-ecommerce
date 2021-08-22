import React from 'react'; 
import Heroes from '../partials/Heroes';
import Featured from '../partials/Featured';
import Recommended from '../partials/Recommended';

const Home = (props) => {
    return <>  
        <Heroes />
        <Featured />
        <Recommended />
    </>
}
export default Home;