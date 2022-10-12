import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyregionsArgs {

    @Field(() => regionsWhereInput, {nullable:true})
    @Type(() => regionsWhereInput)
    where?: regionsWhereInput;
}
