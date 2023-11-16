import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function EditForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Personal Information
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Use a permanent address where you can receive mail.
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="last-name"
              className="text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="mt-1 flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cover-photo"
              className="text-sm font-medium text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
