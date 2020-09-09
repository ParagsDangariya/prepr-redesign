import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesPage = () => {
  return (
    <Layout pageTitle="Prepr | Challenges">
      <NavOne />
      <PageHeader title="Challenges" />
      <Courses />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
