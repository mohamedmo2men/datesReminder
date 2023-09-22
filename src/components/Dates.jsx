import React from 'react';
import { Row  , Col} from 'react-bootstrap';
const Dates = ({persons}) => {
  return (
    <div>
            <Row className="justify-content-center ">
          <Col sm="8">
        <div className="rect">
        {persons.length ? (
    persons.map(item => {
      return (
        <div key={item.id} className="d-flex p-2 border-bottom mx-3">
          <img className="img-avatar" src={item.img} alt="img" />
          <div className="px-3">
            <p className="d-inline fs-5">{item.name}</p>
            <p className="fs-6">{item.date}</p>
          </div>
        </div>
      );
    })
  ) : <h3 className="p-5 text-center" >لا يوجد مواعيد اليوم </h3>}

          

        </div>
          
          
          </Col>
        </Row>
    </div>
  );
}

export default Dates;
