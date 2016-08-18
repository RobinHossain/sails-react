define(['react'], function (React) {

  var CommentForm = React.createClass({
    displayName: 'CommentForm',


    handleSubmit: function (e) {
      e.preventDefault();
      var author = this.refs.author.value.trim();
      var text = this.refs.text.value.trim();
      this.onCommentSubmit({ author: author, text: text });
      this.refs.text.value = '';
      return false;
    },

    onCommentSubmit: function (comment) {
      socket.post(this.props.url, comment, function whenServerResponds(data) {
        console.log('Message posted :: ', data);
      });
    },

    render: function () {
      return React.createElement(
        'form',
        { className: 'commentForm', onSubmit: this.handleSubmit, role: 'form' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Name'
          ),
          React.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Your name', ref: 'author' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Comment'
          ),
          React.createElement('input', { className: 'form-control', placeholder: 'Markdown something...', ref: 'text' })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-default', value: 'Submit' },
          'Submit'
        )
      );
    }

  }); //CommentForm

  return CommentForm;
}); //define
