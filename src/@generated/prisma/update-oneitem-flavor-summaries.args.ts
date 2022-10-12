import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesUpdateInput } from '../item-flavor-summaries/item-flavor-summaries-update.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesWhereUniqueInput } from '../item-flavor-summaries/item-flavor-summaries-where-unique.input';

@ArgsType()
export class UpdateOneitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateInput)
    data!: item_flavor_summariesUpdateInput;

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;
}
