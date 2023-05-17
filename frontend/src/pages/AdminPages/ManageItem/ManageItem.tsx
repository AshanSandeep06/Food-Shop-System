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
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Form from "../../../components/Form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from "../../../components/Table";
import "./ManageItem.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import iceCreamImg from "../../../assets/img/icecream-01.png";
import { motion } from "framer-motion";
import { read } from "fs";
import $, { event } from "jquery";
import axios from "../../../axios";
import { log } from "console";

const ManageItem = () => {
  // const itemImageRef = useRef<HTMLImageElement>(null);

  // Defines initial states(initial values)
  const [searchItem, setSearchItem] = useState<string>("");
  const [itemCode, setItemCode] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [unitPrice, setUnitPrice] = useState<string>("0.00");
  const [qtyOnHand, setQtyOnHand] = useState<number>(0.0);
  const [discount, setDiscount] = useState<number>(0.0);
  const [itemImage, setItemImage] = useState<string | null>(null);
  const [itemImageChooser, setItemImageChooser] = useState<string>("");

  // For file chooser
  const [fileData, setFileData] = useState<any>();

  const [seletedType, setSelectedType] = useState<string>("");
  const [itemType, setItemType] = useState<string>("");
  const [selectedItemType, setSelectedItemType] = useState<string>("");

  // For Load All Items
  const [allItemsList, setAllItemsList] = useState<Array<string[] | any[]>>([]);

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
    getAllItems();
  }, []);

  const getAllItems = () => {
    axios
      .get("item")
      .then((res) => {
        console.log(res.data.response);
        console.log(res.data.response.length);

        let allItems = [];
        let imagePath = "/img/uploads/itemImages/";

        // allItems = [
        //   [
        //     "I00-001",
        //     "Ice-Cream",
        //     <motion.img
        //       whileHover={{ scale: 1.1 }}
        //       whileTap={{ scale: 1.1 }}
        //       src={iceCreamImg}
        //       alt="foodImage"
        //       className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
        //     />,
        //     "Chocalate and Vanilla",
        //     350.0,
        //     50,
        //     0,
        //   ],

        //   [
        //     "I00-002",
        //     "Ice-Cream",
        //     <motion.img
        //       whileHover={{ scale: 1.1 }}
        //       whileTap={{ scale: 1.1 }}
        //       src={iceCreamImg}
        //       alt="foodImage"
        //       className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
        //     />,
        //     "Chocalate and Vanilla",
        //     350.0,
        //     50,
        //     0,
        //   ],
        // ];

        for (let i = 0; i < res.data.response.length; i++) {
          allItems.push([
            res.data.response[i].itemCode,
            res.data.response[i].itemType,
            res.data.response[i].itemName,
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              src={imagePath + res.data.response[i].itemImage}
              alt="foodImage"
              className="w-40 lg:w-40 h-40 object-contain cursor-pointer"
            />,
            res.data.response[i].description,
            res.data.response[i].unitPrice,
            res.data.response[i].qtyOnHand,
            // Discount
            0,
          ]);
        }

        setAllItemsList(allItems);
      })
      .catch((error) => {
        alert("Error is : " + error);
      });
    handleClearFields();
  };

  const handleSetItemImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // let file = e.target.files;
    // let reader = new FileReader();

    // if (FileReader && file && file.length) {
    //   reader.onload = function () {
    //     if (itemImageRef.current) {
    //       itemImageRef.current.setAttribute("src", String(reader.result));
    //     }
    //   };
    //   reader.readAsDataURL(file[0]);
    // } else {
    //   if (itemImageRef.current) {
    //     itemImageRef.current.setAttribute("src", "");
    //   }
    // }

    // ---------------------------------------------------

    setItemImageChooser(event.target.value);
    const file = event.target.files?.[0];
    setFileData(file);
    console.log(file);
    setItemImage((file && URL.createObjectURL(file)) || null);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value as string);
  };

  const handleChangeItemType = (event: SelectChangeEvent) => {
    setSelectedItemType(event.target.value as string);

    let selectedItemValue = Number(event.target.value);
    let itemType =
      selectedItemValue == 1
        ? "Chicken"
        : selectedItemValue == 2
        ? "Beverages"
        : selectedItemValue == 3
        ? "Fish"
        : selectedItemValue == 4
        ? "Rice"
        : selectedItemValue == 5
        ? "Burgers"
        : selectedItemValue == 6
        ? "Ice Cream"
        : "";
    setItemType(itemType);
  };

  // const imageURL = itemImage && URL.createObjectURL(itemImage);

  // For clear Item TextFields
  const handleClearFields = () => {
    setSearchItem("");
    setItemCode("");
    setItemName("");
    setDescription("");
    setUnitPrice("0.00");
    setQtyOnHand(0);
    setDiscount(0.0);
    setItemImage("");
    setItemImageChooser("");
    setFileData(null);
    setSelectedType("");
  };

  // Save Item
  const handleSaveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      itemType &&
      itemCode &&
      itemName &&
      description &&
      unitPrice &&
      qtyOnHand
    ) {
      let newItem = {
        itemCode: itemCode,
        itemType: itemType,
        itemName: itemName,
        description: description,
        itemImage: "",
        unitPrice: unitPrice,
        qtyOnHand: qtyOnHand,
      };

      axios
        .post("item", newItem)
        .then((res) => {
          console.log(res.data.message);
          uploadItemImage();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Item is not Saved");
      // console.log(itemCode+" "+itemName+" "+description+" "+unitPrice+" "+qtyOnHand+" "+itemImage+" "+itemImageChooser);
    }
  };

  const uploadItemImage = () => {
    if (fileData && itemImage) {
      const formData: FormData = new FormData();
      let itemImageName =
        itemCode + "_" + itemName + "-image." + fileData.name.split(".")[1];
      formData.append("itemImage", fileData, itemImageName);

      axios
        .put("item/saveItemImages/" + itemCode, formData)
        .then((res) => {
          console.log(res.data.message);
          getAllItems();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please select Item Image and try again..!");
    }
  };

  const handleTableRowClick = (tableRow: any) => {
    // Table Row Click
    console.log(tableRow);
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
              value={seletedType}
              onChange={handleChangeType}
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
          {/* <FormControl sx={{ m: 1 }} variant="standard" className="w-full">
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput
              id="demo-customized-textbox"
              style={{ fontFamily: "Poppins" }}
              name="searchItem"
              value={searchItem}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setSearchItem(event.target.value);
              }}
            />
          </FormControl> */}

          <TextField
            id="txtSearchItem"
            className="w-full"
            label=""
            placeholder=""
            type="text"
            variant="outlined"
            name={searchItem}
            value={searchItem}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchItem(event.target.value);
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
            Search Item
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 pb-6 px-6 lg:px-12 mb-1">
        <FormControl className="">
          <InputLabel id="demo-simple-select-label">
            Select Item Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="cmbItemType"
            label="Item"
            className="!font-poppins"
            value={selectedItemType}
            onChange={handleChangeItemType}
          >
            <MenuItem className="!font-poppins" value={1}>
              Chicken
            </MenuItem>
            <MenuItem className="!font-poppins" value={2}>
              Beverages
            </MenuItem>
            <MenuItem className="!font-poppins" value={3}>
              Fish
            </MenuItem>
            <MenuItem className="!font-poppins" value={4}>
              Rice
            </MenuItem>
            <MenuItem className="!font-poppins" value={5}>
              Burgers
            </MenuItem>
            <MenuItem className="!font-poppins" value={6}>
              Ice Cream
            </MenuItem>
          </Select>
        </FormControl>
      </section>

      <section>
        <Form
          textFieldsArray={[
            {
              label: "Item Code",
              textFieldType: "text",
              placeHolderText: "Item Code",
              name: "itemCode",
              value: itemCode,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setItemCode(event.target.value);
              },
            },
            {
              label: "Item Name",
              textFieldType: "text",
              placeHolderText: "Item Name",
              name: "itemName",
              value: itemName,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setItemName(event.target.value);
              },
            },
            {
              label: "Description",
              textFieldType: "text",
              placeHolderText: "Description",
              name: "description",
              value: description,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value);
              },
            },
            {
              label: "Unit Price",
              textFieldType: "text",
              placeHolderText: "Unit Price",
              name: "unitPrice",
              value: unitPrice,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                const { name, value, type } = event.target;
                let price = "0.00";

                if (name == "unitPrice" && isNaN(Number(value))) {
                  if (value == ".") {
                    price = Number(unitPrice) + value;
                    setUnitPrice(price);
                    return;
                  }

                  price = "0.00";
                  setUnitPrice(price);
                  console.log(value);
                  return;
                }

                if (name == "unitPrice" && parseFloat(value) < 0) {
                  return;
                }

                if (value == ".") {
                  price = unitPrice + value;
                } else {
                  price = value;
                }
                setUnitPrice(price);
              },
            },
            {
              label: "QtyOnHand",
              textFieldType: "number",
              placeHolderText: "QtyOnHand",
              name: "qtyOnHand",
              value: qtyOnHand,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                const { name, value, type } = event.target;
                if (name == "qtyOnHand" && isNaN(parseInt(value))) {
                  setQtyOnHand(0);
                  return;
                }

                if (name == "qtyOnHand" && parseInt(value) < 0) {
                  return;
                }
                setQtyOnHand(parseInt(value));
              },
            },
            {
              label: "Discount",
              textFieldType: "text",
              placeHolderText: "Discount",
              readOnly: true,
              name: "discount",
              value: discount,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setDiscount(Number(event.target.value));
              },
            },
          ]}
          buttonsArray={[]}
        />
      </section>

      <section className="mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-center">
        <div className="flex flex-col">
          <label className="mb-3 text-[17px]">Upload Item Image</label>
          {itemImage && (
            <img
              id="itemImage"
              src={itemImage}
              className="object-contain h-[319px]"
              alt="selectedImage"
              // ref={itemImageRef}
            />
          )}
          <TextField
            id="uploadItemImageChooser"
            type="file"
            variant="outlined"
            required
            className="!mt-7 !cursor-pointer !mb-5"
            name="itemImage"
            value={itemImageChooser}
            onChange={handleSetItemImage}
          />
        </div>

        <Form
          textFieldsArray={[]}
          buttonsArray={[
            {
              color: "success",
              icon: <AddCircleIcon />,
              text: "Save",
              onClick: handleSaveItem,
            },
            { color: "primary", icon: <AutorenewIcon />, text: "Update" },
            { color: "error", icon: <DeleteIcon />, text: "Delete" },
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
          tblName="Manage Item"
          tblHeight="auto"
          tblHeaders={[
            "Item Code",
            "Item Type",
            "Name",
            "View",
            "Description",
            "Unit Price",
            "QtyOnHand",
            "Discount",
          ]}
          tblData={allItemsList.map((itemArray) => itemArray)}
          handleTblRowClick={handleTableRowClick}
        />
      </section>
    </section>
  );
};

export default ManageItem;
