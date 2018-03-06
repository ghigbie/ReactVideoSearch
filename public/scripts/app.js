'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import dataCurrency from './services/data-service';

//import Header from './header/header';

var Homepage = function (_React$Component) {
    _inherits(Homepage, _React$Component);

    function Homepage() {
        _classCallCheck(this, Homepage);

        return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
    }

    _createClass(Homepage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(Table, null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(Table2, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'cotainer' },
                    _react2.default.createElement(Footer, null)
                )
            );
        }
    }]);

    return Homepage;
}(_react2.default.Component);

var Navbar = function Navbar() {
    return _react2.default.createElement(
        'div',
        { id: 'navigation-bar' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'ul',
                { 'class': 'nav smooth-scroll' },
                _react2.default.createElement(
                    'li',
                    { 'class': 'nav-item hover-effect' },
                    _react2.default.createElement(
                        'a',
                        { 'class': 'nav-link disabled',
                            href: '#crypto-tables' },
                        'Cryptocurrency Reviews'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { 'class': 'nav-item hover-effect' },
                    _react2.default.createElement(
                        'a',
                        { 'class': 'nav-link disabled',
                            href: '#podcast-table' },
                        'Educational Podcasts'
                    )
                )
            )
        )
    );
};

var Table = function (_React$Component2) {
    _inherits(Table, _React$Component2);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this2 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this2.tableTitle = 'Cryptocurrency Reviews - Our Top Picks';
        return _this2;
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container extra-margin-table',
                    id: 'crypto-table' },
                _react2.default.createElement(
                    'h3',
                    { className: 'center' },
                    this.tableTitle
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'table',
                    { className: 'table table-hover',
                        id: 'crpto-table' },
                    _react2.default.createElement(TableHeader, null),
                    _react2.default.createElement(TableBody, null)
                )
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

var Table2 = function (_React$Component3) {
    _inherits(Table2, _React$Component3);

    function Table2(props) {
        _classCallCheck(this, Table2);

        var _this3 = _possibleConstructorReturn(this, (Table2.__proto__ || Object.getPrototypeOf(Table2)).call(this, props));

        _this3.tableTitle = 'Getting Started and Market Updates';
        return _this3;
    }

    _createClass(Table2, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container extra-margin-table',
                    id: 'podcast-table' },
                _react2.default.createElement(
                    'h3',
                    { className: 'center' },
                    this.tableTitle
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'table',
                    { className: 'table table-hover',
                        id: 'podcast-table' },
                    _react2.default.createElement(TableHeader2, null),
                    _react2.default.createElement(TableBody2, null)
                )
            );
        }
    }]);

    return Table2;
}(_react2.default.Component);

var TableHeader = function TableHeader() {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'th',
                null,
                'Symbol'
            ),
            _react2.default.createElement(
                'th',
                null,
                'Name'
            ),
            _react2.default.createElement(
                'th',
                null,
                'Market Focus'
            ),
            _react2.default.createElement(
                'th',
                null,
                'Podcast Review'
            )
        )
    );
};

var TableHeader2 = function TableHeader2() {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'th',
                null,
                'Description'
            ),
            _react2.default.createElement(
                'th',
                null,
                'Podcast Link'
            )
        )
    );
};

var TableBody = function (_Component) {
    _inherits(TableBody, _Component);

    function TableBody(props) {
        _classCallCheck(this, TableBody);

        var _this4 = _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call(this, props));

        _this4.listTokens = _this4.listTokens.bind(_this4);

        _this4.state = {
            dataTokens: dataCurrency
        };
        return _this4;
    }

    _createClass(TableBody, [{
        key: 'listTokens',
        value: function listTokens() {
            var tokenList = this.state.dataTokens.map(function (token) {
                _react2.default.createElement(
                    'tr',
                    { 'data-toggle': 'modal', 'data-target': '#myModal' },
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('img', { className: 'symbol', src: token.symbol })
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        token.name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        token.description
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('a', { target: '_blank', href: token.podcastLink })
                    )
                );
            });
            return tokenList;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'tbody',
                null,
                this.listTokens()
            );
        }
    }]);

    return TableBody;
}(_react.Component);

var TableBody2 = function TableBody2() {
    return _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
            'tr',
            { 'data-toggle': 'modal',
                'data-target': '#myModal' },
            _react2.default.createElement(
                'td',
                null,
                'Getting Started with Investing in Cryptocurrency'
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                    'a',
                    { target: '_blank', href: 'https://youtu.be/D-I4sHkjuU8' },
                    'Getting Started Podcast'
                )
            )
        ),
        _react2.default.createElement(
            'tr',
            { 'data-toggle': 'modal',
                'data-target': '#myModal' },
            _react2.default.createElement(
                'td',
                null,
                'Cryptocurrency Market Update'
            ),
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                    'a',
                    { target: '_blank', href: 'https://youtu.be/yLWVC0YB_vE' },
                    'Cryptocurrency Market Update Podcast'
                )
            )
        )
    );
};

var StarRating = function StarRating() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('span', { 'class': 'fa fa-star checked' }),
        _react2.default.createElement('span', { 'class': 'fa fa-star checked' }),
        _react2.default.createElement('span', { 'class': 'fa fa-star checked' }),
        _react2.default.createElement('span', { 'class': 'fa fa-star' }),
        _react2.default.createElement('span', { 'class': 'fa fa-star' })
    );
};

var AdditionalResources = function AdditionalResources() {
    return _react2.default.createElement('div', { classnName: 'container',
        id: 'additional-resources' });
};

var Footer = function Footer() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'footer' },
            _react2.default.createElement(
                'div',
                { 'class': 'container-fluid' },
                '\xA9 2018 Copyright:  ',
                _react2.default.createElement(
                    'a',
                    { href: 'http://www.cryptoclarify.io' },
                    ' CrytoClarify.io'
                )
            )
        )
    );
};

var ModalStuff = function ModalStuff() {
    return _react2.default.createElement(
        'div',
        { 'class': 'modal', tabindex: '-1', role: 'dialog' },
        _react2.default.createElement(
            'div',
            { 'class': 'modal-dialog', role: 'document' },
            _react2.default.createElement(
                'div',
                { 'class': 'modal-content' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'modal-header' },
                    _react2.default.createElement(
                        'h5',
                        { 'class': 'modal-title' },
                        'Modal title'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', 'class': 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                        _react2.default.createElement(
                            'span',
                            { 'aria-hidden': 'true' },
                            '\xD7'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'modal-body' },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Modal body text goes here.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'modal-footer' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', 'class': 'btn btn-primary' },
                        'Save changes'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', 'class': 'btn btn-secondary', 'data-dismiss': 'modal' },
                        'Close'
                    )
                )
            )
        )
    );
};

var appRoot = document.getElementById('react-container');
_reactDom2.default.render(_react2.default.createElement(Homepage, null), appRoot);
