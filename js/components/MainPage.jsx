import { useEffect, useState } from "react";

export default function MainPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/records", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => setRecords(json.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const deleteRecord = async (e) => {
    e.preventDefault();

    console.log(e.target.id);
    const id = e.target.id;

    try {
      fetch(`/api/records?id=${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => {
          setRecords(records.filter((record) => record._id !== id));
        });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(records);

  return (
    <section className="bg-gray-100 min-h-screen">
      <nav class="bg-blue-700 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-700 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white rounded md:p-0 underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/insert"
                  class="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-gray-300"
                >
                  Insert tasks
                </a>
              </li>
              <li>
                <a
                  href="/insert"
                  class="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-gray-300"
                >
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="w-[500px] mx-auto text-center text-5xl font-bold text-blue-700 mt-8">
          Tasks
        </h1>
        <p className="w-[1000px] mx-auto text-center mt-4 text-2xl font-bold text-blue-700">
          This app helps you get things done
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {records.map((record) => (
            <div
              key={record._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow flex flex-col items-center"
            >
              <h3 className="mb-2 text-2xl font-bold text-blue-700">
                {record.title}
              </h3>
              <p className="font-normal text-black">{record.description}</p>

              <button
                type="button"
                onClick={deleteRecord}
                id={record._id}
                className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Mark as completed
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
