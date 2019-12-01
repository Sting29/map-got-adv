import { number, string, shape, oneOf } from 'prop-types';

export const ShapeAdEvent = shape({
    coordinates: shape({
        x: number.isRequired,
        y: number.isRequired,
    }).isRequired,
    creative: shape({
        name: string.isRequired,
        url: string.isRequired,
    }).isRequired,
    timestamp: number.isRequired,
    type: oneOf(['VIDEO', 'IMAGE']).isRequired,
});