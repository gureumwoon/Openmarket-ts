import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../../elements/Button"

describe('Button Element', () => {
    test('버튼이 렌더링 돼야 함', () => {
        render(<Button>button</ Button>);
        const buttonElement = screen.getByText('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('버튼 클릭 이벤트가 실행돼야 함', () => {
        const handleClick = jest.fn();
        render(<Button _onClick={handleClick}>click</Button>);
        fireEvent.click(screen.getByText('click'));
        expect(handleClick).toBeCalledTimes(1);
    })
})