import styled from "styled-components";
import tw from "twin.macro";

export const ContainerSliderInfo = styled.section(() => [
  tw`w-10/12 mx-auto md:max-w-lg box-border`,
]);

export const DescriptionSliderInfo = styled.p(() => [
  tw`text-gray-500 p-1 text-base font-normal text-left`,
]);

export const ContainerDescriptionsSlider = styled.div(() => [
  tw`w-full flex mt-2 overflow-hidden box-border`,
]);

export const ContainerControlsSliderInfo = styled.div(() => [
  tw`w-full flex overflow-auto overscroll-x-contain box-border`,
]);

export const ControlSliderinfo = styled.div(() => [
  tw`h-10 mr-5 flex justify-start items-center flex-shrink-0`,
]);
