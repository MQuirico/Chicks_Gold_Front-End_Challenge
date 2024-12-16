import { useState } from "react";
import "./cardsArea.css";
import ProductCard from "../DLC-card/DLC-card";
import { useMediaQuery } from "@mui/material";
import { products } from "../../data/data,";

export default function CardsArea() {
  const isTablet = useMediaQuery("(min-width: 800px) and (max-width: 1200px)");
  const isPhone = useMediaQuery("(max-width: 700px)");
  let itemsPerPage;

if (isTablet) {
  itemsPerPage = 6;
} else if (isPhone) {
  itemsPerPage = 3;
} else {
  itemsPerPage = 15;
}
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToRender = products.slice(startIndex, endIndex);

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
      <div id="pagination">
        <button id="btnPrev" onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
          Previous
        </button>
        <span id="curPage">Page {currentPage}</span>
        <button id="btnNext" onClick={() => handlePageChange("next")} disabled={currentPage * itemsPerPage >= products.length}>
          Next
        </button>
      </div>
    </div>
  );
}