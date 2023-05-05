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
          <div className="grid h-60 grid-cols-1 rounded-2 table-responsive">
            <table
              id="tblCartItems"
              className="table-auto cursor-pointer mb-5 border-collapse border border-slate-400"
            >
              <thead
                className="text-white rounded-[32px]"
                style={{ background: "#17377f" }}
              >
                <tr>
                  <th className="border border-slate-300">Car ID</th>
                  <th className="border border-slate-300">Reg No</th>
                  <th className="border border-slate-300">Brand</th>
                  <th className="border border-slate-300">Type</th>
                  <th className="border border-slate-300">Daily Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300">V001</td>
                  <td className="border border-slate-300">AAB-3580</td>
                  <td className="border border-slate-300">Toyota</td>
                  <td className="border border-slate-300">General</td>
                  <td className="border border-slate-300">2500</td>
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
