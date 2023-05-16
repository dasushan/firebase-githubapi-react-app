import React, {useState, useEffect} from "react"
import Axios from "axios"
import { ListGroup, ListGroupItem} from "reactstrap"
import {toast} from "react-toastify"


const Repos = ({repos_url}) => {

    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {

      try{
        const {data} = await Axios.get(repos_url)
        setRepos(data)
        console.log({data})
      }  catch(error){
        toast("Not able to get repos",{type: "error"})
      }
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}



export default Repos