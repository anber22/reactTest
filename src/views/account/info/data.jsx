export const tabList = [
  {
    key: 'article',
    tab: '文章(8)',
  },
  {
    key: 'app',
    tab: '应用(8)',
  },
  {
    key: 'project',
    tab: '项目(8)',
  },
];
export const user = {
  name: 'Serati Ma',
  desc: '海纳百川，有容乃大',
  titleList: [
    { icon: 'ReconciliationOutlined', label: '交互专家' },
    {
      icon: 'ReconciliationOutlined',
      label: '某某公司-某某某事业群－某某平台部－某某技术部－UED',
    },
    { icon: 'ReconciliationOutlined', label: '浙江省杭州市' },
  ],
  tagList: [
    '很有想法的',
    '专注设计',
    '海纳百川',
    '科学搬砖组',
    '程序员日常12',
    '科学搬砖组333',
    '程序员日常222',
  ],
  teamList: [
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '科学搬砖组',
      key: 'team-1',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '程序员日常',
      key: 'team-2',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '科学搬砖组',
      key: 'team-3',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '程序员日常',
      key: 'team-4',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '科学搬砖组',
      key: 'team-5',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      label: '程序员日常',
      key: 'team-6',
    },
  ],
};
export const data = Array.from({
  length: 23,
}).map((_, i) => ({
  title: `本端用户-${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description: (
    <div className="flex items-center space-x-3 ">
      <span>付小小</span>
      <span>2023-03-23 17:12</span>
    </div>
  ),
  content:
    '段落示意：这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容这里展示需要展示的内容',
}));
