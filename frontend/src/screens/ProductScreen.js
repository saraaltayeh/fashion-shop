import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "../Components/Rating";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import  Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
    const params = useParams();
  const { slug } = params;

  const [{  loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Helmet>
            <title>{product.name}</title>
            </Helmet>
        <Row>
<Col md={6}>
<img className="large-img" src={product.image} alt={product.name}></img>
</Col>
<Col md={3}>
    <ListGroup variant="flush">
        <ListGroup.Item>
            <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            </ListGroup.Item>
            <ListGroup.Item>
              ${product.price}
        </ListGroup.Item>
        <ListGroup.Item>
            Description: <p>{product.description}</p>
        </ListGroup.Item>
    </ListGroup>
</Col>
<Col md={3}>
<ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col> ${product.price}</Col>
              </Row>
        </ListGroup.Item>
        <ListGroup.Item>
            <Row>
            <Col>Status:</Col>
            <Col>
{product.countInStock >0 ?
             (<Badge bg="success">In Stock</Badge>)
            :(<Badge bg="danger">Unavailable</Badge>)
            }
             </Col>
            </Row>
            </ListGroup.Item>
            {product.countInStock >0 && (
        <ListGroup.Item>
            <div className="d-grid">
                <Button variant="primary">Add To Cart</Button>
                </div>
        </ListGroup.Item>
            )}
    </ListGroup>
</Col>
        </Row>
        </div>
  )
  
}

export default ProductScreen;
