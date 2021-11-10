import { useState, useEffect } from 'react'

import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

import { getThreads } from '../../services/thread';

const useStyles = makeStyles({
    root: {
    width: 500,
    height: 500,
    margin: 5,
    }, 
});

export default function ThreadMapping(props) {
    const [threads, setThreads] = useState([])

    useEffect(() => {
        const fetchThreads = async () => {
            let data = await getThreads();
            setThreads(data)
        }
        fetchThreads()
    }, [])

    const classes = useStyles();

    if (!threads) {
        return "Loading..."
    }

    return (
        <div className="thread-mapping-div">
            {threads.sort((a, b) => b.createdAt- a.createdAt).map((thread, index) => {
                return (
                        <Card className={classes.root} key={index}>
                        <Link to={`/threads/${thread?._id}`} style={{textDecoration:"none", color:"#000"}}>
                            <CardHeader
                            title={thread?.title}
                            />
                            {thread?.imgUrl && <CardMedia
                            component="img"
                            alt={thread?.title}
                            height="250"
                            image={thread?.imgUrl}
                            />}</Link>
                        </Card>
                    )
                })}
        </div>
    )
}

