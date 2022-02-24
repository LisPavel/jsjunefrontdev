const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const onlineUsers = users.filter(({ status }) => status === "online");

alert(
  `Сейчас в онлайн следующие пользователи: ${onlineUsers
    .map(({ username }) => username)
    .join(", ")}`
);
