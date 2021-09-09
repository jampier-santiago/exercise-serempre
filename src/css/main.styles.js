import tw from "twin.macro";
import styled from "styled-components";

export const StyledApp = styled.h1(() => [
  tw`flex justify-center items-center h-screen`,
]);

export const ContainerMain = styled.section(() => [
  tw`w-screen max-w-[99vw] box-border flex flex-col items-center`,
]);

export const SmallTitle = styled.span(() => [tw`text-xs font-normal`]);

export const Title = styled.h2(() => [tw`font-bold text-[39px] text-left`]);

export const SubTitle = styled.h3(() => [
  tw`text-red-600 font-normal text-sm uppercase`,
]);

export const SpecificationCard = styled.div(() => [
  tw`flex flex-col justify-center items-center`,
]);

export const ContainerFixed = styled.section(() => [
  tw`hidden md:w-11/12 md:max-w-lg  md:mt-12 md:mx-auto md:grid grid-cols-3 gap-1 xl:w-full xl:max-w-3xl`,
]);

export const ContainerTop = styled.section(() => [
  tw`w-full left-[7%] box-border xl:w-5/12 xl:fixed`,
]);

export const ContainerBody = styled.section(() => [
  tw`mb-14 box-border xl:w-11/12 xl:flex xl:justify-end xl:items-start xl:mb-24`,
]);

export const ContainerBottom = styled.section(() => [
  tw`w-full mt-12 box-border xl:w-5/12`,
]);

export const ContainerInfoProduct = styled.section(() => [
  tw`w-11/12 mx-auto md:max-w-lg box-border`,
]);

export const PriceProduct = styled.h3(() => [
  tw`mt-3 font-bold text-4xl overflow-hidden`,
]);

export const ContainerSection = styled.section(() => [
  tw`w-11/12 mx-auto mt-12 md:max-w-lg box-border`,
]);

export const SectionTitle = styled.h2(() => [tw`font-bold text-xl`]);

export const RowTable = styled.div(() => [tw`border-t-2 py-4`]);

export const TitleRowTable = styled.h3(() => [tw`mb-1 font-bold text-sm`]);

export const DescriptionRowTable = styled.span(() => [tw`text-sm font-normal`]);

export const ContainerFull = styled.div(() => [tw`w-full`]);
