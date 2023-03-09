'use client';

import { usePreview } from '../../lib/sanity.preview';
import { query, Fetch } from 'components/DocumentsCount';

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query);
  return <DocumentsCount data={data} />;
}
