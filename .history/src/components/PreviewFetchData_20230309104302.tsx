'use client';

import { usePreview } from '../../lib/sanity.preview';
import { query } from 'components/FetchData';
import FetchData from 'F'

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query);
  return <FetchData data={data} />;
}
