import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from '../item-names/item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesCreateInput } from '../item-names/item-names-create.input';
import { item_namesUpdateInput } from '../item-names/item-names-update.input';

@ArgsType()
export class UpsertOneitemNamesArgs {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesCreateInput, {nullable:false})
    @Type(() => item_namesCreateInput)
    create!: item_namesCreateInput;

    @Field(() => item_namesUpdateInput, {nullable:false})
    @Type(() => item_namesUpdateInput)
    update!: item_namesUpdateInput;
}
