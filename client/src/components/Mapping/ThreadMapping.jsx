import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { getCategories } from '../../services/category'
import { getThreads } from '../../services/thread';

const useStyles = makeStyles({
    root: {
    width: 245,
    height: 245,
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

    console.log(threads)
    
    if (!threads) {
        return "Loading..."
    }

    return (
        <div className="thread-mapping-div">
            {threads.map((thread, index) => {
                return (
                        <Card className={classes.root}>
                        <Link to={`/threads/${thread?._id}`} style={{textDecoration:"none", color:"#000"}}>
                            <CardHeader
                            title={thread?.title}
                            />
                            {thread?.imgUrl && <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={thread?.imgUrl}
                            />}</Link>
                        </Card>
                    )
                })}
        </div>
    )
}

