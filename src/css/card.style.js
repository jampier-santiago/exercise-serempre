import styled from "styled-components";
import tw from "twin.macro";

export const TitleCard = styled.h2(() => [tw`font-bold text-sm`]);

export const DescriptionCard = styled.p(() => [
  tw`text-sm font-normal text-gray-500`,
]);
