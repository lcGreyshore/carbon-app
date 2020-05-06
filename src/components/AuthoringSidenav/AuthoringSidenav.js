import React from 'react';
import { Link } from 'react-router-dom';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/es/components/UIShell';

const AuthoringSidenav = () => (
  <SideNav
    isFixedNav
    expanded={true}
    isChildOfHeader={true}
    aria-label="Side navigation">
    <SideNavItems>
      <SideNavLink element={Link} to="/">
        Subjects
      </SideNavLink>
      <SideNavLink href="javascript:void(0)">Items</SideNavLink>
      <SideNavLink element={Link} to="/items">
        Item List
      </SideNavLink>
      <SideNavLink href="javascript:void(0)">Templates</SideNavLink>
      <SideNavLink href="javascript:void(0)">Unit Conversions</SideNavLink>
    </SideNavItems>
  </SideNav>
);

export default AuthoringSidenav;
