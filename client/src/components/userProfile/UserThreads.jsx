import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';

import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    width: 500,
    height: 500,
    margin: 5,
    }, 
});

export default function UserThreads(props) {
    const { threads } = props;
    const { id } = useParams()
    const [ userThreads, setUserThreads ] = useState([]);

    useEffect(() => {
        setUserThreads(threads.filter(element => {return element.id === id}))
    }, [threads])

    const classes = useStyles();

    if (!threads) {
        return "Loading..."
    }

    return (
        <div>
            {userThreads?.sort((a, b) => b.createdAt- a.createdAt).map((thread, index) => {
                return (
                    <Card className={classes.root} key={index}>
                    <Link to={`/threads/${thread._id}`} style={{textDecoration:"none", color:"#000"}}>
                        <CardHeader
                        title={thread.title}
                        />
                        {thread?.imgUrl && <CardMedia
                        component="img"
                        alt={thread.title}
                        height="250"
                        image={thread.imgUrl}
                        />}
                        <Typography variant="body2" color="textSecondary" component="div">
                            {thread.body}
                        </Typography>
                        
                    </Link>
                    </Card>
            )})}
        </div>
    )
}
