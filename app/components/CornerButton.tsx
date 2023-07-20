/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function CornerButton({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <button
      className="flex overflow-hidden group relative w-40 justify-center items-center bg-light-secondary"
      corner-cut="bottom-right"
    >
      <img
        src="https://uploads-ssl.webflow.com/640333b292c9610b133ff0c5/642458cdf83a85d07cbbc791_corner_orange-tl.svg"
        loading="lazy"
        className="-top-10 group-hover:top-0 transition-all duration-200 left-0 absolute"
      />
      <a href={href} className="">
        {name}
      </a>
      <img
        src="https://uploads-ssl.webflow.com/640333b292c9610b133ff0c5/64034d54472efbbb59ea63cd_arrow-top_right.svg"
        loading="lazy"
        className="absolute right-4 bottom-4 group-hover:translate-x-4 transition-all duration-200 group-hover:-translate-y-8 group-hover:opacity-0 opacity-100"
      />
      <img
        src="https://uploads-ssl.webflow.com/640333b292c9610b133ff0c5/64034d54472efbbb59ea63cd_arrow-top_right.svg"
        loading="lazy"
        className="absolute -bottom-4 right-8 group-hover:translate-x-4 transition-all duration-200 group-hover:-translate-y-8"
      />
    </button>
  );
}
