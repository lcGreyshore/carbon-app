import React, { useState } from 'react';
import SubjectsTable from './SubjectsTable';
import { Pagination } from 'carbon-components-react';

const headers = [
  {
    key: 'name',
    header: 'Subject Name',
  },
  {
    key: 'author',
    header: 'Author',
  },
  {
    key: 'updatedAt',
    header: 'Last Updated',
  },
  {
    key: 'items',
    header: 'Items',
  },
  {
    key: 'tags',
    header: 'Tags',
  },
  {
    key: 'contentType',
    header: 'Content Type',
  },
];

const rows = [
  {
    id: '1',
    name: 'Subject 1',
    author: 'Jane Doe',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '2',
    name: 'Subject 2',
    author: 'Jane Doe',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'essay',
  },
  {
    id: '3',
    name: 'Subject 3',
    author: 'Geoff Clark',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'essay',
  },
  {
    id: '4',
    name: 'Subject 4',
    author: 'John Berringer',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '5',
    name: 'Subject 5',
    author: 'Irene Blank',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '6',
    name: 'Subject 6',
    author: 'Barry Moore',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '7',
    name: 'Subject 7',
    author: 'Juanita Perez',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '8',
    name: 'Subject 8',
    author: 'Margarita Burser',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '9',
    name: 'Subject 9',
    author: 'Lexi Clark',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '10',
    name: 'Subject 10',
    author: 'Carlos Sanchez',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '11',
    name: 'Subject 11',
    author: 'Kiley Terrell',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
  {
    id: '12',
    name: 'Subject 12',
    author: 'Bethany Lanks',
    updatedAt: 'Date',
    items: '123',
    tags: 'No Tags',
    contentType: 'multiple choice',
  },
];

const SubjectsPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);

  return (
    <div className="bx--grid bx--grid--full-width subjects-page">
      <div className="bx--row subjects-page__r1">
        <div className="bx--col-lg-16">
          <SubjectsTable
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          />
          <div>
            <Pagination
              totalItems={12}
              backwardText="Previous page"
              forwardText="Next page"
              pageSize={currentPageSize}
              pageSizes={[5, 10, 15, 25]}
              itemsPerPageText="Subjects per page"
              onChange={({ page, pageSize }) => {
                if (pageSize !== currentPageSize) {
                  setCurrentPageSize(pageSize);
                }
                setFirstRowIndex(pageSize * (page - 1));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
