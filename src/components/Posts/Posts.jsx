import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Post from "../Post/Post";
import { getPostsFetch } from "../../store/slicers/postSlice/postSlice";
import Spinner from 'react-bootstrap/Spinner';
import Layout from "../Layout/Layout";

const Posts = () => {
    const store = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{ // фетчи посты по апи
        dispatch(getPostsFetch());
    },[dispatch]);

  return (
        <Layout>
            {store.isLoading 
                ?  <Spinner animation="grow" variant="info" />
                :  store.posts.map(e => <Post key={e.id} postId={e.id} id={e.userId} title={e.title} body={e.body}/>)
            }
        </Layout>
  )
};

export default Posts;
