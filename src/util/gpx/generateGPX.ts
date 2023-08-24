import { buildGPX, BaseBuilder } from "gpx-builder";

const { Point } = BaseBuilder.MODELS;

export const generatePoints = (formattedData: any) => {
  const points = [];

  // new Point(51.02832496166229, 15.515156626701355, {
  //   ele: 314.715,
  //   time: new Date('2018-06-10T17:29:35Z'),
  // }),

  const date = new Date();

  for (const [key, latLng] of Object.entries(formattedData.latlng.data)) {
    // @TODO: debug
    console.log(key);
    console.log(latLng);

    const [lat, lng] = latLng;
    const dateTime = new Date(date.getTime() + formattedData.time.data[key] * 60000);
    // const altitude = formattedData.altitude.data[key];

    // @TODO: debug
    console.log(dateTime);

    const point = new Point(lat, lng, {
      time: dateTime,
    });

    points.push(point);
  }

  return points;
};

export const generateGPX = (formattedData: any) => {
  const gpxData = new BaseBuilder();
  const points = generatePoints(formattedData);

  gpxData.setSegmentPoints(points);

  try {
    return buildGPX(gpxData.toObject());
  } catch (error) {
    // @TODO: error handling for bad data?
    console.log(error);
  }

  return null;
};
