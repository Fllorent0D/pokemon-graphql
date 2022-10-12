import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-create-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-create-or-connect-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { itemsUpsertWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-upsert-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from './items-update-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';

@InputType()
export class itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idNestedInput {

    @Field(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    create?: itemsCreateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    connectOrCreate?: itemsCreateOrConnectWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => itemsUpsertWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsUpsertWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    upsert?: itemsUpsertWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    @Type(() => itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput)
    update?: itemsUpdateWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;
}
