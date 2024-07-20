import React from 'react';
import { Wrapper, Title, SubTitle, Text } from './styles';

export const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <SubTitle>Office Address:</SubTitle>
      <Text>MODSEN Exchange</Text>
      <Text>11 Wall St, Suite 45 </Text>
      <Text>New York, NY 10005, USA</Text>
      <SubTitle>Phone:</SubTitle>
      <Text>+1 212 123-4567</Text>
      <SubTitle>Email:</SubTitle>
      <Text>info@modsenexchange.com</Text>
      <SubTitle>Customer Support:</SubTitle>
      <Text>support@abcexchange.com</Text>
      <SubTitle>Working Hours:</SubTitle>
      <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
      <Text>Saturday - Sunday: Closed</Text>
    </Wrapper>
  );
};
