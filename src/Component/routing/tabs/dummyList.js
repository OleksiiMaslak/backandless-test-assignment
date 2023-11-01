import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { useLoaderData } from 'react-router-dom';
import { BsCardList } from "react-icons/bs";


const DummyList = () => {
  
    const response = useLoaderData();
    const {tabs} = JSON.parse(response);

    // List component from antd start

      const [loading, setLoading] = useState(false);
      const [data, setData] = useState([]);

      const loadMoreData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
          .then((res) => res.json())
          .then((body) => {
            setData([...data, ...body.results]);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      };
      useEffect(() => {
        loadMoreData();
      }, []);

    // List component from antd end

    return (
      <>
      <h1>{tabs[2].title}<BsCardList style={{marginLeft: 10, maxWidth: 30}}/></h1>
      <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain style={{color: '#fff'}}>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          style={{color: '#fff'}}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} style={{color: '#fff'}} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
                style={{color: '#fff'}}
              />
              <div style={{color: '#fff'}}>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
      </>
    );
};

export default DummyList

