import { useState } from "react";
import "./styles.css";

function Pagination({ itens, itensPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(itens.length / itensPerPage);

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = (currentPage - 1) * itensPerPage;
  const currentItens = itens.slice(indexOfFirstItem, indexOfLastItem);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="itens__grid">
        {currentItens.map((product) => (
          <div className="item" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <span>{product.title}</span>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          ⏮️
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              color: index + 1 === currentPage ? "blue" : "#000",
              margin: "0 5px",
            }}
          >
            {index + 1}
          </span>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          ⏩
        </button>
      </div>
    </>
  );
}

export default Pagination;
