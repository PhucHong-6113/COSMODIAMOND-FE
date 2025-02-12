// import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate, Outlet, createBrowserRouter } from "react-router-dom";
// import { increment } from "../redux/features/counterSlice";
// import { useEffect } from "react";
// import api from "./axios";

import Homepage from "../pages/homepage/Homepage";
import DiamondsIntro from "../pages/diamondsIntro/DiamondsIntro";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import EngagementRingsIntro from "../pages/engagementRingsIntro/EngagementRingsIntro";
import CatalogPage from "../pages/catalog/CatalogPage";
import SortSettingPage from "../pages/sortSetting/SortSettingPage";
import Login from "../components/login/Login";
import EducationMain from "../components/educationMain/EducationMain";
import EducationDiamond from "../components/educationDiamond/EducationDiamond";
import EducationMetal from "../components/educationMetal/EducationMetal";
import EducationRing from "../components/educationRing/EducationRing";
import DiamondDetail from "../pages/dimamondDetail/DiamondDetail";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import CompleteProduct from "../components/completeProduct/CompleteProduct";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";
import AccountDetails from "../pages/accountDetails/AccountDetails";
import Wishlist from "../pages/wishlist/Wishlist";
import EduRingWedding from "../components/eduRingWedding/EduRingWedding";
import EduRingMen from "../components/eduRingMen/EduRingMen";
import WeddingRingsIntro from "../pages/weddingRingsIntro/WeddingRingsIntro";
import JewelryIntro from "../pages/jewelryIntro/JewelryIntro";
import FashionRingsIntro from "../pages/fashionRingsIntro/FashionRingsIntro";
import Signup from "../pages/signup/Signup";
import EduRingStyleUni from "../components/eduRingStyleUni/EduRingStyleUni";
import EduRingFind from "../components/eduRingFind/EduRingFind";
import EduRingGuide from "../components/eduRingGuide/EduRingGuide";
import PinCode from "../components/pinCode/PinCode";
import Main from "../pages/dashboard/layout/main-dashboard/Main";
import AdminPage from "../pages/admin/AdminPage";
import OrderHistory from "../components/orderHistory/OrderHistory";
import EngagementRingCatalog from "../pages/engagementRingCatalog/EngagementRingCatalog";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/counterSlice";
import { alertFail } from "../hooks/useNotification";

import VoucherManager from "../pages/dashboard/pages/voucherManager/VoucherManager";
import ProductsManager from "../pages/dashboard/pages/productsManager/ProductsManager";
import Page404 from "../pages/page404";

import ProductDetailPage from "../pages/productDetailPage/ProductDetailPage";
import CustomRing from "../pages/customRing/CustomRing";
import CoverDetailPage from "../pages/coverDetailPage/CoverDetailPage";
import CompleteProductPage from "../pages/completeProductPage/CompleteProductPage";

import AdminTransaction from "../pages/adminTransaction/AdminTransaction";
import ScrollToTop from "../components/ScrollToTop";
import CustomPendant from "../pages/customPendant/CustomerPendant";
import CustomEarrings from "../pages/customEarrings/CustomEarrings";
import OrderSuccess from "../pages/orderSuccess/OrderSuccess";
import OrderFail from "../pages/orderFail/OrderFail";

import PendantCatalog from "../pages/pendantCatalog/PendantCatalog";
import EarringCatalog from "../pages/earringsCatalog/EarringCatalog";
import StaffChat from "../pages/dashboard/pages/staffChat/staffChat";
import OrdersStaff from "../pages/dashboard/pages/ordersStaff/OrdersStaff";
import ForgotPasswordEmail from "../pages/forgotPasswordEmail/ForgotPasswordEmail";

import ResetPassword from "../pages/resetPassword/ResetPassword";
import LocationTracker from "../components/LocationTracker";
import UsersManager from "../pages/dashboard/pages/usersManager/UsersManager";
import DeliveryStaff from "../pages/dashboard/pages/deliveryStaff/DeliveryStaff";
import ManangerProductDetail from "../pages/dashboard/pages/productsManager/manangerProductDetail/ManangerProductDetail";
import ManagerDiamondCatalog from "./../pages/dashboard/pages/productsManager/managerDiamondCatalog/ManagerDiamondCatalog";

import SendEmail from "../pages/dashboard/pages/staffChat/SendEmail";
import SendRequest from "../pages/dashboard/pages/requestStaff/SendRequest";
import ManangerAddProduct from "./../pages/dashboard/pages/productsManager/managerAddProduct/ManagerAddProduct";
import CoversManager from "../pages/dashboard/pages/coversManager/CoversManager";
import ManagerCoverDetail from "../pages/dashboard/pages/coversManager/ManagerCoverDetail/ManagerCoverDetail";
import ManagerAddCover from "../pages/dashboard/pages/coversManager/ManagerAddCover/ManagerAddCover";
import GiaAndWarranty from "../pages/GiaAndWarranty/GiaAndWarranty";
import RequestStaff from "../pages/dashboard/pages/requestStaff/RequestStaff";
import DiamondManager from "../pages/dashboard/pages/diamondManager/DiamondManager";
import ManagerDiamondDetail from "../pages/dashboard/pages/diamondManager/ManagerDiamondDetail/ManagerDiamondDetail";
import ManagerAddDiamond from "../pages/dashboard/pages/diamondManager/ManagerAddDiamond/ManagerAddDiamond";
import RequestManager from "../pages/dashboard/pages/requestManager/RequestManager";
import OrdersManager from "../pages/dashboard/pages/ordersManager/OrdersManager";

const ProtectedRouteAuth = ({ children }) => {
  const user = useSelector(selectUser);
  if (!user) {
    alertFail("You need to login first!!");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ProtectedRouteCustomer = ({ children }) => {
  const user = useSelector(selectUser);
  if (
    user?.Role === "admin" ||
    user?.Role === "manager" ||
    user?.Role === "salestaff" ||
    user?.Role === "deliverystaff"
  ) {
    alertFail("You do not have permission to access this page.");
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const ProtectedADMIN = ({ children }) => {
  const user = useSelector(selectUser);
  console.log(user);

  const validRoles = ["admin", "manager", "salestaff", "deliverystaff"];

  if (!validRoles.includes(user?.Role)) {
    return <Navigate to="*" replace />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ScrollToTop />
        <Header />
        <LocationTracker />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRouteCustomer>
            <Homepage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/diamonds",
        element: (
          <ProtectedRouteCustomer>
            <DiamondsIntro />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/engagement-rings",
        element: (
          <ProtectedRouteCustomer>
            <EngagementRingsIntro />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/engagement-rings/catalog",
        element: <EngagementRingCatalog />,
      },
      {
        path: "/pendant/catalog",
        element: <PendantCatalog />,
      },
      {
        path: "/earrings/catalog",
        element: <EarringCatalog />,
      },
      {
        path: "/diamond-search",
        element: (
          <ProtectedRouteCustomer>
            <CatalogPage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/setting-search",
        element: (
          <ProtectedRouteCustomer>
            <SortSettingPage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education",
        element: (
          <ProtectedRouteCustomer>
            <EducationMain />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/diamonds",
        element: (
          <ProtectedRouteCustomer>
            <EducationDiamond />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings",
        element: (
          <ProtectedRouteCustomer>
            <EducationRing />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/custom-ring-by-diamond/complete-product",
        element: (
          <ProtectedRouteCustomer>
            <CompleteProductPage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/certificate/:id",
        element: (
          <ProtectedRouteCustomer>
            <GiaAndWarranty />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/shopping-cart",
        element: (
          <ProtectedRouteAuth>
            <ProtectedRouteCustomer>
              <ShoppingCart />
            </ProtectedRouteCustomer>
          </ProtectedRouteAuth>
        ),
      },
      {
        path: `/Diamond/:id`,
        element: (
          <ProtectedRouteCustomer>
            <DiamondDetail />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: `/custom-ring-by-diamond`,
        element: (
          <ProtectedRouteCustomer>
            <CustomRing />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: `/custom-pendant-by-diamond`,
        element: (
          <ProtectedRouteCustomer>
            <CustomPendant />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: `/custom-earrings-by-diamond`,
        element: (
          <ProtectedRouteCustomer>
            <CustomEarrings />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: `/custom-jewelry-by-diamond/:id`,
        element: (
          <ProtectedRouteCustomer>
            <CoverDetailPage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: `/Product/:id`,
        element: (
          <ProtectedRouteCustomer>
            <ProductDetailPage />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <ProtectedRouteAuth>
            <ProtectedRouteCustomer>
              <CheckoutPage />
            </ProtectedRouteCustomer>
          </ProtectedRouteAuth>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <ProtectedRouteAuth>
            <ProtectedRouteCustomer>
              <AccountDetails />
            </ProtectedRouteCustomer>
          </ProtectedRouteAuth>
        ),
      },
      {
        path: "/education/metal",
        element: (
          <ProtectedRouteCustomer>
            <EducationMetal />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRouteCustomer>
            <Wishlist />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings/wedding-ring-guide",
        element: (
          <ProtectedRouteCustomer>
            <EduRingWedding />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings/wedding-ring-styles",
        element: (
          <ProtectedRouteCustomer>
            <EduRingStyleUni />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings/find-your-ring-size",
        element: (
          <ProtectedRouteCustomer>
            <EduRingFind />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings/engagement-ring-guide",
        element: (
          <ProtectedRouteCustomer>
            <EduRingGuide />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/education/rings/mens-wedding-rings",
        element: (
          <ProtectedRouteCustomer>
            <EduRingMen />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/ear-rings",
        element: (
          <ProtectedRouteCustomer>
            <WeddingRingsIntro />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/jewelry",
        element: (
          <ProtectedRouteCustomer>
            <JewelryIntro />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/pendant",
        element: (
          <ProtectedRouteCustomer>
            <FashionRingsIntro />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/orders-history",
        element: (
          <ProtectedRouteCustomer>
            <OrderHistory />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/order-successful",
        element: (
          <ProtectedRouteCustomer>
            <OrderSuccess />
          </ProtectedRouteCustomer>
        ),
      },
      {
        path: "/order-fail",
        element: (
          <ProtectedRouteCustomer>
            <OrderFail />
          </ProtectedRouteCustomer>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/pincode",
    element: <PinCode />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordEmail />,
  },
  {
    path: "/reset-password/:email",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedADMIN>
        <Main />
      </ProtectedADMIN>
    ),
    children: [
      //manager
      {
        path: "/dashboard/manager",
        element: <OrdersManager />,
      },
      {
        path: "/dashboard/manager/orders",
        element: <OrdersManager />,
      },
      {
        path: "/dashboard/manager/voucher",
        element: <VoucherManager />,
      },
      {
        path: "/dashboard/manager/products",
        element: <ProductsManager />,
      },
      {
        path: "/dashboard/manager/product/:id",
        element: <ManangerProductDetail />,
      },
      {
        path: "/dashboard/manager/diamonds",
        element: <DiamondManager />,
      },
      {
        path: "/dashboard/manager/diamond/:id",
        element: <ManagerDiamondDetail />,
      },
      {
        path: "/dashboard/manager/diamonds",
        element: <ManagerDiamondCatalog />,
      },
      {
        path: "/dashboard/manager/diamond/add",
        element: <ManagerAddDiamond />,
      },
      {
        path: "/dashboard/manager/product/add",
        element: <ManangerAddProduct />,
      },
      {
        path: "/dashboard/manager/covers",
        element: <CoversManager />,
      },
      {
        path: "/dashboard/manager/cover/:id",
        element: <ManagerCoverDetail />,
      },
      {
        path: "/dashboard/manager/cover/add",
        element: <ManagerAddCover />,
      },
      {
        path: "/dashboard/manager/requests",
        element: <RequestManager />,
      },

      //admin
      {
        path: "/dashboard/admin",
        element: <AdminPage />,
      },
      {
        path: "/dashboard/admin/summary",
        element: <AdminPage />,
      },
      {
        path: "/dashboard/admin/users",
        element: <UsersManager />,
      },
      {
        path: "/dashboard/admin/transaction",
        element: <AdminTransaction />,
      },
      //hiu
      {
        path: "/dashboard/salestaff/orders",
        element: <OrdersStaff />,
      },
      {
        path: "/dashboard/salestaff",
        element: <OrdersStaff />,
      },
      {
        path: "/dashboard/salestaff/view-inbox",
        element: <RequestStaff />,
      },
      // {
      //   path: "/dashboard/salestaff/send-mail",
      //   element: <OrdersStaff/>,
      // },
      {
        path: "/dashboard/salestaff/send-mail",
        element: <SendEmail />,
      },
      {
        path: "/dashboard/salestaff/send-request",
        element: <SendRequest />,
      },

      {
        path: "/dashboard/deliverytaff",
        element: <DeliveryStaff />,
      },
      {
        path: "/dashboard/deliverystaff/delivery",
        element: <DeliveryStaff />,
      },
    ],
  },
]);
