import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DefaultImagePlaceholder = ({width = 150, height = 150}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={width}
      height={height}>
      <Path
        d="M10 11a3 3 0 00-3 3v22a3 3 0 003 3h30a3 3 0 003-3V14a3 3 0 00-3-3zm0 1h30a2 2 0 012 2v19.092l-8.53-7.67a3.502 3.502 0 00-4.687.006l-6.931 6.263-3.319-2.837a3.5 3.5 0 00-4.558.007L8 34.008V14a2 2 0 012-2zm6 5a3 3 0 100 6 3 3 0 000-6z"
        transform="scale(5.12)"
        fillOpacity={0.0902}
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      />
    </Svg>
  );
};
