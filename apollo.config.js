module.exports = {
  client: {
    includes: ["./apollo-hooks/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "insclone",
      url: "http://localhost:4000/graphql",
    },
  },
};
