import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

const columns = [
    { field: 'activity', filter: true },
    { field: 'date', filter: true },
    { field: 'duration', headerName: 'Duration (min)', filter: true },
    {
        field: 'customer.firstname' + 'customer.lastname',
        headerName: 'Customer',
        filter: true,
    },
]

export const Trainings = () => {
    const [trainings, setTrainings] = useState([])

    const getTrainings = async () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(res => res.json())
            .then(
                async data =>
                    await Promise.all(
                        data.map(async training => ({
                            ...training,
                            date: `${new Date(
                                training.date
                            ).toLocaleDateString()} ${new Date(training.date)
                                .toLocaleTimeString()
                                .slice(0, -3)}`,
                        }))
                    )
            )
            .then(data => setTrainings(data))
    }

    useEffect(() => {
        getTrainings()
    }, [])

    return (
        <div
            className="ag-theme-material"
            style={{
                width: '70%',
                margin: 'auto',
                height: '700px',
            }}
        >
            <AgGridReact columnDefs={columns} rowData={trainings} />
        </div>
    )
}
