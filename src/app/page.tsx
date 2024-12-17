import {Spinner} from "@/components/Spinner";
import TableData from "@/components/TableData";
import Image from "next/image";
import Link from "next/link";
import {Suspense} from "react";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Next.js 14 Node Express MongoDB Create with Upload File and List all
          data | TailwindCSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/user/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <Suspense fallback={<Spinner />}>
          <TableData />
        </Suspense>
      </div>
    </div>
  );
}
