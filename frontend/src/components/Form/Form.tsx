import { Button, TextField, createTheme } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextFieldDetails } from "../../types/TextFieldDetails";
import { ButtonDetails } from "../../types/ButtonDetails";
import "./Form.css";

type FormProps = {
  textFieldsArray: TextFieldDetails[];
  buttonsArray: ButtonDetails[];
};

const Form = (props: FormProps) => {
  return (
    <section className="pb-6 px-6 lg:px-12">
      <form className="grid grid-cols-1 lg:grid-cols-3 gap-6 !font-poppins">
        {props.textFieldsArray.map((textField, index) => (
          <TextField
            key={index}
            label={textField.label}
            type={textField.textFieldType}
            variant="outlined"
            name={textField.name}
            placeholder={textField.placeHolderText}
            required
            defaultValue={textField.defaultValue}
            value={textField.value}
            onChange={textField.onChange}
            focused={textField.focused}
            InputProps={{
              readOnly: textField.readOnly,
            }}
          />
        ))}

        {/* --------------------------------------------- */}

        {/* <TextField
          label="Your Name"
          type="text"
          variant="outlined"
          name="name"
          placeholder="Your Name"
          required
        />

        <TextField
          label="Contact Number"
          type="text"
          variant="outlined"
          name="contactNumber"
          placeholder="Contact Number"
          required
        />

        <TextField
          label="Address"
          type="text"
          variant="outlined"
          name="address"
          placeholder="Address"
          required
        /> */}

        <div className="lg:col-end-4 lg:col-span-2 flex md:justify-end items-center justify-center flex-wrap gap-5">
          {props.buttonsArray.map((button, index) => (
            <Button
              key={index}
              className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px]"
              variant="contained"
              color={button.color}
              endIcon={button.icon}
            >
              {button.text}
            </Button>
          ))}

          {/* --------------------------------------------- */}

          {/* <Button
            className="!px-[10px] !capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="error"
            endIcon={<DeleteIcon />}
          >
            Cancel Order
          </Button>

          <Button
            className="!capitalize !font-poppins !font-normal !text-[15px]"
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
          >
            Place Order
          </Button> */}
        </div>
      </form>
    </section>
  );
};

export default Form;
