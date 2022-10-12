import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutEvolution_triggersInput } from './pokemon-evolution-update-without-evolution-triggers.input';

@InputType()
export class pokemon_evolutionUpdateWithWhereUniqueWithoutEvolution_triggersInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutEvolution_triggersInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutEvolution_triggersInput)
    data!: pokemon_evolutionUpdateWithoutEvolution_triggersInput;
}
