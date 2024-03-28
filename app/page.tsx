import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-black tracking-widest ">
        Data Table test
      </h1>
      <Link
        href={"/payments"}
        >
        <Button>
          Accès
        </Button>
      </Link>
    </div>
  );
}
