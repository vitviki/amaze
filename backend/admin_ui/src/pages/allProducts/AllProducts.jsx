import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import {
  HeaderCellSelect,
  CellSelect,
  useRowSelect,
} from "@table-library/react-table-library/select";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTheme } from "@table-library/react-table-library/theme";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { AddProduct } from "../../components";
import "./allProducts.css";

const ProductsTable = ({
  searchTermProductName,
  searchTermCategoryName,
  searchTermBrandName,
}) => {
  const [allProducts, setAllProducts] = useState([]);

  async function getAllProducts() {
    try {
      const products = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products/getAllProducts`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((products) => products.products);

      setAllProducts(products);
    } catch (error) {
      console.log(error);
    }
  }

  if (allProducts.length === 0) {
    getAllProducts();
  }

  const data = {
    nodes: allProducts.filter((item) => {
      return (
        item.title
          .toLowerCase()
          .includes(searchTermProductName.toLowerCase()) &&
        item.category
          .toLowerCase()
          .includes(searchTermCategoryName.toLowerCase()) &&
        item.brand.toLowerCase().includes(searchTermBrandName.toLowerCase())
      );
    }),
  };
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns:  44px repeat(6, minmax(0, 1fr));
        `,
    },
  ]);

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  return (
    <Table
      data={data}
      theme={theme}
      layout={{ custom: true }}
      select={select}
      id="table"
    >
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Image</HeaderCell>
              <HeaderCell>Title</HeaderCell>
              <HeaderCell>Category</HeaderCell>
              <HeaderCell>Brand</HeaderCell>
              <HeaderCell>Price</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item._id} item={item}>
                <CellSelect item={item} />
                <Cell>{item._id}</Cell>
                <Cell>
                  <img src={item.images[0]} alt={item.title} />
                </Cell>
                <Cell className="item_title">{item.title}</Cell>
                <Cell>{item.category.toUpperCase()}</Cell>
                <Cell>{item.brand.toUpperCase()}</Cell>
                <Cell>₹{item.price}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

const AllProducts = () => {
  const [searchByProductName, setSearchByProductName] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByBrand, setSearchByBrand] = useState("");
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div className="allProducts">
      {addProduct && <AddProduct setAddProduct={setAddProduct} />}
      <div className="topbar">
        <h2>All products</h2>
        <div className="inputs">
          <input
            type="text"
            placeholder="Search by title"
            value={searchByProductName}
            onChange={(e) => setSearchByProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by category"
            value={searchByCategory}
            onChange={(e) => setSearchByCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by brand"
            value={searchByBrand}
            onChange={(e) => setSearchByBrand(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button title="Add a new product" onClick={() => setAddProduct(true)}>
            <FaPlus />
            <span>Add</span>
          </button>
          <button title="Remove product(s)">
            <FaMinus />
            <span>Remove</span>
          </button>
        </div>
      </div>
      <ProductsTable
        searchTermProductName={searchByProductName}
        searchTermCategoryName={searchByCategory}
        searchTermBrandName={searchByBrand}
      />
    </div>
  );
};

export default AllProducts;
