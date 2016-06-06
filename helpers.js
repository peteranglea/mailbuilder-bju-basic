Handlebars.registerHelper('mailbuilder-bju-paragraph', function(data) {
	var returnValue = data;
	returnValue = returnValue.replace(/\n/g, '<br />');
	returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).*?)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	returnValue = returnValue.replace(/\*\*\*([^\s\*][^\*]*)\*\*\*/g, '<b><i>$1</i></b>');
	returnValue = returnValue.replace(/\*\*([^\s\*][^\*]*)\*\*/g, '<b>$1</b>');
	returnValue = returnValue.replace(/\*([^\s\*][^\*]*)\*/g, '<i>$1</i>');
	return returnValue;
});

Handlebars.registerHelper('mailbuilder-bju-heading', function(data) {
	var returnValue = data;
	returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).*?)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	returnValue = returnValue.replace(/\*\*\*([^\s\*][^\*]*)\*\*\*/g, '<b><i>$1</i></b>');
	returnValue = returnValue.replace(/\*\*([^\s\*][^\*]*)\*\*/g, '<b>$1</b>');
	returnValue = returnValue.replace(/\*([^\s\*][^\*]*)\*/g, '<i>$1</i>');
	return returnValue;
});

Handlebars.registerHelper('mailbuilder-bju-list', function(data) {
	var returnValue = data;
	returnValue = returnValue.replace(/^(?!\*\s)/gm, '<br />'); // line breaks that don't begin with a new list item
	returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).*?)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	returnValue = returnValue.replace(/\*\*\*([^\s\*][^\*]*)\*\*\*/g, '<b><i>$1</i></b>');
	returnValue = returnValue.replace(/\*\*([^\s\*][^\*]*)\*\*/g, '<b>$1</b>');
	returnValue = returnValue.replace(/\*([^\s\*][^\*]*)\*/g, '<i>$1</i>');

	returnValue = returnValue.replace(/$\n\*\s/gm, '</li>\n* ').replace(/^\*\s/gm, '<li>');
	returnValue += "</li>"; // basic list item markdown

	return returnValue;
});