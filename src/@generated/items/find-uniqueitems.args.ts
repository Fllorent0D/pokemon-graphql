import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueitemsArgs {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;
}
