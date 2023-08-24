import { buildGPX, BaseBuilder } from "gpx-builder";

const { Point } = BaseBuilder.MODELS;

export const generatePoints = (formattedData: any) => {
  // @TODO: mock data points
  return [
    new Point(51.02832496166229, 15.515156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T17:29:35Z'),
    }),
    new Point(51.12832496166229, 15.615156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T18:39:35Z'),
    }),
    new Point(51.12832496166229, 15.615156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T19:39:35Z'),
    }),

    new Point(51.12832496166229, 15.615156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T20:39:35Z'),
    }),

    new Point(51.12832496166229, 15.615156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T21:39:35Z'),
    }),

    new Point(51.12832496166229, 16.615156626701355, {
      ele: 314.715,
      time: new Date('2018-06-10T22:39:35Z'),
    }),
  ];
};

export const generateGPX = (formattedData: any) => {
  const gpxData = new BaseBuilder();
  const points = generatePoints(formattedData);

  gpxData.setSegmentPoints(points);

  try {
    return buildGPX(gpxData.toObject());
  } catch (error) {
    console.log(error);
  }

  return null;
};
