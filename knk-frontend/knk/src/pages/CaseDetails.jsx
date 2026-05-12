import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/axios";

function CaseDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [caseData, setCaseData] = useState(null);

  const [status, setStatus] = useState("");

  const [users, setUsers] = useState([]);

  const [assignedTo, setAssignedTo] = useState("");

 

  // FETCH CASE DETAILS
  const fetchCaseDetails = async () => {

    try {

      const res = await API.get(`/cases/${id}`);

      setCaseData(res.data.data);

      setStatus(res.data.data.check_status);
      

    //   setAssignedTo(res.data.data.assignedTo?._id || "");

    } catch (error) {

      console.log(error.response?.data);

    }

  };

  // FETCH USERS
  const fetchUsers = async () => {

    try {

      const res = await API.get("/auth/users");

      setUsers(res.data.data);

    } catch (error) {

      console.log(error.response?.data);

    }

  };

  // UPDATE STATUS
  const updateStatus = async () => {

  try {

    await API.put(`/cases/${id}/status`, {
      check_status: status,
    });

    alert("Status Updated");

    fetchCaseDetails();

  } catch (error) {

    console.log(error.response?.data);

  }

};
  // ASSIGN CASE
//   const assignCase = async () => {

//     try {

//       await API.put(`/cases/${id}/assign`, {
//         assignedTo,
//       });

//       alert("Case assigned successfully");

//       fetchCaseDetails();

//     } catch (error) {

//       console.log(error.response?.data);

//     }

//   };

  useEffect(() => {

    fetchCaseDetails();
    // fetchUsers();

  }, []);

  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>

          <h1 className="text-5xl font-bold text-slate-900">
            Case Details
          </h1>

          <p className="text-slate-500 mt-3">
            Home / Cases / Details
          </p>

        </div>

        {/* TOP BAR */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">

          <div className="flex items-center gap-4">

            <h2 className="text-2xl font-bold">
              {caseData?.comp_ref_no}
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              {caseData?.check_status}
            </span>

          </div>

          <button
            onClick={() => navigate("/cases")}
            className="border border-slate-200 px-5 py-2 rounded-xl"
          >
            Back
          </button>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-8 space-y-6">

            {/* Candidate Info */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">

              <h3 className="text-xl font-bold mb-6">
                Candidate Information
              </h3>

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-slate-400 text-sm">
                    Full Name
                  </p>

                  <h4 className="font-semibold text-lg">
                    {caseData?.candidate_name}
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    City
                  </p>

                  <h4 className="font-semibold text-lg">
                    {caseData?.city}
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Father Name
                  </p>

                  <h4 className="font-semibold text-lg">
                    {caseData?.father_name}
                  </h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    State
                  </p>

                  <h4 className="font-semibold text-lg">
                    {caseData?.state}
                  </h4>
                </div>

              </div>

            </div>

            {/* Internal Processing */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">

              <h3 className="text-xl font-bold mb-6">
                Internal Processing
              </h3>

              <div className="grid grid-cols-2 gap-5">

                <input
                  type="text"
                  value={caseData?.candidate_name || ""}
                  readOnly
                  className="border border-slate-200 rounded-xl px-4 py-3 bg-slate-50"
                />

                <input
                  type="text"
                  value={caseData?.father_name || ""}
                  readOnly
                  className="border border-slate-200 rounded-xl px-4 py-3 bg-slate-50"
                />

                <input
                  type="text"
                  value={caseData?.city || ""}
                  readOnly
                  className="border border-slate-200 rounded-xl px-4 py-3 bg-slate-50"
                />

                <input
                  type="text"
                  value={caseData?.state || ""}
                  readOnly
                  className="border border-slate-200 rounded-xl px-4 py-3 bg-slate-50"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">

            {/* STATUS */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">

              <h3 className="font-bold text-lg mb-5">
                Status Control
              </h3>

             <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            >
            <option value="NEW">NEW</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
            <option value="HOLD">HOLD</option>
            </select>

              <button
                onClick={updateStatus}
                className="w-full bg-blue-300 hover:bg-blue-400 text-white py-4 rounded-2xl font-semibold"
                >
                Update Status
                </button>

            </div>

            {/* ASSIGN CASE */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">

              <h3 className="font-bold text-lg mb-5">
                Assign Case
              </h3>

              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3"
              >

                <option value="">
                  Select Employee
                </option>

                {users.map((user) => (

                  <option
                    key={user._id}
                    value={user._id}
                  >
                    {user.email}
                  </option>

                ))}

              </select>

              <button
                className="border border-blue-500 text-blue-600 w-full py-3 rounded-xl mt-5 hover:bg-blue-50"
              >
                Assign Case
              </button>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default CaseDetails;