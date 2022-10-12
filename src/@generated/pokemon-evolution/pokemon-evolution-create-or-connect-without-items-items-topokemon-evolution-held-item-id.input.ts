import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-create-without-items-items-topokemon-evolution-held-item-id.input';

@InputType()
export class pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_held_item_idInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    create!: pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput;
}
