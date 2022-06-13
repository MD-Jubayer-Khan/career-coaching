import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'400px'}} className="w-100 d-flex justify-content-center align-items-center">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{' '}
        </div>
    );
};

export default Loading;