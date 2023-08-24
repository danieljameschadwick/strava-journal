import { NextResponse } from "next/server";
import mockData from "./mockData";
import { generateGPX } from "@journal/util/gpx/generateGPX";

// @TODO: add enum? or constant type?
type ParamsType = "gpx" | "tcx";

interface Params {
  type: ParamsType | null;
}

// @TODO: add typing for stream input, return
const formatStravaActivityStream = (activityStream: any): any => {
  return activityStream.reduce(
    (activityStream: any, item: { type: string; data: any; }) => Object.assign(activityStream, { [item.type]: item }),
    {},
  );
};

export async function GET(request: Request, context: { params: Params }) {
  // @TODO: replace gpx with enum from ParamsType
  const { type = "gpx" } = context.params || {};

  console.log(mockData);
  console.log(type);

  const formattedData = formatStravaActivityStream(mockData);
  const gpx = generateGPX(formattedData);

  console.log(gpx);

  const response = new Response(gpx);
  response.headers.set('Content-type', 'application/xml')

  return response;
};
