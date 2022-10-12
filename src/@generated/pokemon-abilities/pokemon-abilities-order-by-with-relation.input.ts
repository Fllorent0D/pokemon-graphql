import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { abilitiesOrderByWithRelationInput } from '../abilities/abilities-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';

@InputType()
export class pokemon_abilitiesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_dream?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => abilitiesOrderByWithRelationInput, {nullable:true})
    abilities?: abilitiesOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;
}
