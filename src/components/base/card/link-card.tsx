import styles from "./link-card.module.css";
import { classNames } from "@/libs/utils/clsx";

type LinkCardProps = {
  className?: string;
  title: string;
  description?: string;
  href: string;
  external?: boolean;
}

export const LinkCard = ({
  className,
  title,
  description,
  href,
  external = false,
}: LinkCardProps) => {
  const externalProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  } satisfies React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

  return (
    <a
      href={href}
      className={classNames(styles.link, className)}
      {...(external ? externalProps : {})}
    >
      <div className={styles.content}>
        <h5>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};
