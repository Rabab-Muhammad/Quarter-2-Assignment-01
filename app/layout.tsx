import "./globals.css";

type MainLayoutProps ={
  children:React.ReactNode;
}
const MainLayout:React.FC<MainLayoutProps> = (props) => {
  console.log(props,"props");
  return(
    <html lang="en">
      <body>
        {props.children}
      </body>
    </html>
  ) 
};

export default MainLayout;

