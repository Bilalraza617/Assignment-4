import bloogs from "@/data/blogs.json";
import Image from "next/image";

export default function AllDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const bloog = bloogs.find((bloog) => bloog.id === id);
  console.log(bloog);

  return (
    <div>
      {bloog ? (
        <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <Image
              src={`/bloogs/${bloog.image}`}
              width={400}
              height={100}
              alt="Grand Conference Hall"
              className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
            />
            <div className="space-y-1">
              <h4 className="text-lg font-semibold">{bloog.title}</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  {" "}
                  Author : {bloog.author.name}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  Category :
                  {bloog.categories.map((cat, i) => (
                    <span key={i}>@{cat} </span>
                  ))}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  {" "}
                  Tags :{" "}
                  {bloog.tags.map((item, i) => (
                    <span className="text-blue-700" key={i}>
                      #{item}{" "}
                    </span>
                  ))}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  Publish : {bloog.date_published}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"></div>
        </div>
      ) : (
        <h1 className="flex items-center justify-center h-[80vh] text-2xl">
          Blog not found
        </h1>
      )}
    </div>
  );
}
