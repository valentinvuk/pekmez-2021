// /lib/sanity.js
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "lt766rs5",
  dataset: "production",
  token:
    "skMLetpMi3UzSMh8Q1cOUAIutUC9SEskDkIHCk2HGTQhOdwoImTZIX4W2wGZ0WM2npArvWtjyLutZcpjkJYitO9GbNpg6SWLsTLIVVUPh6fBTdWSKUvfCKvVGTHAdle9sxYk8T33K5LXXUvxYypRCPWoR0yuxhDBjOCq4369QXFV6HSbWRJ7", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;
