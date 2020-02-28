import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import data from './asset/ridi_chart.json'

import BookCard from 'cards/BookCard';

const bookList = [
  {
    id: 1,
    name: "배움의발견",
    author: "타라 웨스트오버",
    star: 5,
    start_person: 9,
    price: 14000,
    discount: 10
  },
  {
    id: 2,
    name: "목소리를 드릴게요 ",
    author: "정세랑",
    star: 5,
    start_person: 17,
    price: 10000,
    discount: 10
  }
];

class BookSection extends React.Component {
	state = {
		chart: []
	}

  componentDidMount() {
    const url = "/ridi_chart.json";

    let getChart = () => {
      axios.get(url).then(response => {
        if (response.status === 200) {
					const { data } = response;

					const newChart = [];
					let key = 0;
					for(const item in data) {
						
						const newItem = {
							...data[item],
							id: key++,
							rank: data[item].rank.trim().split('위')[0],
							ratePerson: data[item].ratePerson.trim().split('명')[0]
						}
						if(!newItem.rank) {
							continue;
						}


						newChart.push(newItem)
					}

					
					this.setState({ chart:newChart });
        }
      });
    };

    getChart();
  }

  render(b) {
		let {chart} = this.state;
		chart = chart.length ? chart : bookList

    return (
			<>
				<ContainerTitle>
					일반 베스트셀러
				</ContainerTitle>
				<Wrapper>
					{ chart.map(item => (
						<BookCard key={item.id} {...item} />
					))}
				</Wrapper>
			</>
    );
  }
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ContainerTitle = styled.div`
	font-size: 21px;
	color: #333;
	font-weight: 700;
	padding: 0 0 20px 0;
`;
export default BookSection;
