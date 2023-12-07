import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

const columns = [
    { field: 'firstname', filter: true },
    { field: 'lastname', filter: true },
    { field: 'phone', filter: true },
    { field: 'email', filter: true },
    { field: 'city', filter: true },
    { field: 'postcode', filter: true },
    { field: 'streetaddress', filter: true },
]

export const Customers = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = async () => {
        fetch('http://traineeapp.azurewebsites.net/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.content))
    }

    useEffect(() => {
        getCustomers()
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
            <AgGridReact columnDefs={columns} rowData={customers} />
        </div>
    )
}
