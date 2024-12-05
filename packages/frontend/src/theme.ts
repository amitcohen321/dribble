import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Define your custom color palette
    darkPurple: [
      "#f2e7fe", // Lighter shade
      "#dbb4ff", // Light
      "#c08cff", // Medium light
      "#9a5eff", // Main (slightly dark purple)
      "#7938cc", // Dark
      "#5c28a0", // Darker
      "#3f1b70", // Almost black purple
      "#29114e", // Deep dark purple
      "#180836", // Near black
      "#0d031f", // Darkest shade
    ],
  },
  primaryColor: "darkPurple", // Use custom color palette as primary
  primaryShade: 4, // Pick the 4th shade as the default

  // Optional: Customize default component styles
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.darkPurple[4],
          "&:hover": {
            backgroundColor: theme.colors.darkPurple[5],
          },
          "&:active": {
            backgroundColor: theme.colors.darkPurple[6],
          },
        },
      }),
    },
    Card: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.darkPurple[7],
          color: theme.colors.darkPurple[1],
        },
      }),
    },
  },

  // Typography
  fontFamily: "Roboto, sans-serif",
  headings: {
    fontFamily: "Roboto, sans-serif",
  },

  // Optional: Set a background for the dark mode
  black: "#121212", // Background color for dark mode
});
