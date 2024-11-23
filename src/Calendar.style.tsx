import styled from "@emotion/styled";

const CalendarContainer = styled.div<{
  $backgroundColor?: string;
  $hoverColor?: string;
  $headerColor?: string;
  $headerTextColor?: string;
  $cellHoverColor?: string;
  $cellBorderColor?: string;
  $cellDisabledColor?: string;
  $cellDisabledTextColor?: string;
  $cellSelectedBackgroundColor?:string;
  $taskBackgroundColor?: string;
}>`
  width: 100%;  
  padding: 1rem;
  background-color: ${(props) => props.$backgroundColor};
  font-family: Arial, sans-serif;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .current-month-year {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .days-row,
  .week-row {
    display: flex;
  }

  .day-name,
  .cell {
    flex: 1;
    text-align: center;
    padding: 10px 0;
  }

  .day-name {
    background-color: ${(props) => props.$headerColor};
    color: ${(props) => props.$headerTextColor};
    font-weight: bold;
  }

  .cells {
    display: flex;
    flex-direction: column;
  }

  .week-row {
    display: flex;
  }

  .cell {
    flex: 1;
    height: 100px;
    border-right: ${(props) => `1px solid ${props.$cellBorderColor}`};
    border-bottom: ${(props) => `1px solid ${props.$cellBorderColor}`};
    padding: 5px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s;
  }

  .cell:last-child {
    border-right: none;
  }

  .cell:hover {
    background-color: ${(props) => props.$cellHoverColor};
  }

  .cell.disabled {
    background-color: ${(props)=> props.$cellDisabledColor};
    color: ${(props) => props.$cellDisabledTextColor};
    cursor: default;
  }

  .cell.selected {
    background-color: ${(props) => props.$cellSelectedBackgroundColor};
  }

  .date-number {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .tasks {
    margin-top: 25px;
    font-size: 0.8rem;
    max-height: 60px;
    overflow-y: auto;
  }

  .task {
    background-color: ${(props) => props.$taskBackgroundColor};
    padding: 2px 4px;
    margin: 2px 0;
    border-radius: 4px;
    word-wrap: break-word;
  }
`;

export default CalendarContainer;