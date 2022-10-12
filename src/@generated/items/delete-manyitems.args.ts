import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemsArgs {

    @Field(() => itemsWhereInput, {nullable:true})
    @Type(() => itemsWhereInput)
    where?: itemsWhereInput;
}
