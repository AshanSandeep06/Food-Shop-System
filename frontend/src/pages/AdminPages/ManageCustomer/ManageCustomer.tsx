import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  createTheme,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React, { ChangeEvent, useEffect, useState } from "react";
import Form from "../../../components/Form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from "../../../components/Table";
import "./ManageCustomer.css";
import axios from "../../../axios";
import Swal from "sweetalert2";

const ManageCustomer = () => {
  const [searchCustomer, setSearchCustomer] = useState<string>("");
  const [customerID, setCustomerID] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [seletedType, setSelectedType] = useState<string>("");
  const [allCustomersList, setAllCustomersList] = useState<Array<string[]>>([]);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "Poppins",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    axios
      .get("customer")
      .then((res) => {
        let allCustomers: Array<string[]> = [];

        for (let i = 0; i < res.data.response.length; i++) {
          allCustomers.push([
            res.data.response[i].customerID,
            res.data.response[i].username,
            res.data.response[i].password,
            res.data.response[i].customerName,
            res.data.response[i].address,
            res.data.response[i].contactNumber,
            res.data.response[i].email,
          ]);
        }

        axios
          .get("user")
          .then((res) => {
            for (let i = 0; i < res.data.response.length; i++) {
              for (let j = 0; j < allCustomers.length; j++) {
                let customer = allCustomers[j];
                if (customer[0] == res.data.response[i].customerID) {
                  customer[1] = res.data.response[i].username;
                  customer[2] = res.data.response[i].password;
                }
              }
            }

            setAllCustomersList(allCustomers);
          })
          .catch(() => {});
      })
      .catch((error) => {
        alert("Error is : " + error);
      });
    handleClearFields();
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value as string);
  };

  const handleTableRowClick = (tableRow: Array<String | any>) => {
    console.log(tableRow);
    setCustomerID(tableRow[0]);
    setUsername(tableRow[1]);
    setPassword(tableRow[2]);
    setCustomerName(tableRow[3]);
    setAddress(tableRow[4]);
    setContactNumber(tableRow[5]);
    setEmail(tableRow[6]);
  };

  const handleClearFields = () => {
    setSearchCustomer("");
    setCustomerID("");
    setUsername("");
    setPassword("");
    setCustomerName("");
    setAddress("");
    setContactNumber("");
    setEmail("");
    setSelectedType("");
  };

  const handleSaveCustomer = () => {
    if (
      customerID &&
      username &&
      password &&
      customerName &&
      address &&
      contactNumber &&
      email
    ) {
      let newCustomer = {
        customerID: customerID,
        username: username,
        password: password,
        customerName: customerName,
        address: address,
        contactNumber: contactNumber,
        email: email,
        role: "Customer",
      };

      axios
        .post("customer", newCustomer)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          getAllCustomers();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
          getAllCustomers();
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Try again..",
        text: "Please input values to all input Fields",
      });
    }
  };

  const handleUpdateCustomer = () => {
    if (
      customerID &&
      username &&
      password &&
      customerName &&
      address &&
      contactNumber &&
      email
    ) {
      let newCustomer = {
        customerID: customerID,
        username: username,
        password: password,
        customerName: customerName,
        address: address,
        contactNumber: contactNumber,
        email: email,
        role: "Customer",
      };

      axios
        .put("customer", newCustomer)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          getAllCustomers();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
          getAllCustomers();
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Try again..",
        text: "Please input values to all input Fields",
      });
    }
  };

  const handleDeleteCustomer = () => {
    if (customerID) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do You Want to delete this Customer..",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("customer/" + customerID)
            .then((res) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              getAllCustomers();
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
              });
              getAllCustomers();
            });
        } else {
          getAllCustomers();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Try again..",
        text: "Please try again with giving Customer ID to Complete delete operation",
      });
    }
  };

  return (
    <section>
      <section>
        <div className="flex items-center">
          <h1 className="font-medium text-[22px]">Manage Customer</h1>
          <ManageAccountsIcon className="ml-[5px]" />
        </div>
      </section>

      <section className="mt-4 mb-7 gap-10 px-6 lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center flex-wrap">
        <div className="flex justify-center sm:justify-end items-center">
          <FormControl className="sm:w-full w-full md:w-full lg:w-3/4">
            <InputLabel id="demo-simple-select-label">Customer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Customer"
              className="!font-poppins"
              value={seletedType}
              onChange={handleChangeType}
            >
              {/* <MenuItem value={customerId}>Customer ID</MenuItem> */}
              <MenuItem className="!font-poppins" value={1}>
                Customer ID
              </MenuItem>
              <MenuItem className="!font-poppins" value={2}>
                Contact Number
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center items-center">
          <TextField
            id="txtSearchCustomer"
            className="w-full"
            label=""
            placeholder=""
            type="text"
            variant="outlined"
            value={searchCustomer}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchCustomer(event.target.value);
            }}
          />
        </div>

        <div className="md:flex sm:justify-start sm:col-start-3 sm:col-end-4 items-center grid col-start-1 col-end-2 justify-center">
          <Button
            className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="info"
            endIcon={<SearchIcon />}
          >
            Search Customer
          </Button>
        </div>
      </section>

      <section className="mb-5">
        <Form
          textFieldsArray={[
            {
              label: "Customer ID",
              textFieldType: "text",
              name: "customerId",
              placeHolderText: "Customer ID",
              value: customerID,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setCustomerID(event.target.value);
              },
            },
            {
              label: "Username",
              textFieldType: "text",
              name: "username",
              placeHolderText: "Username",
              value: username,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value);
              },
            },
            {
              label: "Password",
              textFieldType: "text",
              name: "password",
              placeHolderText: "Password",
              value: password,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              },
            },
            {
              label: "Name",
              textFieldType: "text",
              name: "name",
              placeHolderText: "Name",
              value: customerName,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setCustomerName(event.target.value);
              },
            },
            {
              label: "Address",
              textFieldType: "text",
              name: "address",
              placeHolderText: "Address",
              value: address,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setAddress(event.target.value);
              },
            },
            {
              label: "Contact Number",
              textFieldType: "text",
              name: "contactNumber",
              placeHolderText: "Contact Number",
              value: contactNumber,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setContactNumber(event.target.value);
              },
            },
            {
              label: "Email",
              textFieldType: "text",
              name: "email",
              placeHolderText: "Email",
              value: email,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              },
            },
          ]}
          buttonsArray={[
            {
              color: "success",
              icon: <AddCircleIcon />,
              text: "Save",
              onClick: handleSaveCustomer,
            },
            {
              color: "primary",
              icon: <AutorenewIcon />,
              text: "Update",
              onClick: handleUpdateCustomer,
            },
            {
              color: "error",
              icon: <DeleteIcon />,
              text: "Delete",
              onClick: handleDeleteCustomer,
            },
            {
              color: "warning",
              icon: <BackspaceIcon />,
              text: "Clear",
              onClick: handleClearFields,
            },
          ]}
        />
      </section>

      <section>
        <Table
          tblName="Manage Customer"
          tblHeight="auto"
          tblHeaders={[
            "Customer ID",
            "Username",
            "Password",
            "Name",
            "Address",
            "Contact",
            "Email",
          ]}
          tblData={allCustomersList.map((customerArray) => customerArray)}
          handleTblRowClick={handleTableRowClick}
        />
      </section>
    </section>
  );
};

export default ManageCustomer;
