const LogicMessage = extendContent(MessageBlock, "logic-message", {});
const Keyboard = extendContent(MessageBlock, "keyboard", {});

LogicMessage.buildType = () => extendContent(MessageBlock.MessageBuild, LogicMessage, {
	senseObject(type) {
		if (type == LAccess.config) {
			return new java.lang.String(this.message);
		}

		return this.super$senseObject(type);
	},
});

Keyboard.buildType = () => extendContent(MessageBlock.MessageBuild, Keyboard, {
	senseObject(type) {
		if (type == LAccess.config) {
			return new java.lang.String(this.message);
		}

		return this.super$senseObject(type);
	},

	handleString() {},
});
