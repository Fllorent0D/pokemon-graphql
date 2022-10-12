import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokeathlon_statsOrderByWithRelationInput } from '../pokeathlon-stats/pokeathlon-stats-order-by-with-relation.input';
import { pokemon_formsOrderByWithRelationInput } from '../pokemon-forms/pokemon-forms-order-by-with-relation.input';

@InputType()
export class pokemon_form_pokeathlon_statsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maximum_stat?: keyof typeof SortOrder;

    @Field(() => pokeathlon_statsOrderByWithRelationInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsOrderByWithRelationInput;

    @Field(() => pokemon_formsOrderByWithRelationInput, {nullable:true})
    pokemon_forms?: pokemon_formsOrderByWithRelationInput;
}
