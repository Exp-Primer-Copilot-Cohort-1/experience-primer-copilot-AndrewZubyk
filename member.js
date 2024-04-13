function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    path: 'skills',
    schema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };
}