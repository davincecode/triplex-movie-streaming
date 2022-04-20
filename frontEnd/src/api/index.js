export const getComments = async () => {
  return [
    {
      id: "1",
      body: "What an amazing first episode. The camera work was delightful the way it made me felt as confused as him was amazing. Plus the dialogue between himself sold it.",
      username: "Mustafa",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "A strong first episode setting the scene of a multiple personality protagonist. The reflection metaphors work well (mirrors, puddles, scales ...) even if they are pasted on so thickly. So too the missing time around the girl, the goldfish and most impactfully the fighting. The use of implied violence is compelling especially in the car chase where there is already explosive action - this also informs us of the character of the alter ego.",
      username: "davincecode",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-18T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "I just finished watching the first episode (which was released yesterday), and I can confidently say that this TV series will become a huge hit... I was hesitant at first because Moon Knight is quite different from your typical superhero character, but probably this different flavor will be its strength... Can't wait & see how the plot develops.",
      username: "Ahsan",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Just finished episode 1. It grabs your attention immediately and makes you question many things! I love the characters and am very interior see what Marc/Steven does when he isn't himself before Moonknight. I can't wait to see more! ",
      username: "Andy",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-21T23:00:33.010+02:00",
    },
  ]
}

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "davincecode",
    createdAt: new Date().toISOString(),
  }
}

export const updateComment = async (text) => {
  return { text }
}

export const deleteComment = async () => {
  return {}
}
