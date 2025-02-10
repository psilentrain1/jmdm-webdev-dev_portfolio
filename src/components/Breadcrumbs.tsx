"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import React from "react";

type BreadcrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumbs({
  homeElement,
  separator = <span> | </span>,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
