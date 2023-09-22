import React from 'react';
import { Row  , Col} from 'react-bootstrap';
const DatesAction = ({deletedates , rundates}) => {
  return (
    <div>
         <Row className="justify-content-center">
          <Col className="d-flex justify-content-between" sm="8">
        <button onClick={deletedates} className="btn-style py-2" >مسح الكل</button>
        <button onClick={rundates}className="btn-style py-2" >عرض البيانات</button>
          </Col>
        </Row>
    </div>
  );
}

export default DatesAction;
