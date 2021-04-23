import app from "./app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
