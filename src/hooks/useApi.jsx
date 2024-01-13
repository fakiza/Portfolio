import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useApi = () => {
    const [projects,setProjects] = useState(null);
    const [technology,setTechnology] = useState(null);
    const [skills,setSkills] = useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(null);

    useEffect( ()=> {
        const fetchData = async () =>{
            try{
                const response = await axios.get('/db.json');
                setProjects(response.data.projects);
                setTechnology(response.data.technologies);
                setSkills(response.data.skills)
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();    
    }, []);

    return {projects,technology,skills,loading,error}

}

export default useApi;