import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateOrConnectWithoutPokemonInput } from './pokemon-abilities-create-or-connect-without-pokemon.input';
import { pokemon_abilitiesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-abilities-upsert-with-where-unique-without-pokemon.input';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { pokemon_abilitiesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-abilities-update-with-where-unique-without-pokemon.input';
import { pokemon_abilitiesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-abilities-update-many-with-where-without-pokemon.input';
import { pokemon_abilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';

@InputType()
export class pokemon_abilitiesUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_abilitiesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateWithoutPokemonInput)
    create?: Array<pokemon_abilitiesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_abilitiesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_abilitiesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    set?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    disconnect?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    delete?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    connect?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_abilitiesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_abilitiesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_abilitiesScalarWhereInput)
    deleteMany?: Array<pokemon_abilitiesScalarWhereInput>;
}
