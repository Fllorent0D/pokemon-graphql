import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateOrConnectWithoutPokemonInput } from './pokemon-stats-create-or-connect-without-pokemon.input';
import { pokemon_statsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-stats-upsert-with-where-unique-without-pokemon.input';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { pokemon_statsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-stats-update-with-where-unique-without-pokemon.input';
import { pokemon_statsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-stats-update-many-with-where-without-pokemon.input';
import { pokemon_statsScalarWhereInput } from './pokemon-stats-scalar-where.input';

@InputType()
export class pokemon_statsUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_statsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsCreateWithoutPokemonInput)
    create?: Array<pokemon_statsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_statsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_statsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_statsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_statsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    set?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    disconnect?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    delete?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    connect?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_statsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_statsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_statsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_statsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_statsScalarWhereInput)
    deleteMany?: Array<pokemon_statsScalarWhereInput>;
}
