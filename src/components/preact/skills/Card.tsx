import type { FC } from "preact/compat";

const Card: FC<{ name: string; srcImg?: string; width?: number }> = ({
  name,
  srcImg,
  width,
}) => {
  return (
    <div class="flex items-center gap-2 py-3 pl-4 bg-highlight rounded-sm min-w-full cursor-default hover:animate-[shd_1s_ease-in-out]">
      {srcImg && (
        <img src={srcImg} alt={name} width={width || 25} height={25} />
      )}
      <p>{name}</p>
    </div>
  );
};

export default Card;
