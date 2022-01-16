import { Button, Card } from "react-bootstrap";
// import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("/orders").then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
    // console.log(order);
  }, []);

  function DeleteItem(id) {
    // e.preventDefault();
    // console.log("test button" + id);
    axios.delete(`/${id}/delete`).then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
  }

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Order ID ", width: 150 },
    { field: "col2", headerName: "items ", width: 150 },
    { field: "col3", headerName: " User Id ", width: 150 },
    { field: "col4", headerName: " Date ", width: 150 },
    { field: "col5", headerName: " quantity ", width: 150 },
    { field: "col6", headerName: " Total ", width: 150 },
  ];

  const rows: GridRowsProp = order.map((item, i) => {
    console.log("console Cart ====>   ", item);

    return {
      id: i,
      col1: item._id,
      col2: item.cart[0].items.brand,
      col3: item.userId,
      col4: "date",
      col5: item.cart[0].quantity,
      col6: item.total,
    };
  });

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Orders</h3>
      <div style={{ height: 500, width: "70%", marginLeft: "15%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Order;
