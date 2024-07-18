import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClothingItem from './ClothingItem';

const clothingData = [
  { id: 1, image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.musinsa.com%2Fimages%2Fprd_img%2F2024013116481200000083610.jpg&type=a340', description: 'STANDARD SPORTS' },
  { id: 2, image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.msscdn.net%2Fmfile_s01%2F_shopstaff%2Fview.staff_64093e9e5ce36.jpg%3F20230309110842&type=sc960_832', description: '쉐기 독 크루 넥 니트' },
  { id: 3, image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.msscdn.net%2Fmfile_s01%2F_shopstaff%2Fview.staff_658d118abd62e.jpg%3F20231228151534&type=sc960_832', description: '피그먼트 후드티 darkgray' },
  { id: 4, image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.msscdn.net%2Fmfile_s01%2F_shopstaff%2Fview.staff_60e3b1cc7318c.jpg%3F20210706145835&type=sc960_832', description: '미니멀 쇼트 슬리브 크루 넥 니트' },
  { id: 5, image: 'https://via.placeholder.com/150', description: '옷 설명 5' },
  { id: 6, image: 'https://via.placeholder.com/150', description: '옷 설명 6' },
  { id: 7, image: 'https://via.placeholder.com/150', description: '옷 설명 7' },
  { id: 8, image: 'https://via.placeholder.com/150', description: '옷 설명 8' },
  { id: 9, image: 'https://via.placeholder.com/150', description: '옷 설명 9' },
];

const MainPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        {clothingData.map(item => (
          <Col key={item.id} sm={8} md={4} lg={3} className="mb-4">
            <ClothingItem image={item.image} description={item.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainPage;
