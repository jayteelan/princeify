const pifyBasic = {
  // Object.keys = original words; Object.values = Princified substitutions
  i: "👁️",
  you: "U",
  your: "Ur",
  are: "R",
  to: "2",
  too: "2",
  for: "4",
  be: "B",
  know: "no",
  I: "👁️",
  You: "U",
  Your: "Ur",
  Are: "R",
  To: "2",
  Too: "2",
  For: "4",
  Be: "B",
  Know: "No"
};

const holyTerrain =
  "Will you still be there for me\nOnce I'm yours to obtain?\nOnce my fruits are for taking\nAnd you flow through my veins?\nDo you still think I'm beautiful\nWhen my tears fall like rain?\nMy love is so bountiful\nFor a man, who is true to me";

const mutateKeys = (selectedObject, inputText) => {
  const RE = new RegExp(
    `\\b${Object.keys(selectedObject).join("\\b|\\b")}\\b`,
    "gi"
  );
  console.log(RE);
  inputText.replace(RE, matched => {
    return selectedObject[matched];
  });
};

mutateKeys(pifyBasic, holyTerrain);
