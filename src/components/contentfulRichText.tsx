import * as React from 'react';
import {
  BLOCKS,
  //, MARKS, Document, Block
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';

type Props = {
  document: {
    nodeType: BLOCKS.DOCUMENT;
    content: any[];
    data: any;
  };
  className: string;
};

function getObjectKeyArray(obj: any): string[] {
  if (typeof obj !== 'object') return [];
  const arr: string[] = [];
  for (const key in obj) {
    arr.push(key);
  }
  return arr;
}

const ContentfulRichText: React.FC<Props> = ({ document, className }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (!node.data.target.fields) return;
        const { file, description } = node.data.target.fields;
        const locales = getObjectKeyArray(file);
        return locales.map(locale => (
          <img
            src={file[locale].url}
            alt={description[locale]}
            data-locale={locale}
            key={locale}
          />
        ));
      },
    },
  };
  return <div className={className}>{documentToReactComponents(document, options)}</div>;
};
export default ContentfulRichText;
