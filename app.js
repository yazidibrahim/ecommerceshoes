const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const shoes = [
  {
    id: 1,
    name: "Nike Blazer Mid'77",
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
    Catogory:"Men's shoes",
    Colour:'1 color',
    MRP:'99.99',
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
    Catogory:"Men's shoes",
    Colour:'1 color',
    MRP: '129.99',
  },
  {
    id: 3,
    name: "SUPERSTAR SHOES",
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '1999.99',
  },
  {
    id: 4,
    name: "Steve Madden",
    image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=90&crop=false',
    Catogory:"Men's shoes",
    Colour:'1 color',
    MRP: '1299.99',
  },
  {
    id: 5,
    name: "Clarks",
    image: 'https://media.istockphoto.com/id/1279005448/photo/diabetic-measurement-tools-shoe-and-apple-on-table.jpg?b=1&s=612x612&w=0&k=20&c=yfW05oUT0IBUqbUI3TCWmp7dy4aAfuFUPI5TFqt3NIA=',
    Catogory:"Women's shoes",
    Colour:'1 color',
    MRP:'299.99',
  },
  {
    id: 6,
    name: "Asian",
    image: 'https://n3.sdlcdn.com/imgs/k/o/l/544X640_sharpened_2/ASIAN-HATTRICK-35-Navy-Men-SDL946102321-1-b11eb.webp',
    Catogory:"Women's shoes",
    Colour:'1 color',
    MRP: '399.99',
  },
  {
      id: 7,
      name: "Skechers",
      image: 'https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw0d3e9d0d/images/large/196989229881-1.jpg?sw=310&sfrm=jpg',
      Catogory:"Women's shoes",
      Colour:'1 color',
      MRP:'2999.99',
    },
    {
      id: 8,
      name: "Asian",
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0',
      Catogory:"Women's shoes",
      Colour:'1 color',
      MRP: '399.99',
    },
  {
      id: 9,
      name: "Puma Twitch Runner",
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '2999.99',
  },
  {
      id: 10,
      name: "ULTRABOOST LIGHT ",
image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1229.99',
  },
  {
      id: 11,
      name: "SUPERSTAR SHOES",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1399.99',
  },
  {
      id: 12,
      name: "SUPERSTAR XLG SHOES",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1299.99',
  },
  {
      id: 13,
      name: "Mens Reebok Gusto",
      image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1299.99',
  },
  {
      id: 14,
      name: " Reebok Zig Dynamica",
      image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '9999.99',
  },
  {
      id: 15,
      name: "Reebok Boston Runner",
      image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '999.99',
  },
  {
      id: 16,
      name: "Nike Air Max Plus",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '9999.99',
  },
  {
      id: 17,
      name: "Nike Blazer Mid'77",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2eaf301-687e-4235-9dc6-d1cb70f927be/blazer-mid-77-shoes-fW78R7.png',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1999.99',
  },
  {
      id: 18,
      name: "Nike Air Max 90",
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-shoes-N7Tbw0.png',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '12999.99',
  },
  {
      id: 19,
      name: "Puma Twitch Runner",
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/377981/02/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1999.99',
  },
  {
      id: 20,
      name: "ULTRABOOST LIGHT ",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62db17e107d847a6be894db8d1057ee5_9366/Ultraboost_Light_Shoes_Blue_IE1772_01_standard.jpg',
      Catogory: "Men's shoes",
      Colour: '1 color',
      MRP: '1999.99',
  },    
  {
    id: 21,
    name: "SUPERSTAR SHOES",
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '1999.99',
},
{
    id: 22,
    name: "SUPERSTAR XLG SHOES",
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a78564564f046a1ba44eeed2e9d95d9_9366/Superstar_XLG_Shoes_Black_IE5195_01_standard.jpg',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '1299.99',
},
{
    id: 23,
    name: "Mens Reebok Gusto",
    image: 'https://imagescdn.reebok.in/img/app/product/8/874703-10445808.jpg?auto=format,compress',
    Catogory: "Men's shoes",
Colour: '1 color',
    MRP: '11299.99',
},
{
    id: 24,
    name: " Reebok Zig Dynamica",
    image: 'https://imagescdn.reebok.in/img/app/product/8/871873-10388377.jpg?auto=format,compress',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '9999.99',
},
{
    id: 25,
    name: "Reebok Boston Runner",
    image: 'https://imagescdn.reebok.in/img/app/product/8/871847-10387794.jpg?auto=format,compress',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '999.99',
},
{
    id: 26,
    name: "Nike Air Max Plus",
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-shoes-pFKxz0.png',
    Catogory: "Men's shoes",
    Colour: '1 color',
    MRP: '999.99',
    }
  
];
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
  "mongodb+srv://yazidibrahim:yazidibrahim@cluster0.0qegvnd.mongodb.net/pr?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
  
require("./userDetails");
const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { fname, lname, email,address,dob,gender, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      address,
      dob,
      gender,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
app.get('/api/items', (req, res) => {
  const category = req.query.Category;
  const filteredItems = items.filter(item => item.Category === category);
  res.json(filteredItems);
});


app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15s",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});

app.listen(5000, () => { console.log("Server Started");
});
app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});