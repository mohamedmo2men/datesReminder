import React from 'react';
import { Row  , Col} from 'react-bootstrap';

const DateCounter = ({persons}) => {
  return (
    <div>
       <Row className="justify-content-center ">
          <Col sm="8">
        لديك {persons.length} مواعيد اليوم
          
          
          </Col>
        </Row>
    </div>
  );
}

export default DateCounter;
