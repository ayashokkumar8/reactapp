import { Button, Typography, Paper, TextField } from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const FormComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
   const [PostData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(PostData));
    };
    const clear = () => {}
     return (
       <Paper className={classes.paper}>
           <form noValidate autoComplete="off" className={` ${classes.root} ${classes.form}` } onSubmit={handleSubmit}>
               <Typography variant="h6" > Create Memory</Typography>
               <TextField 
               name="creator" 
               variant="outlined" 
               label="creator" 
               fullWidth 
               value={PostData.creator} 
               onChange={(e) => setPostData({...PostData, creator: e.target.value})}>
               </TextField>
               <TextField 
               name="title" 
               variant="outlined" 
               label="title" 
               fullWidth 
               value={PostData.title} 
               onChange={(e) => setPostData({...PostData, title: e.target.value})}>
               </TextField>
               <TextField 
               name="message" 
               variant="outlined" 
               label="message" 
               fullWidth 
               value={PostData.message} 
               onChange={(e) => setPostData({...PostData, message: e.target.value})}>
               </TextField>
               <TextField 
               name="tags" 
               variant="outlined" 
               label="tags" 
               fullWidth 
               value={PostData.tags} 
               onChange={(e) => setPostData({...PostData, tags: e.target.value})}>
               </TextField>
               <div className={classes.fileInput}>
                   <FileBase 
                   type="file"
                   multiple={false}
                   onDone={({base64}) => {(setPostData({ ...PostData, selectedFile: base64}))}}
                   />
               </div>
               <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth>Submit</Button>
               <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
           </form>
       </Paper>
    );
}

export default FormComponent;