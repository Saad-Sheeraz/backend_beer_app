declare namespace Express {
    export interface Request {
        user?: JwtPayload;  // Optional user property, type it as JwtPayload
    }
}