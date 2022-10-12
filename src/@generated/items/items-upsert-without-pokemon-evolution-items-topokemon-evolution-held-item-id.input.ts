import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-update-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-create-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';

@InputType()
export class itemsUpsertWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput {

    @Field(() => itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:false})
    @Type(() => itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    update!: itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:false})
    @Type(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    create!: itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;
}
