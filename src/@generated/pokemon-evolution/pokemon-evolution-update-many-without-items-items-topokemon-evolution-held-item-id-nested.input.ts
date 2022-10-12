import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-create-without-items-items-topokemon-evolution-held-item-id.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-create-or-connect-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionUpsertWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-upsert-with-where-unique-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { pokemon_evolutionUpdateWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-update-with-where-unique-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionUpdateManyWithWhereWithoutItems_itemsTopokemon_evolution_held_item_idInput } from './pokemon-evolution-update-many-with-where-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput {

    @Field(() => [pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    create?: Array<pokemon_evolutionCreateWithoutItems_itemsTopokemon_evolution_held_item_idInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_held_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutItems_itemsTopokemon_evolution_held_item_idInput>;

    @Field(() => [pokemon_evolutionUpsertWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionUpsertWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    upsert?: Array<pokemon_evolutionUpsertWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    set?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    disconnect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    delete?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionUpdateWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    update?: Array<pokemon_evolutionUpdateWithWhereUniqueWithoutItems_itemsTopokemon_evolution_held_item_idInput>;

    @Field(() => [pokemon_evolutionUpdateManyWithWhereWithoutItems_itemsTopokemon_evolution_held_item_idInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateManyWithWhereWithoutItems_itemsTopokemon_evolution_held_item_idInput)
    updateMany?: Array<pokemon_evolutionUpdateManyWithWhereWithoutItems_itemsTopokemon_evolution_held_item_idInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    @Type(() => pokemon_evolutionScalarWhereInput)
    deleteMany?: Array<pokemon_evolutionScalarWhereInput>;
}
