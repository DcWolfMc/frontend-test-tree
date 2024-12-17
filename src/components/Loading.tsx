import Image from "next/image";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative hidden lg:flex min-w-[100px] aspect-square h-auto">
        <Image
          src={"/circular-spinner.png"}
          alt="credit card front image"
          fill
          className="animate-spinReverse"
        />
      </div>
    </div>
  );
};
