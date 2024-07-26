import type { FC } from "preact/compat";

const Card: FC<{ name: string; srcImg?: string; width?: number }> = ({
  name,
  srcImg,
  width,
}) => {
  return (
    <div class="flex items-center gap-2 p-6 bg-highlight rounded-sm min-w-full cursor-default hover:scale-105 hover:bg-secondary transition-all animate-[enter_1s]">
      {srcImg && (
        <img src={srcImg} alt={name} width={width || 30} height={30} />
      )}
      <p>{name}</p>
    </div>
  );
};

export default Card;
