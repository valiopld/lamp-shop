const INITIAL_STATE = {
  sections: [
    {
      title: "Bulb lamps",
      imageUrl:
        "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/F3/9F/aba06f4e-ca1c-47a6-8066-8671ec0e60bb.jpg",
      id: 1,
      linkUrl: "shop/bulb",
    },
    {
      title: "LED lights",
      imageUrl:
        "https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg",
      id: 2,
      linkUrl: "shop/led",
    },
    {
      title: "Wooden lamp",
      imageUrl:
        "https://www.adelexpress.com/wp-content/uploads/2019/04/Modern-Lamps-Pendant-Lights-Wood-Lamp-Restaurant-Bar-Coffee-Dining-Room-LED-Hanging-Light-Fixture-Wooden-300x300.jpg",
      id: 3,
      linkUrl: "shop/wooden",
    },
    {
      title: "HOMEMADE",
      imageUrl:
        "https://storage.googleapis.com/thdblog-media/wp-content/uploads/18-FINAL.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/homemade",
    },
    {
      title: "designe",
      imageUrl:
        "https://cdn.home-designing.com/wp-content/uploads/2018/01/ribbon-light-tall-designer-table-lamp-for-sale-1024x583.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/designe",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
