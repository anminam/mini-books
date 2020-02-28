import urllib.request
import json

from bs4 import BeautifulSoup

def toJson(mnet_dict):
    with open('ridi_chart.json', 'w', encoding='utf-8') as file :
        json.dump(mnet_dict, file, ensure_ascii=False, indent='\t')

def mnet_Crawling(html):
    temp_list = []
    temp_dict = {}
 
    tr_list = html.select('div.book_macro_110')
 
    for tr in tr_list :
        # rank = int(tr.find('td',{'class':'MMLItemRank'}).find('span').text.strip('위'))
 
        # img = tr.find('td',{'class':'MMLItemTitle'}).find('div',{'class':'MMLITitle_Album'}).find('img')['src']
        # img = tr.find('td',{'class':'MMLItemTitle'}).find('div',{'class':'MMLITitle_Album'}).find('img').get('src')
        try:
            title = tr.select('.title_text')[0].text
            img = tr.select('.thumbnail_image > img')[0]['data-src']
            discountCont = tr.select('.badge_discount .num')
            if len(discountCont) != 0 :
                discount = tr.select('.badge_discount .num')[0].text
            else:
                discount = 0
            rank = tr.select('.book_ranking')[0].text
            author = tr.select('.book_metadata.author a')[0].text
            rateScore = tr.select('.StarRate_Score')[0].text
            ratePerson = tr.select('.StarRate_ParticipantCount')[0].text
            price = tr.select('.book_metadata .price')[0].text

            temp_list.append([title, img, discount, rank, author, rateScore, ratePerson, price])
            temp_dict[str(rank)] = {'title': title, 'img': img, 'discount': discount, 'rank': rank, 'author': author, 'rateScore': rateScore, 'ratePerson': ratePerson, 'price': price}
        except IndexError as item:
            print("Oops!  That was no valid number.  Try again...")
             
    return temp_list, temp_dict


mnet_list = []
mnet_dict = {}

for page in [1,2]:
    # url = 'https://ridibooks.com/bestsellers/general'
    url = 'https://ridibooks.com/bestsellers/general?page={}'.format(page)
    html = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(html, 'html.parser')

    mnet_temp = mnet_Crawling(soup)
    mnet_list += mnet_temp[0]
    mnet_dict = dict(mnet_dict, **mnet_temp[1])

# 리스트 출력
for item in mnet_list :
    print(item)
 
# 사전형 출력
# for item in mnet_dict :
#     print(item, mnet_dict[item]['img'], mnet_dict[item]['title'], mnet_dict[item]['artist'], mnet_dict[item]['album'])
 
# Json파일 생성
toJson(mnet_dict)
