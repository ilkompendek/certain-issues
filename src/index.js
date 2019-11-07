const interviews = [
  "smart city",
  "rebuild the lighthouse",
  "arts funding",
  "transportation",
  "arts funding",
  "rebuild the lighthouse",
  "sports funding",
  "tax cuts",
  "smart city",
  "arts funding",
  "smart city"
];

// index 0 = smart city; index 1 = arts funding; index 2 = transportation
const termTopics = interviews => {
  // Code here!
  let mentionTopics = [0, 0, 0];
  for (let i = 0; i < interviews.length; i++) {
    if (interviews[i] === "smart city") {
      mentionTopics[0] = mentionTopics[0] + 1;
    } else if (interviews[i] === "arts funding") {
      mentionTopics[1] = mentionTopics[1] + 1;
    } else if (interviews[i] === "transportation") {
      mentionTopics[2] = mentionTopics[2] + 1;
    }
  }
  // Remember to return an array!
  return mentionTopics;
};

console.log(termTopics(interviews));
