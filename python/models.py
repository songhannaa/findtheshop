from sqlalchemy import Column, TEXT, INT
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# SQL TABLE
class Item(Base):
    __tablename__ = 'item'

    id = Column(INT,primary_key=True, nullable=False)
    productId = Column(INT, nullable=False)
    title = Column(TEXT, nullable=False)
    link = Column(TEXT, nullable=False)
    image = Column(TEXT, nullable=False)
    lprice = Column(INT, nullable=False)
    

class Lowlink(Base):
    __tablename__ = 'lowlink'

    id = Column(INT, primary_key=True, index=True)
    productID = Column(INT, nullable=False)
