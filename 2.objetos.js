const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English";
const available = true;

const book1 = {
	title,
	author,
	pages,
	language,
	available,
};

const book2 = {
	title,
	author,
	pages,
	language,
	available,
};

function isObjectEqual(obj1, obj2) {
	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	for (const key in obj2) {
		if (obj2[key] !== obj1[key]) {
			return false;
		}
	}
	return true;
}

console.log(isObjectEqual(book1, book2));

// Herança
console.log("=========== Herança ===========");

const functionalLanguage = {
	paradigm: "Functional",
}

const scheme = {
	name: "Scheme",
	year: 1975,
}
Object.setPrototypeOf(scheme, functionalLanguage)

const javascript = {
	name: "JavaScript",
	year: 1995,
	paradigm: "OO",
}
Object.setPrototypeOf(javascript, functionalLanguage)

// for (const key in scheme) {
// 	console.log(key, scheme.hasOwnProperty(key))
// }

// const haskell = Object.create(functionalLanguage, {
// 	name: { value: "Haskell" },
// 	year: { value: 1990 },
// })

// console.log(haskell.paradigm)


const java = Object.create({})
Object.assign(java, functionalLanguage, { 
	name: "Java", 
	year: 1995 
},{ 
	paradigm: "OO" 
})

// console.log(Object.keys(java))
// console.log(Object.values(java))
// console.log(Object.entries(java))

const python = {}
Object.defineProperty(python, "name", {
	value: "Python",
	writable: false,
	enumerable: false,
	configurable: false,
})

python.name = "Python 3"

const ruby = {
	name: "Ruby",
	year: 1995,
	paradigm: "OO",
}
Object.seal(ruby)

ruby.author = "Yukihiro Matsumoto"
ruby.year = 500
delete ruby.year

console.log(ruby)

console.log(Object.isExtensible(ruby))


console.log('===============');
const valentim = {}

Object.assign(valentim, javascript, {
	valentim: "koniarski"
})

Object.setPrototypeOf(valentim, javascript)


console.log(valentim.valentim.valueOf())

