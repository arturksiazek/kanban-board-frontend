export default {
  name: "General",
  columns: [
    {
      title: "Ready for development",
      tasks: [
        {
          id: 4,
          title: "The list of repositories",
        },
        {
          id: 5,
          title: "The function to update the list of repositories",
        },
        {
          id: 6,
          title:
            "Returning both the list and the function so they are accessible by other component options",
        },
      ],
    },
    {
      title: "In development",
      tasks: [
        {
          id: 1,
          title: "The list of repositories",
        },
        {
          id: 2,
          title: "The function to update the list of repositories",
        },
      ],
    },
    {
      title: "Ready for review",
      tasks: [
        {
          id: 3,
          title:
            "Returning both the list and the function so they are accessible by other component options",
        },
      ],
    },
    {
      title: "Ready for deploy",
      tasks: [],
    },
    {
      title: "Completed",
      tasks: [],
    },
  ],
};
