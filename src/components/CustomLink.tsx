import { ReactNode } from "react";
import Link from "next/link";

export default function CustomLink({
  href,
  className,
  data,
  text,
}: {
  href: string | undefined;
  className?: string;
  data?: string;
  text: string;
}): ReactNode {
  return (
    <Link href={href as string} className={className} data-testid={data} legacyBehavior>
      <a href={href as string}>{text}</a>
    </Link>
  );
}
