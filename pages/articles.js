import { Card } from '@mui/material'; 
import NewsList from '../components/NewsList' 
import { dark } from '../styles/Themes'; 
 
function articles() { 
    return ( 
        <div> 
        <h1 className="news-header">News</h1> 
        <h2 className="news-subheader">Check out the latest fashion news, celebrity style and trends on and off the runway. 
        Explore Oh My Goodnus for all the newest updates.</h2> 
            <NewsList /> 
        </div> 
    ) 
        {/* <div className='articles'> 
            <NewsList /> 
        </div> */} 
     
} 
 
export default articles;