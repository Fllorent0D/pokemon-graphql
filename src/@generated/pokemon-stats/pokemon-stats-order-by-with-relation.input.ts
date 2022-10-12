import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { statsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';

@InputType()
export class pokemon_statsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effort?: keyof typeof SortOrder;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats?: statsOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;
}
