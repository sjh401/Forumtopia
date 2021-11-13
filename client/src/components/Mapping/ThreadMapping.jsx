import { useState, useEffect } from 'react'

import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

import { getThreads } from '../../services/thread';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "50vmax",
        height: "50vmax",
        maxWidth: 500,
        maxHeight: 500,
        minWidth: 350,
        minHeight: 350,
        margin: 5,
        color: "#1c1c1c"
    }, 
});

export default function ThreadMapping(props) {
    const [threads, setThreads] = useState([])
    const classes = useStyles();


    useEffect(() => {
        const fetchThreads = async () => {
            let data = await getThreads();
            setThreads(data)
        }
        fetchThreads()
    }, [])


    if (!threads) {
        return "Loading..."
    }

    return (
        <div className="thread-mapping-div">
            {threads.sort((a, b) => b.createdAt- a.createdAt).map((thread, index) => {
                return (
                        <Card className={classes.root} key={index}>
                        <Link to={`/threads/${thread?._id}`} style={{textDecoration:"none", color:"#1c1c1c"}}>
                            <CardHeader
                            title={thread.title}
                            />
                            {thread?.imgUrl && <CardMedia
                            component="img"
                            alt={thread?.title}
                            height="250"
                            image={thread?.imgUrl}
                            />}
                            <Typography variant="body2" color="textSecondary" component="div">
                                {thread.body}
                            </Typography>
                            </Link>

                        </Card>
                    )
                })}
        </div>
    )
}

