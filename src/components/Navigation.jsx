import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignSelf: 'flex-start',
                width: '100%',
            }}
        >
            <Link to={'/customers'} replace={true} style={{ padding: '10px' }}>
                Customers
            </Link>
            <Link to={'/trainings'} replace={true} style={{ padding: '10px' }}>
                Trainings
            </Link>
        </div>
    )
}
