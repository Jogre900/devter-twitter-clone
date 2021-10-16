const timeline = [
  {
    id: 1,
    username: 'Jose',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, officiis?',
  },
  {
    id: 2,
    username: 'Maria',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consectetur aliquam beatae eligendi obcaecati doloribus.',
  },
  {
    id: 3,
    username: 'Pedro',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores optio impedit maiores ullam corrupti dignissimos quos molestias illum culpa dolorem. Non explicabo odit at, velit a rem amet voluptates!',
  },
  {
    id: 1,
    username: 'Jose',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, officiis?',
  },
  {
    id: 4,
    username: 'Maria',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consectetur aliquam beatae eligendi obcaecati doloribus.',
  },
  {
    id: 5,
    username: 'Pedro',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores optio impedit maiores ullam corrupti dignissimos quos molestias illum culpa dolorem. Non explicabo odit at, velit a rem amet voluptates!',
  },
  {
    id: 6,
    username: 'Jose',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, officiis?',
  },
  {
    id: 7,
    username: 'Maria',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consectetur aliquam beatae eligendi obcaecati doloribus.',
  },
  {
    id: 8,
    username: 'Pedro',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores optio impedit maiores ullam corrupti dignissimos quos molestias illum culpa dolorem. Non explicabo odit at, velit a rem amet voluptates!',
  },
  {
    id: 9,
    username: 'Pedro',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores optio impedit maiores ullam corrupti dignissimos quos molestias illum culpa dolorem. Non explicabo odit at, velit a rem amet voluptates!',
  },
  {
    id: 10,
    username: 'Jose',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, officiis?',
  },
  {
    id: 11,
    username: 'Maria',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consectetur aliquam beatae eligendi obcaecati doloribus.',
  },
  {
    id: 12,
    username: 'Pedro',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores optio impedit maiores ullam corrupti dignissimos quos molestias illum culpa dolorem. Non explicabo odit at, velit a rem amet voluptates!',
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(timeline))
}
