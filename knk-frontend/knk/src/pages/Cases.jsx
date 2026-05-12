import { useEffect, useState } from "react";
import API from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";

function Cases() {

  const [cases, setCases] = useState([]);

  const fetchCases = async () => {

  try {

    const res = await API.get("/cases");

    console.log(res.data);

    setCases(res.data.data);

  } catch (error) {

    console.log(error.response?.data);

  }

};

useEffect(() => {

  fetchCases();

}, []);
  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* PAGE HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            All Cases
          </h1>

          <p className="text-slate-500 mt-2">
            Home / Cases
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <div className="flex items-center gap-4">

            <input
              type="text"
              placeholder="Search by candidate or ref no..."
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 outline-none"
            />

            <select className="border border-slate-200 rounded-xl px-4 py-3 outline-none">
              <option>All Status</option>
              <option>NEW</option>
              <option>IN_PROGRESS</option>
              <option>DONE</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
              Search
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Cases List
          </h2>
         
          <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left border-b border-slate-200">

                <th className="pb-4">App ID</th>
                <th className="pb-4">Candidate</th>
                <th className="pb-4">City</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Assigned To</th>
                <th className="pb-4">Created</th>
                <th className="pb-4">Action</th>

              </tr>

            </thead>

                <tbody>

        {
          cases.map((item) => (

            <tr
              key={item._id}
              className="border-b border-slate-100"
            >

              <td className="py-5 font-medium text-slate-700">
                {item.comp_ref_no}
              </td>

              <td className="text-slate-700">
                {item.candidate_name}
              </td>

              <td className="text-slate-600">
                {item.city}
              </td>

              <td>

                <span className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                ">

                  {item.check_status}

                </span>

              </td>

              <td className="text-slate-600">

                {
                  item.assignedTo?.name || "Unassigned"
                }

              </td>

              <td className="text-slate-600">

                {
                  new Date(item.createdAt)
                    .toLocaleDateString()
                }

              </td>

              <td>

                <Link
            to={`/cases/${item._id}`}
            className="border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50"
          >
            View
          </Link>

              </td>

            </tr>

          ))
        }

      </tbody>
   </table>
   </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Cases;