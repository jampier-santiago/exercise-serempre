import tw from "twin.macro";
import styled from "styled-components";

export const ContainerLoading = styled.section(() => [
  tw`w-screen min-h-screen relative flex flex-col items-center overflow-x-hidden`,
]);

export const ContainerWordLoading = styled.div(() => [
  tw`w-11/12 h-5/6 p-5 absolute top-2/4 flex flex-row justify-center items-center tracking-wide box-border`,
]);
