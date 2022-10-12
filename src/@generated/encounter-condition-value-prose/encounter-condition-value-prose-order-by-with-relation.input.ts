import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { encounter_condition_valuesOrderByWithRelationInput } from '../encounter-condition-values/encounter-condition-values-order-by-with-relation.input';

@InputType()
export class encounter_condition_value_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => encounter_condition_valuesOrderByWithRelationInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesOrderByWithRelationInput;
}
