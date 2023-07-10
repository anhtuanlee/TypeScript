import { Box } from "@mui/material";

interface WelcomeMessenger {
  position: string;
  countries?: string;
}

function WelcomeMessenger({
  position,
  countries = "Viet Nam",
}: WelcomeMessenger) {
  return (
    <Box mb={1}>
      Wellcom {position} from {countries}
    </Box>
  );
}

export default WelcomeMessenger;
