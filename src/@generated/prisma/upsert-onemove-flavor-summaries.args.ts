import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesWhereUniqueInput } from '../move-flavor-summaries/move-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesCreateInput } from '../move-flavor-summaries/move-flavor-summaries-create.input';
import { move_flavor_summariesUpdateInput } from '../move-flavor-summaries/move-flavor-summaries-update.input';

@ArgsType()
export class UpsertOnemoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    where!: move_flavor_summariesWhereUniqueInput;

    @Field(() => move_flavor_summariesCreateInput, {nullable:false})
    @Type(() => move_flavor_summariesCreateInput)
    create!: move_flavor_summariesCreateInput;

    @Field(() => move_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => move_flavor_summariesUpdateInput)
    update!: move_flavor_summariesUpdateInput;
}
