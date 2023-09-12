const coffeeItems = {
    0: {
      title: `Kitty Town Coffee- Robust Roy Chocolate`,
      price: 10.99,
      quantity: 1,
      image: 'https://www.kittytowncoffee.com/cdn/shop/products/RobustRoyTurned_533x.png?v=1682345456',
      category: 'medium roast',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },
    1: {
      title: `Kitty Town Coffee- Simba's Sumatra`,
      price: 10.99,
      quantity: 1,
      image: 'https://www.kittytowncoffee.com/cdn/shop/products/SimbaTurned_533x.png?v=1668228498',
      category: 'medium roast',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    2: {
      title: `Kitty Town Coffee- Delilah's Decaf Coffee`,
      price: 10.99,
      quantity: 1,
      image: 'https://www.kittytowncoffee.com/cdn/shop/products/DelilahTurned_533x.png?v=1668227713',
      category: 'decaf',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    3: {
      title: `Kitty Town Coffee- Wolfgang's Vanilla Buttercream`,
      price: 10.99,
      quantity: 1,
      image: 'https://www.tailswagnh.com/cdn/shop/products/WolfgangTurned_990x_c8139d13-a3d3-4b9b-ab83-7da61e0c5ae0.png?v=1680889631',
      category: 'light roast',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    4: {
      title: 'Kitty Town Coffee- Fezzik Brazil Caramel',
      price: 10.99,
      quantity: 1,
      image: 'https://www.kittytowncoffee.com/cdn/shop/products/FezzikTurned_90666ce0-ad17-400f-bfac-a14093642804_533x.png?v=1668227583',
      category: 'medium roast',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    5: {
      title: 'Kitty Town Coffee- Rafiki of Guatemala',
      price: 10.99,
      quantity: 1,
      image: 'https://www.kittytowncoffee.com/cdn/shop/products/RafikiTurned_533x.png?v=1668226793',
      category: 'medium roast',
      desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    6: {
        title: `Kitty Town Coffee- Tara's Tiramisu`,
        price: 10.99,
        quantity: 1,
        category: 'medium roast',
        image: 'https://www.kittytowncoffee.com/cdn/shop/products/TaraTurned_533x.png?v=1668228130',
        desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    7: {
        title: 'Kitty Town Coffee- The Albert Blend',
        price: 10.99,
        quantity: 1,
        category: 'light roast',
        image: 'https://www.kittytowncoffee.com/cdn/shop/products/AlbertTurned_c17fd1b6-1e9e-4a6a-ba78-ebdaff0aaac0_533x.png?v=1668226617',
        desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
    8: {
        title: `Kitty Town Coffee- Mika's Butter Nut Toffee`,
        price: 10.99,
        quantity: 1,
        category: 'medium roast',
        image: 'https://www.kittytowncoffee.com/cdn/shop/products/MikaTurned_6d76acf2-fea8-40e6-988b-3843d95ddc5d_533x.png?v=1668227001',
        desc: 'Aliqua amet est in pariatur ex fugiat. Est labore ullamco aute nisi aute. Ad ullamco enim non ut adipisicing elit sunt sit. Elit Lorem cillum Lorem ullamco ut ex velit enim. Duis ipsum eiusmod et officia occaecat ex aliquip quis excepteur magna qui qui deserunt. Et exercitation proident aute id ad commodo consectetur consequat. Dolor voluptate exercitation adipisicing aliqua dolor et adipisicing tempor amet sunt enim sunt.'
    },  
  }
  export default coffeeItems