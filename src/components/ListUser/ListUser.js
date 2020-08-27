import React from 'react';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';
export default function ListUser() {
  return (
    <div className='container-scroller'>
      <Title />
      <div className='container-fluid page-body-wrapper'>
        <SideBar />
        <div className='main-panel'>
          <div className='content-wrapper'>
            <div className='row'>
              <Table />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
