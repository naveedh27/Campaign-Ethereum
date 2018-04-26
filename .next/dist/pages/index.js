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

var _factory = require('../Ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../Component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\ReactJS\\kickstart\\pages\\index.js?entry';


var campaignIndex = function (_Component) {
  (0, _inherits3.default)(campaignIndex, _Component);

  function campaignIndex() {
    (0, _classCallCheck3.default)(this, campaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (campaignIndex.__proto__ || (0, _getPrototypeOf2.default)(campaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(campaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {

      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, 'View Campaign')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right',
        content: 'Create Campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.renderCampaigns())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaignList;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployed().call();

              case 2:
                campaignList = _context.sent;
                return _context.abrupt('return', { campaigns: campaignList });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return campaignIndex;
}(_react.Component);

exports.default = campaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsImNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWQiLCJjYWxsIiwiY2FtcGFpZ25MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFLOztBQUNiLEFBQU8sQUFBYTs7OztBQUVwQixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7c0NBUWMsQUFFaEI7O1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDaEQ7O2tCQUFPLEFBQ0ksQUFDVDt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTZCO3dCQUE3QjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKQyxBQUdILEFBQ0UsQUFFSjtpQkFORixBQUFPLEFBTUcsQUFFWDtBQVJRLEFBQ0w7QUFGSixBQUFjLEFBVWIsT0FWYTsyQ0FVTixBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdKLEFBQ047NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBQ0EsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMseUNBQU8sU0FBUixBQUFnQixBQUNaO2lCQURKLEFBQ2MsQUFDVjtjQUZKLEFBRVcsQUFDUDtpQkFISjs7b0JBQUE7c0JBSlIsQUFFSSxBQUNJLEFBQ0EsQUFPSjtBQVBJOzRCQU9KLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBYk4sQUFDRSxBQUNBLEFBV0ksQUFBTSxBQUFLLEFBSWxCOzs7Ozs7Ozs7Ozs7dUJBckM4QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFBOEIsQTs7bUJBQW5EO0E7aURBQ0MsRUFBQyxXQUFELEFBQWEsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxJLEEsQUE4QzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1JlYWN0SlMva2lja3N0YXJ0In0=