/**
 * @swagger
 * components:
 *   schemas:
 *     Position:
 *       type: object
 *       properties:
 *         ticker:
 *           type: string
 *         long:
 *           type: number
 *         short:
 *           type: number
 *         longCostBasis:
 *           type: number
 *         shortCostBasis:
 *           type: number
 *         shortMarginUsed:
 *           type: number
 * 
 *     RealizedGain:
 *       type: object
 *       properties:
 *         ticker:
 *           type: string
 *         long:
 *           type: number
 *         short:
 *           type: number
 * 
 *     Portfolio:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         initialCapital:
 *           type: number
 *         currentValue:
 *           type: number
 *         cash:
 *           type: number
 *         marginUsed:
 *           type: number
 *         positions:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Position'
 *         realizedGains:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/RealizedGain'
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 * 
 *     Trade:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         portfolioId:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *         ticker:
 *           type: string
 *         action:
 *           type: string
 *           enum: [buy, sell, short, cover]
 *         quantity:
 *           type: number
 *         price:
 *           type: number
 *         realizedGain:
 *           type: number
 *         metadata:
 *           type: object
 *           additionalProperties: true
 */ 