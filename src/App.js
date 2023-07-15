import "./App.css";
import projects from "./jsonfiles/TC-project.json";
import wbs from "./jsonfiles/TC-wbs.json";
import tasks from "./jsonfiles/TC-task.json";
import Collapsible from "react-collapsible";

function App() {
  return (
    <>
    {/* Retrieving data from TC-project.json using map*/}
      {projects &&
        projects.map((project) => {
          return (
            <ul key={project.id}>
              <li type="none">
                <div>
                  <span
                    style={{ float: "left" }}
                    className="material-symbols-outlined"
                  >
                    expand_more
                  </span>
                  <div>
                    <Collapsible trigger={project.name}>
                       {/* Retrieving data from TC-wbs.json using map*/}
                      {wbs &&
                        wbs.map((wb) => {
                          return (
                            <ul key={wb.id}>
                              {project.id === wb.projectId ? (
                                <li type="none" id="wb">
                                  <span
                                    style={{ float: "left" }}
                                    id="spa"
                                    className="material-symbols-outlined"
                                  >
                                    expand_more
                                  </span>
                                  <Collapsible trigger={wb.name}>
                                     {/* Retrieving data from TC-task.json using map*/}
                                    {tasks &&
                                      tasks.map((task) => {
                                        return (
                                          <ul key={task.id}>
                                            {task.wbsId === wb.projectId ? (
                                              <li id="task" type="none">
                                                {task.name}
                                              </li>
                                            ) : null}
                                          </ul>
                                        );
                                      })}
                                  </Collapsible>
                                </li>
                              ) : null}
                            </ul>
                          );
                        })}
                    </Collapsible>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default App;
