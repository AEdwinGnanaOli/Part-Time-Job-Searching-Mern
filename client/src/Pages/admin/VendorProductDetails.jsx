import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Container, Nav, Button, Table } from "react-bootstrap";
import axios from "axios";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "../admin/admin.css";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import Dashboard from "./Dashboard";
import debounce from "lodash.debounce";

function VendorProductDetails() {
  const [vendordata, setVendorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  // Fetch vendor data
  const fetchVendorData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8800/admin/vendorproductdetails");
      setVendorData(data.vendorDatas);
      setFilteredData(data.vendorDatas);
    } catch (err) {
      console.error("Error fetching vendor data:", err);
    }
  };

  useEffect(() => {
    fetchVendorData();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/admin/vendorproductdelete/${id}`);
      setFilteredData(filteredData.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting vendor product:", err);
    }
  };

  // Navigate to update page
  const handleUpdate = (id) => {
    sessionStorage.setItem("adminpid", id);
    navigate("/adminproductupdate");
  };

  // Search filter with debounce
  const handleSearch = useCallback(
    debounce((value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (!lowercasedValue) {
        setFilteredData(vendordata);
      } else {
        const filtered = vendordata.filter((item) =>
          item.shopname.toLowerCase().includes(lowercasedValue)
        );
        setFilteredData(filtered);
      }
    }, 300),
    [vendordata]
  );

  // Define table columns
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          width={150}
          height={100}
          src={row.image}
          alt="Vendor"
          className="vendor-p-img"
        />
      ),
    },
    { name: "Shop Name", selector: (row) => row.shopname, sortable: true },
    { name: "Email", selector: (row) => row.email },
    { name: "Phone", selector: (row) => row.shopmobilenumber },
    { name: "Address", selector: (row) => row.shopaddress },
    { name: "Work", selector: (row) => row.work },
    { name: "Salary", selector: (row) => row.price },
    { name: "Work Start Time", selector: (row) => row.starttime },
    { name: "Work End Time", selector: (row) => row.endtime },
    {
      name: "Action",
      cell: (row) => (
        <div className="admin-user-btns">
          <Button
            className="admin-edit-btn edit"
            variant="success"
            onClick={() => handleUpdate(row._id)}
          >
            <MdModeEdit className="admin-edit-icon" />
          </Button>
          <Button
            className="admin-edit-btn"
            variant="danger"
            onClick={() => handleDelete(row._id)}
          >
            <MdDelete className="admin-edit-icon" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Dashboard title="Shops">
      <div className="admin-body">
        <DataTable
          title="Vendor Product Details"
          columns={columns}
          data={filteredData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          highlightOnHover
          actions={
            <Button
              variant="success"
              className="m-3"
              onClick={() => navigate(`/vendorsignproduct`)}
            >
              Product Register
            </Button>
          }
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="admin-search-hover form-control"
              placeholder="Search here..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          }
        />
      </div>
    </Dashboard>
  );
}

export default VendorProductDetails;
