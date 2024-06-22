//multiple built in functions are there which are called react hooks
import classes from './NewPost.module.css';
import Model from '../components/Model';
import { Link , Form,redirect  } from 'react-router-dom';

function NewPost() {
  //this is the lifted up state and you can any number of them as many as u need
  //here below we need to put 2 empty tags as both are sibling elements and react doesnt allow sibling elements.
  //so if we see the usestate is in the right place but the event is happening in the NewPost component.
  //So to resolve this we lift the state up to component that has access to both the components that need the state.
  //SO HERE IF WE SEE POSTLIST COMPONENT HAS ACCESS TO BOTH THE NEWPOST AND POST COMPONENTS. SO THIS IS THE LIFTED UP STATE.



  /*
  const [ enteredBody, setEnteredBody] = useState('');
  //useState is a function which returns an array with 2 elements.
 
first one is the current value of the snapshot and cant change.
Second one is the function which can update the value of the snapshot of jsx.

in react if u want to add an event listerner then we add special props.
called as declarative.we automatic get a event object in the function we pass from the arguement
change event also give for any changes like cut undo and any keystroke changes.

  function changeBodyHandler(event){
    setEnteredBody(event.target.value);
  }

//SO WHEN REACT RENDERS THE NEWPOST IT DIRECTLY RENDERS THE FUNCTION BUT ANY CHANGES MADE TO VARIABLES AFTER 
//THAT ARE NOT REFLECTED BECAUSE IT IS NOT RENDERED.REACT DOESNT RANDOMLY EXECUTE NEWPOST AGAIN 
*/

//IF use the Form---capital one then the react router itself will take care of the handling of the form submission
  return (
    <Model>
    <Form method = 'post' className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name='body' required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name='author' id="name" required />
      </p>
      <p className={classes.actions}>
        <Link to ="/" type="button" >Cancel</Link>
        <button>Submit</button>
      </p>
    </Form>
    </Model>
  );
// Next most important thing in react is the STATE.
// it is feature where any updates done in real time is refected because of some event listener.
}


export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);// {body : '...',author: '...'} some basic key value pairs.
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'content-type': 'application/json'
    }
});

return redirect('/');//it generates a redirect response to the client. react router simple moves to that route
}