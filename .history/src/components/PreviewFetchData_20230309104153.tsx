'use client';

import { usePreview } from '../../lib/sanity.preview';
import { query, FetchData } from '<div className="" />components/FetchData';

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query);
  return <DocumentsCount data={data} />;
}
