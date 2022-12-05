import {FC, ReactNode} from "react";
import styles from "./NavLink.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import {isEqualStartPathNames} from "../../helpers/paths.helper";


interface NavLinkProps {
    href: string,
    children?: ReactNode,
    className?: string,
    activeClassName?: string
    exact?: boolean
}

const NavLink: FC<NavLinkProps> = (
    {
        href,
        children,
        className,
        exact,
        activeClassName
    }) => {
    const {asPath} = useRouter();
    let isActive = false;

    if (exact) {
        if (asPath === href) isActive = true;
    } else {
        isActive = isEqualStartPathNames(href, asPath);
    }

    if (isActive) return (
        <div style={{cursor: "pointer"}} className={`${className} ${activeClassName}`}>{children}</div>
    );

    return (
        <Link href={href}>
            <div style={{cursor: "pointer"}} className={className}>{children}</div>
        </Link>
    );
}

export default NavLink;