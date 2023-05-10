import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createTheme,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useRef, useState } from "react";
import Form from "../../components/Form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from "../../components/Table";
import "./ManageItem.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import iceCreamImg from "../../assets/img/icecream-01.png";
import { motion } from "framer-motion";
import { read } from "fs";
import $ from "jquery";

const ManageItem = () => {
  const itemImageRef = useRef<HTMLImageElement>(null);

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

  const handleSetItemImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files;
    let reader = new FileReader();

    if (FileReader && file && file.length) {
      reader.onload = function () {
        if (itemImageRef.current) {
          itemImageRef.current.setAttribute("src", String(reader.result));
        }
      };
      reader.readAsDataURL(file[0]);
    } else {
      if (itemImageRef.current) {
        itemImageRef.current.setAttribute("src", "");
      }
    }
  };

  return (
    <section>
      <section>
        <div className="flex items-center">
          <h1 className="font-medium text-[22px]">Manage Item</h1>
          <FastfoodIcon className="ml-[6px] relative bottom-[2.5px]" />
        </div>
      </section>

      <section className="mt-4 mb-7 gap-10 px-6 lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center flex-wrap">
        <div className="flex justify-center sm:justify-end items-center">
          <FormControl className="sm:w-full w-full md:w-full lg:w-3/4">
            <InputLabel id="demo-simple-select-label">Item</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Item"
              className="!font-poppins"
            >
              {/* <MenuItem value={itemCode}>Customer ID</MenuItem> */}
              <MenuItem className="!font-poppins" value={1}>
                Item Code
              </MenuItem>
              <MenuItem className="!font-poppins" value={2}>
                Item Name
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center items-center">
          <FormControl sx={{ m: 1 }} variant="standard" className="w-full">
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput
              id="demo-customized-textbox"
              style={{ fontFamily: "Poppins" }}
            />
          </FormControl>
        </div>

        <div className="md:flex sm:justify-start sm:col-start-3 sm:col-end-4 items-center grid col-start-1 col-end-2 justify-center">
          <Button
            className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="info"
            endIcon={<SearchIcon />}
          >
            Search Item
          </Button>
        </div>
      </section>

      <section>
        <Form
          textFieldsArray={[
            {
              label: "Item Code",
              textFieldType: "text",
              name: "itemCode",
              placeHolderText: "Item Code",
            },
            {
              label: "Item Name",
              textFieldType: "text",
              name: "itemName",
              placeHolderText: "Item Name",
            },
            {
              label: "Description",
              textFieldType: "text",
              name: "description",
              placeHolderText: "Description",
            },
            {
              label: "Unit Price",
              textFieldType: "text",
              name: "unitPrice",
              placeHolderText: "Unit Price",
            },
            {
              label: "QtyOnHand",
              textFieldType: "number",
              name: "qtyOnHand",
              placeHolderText: "QtyOnHand",
              defaultValue: "0",
            },
          ]}
          buttonsArray={[]}
        />
      </section>

      <section className="mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-center">
        <div className="flex flex-col">
          <label className="mb-3 text-[17px]">Upload Item Image</label>
          <img
            id="itemImage"
            src={iceCreamImg}
            className="object-contain h-[319px]"
            ref={itemImageRef}
          />
          <TextField
            id="uploadItemImageChooser"
            type="file"
            variant="outlined"
            name="itemImageChooser"
            required
            className="!mt-7 !cursor-pointer"
            onChange={handleSetItemImage}
          />
        </div>

        <Form
          textFieldsArray={[]}
          buttonsArray={[
            { color: "success", icon: <AddCircleIcon />, text: "Save" },
            { color: "primary", icon: <AutorenewIcon />, text: "Update" },
            { color: "error", icon: <DeleteIcon />, text: "Delete" },
            { color: "warning", icon: <BackspaceIcon />, text: "Clear" },
          ]}
        />
      </section>

      <section>
        <Table
          tblName="Manage Item"
          tblHeight="auto"
          tblHeaders={[
            "Item Code",
            "Name",
            "View",
            "Description",
            "Unit Price",
            "QtyOnHand",
          ]}
          tblData={[
            [
              "I00-001",
              "Ice-Cream",
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                src={iceCreamImg}
                alt="foodImage"
                className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
              />,
              "Chocalate and Vanilla",
              350.0,
              50,
            ],

            [
              "I00-001",
              "Ice-Cream",
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                src={iceCreamImg}
                alt="foodImage"
                className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
              />,
              "Chocalate and Vanilla",
              350.0,
              50,
            ],
          ]}
        />
      </section>
    </section>
  );
};

export default ManageItem;
