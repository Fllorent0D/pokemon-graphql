import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateWithoutPokemon_habitatsInput } from './pokemon-habitat-names-create-without-pokemon-habitats.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput } from './pokemon-habitat-names-create-or-connect-without-pokemon-habitats.input';
import { pokemon_habitat_namesUpsertWithWhereUniqueWithoutPokemon_habitatsInput } from './pokemon-habitat-names-upsert-with-where-unique-without-pokemon-habitats.input';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';
import { pokemon_habitat_namesUpdateWithWhereUniqueWithoutPokemon_habitatsInput } from './pokemon-habitat-names-update-with-where-unique-without-pokemon-habitats.input';
import { pokemon_habitat_namesUpdateManyWithWhereWithoutPokemon_habitatsInput } from './pokemon-habitat-names-update-many-with-where-without-pokemon-habitats.input';
import { pokemon_habitat_namesScalarWhereInput } from './pokemon-habitat-names-scalar-where.input';

@InputType()
export class pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput {

    @Field(() => [pokemon_habitat_namesCreateWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateWithoutPokemon_habitatsInput)
    create?: Array<pokemon_habitat_namesCreateWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput)
    connectOrCreate?: Array<pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesUpsertWithWhereUniqueWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpsertWithWhereUniqueWithoutPokemon_habitatsInput)
    upsert?: Array<pokemon_habitat_namesUpsertWithWhereUniqueWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    set?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    disconnect?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    delete?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    connect?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesUpdateWithWhereUniqueWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpdateWithWhereUniqueWithoutPokemon_habitatsInput)
    update?: Array<pokemon_habitat_namesUpdateWithWhereUniqueWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesUpdateManyWithWhereWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpdateManyWithWhereWithoutPokemon_habitatsInput)
    updateMany?: Array<pokemon_habitat_namesUpdateManyWithWhereWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_habitat_namesScalarWhereInput)
    deleteMany?: Array<pokemon_habitat_namesScalarWhereInput>;
}
