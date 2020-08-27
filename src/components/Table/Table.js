import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../../redux/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';

Table.prototype = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchData: PropTypes.func,
};

export default function Table() {
  const member = useSelector((state) => state.auth.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFrirstProduct = indexOfLastProducts - productPerPage;

  const currentProducts = member
    ? member.slice(indexOfFrirstProduct, indexOfLastProducts)
    : '';

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <div className='col-lg-12 grid-margin stretch-card'>
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Avatar</th>
                    <th>First name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                  </tr>
                </thead>
                <tbody>
                  {member
                    ? currentProducts.map((items) => (
                        <tr key={items.id}>
                          <td className='py-1'>
                            <img src={items.avatar} alt='imageFromData' />
                          </td>
                          <td>{items.name}</td>
                          <td>{items.email}</td>
                          <td>{items.phone}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={member ? member.length : ''}
        paginate={paginate}
      />
    </React.Fragment>
  );
}
