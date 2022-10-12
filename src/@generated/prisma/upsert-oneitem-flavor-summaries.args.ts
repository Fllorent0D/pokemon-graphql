import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesWhereUniqueInput } from '../item-flavor-summaries/item-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateInput } from '../item-flavor-summaries/item-flavor-summaries-create.input';
import { item_flavor_summariesUpdateInput } from '../item-flavor-summaries/item-flavor-summaries-update.input';

@ArgsType()
export class UpsertOneitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;

    @Field(() => item_flavor_summariesCreateInput, {nullable:false})
    @Type(() => item_flavor_summariesCreateInput)
    create!: item_flavor_summariesCreateInput;

    @Field(() => item_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateInput)
    update!: item_flavor_summariesUpdateInput;
}
