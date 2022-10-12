import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_formsOrderByWithRelationInput } from '../pokemon-forms/pokemon-forms-order-by-with-relation.input';

@InputType()
export class pokemon_form_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_formsOrderByWithRelationInput, {nullable:true})
    pokemon_forms?: pokemon_formsOrderByWithRelationInput;
}
