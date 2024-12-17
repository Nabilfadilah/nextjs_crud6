import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New User</h1>
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs text-white"
              placeholder="Full Name..."
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs text-white"
              placeholder="Email..."
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-200">
              Upload File
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs text-white"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;

{
  /* <form>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full Name..."
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-900">
            Upload File
          </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="file-input file-input-bordered file-input-secondary w-full max-w-xs"/>
        </div>
         <button type="submit" className="btn btn-primary" onClick={e => onClick={e => onSubmitUpload(e)}>Add User</button> 
      </form> */
}
