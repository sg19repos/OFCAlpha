export const getFullName = (firstName, lastName) => {
  return (firstName ? firstName : "-") + " " + (lastName ? lastName : "");
};

export const getInitialsText = (firstName, lastName) => {
  return (
    (firstName ? firstName?.substring(0, 1)?.toUpperCase() : "-") +
    (lastName ? lastName?.substring(0, 1)?.toUpperCase() : "")
  );
};
