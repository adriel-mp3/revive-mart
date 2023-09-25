import React from "react";
import * as S from "./style";
import { API_URL } from "@/api/api";
import PrimaryButton from "@/components/Button/PrimaryButton";
import useFetch from "@/hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from "@/components/Spinner";
import ImageSkeleton from "@/components/ImageSkeleton";
import arrow from "@/assets/arrow-button.svg";
import { Product } from "@/@types/product";

const BestSellingProducts = () => {
  const { data, loading, error } = useFetch<Product[]>(
    `${API_URL}products?limit=4`
  );
  return (
    <S.Container>
      <S.Side>
        <h2>Best Selling Products</h2>
        <p>Our collection of Best Selling products in our pre-owned store</p>
        <PrimaryButton label="See More" variant="dark" icon={arrow} />
      </S.Side>
      {loading && <Spinner />}
      <S.Cards>
        {data &&
          data.map((product) => (
            <Link to="men" key={product.id}>
              <S.Card>
                <ImageSkeleton src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <span>$ {product.price.toFixed(2)}</span>
              </S.Card>
            </Link>
          ))}
      </S.Cards>
    </S.Container>
  );
};

export default BestSellingProducts;
