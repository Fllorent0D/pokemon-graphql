import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_methodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { encountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';

@InputType()
export class encounter_slotsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => encounter_methodsOrderByWithRelationInput, {nullable:true})
    encounter_methods?: encounter_methodsOrderByWithRelationInput;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => encountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: encountersOrderByRelationAggregateInput;
}
