import React, {useEffect, useState} from 'react'
import { listStays } from '../services/StayService'

const ListStayComponent = () => {

    const [stays, setStays] = useState([])

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
                    </tr>
                </thead>
                <tbody>
                    {
                        stays.map(stay =>
                            <tr key={stay.id}>
                                <td>{stay.id}</td>
                                <td>{stay.name}</td>
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