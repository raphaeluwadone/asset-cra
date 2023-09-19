import "./App.css";
import Dashboard from "./pages/dashboard";
import { Route, Routes } from "react-router-dom";
import Requisition from "./pages/requisition";
import Store from "./pages/store";
import StoreCategories from "./pages/store/Categories";
import StoreItems from "./pages/store/Items";
import StoreStocks from "./pages/store/Stocks";
import Fulfillment from "./pages/fulfilment";
import RequisitionManagement from "./pages/requisition/RequisitionManagement";
import UnavailableRequisition from "./pages/requisition/UnavailableRequisition";
import RequisitionApprovals from "./pages/requisition/RequisitionApprovals";
import RequisitionReturns from "./pages/requisition/RequisitionReturns";
import LandingPage from "./pages/landingPage/Index";
import Login from "./pages/login";
import ForgetPassword from "./pages/ForgetPassword/Index";
import Register from "./pages/signup/Index";
import ApprovedFulfilment from "./pages/fulfilment/approved";
import UnavailableFulfilment from "./pages/fulfilment/unavailable";
import Organization from "./pages/Organization";
import OrganizationInformation from "./pages/Organization/Information";
import OrganizationBranch from "./pages/Organization/Branch";
import OrganizationDepartment from "./pages/Organization/Department";
import OrganizationPosition from "./pages/Organization/Position";
import Settings from "./pages/Settings";
import Menu from "./pages/Settings/Menu";
import WorkFlow from "./pages/Settings/workflow";
import UserManagement from "./pages/userManagement";
import UserRecords from "./pages/userManagement/records";
import UserRoles from "./pages/userManagement/roles";
import Movement from "./pages/userManagement/movement";
import Printing from "./pages/printing";
import Search from "./pages/printing/search";
import Tags from "./pages/printing/tags";
import Print from "./pages/printing/printing";
import Download from "./pages/printing/download";
import Export from "./pages/printing/export";
import PriceList from "./pages/PriceList";
import ConfirmEmail from "./pages/confirmEmail";

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(BASE_URL)
  return (
    <>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
        <Route path={`/requisition`} element={<Requisition />} />
        <Route path={`/pricelist`} element={<PriceList />} />
        <Route path={`/register/:planId`} element={<Register />} />
        <Route path={`/confirmemail`} element={<ConfirmEmail />} />
        <Route path={`/reset-password`} element={<ForgetPassword />} />
        <Route
          path={`/requisition/management`}
          element={<RequisitionManagement />}
        />
        <Route path={`/login`} element={<Login />} />
        <Route
          path={`/reset-password`}
          element={<ForgetPassword />}
        />
        <Route
          path={`/requisition/unavailable`}
          element={<UnavailableRequisition />}
        />
        <Route
          path={`/requisition/approvals`}
          element={<RequisitionApprovals />}
        />
        <Route
          path={`/requisition/returns`}
          element={<RequisitionReturns />}
        />
        <Route path={`/store/`} element={<Store />} />
        <Route
          path={`/store/categories`}
          element={<StoreCategories />}
        />
        <Route path={`/store/items`} element={<StoreItems />} />
        <Route path={`/store/stocks`} element={<StoreStocks />} />
        <Route path={`/fulfillment`} element={<Fulfillment />} />
        <Route
          path={`/fulfillment/approved`}
          element={<ApprovedFulfilment />}
        />
        <Route
          path={`/fulfillment/unavailable`}
          element={<UnavailableFulfilment />}
        />
        <Route path={`/organization`} element={<Organization />} />
        <Route
          path={`/organization/information`}
          element={<OrganizationInformation />}
        />
        <Route
          path={`/organization/branch`}
          element={<OrganizationBranch />}
        />
        <Route
          path={`/organization/department`}
          element={<OrganizationDepartment />}
        />
        <Route
          path={`/organization/position`}
          element={<OrganizationPosition />}
        />
        <Route path={`/settings`} element={<Settings />} />
        <Route path={`/settings/menu`} element={<Menu />} />
        <Route path={`/settings/workflow`} element={<WorkFlow />} />
        <Route path={`/users`} element={<UserManagement />} />
        <Route path={`/users/records`} element={<UserRecords />} />
        <Route path={`/users/roles`} element={<UserRoles />} />
        <Route path={`/users/movement`} element={<Movement />} />
        <Route path={`/printing`} element={<Printing />} />
        <Route path={`/printing/search`} element={<Search />} />
        <Route path={`/printing/tags`} element={<Tags />} />
        <Route path={`/printing/printing`} element={<Print />} />
        <Route path={`/printing/download`} element={<Download />} />
        <Route path={`/printing/export`} element={<Export />} />
      </Routes>
    </>
  );
}

export default App;
