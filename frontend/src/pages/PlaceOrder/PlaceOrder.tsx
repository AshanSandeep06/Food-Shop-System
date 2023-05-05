import React from "react";

const PlaceOrder = () => {
  return (
    <section>
      {/* ----- Place Order Form ----- */}
      <section>
        <section
          className="flex flex-col h-50 bg-white shadow-lg items-center
        pt-3 px-3 mt-4"
        >
          <h3
            className="text-center bg-[#0D6EFC] p-2 text-[rgb(248,249,250)] mb-2 rounded-[8px] w-full !text-[24px]"
            style={{ fontWeight: "500", lineHeight: "28.8px" }}
          >
            Manage Vehicle
          </h3>
          <div className="w-full grid h-60 grid-cols-1 rounded-2 table-responsive">
            <table
              id="tblCartItems"
              className="table-auto mb-5 border-collapse border border-slate-400"
            >
              <thead
                className="text-white rounded-[32px]"
                style={{ background: "#17377f" }}
              >
                <tr>
                  <th className="border border-slate-300 leading-[38px]" style={{ lineHeight: "38px!important" }}>Car ID</th>
                  <th className="border border-slate-300" style={{ lineHeight: "38px!important" }}>Reg No</th>
                  <th className="border border-slate-300" style={{ lineHeight: "38px!important" }}>Brand</th>
                  <th className="border border-slate-300" style={{ lineHeight: "38px!important" }}>Type</th>
                  <th className="border border-slate-300" style={{ lineHeight: "38px!important" }}>Daily Rate</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                
                <tr>
                  <td className="border border-slate-300 p-2" style={{ lineHeight: "38px!important" }}>
                    V001
                  </td>
                  <td className="border border-slate-300 p-2" style={{ lineHeight: "38px!important" }}>
                    AAB-3580
                  </td>
                  <td className="border border-slate-300 p-2" style={{ lineHeight: "38px!important" }}>
                    Toyota
                  </td>
                  <td className="border border-slate-300 p-2"style={{ lineHeight: "38px!important" }}>
                    General
                  </td>
                  <td className="border border-slate-300 p-2"style={{ lineHeight: "38px!important" }}>
                    2500
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </section>

      {/* --------- Form --------- */}
      <section></section>
    </section>
  );
};

export default PlaceOrder;
