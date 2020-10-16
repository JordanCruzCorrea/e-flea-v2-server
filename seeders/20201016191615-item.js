module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Orange Lamborghini',
      price: 200000,
      category: 'Auto - Cars, Motorcycles',
      photos: 'https://i.imgur.com/yfHCX40.jpg',
      location: '110 Realaddress St, NY',
      description: 'This car sucks, saving for Tesla',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Macbook Air',
      price: 899,
      category: 'Computers',
      photos: 'https://i.imgur.com/HAsFOkQ.jpg',
      description: 'Stole from apple store. selling cheap or trading for pokemon cards', 
      location: '34 Pine St, NJ',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Air-jordan 12 Gym-Red',
      price: 220,
      category: 'Clothing & Shoes',
      photos: 'https://i.imgur.com/EPc2Cqt.jpg',
      description: 'Y0 seLling FreSh kix bro! CHeap and ez deal, dm me :)',
      location: '72 Marjorie Ct, NY',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),


    },
    {
      name: 'Iphone X 64GB',
      price: 649,
      category: 'Cell Phones, Tablets, Smart Mobile Devices',
      photos: 'https://i.imgur.com/R8kELLD.jpg',
      description: 'I hate iphones',
      location: '40 Dewey Rd, CT',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Old Sony portable TV',
      price: 20,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://i.imgur.com/0fDC2OY.jpg',
      description: 'Selling and old portable TV that I found in my attic',
      location: '20 Maple Place, AZ',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Red Christmas Sweater',
      price: 30,
      category: 'Clothing & Shoes',
      photos: 'https://i.imgur.com/r8V6e6i.png',
      description: 'My mom gave me this for christmas...',
      location: '84 Manhasset Woods Rd, NY',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nintendo Switch',
      price: 200,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://i.imgur.com/XFmJtCm.jpg',
      description: 'I Lost all my friends playing Mario Party, this console is cursed',
      location: '200 Frontdaily Rd, FL',
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'PS4 with 10 random games!',
      price: 700,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://thewirecutter.com/wp-content/uploads/2018/03/Game-consoles-lowres-07207.jpg',
      description: 'Selling a used ps4 console with 10 random games, cant guarantee you get what you want',
      location: '14 Middletown Ct, CA',
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Toothbrush',
      price: 10,
      category: 'Household, Pets, Garden',
      photos: 'https://pbs.twimg.com/media/CqFZV2hXYAAP0fy.jpg',
      description: 'Selling my Toothbrush because Im getting another',
      location: '22 Forwed St, NM',
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lebron Lakers Jersey',
      price: 200,
      category: 'Clothing & Shoes',
      photos: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3212000/ff_3212792_full.jpg&w=600',
      description: 'Get your Lebron Lakers Jersey for cheap',
      location: '45 Dermin Rd, AZ',
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Unicorn Water Bottle',
      price: 1000,
      category: 'Household, Pets, Garden',
      photos: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/824119',
      description: 'My special edition 10th anniversary Unicorn Water Bottle is on sale for a cheap price of 1000$',
      location: '88 Rainbow Rd, MA',
      userId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Harley-Davidson Motorcycle',
      price: 5000,
      category: 'Auto - Cars, Motorcycles',
      photos: 'https://i.imgur.com/eNXNeG1.jpg',
      description: 'Selling my treasured napkin signed by Stan Lee because I need money to pay for school',
      location: '170 Realplace Rd, CO',
      userId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'My favorite Hat',
      price: 10,
      category: 'Clothing & Shoes',
      photos: 'https://cdn11.bigcommerce.com/s-vhfuh18/images/stencil/1280x1280/attribute_rule_images/238_source_1565786051.jpg',
      description: 'Plain and simple, this is my party hat',
      location: '280 Wightside St, CA',
      userId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lord of the Rings DVD collection',
      price: 40,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/138799869/1d025b1eb3fafe208f0e64fec8a24b74.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=85e3ac10d8bf30fb5b0d85886117ccf1',
      description: 'Lord of the Rings special extended DVD edition, includes the whole triolgy.',
      location: '15 Tupac Lane, OK',
      userId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Game of Thrones Longclaw replica',
      price: 160,
      category: 'Art & Antiques',
      photos: 'https://i.imgur.com/U0AIpAF.jpg',
      description: 'Are you a GOT fan? Pick up this Longclaw replica made out of real steel!',
      location: '34 Enemy Rd, MO',
      userId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '1965 Fender Stratocaster Pre CBS Electric Guitar',
      price: 14500,
      category: 'Musical Instruments',
      photos: 'https://banjowarehouse.com/wp-content/uploads/2019/09/1965-Fender-Stratocaster-Pre-CBS-Electric-guitar-Vintage-Guitars-for-Sale-4.jpg',
      description: 'Includes Original Hardshell Case FREE SHIPPING',
      location: '200 Notarealplace Lane, AL',
      userId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};




// Art & Antiques
// Auto - Cars, Motorcycles
// Auto - Parts
// Bikes, E - Bikes, Scooters
// Books- Books, Magazines, Comics
// Cell Phones, Tablets, Smart Mobile Devices
// Clothing & Shoes
// Electronics, Computers, Appliances
// Household, Pets, Garden
// Musical Instruments
// Sports & Exercise