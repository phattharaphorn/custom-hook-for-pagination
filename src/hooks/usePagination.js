import { useState, useEffect } from 'react';
const usePagination = (apiUrl, itemsPerPage) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); 
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${itemsPerPage}`);
      const result = await response.json();
      setData(result.data); 
      setTotalPages(10); 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]); 
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return {
    data,
    loading,
    error,
    currentPage,
    totalPages,
    goToPage
  };
};

export default usePagination;
