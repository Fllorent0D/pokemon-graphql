import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateOrConnectWithoutPokemonInput } from './pokemon-types-create-or-connect-without-pokemon.input';
import { pokemon_typesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-types-upsert-with-where-unique-without-pokemon.input';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { pokemon_typesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-types-update-with-where-unique-without-pokemon.input';
import { pokemon_typesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-types-update-many-with-where-without-pokemon.input';
import { pokemon_typesScalarWhereInput } from './pokemon-types-scalar-where.input';

@InputType()
export class pokemon_typesUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_typesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesCreateWithoutPokemonInput)
    create?: Array<pokemon_typesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_typesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_typesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_typesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_typesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    set?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    disconnect?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    delete?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    connect?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_typesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_typesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_typesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_typesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_typesScalarWhereInput)
    deleteMany?: Array<pokemon_typesScalarWhereInput>;
}
