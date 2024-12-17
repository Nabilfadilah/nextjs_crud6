"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface User {
  _id: string;
  name: string;
  email: string;
  photo?: string;
}

export default function TableData() {
  const [userData, setUSerData] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3001/");
      console.log(result.data);
      setUSerData(result.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table table-auto">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Photo</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((rs, index) => (
          <tr key={rs._id} className="bg-white border-b text-black">
            <td className="py-3 px-6">{index + 1}.</td>
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.email}</td>
            <td className="py-3 px-6">
              <Image
                src={`http://localhost:3001/static/images/${rs.photo}`}
                width={100}
                height={100}
                alt="Photo"
              />
            </td>
            <td className="flex justify-center gap-1 py-3">
              <Link href="#" className="btn btn-info">
                View
              </Link>
              <Link href="#" className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-secondary">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
