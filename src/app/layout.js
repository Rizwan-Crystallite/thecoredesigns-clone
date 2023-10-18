// Fonts
import { primary, raleway } from "@/configs/fonts";
// Css
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;