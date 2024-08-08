import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  output: "export",
});

export default withPWA({
  // Your Next.js config
});