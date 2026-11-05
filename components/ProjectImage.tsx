import Image from "next/image"; // Next.js image component (resizes and optimizes images for you)

type Props = { name: string; image: string };

export default function ProjectImage({ name, image }: Props) {
  return (
    // aspect-[16/10] = fixed shape, 16 wide by 10 tall. relative lets the image fill this box.
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-panel">
      {image ? (
        // Real screenshot. object-top keeps the top of the page visible when it gets cropped.
        <Image
          src={image}
          alt={`${name} screenshot`}
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover object-top"
        />
      ) : (
        // Placeholder shown until u add a screenshot
        <div className="flex h-full flex-col items-center justify-center gap-1 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>Screenshot</span>
          <span className="text-bone/60">{name}</span>
        </div>
      )}
    </div>
  );
}