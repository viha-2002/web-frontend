import { Link, Routes, Route } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage";
import AddProduct from "./admin/addProductPage";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex ">
      <div className="h-full w-[300px] bg-blue-900 flex flex-col">
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/reviews">Reviews</Link>
      </div>
      <div className="h-full w-[calc(100%-300px)]">
        <Routes path="/*">
          <Route path="/products" element={<AdminProductPage />}>
            Products
          </Route>
          <Route path="/users" element={<h1>Users</h1>}>
            Users
          </Route>
          <Route path="/orders" element={<h1>Orders</h1>}>
            Orders
          </Route>
          <Route path="/reviews" element={<h1>Reviews</h1>}>
            Reviews
          </Route>
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}
