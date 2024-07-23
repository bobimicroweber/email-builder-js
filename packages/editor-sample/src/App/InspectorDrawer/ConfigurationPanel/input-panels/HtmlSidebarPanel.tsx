import React, { useState } from 'react';

import { Link } from '@mui/material';
import { HtmlProps, HtmlPropsSchema } from '@usewaypoint/block-html';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';

type HtmlSidebarPanelProps = {
  data: HtmlProps;
  setData: (v: HtmlProps) => void;
};
export default function HtmlSidebarPanel({ data, setData }: HtmlSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = HtmlPropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Html block">
      <div>
        Available variables: <br />
        &#123;&#123; name &#125;&#125;
        &#123;&#123; first_name &#125;&#125;
        &#123;&#123; last_name &#125;&#125;
        &#123;&#123; email &#125;&#125;
        &#123;&#123; site_url &#125;&#125;
        &#123;&#123; unsubscribe &#125;&#125;
      </div>
      <TextInput
        label="Content"
        rows={5}
        defaultValue={data.props?.contents ?? ''}
        onChange={(contents) => updateData({ ...data, props: { ...data.props, contents } })}
      />
      <MultiStylePropertyPanel
        names={['color', 'backgroundColor', 'fontFamily', 'fontSize', 'textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
