import { Button } from "./LoadMoreBtn.styled";


export const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <Button type='button' onClick={onLoadMoreBtn}>
      Load more
    </Button>
  );
};