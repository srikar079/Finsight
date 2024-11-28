import { useMemo, useState } from "react";
const UsePagination = (data, item) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(item || 10);
  const totalPages = data && Math.ceil(data?.length / itemsPerPage);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data?.slice(start, end);
  }, [data, currentPage, itemsPerPage]);
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };
  // Handle changing the page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return {
    goToPage,
    handleNextPage,
    handlePrevPage,
    currentData,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
  };
};

export default UsePagination;
