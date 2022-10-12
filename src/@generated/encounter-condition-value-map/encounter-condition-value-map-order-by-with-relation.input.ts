import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_valuesOrderByWithRelationInput } from '../encounter-condition-values/encounter-condition-values-order-by-with-relation.input';
import { encountersOrderByWithRelationInput } from '../encounters/encounters-order-by-with-relation.input';

@InputType()
export class encounter_condition_value_mapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: keyof typeof SortOrder;

    @Field(() => encounter_condition_valuesOrderByWithRelationInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesOrderByWithRelationInput;

    @Field(() => encountersOrderByWithRelationInput, {nullable:true})
    encounters?: encountersOrderByWithRelationInput;
}
