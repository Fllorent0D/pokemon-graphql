import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesScalarWhereInput } from './move-flavor-summaries-scalar-where.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesUpdateManyMutationInput } from './move-flavor-summaries-update-many-mutation.input';

@InputType()
export class move_flavor_summariesUpdateManyWithWhereWithoutMovesInput {

    @Field(() => move_flavor_summariesScalarWhereInput, {nullable:false})
    @Type(() => move_flavor_summariesScalarWhereInput)
    where!: move_flavor_summariesScalarWhereInput;

    @Field(() => move_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flavor_summariesUpdateManyMutationInput)
    data!: move_flavor_summariesUpdateManyMutationInput;
}
