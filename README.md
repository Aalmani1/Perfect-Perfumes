# Perfect-Perfumes

## Description :

We come from a place that understands your beauty needs. Beauty is all about exchange of tips, inspiration, and expertise, and we’ve really evolved into a brand that has transcended past your traditional retailer. We care for you and are committed to satisfy your needs in most unrivaled ways. Offering you with the most exclusive fragrances from top brands such as Yves Saint Laurent, Dior, Giorgio Armani, Gucci, Dolce & Gabbana, Carolina Herrera and Robert Cavalli. We seek to leave you with an unforgettable experience while being emotionally connected in every beautiful moment. More than ever, Beauty is about self-expression, embracing diversity and experimentation. We want to help reveal your uniqueness and give you the tools and support to express your beauty.

<br></br>

<hr>

### Wireframe:

#### Figma:

<a href="https://www.figma.com/file/CgWmU1Z4ylWB97CL2PTSQE/Untitled?node-id=10%3A753">Click Here </a>

#### Trello:

<a href="https://trello.com/b/HkpSwwEY/perfect-perfumes">Click Here</a>

<br></br>

<hr>

## User Stories

**User**

<li>As a user I can create account. </li>
<li>As a user I can signin.</li>
<li>As a user I can add product to cart.</li>
<li>As a user I can update my cart delete items or change quantity.</li>
<li>As a user I can pay products.</li>
<li>As a user I can contact with stor if i have any suggestion or issue.</li>

<br></br>
**Admin**

<li>As a admin I can add , delete , update products.</li>
<li>As a admin I can update users information</li>
<li>As a admin I can show orders</li>
<li>As a admin I can update and delete orders</li>

<br></br>

<hr>

## Components

#### User view:

<li>Home Page </li>
<li>Shop </li>
<li>Blog </li>
<li>Contact us </li>
<li>Signin </li>
<li>Create account </li>
<li>Cart </li>
<li>NavBar </li>
<li>Footer </li>

<br></br>

<hr>

# Client / Frontend

​

## React Router Routes (React App)

#### User :

​
| Path | Component | Permissions | Behavior |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/` | Home page | public `<Route>` | Home page |
| `/signup` | SignupPage | anon only `<Signup>` | Signup |
| `/login` | LoginPage | anon only `<Login>` | Login |
| `/shop` | ShopPage | user only `<Shop>` | Shows all product |
| `/Display/:id` | DisplayPage | user only `<Display>` | Shows one product |
| `/blog` | BlogPage | user only `<Blog>` | blog |
| `/contactus` | ContactusPage | user only `<Contactus>` | contact us page |
| `/cart` | Cart | user only `<Cart>` | show cart |
| | | | |
| | | | |
| | | | |
| | | | |

#### Admin :

| Path              | Component         | Permissions              | Behavior                     |
| ----------------- | ----------------- | ------------------------ | ---------------------------- |
| `/login`          | LoginPage         | admin , user `<Login>`   | Login                        |
| `/`               | Home page         | admin `<Route>`          | Home page                    |
| `/product`        | ProductPage       | admin `<Shop>`           | Shows all product and delete |
| `/add-product`    | AddProductPage    | admin `<add-product>`    | add product                  |
| `/update-product` | UpdateProductPage | admin `<update-product>` | update product               |
|                   |                   |                          |                              |
|                   |                   |                          |                              |
|                   |                   |                          |                              |
|                   |                   |                          |                              |

## Models

#### Admin model:

```
{
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  Fname: {
    type: String,
    trim: true,
    required: true,
  },
  Lname: {
    type: String,
    trim: true,
    required: true,
  },
}
```

#### Order model:

```
{
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
    default: () => counter++,
  },
  items: {},
  total: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}
```

#### Product model:

```
{
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    required: true,
  },
  size: {
    type: Number,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
}
```

#### User model:

```
{
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  Fname: {
    type: String,
    trim: true,
    required: true,
  },
  Lname: {
    type: String,
    trim: true,
    required: true,
  },
}
```

## Backend routes

### user​

| HTTP Method | URL      | Request Body | Success status | Error Status | Description           |
| ----------- | -------- | ------------ | -------------- | ------------ | --------------------- |
| GET         | /        | 400          | 200            | error        | Used to get home page |
| GET         | /:userid | 400          | 200            | error        | Used to signin        |
| GET         | /create  | 400          | 200            | error        | Used to signup        |
|             |

### admin

| HTTP Method | URL       | Request Body | Success status | Error Status | Description                 |
| ----------- | --------- | ------------ | -------------- | ------------ | --------------------------- |
| GET         | /         | 400          | 200            | error        | Used to get admin home page |
| GET         | /:adminid | 400          | 200            | error        | Used to signin              |
| GET         | /create   | 400          | 200            | error        | Used to signup              |

​

### cart

| HTTP Method | URL                    | Request Body | Success status | Error Status | Description                        |
| ----------- | ---------------------- | ------------ | -------------- | ------------ | ---------------------------------- |
| GET         | /                      | 400          | 200            | error        | Used to get cart page              |
| GET         | /:show/:id             | 400          | 200            | error        | Used to get cart for spicifec user |
| GET         | /:cartid/update        | 400          | 200            | error        | Used to update cart                |
| GET         | /delete/:cartid/update | 400          | 200            | error        | Used to update cart                |
| GET         | /create                | 400          | 200            | error        | Used to create cart                |

### product

| HTTP Method | URL                       | Request Body | Success status | Error Status | Description                  |
| ----------- | ------------------------- | ------------ | -------------- | ------------ | ---------------------------- |
| GET         | /                         | 400          | 200            | error        | Used to get shop page        |
| GET         | /:productid               | 400          | 200            | error        | Used to get spicifec product |
| GET         | /:productid/update        | 400          | 200            | error        | Used to update product       |
| GET         | /delete/:productid/update | 400          | 200            | error        | Used to update product       |
| GET         | /create                   | 400          | 200            | error        | Used to create product       |

### Slides

<a href="https://www.canva.com/design/DAEzRJ-FyXE/aPmwQ1SzxHTwv9fhON1lWw/view?utm_content=DAEzRJ-FyXE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">Click Here</a>
<br></br>

<hr>

### Deployed App Link:

<a href='https://perfect-perfumes.herokuapp.com/'>Click Here</a>
