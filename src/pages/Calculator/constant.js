export const buffer = 0.15

export const lightTraining = 0.7

export const overloadIncreaseDegree = 0.02

export const cycleConfig = {
  'mxs-1': {
    group: [[4, 5, 5, 3, 5], [4, 4, 4, 3, 5]],
    count: [[6, 5, 5, 5, 5], [5, 4, 3, 3, 3]]
  },
  'mxs-2': {
    group: [[], []],
    count: [[], []]
  }
}

export const tableColumn = [
  {
    label: '/',
    id: 'name',
    items: rawList,
  },
  {
    label: '适应次数',
    id: 'rep',
    items: [],
  },
  {
    label: '目标负荷',
    id: 'targetLoad',
    items: [],
  },
  {
    label: '次',
    id: 'count',
    items: [],
  },
  {
    label: '组',
    id: 'group',
    items: [3, 4, 5, 4, 6],
  },
];

