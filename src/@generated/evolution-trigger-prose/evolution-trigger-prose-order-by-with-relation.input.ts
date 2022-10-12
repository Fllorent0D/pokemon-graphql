import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { evolution_triggersOrderByWithRelationInput } from '../evolution-triggers/evolution-triggers-order-by-with-relation.input';

@InputType()
export class evolution_trigger_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => evolution_triggersOrderByWithRelationInput, {nullable:true})
    evolution_triggers?: evolution_triggersOrderByWithRelationInput;
}
