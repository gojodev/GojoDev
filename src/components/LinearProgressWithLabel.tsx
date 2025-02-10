import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          sx={{ color: "black", fontWeight: "bold" }}
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const start = new Date("2025-02-04T00:00:00Z").getTime();
  const end = new Date("2025-08-31T00:00:00Z").getTime();
  const now = new Date("2025-02-10T00:00:00Z").getTime();

  const progress = (((now - start) / (end - start)) * 100).toFixed(1);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={Number(progress)} />
    </Box>
  );
}
