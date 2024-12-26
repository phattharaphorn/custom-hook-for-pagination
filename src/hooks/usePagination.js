import { useState, useEffect } from 'react';

/**
 * Custom Hook สำหรับจัดการ Pagination และดึงข้อมูลจาก API
 * @param {string} apiUrl - URL ของ API ที่ใช้ดึงข้อมูล
 * @param {number} itemsPerPage - จำนวนรายการต่อหน้า
 */
const usePagination = (apiUrl, itemsPerPage) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // ตั้งค่าเริ่มต้นให้มี 10 หน้า
  const [error, setError] = useState(null);

  // ฟังก์ชันสำหรับดึงข้อมูลจาก API
  const fetchData = async () => {
    setLoading(true);
    try {
      // คำนวณหน้าที่จะดึง
      const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${itemsPerPage}`);
      const result = await response.json();
      setData(result.data); // สมมติว่า API คืนค่ามาใน `data`
      setTotalPages(10); // ตั้งค่าจำนวนหน้าสำหรับตัวอย่าง
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]); // เมื่อ currentPage เปลี่ยนจะดึงข้อมูลใหม่

  // ฟังก์ชันเปลี่ยนหน้า
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // ตรวจสอบว่าเลขหน้าถูกต้อง
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
