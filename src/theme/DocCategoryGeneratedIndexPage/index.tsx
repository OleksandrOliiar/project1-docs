import React from "react";
import {
  PageMetadata,
  useCurrentSidebarCategory,
} from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import DocCardList from "@theme/DocCardList";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import Heading from "@theme/Heading";
import type { Props } from "@theme/DocCategoryGeneratedIndexPage";

import styles from "./styles.module.css";

function DocCategoryGeneratedIndexPageMetadata({
  categoryGeneratedIndex,
}: Props): JSX.Element {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({
  categoryGeneratedIndex,
}: Props): JSX.Element {
  const category = useCurrentSidebarCategory();
  const subLabel = category?.customProps?.subLabel as string | undefined;

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className={styles.title}>
          {categoryGeneratedIndex.title}
        </Heading>
        {subLabel && (
          <Heading as="h2" className={styles.subTitle}>
            {subLabel}
          </Heading>
        )}
        {categoryGeneratedIndex.description && (
          <p className="body-default">{categoryGeneratedIndex.description}</p>
        )}
      </header>
      <article className="margin-top--lg">
        <DocCardList items={category.items} className={styles.list} />
      </article>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(
  props: Props
): JSX.Element {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
