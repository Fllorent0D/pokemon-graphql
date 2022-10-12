import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-create-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-create-or-connect-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput {

    @Field(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    create?: itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    connectOrCreate?: itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
