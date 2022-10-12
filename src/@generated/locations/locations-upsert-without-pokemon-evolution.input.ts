import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsUpdateWithoutPokemon_evolutionInput } from './locations-update-without-pokemon-evolution.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutPokemon_evolutionInput } from './locations-create-without-pokemon-evolution.input';

@InputType()
export class locationsUpsertWithoutPokemon_evolutionInput {

    @Field(() => locationsUpdateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => locationsUpdateWithoutPokemon_evolutionInput)
    update!: locationsUpdateWithoutPokemon_evolutionInput;

    @Field(() => locationsCreateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => locationsCreateWithoutPokemon_evolutionInput)
    create!: locationsCreateWithoutPokemon_evolutionInput;
}
