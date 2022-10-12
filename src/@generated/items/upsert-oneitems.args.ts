import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateInput } from './items-create.input';
import { itemsUpdateInput } from './items-update.input';

@ArgsType()
export class UpsertOneitemsArgs {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateInput, {nullable:false})
    @Type(() => itemsCreateInput)
    create!: itemsCreateInput;

    @Field(() => itemsUpdateInput, {nullable:false})
    @Type(() => itemsUpdateInput)
    update!: itemsUpdateInput;
}
