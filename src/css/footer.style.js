import styled from "styled-components";
import tw from "twin.macro";

export const ContainerFooter = styled.footer(() => [
  tw`w-screen md:h-28 xl:h-20 p-5 xl:px-24 xl:py-0 flex justify-end md:justify-around xl:fixed xl:inset-x-0 xl:bottom-0 xl:justify-between bg-gray-300 box-border`,
]);

export const BtnFooter = styled.span(() => [
  tw`w-28 h-14 flex justify-center items-center bg-blue-500 rounded-lg text-white font-bold text-sm tracking-wider cursor-pointer`,
]);

export const ContainerBtnFooter = styled.div(() => [
  tw`mt-5 md:mt-0 md:ml-12 flex justify-end`,
]);

export const PriceFooter = styled.h2(() => [
  tw`mb-3 md:mb-1 font-bold text-3xl`,
]);

export const MessagePrice = styled.span(() => [tw`text-sm text-gray-500`]);

export const ContainerSectionLeft = styled.section(() => [
  tw`hidden md:flex md:flex-col md:justify-center md:items-start`,
]);

export const ContainerSectionRight = styled.section(() => [
  tw`box-border md:flex md:items-center md:justify-between`,
]);

export const ContainerPrice = styled.div(() => [
  tw`flex flex-col justify-center items-end`,
]);
