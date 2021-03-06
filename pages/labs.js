import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const TeachersPage = () => {
  return (
    <Layout pageTitle="Prepr | Labs">
      <NavOne />
      <PageHeader title="Labs" />
      <Teachers />

      <Footer />
    </Layout>
  );
};

export default TeachersPage;
