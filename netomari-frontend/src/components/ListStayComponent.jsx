import React from 'react'

const ListStayComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "name": "Test"
        }
    ]
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
                        dummyData.map(stay =>
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