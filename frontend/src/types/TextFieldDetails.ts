export type TextFieldDetails = {
    label: string;
    textFieldType: string;
    name: string;
    value?: string | number;
    placeHolderText: string;
    defaultValue?: string
    focused?: boolean
    readOnly?:boolean
  };