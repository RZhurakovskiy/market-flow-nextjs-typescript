export interface ISuppliers {
	id: string
	companyName: string // Название компании
	innKpp: string // ИНН/КПП
	legalAddress: string // Юридический адрес
	contactPerson: string // Контактное лицо
	phone: string // Телефон
	email: string // Email
	productType: string // Тип продукции
	minOrderAmount?: number // Минимальная сумма заказа (необязательное поле)
	deliveryTime?: string // Сроки доставки (необязательное поле)
	paymentMethods?: string[] // Способы оплаты (множественный выбор, необязательное поле)
	bankDetails: string // Банковские реквизиты
	licenses?: string[] // Лицензии (необязательное поле, может быть массивом файлов или строк)
	notes?: string // Примечания (необязательное поле)
}
