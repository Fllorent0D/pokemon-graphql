import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesCreateWithoutPokemon_speciesInput } from './pokemon-shapes-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-shapes-create-or-connect-without-pokemon-species.input';
import { pokemon_shapesUpsertWithoutPokemon_speciesInput } from './pokemon-shapes-upsert-without-pokemon-species.input';
import { pokemon_shapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { pokemon_shapesUpdateWithoutPokemon_speciesInput } from './pokemon-shapes-update-without-pokemon-species.input';

@InputType()
export class pokemon_shapesUpdateOneRequiredWithoutPokemon_speciesNestedInput {

    @Field(() => pokemon_shapesCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_shapesCreateWithoutPokemon_speciesInput)
    create?: pokemon_shapesCreateWithoutPokemon_speciesInput;

    @Field(() => pokemon_shapesCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_shapesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: pokemon_shapesCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => pokemon_shapesUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_shapesUpsertWithoutPokemon_speciesInput)
    upsert?: pokemon_shapesUpsertWithoutPokemon_speciesInput;

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_shapesWhereUniqueInput)
    connect?: pokemon_shapesWhereUniqueInput;

    @Field(() => pokemon_shapesUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_shapesUpdateWithoutPokemon_speciesInput)
    update?: pokemon_shapesUpdateWithoutPokemon_speciesInput;
}
