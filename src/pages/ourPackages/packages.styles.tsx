import styled, { keyframes } from "styled-components";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(109, 199, 209, 0.5); }
  50% { box-shadow: 0 0 20px rgba(109, 199, 209, 0.8); }
  100% { box-shadow: 0 0 5px rgba(109, 199, 209, 0.5); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled components
export const PackageContainer = styled.div`
  text-align: center;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0, #6dc7d1);
  }

  .packages-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 4rem;
    animation: ${fadeIn} 0.8s ease-out forwards;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .packages-wrapper {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;

export const PackageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  span {
    color: #6dc7d1;
    position: relative;
    background: linear-gradient(135deg, #6dc7d1);
    -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    padding: 0 0.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 4px;
      background: linear-gradient(to right, #6dc7d1);
      border-radius: 4px;
    }
  }

  &::before {
    content: "✦";
    position: absolute;
    left: -50px;
    top: 30%;
    transform: translateY(-50%);
    color: #6dc7d1;
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  &::after {
    content: "✦";
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    color: #6dc7d1;
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite 0.5s;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    &::before,
    &::after {
      display: none;
    }

    @media (max-width: 488px) {
      font-size: 29px;

      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

export const PackageCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #eaeaea;
  height: 100%;
  min-height: 650px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0);
  }

  &.popular {
    border: 2px solid #6dc7d1;
    animation: ${glow} 3s infinite;

    &::after {
      content: "MOST POPULAR";
      position: absolute;
      top: 20px;
      right: -30px;
      background: #6dc7d1;
      color: white;
      padding: 0.25rem 2rem;
      font-size: 0.75rem;
      font-weight: 700;
      transform: rotate(45deg);
      transform-origin: center;
      width: 150px;
      text-align: center;
    }
  }

  .title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px dashed #e0e0e0;

    h3 {
      font-size: 1.8rem;
      font-weight: 800;
      color: #212121;
      margin: 0;
      text-align: left;
      position: relative;
      padding-left: 2rem;
      flex: 1;
      font-family: "Montserrat", sans-serif;
      letter-spacing: 0.5px;

      &::before {
        content: "✨";
        position: absolute;
        left: 0;
        color: #6dc7d1;
        font-size: 1.5rem;
      }
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
    flex: 1;
  }

  .features-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .features-list,
  .free-addons {
    text-align: left;
    position: relative;
    min-height: 150px;
  }

  .features-list {
    ul {
      display: grid;
      gap: 0.75rem;
    }
  }

  .free-addons {
    background: #f8fcfd;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px dashed #6dc7d1;

    ul {
      display: grid;
      gap: 0.75rem;
    }
  }

  .free-title {
    font-size: 1rem;
    font-weight: 700;
    color: #6dc7d1;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    &::before {
      content: "🎁";
      margin-right: 0.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    font-size: 0.95rem;
    color: #455a64;
    line-height: 1.5;
    position: relative;
    padding-left: 1.75rem;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #6dc7d1;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: auto;

    &.popular::after {
      right: -25px;
      top: 40px;
      font-size: 0.65rem;
    }
  }
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #212121;
  background: linear-gradient(to right, #f5f5f5, #fff);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  min-width: 120px;
  text-align: center;
  border: 1px solid #e0e0e0;
  position: relative;
  white-space: nowrap;
`;

export const AddOns = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 2px solid #6dc7d1;
  border-radius: 12px;
  background-color: rgba(109, 199, 209, 0.05);
  position: relative;

  &::before {
    content: "ADD-ONS";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 1rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #6dc7d1;
    letter-spacing: 1px;
  }

  .addons-options {
    display: grid;
    gap: 0.75rem;
    text-align: left;

    > div {
      display: flex;
      align-items: center;
      padding: 0.75rem;
      background: white;
      border-radius: 8px;
      transition: all 0.2s ease;

      &:hover {
        background: #f5f5f5;
        transform: translateX(5px);
      }
    }

    label {
      font-size: 0.95rem;
      color: #455a64;
      margin-left: 0.75rem;
      cursor: pointer;
      flex-grow: 1;
    }

    input[type="checkbox"] {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;

      &:checked {
        background-color: #6dc7d1;
        border-color: #6dc7d1;

        &::after {
          content: "✓";
          position: absolute;
          color: white;
          font-size: 0.8rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;

export const OrderButton = styled.button`
  background: linear-gradient(to right, #6dc7d1, #4aa5b0);
  color: white;
  padding: 1.25rem;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(109, 199, 209, 0.3);

  &::after {
    content: "→";
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(to right, #5ba6b1, #3d8d98);
    box-shadow: 0 6px 20px rgba(109, 199, 209, 0.4);
    padding-right: 3rem;

    &::after {
      right: 15px;
    }
  }

  &:active {
    transform: translateY(2px);
  }
`;
