import { createStitches } from '@stitches/react';

const stitches = createStitches({
    theme: {
        colors: {
            primary: 'red'
        }
    }
});

export const { styled } = stitches;