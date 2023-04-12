import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const productId = params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  return <div>Cart</div>;
};

export default CartScreen;
