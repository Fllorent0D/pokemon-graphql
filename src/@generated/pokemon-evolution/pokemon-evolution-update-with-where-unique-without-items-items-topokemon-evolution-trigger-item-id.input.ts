import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput } from './pokemon-evolution-update-without-items-items-topokemon-evolution-trigger-item-id.input';

@InputType()
export class pokemon_evolutionUpdateWithWhereUniqueWithoutItems_itemsTopokemon_evolution_trigger_item_idInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput)
    data!: pokemon_evolutionUpdateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput;
}
