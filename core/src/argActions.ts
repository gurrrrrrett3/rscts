export default {
  // commmands
  "start": {
    description: "Start the server",
    action: () => {

    },
  },

  "--debug": {
    description: "Enable debug mode",
    action: () => {
      process.env.DEBUG = "true";
    },
  },
} as const;
