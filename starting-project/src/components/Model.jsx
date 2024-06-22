import { useNavigate } from 'react-router-dom';
import classes from './Model.module.css';

function Model({ children}){
    //if u wrap content with a custom component then the react by default doesnt know where to put it
    //So we need to a special props --- props.children.
    //you can directly write {childern} rather than writing props and then destructuring it.
    //children is a reserved prop which is used to pass the content between the opening and closing 
    //tag of the custom component and we output it down below which says that it should display here.
    
const navigate = useNavigate();

    function closeHandler(){
        navigate('..');//this is used to go back to the parent route.
    }
    
    return(
        <>
    <div className={classes.backdrop} onClick={closeHandler} />
        <dialog open className={classes.model}>
            {children}
        </dialog>
    </>
    );
}

export default Model;