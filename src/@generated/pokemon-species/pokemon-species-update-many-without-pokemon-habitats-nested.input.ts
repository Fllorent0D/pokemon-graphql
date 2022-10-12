import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_habitatsInput } from './pokemon-species-create-without-pokemon-habitats.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput } from './pokemon-species-create-or-connect-without-pokemon-habitats.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_habitatsInput } from './pokemon-species-upsert-with-where-unique-without-pokemon-habitats.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_habitatsInput } from './pokemon-species-update-with-where-unique-without-pokemon-habitats.input';
import { pokemon_speciesUpdateManyWithWhereWithoutPokemon_habitatsInput } from './pokemon-species-update-many-with-where-without-pokemon-habitats.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUpdateManyWithoutPokemon_habitatsNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_habitatsInput)
    create?: Array<pokemon_speciesCreateWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_habitatsInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    set?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    disconnect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    delete?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_habitatsInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutPokemon_habitatsInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
