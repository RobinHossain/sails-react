define(['react', 'app/utils', 'classnames'], function (React, Utils, cx) {
  'use strict';

  var TodoFooter = React.createClass({
    displayName: 'TodoFooter',

    render: function () {
      var activeTodoWord = Utils.pluralize(this.props.count, 'item');
      var clearButton = null;

      if (this.props.completedCount > 0) {
        clearButton = React.createElement(
          'button',
          {
            id: 'clear-completed',
            onClick: this.props.onClearCompleted },
          'Clear completed (',
          this.props.completedCount,
          ')'
        );
      }

      var nowShowing = this.props.nowShowing;
      return React.createElement(
        'footer',
        { id: 'footer' },
        React.createElement(
          'span',
          { id: 'todo-count' },
          React.createElement(
            'strong',
            null,
            this.props.count
          ),
          ' ',
          activeTodoWord,
          ' left'
        ),
        React.createElement(
          'ul',
          { id: 'filters' },
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              {
                href: '#/',
                className: cx({ selected: nowShowing === Utils.ALL_TODOS }) },
              'All'
            )
          ),
          ' ',
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              {
                href: '#/active',
                className: cx({ selected: nowShowing === Utils.ACTIVE_TODOS }) },
              'Active'
            )
          ),
          ' ',
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              {
                href: '#/completed',
                className: cx({ selected: nowShowing === Utils.COMPLETED_TODOS }) },
              'Completed'
            )
          )
        ),
        clearButton
      );
    }
  });

  return TodoFooter;
});
