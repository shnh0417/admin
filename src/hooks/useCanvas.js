import React, { useEffect, useRef } from 'react';

const useCanvas = (canvasWidth, canvasHeight, fillBackground) => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      const setCanvas = () => {
         const devicePixcelRatio = window.devicePixcelRatio ?? 1;
         if (canvas && ctx) {
            canvas.style.width = canvasWidth + 'px';
            canvas.style.height = canvasHeight + 'px';
            canvas.style.fillBackground = fillBackground ?? 'rgb(31,31,31)';

            canvas.width = canvasWidth * devicePixcelRatio;
            canvas.height = canvasHeight * devicePixcelRatio;

            ctx.scale(devicePixcelRatio, devicePixcelRatio);
         }
      };

      setCanvas();

      window.addEventListener('resize', setCanvas);

      return () => {
         window.removeEventListener('resize', setCanvas);
      };
   }, [canvasWidth, canvasHeight]);

   return canvasRef;
};

export default useCanvas;
