import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesScalarWhereInput } from './item-flavor-summaries-scalar-where.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesUpdateManyMutationInput } from './item-flavor-summaries-update-many-mutation.input';

@InputType()
export class item_flavor_summariesUpdateManyWithWhereWithoutItemsInput {

    @Field(() => item_flavor_summariesScalarWhereInput, {nullable:false})
    @Type(() => item_flavor_summariesScalarWhereInput)
    where!: item_flavor_summariesScalarWhereInput;

    @Field(() => item_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateManyMutationInput)
    data!: item_flavor_summariesUpdateManyMutationInput;
}
