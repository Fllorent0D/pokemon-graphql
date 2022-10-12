import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berriesOrderByRelationAggregateInput } from '../berries/berries-order-by-relation-aggregate.input';
import { berry_firmness_namesOrderByRelationAggregateInput } from '../berry-firmness-names/berry-firmness-names-order-by-relation-aggregate.input';

@InputType()
export class berry_firmnessOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => berriesOrderByRelationAggregateInput, {nullable:true})
    berries?: berriesOrderByRelationAggregateInput;

    @Field(() => berry_firmness_namesOrderByRelationAggregateInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesOrderByRelationAggregateInput;
}
