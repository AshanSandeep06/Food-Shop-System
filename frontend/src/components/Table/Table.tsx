import React from "react";

type TableProps = {
  tblName: string;
  tblHeaders: string[];
  tblData: Array<string[]>;
};

const Table = (props: TableProps) => {
  const tblHaderStyles = `grid grid-cols-${props.tblHeaders.length} h-full`;

  return (
    <section id="tblContainer">
      <section
        className="flex flex-col h-50 bg-white shadow-lg items-center
        pt-3 px-3"
      >
        <h3
          className="text-center bg-[#0D6EFC] p-2 text-[rgb(248,249,250)] mb-2 rounded-[8px] w-full text-[24px]"
          style={{ fontWeight: "500", lineHeight: "28.8px" }}
        >
          {/* Your Items Cart */}
          {props.tblName}
        </h3>
        <div className="w-full pb-6 rounded-2 overflow-x-auto scroll-smooth">
          <table
            id="tblCartItems"
            className="table-fixed border-collapse grid grid-cols-1 h-[185px]"
          >
            <thead
              className="text-white grid grid-cols-1 h-[43px]"
              style={{
                background: "#17377f",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              <tr className={tblHaderStyles}>
                {props.tblHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="h-full border border-slate-300 flex justify-center items-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="cursor-pointer">
              {props.tblData.map((dataRow, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-5 !h-[60px]"
                  style={{ minHeight: "60px" }}
                >
                  {dataRow.map((data, index) => (
                    <td
                      key={index}
                      className="border border-slate-300 p-2 flex items-center justify-center"
                    >
                      {data}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Table;
