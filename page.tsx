import { ceritaitem } from "@/data/cerita";
import Image from "next/image";

type Params = Promise<{
    id: string;
}>;

const ceritadetailpage = async ({ params }: { params: Params }) => {
    const resolvedParams = await params;

    const ceri = ceritaitem.find(
        (item) => item.id === parseInt(resolvedParams.id)
    );

    if (!ceri) {
        return (
            <div>cerita item not found.</div>
        );
    }

    return (
        <div className="px-5">
            <h1 className="text-center text-3xl font-bold">
                Experience
            </h1>
            <div className="flex justify-items-center px-10 gap-6 py-10 ">
                <Image
                    src={ceri.image}
                    alt="portofolio Image"
                    className="rounded-lg w-100 "
                    width={500}
                    height={300}
                />
                <p>{ceri.name}</p>
                <p>{ceri.isi}</p>
                
            </div>
        </div>
    );
};

export default ceritadetailpage;