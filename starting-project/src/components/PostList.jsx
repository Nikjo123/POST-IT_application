import { useEffect, useState } from 'react';
import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';
function PostList(){
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data =>{
    //     setPosts(data.posts);
    // }); THIS SET OF FETCH IN AN INFINITE LOOP AS setposts calls the postlist again so fetch is also ran again.


    //bodyChangeHandler is passed as a value to the props onBodyChange in the NewPost component.
    //We are passing the function itself to the newPost component in the "textarea".which react on change event.
    //You can store jsx code even in variables ,like you can have an if statement with modelIsVisible and then store the jsx code in a variable and then return the variable.
    

    const posts = useLoaderData();


    // useEffect(()=>{ in useEffect we pass a funciton as the arguement.
    //     async function fetchPosts(){   
    //     setIsFetching(true);
    //     setPosts(resData.posts)
    //     setIsFetching(false);
    //     }
    //the useEffect executes when a dependency changes which is any variable or funciton changes or recieves new value it executes again
    //if we pass an empty array then it executes only once when the component is rendered.
    //  fetchPosts();//this is the function that is called when the component is rendered.
    //   },[]);


    //function addPostHandler(postData){
        //shifted to NewPosst component
        //setPosts([postData, ...posts]) //No existing post are lost we use ...posts but this not a good practice.
      //  setPosts((existingPost) => [postData, ...existingPost])//this is the better way to do it.
        //if the new state is based on the existing state then the above code is required one WRITE IT IN A FUNCITON.
   // }
    return (
    <>

        {posts.length > 0 && (<ul className= {classes.posts}>   
            {posts.map((post) => (<Post key = {post.id} id={post.id} author = {post.author} body = {post.body}/>))}
        </ul>
    )}
    {posts.length === 0 && (
        <div style={{textAlign: 'center',color: 'white'}}>
            <h2>IT FEELS REALLY EMPTY</h2>
            <p>click on the top right Newpost button to add post.</p>
        </div>
    )}
    </>
    );
    // if Newpost component is executed again then all the nested component is also executed again.
}

export default PostList;