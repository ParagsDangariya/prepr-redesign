import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";

const CoursesPage = () => {
  return (
    <Layout pageTitle="Challenges | Challenges Details">
      <NavOne />
      <PageHeader title="Challenges Details" />
      <CourseDetails />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
