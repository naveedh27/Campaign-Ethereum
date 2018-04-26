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

var _Layout = require('../../Component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require('../../Component/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _semanticUiReact = require('semantic-ui-react');

var _Campaign = require('../../Ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _web = require('../../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\ReactJS\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCard',
    value: function renderCard() {
      var items = [{
        header: this.props.manager,
        meta: 'Address of manager',
        description: 'Manager Created Campaign and Can create request for money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(this.props.balance, 'ether') + ' Ether',
        meta: 'Balance',
        description: 'Available Balance in Contract'
      }, {
        header: this.props.requestCount,
        meta: 'Total Number of Requests',
        description: 'Number of Requests in Campaign So Far'
      }, {
        header: this.props.minimumContrib + ' Wei',
        meta: 'Minimum Contribution',
        description: 'Minimum Contribution needed to join Campaign'
      }, {
        header: this.props.approversCount,
        meta: 'Number of Approvers',
        description: 'Total Number of Approvers in Campaign'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Campaign Details : '), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderCard()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        content: 'View Requests',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _Campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContrib: summary[0],
                  balance: summary[1],
                  requestCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDb250cmlidXRlRm9ybSIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIkNhbXBhaWduU2hvdyIsIml0ZW1zIiwiaGVhZGVyIiwicHJvcHMiLCJtYW5hZ2VyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJiYWxhbmNlIiwicmVxdWVzdENvdW50IiwibWluaW11bUNvbnRyaWIiLCJhcHByb3ZlcnNDb3VudCIsInJlbmRlckNhcmQiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQUssQUFBSzs7QUFDbEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVc7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7OztpQ0FvQlEsQUFDVjtVQUFNO2dCQUVNLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ25CO2NBRkYsQUFFTyxBQUNMO3FCQUhGLEFBR2MsQUFDWjtlQUFRLEVBQUMsY0FMQyxBQUNaLEFBSVUsQUFBZ0I7QUFKMUIsQUFDRSxPQUZVO2dCQVFELGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FBOUIsQUFBc0MsV0FEakQsQUFDNEQsQUFDMUQ7Y0FGRixBQUVPLEFBQ0w7cUJBVlUsQUFPWixBQUdjO0FBSGQsQUFDRTtnQkFLUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRU8sQUFDTDtxQkFmVSxBQVlaLEFBR2M7QUFIZCxBQUNFO2dCQUtRLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBRHJCLEFBQ3FDLEFBQ25DO2NBRkYsQUFFTyxBQUNMO3FCQXBCVSxBQWlCWixBQUdjO0FBSGQsQUFDRTtnQkFLUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRU8sQUFDTDtxQkF6QkosQUFBYyxBQXNCWixBQUdjLEFBSWhCO0FBUEUsQUFDRTs7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFvQjtvQkFBcEI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQyxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBREosQUFDSSxBQUNHLEFBQUssQUFHUiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFkLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFVLEtBQUEsQUFBSyxNQUEvQixBQUFxQztvQkFBckM7c0JBUE4sQUFDQSxBQUtJLEFBQ0UsQUFHSjtBQUhJOzRCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBZCxBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsOEJBQUssdUJBQXNCLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxVQUF2QztvQkFBQTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUVFO2lCQUZGLEFBRVk7O29CQUZaO3NCQWpCVixBQUNFLEFBRUUsQUFVRSxBQUNBLEFBQ0UsQUFDQSxBQUNFLEFBY1g7QUFkVztBQUNFOzs7OzsyR0F0RWEsQTs7Ozs7bUJBRXJCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O21CQUE5QztBOzsyQkFJTSxNQUFBLEFBQU0sTUFEWCxBQUNpQixBQUN0QjtrQ0FBaUIsUUFGWixBQUVZLEFBQVEsQUFDekI7MkJBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7Z0NBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWlCLFFBTFosQUFLWSxBQUFRLEFBQ3pCOzJCQUFVLFFBTkwsQUFNSyxBQUFRLEE7QUFOYixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHFCLEEsQUEwRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovUmVhY3RKUy9raWNrc3RhcnQifQ==