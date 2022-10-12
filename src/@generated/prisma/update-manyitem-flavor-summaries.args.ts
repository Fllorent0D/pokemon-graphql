import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesUpdateManyMutationInput } from '../item-flavor-summaries/item-flavor-summaries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesWhereInput } from '../item-flavor-summaries/item-flavor-summaries-where.input';

@ArgsType()
export class UpdateManyitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateManyMutationInput)
    data!: item_flavor_summariesUpdateManyMutationInput;

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    @Type(() => item_flavor_summariesWhereInput)
    where?: item_flavor_summariesWhereInput;
}
