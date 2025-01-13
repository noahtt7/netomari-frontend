import React, {useEffect, useState} from 'react'
import { listStays } from '../services/StayService'

const ListStayComponent = () => {

    const [stays, setStays] = useState([])
    const imgMap = {
        1: "/images/3.png",
        2: "/images/117512902_p0_master1200.jpg",
        3: "images/91228ecbefc2e229ec8ae1116226059a.png"
    }

    useEffect(() => {
        listStays().then((response) => {
            setStays(response.data);
        }).catch(error => {
            console.error(error);
        })
    })

    return (
        <div className='container'>
            <h2>List of Stays</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Stay ID</th>
                        <th>Stay Name</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stays.map(stay =>
                            <tr key={stay.id}>
                                <td>{stay.id}</td>
                                <td>{stay.name}</td>
                                <td>
                                    <img src={ imgMap[stay.id] } alt="Logo" style={{width: '100px'}}/>
                                </td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListStayComponent