import { prisma } from "@/services/database/client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { randomInt } from "crypto";

export default async function SelectedDojoPage({ params }) {
  const dojoData = await prisma.dojo.findFirst({
    where: {
      dojo_id: params.dojo,
    },
    include: {
      DojoMember: {
        take: 1,
        include: {
          member_user_id: true,
        },
      },
      dojo_category_id: true,
      Publication: {
        where: {
          publication_dojo: params.dojo,
        },
      },
    },
  });

  return (
    <>
      <div className="p-4 w-full">
        <div className=" bg-white  rounded-md shadow-md">
          <div className="relative flex gap-4 px-4">
            <div className="absolute top-0 left-4 -my-5 bg-black w-20 h-20"></div>
            <div className="w-20"></div>
            <div>
              <p className="text-2xl">
                {dojoData.DojoMember[0].member_user_id.user_name[0].toUpperCase() +
                  dojoData.DojoMember[0].member_user_id.user_name.slice(1)}
              </p>
              <p>
                <FontAwesomeIcon className="text-yellow-600" icon={faStar} />
                <span>{randomInt(5)}</span>
              </p>
            </div>
            <div className="self-center text-3xl">
              <p>{dojoData.dojo_name}</p>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="p-5">
            <p>
              {
                dojoData.Publication.find(
                  (e) =>
                    e.publication_member == dojoData.DojoMember[0].member_id
                ).publication_content
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
