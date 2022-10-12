import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesUpdateInput } from '../move-flavor-summaries/move-flavor-summaries-update.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesWhereUniqueInput } from '../move-flavor-summaries/move-flavor-summaries-where-unique.input';

@ArgsType()
export class UpdateOnemoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => move_flavor_summariesUpdateInput)
    data!: move_flavor_summariesUpdateInput;

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    where!: move_flavor_summariesWhereUniqueInput;
}
