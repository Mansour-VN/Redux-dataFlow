import { parseISO, formatDistanceToNow } from "date-fns";

function TimeAgo({ timestamp }) {
  let TimeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    TimeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      {" "}
      &nbsp; <i>{TimeAgo}</i>
    </span>
  );
}

export default TimeAgo;
