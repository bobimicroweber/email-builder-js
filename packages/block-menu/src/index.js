import React from 'react';
import { z } from 'zod';
const COLOR_SCHEMA = z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .nullable()
    .optional();
const PADDING_SCHEMA = z
    .object({
    top: z.number(),
    bottom: z.number(),
    right: z.number(),
    left: z.number(),
})
    .optional()
    .nullable();
const getPadding = (padding) => padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : undefined;
export const MenuPropsSchema = z.object({
    style: z
        .object({
        backgroundColor: COLOR_SCHEMA,
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: z
        .object({
        lineColor: COLOR_SCHEMA,
        lineHeight: z.number().optional().nullable(),
    })
        .optional()
        .nullable(),
});
export const MenuPropsDefaults = {
    lineHeight: 1,
    lineColor: '#333333',
};
export function Menu({ style, props }) {
    var _e, _z, _10;
    const st = {
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
        backgroundColor: (_e = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _e !== void 0 ? _e : undefined,
    };
    const borderTopWidth = (_z = props === null || props === void 0 ? void 0 : props.lineHeight) !== null && _z !== void 0 ? _z : MenuPropsDefaults.lineHeight;
    const borderTopColor = (_10 = props === null || props === void 0 ? void 0 : props.lineColor) !== null && _10 !== void 0 ? _10 : MenuPropsDefaults.lineColor;
    return (React.createElement("div", { style: st },
        React.createElement("hr", { style: {
                width: '100%',
                border: 'none',
                borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                margin: 0,
            } })));
}
//# sourceMappingURL=index.js.map