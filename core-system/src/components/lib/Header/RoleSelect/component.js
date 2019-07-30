import React from "react";
import { Modal, message } from "antd";
import "./component.less";

class RoleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShow: false,
      projectList: [],
      selectProject: "",
      orgRoleList: [],
      selectRole: ""
    };
  }

  componentDidMount() {
    this.props.getProject();
  }
  componentWillReceiveProps ({roleAndProject}) {
    if (roleAndProject !== this.props.roleAndProject) {
      this.projectClickHandler(roleAndProject.data.projectId);
      this.setState({
        selectProject: roleAndProject.data.projectId,
        selectRole: roleAndProject.data.roleId
      })
    }
  }

  componentDidUpdate({ isRoleSelectShow, userProjectList, roleList}) {
    if (isRoleSelectShow !== this.props.isRoleSelectShow) {
      this.setState({
        isModalShow: this.props.isRoleSelectShow
      });
    }
    if (
      JSON.stringify(userProjectList.data) !==
      JSON.stringify(this.props.userProjectList.data)
    ) {
      let userData = this.props.userProjectList.data;
      this.setState({
        projectList: userData
      });
    }
    
    if (roleList.data.projectId !== this.props.roleList.data.projectId) {
      this.setState({
        orgRoleList: this.props.roleList.data.orgRoles
      });
    }
  }

  projectClickHandler = projectId => {
    this.setState({
      selectProject: projectId
    });
    this.props.getRoles(projectId);
  };

  roleClickHandler = roleId => {
    this.setState({
      selectRole: roleId
    });
  };

  okHandler = () => {
    const { selectProject, selectRole } = this.state;
    if(!selectRole) {
      message.error('请先选择角色');
      return
    }
    const data = {
      projectId: selectProject,
      roleId: selectRole
    };
    this.props.saveRolesAndProject(data, (res) => {
      if (res) {
        let appFront = JSON.parse(sessionStorage.getItem('appFront'))
        window.location.href = appFront['SYS'] + '#/root/main/welcome'
      }
    });
  };

  cancleHandler = () => {
    this.props.showRoleSelect(false);
    this.setState({
      isModalShow: false
    });
  };

  getRolesList(roles) {
    const { selectRole } = this.state;
    return roles.map(role => {
      const iconType =
        role.type === "ADMIN"
          ? "iconfont icon-administrator"
          : "iconfont icon-personnel";
      return (
        <span
          key={role.id}
          className={selectRole === role.id ? "role-item active" : "role-item"}
          onClick={() => this.roleClickHandler(role.id)}
        >
          <i className={iconType} />
          {role.name}
        </span>
      );
    });
  }

  render() {
    const { projectList, orgRoleList, selectProject } = this.state;
    return (
      <Modal
        wrapClassName='role-modal'
        title='选择项目/角色'
        visible={ this.state.isModalShow }
        okText='确定'
        cancelText='取消'
        width={860}
        onOk={this.okHandler}
        onCancel={this.cancleHandler}
        maskClosable={false}
      >
        <div className="role-select-body">
          <div className="project-container">
            <div className="project-list scroll-style">
              {projectList.length
                ? projectList.map(project => {
                    return (
                      <div
                        key={project.id}
                        className={
                          selectProject === project.id
                            ? "project-item active"
                            : "project-item"
                        }
                        onClick={() => this.projectClickHandler(project.id)}
                      >
                        {selectProject === project.id ? (
                          <i className="iconfont icon-return" />
                        ) : null}
                        {project.name}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="role-container scroll-style">
            {orgRoleList.length
              ? orgRoleList.map(item => {
                  return (
                    <div className="role-wrapper" key={item.org.id}>
                      <div className="role-title">{item.org.name}</div>
                      <div className="role-list">
                        {this.getRolesList(item.roles)}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Modal>
    );
  }
}

export default RoleSelect;
