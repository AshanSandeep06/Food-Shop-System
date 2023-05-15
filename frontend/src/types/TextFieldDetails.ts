export type TextFieldDetails = {
    label: string;
    textFieldType: string;
    name: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeHolderText: string;
    defaultValue?: string
    focused?: boolean
    readOnly?:boolean
  };