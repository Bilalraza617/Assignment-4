import { bloog } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
const BlogCards = ({ bloogs }: { bloogs: bloog }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={`/bloogs/${bloogs.image}`}
          width={400}
          height={100}
          alt="Grand Conference Hall"
          className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{bloogs.title}</h4>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Author : </span>
            {bloogs.author.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Category : </span>
            {bloogs.categories.map((item, i) => (
              <span key={i}>@{item} </span>
            ))}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Tags : </span>
            {bloogs.tags.map((item, i) => (
              <span className="text-blue-700" key={i}>
                #{item}{" "}
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">
              {" "}
              Publish : {bloogs.date_published}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/bloog/${bloogs.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
          View Blog All details
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
