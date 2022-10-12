import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsUpdateInput } from './items-update.input';
import { Type } from 'class-transformer';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@ArgsType()
export class UpdateOneitemsArgs {

    @Field(() => itemsUpdateInput, {nullable:false})
    @Type(() => itemsUpdateInput)
    data!: itemsUpdateInput;

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;
}
