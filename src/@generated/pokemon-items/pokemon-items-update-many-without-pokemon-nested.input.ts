import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutPokemonInput } from './pokemon-items-create-or-connect-without-pokemon.input';
import { pokemon_itemsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-items-upsert-with-where-unique-without-pokemon.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { pokemon_itemsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-items-update-with-where-unique-without-pokemon.input';
import { pokemon_itemsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-items-update-many-with-where-without-pokemon.input';
import { pokemon_itemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class pokemon_itemsUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_itemsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutPokemonInput)
    create?: Array<pokemon_itemsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_itemsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_itemsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    set?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    disconnect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    delete?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_itemsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_itemsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_itemsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_itemsScalarWhereInput)
    deleteMany?: Array<pokemon_itemsScalarWhereInput>;
}
