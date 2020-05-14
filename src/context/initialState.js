export const initialState = {
  isLoggedIn: true,
  // 'tickets': [
  //   {
  //     id: '8178e8bc-aa37-4bd5-8d68-30fdcecb620c',
  //     title: `Ticket one`,
  //     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nobis! Nisi animi veritatis neque minus, laboriosam vel facere, obcaecati vero facilis eum at. Blanditiis nobis doloribus, ipsum consectetur fugiat vero rerum tempore repellat ipsam dignissimos nemo quibusdam dicta totam inventore unde quos debitis molestiae sunt, hic, velit voluptatem! Sed, consectetur.`,
  //     status: 'OPEN',
  //     createdAt: '2020-05-13T14:23:27.300Z',
  //     assignedTo: "Doe",
  //     category: "Front-end",
  //     comments: [
  //       {
  //         id: '6319364f-7ada-4100-9f64-040693994474',
  //         content: 'Hello there',
  //         author: 'Omar'
  //       }
  //     ]
  //   },
  // ],
  tickets: [],
  users: [],
  members: [
    {
      id: '8178e8bc-aa37-4bd5-8d78-304dxecb620c',
      name: 'Omar',
      role: 'admin',
      avatarUrl: ''
    },
    {
      id: '16c94bd1-249c-4251-b930-dfa7f5581295',
      name: 'John',
      role: 'user',
      avatarUrl: ''
    },
    {
      id: 'e9fb9eb4-6913-4872-9ac8-f66ac007606d',
      name: 'Doe',
      role: 'user',
      avatarUrl: ''
    },
    {
      id: 'fc2fe9ee-6e72-4717-91e7-9222b867db73',
      name: 'Smithy',
      role: 'user',
      avatarUrl: ''
    },
    {
      id: '3c2e9817-4c68-4a8e-b267-9b43547fc7c0',
      name: 'Karen',
      role: 'user',
      avatarUrl: ''
    },
  ]
}