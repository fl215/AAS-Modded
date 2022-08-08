const anuke = global.anuke = {
	/* Mimic @RegisterStatement */
	register(name, statement, def) {
		LAssembler.customParsers.put(name, func(statement.new));

		LogicIO.allStatements.add(prov(() => statement.new(def)));
	}
};

require("blocks/energy-collector")
require("blocks/logic-message")
