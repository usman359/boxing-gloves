import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/fontawesome-all.min.css";
import "@css/futura-std-font.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/owl.carousel.min.css";
import "@css/responsive.css";
import "@css/style.css";
import "@css/swiper-bundle.min.css";
import "@css/slick.css";
import "@css/style.css";

import "@css/themify-icons.css";
import "@css/ui.css";
import Script from "next/script";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./component/Nav/Header";
import Footer from "./component/Nav/Footer";

export const metadata = {
  title: "Mira Electronics",
  description: "The Doorstep to innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <Header />
              {children}
              <Footer />
            </AppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
