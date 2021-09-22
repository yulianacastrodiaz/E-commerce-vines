import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, getProducts } from "../actions";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(addCart());

  }, []);

  return (
    <main>
      <Navbar />
      <Filters />
      <Carousel />
      <Cards />
    </main>
  );
}
