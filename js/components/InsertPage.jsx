export default function InsertPage() {
  const insertRecord = async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const data = { title: title, description: description };

    console.log(data);

    fetch("/api/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("A record has been uploaded");
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    });
  };

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
                  class="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-gray-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/insert"
                  class="block py-2 pl-3 pr-4 text-white rounded md:p-0 underline"
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
      <div className="container px-6 py-10 mx-auto flex flex-col items-center">
        <h1 className="w-[500px] mx-auto text-center text-5xl font-bold text-blue-700 mb-12 mt-8">
          Insert tasks
        </h1>

        <form className="w-2/4 border border-gray-200 rounded-xl shadow p-20 bg-white">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Task title
            </label>
            <input
              type="text"
              id="title"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Description"
              required
            />
          </div>
          <button
            type="submit"
            onClick={insertRecord}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
