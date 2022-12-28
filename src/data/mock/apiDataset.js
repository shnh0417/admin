export const loadImage = async () => {
   const res = await fetch(
      `https://pixabay.com/api/?key=31713838-bf0c00256e8b960dbd4bbbe2f&q=yellow+flowers&image_type=photo&pretty=true`
   );
   // console.log(await res.json());
   return {
      data: await res.json(),
   };
};

export const staticNaverMapApi = async () => {
   return await fetch(
      `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16`,
      {
         method: 'GET',
         crossorigin: true,
         mode: 'no-cors',
         headers: {
            'Content-Type': 'application/json',
            // 'X-NCP-APIGW-API-KEY-ID': 'ap3an7tzrq',
            // 'X-NCP-APIGW-API-KEY': 'Bg1IjN1iNnXZQgeJ5OnVyDooyHRFFtIfPlJcbSvw',
         },
      }
   );
};
