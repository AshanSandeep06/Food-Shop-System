import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React from "react";
import Form from "../../components/Form";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteIcon from '@mui/icons-material/Delete';
import BackspaceIcon from '@mui/icons-material/Backspace';

const ManageCustomer = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  return (
    <section>
      <section>
        <div className="flex items-center">
          <h1 className="font-medium text-[22px]">Manage Customer</h1>
          <ManageAccountsIcon className="ml-[5px]" />
        </div>
      </section>

      <section className="my-6 gap-10 px-6 lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center flex-wrap">
        <div className="flex justify-center sm:justify-end items-center">
          <FormControl className="sm:w-full w-full md:w-full lg:w-3/4">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center items-center">
          <FormControl sx={{ m: 1 }} variant="standard" className="w-full">
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
        </div>

        <div className="md:flex sm:justify-start sm:col-start-3 sm:col-end-4 items-center grid col-start-1 col-end-2 justify-center">
          <Button
            className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
          >
            Search Customer
          </Button>
        </div>
      </section>

      <section>
        <Form
          textFieldsArray={[
            { label: "Customer ID", textFieldType: "text", name: "customerId", placeHolderText: "Customer ID" },
            { label: "Username", textFieldType: "text", name: "username", placeHolderText: "Username" },
            { label: "Password", textFieldType: "text", name: "password", placeHolderText: "Password" },
            { label: "Name", textFieldType: "text", name: "name", placeHolderText: "Name" },
            { label: "Address", textFieldType: "text", name: "address", placeHolderText: "Address" },
            { label: "Contact Number", textFieldType: "text", name: "contactNumber", placeHolderText: "Contact Number" },
            { label: "Email", textFieldType: "text", name: "email", placeHolderText: "Email" },
          ]}
          buttonsArray={[
            { color: "success", icon: <AddCircleIcon />, text: "Save" }
          ]}
        />
      </section>
    </section>
  );
};

export default ManageCustomer;
