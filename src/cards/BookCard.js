import React from 'react';
import styled from 'styled-components';

const styleImage = {
  width: "100%"
};

const BookCard = item => {
  const {
    title,
    img,
    discount,
    rank,
    author,
    rateScore,
    ratePerson,
    price
  } = item;

  return (
    <Wrapper>
      <div className="book_macro_110 book_macro_portrait book_macro_column_6">
        {/* <!-- 북랭킹 --> */}
        <BookLanking>
          {rank}
          <span className="indent_hidden"></span>
        </BookLanking>
        {/* <!-- 썸네일 --> */}
        <BookThumbnailWrapper>
          <div className="book_thumbnail">
            <div className="thumbnail_image">
              <BookThumbnailImage
                style={styleImage}
                src={img}
                alt={title}
                data-src={img}
                data-original-cover={img}
              />
              <span className="border"></span>
            </div>

            
            <DiscountBadge style={{ display: discount ? 'block' : 'none' }}>
                <BookThumbnailNumber>
                    {discount} <span className="percent">%</span>
                </BookThumbnailNumber>
            </DiscountBadge>
          </div>
        </BookThumbnailWrapper>
        {/* <!-- 내용 --> */}
        <BookMetaWrapper>
          {/* <!-- 타이틀 --> */}
          <h3 className="book_metadata meta_title">
            <a
              className="title_link "
              href="/v2/Detail?id=111018321"
              data-track-params=""
              data-track-type=""
            >
              <TitleText>{title}</TitleText>
            </a>
          </h3>
          {/* <!-- 작가 --> */}
          <p className="book_metadata author ">
            <BookAuthor
              className="js_author_detail_link author_detail_link"
              href="#"
            >
              {author}
            </BookAuthor>
          </p>

          {/* <!-- 별점 --> */}
          {/* <p className="book_metadata star_rate hidden_for_landscape">
            <span className="RSGBookMetadata_StarRate">
              <StarBase>
                <span className="StarRate_IconFill"></span>
              </StarBase>
              <span className="StarRate_Score">{rateScore}</span>
              <span className="StarRate_ParticipantCount">
                {ratePerson}<span className="StarRate_ParticipantCount_Unit">명</span>
              </span>
              <span className="StarRate_HiddenElement indent_hidden">참여</span>
            </span>
          </p> */}
          {/* <!-- 가격 --> */}
          <div className="book_metadata meta_price_info">
            <h4 className="indent_hidden">상세 가격</h4>

            <BookScript>
              구매
              <span className="price">
                <BookPrice>{price}</BookPrice>
              </span>
              <span className="discount_info">
                <span className="discount">
                  <span className="museo_sans">
                    (10%<span className="icon-arrow_10_down"></span>)
                  </span>
                </span>
                <del className="additional_info">
                  <span className="museo_sans">14,000</span>원
                </del>
              </span>
            </BookScript>
          </div>
        </BookMetaWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1 1 140px;
  max-width: 140px;
  margin: 20px 0 0 0;
`;

const BookThumbnailWrapper = styled.div`
  width: 120px;
  height: 167px;
  margin: 0 auto;
  position: relative;
`;
const BookMetaWrapper = styled.div`
  width: 120px;
  margin: 8px auto 0 auto;
`;

const BookLanking = styled.div`
  padding-bottom: 10px;
  text-align: center;
  font-size: 20px;
  color: #666;
`;

const TitleText = styled.div`
  font-size: 13px;
  line-height: 1.4em;
  font-weight: 700;
  color: #333;
  word-break: keep-all;
  text-overflow: ellipsis;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  max-height: 2.7em;
  overflow: hidden;
`;

const BookAuthor = styled.a`
  font-size: 12px;
  color: #666;
  font-weight: 400;
  line-height: 1.2em;
  word-break: break-all;
`;

const BookScript = styled.span`
  text-align: left;
  padding-left: 0;
  font-size: 12px;
  line-height: 1.2em;
  word-break: break-all;
`; 
const BookPrice = styled.span`
  color: #1f8ce6;
  font-weight: 700;
`;

const DiscountBadge = styled.div`
  display: block;
  position: absolute;
  left: -7px;
  top: -7px;
  z-index: 120;
  line-height: 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  background: #70808f;
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
`;

const BookThumbnailNumber = styled.span`
  display: block;
  width: 40px;
  height: 1em;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.5em;
  margin-left: -20px;
  text-align: center;
  color: #fff;
  letter-spacing: -0.05em;
  line-height: 1em;
  vertical-align: top;
`;

const BookThumbnailImage = styled.img`
    max-height: 167px;
`;

const StarBase = styled.span`
    position: relative;
    margin-top: -1px;
    margin-right: 1px;
    width: 50px;
    height: 10px;
    vertical-align: -11%;
    display: inline-block;
    text-indent: -444px;
    font-size: 0;
    overflow: hidden;
    background-size: 100% 100%;
    color: #999;
`;

export default BookCard;
