export const calculatePages = (currentPage: number, totalPages: number, limitPages: number): number[] => {
  const startPage = Math.max(0, currentPage - Math.floor(limitPages / 2));
  const endPage = Math.min(totalPages, startPage + limitPages);
  
  return Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
};
