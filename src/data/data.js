export const navData = {
  
  navLinks: [
    {
      linkId: "link1",
      redirectTo: "/register",
      link: "Register",
      isProtected : false
    },
    {
      linkId: "link2",
      redirectTo: "/login",
      link: "Login",
      isProtected :false
    },
    {
      linkId: "link3",
      redirectTo: "/home",
      link: "Home ",
      isProtected : true
    },
    {
      linkId: "link4",
      redirectTo: "/logout",
      link: "Log Out",
      isProtected :true

    }
  ],
};

export const FooterData={
  footerLinkHead:"Follow Us On",
  footerLinks:[
    {
      linkId: "footerlink1",
      iconClass: "fa fa-twitter",
      href: "#"
    },
    {
      linkId: "footerlink2",
      iconClass: "fa fa-facebook",
      href: "#"
    },
    {
      linkId: "footerlink3",
      iconClass: "fa fa-github", 
      href: "#"
    },
    {
      linkId: "footerlink4",
      iconClass: "fa fa-instagram",
      href: "#"
    }
  ]
}