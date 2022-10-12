import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateWithoutMovesInput } from './pokemon-evolution-create-without-moves.input';

@InputType()
export class pokemon_evolutionCreateOrConnectWithoutMovesInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateWithoutMovesInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutMovesInput)
    create!: pokemon_evolutionCreateWithoutMovesInput;
}
