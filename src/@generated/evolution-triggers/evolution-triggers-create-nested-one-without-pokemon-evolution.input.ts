import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersCreateWithoutPokemon_evolutionInput } from './evolution-triggers-create-without-pokemon-evolution.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateOrConnectWithoutPokemon_evolutionInput } from './evolution-triggers-create-or-connect-without-pokemon-evolution.input';
import { evolution_triggersWhereUniqueInput } from './evolution-triggers-where-unique.input';

@InputType()
export class evolution_triggersCreateNestedOneWithoutPokemon_evolutionInput {

    @Field(() => evolution_triggersCreateWithoutPokemon_evolutionInput, {nullable:true})
    @Type(() => evolution_triggersCreateWithoutPokemon_evolutionInput)
    create?: evolution_triggersCreateWithoutPokemon_evolutionInput;

    @Field(() => evolution_triggersCreateOrConnectWithoutPokemon_evolutionInput, {nullable:true})
    @Type(() => evolution_triggersCreateOrConnectWithoutPokemon_evolutionInput)
    connectOrCreate?: evolution_triggersCreateOrConnectWithoutPokemon_evolutionInput;

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:true})
    @Type(() => evolution_triggersWhereUniqueInput)
    connect?: evolution_triggersWhereUniqueInput;
}
