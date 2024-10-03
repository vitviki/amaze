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

const ProductsTable = ({ searchTerm }) => {
  const [allProducts, setAllProducts] = useState([]);

  async function getAllProducts() {
    try {
      const products = await fetch(
        "http://localhost:3000/api/products/getAllProducts",
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
    nodes: allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
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
              <HeaderCell>Price</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item._id} item={item}>
                <CellSelect item={item} />
                <Cell>{item._id}</Cell>
                <Cell>
                  <img src={item.image} alt={item.title} />
                </Cell>
                <Cell className="item_title">{item.title}</Cell>
                <Cell>{item.category}</Cell>
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
  const [search, setSearch] = useState("");
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div className="allProducts">
      {addProduct && <AddProduct setAddProduct={setAddProduct} />}
      <div className="topbar">
        <h2>All products</h2>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      <ProductsTable searchTerm={search} />
    </div>
  );
};

export default AllProducts;
