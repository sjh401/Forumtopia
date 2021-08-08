import { useState, useEffect } from 'react'
import { getThreads } from '../../services/thread'
import { useParams } from "react-router-dom"

export default function ThreadMapping(props) {
  const [threads, setThreads] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads(id);
      setThreads(data)
    }
    fetchThreads()

  }, [id])

    return (
      <>
      null
      </>
    )
  }

