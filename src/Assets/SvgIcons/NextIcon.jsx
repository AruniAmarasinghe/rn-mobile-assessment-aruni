import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const NextIcon = props => {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_237_16837)">
        <Rect
          x={4}
          y={2}
          width={56}
          height={56}
          rx={28}
          fill="#523AE4"
          shapeRendering="crispEdges"
        />
        <Path
          d="M26.918 20.87a1.264 1.264 0 000 1.803l7.46 7.33-7.459 7.328a1.262 1.262 0 001.768 1.802L38 30l-9.311-9.131a1.264 1.264 0 00-1.771 0z"
          fill="#FAFAFA"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
