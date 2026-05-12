import DashboardLayout from "../layouts/DashboardLayout";
import { useParams } from "react-router-dom";

function CaseDetails() {

  const { id } = useParams();

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
              REF-2026-001001
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              New
            </span>

          </div>

          <button className="border border-slate-200 px-5 py-2 rounded-xl">
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
                  <p className="text-slate-400 text-sm">Full Name</p>
                  <h4 className="font-semibold text-lg">Raju Gupta</h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">City</p>
                  <h4 className="font-semibold text-lg">Mumbai</h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Father Name</p>
                  <h4 className="font-semibold text-lg">Javaraiah</h4>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">State</p>
                  <h4 className="font-semibold text-lg">Maharashtra</h4>
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
                  placeholder="Candidate Name"
                  className="border border-slate-200 rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="Father Name"
                  className="border border-slate-200 rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="border border-slate-200 rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="border border-slate-200 rounded-xl px-4 py-3"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">

            {/* Status */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">

              <h3 className="font-bold text-lg mb-5">
                Status Control
              </h3>

              <select className="w-full border border-slate-200 rounded-xl px-4 py-3">

                <option>NEW</option>
                <option>IN_PROGRESS</option>
                <option>DONE</option>

              </select>

              <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-xl mt-5">
                Update Status
              </button>

            </div>

            {/* Assign */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">

              <h3 className="font-bold text-lg mb-5">
                Assign Case
              </h3>

              <select className="w-full border border-slate-200 rounded-xl px-4 py-3">

                <option>Select Employee</option>

              </select>

              <button className="border border-blue-500 text-blue-600 w-full py-3 rounded-xl mt-5">
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