renderTestTitle = "Thirty Three";

const mutate = str => {
  const RE = new RegExp(`\\b${Object.keys(pifyOMG).join("\\b|\\b")}\\b`, "gi");
  str.replace(RE, matched => {
    return keyObject[matched];
  });
  return mutate;
};

mutate(renderTestTitle);
