import styled from 'styled-components';

export const PackageContainer = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;

  .packages-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  .packages-wrapper > div {
    flex: 0 1 calc(33.33% - 2rem); /* 3 cards per row on large screens */
  }

  @media (max-width: 1024px) {
    .packages-wrapper > div {
      flex: 0 1 calc(50% - 1rem); /* 2 cards per row on medium screens */
    }
  }

  @media (max-width: 768px) {
    .packages-wrapper > div {
      flex: 0 1 100%; /* Full width on small screens */
    }
  }
`;

export const PackageTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;

  span {
    color: #6dc7d1;
  }
`;

// export const PackageCard = styled.div`
//   background-color: #fff;
//   border-radius: 12px;
//   padding: 1rem;
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//   width: 100%;
//   max-width: 350px;
//   text-align: left;
//   margin-bottom: 2rem;

//   img {
//     width: 100%;
//     border-radius: 12px;
//     margin-bottom: 1rem;
//   }

//   .title-price {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 1rem;

//     h3 {
//       font-size: 1.6rem;
//       font-weight: bold;
//       color: #222;
//     }
//   }

//   .content-wrapper {
//     display: flex;
//     justify-content: space-between;
//     gap: 1rem;
//     flex-wrap: wrap;
//     margin-top: 1rem;
//   }

//   .features-list, .free-addons {
//     width: 48%;
//   }

//   .free-title {
//     font-size: 1rem;
//     font-weight: bold;
//     color: #6dc7d1;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     font-size: 0.9rem;
//     color: #666;
//   }

//   li {
//     margin-bottom: 0.5rem;
//     display: flex;
//     align-items: center;
//   }

//   .checkmark {
//     color: #6dc7d1;
//     margin-right: 0.5rem;
//   }
// `;

export const Price = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;
export const PackageCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin-bottom: 2rem;
  
  display: flex;
  flex-direction: column; /* Align items vertically */
  justify-content: space-between;

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
      font-size: 0.6rem;
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
    width: 68%;
    // font-size:11px;

  }

  .free-title {
    font-size: 0.8rem;
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
    margin-right: 0.9rem;
  }

  .add-ons-wrapper {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AddOns = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  border: 2px solid #6dc7d1;
  border-radius: 8px;
  background-color: #f0f9fa;
  width: 100%; /* Full width inside the card */
  max-width: 350px; /* Ensure symmetry within the card */
  text-align: center;

  .addons-options {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    label {
      font-size: 0.8rem;
      color: #333;
    }

    input[type='radio'] {
      margin-left: 0.9rem;
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
  width: 100%; /* Full width inside the card */
  max-width: 350px; /* Ensure symmetry within the card */
  cursor: pointer;
  transition: background 0.3s ease;
  display: block;

  &:hover {
    background-color: #5ba6b1;
  }
`;

