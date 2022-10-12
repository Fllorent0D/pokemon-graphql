import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateWithoutPokemon_evolutionInput } from './evolution-triggers-create-without-pokemon-evolution.input';

@InputType()
export class evolution_triggersCreateOrConnectWithoutPokemon_evolutionInput {

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:false})
    @Type(() => evolution_triggersWhereUniqueInput)
    where!: evolution_triggersWhereUniqueInput;

    @Field(() => evolution_triggersCreateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => evolution_triggersCreateWithoutPokemon_evolutionInput)
    create!: evolution_triggersCreateWithoutPokemon_evolutionInput;
}
