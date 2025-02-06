import styled from 'styled-components';

export const PackageContainer = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;

  .packages-wrapper {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  .packages-wrapper > div {
    flex: 0 1 calc(50% - 1.5rem); /* Each card takes 50% width minus the gap */
  }

  @media (max-width: 768px) {
    .packages-wrapper > div {
      flex: 0 1 100%; /* Full width on smaller screens */
    }
  }
`;


export const PackageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;

  span {
    color: #6dc7d1;
  }
`;

export const PackageCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  text-align: left;
  margin-bottom: 2rem;

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.6rem;
      font-weight: bold;
      color: #222;
    }
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .features-list, .free-addons {
    width: 48%;
  }

  .free-title {
    font-size: 1rem;
    font-weight: bold;
    color: #6dc7d1;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 0.9rem;
    color: #666;
  }

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }

  .checkmark {
    color: #6dc7d1;
    margin-right: 0.5rem;
  }
`;

export const Price = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

export const AddOns = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border: 2px solid #6dc7d1; /* Border with theme color */
  border-radius: 8px; /* Rounded corners */
  background-color: #f0f9fa; /* Light background for better visibility */

  .addons-options {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    label {
      font-size: 0.8rem;
      color: #333;
    }

    input[type='radio'] {
      margin-left: 0.5rem;
    }
  }
`;


export const OrderButton = styled.button`
  background-color: #6dc7d1;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #5ba6b1;
  }
`;
