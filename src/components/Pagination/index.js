import React from 'react';

import { Pagination } from 'antd';

import { ContainerPagination } from './styles';

function PaginationComponent({ current, fetchMoreDataPetition, totalPages }) {

  const onChange = (value) => {
    fetchMoreDataPetition(value);
  }

  return (
    <ContainerPagination>
      <Pagination onChange={onChange} pageSize={2} current={current} total={totalPages} />
    </ContainerPagination>
  )
}

export default PaginationComponent;