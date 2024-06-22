
import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList';//importing PostList component from PostList.jsx file

function Posts() {

  return (//so this is used to create multiple tags to execute the code multiply times or else the code doesnt allow.
    <>
    <Outlet/>
  <main> 
    <PostList />
  </main> 
  </>
  );// you can write them as opening and closing tags as well.
}        

//the react router will make sure that the data accessible by the return function above

export default Posts;

export async function loader(){
  const response =  await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}

