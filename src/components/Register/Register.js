import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../../redux/action/registerAction';
import { useDispatch } from 'react-redux';
import './Register.scss';

Register.prototype = {
  fetchRegister: PropTypes.func,
};

export default function Register() {
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    country: '',
    password: '',
  });
  const dispatch = useDispatch();
  const onHandleChangeRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const { name, email, country, password } = userRegister;
    let data = {
      name,
      email,
      country,
      password,
    };
    if (name && email && country && password) {
      dispatch(fetchRegister(data));
    }
  };
  return (
    <div className='container-scroller'>
      <div className='container-fluid page-body-wrapper full-page-wrapper'>
        <div className='content-wrapper d-flex align-items-center auth px-0'>
          <div className='row w-100 mx-0'>
            <div className='col-lg-4 mx-auto'>
              <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
                <div className='brand-logo'>
                  <img src='../../images/logo.svg' alt='logo' />
                </div>
                <h4>New here?</h4>
                <h6 className='font-weight-light'>
                  Signing up is easy. It only takes a few steps
                </h6>
                <form className='pt-3' onSubmit={handleSubmitRegister}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      id='exampleInputUsername1'
                      placeholder='Username'
                      name='name'
                      onChange={onHandleChangeRegister}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control form-control-lg'
                      id='exampleInputEmail1'
                      placeholder='Email'
                      name='email'
                      onChange={onHandleChangeRegister}
                    />
                  </div>
                  <div className='form-group'>
                    <select
                      className='form-control form-control-lg'
                      id='exampleFormControlSelect2'
                      value={userRegister.country}
                      onChange={onHandleChangeRegister}
                      name='country'
                    >
                      <option value='Country'>Country</option>
                      <option value='United States of America'>
                        United States of America
                      </option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='India'>India</option>
                      <option value='Germany'>Germany</option>
                      <option value='Argentina'>Argentina</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control form-control-lg'
                      id='exampleInputPassword1'
                      placeholder='Password'
                      name='password'
                      onChange={onHandleChangeRegister}
                    />
                  </div>
                  <div className='mb-4'>
                    <div className='form-check'>
                      <label className='form-check-label text-muted'>
                        <input type='checkbox' className='form-check-input' />I
                        agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <button
                      className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                      type='submit'
                    >
                      SIGN UP
                    </button>
                  </div>
                  <div className='text-center mt-4 font-weight-light'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-primary'>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
