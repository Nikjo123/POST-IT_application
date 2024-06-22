import { Link } from 'react-router-dom';
import classes from './Post.module.css';//importing css file
// so what classes does is it is like u can use the class in the css file as properties in the js file.

function Post({id , author , body}) {
//We can pass values like arguements in a function using the react props in React.
// for styling you always save as -Name.module.css it is approach for projects created with vite or create-react-app.
    return(
        <li className= {classes.post}> 
            <Link to={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
            </Link>
        </li>   
    );
// if you want to use different components with different values you can use props
}

export default Post;