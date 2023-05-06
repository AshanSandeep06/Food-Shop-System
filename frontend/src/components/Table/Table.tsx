import React from "react";

type TableProps = {};

const Table = (props: TableProps) => {
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
          Your Items Cart
        </h3>
        <div className="w-full pb-10 rounded-2 overflow-x-auto scroll-smooth">
          <table
            id="tblCartItems"
            className="table-fixed border-collapse grid grid-cols-1 h-[185px]"
          >
            <thead
              className="text-white grid grid-cols-1"
              style={{
                background: "#17377f",
                borderTopLeftRadius: "13px",
                borderTopRightRadius: "13px",
              }}
            >
              <tr className="grid grid-cols-5">
                <th
                  className="leading-[38px] flex justify-center items-center"
                  style={{ lineHeight: "38px!important" }}
                >
                  Car ID
                </th>
                <th
                  className="leading-[38px] border border-slate-300 flex justify-center items-center"
                  style={{ lineHeight: "38px!important" }}
                >
                  Reg No
                </th>
                <th
                  className="leading-[38px] border border-slate-300 flex justify-center items-center"
                  style={{ lineHeight: "38px!important" }}
                >
                  Brand
                </th>
                <th
                  className="leading-[38px] border border-slate-300 flex justify-center items-center"
                  style={{ lineHeight: "38px!important" }}
                >
                  Type
                </th>
                <th
                  className="leading-[38px] flex justify-center items-center"
                  style={{ lineHeight: "38px!important" }}
                >
                  Daily Rate
                </th>
              </tr>
            </thead>

            <tbody className="cursor-pointer">
              <tr
                className="grid grid-cols-5 !h-[60px]"
                style={{ minHeight: "60px" }}
              >
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  V001
                </td>
                <td className="border border-slate-300 p-2  flex items-center justify-center">
                  AAB-3580
                </td>
                <td className="border border-slate-300 p-2  flex items-center justify-center">
                  Toyota
                </td>
                <td className="border border-slate-300 p-2  flex items-center justify-center">
                  General
                </td>
                <td className="border border-slate-300 p-2  flex items-center justify-center">
                  2500
                </td>
              </tr>

              <tr
                className="grid grid-cols-5 !h-[60px]"
                style={{ minHeight: "60px" }}
              >
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  V001
                </td>
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  AAB-3580
                </td>
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  Toyota
                </td>
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  General
                </td>
                <td className="border border-slate-300 p-2 flex items-center justify-center">
                  2500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Table;
