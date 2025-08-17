import { toShmsi } from "../utils/to-shamsi";

export const tablecolumns = [
  {
    title: 'شناسه کاربر',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'عنوان',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'شاخص',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'تاریخ ایجاد',
    dataIndex: 'creationAt',
    key: 'creationAt',
    render: (item: string) => <span>{toShmsi(item)}</span>
  },
];