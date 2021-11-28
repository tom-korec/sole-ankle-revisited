/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import Icon from "../Icon";
import { REM } from "../../css";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay
      as={"div"}
      style={{
        background: COLORS.background,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent
        as={"div"}
        style={{
          width: "300px",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: COLORS.white,
        }}
      >
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"} strokeWidth={2} />
        </CloseButton>
        <NavMenu>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavMenu>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  );
};

const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 26px;
  color: ${COLORS.gray["900"]};
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-left: 32px;
`;

const NavLink = styled.a`
  font-size: ${REM(18)};
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: ${REM(14)};
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
