import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesWhereUniqueInput } from '../item-pocket-names/item-pocket-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateInput } from '../item-pocket-names/item-pocket-names-create.input';
import { item_pocket_namesUpdateInput } from '../item-pocket-names/item-pocket-names-update.input';

@ArgsType()
export class UpsertOneitemPocketNamesArgs {

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;

    @Field(() => item_pocket_namesCreateInput, {nullable:false})
    @Type(() => item_pocket_namesCreateInput)
    create!: item_pocket_namesCreateInput;

    @Field(() => item_pocket_namesUpdateInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateInput)
    update!: item_pocket_namesUpdateInput;
}
