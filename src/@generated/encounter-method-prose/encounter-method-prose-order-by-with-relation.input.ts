import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { encounter_methodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';

@InputType()
export class encounter_method_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => encounter_methodsOrderByWithRelationInput, {nullable:true})
    encounter_methods?: encounter_methodsOrderByWithRelationInput;
}
