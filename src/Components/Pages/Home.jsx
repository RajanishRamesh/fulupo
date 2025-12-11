import React from "react";
import HeroSection from "../../Components/Home/HeroSection/HeroSection";
import StatsSection from "../Home/Stats/Stats";
import ProductsSection from "../Home/Products/Products";
import SeamlessSection from "../Home/SeamlessSection/SeamlessSection";
import FMCG_Section from "../Home/FMCG_Section/FMCG_Section";
import IntelligentStore from "../Home/Intelligent_Store/Intelligent_Store";
import WhyFlupo from "../Home/WhyFulupo/WhyFulupo";
import Action_Section from "../Home/Action_Section/Action_Section"
import Contact_Section from "../Home/Contact_Section/Contact_Section"
import Generation_Section from "../Home/Generation_Section/Generation_Section"
import Roadmap from "../Home/Roadmap_Section/Roadmap_Section";
import VisionSection from "../Home/Vision_Section/Vision_Section";
import RevolutionSection from "../Home/Revolution_Section/Revolution_Section";


const HomePage = () => {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="stats"><StatsSection /></section>
      <section id="products"><ProductsSection /></section>
      <section id="features"><SeamlessSection /></section>
      <section id="features"><FMCG_Section /></section>
      <section id="features"><IntelligentStore /></section>
      <section id="features"><WhyFlupo /></section>

     
      <section id="demo"><Action_Section /></section>

      
      <section id="demo"><Contact_Section /></section>

      <section id="future"><Generation_Section /></section>
      <section id="future"><Roadmap /></section>
      <section id="future"><VisionSection /></section>
      <section id="future"><RevolutionSection /></section>
      
    </>
  );
};

export default HomePage;
