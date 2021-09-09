import styled from "styled-components";
import tw from "twin.macro";

export const ContainerSldier = styled.section(() => [
  tw`w-11/12 mx-auto mt-12 md:max-w-lg xl:w-full xl:max-w-3xl`,
]);

export const ContainerControlsSlider = styled.div(() => [
  tw`mt-3 grid grid-cols-3 gap-2`,
]);

export const ContainerWindowsSlider = styled.div(() => [
  tw`w-full h-44 md:h-80 flex border-2 border-gray-200 rounded-xl overflow-hidden`,
]);
