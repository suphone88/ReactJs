import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleDivision } from "../actions";
//import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const SingleDivision = () => {
  const { id } = useParams();
  const singleDivision = useSelector((state) => state.dataDivision);
  const dispatch = useDispatch();
  console.log(singleDivision);

  useEffect(() => {
    dispatch(fetchSingleDivision(id));
  }, []);
  const singlePlace =
    singleDivision.famousplace > 0 &&
    singleDivision.famousplace.map((place) => (
      <p key={place._id}>
        {place.name} {place.about}
      </p>
    ));
  // const single = singleDivision.singleDivision.famousplace.map((cat) => (
  //   <p key={cat._id}>{cat.name}</p>
  // ));
  return (
    <>
      <h2> Division Details !!</h2>
      <Row key={singleDivision._id}>
        <Col span={24}>
          <h1>{singleDivision.singleDivision.division}</h1>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          {
            <img
              src={`http://localhost:3001/uploads/${singleDivision.singleDivision.image}`}
              className="img"
              alt={singleDivision.singleDivision.image}
            />
          }
        </Col>
        <Col span={16} className="">
          <h2> About </h2>
          <div>{singleDivision.singleDivision.body}</div>
          <h2>Famous Places</h2>
          {singlePlace}
        </Col>
      </Row>
    </>
  );
};

export default SingleDivision;
