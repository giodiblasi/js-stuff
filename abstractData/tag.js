const attachTag = (tag, content) => ({
    tag,
    content
});

const getTypeTag = taggedData => taggedData.tag;

const getContent = taggedData => taggedData.content;

module.exports = {
    attachTag,
    getTypeTag,
    getContent
};
