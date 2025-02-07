import React from "react";
import {
  Section,
  Title,
  HighlightedText,
  Underline,
  Subtitle,
  GridContainer,
  ListColumn,
  ListItem,
  TickIcon,
  OrderButton,
} from "./UseOfLogoBranding.styles";

const UsageSection: React.FC = () => {
  return (
    <Section>
      {/* Title */}
      <Title>
        Where Can You Use <HighlightedText>Your Logo?</HighlightedText>
      </Title>
      <Underline />

      {/* Subtitle */}
      <Subtitle>Here’s where your author logo belongs:</Subtitle>

      {/* Grid Layout */}
      <GridContainer>
        {/* Column 1 */}
        <ListColumn>
          <ListItem>
            <TickIcon>✓</TickIcon> Website and blog
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Social media profiles
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Advertisements and banners
          </ListItem>
        </ListColumn>

        {/* Column 2 */}
        <ListColumn>
          <ListItem>
            <TickIcon>✓</TickIcon> Business cards
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Promotional giveaways
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Fan swag
          </ListItem>
        </ListColumn>

        {/* Column 3 */}
        <ListColumn>
        <ListItem>
          <TickIcon>✓</TickIcon> Emails, newsletters and invoices
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Book cover
          </ListItem>
          <ListItem>
            <TickIcon>✓</TickIcon> Bookmarks and brochures
          </ListItem>
        </ListColumn>
      </GridContainer>

      {/* Order Button */}
      <OrderButton>Order Now</OrderButton>
    </Section>
  );
};

export default UsageSection;
