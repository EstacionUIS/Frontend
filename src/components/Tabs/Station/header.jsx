import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Header({ station }) {
    // Function to determine badge color based on status
    const getStatusBadgeVariant = (status) => {
        switch (status) {
            case 'Online':
                return 'success';
            case 'Offline':
                return 'danger';
            case 'Test':
                return 'warning';
            default:
                return 'secondary';
        }
    };

    return (
        <div className="row mt-4">
            <div className="col-md-12 text-center">
                <div className="d-flex justify-content-center align-items-center">
                    <Badge bg={getStatusBadgeVariant(station.status)} className="me-3">
                        {station.id}
                    </Badge>
                    <h1>{station.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
