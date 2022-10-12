import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesUpdateManyMutationInput } from '../move-flavor-summaries/move-flavor-summaries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesWhereInput } from '../move-flavor-summaries/move-flavor-summaries-where.input';

@ArgsType()
export class UpdateManymoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flavor_summariesUpdateManyMutationInput)
    data!: move_flavor_summariesUpdateManyMutationInput;

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    @Type(() => move_flavor_summariesWhereInput)
    where?: move_flavor_summariesWhereInput;
}
