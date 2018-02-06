$(".commit-stat-summary .dropdown-content ul").clone().insertAfter(".content-block.diff-files-changed");
$("#diffs ul li").each(function(ind, el){
  var linkEl = $(this).find("a");
  var title = linkEl.attr("title");
  linkEl.find("span.diff-changed-file-path").text(title);
  linkEl.find("span.diff-changed-file-path").detach().prependTo(linkEl.find("span.diff-changed-file-content"));
});
