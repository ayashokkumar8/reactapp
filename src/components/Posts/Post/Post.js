import useStyles from './styles';
import {Card , CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


const PostComponent = ({ posts}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
                  <CardMedia className={classes.media} image={posts.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={posts.title} />
            <div className={classes.overlay}>
                <Typography variant="h6"> {posts.creator}</Typography>
                <Typography variant="body2"> {moment(posts.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon />
                </Button>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{posts.tags.map((tag) => `#${tag} `)}</Typography>           
            <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>{posts.message}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon  fontSize="small"  />
                    Like
                    {posts.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <DeleteIcon  fontSize="small" />
                    Delete
                </Button>
            </CardActions>
            </div>
        </Card>
    );
}

export default PostComponent;