import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutPokemon_typesInput } from './types-update-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutPokemon_typesInput } from './types-create-without-pokemon-types.input';

@InputType()
export class typesUpsertWithoutPokemon_typesInput {

    @Field(() => typesUpdateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => typesUpdateWithoutPokemon_typesInput)
    update!: typesUpdateWithoutPokemon_typesInput;

    @Field(() => typesCreateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => typesCreateWithoutPokemon_typesInput)
    create!: typesCreateWithoutPokemon_typesInput;
}
