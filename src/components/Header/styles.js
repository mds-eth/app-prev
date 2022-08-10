import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  img{
    width: 40px;
    height: 40px;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  min-height: 180px;

  .img-user{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
      width: 60px;
      height: 60px;
      border-radius: 50px;
    }

  ul{
    width: 100% !important;

    .sign-out{
      padding-top: 10px;

      label{
        cursor: pointer;
        color: var(--color-black);

        #icon-logoff{
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }

  
  ul li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;

    label{
      font-weight: 500;
      color: var(--color-orange);
    }

    span{
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: var(--color-black);
    }
  }
`
