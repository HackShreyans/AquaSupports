import Aboutus from "@/components/Aboutus";
import Chooseus from "@/components/Chooseus";
import Layout from "@/components/Layout/Layout";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import React from "react";
import Blog from "@/components/Blog";
import Product from "@/components/Product";
import Contactus from "@/components/Contactus";

const Home: React.FC = (props) => {
  return (
    <Layout>
      <Slider />
      <Chooseus />
      <Aboutus />
      <Product />
      <Blog />
      <Testimonial />
    </Layout>
  );
};

export default Home;
