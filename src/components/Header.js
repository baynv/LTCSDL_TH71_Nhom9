import React, {Component} from 'react';

class Header extends Component {

  demoAction() {
    alert('Ahoo');
  }
  

  render() {
    return (
      <div>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">DOWNDOC.NET</a>
        </div>
    
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#"><i className="fa fa-home"></i></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Phân loại <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">Ngoại ngữ</a></li>
                <li><a href="#">Lập trình</a></li>
                <li><a href="#">Kỹ năng sống</a></li>
                <li><a href="#">Thiết kế - Đồ họa</a></li>
                <li><a href="#">Khác</a></li>
              </ul>
            </li>
          </ul>
          
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#" onClick={this.demoAction}><i className="fa fa-phone"></i> Liên hệ</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Tài khoản <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">Đăng nhập</a></li>
                <li><a href="#">Đăng ký</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="col-xs-12 text-center jumbotron main-search-bar">
      <form className="navbar-form" role="search">
          
          <select title="Chọn loại tài liệu" name="" id="input" className="form-control" required="required">
            <option value="0">Tất cả</option>
            <option value="1">Ngoại ngữ</option>
            <option value="2">Lập trình</option>
            <option value="3">Kỹ năng sống</option>
            <option value="4">Thiết kế - Đồ họa</option>
            <option value="5">Khác</option>
          </select>
          
          <input title="Khung nhập từ khóa tìm kiếm tài liệu!" type="text" className="form-control" placeholder="Nhập từ khóa ..." />

          <button type="submit" className="btn btn-success form-control"> <i className="fa fa-search"></i> Tìm kiếm</button>        
      </form>
    </div>
    </div>
    );
  }
}

export default Header;
