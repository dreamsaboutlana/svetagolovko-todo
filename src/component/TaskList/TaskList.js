import { Tabs, TabLink, Tab, TabContent } from 'component/TabsNav';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const serverResponce = [
  {
    day: 0,
    tasks: [
      { id: 1, title: 'Monday Task1' },
      { id: 2, title: 'Monday Task2' },
      { id: 3, title: 'Monday Task3' },
      { id: 4, title: 'Monday Task4' }
    ]
  },
  {
    day: 1,
    tasks: [
      { id: 1, title: 'Tuesday Task1' },
      { id: 2, title: 'Tuesday Task2' },
      { id: 3, title: 'Tuesday Task3' },
      { id: 4, title: 'Tuesday Task4' }
    ]
  },
  {
    day: 2,
    tasks: [
      { id: 1, title: 'Wednesday Task1' },
      { id: 2, title: 'Wednesday Task2' },
      { id: 3, title: 'Wednesday Task3' },
      { id: 4, title: 'Wednesday Task4' }
    ]
  },
  {
    day: 3,
    tasks: [
      { id: 1, title: 'Thursday Task1' },
      { id: 2, title: 'Thursday Task2' },
      { id: 3, title: 'Thursday Task3' },
      { id: 4, title: 'Thursday Task4' }
    ]
  },
  {
    day: 4,
    tasks: [
      { id: 1, title: 'Friday Task1' },
      { id: 2, title: 'Friday Task2' },
      { id: 3, title: 'Friday Task3' },
      { id: 4, title: 'Friday Task4' }
    ]
  }, {
    day: 5,
    tasks: [
      { id: 1, title: 'Saturday Task1' },
      { id: 2, title: 'Saturday Task2' },
      { id: 3, title: 'Saturday Task3' },
      { id: 4, title: 'Saturday Task4' }
    ]
  }, {
    day: 6,
    tasks: [
      { id: 1, title: 'Sunday Task1' },
      { id: 2, title: 'Sunday Task2' },
      { id: 3, title: 'Sunday Task3' },
      { id: 4, title: 'Sunday Task4' }
    ]
  }
];

import './tasklist.scss';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectIndex: 0 };

  }

  getData = (num) => {
    return days[num];
  };

  render() {

    const http = fetch('http://localhost:8081/').then(data => data.json()).then(console.log);
    console.log(http);
    return (
      <Tabs selectedIndex={this.state.selectIndex}>
        {serverResponce.map((dayInfo, index) => (

          <Tab key={index}>
            <TabLink title={this.getData(dayInfo.day)} />
            <TabContent>
              <ol>
                {dayInfo.tasks.map(task => (
                  <li key={task.id}>
                    <a href="#">
                      {task.title}
                    </a>
                    <div className="task-actions">
                      <i className="fa fa-times" aria-hidden="true"></i>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      <i className="fa fa-spinner" aria-hidden="true"></i>
                      <i className="fa fa-refresh" aria-hidden="true"></i>
                    </div>
                  </li>
                ))}
                <button>Add new task</button>
              </ol>
            </TabContent>
          </Tab>

        ))}
      </Tabs>)
  }
}


