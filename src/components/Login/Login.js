import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/action/authAction';

Login.prototype = {
  fetchUser: PropTypes.func,
};

export default function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: user.username, password: user.password };
    dispatch(fetchUser(data));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
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
                <h4>Hello! let's get started</h4>
                <h6 className='font-weight-light'>Sign in to continue.</h6>
                <form className='pt-3' onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      id='exampleInputEmail1'
                      placeholder='Username'
                      name='username'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control form-control-lg'
                      id='exampleInputPassword1'
                      placeholder='Password'
                      name='password'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mt-3'>
                    <button
                      className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                      type='submit'
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className='my-2 d-flex justify-content-between align-items-center'>
                    <div className='form-check'>
                      <label className='form-check-label text-muted'>
                        <input type='checkbox' className='form-check-input' />
                        Keep me signed in
                      </label>
                    </div>
                    <a href='facebook' className='auth-link text-black'>
                      Forgot password?
                    </a>
                  </div>
                  <div className='mb-2'>
                    <button
                      type='button'
                      className='btn btn-block btn-facebook auth-form-btn'
                    >
                      <i className='ti-facebook mr-2'></i>Connect using facebook
                    </button>
                  </div>
                  <div className='text-center mt-4 font-weight-light'>
                    Don't have an account?
                    <Link to='/register' className='text-primary'>
                      Create
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
