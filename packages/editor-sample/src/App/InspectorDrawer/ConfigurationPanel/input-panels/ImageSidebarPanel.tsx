import React, { useState } from 'react';

import {
  CloudUpload, Delete, Refresh,
  VerticalAlignBottomOutlined,
  VerticalAlignCenterOutlined,
  VerticalAlignTopOutlined,
} from '@mui/icons-material';
import { Button, Stack, ToggleButton } from '@mui/material';
import { ImageProps, ImagePropsSchema } from '@usewaypoint/block-image';

import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextDimensionInput from './helpers/inputs/TextDimensionInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';

type ImageSidebarPanelProps = {
  data: ImageProps;
  setData: (v: ImageProps) => void;
};
export default function ImageSidebarPanel({ data, setData }: ImageSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = ImagePropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Image block">


      {
        data.props?.url ? <>
            <div style={{
              position: 'relative',
            }}>
              <div style={{
                position: 'relative',
              }}>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                  src={data.props?.url ?? ''} alt={data.props?.alt ?? ''} />
              </div>
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: 10,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '8px',
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<Refresh />}
                  onClick={() => {

                  }}
                >
                  Change
                </Button>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<Delete />}
                  onClick={() => {
                    updateData({ ...data, props: { ...data.props, url: null } });
                  }}
                >
                  Delete
                </Button>
            </div>
          </div>
        </> :
        <>
          <Button
                  component="label"
                  role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
              >
              Upload file
            </Button>
        </>
      }


      <TextInput
        label="Source URL"
        defaultValue={data.props?.url ?? ''}
        onChange={(v) => {
          const url = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, url } });
        }}
      />

      <TextInput
        label="Alt text"
        defaultValue={data.props?.alt ?? ''}
        onChange={(alt) => updateData({ ...data, props: { ...data.props, alt } })}
      />
      <TextInput
        label="Click through URL"
        defaultValue={data.props?.linkHref ?? ''}
        onChange={(v) => {
          const linkHref = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, linkHref } });
        }}
      />
      <Stack direction="row" spacing={2}>
        <TextDimensionInput
          label="Width"
          defaultValue={data.props?.width}
          onChange={(width) => updateData({ ...data, props: { ...data.props, width } })}
        />
        <TextDimensionInput
          label="Height"
          defaultValue={data.props?.height}
          onChange={(height) => updateData({ ...data, props: { ...data.props, height } })}
        />
      </Stack>

      <RadioGroupInput
        label="Alignment"
        defaultValue={data.props?.contentAlignment ?? 'middle'}
        onChange={(contentAlignment) => updateData({ ...data, props: { ...data.props, contentAlignment } })}
      >
        <ToggleButton value="top">
          <VerticalAlignTopOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="middle">
          <VerticalAlignCenterOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="bottom">
          <VerticalAlignBottomOutlined fontSize="small" />
        </ToggleButton>
      </RadioGroupInput>

      <MultiStylePropertyPanel
        names={['backgroundColor', 'textAlign', 'padding']}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
