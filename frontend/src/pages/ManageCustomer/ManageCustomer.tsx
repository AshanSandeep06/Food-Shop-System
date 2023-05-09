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

      <section className="my-6 border-2 border-red-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
        <div className="border border-blue-800 flex justify-end items-center">
          <FormControl className="w-1/2">
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

        <div className="border border-blue-700 flex justify-center items-center">
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
        </div>

        <div className="border border-blue-700 flex justify-start items-center">
          <Button
            className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="primary"
            endIcon={<SearchIcon className="relative top-[1px]" />}
          >
            Search Customer
          </Button>
        </div>
      </section>
    </section>
  );
};

export default ManageCustomer;
