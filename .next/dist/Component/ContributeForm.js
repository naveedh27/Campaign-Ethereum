'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Campaign = require('../Ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _web = require('../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\ReactJS\\kickstart\\Component\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      loading: false,
      errMsg: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _Campaign2.default)(_this.props.address);
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                _this.setState({ loading: true });

                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](2);

                _this.setState({ errMsg: _context.t0.message });

              case 15:

                _this.setState({ loading: false });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Amount to Contribute '), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'ether',
        labelPosition: 'right',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true,
        type: 'submit',
        loading: this.state.loading,
        content: 'Contribute',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        className: 'errorMessage',
        error: true,
        header: 'oops!',
        content: this.state.errMsg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudFxcQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVyck1zZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFLLEFBQU0sQUFBUTs7QUFDM0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUdkOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFFTDthQUFRLEFBQ0UsQUFDUjtlQUZNLEFBRUksQUFDVjtjQUhNLEFBR0csQTtBQUhILEFBQ04sYUFLRCxBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVjtzQkFBQSxBQUFNLEFBQ0E7QUFGSSwyQkFFTyx3QkFBUyxNQUFBLEFBQUssTUFGckIsQUFFTyxBQUFvQjtnQ0FGM0I7Z0NBQUE7dUJBTWUsY0FBQSxBQUFLLElBTnBCLEFBTWUsQUFBUzs7bUJBQTFCO0FBTkUsb0NBUVI7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBUlAsQUFRUixBQUFjLEFBQVM7O2dDQVJmO2dDQVVGLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4Qjt3QkFDM0IsU0FEZ0MsQUFDaEMsQUFBUyxBQUNoQjt5QkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWjlCLEFBVUYsQUFBbUMsQUFFL0IsQUFBa0M7QUFGSCxBQUN2QyxpQkFESTs7bUJBS047OytCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWYvQixBQWVSLEFBQTZDOztnQ0FmckM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBa0JOOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFTLFlBbEJsQixBQWtCTixBQUFjLEFBQVk7O21CQUc5Qjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FyQkwsQUFxQlYsQUFBYyxBQUFTOzttQkFyQmI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkF5Qko7bUJBRU47OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQztlQUFELEFBQ1ksQUFDUjt1QkFGSixBQUVtQixBQUNmO2VBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCO2tCQUFZLGtCQUFBLEFBQUMsT0FBRDtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQXBDLEFBQVMsQUFBYyxBQUFvQjtBQUozRDs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBT0Y7QUFQRTtBQUNJLDJCQU1OLEFBQUMseUNBQU8sU0FBUixBQUNBO2NBREEsQUFDTyxBQUNQO2lCQUFXLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUN0QjtpQkFIQSxBQUdVOztvQkFIVjtzQkFWRixBQVVFLEFBTUE7QUFOQTswQkFNQSxBQUFDO21CQUFELEFBQ1UsQUFDUDtlQUZILEFBR0c7Z0JBSEgsQUFHVSxBQUNQO2lCQUFXLEtBQUEsQUFBSyxNQUpuQixBQUl5Qjs7b0JBSnpCO3NCQWpCSixBQUNFLEFBZ0JFLEFBVUw7QUFWSztBQUNBOzs7OztBQXJEc0IsQSxBQWlFOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiRTovUmVhY3RKUy9raWNrc3RhcnQifQ==