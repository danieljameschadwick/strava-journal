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

  const formattedData = formatStravaActivityStream(mockData);
  // @TODO: factory driven by type e.g. GPX|TCX
  const gpx = generateGPX(formattedData);

  const response = new Response(gpx);
  response.headers.set('Content-type', 'application/xml')

  return response;
};
