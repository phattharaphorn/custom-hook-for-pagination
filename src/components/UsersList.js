import React from 'react';
import usePagination from '../hooks/usePagination';

const UsersList = () => {
  const { data, loading, error, currentPage, totalPages, goToPage } = usePagination(
    'https://api.zippopotam.us/us/33162', // API Free
    1 
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>{data?.fact}</p>

      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersList;
