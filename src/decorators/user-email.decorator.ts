import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const UserEmail = createParamDecorator(
    (dara: unknown, ctx: ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();

        return request.user;
    }
)