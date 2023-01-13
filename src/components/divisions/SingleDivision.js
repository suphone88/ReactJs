import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleDivision } from "../actions";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const SingleDivision = () => {
  const { id } = useParams();
  const singleDivision = useSelector(
    (state) => state.dataDivision.singleDivision
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleDivision(id));
  }, []);

  if (!singleDivision) {
    return "Loading ...";
  }

  return (
    <>
      <h2> Division Details !!</h2>
      <Row key={singleDivision._id}>
        <Col span={24}>
          <h1>{singleDivision.division}</h1>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          {
            <img
              src={`http://localhost:3001/uploads/${singleDivision.image}`}
              className="img"
              alt={singleDivision.image}
            />
          }
        </Col>
        <Col span={16} className="text">
          <h2> About </h2>
          <div>{singleDivision.body}</div>
          <h2>Famous Places</h2>
          {singleDivision.famousplace &&
            singleDivision.famousplace.map((singleplace) => (
              <div key={singleplace._id}>
                <Link to={`/famousplace/${singleplace._id}`}>
                  <p>
                    <strong>{singleplace.name}</strong>
                  </p>
                </Link>
                <p>{singleplace.about}</p>
              </div>
            ))}
        </Col>
      </Row>
    </>
  );
};

export default SingleDivision;
