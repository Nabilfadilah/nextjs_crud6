"use client";

import axios from "axios";
import React, {useState} from "react";

const Page = () => {
  // State untuk menyimpan data user
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null); // State dengan tipe File atau null

  const onSubmitUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);

      // Periksa jika file ada sebelum diunggah
      if (file) {
        // agar tidak mengirim undefined ke backend jika file tidak dipilih.
        formData.append("file", file);
      }

      // Kirim request ke server
      const response = await axios.post(
        "http://localhost:3001/create",
        formData
      );
      console.log(response);
      window.location.href = "/";
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New User</h1>
      <form onSubmit={onSubmitUpload}>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-200">
            Upload File
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs text-white"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                // mencegah TypeScript error saat e.target.files[0] di-set ke state.
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
