import { Button } from "../components/Button/Button";
import { SliceContainer } from "../components/SliceContainer/SliceContainer";

export default function Custom404() {
  return (
    <SliceContainer>
      <h1>Страница не найдена</h1>
      <Button link="/" variant="filled" size="l" startIcon="home">
        На главную
      </Button>
    </SliceContainer>
  );
}
