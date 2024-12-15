import { useState } from "react";
import "./cardsArea.css";
import ProductCard from "../DLC-card/DLC-card";
import { products } from "../../data/data,";

export default function CardsArea() {
  const itemsPerPage = 15; // 3 rows * 5 columns
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los productos que deben mostrarse en la página activa
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToRender = products.slice(startIndex, endIndex);

  // Manejar el cambio de página
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage * itemsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div id="cardsArea" >
        {productsToRender.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange("next")} disabled={currentPage * itemsPerPage >= products.length}>
          Next
        </button>
      </div>
    </div>
  );
}