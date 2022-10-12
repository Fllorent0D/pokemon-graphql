import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput } from './items-create-without-pokemon-evolution-items-topokemon-evolution-trigger-item-id.input';

@InputType()
export class itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput, {nullable:false})
    @Type(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput)
    create!: itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput;
}
