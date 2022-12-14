import PostComponent from "./Post/Post";
import useStyles from './styles';
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const PostsComponent = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
     !posts.length ? <CircularProgress /> : (
         <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
             {posts.map((post) => (
                 <Grid item key={post._id} xs={12} sm={6}>
                     <PostComponent posts={post}/>
                 </Grid>
                 ))}
         </Grid>
     )
    );
}

export default PostsComponent;