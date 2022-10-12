import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersUpdateWithoutPokemon_evolutionInput } from './evolution-triggers-update-without-pokemon-evolution.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateWithoutPokemon_evolutionInput } from './evolution-triggers-create-without-pokemon-evolution.input';

@InputType()
export class evolution_triggersUpsertWithoutPokemon_evolutionInput {

    @Field(() => evolution_triggersUpdateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => evolution_triggersUpdateWithoutPokemon_evolutionInput)
    update!: evolution_triggersUpdateWithoutPokemon_evolutionInput;

    @Field(() => evolution_triggersCreateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => evolution_triggersCreateWithoutPokemon_evolutionInput)
    create!: evolution_triggersCreateWithoutPokemon_evolutionInput;
}
