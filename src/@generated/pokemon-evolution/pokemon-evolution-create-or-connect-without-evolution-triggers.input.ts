import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateWithoutEvolution_triggersInput } from './pokemon-evolution-create-without-evolution-triggers.input';

@InputType()
export class pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateWithoutEvolution_triggersInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutEvolution_triggersInput)
    create!: pokemon_evolutionCreateWithoutEvolution_triggersInput;
}
