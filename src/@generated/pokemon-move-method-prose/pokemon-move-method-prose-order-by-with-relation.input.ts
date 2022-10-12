import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_move_methodsOrderByWithRelationInput } from '../pokemon-move-methods/pokemon-move-methods-order-by-with-relation.input';

@InputType()
export class pokemon_move_method_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_move_methodsOrderByWithRelationInput, {nullable:true})
    pokemon_move_methods?: pokemon_move_methodsOrderByWithRelationInput;
}
