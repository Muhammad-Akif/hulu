import React from 'react'

const Results = ({ requests }) => {
    return (
        <div>
            {requests.map(result => (
                <Thumbnail/>
            ))}
        </div>
    )
}

export default Results