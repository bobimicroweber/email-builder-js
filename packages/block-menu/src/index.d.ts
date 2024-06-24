import React from 'react';
import { z } from 'zod';
export declare const MenuPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        padding: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            right: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        lineColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        lineColor?: string | null | undefined;
        lineHeight?: number | null | undefined;
    }, {
        lineColor?: string | null | undefined;
        lineHeight?: number | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        lineColor?: string | null | undefined;
        lineHeight?: number | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        lineColor?: string | null | undefined;
        lineHeight?: number | null | undefined;
    } | null | undefined;
}>;
export type MenuProps = z.infer<typeof MenuPropsSchema>;
export declare const MenuPropsDefaults: {
    lineHeight: number;
    lineColor: string;
};
export declare function Menu({ style, props }: MenuProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map