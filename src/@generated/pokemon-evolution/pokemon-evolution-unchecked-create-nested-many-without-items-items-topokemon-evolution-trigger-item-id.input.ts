import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput } from './pokemon-evolution-create-without-items-items-topokemon-evolution-trigger-item-id.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_trigger_item_idInput } from './pokemon-evolution-create-or-connect-without-items-items-topokemon-evolution-trigger-item-id.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput {

    @Field(() => [pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput)
    create?: Array<pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_trigger_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_trigger_item_idInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_trigger_item_idInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;
}
